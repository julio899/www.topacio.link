import{_ as Ne,u as Ee,r as M,I as oe,j as $e,z as P,e as G,o as He,q as Re,J as je,A as ze,a as Q,f as X,b as ce,t as N,l as he,d as qe,R as Ue,g as Je}from"./index-5dad1934.js";import{u as Ke,p as Ge}from"./processDivergence-b841be78.js";import{V as Qe}from"./lightweight-charts.production-a08ad01f.js";const Xe=["id"],Ye={class:"legend"},Ze={key:0,class:"rsi"},ea={key:0,class:"timer-counter"},aa={__name:"Candles",props:{chartNameId:{type:String,required:!0},micro:{type:Boolean,required:!1},main:{type:Boolean,default:!0},spot:{type:Boolean,default:!1},t:{type:String,required:!1},price:{type:Object,required:!1},dataCandles:{type:Array,required:!1,default:()=>[]},chartIndicators:{type:Object,required:!1,default:()=>{}}},emits:["resizeChart","crosshairMove"],setup(Y,{expose:fe,emit:de}){var ne;const t=Ke(),D=Ee(),u=new Je,c=Y,ue=de;let p=[];const E=M(!1),L=M(0),$=M(!1);let r,f,S,H=!1;const V=M(!1),Z=M(null),y=M(null);let R,j,z,ee,_,I,ae,q,U,x,T,B,v=[],C=[],w=0;const b=oe({bajista:[],alcista:[]}),k=oe({alcistas:[],bajistas:[]});$e(()=>{r&&r.remove()});const pe=()=>{const e=new Ge(t.chart.data);return new Promise((i,l)=>{e.agregarCallback(a=>{b.alcista=a.alcista,b.bajista=a.bajista}),i(e.iniciarProceso())})},me=()=>{let e=u.calculateEMA(t.chart.data,200,"#F2F7A1");ee.setData(e)};function W(){const e=new Date().getTime()+Z.value*1e3-Date.parse(new Date),i=Math.floor(e/1e3%60),l=Math.floor(e/1e3/60%60),a=Math.floor(e/(1e3*60*60)%24),h=Math.floor(e/(1e3*60*60*24));return{total:e,days:h<10?"0"+h:h,hours:a<10?"0"+a:a,minutes:l<10?"0"+l:l,seconds:i<10?"0"+i:i}}const ge=P(()=>W().seconds),be=P(()=>W().minutes),Se=P(()=>W().hours);P(()=>W().days);const Le=()=>{const e=t.chart.data.flatMap(i=>({time:i.time,value:i.volume,color:"#d1e1e159"}));u.analisisVolumen(e),S.setData(e)},te=()=>{const e=document.querySelector(`#${c.chartNameId}`),i=parseInt(e.offsetWidth/1.01),l=parseInt(e.offsetHeight/1.01);let a=u.getConfigChart(i,l);const h=u.getConfigVelasTransparentes();r=Qe(e,a),f=r.addCandlestickSeries(h),S=r.addHistogramSeries({lastValueVisible:!1,priceLineVisible:!1,priceFormat:{type:"volume"},priceScaleId:"volumen"}),S.priceScale().applyOptions({priceFormat:{type:"volume"},scaleMargins:{top:.85,bottom:0}}),R=r.addLineSeries({color:"#f6483e33",lineWidth:7,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),j=r.addLineSeries({color:"#f0f8ff8f",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:2}),z=r.addLineSeries({color:"#00ffa521",lineWidth:7,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),ee=r.addLineSeries({color:"yellow",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:3}),_=r.addLineSeries({color:"#84ff3d8a",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),I=r.addLineSeries({color:"orange",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),ae=r.addLineSeries({color:"#f70776",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),q=r.addLineSeries({color:"#00bbf0",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),U=r.addLineSeries({color:"#bae8e8",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),r.addLineSeries({color:"#fff",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),x=r.addLineSeries({color:"yellow",lineWidth:4,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:1}),T=r.addLineSeries({color:"#c1c1c1",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:1}),B=r.addLineSeries({color:"#c1c1c1",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:1}),c.micro&&c.micro===!0&&c.t&&r.applyOptions({watermark:{color:"#00ff11",visible:!0,text:`Topacio ${String(t.getSymbol).toUpperCase()}  ${c.t} Seg.`,fontSize:14,horzAlign:"left",vertAlign:"top"}})},ie=async e=>{if(t.chart.data.length!=0)return Z.value=parseInt((e.time-new Date().getTime())/1e3),new Promise(async(i,l)=>{e==null&&(console.log("#",e),l("undefined lastCandle"));const a=c.micro===!0&&c.t,h=a?p:t.chart.data;let o=JSON.parse(JSON.stringify(h));if(!(o.length<=15)){if(o[o.length-1].close=e.close,o[o.length-1].high=e.high,o[o.length-1].low=e.low,!a){const s=o.flatMap(n=>n.close),d=await u.calculoRSI(s);V.value=parseFloat(d[d.length-1]).toFixed(2)}i(V.value)}})},se=async(e=!0)=>{$.value=e;const i=t.chart.data.flatMap(d=>d.close),l=await u.calculoRSI(i);let a=u.calcularMACD(i);const h=await u.calculateBollingerBands(i,89,3),o=u.calculateHMA(t.chart.data,10).flatMap(d=>d.value),s=u.calculateHMA(t.chart.data,20).flatMap(d=>d.value);t.chart.data[t.chart.data.length-1].bb||console.log("** noposee BB ",t.chart.data[t.chart.data.length-1],{isMicro:c.micro}),t.chart.data[t.chart.data.length-1].bb=h.pop(),t.chart.data[t.chart.data.length-1].rsi=l.pop(),t.chart.data[t.chart.data.length-1].macd=a.pop(),t.chart.data[t.chart.data.length-1].hma10=o.pop(),t.chart.data[t.chart.data.length-1].hma20=s.pop(),V.value=t.chart.data[t.chart.data.length-1].rsi,console.log("* recalculate")},ye=()=>{var e,i;if(R.setData([]),z.setData([]),j.setData([]),!(!t.chart.indicators.bb||t.chart.data.length==0)&&(i=(e=t.chart.data[t.chart.data.length-1])==null?void 0:e.bb)!=null&&i.upper){let o=function(m,g){return m.time<g.time?-1:m.time>g.time?1:0};const l=t.chart.data.flatMap(m=>{let g={value:m.bb.upper,time:m.time};return m.high>m.bb.upper&&(g.color="#f443369e"),g}),a=t.chart.data.flatMap(m=>{let g={value:m.bb.lower,time:m.time};return m.low<m.bb.lower&&(g.color="#00ffa58a"),g}),h=t.chart.data.flatMap(m=>({value:m.bb.middle,time:m.time})),s=l.sort(o),d=a.sort(o),n=h.sort(o);console.log("check order",{dt_orderHigh:s,dt_orderLow:d,dt_orderMiddle:n}),R.setData(s),z.setData(d),j.setData(n)}},Ve=()=>{if(c.micro&&p.length>=20){const e=p.sort((a,h)=>a.time<h.time?-1:a.time>h.time?1:0);console.log("renderHmaMicro",{dataCandlesMicro:p,dtOrdernada:e});const i=u.calculateHMA(e,10);_.setData(i);const l=u.calculateHMA(e,20,"#f70776");I.setData(l)}},ve=()=>{if(!c.micro){if(t.chart.data=t.chart.data.sort((e,i)=>e.time<i.time?-1:e.time>i.time?1:0),t.chart.indicators.hma10){const e=t.chart.data.flatMap(i=>({value:i.hma10,time:i.time}));_.setData(e)}if(t.chart.indicators.hma20){const e=t.chart.data.flatMap(i=>({value:i.hma20,time:i.time}));I.setData(e)}if(t.chart.indicators.hma55){const e=u.calculateHMA(t.chart.data,55,"#f70776");ae.setData(e)}if(t.chart.indicators.hma89){const e=u.calculateHMA(t.chart.data,89,"#9896f1");q.setData(e)}if(t.chart.indicators.hma233){const e=u.calculateHMA(t.chart.data,233,"#00bbf0");U.setData(e)}}},ke=async e=>{D.loading=!0;const i=String(t.getSymbol).toLowerCase(),l=String(e.value).toLowerCase(),a=`${i}@kline_${t.getTemporality}`,h=`${l}@kline_${t.getTemporality}`;console.log("resetMicro",{evt:e}),b.alcista=[],b.bajista=[],k.bajistas=[],k.alcistas=[],p=[],x.setData([]),T.setData([]),B.setData([]),_.setData([]),I.setData([]),q.setData([]),U.setData([]),r.applyOptions({priceScale:{scaleMargins:{top:.1,bottom:.1}},watermark:{color:"#00ff11",visible:!0,text:`Topacio ${String(t.getSymbol).toUpperCase()}  ${c.t} Seg.`,fontSize:14,horzAlign:"left",vertAlign:"top"}}),f.setData([]),await y.value.send(JSON.stringify({method:"UNSUBSCRIBE",params:[a],id:new Date().getTime()})),await y.value.send(JSON.stringify({method:"SUBSCRIBE",params:[h],id:new Date().getTime()})),D.loading=!1},Me=async e=>{r.remove(),b.alcista=[],b.bajista=[],k.bajistas=[],k.alcistas=[];const i=String(t.getSymbol).toLowerCase(),l=String(e.value).toLowerCase(),a=`${i}@kline_${t.getTemporality}`,h=`${l}@kline_${t.getTemporality}`;te(),c.micro&&le([]),console.log("* changeTarget Candles",{evt:e,symbolsMinuscula:i,previusSocket:a}),y.value&&(y.value.send(JSON.stringify({method:"UNSUBSCRIBE",params:[a],id:new Date().getTime()})),y.value.send(JSON.stringify({method:"SUBSCRIBE",params:[h],id:new Date().getTime()})))},De=async()=>{const e=String(t.getSymbol).toLowerCase(),i=t.getTemporality,{spot:l}=c;if(l===!1){y.value=await new WebSocket(`wss://fstream.binance.com/ws/${e}@kline_${i}`);let a,h=0;y.value.addEventListener("message",async function(o){var d;if(D.loading||t.chart.data.length===0)return;const s=JSON.parse(o.data);if(o&&(s!=null&&s.s)&&s.result==null&&(s!=null&&s.k)&&(s==null?void 0:s.k)!=null&&((d=s==null?void 0:s.k)==null?void 0:d.i)==t.getTemporality&&String(s.s).toUpperCase()==String(t.getSymbol).toUpperCase()){const n=parseFloat(s.k.c);s.k.T&&parseInt(s.k.T);const m=s.k.x?s.k.x:!1,g=s.k.V?parseFloat(s.k.V):null,{micro:F,t:A,spot:ta}=c;if(F||(a={time:parseInt(s.k.T),open:parseFloat(s.k.o),high:parseFloat(s.k.h),low:parseFloat(s.k.l),close:n,value:n,volume:g},a.close=n,a.value=n,a.volume=g,a.high&&n>a.high&&(a.high=n),a&&a.low&&n<a.low&&(a.low=n),c.micro&&c.t?a.time=parseInt(L.value):a.time=parseInt(s.k.T),a&&a.close&&ie(a)),!E.value&&F==!0&&A&&(L.value=s.E+A*1e3,a={time:L.value,open:parseFloat(n),high:parseFloat(n),low:parseFloat(n),close:n,value:n,volume:g},E.value=!0),m&&!F){const O=t.chart.data[t.chart.data.length-1].time-t.chart.data[t.chart.data.length-2].time;a.time=parseInt(s.k.T)+O,a.open=parseFloat(s.k.o),a.high=parseFloat(s.k.h),a.low=parseFloat(s.k.l),a.close=parseFloat(n),a.volume=g,t.chart.data.push(a),$.value=!0,Fe()}if(F&&A&&E.value&&(H&&(a.open=parseFloat(n),a.high=parseFloat(n),a.low=parseFloat(n),a.close=n,a.value=n,a.volume=g,H=!1),a.time=L.value,a.close=n,a.value=n,a.volume=g,F===!0&&p.length==0&&(a={time:parseInt(s.k.T),open:n,high:n,low:n,close:n,value:n,volume:g}),n>a.high&&(a.high=n),n<a.low&&(a.low=n),s.E>L.value&&($.value=!0,H=!0,L.value=s.E+A*1e3,a.time=parseInt(L.value),p.push(JSON.parse(JSON.stringify(a))),p=p.sort((J,K)=>K.time-J.time).filter((J,K,Oe)=>K===Oe.findIndex(Pe=>Pe.time===J.time)),p.length>1&&Ce()),a&&a.close&&p.length>1&&ie(a)),s.E>h&&a&&a.time&&r&&f)try{f.update(a)}catch(O){console.log({chart:r,candleSeries:f,e:O})}}h=s.E})}},Ce=async()=>{Ve(),we(),_e()},we=()=>{if(p.length>=5){const i=p.sort((o,s)=>s.high-o.high),l=p.flatMap(o=>o.close),a=Ue.calculate({values:l,period:10}),h=p.slice(5*-1);console.log("calcularDivergenciaMicro",{dtOrdernadaPriceHigh:i,highLast30Candles:h,closeMicro:l,rsi:a})}},Fe=async()=>{c.micro||(await se(),ye(),ve(),xe(),me())},_e=()=>{if(p.length<=5)return;const e=p.sort((s,d)=>s.time-d.time),i=e.length<89?e.length:80,l=u.kernelChannel(e,i,2.5),a=l.flatMap(s=>({time:s.time,value:parseFloat(parseFloat(s.upperChannel).toFixed(4))})),h=l.flatMap(s=>({time:s.time,value:parseFloat(parseFloat(s.lowerChannel).toFixed(4))})),o=l.flatMap(s=>({time:s.time,value:parseFloat(parseFloat(s.smoothedData).toFixed(4))}));x.setData(o),T.setData(a),B.setData(h),console.log({channelData:l,dtOrdernadaPriceHigh:e})},le=e=>{r&&f&&(f.setData(e),console.log("setDataChart",{data:e}))},Ie=e=>{r&&(r!=null&&r.resize)&&r.resize(e.width,e.height)},xe=()=>{const i=u.kernelChannel(t.chart.data,89,2.5),l=i.flatMap(o=>({time:o.time,value:parseFloat(parseFloat(o.upperChannel).toFixed(4))})),a=i.flatMap(o=>({time:o.time,value:parseFloat(parseFloat(o.lowerChannel).toFixed(4))})),h=i.flatMap((o,s)=>{const d=parseFloat(o.smoothedData)<t.chart.data[s].close?"#A6FF96":"#DA0C81";return{time:o.time,value:parseFloat(parseFloat(o.smoothedData).toFixed(4)),color:d}});x.setData(h),T.setData(l),B.setData(a)},Te=()=>{setTimeout(function(){new Promise((e,i)=>{b.bajista.length>0&&b.bajista.forEach(l=>{let a=r.addLineSeries({color:"#fff",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,crosshairMarkerVisible:!1,lineStyle:0});a.setData(l),k.bajistas.push(a)}),b.alcista.length>0&&b.alcista.forEach(l=>{let a=r.addLineSeries({color:"#fff",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,crosshairMarkerVisible:!1,lineStyle:0});a.setData(l),k.alcistas.push(a)}),e(!0)})},0)};(ne=t==null?void 0:t.getIndicators)!=null&&ne.divergences&&c.main&&c.main===!0&&setTimeout(function(){Promise.resolve(pe()).then(Te())},0),G(()=>c.price,e=>{e!=null&&e.time&&(f.update(e),e!=null&&e.volume&&S&&(S!=null&&S.setData)&&S.update({time:e.time,value:e.volume,color:"#d1e1e159"}))});const re=e=>{if(e)f.setData(t.chart.data);else{const i=t.chart.data.flatMap(l=>(delete l.color,delete l.borderColor,delete l.wickColor,l));f.setData(i)}};G(()=>c.chartIndicators.cci,e=>{re(e)}),G(()=>t.chart.data,function(e){if(re(c.chartIndicators.cci),c.main&&c.main===!0){r.priceScale("right").applyOptions({autoScale:!0,scaleMargins:{top:.1,bottom:.1}});const i=new Date().toLocaleString();c.main&&c.main===!0&&r.applyOptions({watermark:{color:"#00ff11",visible:!0,text:`Topacio ${String(t.getSymbol).toUpperCase()}  ${t.getTemporality}  ${i}`,fontSize:14,horzAlign:"left",vertAlign:"top"}}),Le()}});const Be=(e,i)=>i.time&&i.seriesData.get(e)||null,We=(e,i,l)=>{if(l){e.setCrosshairPosition(l,l.time,i);return}},Ae=e=>{var l;e.visibleLogicalRange=r&&r.timeScale?r.timeScale().getVisibleLogicalRange():null;const i=Be(f,e);e.dataPoint=i,e.sync=We(f,i),(l=e==null?void 0:e.point)!=null&&l.y&&f&&(w=f.coordinateToPrice(e.point.y)),ue("crosshairMove",e)};return He(async()=>{await te(),De(),r&&(r!=null&&r.subscribeCrosshairMove)&&r.subscribeCrosshairMove(Ae),document.addEventListener("keydown",e=>{if(v[e.key]=!0,v.Alt&&e.key=="h"){const i=f.createPriceLine({price:w,color:"#FFF"});C.push(i)}if(v.Alt&&e.key=="s"){const i=f.createPriceLine({price:w,color:"#ff006e",title:"Short"});C.push(i)}if(v.Alt&&e.key=="l"){const i=f.createPriceLine({price:w,color:"#00ff11",title:"Long"});C.push(i)}(v.Alt&&e.key=="r"||e.key=="c")&&(console.log("* Cleaning Lines"),C.map(i=>f.removePriceLine(i)),C=[]),console.log("keydown",{event:e},e.key,w)}),document.addEventListener("keyup",e=>{delete v[e.key]})}),fe({chartStore:t,mainStore:D,chartNameId:c.chartNameId,lastRSI:V,changeTarget:Me,resetMicro:ke,resizeChart:Ie,recalculate:se,chart:r,setDataChart:le}),(e,i)=>Re((Q(),X("div",{id:Y.chartNameId,ref:"chartElement",class:"charts-graphy"},[ce("div",Ye,[V.value?(Q(),X("label",Ze,"RSI:"+N(V.value),1)):he("",!0)]),c.micro?he("",!0):(Q(),X("div",ea,[i[0]||(i[0]=ce("span",null,"Left time",-1)),qe(" "+N(Se.value)+":"+N(be.value)+":"+N(ge.value),1)]))],8,Xe)),[[je,!ze(D).loading]])}},na=Ne(aa,[["__scopeId","data-v-34c75fb0"]]);export{na as C};