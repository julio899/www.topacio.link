(function(){"use strict";async function r(e){if(console.log(e,typeof e,e instanceof Array),e instanceof Array&&typeof e.reverse=="function")return await e.flatMap(a=>({open:parseFloat(a[1]),high:parseFloat(a[2]),low:parseFloat(a[3]),close:parseFloat(a[4]),value:parseFloat(a[4]),volume:parseFloat(a[5]),time:parseInt(a[6])}))}async function s({exchange:e,symbolsPairs:a,interval:o,limit:n,endTime:t,cci:f=!1}){if(a=a||"BTCUSDT",a=a.toUpperCase(),o=o&&o!==""?o:"4h",n=n&&n!==""?n:200,console.log("*cci",{cci:f}),e==="binance"){t=t&&t!=""?`endTime=${t}&`:"";const p=`https://www.binance.com/fapi/v1/continuousKlines?${t}limit=${n}&pair=${a}&contractType=PERPETUAL&interval=${o}`;return await fetch(p).then(c=>c.json()).then(async c=>{let l=await r(c);return console.log({dt:c,dataFormat:l}),l.flatMap(u=>u.close)})}console.log("searchData",{exchange:e})}self.onmessage=async e=>{var a;console.log({eventWorker:e.data,searchData:s}),((a=e==null?void 0:e.data)==null?void 0:a.name)==="searchData"&&s({exchange:"binance",symbolsPairs:"BTCUSDT",interval:"1h",limit:500}).then(o=>{console.log({response:o}),self.postMessage({name:"render",some:123})}),console.log(e.data.instanceUseMain)}})();