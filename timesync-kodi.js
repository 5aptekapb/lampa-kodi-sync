(function () {
    'use strict';

    var isWindows = navigator.platform.indexOf('Win') > -1 || navigator.userAgent.indexOf('Windows') > -1;
    var req = window.require || window.nodeRequire;
    var node_cp = null;
    var node_http = null;

    if (isWindows && req) {
        try {
            node_cp = req('child_process');
            node_http = req('http');
        } catch (e) {}
    }

    if (!isWindows || !node_cp || !node_http) {
        console.log('Kodi Plugin: Запуск скасовано. Це не Windows PC середовище.');
        return;
    }

    // ── НАЛАШТУВАННЯ ──
    var NODE_EXE_PATH     = 'C:\\Program Files\\nodejs\\node.exe';          // ← ЗМІНИ НА СВІЙ
    var PROXY_SCRIPT_PATH = 'C:\\lampa-plugins\\kodi-proxy.js';            // ← ЗМІНИ НА СВІЙ
    var PROXY_URL         = 'http://localhost:8081';
    var KODI_JSONRPC      = 'http://127.0.0.1:8080/jsonrpc';

    var pollingInterval = null;
    var currentTimeline = null;
    var proxyProcess = null;

    function timeToSeconds(timeStr) {
        if (!timeStr) return 0;
        var parts = timeStr.trim().split(':').reverse();
        var seconds = 0;
        if (parts[0]) seconds += parseInt(parts[0], 10);
        if (parts[1]) seconds += parseInt(parts[1], 10) * 60;
        if (parts[2]) seconds += parseInt(parts[2], 10) * 3600;
        return seconds;
    }

    function formatKodiTime(time) {
        if (!time) return '00:00:00';
        const h = String(time.hours || 0).padStart(2, '0');
        const m = String(time.minutes || 0).padStart(2, '0');
        const s = String(time.seconds || 0).padStart(2, '0');
        return `${h}:${m}:${s}`;
    }

    function stopPolling() {
        if (pollingInterval) {
            clearInterval(pollingInterval);
            pollingInterval = null;
        }
        if (proxyProcess) {
            try { proxyProcess.kill(); } catch (err) {}
            proxyProcess = null;
        }
    }

    async function pollKodiViaProxy() {
        try {
            const response = await fetch(PROXY_URL);
            if (!response.ok) return;

            const data = await response.text();
            const posMatch = data.match(/position:(\d{2}:\d{2}:\d{2})/);
            const durMatch = data.match(/duration:(\d{2}:\d{2}:\d{2})/);

            if (posMatch && posMatch[1]) {
                const curSec = timeToSeconds(posMatch[1]);
                const durSec = durMatch ? timeToSeconds(durMatch[1]) : 0;

                if (curSec > 5 && currentTimeline) {
                    currentTimeline.time = curSec;
                    currentTimeline.duration = durSec || currentTimeline.duration || 0;
                    currentTimeline.percent = durSec ? (curSec / durSec) * 100 : 0;
                    Lampa.Timeline.update(currentTimeline);
                    Lampa.Noty.show('Таймкод з Kodi: ' + posMatch[1]);
                }
            }
        } catch (e) {
            console.error('[Kodi Plugin] Poll error:', e.message);
        }
    }

    function startPolling() {
        if (pollingInterval) clearInterval(pollingInterval);
        pollingInterval = setInterval(pollKodiViaProxy, 2000);
        pollKodiViaProxy();
    }

    function sendJsonRpc(method, params, callback) {
        const body = JSON.stringify({
            jsonrpc: "2.0",
            method: method,
            params: params,
            id: 1
        });

        const req = node_http.request({
            hostname: '127.0.0.1',
            port: 8080,
            path: '/jsonrpc',
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) }
        }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => callback(data));
        });
        req.on('error', (err) => callback(null, err));
        req.write(body);
        req.end();
    }

    function openVideoInKodi(url, startSec) {
        sendJsonRpc("Player.Open", { item: { file: url } }, (data, err) => {
            if (err) {
                console.error('[Kodi Plugin] Open error:', err);
                return;
            }
            console.log('[Kodi Plugin] Open response:', data);

            if (startSec > 10) {
                Lampa.Noty.show('Очікування буферизації (20–50 сек) для seek...');
                let attempts = 0;
                const seekTimer = setInterval(() => {
                    if (attempts >= 6) {
                        clearInterval(seekTimer);
                        Lampa.Noty.show('Seek не спрацював після 6 спроб');
                        return;
                    }
                    checkAndSeek(startSec, () => {
                        attempts++;
                    });
                }, 5000);
                setTimeout(() => clearInterval(seekTimer), 50000);
            }
        });
    }

    function checkAndSeek(seconds, onAttempt) {
        sendJsonRpc("Player.GetProperties", { playerid: 0, properties: ["speed", "time"] }, (data) => {
            try {
                const json = JSON.parse(data);
                const speed = json.result?.speed || 0;
                const curTime = json.result?.time || {};
                const curSec = timeToSeconds(formatKodiTime(curTime));

                console.log('[Kodi Plugin] Check: speed=' + speed + ', curSec≈' + curSec);

                if (speed === 1 && curSec < seconds - 10) {
                    seekInKodi(seconds);
                } else if (speed !== 1) {
                    console.log('[Kodi Plugin] Плеєр не грає ще (speed=' + speed + ')');
                } else {
                    console.log('[Kodi Plugin] Вже близько до цілі або далі');
                }
            } catch (e) {}
            onAttempt();
        });
    }

    function seekInKodi(seconds) {
        sendJsonRpc("Player.Seek", {
            playerid: 0,
            value: { seconds: Math.floor(seconds) }
        }, (data, err) => {
            if (err) {
                Lampa.Noty.show('Seek помилка: ' + err.message);
                return;
            }
            try {
                const json = JSON.parse(data);
                if (json.result && json.result.time) {
                    const newTime = formatKodiTime(json.result.time);
                    Lampa.Noty.show('Seek успіх! Перейшли на ≈ ' + newTime);
                } else if (json.error) {
                    Lampa.Noty.show('Seek помилка Kodi: ' + json.error.message);
                } else {
                    Lampa.Noty.show('Seek відповідь: ' + data.trim());
                }
            } catch (e) {
                Lampa.Noty.show('Seek відповідь (не JSON): ' + data);
            }
        });
    }

    function initExternalPlayer() {
        Lampa.Player.play = function (data) {
            stopPolling();

            var videoUrl = data.url || data.file || "";
            if (!videoUrl) return;

            currentTimeline = data.timeline;
            var targetTimeSec = currentTimeline?.time || 0;

            try {
                proxyProcess = node_cp.spawn(NODE_EXE_PATH, [PROXY_SCRIPT_PATH], { detached: true, stdio: 'ignore' });
                if (proxyProcess.unref) proxyProcess.unref();

                setTimeout(function() {
                    openVideoInKodi(videoUrl, targetTimeSec);
                    setTimeout(startPolling, 8000);
                }, 3000);
            } catch (err) {
                console.error('[Kodi Plugin] Launch error:', err);
                stopPolling();
            }
        };
    }

    Lampa.Player.listener.follow('destroy', stopPolling);
    if (window.appready) initExternalPlayer();
    else Lampa.Listener.follow('app', (e) => { if (e.type == 'ready') initExternalPlayer(); });

})();
