import{cn as U,r as A,cf as R,p as h,i as _}from"./index-CvWf1ljO.js";const v="https://api.binance.com",C=new _,V=U("chart",()=>{const p=A(!1),t=R({symbols:"BTCUSDT",temporality:"15m",exchange:"binance",pairs:[],indicators:{divergences:!1,adx:!1,macd:!1,stochastic:!1,heikinAshi:!1,cci:!1,rsi:!1,bb:!1,hma10:!1,hma20:!1,hma55:!1,hma89:!1,hma233:!1,ema10:!1,ema20:!1,ema55:!1,ema89:!1,ema100:!1,ema200:!1,ema233:!1,sma10:!1,sma20:!1,sma55:!1,sma89:!1,sma100:!1,sma200:!1,sma233:!1,psar:!1,kernelChannel:!1,srDinamic:!1},data:[],menuOpen:!1}),S=h(()=>p),k=h(()=>t.indicators),F=h(()=>t.symbols),I=h(()=>t.temporality),T=h(()=>t.exchange),x=h(()=>t.data),D=h(()=>t.menuOpen);function M(i){t.symbols=new String(i).trim()}async function $({symbol:i,temporality:r,cci:l}){const u=`${v}/api/v3/klines?symbol=${i}&interval=${r}`,y=await fetch(`${v}/api/v3/uiKlines?symbol=${i}&interval=${r}`).then(async a=>(await a.json()).flatMap(s=>({time:s[0],open:parseFloat(s[1]),high:parseFloat(s[2]),low:parseFloat(s[3]),close:parseFloat(s[4]),volume:parseFloat(s[5]),timeEnd:s[6],trades:s[7]}))).then(async a=>{if(a.length<l)return a;const m=a.flatMap(c=>c.close);let s=[],f=C.calcularCCI(a,l);return await C.calculoRSI(m).then(async c=>{var b,g;let n=f.length-1;for(var e=a.length-1;e>=0;e--){if(f[n]&&((b=a[e])!=null&&b.time)){if(a[e].cci=f[n],a[e].cci>100){const o="#00f5d4";a[e].color=o,a[e].borderColor=o,a[e].wickColor=o}if(a[e].cci<-100){const o="#ff006e";a[e].color=o,a[e].borderColor=o,a[e].wickColor=o}}if(c[n]&&((g=a[e])!=null&&g.time))a[e].rsi=c[n],s.push(a[e]);else break;n--}return await s.sort((o,d)=>o.time-d.time),s}),s});let w=y.length>0?y:[];return y.length===0&&(w=await fetch(u).then(async a=>(await a.json()).flatMap(s=>({time:s[0],open:parseFloat(s[1]),high:parseFloat(s[2]),low:parseFloat(s[3]),close:parseFloat(s[4]),volume:parseFloat(s[5]),timeEnd:s[6],trades:s[7]}))).then(async a=>{const m=a.flatMap(c=>c.close);let s=[],f=C.calcularCCI(a,l);return await C.calculoRSI(m).then(async c=>{var b,g;let n=f.length-1;for(var e=a.length-1;e>=0;e--){if(f[n]&&((b=a[e])!=null&&b.time)){if(a[e].cci=f[n],a[e].cci>100){const o="#00f5d4";a[e].color=o,a[e].borderColor=o,a[e].wickColor=o}if(a[e].cci<-100){const o="#ff006e";a[e].color=o,a[e].borderColor=o,a[e].wickColor=o}}if(c[n]&&((g=a[e])!=null&&g.time))a[e].rsi=c[n],s.push(a[e]);else break;n--}return await s.sort((o,d)=>o.time-d.time),s}),s})),w}async function j(){const r=await fetch("https://api.binance.com/api/v3/exchangeInfo").then(l=>l.json());return t.pairs=r.symbols,t.pairs}async function E(){const r=await fetch("https://fapi.binance.com/fapi/v1/exchangeInfo").then(l=>l.json());return t.pairs=r.symbols,t.pairs}async function B(i="BTCUSDT"){const r=new Headers;r.append("Content-Type","application/json");const l={method:"GET",headers:r};return await fetch(`https://fapi.binance.com/fapi/v1/depth?symbol=${i}`,l).then(u=>u.json()).catch(u=>console.log("error",u))}return{customOption:p,getcustomOption:S,isOpenMenu:D,chart:t,getIndicators:k,getData:x,getSymbol:F,getTemporality:I,getExchange:T,setSymbol:M,searchSymbolsFutures:E,searchSymbolsSpot:j,searchDataOrderBook:B,searchClandlesSpot:$,toogleCustomOptions:()=>{p.value=!p.value,p.value==!0?(t.indicators.bb=!0,t.indicators.hma10=!0,t.indicators.hma20=!0,t.indicators.divergences=!0,t.indicators.kernelChannel=!0,t.indicators.srDinamic=!0,t.indicators.macd=!0):(t.indicators.bb=!1,t.indicators.hma10=!1,t.indicators.hma20=!1,t.indicators.divergences=!1,t.indicators.kernelChannel=!1,t.indicators.srDinamic=!1,t.indicators.macd=!1)}}});export{V as u};
