import{N as T,H as x,B as C,i as _}from"./index-Bs-421pX.js";const D="https://api.binance.com",P=new _,B=T("chart",()=>{const i=x({symbols:"BTCUSDT",temporality:"15m",exchange:"binance",pairs:[],indicators:{divergences:!1,adx:!1,macd:!1,stochastic:!1,heikinAshi:!1,cci:!1,rsi:!1,bb:!1,hma10:!1,hma20:!1,hma55:!1,hma89:!1,hma233:!1,ema10:!1,ema20:!1,ema55:!1,ema89:!1,ema100:!1,ema200:!1,ema233:!1,sma10:!1,sma20:!1,sma55:!1,sma89:!1,sma100:!1,sma200:!1,sma233:!1,psar:!1,kernelChannel:!1,srDinamic:!1},data:[],menuOpen:!1,customOption:!1}),r=C(()=>i.indicators),E=C(()=>i.symbols),y=C(()=>i.temporality),m=C(()=>i.exchange),M=C(()=>i.data),d=C(()=>i.menuOpen);async function k({symbol:n,temporality:e,cci:o}){const f=`${D}/api/v3/klines?symbol=${n}&interval=${e}`,p=await fetch(`${D}/api/v3/uiKlines?symbol=${n}&interval=${e}`).then(async a=>(await a.json()).flatMap(t=>({time:t[0],open:parseFloat(t[1]),high:parseFloat(t[2]),low:parseFloat(t[3]),close:parseFloat(t[4]),volume:parseFloat(t[5]),timeEnd:t[6],trades:t[7]}))).then(async a=>{if(a.length<o)return a;const F=a.flatMap(u=>u.close);let t=[],w=P.calcularCCI(a,o);return await P.calculoRSI(F).then(async u=>{var S,I;let c=w.length-1;for(var s=a.length-1;s>=0;s--){if(w[c]&&((S=a[s])!=null&&S.time)){if(a[s].cci=w[c],a[s].cci>100){const l="#00f5d4";a[s].color=l,a[s].borderColor=l,a[s].wickColor=l}if(a[s].cci<-100){const l="#ff006e";a[s].color=l,a[s].borderColor=l,a[s].wickColor=l}}if(u[c]&&((I=a[s])!=null&&I.time))a[s].rsi=u[c],t.push(a[s]);else break;c--}return await t.sort((l,j)=>l.time-j.time),t}),t});let v=p.length>0?p:[];return p.length===0&&(v=await fetch(f).then(async a=>(await a.json()).flatMap(t=>({time:t[0],open:parseFloat(t[1]),high:parseFloat(t[2]),low:parseFloat(t[3]),close:parseFloat(t[4]),volume:parseFloat(t[5]),timeEnd:t[6],trades:t[7]}))).then(async a=>{const F=a.flatMap(u=>u.close);let t=[],w=P.calcularCCI(a,o);return await P.calculoRSI(F).then(async u=>{var S,I;let c=w.length-1;for(var s=a.length-1;s>=0;s--){if(w[c]&&((S=a[s])!=null&&S.time)){if(a[s].cci=w[c],a[s].cci>100){const l="#00f5d4";a[s].color=l,a[s].borderColor=l,a[s].wickColor=l}if(a[s].cci<-100){const l="#ff006e";a[s].color=l,a[s].borderColor=l,a[s].wickColor=l}}if(u[c]&&((I=a[s])!=null&&I.time))a[s].rsi=u[c],t.push(a[s]);else break;c--}return await t.sort((l,j)=>l.time-j.time),t}),t})),v}async function g(){const e=await fetch("https://api.binance.com/api/v3/exchangeInfo").then(o=>o.json());return i.pairs=e.symbols,i.pairs}async function h(){const e=await fetch("https://fapi.binance.com/fapi/v1/exchangeInfo").then(o=>o.json());return i.pairs=e.symbols,i.pairs}async function b(n="BTCUSDT"){const e=new Headers;e.append("Content-Type","application/json");const o={method:"GET",headers:e};return await fetch(`https://fapi.binance.com/fapi/v1/depth?symbol=${n}`,o).then(f=>f.json()).catch(f=>console.log("error",f))}return{isOpenMenu:d,chart:i,getIndicators:r,getData:M,getSymbol:E,getTemporality:y,getExchange:m,searchSymbolsFutures:h,searchSymbolsSpot:g,searchDataOrderBook:b,searchClandlesSpot:k}});class A{constructor(r){this.callbacks=[],this.acu=0,this.data=r,this.divergencias={bajista:[],alcista:[]}}agregarCallback(r){this.callbacks.push(r)}procesarDivergencias(){console.time();const r=30;this.data.forEach((E,y)=>{if(this.data[y-r]!=null){const m=this.data.slice(y,y+(r-1)),M=parseInt(m.length/2),d=m.slice(0,M),k=m.slice(M+1,m.length);if(d.length>0&&k.length>0){let g=d.map(e=>e).sort((e,o)=>o.high-e.high)[0],h=k.map(e=>e).sort((e,o)=>o.high-e.high)[0],b=d.map(e=>e).sort((e,o)=>e.low-o.low)[0],n=k.map(e=>e).sort((e,o)=>e.low-o.low)[0];if(g.high<h.high&&g.rsi>h.rsi&&(h.close>h.hma10||h.high>h.bbh89)){let e=h.high-g.high,o=m.filter(a=>a.time>=g.time&&a.time<=h.time);const f=o.length;e=e/f;let p=g.high,v=o.flatMap(a=>(p+=e,{time:a.time,value:p,color:"pink"}));this.divergencias.bajista.push(v)}if(b.low>n.low&&b.rsi<n.rsi&&n.close<n.hma10&&n.close<n.hma20){let e=m.filter(a=>a.time>=b.time&&a.time<=n.time),o=n.low-b.low;const f=e.length;o=o/f;let p=b.low,v=e.flatMap(a=>(p+=o,{time:a.time,value:p,color:"#19f5eb"}));this.divergencias.alcista.push(v)}}}}),console.timeEnd()}iniciarProceso(){const r=this;return Promise.resolve(r.procesarDivergencias()).then(function(){r.callbacks.forEach(E=>{E(r.divergencias),r.callbacks=[]})})}}export{A as p,B as u};
