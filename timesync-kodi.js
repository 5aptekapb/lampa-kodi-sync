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

    var NODE_EXE_PATH = 'C:\\Program Files\\nodejs\\node.exe';   // ? ИЗМЕНИ НА СВОЙ
    var PROXY_SCRIPT_PATH = 'C:\\lampa-plugins\\kodi-proxy.js'; // ? ИЗМЕНИ НА СВОЙ
    var PROXY_URL = 'http://localhost:8080';
    var MAX_FAILS = 1;

    var pollingInterval = null;
    var currentTimeline = null;
    var failCount = 0;
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
        if (pollingInterval) {
            clearInterval(pollingInterval);
            pollingInterval = null;
            Lampa.Noty.show('Kodi: Синхронізацію зупинено');
        }
        if (proxyProcess) {
            try { proxyProcess.kill(); } catch (err) {}
            proxyProcess = null;
        }
    }

    async function pollKodiViaProxy() {
        try {
            const response = await fetch(PROXY_URL);
            if (!response.ok) throw new Error();
            
            const data = await response.text();
            const posMatch = data.match(/id="positionstring"[^>]*>\s*(.*?)\s*</i);
            const durMatch = data.match(/id="durationstring"[^>]*>\s*(.*?)\s*</i);

            if (posMatch && posMatch[1]) {
                failCount = 0;
                const curSec = timeToSeconds(posMatch[1]);
                const durSec = (durMatch && durMatch[1]) ? timeToSeconds(durMatch[1]) : 0;

                if (curSec >= 0 && currentTimeline) {
                    currentTimeline.time = curSec;
                    if (durSec > 0) {
                        currentTimeline.duration = durSec;
                        currentTimeline.percent = (curSec / durSec) * 100;
                    }
                    Lampa.Timeline.update(currentTimeline);
                }
            } else {
                throw new Error();
            }
        } catch (error) {
            failCount++;
            if (failCount > MAX_FAILS) stopPolling();
        }
    }

    function startPolling() {
        if (pollingInterval) clearInterval(pollingInterval);
        failCount = 0;
        pollingInterval = setInterval(pollKodiViaProxy, 2000);
        pollKodiViaProxy();
    }

    function openVideoInKodi(url, startSec) {
        const openBody = JSON.stringify({
            "jsonrpc": "2.0",
            "method": "Player.Open",
            "params": { "item": { "file": url } },
            "id": 1
        });

        const openReq = node_http.request({
            hostname: '127.0.0.1', port: 9090, path: '/jsonrpc', method: 'POST',
            headers: {'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(openBody)}
        }, (res) => {
            res.on('data', () => {});
            res.on('end', () => {
                if (startSec > 5) {
                    setTimeout(() => seekInKodi(startSec), 800);
                }
            });
        });
        openReq.on('error', (err) => {
            console.error('Kodi Open error:', err);
            Lampa.Noty.show('Kodi: Не вдалося відкрити відео');
        });
        openReq.write(openBody);
        openReq.end();
    }

    function seekInKodi(seconds) {
        const seekBody = JSON.stringify({
            "jsonrpc": "2.0",
            "method": "Player.Seek",
            "params": { "playerid": 1, "value": { "seconds": Math.floor(seconds) } },
            "id": 1
        });

        const seekReq = node_http.request({
            hostname: '127.0.0.1', port: 9090, path: '/jsonrpc', method: 'POST',
            headers: {'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(seekBody)}
        }, (res) => { res.on('data', () => {}); });
        seekReq.on('error', (err) => console.error('Kodi Seek error:', err));
        seekReq.write(seekBody);
        seekReq.end();
    }

    function initExternalPlayer() {
        Lampa.Player.play = function (data) {
            stopPolling(); 
            
            var videoUrl = data.url || data.file || "";
            if (!videoUrl) return;

            currentTimeline = data.timeline;
            var targetTimeSec = (currentTimeline && currentTimeline.time) ? currentTimeline.time : 0;

            try {
                proxyProcess = node_cp.spawn(NODE_EXE_PATH, [PROXY_SCRIPT_PATH], { detached: true, stdio: 'ignore' });
                if (proxyProcess.unref) proxyProcess.unref();

                setTimeout(function() {
                    openVideoInKodi(videoUrl, targetTimeSec);
                    setTimeout(startPolling, 2000);
                }, 1000);
            } catch (err) {
                console.error('Kodi launch error:', err);
                stopPolling();
            }
        };
    }

    Lampa.Player.listener.follow('destroy', stopPolling);
    if (window.appready) initExternalPlayer();
    else Lampa.Listener.follow('app', (e) => { if (e.type == 'ready') initExternalPlayer(); });

})();
