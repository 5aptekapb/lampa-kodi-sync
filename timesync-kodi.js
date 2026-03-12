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
        } catch (e) {
            console.error('[Kodi Plugin] Require error:', e);
        }
    }

    if (!isWindows || !node_cp || !node_http) {
        console.log('[Kodi Plugin] Не Windows або немає node_cp/http');
        return;
    }

    var NODE_EXE_PATH = 'C:\\Program Files\\nodejs\\node.exe'; // перевір і зміни якщо потрібно
    var PROXY_SCRIPT_PATH = 'C:\\lampa-plugins\\kodi-proxy.js';
    var PROXY_URL = 'http://localhost:8081';

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

    function stopPolling() {
        if (pollingInterval) clearInterval(pollingInterval);
        pollingInterval = null;
        if (proxyProcess) {
            try { proxyProcess.kill(); } catch (err) {}
            proxyProcess = null;
        }
    }

    async function pollKodiViaProxy() {
        try {
            const response = await fetch(PROXY_URL);
            if (!response.ok) {
                console.log('[Kodi Plugin] Proxy не OK:', response.status);
                return;
            }

            const data = await response.text();
            console.log('[Kodi Plugin] Proxy data:', data.trim());

            const posMatch = data.match(/position:(\d{2}:\d{2}:\d{2})/);
            const durMatch = data.match(/duration:(\d{2}:\d{2}:\d{2})/);

            if (posMatch && posMatch[1]) {
                const curSec = timeToSeconds(posMatch[1]);
                const durSec = durMatch ? timeToSeconds(durMatch[1]) : 0;

                if (curSec > 0 && currentTimeline) {
                    currentTimeline.time = curSec;
                    if (durSec > 0) {
                        currentTimeline.duration = durSec;
                        currentTimeline.percent = (curSec / durSec) * 100;
                    }
                    Lampa.Timeline.update(currentTimeline);
                    console.log('[Kodi Plugin] Update timeline:', curSec);
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

    function openVideoInKodi(url, startSec) {
        const openBody = JSON.stringify({
            jsonrpc: "2.0",
            method: "Player.Open",
            params: { item: { file: url } },
            id: 1
        });

        const openReq = node_http.request({
            hostname: '127.0.0.1', port: 8080, path: '/jsonrpc', method: 'POST',
            headers: {'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(openBody)}
        }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                console.log('[Kodi Plugin] Open response:', data);
                if (startSec > 10) {
                    console.log('[Kodi Plugin] Планую seek на', startSec, 'сек через 30 сек');
                    setTimeout(() => {
                        seekInKodi(startSec);
                        setTimeout(() => seekInKodi(startSec), 8000); // повтор через 8 сек
                        setTimeout(() => seekInKodi(startSec), 16000); // ще раз
                    }, 30000); // великий таймаут
                }
            });
        });
        openReq.on('error', (err) => {
            console.error('[Kodi Plugin] Open error:', err.message);
        });
        openReq.write(openBody);
        openReq.end();
    }

    function seekInKodi(seconds) {
        const seekBody = JSON.stringify({
            jsonrpc: "2.0",
            method: "Player.Seek",
            params: {
                playerid: 0,
                value: { seconds: Math.floor(seconds) }
            },
            id: 1
        });

        const seekReq = node_http.request({
            hostname: '127.0.0.1', port: 8080, path: '/jsonrpc', method: 'POST',
            headers: {'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(seekBody)}
        }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                console.log('[Kodi Plugin] Seek response:', data);
            });
        });
        seekReq.on('error', (err) => {
            console.error('[Kodi Plugin] Seek error:', err.message);
        });
        seekReq.write(seekBody);
        seekReq.end();
    }

    function initExternalPlayer() {
        Lampa.Player.play = function (data) {
            stopPolling();

            var videoUrl = data.url || data.file || "";
            if (!videoUrl) {
                console.log('[Kodi Plugin] Немає URL');
                return;
            }

            currentTimeline = data.timeline;
            var targetTimeSec = currentTimeline?.time || 0;
            console.log('[Kodi Plugin] Запуск з таймкодом:', targetTimeSec, 'URL:', videoUrl);

            try {
                proxyProcess = node_cp.spawn(NODE_EXE_PATH, [PROXY_SCRIPT_PATH], { detached: true, stdio: 'ignore' });
                if (proxyProcess.unref) proxyProcess.unref();
                console.log('[Kodi Plugin] Проксі запущено');
            } catch (err) {
                console.error('[Kodi Plugin] Помилка запуску проксі:', err);
            }

            setTimeout(function() {
                openVideoInKodi(videoUrl, targetTimeSec);
                setTimeout(startPolling, 5000);
            }, 2000);
        };
    }

    Lampa.Player.listener.follow('destroy', stopPolling);
    if (window.appready) initExternalPlayer();
    else Lampa.Listener.follow('app', (e) => { if (e.type == 'ready') initExternalPlayer(); });

})();
