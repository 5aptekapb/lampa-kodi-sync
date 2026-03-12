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

    if (!isWindows || !node_cp || !node_http) return;

    var NODE_EXE_PATH = 'C:\\Program Files\\nodejs\\node.exe'; // ← свій
    var PROXY_SCRIPT_PATH = 'C:\\lampa-plugins\\kodi-proxy.js'; // ← свій
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
            if (!response.ok) return;

            const data = await response.text();
            const posMatch = data.match(/position:(\d{2}:\d{2}:\d{2})/);
            const durMatch = data.match(/duration:(\d{2}:\d{2}:\d{2})/);

            if (posMatch && posMatch[1]) {
                const curSec = timeToSeconds(posMatch[1]);
                const durSec = durMatch ? timeToSeconds(durMatch[1]) : 0;

                if (curSec > 5 && currentTimeline) {
                    currentTimeline.time = curSec;
                    currentTimeline.duration = durSec || currentTimeline.duration;
                    currentTimeline.percent = durSec ? (curSec / durSec) * 100 : currentTimeline.percent;
                    Lampa.Timeline.update(currentTimeline);
                    Lampa.Noty.show('Оновлено таймкод з Kodi: ' + posMatch[1]);
                }
            }
        } catch (e) {}
    }

    function startPolling() {
        if (pollingInterval) clearInterval(pollingInterval);
        pollingInterval = setInterval(pollKodiViaProxy, 1500);
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
                if (startSec > 10) {
                    Lampa.Noty.show('Чекаємо буферизацію (15–25 сек) для seek...');
                    let attempts = 0;
                    const seekTimer = setInterval(() => {
                        if (attempts >= 5) {
                            clearInterval(seekTimer);
                            Lampa.Noty.show('Seek не спрацював після 5 спроб');
                            return;
                        }
                        seekInKodi(startSec);
                        attempts++;
                    }, 4000); // кожні 4 сек, до 20 сек
                    setTimeout(() => clearInterval(seekTimer), 25000);
                }
            });
        });
        openReq.on('error', () => {});
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
                Lampa.Noty.show('Seek спроба на ' + seconds + ' сек (відповідь: ' + data.trim() + ')');
            });
        });
        seekReq.on('error', (err) => {
            Lampa.Noty.show('Seek помилка: ' + err.message);
        });
        seekReq.write(seekBody);
        seekReq.end();
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
                proxyProcess.unref?.();

                setTimeout(() => {
                    openVideoInKodi(videoUrl, targetTimeSec);
                    setTimeout(startPolling, 6000);
                }, 2000);
            } catch (err) {
                stopPolling();
            }
        };
    }

    Lampa.Player.listener.follow('destroy', stopPolling);
    if (window.appready) initExternalPlayer();
    else Lampa.Listener.follow('app', (e) => { if (e.type == 'ready') initExternalPlayer(); });

})();
