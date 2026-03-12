(function () {

'use strict';

var isWindows = navigator.platform.indexOf('Win')>-1 || navigator.userAgent.indexOf('Windows')>-1;
var req = window.require || window.nodeRequire;

var node_cp=null;
var node_http=null;

if(isWindows && req){

    try{
        node_cp=req('child_process');
        node_http=req('http');
    }catch(e){}

}

if(!isWindows || !node_cp || !node_http){

    console.log('Kodi plugin cancelled (not windows)');
    return;

}

var NODE_EXE_PATH="C:\\Program Files\\nodejs\\node.exe";
var PROXY_SCRIPT_PATH="C:\\lampa-plugins\\kodi-proxy.js";
var PROXY_URL="http://127.0.0.1:8081";

var KODI_PORT=8080;

var pollingInterval=null;
var proxyProcess=null;
var currentTimeline=null;

function timeToSeconds(timeStr){

    if(!timeStr) return 0;

    var parts=timeStr.split(':').reverse();

    var seconds=0;

    if(parts[0]) seconds+=parseInt(parts[0]);
    if(parts[1]) seconds+=parseInt(parts[1])*60;
    if(parts[2]) seconds+=parseInt(parts[2])*3600;

    return seconds;

}

function sendRpc(method,params,callback){

    const body=JSON.stringify({
        jsonrpc:"2.0",
        method:method,
        params:params,
        id:1
    });

    const r=node_http.request({

        hostname:'127.0.0.1',
        port:KODI_PORT,
        path:'/jsonrpc',
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Content-Length':Buffer.byteLength(body)
        }

    },res=>{

        let data='';

        res.on('data',c=>data+=c);

        res.on('end',()=>callback(data));

    });

    r.on('error',()=>callback(null));

    r.write(body);
    r.end();

}

function getActivePlayer(cb){

    sendRpc("Player.GetActivePlayers",{},data=>{

        try{

            const json=JSON.parse(data);

            if(json.result && json.result.length)
                cb(json.result[0].playerid);
            else
                cb(null);

        }catch(e){cb(null)}

    });

}

function seekKodi(seconds){

    getActivePlayer(pid=>{

        if(pid===null) return;

        sendRpc("Player.Seek",{

            playerid:pid,
            value:{seconds:Math.floor(seconds)}

        },()=>{});

    });

}

async function pollKodi(){

    try{

        const r=await fetch(PROXY_URL);

        const text=await r.text();

        const pos=text.match(/position:(\d\d:\d\d:\d\d)/);
        const dur=text.match(/duration:(\d\d:\d\d:\d\d)/);

        if(pos && currentTimeline){

            const cur=timeToSeconds(pos[1]);
            const durSec=dur?timeToSeconds(dur[1]):0;

            currentTimeline.time=cur;

            if(durSec){

                currentTimeline.duration=durSec;
                currentTimeline.percent=(cur/durSec)*100;

            }

            Lampa.Timeline.update(currentTimeline);

        }

    }catch(e){}

}

function startPolling(){

    if(pollingInterval)
        clearInterval(pollingInterval);

    pollingInterval=setInterval(pollKodi,2000);

}

function stopPolling(){

    if(pollingInterval)
        clearInterval(pollingInterval);

    if(proxyProcess){

        try{proxyProcess.kill()}catch(e){}

        proxyProcess=null;

    }

}

function openKodi(url,startSec){

    sendRpc("Player.Open",{

        item:{file:url}

    },()=>{

        if(startSec>10){

            setTimeout(()=>seekKodi(startSec),15000);

        }

    });

}

function initExternalPlayer(){

Lampa.Player.play=function(data){

    stopPolling();

    var url=data.url||data.file||"";

    if(!url) return;

    currentTimeline=data.timeline;

    var start=currentTimeline?currentTimeline.time:0;

    try{

        proxyProcess=node_cp.spawn(
            NODE_EXE_PATH,
            [PROXY_SCRIPT_PATH],
            {detached:true,stdio:'ignore'}
        );

        if(proxyProcess.unref)
            proxyProcess.unref();

        setTimeout(()=>{

            openKodi(url,start);

            setTimeout(startPolling,10000);

        },3000);

    }catch(e){

        stopPolling();

    }

};

}

Lampa.Player.listener.follow('destroy',stopPolling);

if(window.appready)
    initExternalPlayer();
else
    Lampa.Listener.follow('app',e=>{
        if(e.type=='ready') initExternalPlayer();
    });

})();
