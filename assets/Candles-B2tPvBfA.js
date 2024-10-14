import{_ as Ne,u as Ee,r as M,H as oe,k as He,A as _,h as G,o as $e,s as Re,I as je,l as ze,a as Q,b as X,d as ce,t as N,f as he,e as qe,R as Ue,i as Je}from"./index-5nVqMiRl.js";import{u as Ke,p as Ge}from"./processDivergence-D9jsnce7.js";import{V as Qe}from"./lightweight-charts.production-DxYz0kgw.js";const Xe=["id"],Ye={class:"legend"},Ze={key:0,class:"rsi"},ea={key:0,class:"timer-counter"},aa={__name:"Candles",props:{chartNameId:{type:String,required:!0},micro:{type:Boolean,required:!1},main:{type:Boolean,default:!0},spot:{type:Boolean,default:!1},t:{type:String,required:!1},price:{type:Object,required:!1},dataCandles:{type:Array,required:!1,default:()=>[]},chartIndicators:{type:Object,required:!1,default:()=>{}}},emits:["resizeChart","crosshairMove"],setup(Y,{expose:fe,emit:de}){var ne;const t=Ke(),D=Ee(),d=new Je,c=Y,ue=de;let u=[];const E=M(!1),L=M(0),H=M(!1);let r,m,S,$=!1;const y=M(!1),Z=M(null),V=M(null);let R,j,z,ee,I,T,ae,q,U,x,B,W,v=[],w=[],C=0;const b=oe({bajista:[],alcista:[]}),k=oe({alcistas:[],bajistas:[]});He(()=>{r&&r.remove()});const me=()=>{const e=new Ge(t.chart.data);return new Promise((i,l)=>{e.agregarCallback(a=>{b.alcista=a.alcista,b.bajista=a.bajista}),i(e.iniciarProceso())})},pe=()=>{let e=d.calculateEMA(t.chart.data,200,"#F2F7A1");ee.setData(e)};function A(){const e=new Date().getTime()+Z.value*1e3-Date.parse(new Date),i=Math.floor(e/1e3%60),l=Math.floor(e/1e3/60%60),a=Math.floor(e/(1e3*60*60)%24),h=Math.floor(e/(1e3*60*60*24));return{total:e,days:h<10?"0"+h:h,hours:a<10?"0"+a:a,minutes:l<10?"0"+l:l,seconds:i<10?"0"+i:i}}const ge=_(()=>A().seconds),be=_(()=>A().minutes),Se=_(()=>A().hours);_(()=>A().days);const Le=()=>{const e=t.chart.data.flatMap(i=>({time:i.time,value:i.volume,color:"#d1e1e159"}));d.analisisVolumen(e),S.setData(e)},te=()=>{const e=document.querySelector(`#${c.chartNameId}`),i=parseInt(e.offsetWidth/1.01),l=parseInt(e.offsetHeight/1.01);let a=d.getConfigChart(i,l);const h=d.getConfigVelasTransparentes();r=Qe(e,a),m=r.addCandlestickSeries(h),S=r.addHistogramSeries({lastValueVisible:!1,priceLineVisible:!1,priceFormat:{type:"volume"},priceScaleId:"volumen"}),S.priceScale().applyOptions({priceFormat:{type:"volume"},scaleMargins:{top:.85,bottom:0}}),R=r.addLineSeries({color:"#f6483e33",lineWidth:7,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),j=r.addLineSeries({color:"#f0f8ff8f",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:2}),z=r.addLineSeries({color:"#00ffa521",lineWidth:7,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),ee=r.addLineSeries({color:"yellow",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:3}),I=r.addLineSeries({color:"#84ff3d8a",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),T=r.addLineSeries({color:"orange",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),ae=r.addLineSeries({color:"#f70776",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),q=r.addLineSeries({color:"#00bbf0",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),U=r.addLineSeries({color:"#bae8e8",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),r.addLineSeries({color:"#fff",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),x=r.addLineSeries({color:"yellow",lineWidth:4,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:1}),B=r.addLineSeries({color:"#c1c1c1",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:1}),W=r.addLineSeries({color:"#c1c1c1",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:1}),c.micro&&c.micro===!0&&c.t&&r.applyOptions({watermark:{color:"#00ff11",visible:!0,text:`Topacio ${String(t.getSymbol).toUpperCase()}  ${c.t} Seg.`,fontSize:14,horzAlign:"left",vertAlign:"top"}})},ie=async e=>{if(t.chart.data.length!=0)return Z.value=parseInt((e.time-new Date().getTime())/1e3),new Promise(async(i,l)=>{e==null&&(console.log("#",e),l("undefined lastCandle"));const a=c.micro===!0&&c.t,h=a?u:t.chart.data;let o=JSON.parse(JSON.stringify(h));if(!(o.length<=15)){if(o[o.length-1].close=e.close,o[o.length-1].high=e.high,o[o.length-1].low=e.low,!a){const s=o.flatMap(n=>n.close),f=await d.calculoRSI(s);y.value=parseFloat(f[f.length-1]).toFixed(2)}i(y.value)}})},se=async(e=!0)=>{H.value=e;const i=t.chart.data.flatMap(f=>f.close),l=await d.calculoRSI(i);let a=d.calcularMACD(i);const h=await d.calculateBollingerBands(i,89,3),o=d.calculateHMA(t.chart.data,10).flatMap(f=>f.value),s=d.calculateHMA(t.chart.data,20).flatMap(f=>f.value);t.chart.data[t.chart.data.length-1].bb||console.log("** noposee BB ",t.chart.data[t.chart.data.length-1],{isMicro:c.micro}),t.chart.data[t.chart.data.length-1].bb=h.pop(),t.chart.data[t.chart.data.length-1].rsi=l.pop(),t.chart.data[t.chart.data.length-1].macd=a.pop(),t.chart.data[t.chart.data.length-1].hma10=o.pop(),t.chart.data[t.chart.data.length-1].hma20=s.pop(),y.value=t.chart.data[t.chart.data.length-1].rsi,console.log("* recalculate")},Ve=()=>{var e,i;if(R.setData([]),z.setData([]),j.setData([]),!(!t.chart.indicators.bb||t.chart.data.length==0)&&(i=(e=t.chart.data[t.chart.data.length-1])==null?void 0:e.bb)!=null&&i.upper){let o=function(p,g){return p.time<g.time?-1:p.time>g.time?1:0};const l=t.chart.data.flatMap(p=>{let g={value:p.bb.upper,time:p.time};return p.high>p.bb.upper&&(g.color="#f443369e"),g}),a=t.chart.data.flatMap(p=>{let g={value:p.bb.lower,time:p.time};return p.low<p.bb.lower&&(g.color="#00ffa58a"),g}),h=t.chart.data.flatMap(p=>({value:p.bb.middle,time:p.time})),s=l.sort(o),f=a.sort(o),n=h.sort(o);console.log("check order",{dt_orderHigh:s,dt_orderLow:f,dt_orderMiddle:n}),R.setData(s),z.setData(f),j.setData(n)}},ye=()=>{if(c.micro&&u.length>=20){const e=u.sort((a,h)=>a.time<h.time?-1:a.time>h.time?1:0);console.log("renderHmaMicro",{dataCandlesMicro:u,dtOrdernada:e});const i=d.calculateHMA(e,10);I.setData(i);const l=d.calculateHMA(e,20,"#f70776");T.setData(l)}},ve=()=>{if(!c.micro){if(t.chart.data=t.chart.data.sort((e,i)=>e.time<i.time?-1:e.time>i.time?1:0),t.chart.indicators.hma10){const e=t.chart.data.flatMap(i=>({value:i.hma10,time:i.time}));I.setData(e)}if(t.chart.indicators.hma20){const e=t.chart.data.flatMap(i=>({value:i.hma20,time:i.time}));T.setData(e)}if(t.chart.indicators.hma55){const e=d.calculateHMA(t.chart.data,55,"#f70776");ae.setData(e)}if(t.chart.indicators.hma89){const e=d.calculateHMA(t.chart.data,89,"#9896f1");q.setData(e)}if(t.chart.indicators.hma233){const e=d.calculateHMA(t.chart.data,233,"#00bbf0");U.setData(e)}}},ke=async e=>{D.loading=!0;const i=String(t.getSymbol).toLowerCase(),l=String(e.value).toLowerCase(),a=`${i}@kline_${t.getTemporality}`,h=`${l}@kline_${t.getTemporality}`;console.log("resetMicro",{evt:e}),b.alcista=[],b.bajista=[],k.bajistas=[],k.alcistas=[],u=[],x.setData([]),B.setData([]),W.setData([]),I.setData([]),T.setData([]),q.setData([]),U.setData([]),r.applyOptions({priceScale:{scaleMargins:{top:.1,bottom:.1}},watermark:{color:"#00ff11",visible:!0,text:`Topacio ${String(t.getSymbol).toUpperCase()}  ${c.t} Seg.`,fontSize:14,horzAlign:"left",vertAlign:"top"}}),m.setData([]),await V.value.send(JSON.stringify({method:"UNSUBSCRIBE",params:[a],id:new Date().getTime()})),await V.value.send(JSON.stringify({method:"SUBSCRIBE",params:[h],id:new Date().getTime()})),D.loading=!1},Me=async e=>{r.remove(),b.alcista=[],b.bajista=[],k.bajistas=[],k.alcistas=[];const i=String(t.getSymbol).toLowerCase(),l=String(e.value).toLowerCase(),a=`${i}@kline_${t.getTemporality}`,h=`${l}@kline_${t.getTemporality}`;te(),c.micro&&le([]),console.log("* changeTarget Candles",{evt:e,symbolsMinuscula:i,previusSocket:a}),V.value&&(V.value.send(JSON.stringify({method:"UNSUBSCRIBE",params:[a],id:new Date().getTime()})),V.value.send(JSON.stringify({method:"SUBSCRIBE",params:[h],id:new Date().getTime()})))},De=async()=>{const e=String(t.getSymbol).toLowerCase(),i=t.getTemporality,{spot:l}=c;if(l===!1){V.value=await new WebSocket(`wss://fstream.binance.com/ws/${e}@kline_${i}`);let a,h=0;V.value.addEventListener("message",async function(o){var f;if(D.loading||t.chart.data.length===0)return;const s=JSON.parse(o.data);if(o&&(s!=null&&s.s)&&s.result==null&&(s!=null&&s.k)&&(s==null?void 0:s.k)!=null&&((f=s==null?void 0:s.k)==null?void 0:f.i)==t.getTemporality&&String(s.s).toUpperCase()==String(t.getSymbol).toUpperCase()){const n=parseFloat(s.k.c);s.k.T&&parseInt(s.k.T);const p=s.k.x?s.k.x:!1,g=s.k.V?parseFloat(s.k.V):null,{micro:F,t:O,spot:ta}=c;if(F||(a={time:parseInt(s.k.T),open:parseFloat(s.k.o),high:parseFloat(s.k.h),low:parseFloat(s.k.l),close:n,value:n,volume:g},a.close=n,a.value=n,a.volume=g,a.high&&n>a.high&&(a.high=n),a&&a.low&&n<a.low&&(a.low=n),c.micro&&c.t?a.time=parseInt(L.value):a.time=parseInt(s.k.T),a&&a.close&&ie(a)),!E.value&&F==!0&&O&&(L.value=s.E+O*1e3,a={time:L.value,open:parseFloat(n),high:parseFloat(n),low:parseFloat(n),close:n,value:n,volume:g},E.value=!0),p&&!F){const P=t.chart.data[t.chart.data.length-1].time-t.chart.data[t.chart.data.length-2].time;a.time=parseInt(s.k.T)+P,a.open=parseFloat(s.k.o),a.high=parseFloat(s.k.h),a.low=parseFloat(s.k.l),a.close=parseFloat(n),a.volume=g,t.chart.data.push(a),H.value=!0,Fe()}if(F&&O&&E.value&&($&&(a.open=parseFloat(n),a.high=parseFloat(n),a.low=parseFloat(n),a.close=n,a.value=n,a.volume=g,$=!1),a.time=L.value,a.close=n,a.value=n,a.volume=g,F===!0&&u.length==0&&(a={time:parseInt(s.k.T),open:n,high:n,low:n,close:n,value:n,volume:g}),n>a.high&&(a.high=n),n<a.low&&(a.low=n),s.E>L.value&&(H.value=!0,$=!0,L.value=s.E+O*1e3,a.time=parseInt(L.value),u.push(JSON.parse(JSON.stringify(a))),u=u.sort((J,K)=>K.time-J.time).filter((J,K,Pe)=>K===Pe.findIndex(_e=>_e.time===J.time)),u.length>1&&we()),a&&a.close&&u.length>1&&ie(a)),s.E>h&&a&&a.time&&r&&m)try{m.update(a)}catch(P){console.log({chart:r,candleSeries:m,e:P})}}h=s.E})}},we=async()=>{ye(),Ce(),Ie()},Ce=()=>{if(u.length>=5){const i=u.sort((o,s)=>s.high-o.high),l=u.flatMap(o=>o.close),a=Ue.calculate({values:l,period:10}),h=u.slice(5*-1);console.log("calcularDivergenciaMicro",{dtOrdernadaPriceHigh:i,highLast30Candles:h,closeMicro:l,rsi:a})}},Fe=async()=>{c.micro||(await se(),Ve(),ve(),xe(),pe())},Ie=()=>{if(u.length<=5)return;const e=u.sort((s,f)=>s.time-f.time),i=e.length<89?e.length:80,l=d.kernelChannel(e,i,2.5),a=l.flatMap(s=>({time:s.time,value:parseFloat(parseFloat(s.upperChannel).toFixed(4))})),h=l.flatMap(s=>({time:s.time,value:parseFloat(parseFloat(s.lowerChannel).toFixed(4))})),o=l.flatMap(s=>({time:s.time,value:parseFloat(parseFloat(s.smoothedData).toFixed(4))}));x.setData(o),B.setData(a),W.setData(h),console.log({channelData:l,dtOrdernadaPriceHigh:e})},le=e=>{r&&m&&(m.setData(e),console.log("setDataChart",{data:e}))},Te=e=>{r&&(r!=null&&r.resize)&&r.resize(e.width,e.height)},xe=()=>{const i=d.kernelChannel(t.chart.data,89,2.5),l=i.flatMap(o=>({time:o.time,value:parseFloat(parseFloat(o.upperChannel).toFixed(4))})),a=i.flatMap(o=>({time:o.time,value:parseFloat(parseFloat(o.lowerChannel).toFixed(4))})),h=i.flatMap((o,s)=>{const f=parseFloat(o.smoothedData)<t.chart.data[s].close?"#A6FF96":"#DA0C81";return{time:o.time,value:parseFloat(parseFloat(o.smoothedData).toFixed(4)),color:f}});x.setData(h),B.setData(l),W.setData(a)},Be=()=>{setTimeout(function(){new Promise((e,i)=>{b.bajista.length>0&&b.bajista.forEach(l=>{let a=r.addLineSeries({color:"#fff",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,crosshairMarkerVisible:!1,lineStyle:0});a.setData(l),k.bajistas.push(a)}),b.alcista.length>0&&b.alcista.forEach(l=>{let a=r.addLineSeries({color:"#fff",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,crosshairMarkerVisible:!1,lineStyle:0});a.setData(l),k.alcistas.push(a)}),e(!0)})},0)};(ne=t==null?void 0:t.getIndicators)!=null&&ne.divergences&&c.main&&c.main===!0&&setTimeout(function(){Promise.resolve(me()).then(Be())},0),G(()=>c.price,e=>{e!=null&&e.time&&(m.update(e),e!=null&&e.volume&&S&&(S!=null&&S.setData)&&S.update({time:e.time,value:e.volume,color:"#d1e1e159"}))});const re=e=>{if(e)m.setData(t.chart.data);else{const i=t.chart.data.flatMap(l=>(delete l.color,delete l.borderColor,delete l.wickColor,l));m.setData(i)}};G(()=>c.chartIndicators.cci,e=>{re(e)}),G(()=>t.chart.data,function(e){if(re(c.chartIndicators.cci),c.main&&c.main===!0){r.priceScale("right").applyOptions({autoScale:!0,scaleMargins:{top:.1,bottom:.1}});const i=new Date().toLocaleString();c.main&&c.main===!0&&r.applyOptions({watermark:{color:"#00ff11",visible:!0,text:`Topacio ${String(t.getSymbol).toUpperCase()}  ${t.getTemporality}  ${i}`,fontSize:14,horzAlign:"left",vertAlign:"top"}}),Le()}});const We=(e,i)=>i.time&&i.seriesData.get(e)||null,Ae=(e,i,l)=>{},Oe=e=>{var l;e.visibleLogicalRange=r&&r.timeScale?r.timeScale().getVisibleLogicalRange():null;const i=We(m,e);e.dataPoint=i,e.sync=Ae(),(l=e==null?void 0:e.point)!=null&&l.y&&m&&(C=m.coordinateToPrice(e.point.y)),ue("crosshairMove",e)};return $e(async()=>{await te(),De(),r&&(r!=null&&r.subscribeCrosshairMove)&&r.subscribeCrosshairMove(Oe),document.addEventListener("keydown",e=>{if(v[e.key]=!0,v.Alt&&e.key=="h"){const i=m.createPriceLine({price:C,color:"#FFF"});w.push(i)}if(v.Alt&&e.key=="s"){const i=m.createPriceLine({price:C,color:"#ff006e",title:"Short"});w.push(i)}if(v.Alt&&e.key=="l"){const i=m.createPriceLine({price:C,color:"#00ff11",title:"Long"});w.push(i)}(v.Alt&&e.key=="r"||e.key=="c")&&(console.log("* Cleaning Lines"),w.map(i=>m.removePriceLine(i)),w=[]),console.log("keydown",{event:e},e.key,C)}),document.addEventListener("keyup",e=>{delete v[e.key]})}),fe({chartStore:t,mainStore:D,chartNameId:c.chartNameId,lastRSI:y,changeTarget:Me,resetMicro:ke,resizeChart:Te,recalculate:se,chart:r,setDataChart:le}),(e,i)=>Re((Q(),X("div",{id:Y.chartNameId,ref:"chartElement",class:"charts-graphy"},[ce("div",Ye,[y.value?(Q(),X("label",Ze,"RSI:"+N(y.value),1)):he("",!0)]),c.micro?he("",!0):(Q(),X("div",ea,[i[0]||(i[0]=ce("span",null,"Left time",-1)),qe(" "+N(Se.value)+":"+N(be.value)+":"+N(ge.value),1)]))],8,Xe)),[[je,!ze(D).loading]])}},na=Ne(aa,[["__scopeId","data-v-22cb18d0"]]);export{na as C};
