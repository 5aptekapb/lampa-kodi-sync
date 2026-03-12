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

    // ── НАЛАШТУВАННЯ ── (тільки ці два рядки потрібно змінити під себе)
    var NODE_EXE_PATH    = 'C:\\Program Files\\nodejs\\node.exe';          // ← твій шлях до node.exe
    var PROXY_SCRIPT_PATH = 'C:\\lampa-plugins\\kodi-proxy.js';           // ← твій шлях до kodi-proxy.js

    var PROXY_URL = 'http://localhost:8081';
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
            if (!response.ok) throw new Error('Proxy response not OK: ' + response.status);
            
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
                throw new Error('No positionstring found in proxy response');
            }
        } catch (error) {
            failCount++;
            console.error('[Kodi Plugin] Poll error:', error.message);
            if (failCount > MAX_FAILS) stopPolling();
        }
    }

    function startPolling() {
        if (pollingInterval) clearInterval(pollingInterval);
        failCount = 0;
        pollingInterval = setInterval(pollKodiViaProxy, 2000);
        pollKodiViaProxy(); // запуск відразу
    }

    function openVideoInKodi(url, startSec) {
        const openBody = JSON.stringify({
            "jsonrpc": "2.0",
            "method": "Player.Open",
            "params": { "item": { "file": url } },
            "id": 1
        });

        const openReq = node_http.request({
            hostname: '127.0.0.1', port: 8080, path: '/jsonrpc', method: 'POST',
            headers: {'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(openBody)}
        }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                console.log('[Kodi Plugin] Player.Open відповідь:', data);
                if (startSec > 5) {
                    console.log('[Kodi Plugin] Чекаємо 4 секунди перед seek...');
                    setTimeout(() => {
                        console.log('[Kodi Plugin] Відправляємо seek на', startSec, 'секунд');
                        seekInKodi(startSec);
                    }, 4000); // збільшено до 4 секунд — зазвичай вистачає для старту потоку
                }
            });
        });
        openReq.on('error', (err) => {
            console.error('[Kodi Plugin] Kodi Open error:', err.message);
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
            hostname: '127.0.0.1', port: 8080, path: '/jsonrpc', method: 'POST',
            headers: {'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(seekBody)}
        }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                console.log('[Kodi Plugin] Seek відповідь:', data);
            });
        });
        seekReq.on('error', (err) => {
            console.error('[Kodi Plugin] Kodi Seek error:', err.message);
        });
        seekReq.write(seekBody);
        seekReq.end();
    }

    function initExternalPlayer() {
        Lampa.Player.play = function (data) {
            stopPolling(); 
            
            var videoUrl = data.url || data.file || "";
            if (!videoUrl) {
                console.warn('[Kodi Plugin] Немає URL для відтворення');
                return;
            }

            currentTimeline = data.timeline;
            var targetTimeSec = (currentTimeline && currentTimeline.time) ? currentTimeline.time : 0;
            console.log('[Kodi Plugin] Запуск відео з таймкодом:', targetTimeSec, 'секунд');

            try {
                proxyProcess = node_cp.spawn(NODE_EXE_PATH, [PROXY_SCRIPT_PATH], { 
                    detached: true, 
                    stdio: 'ignore' 
                });
                if (proxyProcess.unref) proxyProcess.unref();

                setTimeout(function() {
                    openVideoInKodi(videoUrl, targetTimeSec);
                    setTimeout(startPolling, 3000); // даємо трохи часу після відкриття
                }, 1000);
            } catch (err) {
                console.error('[Kodi Plugin] Помилка запуску проксі або Kodi:', err);
                stopPolling();
            }
        };
    }

    Lampa.Player.listener.follow('destroy', stopPolling);
    if (window.appready) initExternalPlayer();
    else Lampa.Listener.follow('app', (e) => { if (e.type == 'ready') initExternalPlayer(); });

})();
