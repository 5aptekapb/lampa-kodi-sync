(function(){

'use strict';

const KODI_URL = 'http://127.0.0.1:8080/jsonrpc';

let polling=null;
let timeline=null;

function rpc(method,params){

return fetch(KODI_URL,{
method:'POST',
headers:{'Content-Type':'application/json'},
body:JSON.stringify({
jsonrpc:'2.0',
method:method,
params:params,
id:1
})
}).then(r=>r.json());

}

function getPlayer(){

return rpc('Player.GetActivePlayers',{}).then(r=>{
if(r.result && r.result.length) return r.result[0].playerid;
return null;
});

}

function seek(seconds){

getPlayer().then(pid=>{

if(pid===null) return;

rpc('Player.Seek',{
playerid:pid,
value:{seconds:Math.floor(seconds)}
});

});

}

function startPolling(){

if(polling) clearInterval(polling);

polling=setInterval(()=>{

getPlayer().then(pid=>{

if(pid===null) return;

rpc('Player.GetProperties',{
playerid:pid,
properties:['time','totaltime']
}).then(r=>{

if(!r.result) return;

let t=r.result.time;
let d=r.result.totaltime;

let cur=t.hours*3600+t.minutes*60+t.seconds;
let dur=d.hours*3600+d.minutes*60+d.seconds;

if(timeline){

timeline.time=cur;
timeline.duration=dur;
timeline.percent=(cur/dur)*100;

Lampa.Timeline.update(timeline);

}

});

});

},2000);

}

function open(url,start){

rpc('Player.Open',{
item:{file:url}
}).then(()=>{

if(start>10){

setTimeout(()=>{
seek(start);
},20000);

}

});

}

function init(){

Lampa.Player.play=function(data){

let url=data.url||data.file;

if(!url) return;

timeline=data.timeline;

let start=timeline?timeline.time:0;

open(url,start);

setTimeout(startPolling,5000);

};

}

if(window.appready) init();
else Lampa.Listener.follow('app',e=>{
if(e.type==='ready') init();
});

})();
