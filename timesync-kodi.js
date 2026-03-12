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

    var NODE_EXE_PATH = 'C:\\Program Files\\nodejs\\node.exe';          // ← ЗМІНИ НА СВІЙ
    var PROXY_SCRIPT_PATH = 'C:\\lampa-plugins\\kodi-proxy.js';        // ← ЗМІНИ НА СВІЙ
    var PROXY_URL = 'http://localhost:8081';
    var MAX_FAILS = 3;

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
            // Lampa.Noty.show('Kodi: Синхронізацію зупинено');
        }
        if (proxyProcess) {
            try { proxyProcess.kill(); } catch (err) {}
            proxyProcess = null;
        }
    }

    async function pollKodiViaProxy() {
        try {
            const response = await fetch(PROXY_URL);
            if (!response.ok) throw new Error('Proxy status: ' + response.status);

            const data = await response.text();
            console.log('[Plugin] Proxy відповідь:', data.trim());

            const posMatch = data.match(/position:(\d{2}:\d{2}:\d{2})/);
            const durMatch = data.match(/duration:(\d{2}:\d{2}:\d{2})/);

            if (posMatch && posMatch[1]) {
                failCount = 0;
                const curSec = timeToSeconds(posMatch[1]);
                const durSec = durMatch ? timeToSeconds(durMatch[1]) : 0;

                console.log('[Plugin] Отримано таймкод:', curSec, '/', durSec);

                if (curSec > 0 && currentTimeline) {
                    currentTimeline.time = curSec;
                    if (durSec > 0) {
                        currentTimeline.duration = durSec;
                        currentTimeline.percent = (curSec / durSec) * 100;
                    }
                    Lampa.Timeline.update(currentTimeline);
                }
            } else {
                throw new Error('Не знайдено position/duration');
            }
        } catch (error) {
            failCount++;
            console.error('[Plugin] Poll помилка:', error.message);
            if (failCount > MAX_FAILS) stopPolling();
        }
    }

    function startPolling() {
        if (pollingInterval) clearInterval(pollingInterval);
        failCount = 0;
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
                console.log('[Plugin] Player.Open відповідь:', data);
                if (startSec > 10) {
                    console.log('[Plugin] Чекаємо 10 секунд перед seek...');
                    setTimeout(() => {
                        seekInKodi(startSec, 0);
                        setTimeout(() => seekInKodi(startSec, 1), 1500);
                    }, 10000);
                }
            });
        });
        openReq.on('error', (err) => {
            console.error('[Plugin] Open помилка:', err.message);
        });
        openReq.write(openBody);
        openReq.end();
    }

    function seekInKodi(seconds, playerId) {
        const seekBody = JSON.stringify({
            jsonrpc: "2.0",
            method: "Player.Seek",
            params: { playerid: playerId, value: { seconds: Math.floor(seconds) } },
            id: 1
        });

        const seekReq = node_http.request({
            hostname: '127.0.0.1', port: 8080, path: '/jsonrpc', method: 'POST',
            headers: {'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(seekBody)}
        }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                console.log(`[Plugin] Seek playerid ${playerId} відповідь:`, data);
            });
        });
        seekReq.on('error', (err) => {
            console.error(`[Plugin] Seek playerid ${playerId} помилка:`, err.message);
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
            var targetTimeSec = (currentTimeline && currentTimeline.time) ? currentTimeline.time : 0;
            console.log('[Plugin] Запуск з таймкодом:', targetTimeSec);

            try {
                proxyProcess = node_cp.spawn(NODE_EXE_PATH, [PROXY_SCRIPT_PATH], { detached: true, stdio: 'ignore' });
                if (proxyProcess.unref) proxyProcess.unref();

                setTimeout(function() {
                    openVideoInKodi(videoUrl, targetTimeSec);
                    setTimeout(startPolling, 4000);
                }, 1500);
            } catch (err) {
                console.error('[Plugin] Помилка запуску:', err);
                stopPolling();
            }
        };
    }

    Lampa.Player.listener.follow('destroy', stopPolling);
    if (window.appready) initExternalPlayer();
    else Lampa.Listener.follow('app', (e) => { if (e.type == 'ready') initExternalPlayer(); });

})();
