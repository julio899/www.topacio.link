import{_ as K}from"./Selector-DtxPWDHK.js";import{V as Q}from"./lightweight-charts.production-Cq3om6Hu.js";import{u as X}from"./chart-3t9SNhl0.js";import{_ as Y,u as Z,r as n,o as ee,c7 as ae,p as te,b as U,d as p,e as le,t as V,q as y,f as oe,k as N,cc as se,a as B,i as ne}from"./index-DY0cizbq.js";const re={class:"container-template-chart"},ce={key:0,class:"price"},ie={class:"target-symbols"},ue={class:"target-temporality"},me={__name:"Chart",setup(pe,{expose:R}){const F=Z(),x=new ne;let d=null,v=null;const e=X(),i=n(null),g=n(null),f=n(null),S=n([]),M=n(null),u=n(null),c=n(0),b=n(!1),_=se();n(null),n(null);const W=async()=>{const a=g.value.offsetHeight,l=g.value.offsetWidth,s=x.getConfigChart(l,a),m=x.getConfigVelasTransparentes();v=Q(g.value,s),d=v.addCandlestickSeries(m),f.value=v.addHistogramSeries({lastValueVisible:!1,priceLineVisible:!1,priceFormat:{type:"volume"},priceScaleId:"volumen"}),f.value.priceScale().applyOptions({priceFormat:{type:"volume"},scaleMargins:{top:.85,bottom:0}});const r=(await e.searchSymbolsFutures()).flatMap(o=>e.chart.symbols!=o.symbol?{label:o.symbol,value:o.symbol}:{label:o.symbol,value:o.symbol,selected:!0});S.value=r.filter(o=>o.value.includes("USDT"));const T=String(e.getSymbol).toLowerCase();u.value=await new WebSocket(`wss://fstream.binance.com/ws/${T}@kline_${e.getTemporality}`),u.value.addEventListener("open",o=>{console.log("* open",{event:o})}),u.value.addEventListener("message",async function(o){var h;if(o!=null&&o.data){const t=JSON.parse(o.data);if(!t||!((h=t==null?void 0:t.k)!=null&&h.c))return;const D=parseFloat(t.k.c);t.k.T&&parseInt(t.k.T),t.k.x&&t.k.x;const z=t.k.V?parseFloat(t.k.V):null;if(c.value=D,t.s==e.getSymbol&&e.getTemporality==t.k.i){const G={time:parseInt(t.k.T),open:parseFloat(t.k.o),high:parseFloat(t.k.h),low:parseFloat(t.k.l),close:D,value:D,volume:z};d.update(G)}}}),v.timeScale().subscribeVisibleLogicalRangeChange(({from:o})=>{if(o<100&&!b.value){console.log("*a buscar",b.value),b.value=!0;let h=e.chart.data[0].time;i.value.postMessage({command:"searchDataPrevius",data:{exchange:e.getExchange,interval:e.getTemporality,symbolsPairs:e.getSymbol,limit:500,cci:e.chart.indicators.cci,endTime:h}})}}),E()};ee(()=>{i.value=new Worker(new URL("/assets/chartWorker-CbaLU1JH.js",import.meta.url),{type:"module"}),W(),i.value.onmessage=({data:{response:a,data:l}})=>{if(a==="searchData"&&(e.chart.data=l,d.setData(l),L()),a==="searchDataPrevius"){const s=[].concat(l.toSpliced(-1),e.chart.data);e.chart.data=s,d.setData(s),L(),b.value=!1}},M.value=setInterval(H,1e3)}),ae(()=>{i.value.terminate(),clearInterval(M.value)});const $=()=>{const l=`${String(e.getSymbol).toLowerCase()}@kline_${e.getTemporality}`;return u.value.send(JSON.stringify({method:"UNSUBSCRIBE",params:[l],id:new Date().getTime()}))},O=()=>{u.value.send(JSON.stringify({method:"SUBSCRIBE",params:[`${String(e.getSymbol).toLowerCase()}@kline_${e.getTemporality}`],id:1}))},k=async a=>{await $(),F.loading=!0,c.value=null,e.setSymbol(a.value),i.value.postMessage({command:"searchData",data:{exchange:e.getExchange,interval:e.getTemporality,symbolsPairs:e.getSymbol,limit:500,cci:e.chart.indicators.cci}}),O(),F.loading=!1},A=a=>{const l=a.map(r=>r.value),s=l.reduce((r,T)=>r+T,0)/l.length;l.forEach(r=>{});const m=parseInt(s*2.5);return a.flatMap(r=>(r.value>=m&&(r.color="#96EFFF"),r))},H=()=>{new Date().toLocaleString()},L=()=>{const a=e.chart.data.flatMap(s=>({time:s.time,value:s.volume,color:"#d1e1e159"})),l=A(a);f.value.setData(l)},E=()=>{i.value.postMessage({command:"searchData",data:{exchange:e.getExchange,interval:e.getTemporality,symbolsPairs:e.getSymbol,limit:500,cci:e.chart.indicators.cci}})},C=te(()=>c.value?c.value>.01?parseFloat(c.value).toFixed(4):parseFloat(c.value).toFixed(6):""),J=_.params&&_.params.temporality?_.params.temporality.toString().toLocaleLowerCase():"4h",j=[{value:"1m",label:"1m"},{value:"5m",label:"5m"},{value:"15m",label:"15m"},{value:"30m",label:"30m"},{value:"1h",label:"1h"},{value:"2h",label:"2h"},{value:"4h",label:"4h"},{value:"1d",label:"1d"},{value:"3d",label:"3d"},{value:"1w",label:"1w"}],P=async a=>{e.chart.temporality=a.value,k({value:String(e.getSymbol)})},I=n(j.flatMap(a=>J==a.label?{value:a.value,label:a.label,selected:!0}:{value:a.value,label:a.label})),w=n("15m");return R({chartStore:e,dataPairs:S,lastPrice:c,formatPrice:C,temporalityData:I,targetTemporality:w,changeTemporality:P,changeTarget:k}),(a,l)=>{const s=K;return B(),U("div",re,[p("h1",{onClick:E},[le(V(y(e).getSymbol)+" "+V(y(e).getTemporality)+" ",1),C.value?(B(),U("span",ce,"price: "+V(C.value),1)):oe("",!0)]),p("article",null,[p("div",ie,[N(s,{opciones:S.value,onlyLabel:!1,lblPorDefecto:y(e).chart.symbols,onActionChange:k},null,8,["opciones","lblPorDefecto"])]),p("div",ue,[N(s,{lblPorDefecto:y(e).getTemporality,opciones:I.value,onlyLabel:!1,modelValue:w.value,"onUpdate:modelValue":l[0]||(l[0]=m=>w.value=m),onActionChange:P},null,8,["lblPorDefecto","opciones","modelValue"])])]),p("section",{id:"chart-principal",ref_key:"chartElement",ref:g},null,512)])}}},he=Y(me,[["__scopeId","data-v-c3cacbd1"]]);export{he as default};
