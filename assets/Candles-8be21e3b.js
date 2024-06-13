import{_ as Ne,u as Ee,r as D,I as oe,k as $e,A as N,f as Q,o as He,v as Re,J as je,l as ze,a as X,g as Y,d as he,t as E,m as ce,e as qe,R as Ue,p as Je,b as Ke,h as Ge}from"./index-22b8b0c0.js";import{u as Qe,p as Xe,T as Ye}from"./processDivergence-f0cf7887.js";const Ze=v=>(Je("data-v-34c75fb0"),v=v(),Ke(),v),ea=["id"],aa={class:"legend"},ta={key:0,class:"rsi"},ia={key:0,class:"timer-counter"},sa=Ze(()=>he("span",null,"Left time",-1)),la={__name:"Candles",props:{chartNameId:{type:String,required:!0},micro:{type:Boolean,required:!1},main:{type:Boolean,default:!0},spot:{type:Boolean,default:!1},t:{type:String,required:!1},price:{type:Object,required:!1},dataCandles:{type:Array,required:!1,default:()=>[]},chartIndicators:{type:Object,required:!1,default:()=>{}}},emits:["resizeChart","crosshairMove"],setup(v,{expose:de,emit:fe}){var ne;const t=Qe(),w=Ee(),u=new Ge,c=v,ue=fe;let p=[];const $=D(!1),L=D(0),H=D(!1);let r,d,S,R=!1;const V=D(!1),Z=D(null),y=D(null);let j,z,q,ee,I,T,ae,U,J,x,B,W,k=[],C=[],F=0;const b=oe({bajista:[],alcista:[]}),M=oe({alcistas:[],bajistas:[]});$e(()=>{r&&r.remove()});const pe=()=>{const e=new Xe(t.chart.data);return new Promise((i,l)=>{e.agregarCallback(a=>{b.alcista=a.alcista,b.bajista=a.bajista}),i(e.iniciarProceso())})},me=()=>{let e=u.calculateEMA(t.chart.data,200,"#F2F7A1");ee.setData(e)};function A(){const e=new Date().getTime()+Z.value*1e3-Date.parse(new Date),i=Math.floor(e/1e3%60),l=Math.floor(e/1e3/60%60),a=Math.floor(e/(1e3*60*60)%24),h=Math.floor(e/(1e3*60*60*24));return{total:e,days:h<10?"0"+h:h,hours:a<10?"0"+a:a,minutes:l<10?"0"+l:l,seconds:i<10?"0"+i:i}}const ge=N(()=>A().seconds),be=N(()=>A().minutes),Se=N(()=>A().hours);N(()=>A().days);const Le=()=>{const e=t.chart.data.flatMap(i=>({time:i.time,value:i.volume,color:"#d1e1e159"}));u.analisisVolumen(e),S.setData(e)},te=()=>{const e=document.querySelector(`#${c.chartNameId}`),i=parseInt(e.offsetWidth/1.01),l=parseInt(e.offsetHeight/1.01);let a=u.getConfigChart(i,l);const h=u.getConfigVelasTransparentes();r=Ye(e,a),d=r.addCandlestickSeries(h),S=r.addHistogramSeries({lastValueVisible:!1,priceLineVisible:!1,priceFormat:{type:"volume"},priceScaleId:"volumen"}),S.priceScale().applyOptions({priceFormat:{type:"volume"},scaleMargins:{top:.85,bottom:0}}),j=r.addLineSeries({color:"#f6483e33",lineWidth:7,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),z=r.addLineSeries({color:"#f0f8ff8f",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:2}),q=r.addLineSeries({color:"#00ffa521",lineWidth:7,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),ee=r.addLineSeries({color:"yellow",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:3}),I=r.addLineSeries({color:"#84ff3d8a",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),T=r.addLineSeries({color:"orange",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),ae=r.addLineSeries({color:"#f70776",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),U=r.addLineSeries({color:"#00bbf0",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),J=r.addLineSeries({color:"#bae8e8",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),r.addLineSeries({color:"#fff",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),x=r.addLineSeries({color:"yellow",lineWidth:4,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:1}),B=r.addLineSeries({color:"#c1c1c1",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:1}),W=r.addLineSeries({color:"#c1c1c1",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:1}),c.micro&&c.micro===!0&&c.t&&r.applyOptions({watermark:{color:"#00ff11",visible:!0,text:`Topacio ${String(t.getSymbol).toUpperCase()}  ${c.t} Seg.`,fontSize:14,horzAlign:"left",vertAlign:"top"}})},ie=async e=>{if(t.chart.data.length!=0)return Z.value=parseInt((e.time-new Date().getTime())/1e3),new Promise(async(i,l)=>{e==null&&(console.log("#",e),l("undefined lastCandle"));const a=c.micro===!0&&c.t,h=a?p:t.chart.data;let o=JSON.parse(JSON.stringify(h));if(!(o.length<=15)){if(o[o.length-1].close=e.close,o[o.length-1].high=e.high,o[o.length-1].low=e.low,!a){const s=o.flatMap(n=>n.close),f=await u.calculoRSI(s);V.value=parseFloat(f[f.length-1]).toFixed(2)}i(V.value)}})},se=async(e=!0)=>{H.value=e;const i=t.chart.data.flatMap(f=>f.close),l=await u.calculoRSI(i);let a=u.calcularMACD(i);const h=await u.calculateBollingerBands(i,89,3),o=u.calculateHMA(t.chart.data,10).flatMap(f=>f.value),s=u.calculateHMA(t.chart.data,20).flatMap(f=>f.value);t.chart.data[t.chart.data.length-1].bb||console.log("** noposee BB ",t.chart.data[t.chart.data.length-1],{isMicro:c.micro}),t.chart.data[t.chart.data.length-1].bb=h.pop(),t.chart.data[t.chart.data.length-1].rsi=l.pop(),t.chart.data[t.chart.data.length-1].macd=a.pop(),t.chart.data[t.chart.data.length-1].hma10=o.pop(),t.chart.data[t.chart.data.length-1].hma20=s.pop(),V.value=t.chart.data[t.chart.data.length-1].rsi,console.log("* recalculate")},ye=()=>{var e,i;if(j.setData([]),q.setData([]),z.setData([]),!(!t.chart.indicators.bb||t.chart.data.length==0)&&(i=(e=t.chart.data[t.chart.data.length-1])==null?void 0:e.bb)!=null&&i.upper){let o=function(m,g){return m.time<g.time?-1:m.time>g.time?1:0};const l=t.chart.data.flatMap(m=>{let g={value:m.bb.upper,time:m.time};return m.high>m.bb.upper&&(g.color="#f443369e"),g}),a=t.chart.data.flatMap(m=>{let g={value:m.bb.lower,time:m.time};return m.low<m.bb.lower&&(g.color="#00ffa58a"),g}),h=t.chart.data.flatMap(m=>({value:m.bb.middle,time:m.time})),s=l.sort(o),f=a.sort(o),n=h.sort(o);console.log("check order",{dt_orderHigh:s,dt_orderLow:f,dt_orderMiddle:n}),j.setData(s),q.setData(f),z.setData(n)}},ve=()=>{if(c.micro&&p.length>=20){const e=p.sort((a,h)=>a.time<h.time?-1:a.time>h.time?1:0);console.log("renderHmaMicro",{dataCandlesMicro:p,dtOrdernada:e});const i=u.calculateHMA(e,10);I.setData(i);const l=u.calculateHMA(e,20,"#f70776");T.setData(l)}},Ve=()=>{if(!c.micro){if(t.chart.data=t.chart.data.sort((e,i)=>e.time<i.time?-1:e.time>i.time?1:0),t.chart.indicators.hma10){const e=t.chart.data.flatMap(i=>({value:i.hma10,time:i.time}));I.setData(e)}if(t.chart.indicators.hma20){const e=t.chart.data.flatMap(i=>({value:i.hma20,time:i.time}));T.setData(e)}if(t.chart.indicators.hma55){const e=u.calculateHMA(t.chart.data,55,"#f70776");ae.setData(e)}if(t.chart.indicators.hma89){const e=u.calculateHMA(t.chart.data,89,"#9896f1");U.setData(e)}if(t.chart.indicators.hma233){const e=u.calculateHMA(t.chart.data,233,"#00bbf0");J.setData(e)}}},ke=async e=>{w.loading=!0;const i=String(t.getSymbol).toLowerCase(),l=String(e.value).toLowerCase(),a=`${i}@kline_${t.getTemporality}`,h=`${l}@kline_${t.getTemporality}`;console.log("resetMicro",{evt:e}),b.alcista=[],b.bajista=[],M.bajistas=[],M.alcistas=[],p=[],x.setData([]),B.setData([]),W.setData([]),I.setData([]),T.setData([]),U.setData([]),J.setData([]),r.applyOptions({priceScale:{scaleMargins:{top:.1,bottom:.1}},watermark:{color:"#00ff11",visible:!0,text:`Topacio ${String(t.getSymbol).toUpperCase()}  ${c.t} Seg.`,fontSize:14,horzAlign:"left",vertAlign:"top"}}),d.setData([]),await y.value.send(JSON.stringify({method:"UNSUBSCRIBE",params:[a],id:new Date().getTime()})),await y.value.send(JSON.stringify({method:"SUBSCRIBE",params:[h],id:new Date().getTime()})),w.loading=!1},Me=async e=>{r.remove(),b.alcista=[],b.bajista=[],M.bajistas=[],M.alcistas=[];const i=String(t.getSymbol).toLowerCase(),l=String(e.value).toLowerCase(),a=`${i}@kline_${t.getTemporality}`,h=`${l}@kline_${t.getTemporality}`;te(),c.micro&&le([]),console.log("* changeTarget Candles",{evt:e,symbolsMinuscula:i,previusSocket:a}),y.value&&(y.value.send(JSON.stringify({method:"UNSUBSCRIBE",params:[a],id:new Date().getTime()})),y.value.send(JSON.stringify({method:"SUBSCRIBE",params:[h],id:new Date().getTime()})))},De=async()=>{const e=String(t.getSymbol).toLowerCase(),i=t.getTemporality,{spot:l}=c;if(l===!1){y.value=await new WebSocket(`wss://fstream.binance.com/ws/${e}@kline_${i}`);let a,h=0;y.value.addEventListener("message",async function(o){var f;if(w.loading||t.chart.data.length===0)return;const s=JSON.parse(o.data);if(o&&(s!=null&&s.s)&&s.result==null&&(s!=null&&s.k)&&(s==null?void 0:s.k)!=null&&((f=s==null?void 0:s.k)==null?void 0:f.i)==t.getTemporality&&String(s.s).toUpperCase()==String(t.getSymbol).toUpperCase()){const n=parseFloat(s.k.c);s.k.T&&parseInt(s.k.T);const m=s.k.x?s.k.x:!1,g=s.k.V?parseFloat(s.k.V):null,{micro:_,t:O,spot:ra}=c;if(_||(a={time:parseInt(s.k.T),open:parseFloat(s.k.o),high:parseFloat(s.k.h),low:parseFloat(s.k.l),close:n,value:n,volume:g},a.close=n,a.value=n,a.volume=g,a.high&&n>a.high&&(a.high=n),a&&a.low&&n<a.low&&(a.low=n),c.micro&&c.t?a.time=parseInt(L.value):a.time=parseInt(s.k.T),a&&a.close&&ie(a)),!$.value&&_==!0&&O&&(L.value=s.E+O*1e3,a={time:L.value,open:parseFloat(n),high:parseFloat(n),low:parseFloat(n),close:n,value:n,volume:g},$.value=!0),m&&!_){const P=t.chart.data[t.chart.data.length-1].time-t.chart.data[t.chart.data.length-2].time;a.time=parseInt(s.k.T)+P,a.open=parseFloat(s.k.o),a.high=parseFloat(s.k.h),a.low=parseFloat(s.k.l),a.close=parseFloat(n),a.volume=g,t.chart.data.push(a),H.value=!0,Fe()}if(_&&O&&$.value&&(R&&(a.open=parseFloat(n),a.high=parseFloat(n),a.low=parseFloat(n),a.close=n,a.value=n,a.volume=g,R=!1),a.time=L.value,a.close=n,a.value=n,a.volume=g,_===!0&&p.length==0&&(a={time:parseInt(s.k.T),open:n,high:n,low:n,close:n,value:n,volume:g}),n>a.high&&(a.high=n),n<a.low&&(a.low=n),s.E>L.value&&(H.value=!0,R=!0,L.value=s.E+O*1e3,a.time=parseInt(L.value),p.push(JSON.parse(JSON.stringify(a))),p=p.sort((K,G)=>G.time-K.time).filter((K,G,Oe)=>G===Oe.findIndex(Pe=>Pe.time===K.time)),p.length>1&&we()),a&&a.close&&p.length>1&&ie(a)),s.E>h&&a&&a.time&&r&&d)try{d.update(a)}catch(P){console.log({chart:r,candleSeries:d,e:P})}}h=s.E})}},we=async()=>{ve(),Ce(),_e()},Ce=()=>{if(p.length>=5){const i=p.sort((o,s)=>s.high-o.high),l=p.flatMap(o=>o.close),a=Ue.calculate({values:l,period:10}),h=p.slice(5*-1);console.log("calcularDivergenciaMicro",{dtOrdernadaPriceHigh:i,highLast30Candles:h,closeMicro:l,rsi:a})}},Fe=async()=>{c.micro||(await se(),ye(),Ve(),Te(),me())},_e=()=>{if(p.length<=5)return;const e=p.sort((s,f)=>s.time-f.time),i=e.length<89?e.length:80,l=u.kernelChannel(e,i,2.5),a=l.flatMap(s=>({time:s.time,value:parseFloat(parseFloat(s.upperChannel).toFixed(4))})),h=l.flatMap(s=>({time:s.time,value:parseFloat(parseFloat(s.lowerChannel).toFixed(4))})),o=l.flatMap(s=>({time:s.time,value:parseFloat(parseFloat(s.smoothedData).toFixed(4))}));x.setData(o),B.setData(a),W.setData(h),console.log({channelData:l,dtOrdernadaPriceHigh:e})},le=e=>{r&&d&&(d.setData(e),console.log("setDataChart",{data:e}))},Ie=e=>{r&&(r!=null&&r.resize)&&r.resize(e.width,e.height)},Te=()=>{const i=u.kernelChannel(t.chart.data,89,2.5),l=i.flatMap(o=>({time:o.time,value:parseFloat(parseFloat(o.upperChannel).toFixed(4))})),a=i.flatMap(o=>({time:o.time,value:parseFloat(parseFloat(o.lowerChannel).toFixed(4))})),h=i.flatMap((o,s)=>{const f=parseFloat(o.smoothedData)<t.chart.data[s].close?"#A6FF96":"#DA0C81";return{time:o.time,value:parseFloat(parseFloat(o.smoothedData).toFixed(4)),color:f}});x.setData(h),B.setData(l),W.setData(a)},xe=()=>{setTimeout(function(){new Promise((e,i)=>{b.bajista.length>0&&b.bajista.forEach(l=>{let a=r.addLineSeries({color:"#fff",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,crosshairMarkerVisible:!1,lineStyle:0});a.setData(l),M.bajistas.push(a)}),b.alcista.length>0&&b.alcista.forEach(l=>{let a=r.addLineSeries({color:"#fff",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,crosshairMarkerVisible:!1,lineStyle:0});a.setData(l),M.alcistas.push(a)}),e(!0)})},0)};(ne=t==null?void 0:t.getIndicators)!=null&&ne.divergences&&c.main&&c.main===!0&&setTimeout(function(){Promise.resolve(pe()).then(xe())},0),Q(()=>c.price,e=>{e!=null&&e.time&&(d.update(e),e!=null&&e.volume&&S&&(S!=null&&S.setData)&&S.update({time:e.time,value:e.volume,color:"#d1e1e159"}))});const re=e=>{if(e)d.setData(t.chart.data);else{const i=t.chart.data.flatMap(l=>(delete l.color,delete l.borderColor,delete l.wickColor,l));d.setData(i)}};Q(()=>c.chartIndicators.cci,e=>{re(e)}),Q(()=>t.chart.data,function(e){if(re(c.chartIndicators.cci),c.main&&c.main===!0){r.priceScale("right").applyOptions({autoScale:!0,scaleMargins:{top:.1,bottom:.1}});const i=new Date().toLocaleString();c.main&&c.main===!0&&r.applyOptions({watermark:{color:"#00ff11",visible:!0,text:`Topacio ${String(t.getSymbol).toUpperCase()}  ${t.getTemporality}  ${i}`,fontSize:14,horzAlign:"left",vertAlign:"top"}}),Le()}});const Be=(e,i)=>i.time&&i.seriesData.get(e)||null,We=(e,i,l)=>{if(l){e.setCrosshairPosition(l,l.time,i);return}},Ae=e=>{var l;e.visibleLogicalRange=r&&r.timeScale?r.timeScale().getVisibleLogicalRange():null;const i=Be(d,e);e.dataPoint=i,e.sync=We(d,i),(l=e==null?void 0:e.point)!=null&&l.y&&d&&(F=d.coordinateToPrice(e.point.y)),ue("crosshairMove",e)};return He(async()=>{await te(),De(),r&&(r!=null&&r.subscribeCrosshairMove)&&r.subscribeCrosshairMove(Ae),document.addEventListener("keydown",e=>{if(k[e.key]=!0,k.Alt&&e.key=="h"){const i=d.createPriceLine({price:F,color:"#FFF"});C.push(i)}if(k.Alt&&e.key=="s"){const i=d.createPriceLine({price:F,color:"#ff006e",title:"Short"});C.push(i)}if(k.Alt&&e.key=="l"){const i=d.createPriceLine({price:F,color:"#00ff11",title:"Long"});C.push(i)}(k.Alt&&e.key=="r"||e.key=="c")&&(console.log("* Cleaning Lines"),C.map(i=>d.removePriceLine(i)),C=[]),console.log("keydown",{event:e},e.key,F)}),document.addEventListener("keyup",e=>{delete k[e.key]})}),de({chartStore:t,mainStore:w,chartNameId:c.chartNameId,lastRSI:V,changeTarget:Me,resetMicro:ke,resizeChart:Ie,recalculate:se,chart:r,setDataChart:le}),(e,i)=>Re((X(),Y("div",{id:v.chartNameId,ref:"chartElement",class:"charts-graphy"},[he("div",aa,[V.value?(X(),Y("label",ta,"RSI:"+E(V.value),1)):ce("",!0)]),c.micro?ce("",!0):(X(),Y("div",ia,[sa,qe(" "+E(Se.value)+":"+E(be.value)+":"+E(ge.value),1)]))],8,ea)),[[je,!ze(w).loading]])}},ha=Ne(la,[["__scopeId","data-v-34c75fb0"]]);export{ha as C};
