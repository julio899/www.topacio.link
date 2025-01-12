import{r as R,o as De,cb as Xa,a as _,b as $,d as b,F as Ka,i as ua,u as Wa,h as V,c7 as Ga,_ as Ia,cc as Qa,cd as Za,ce as We,p as Ie,t as j,q as K,k as ha,c8 as Ja,cf as et,e as Ee,f as U,c as Re,s as at}from"./index-CrKpYukb.js";import{V as fa}from"./lightweight-charts.production-Cq3om6Hu.js";import{u as Te}from"./chart-Cs93wLR8.js";import{p as tt}from"./processDivergence-CKT4E2ef.js";import{d as Fa,_ as it}from"./ActivadorIndicator-BHhcSunG.js";import{_ as da}from"./Selector-wpoeiO5J.js";const _a={__name:"ChartRsi",setup(ce,{expose:G}){const N=new ua,Z=Te();let d=[];const S=R(null);let z;return De(()=>{d=Z.chart.data.flatMap(C=>{let D={value:C.rsi,time:C.time};return C.rsi>75&&(D.color="#f70776"),C.rsi<25&&(D.color="#e0ffcd"),D});const e=document.querySelector("#chart-rsi");let i=N.getConfigChart(e.offsetWidth,e.offsetHeight);i.priceLineVisible=!1,i.priceLineColor="transparent",i.lastValueVisible=!1,i.localization={priceFormatter:C=>parseFloat(C).toFixed(2),timeFormatter:C=>Xa(new Date(C)).format("DD-MM-YYYY HH:mm:ss")},S.value=fa(e,i),z=S.value.addLineSeries({color:"rgba(4, 111, 232, 1)",lineWidth:1,priceLineVisible:!1}),z.setData(d),console.log("dataRsi l:",d.length)}),G({chart:S,updateAndRecalculate:()=>{d=Z.chart.data.flatMap(e=>{if(!e.rsi)return[];let i={value:e.rsi,time:e.time};return e.rsi>75&&(i.color="#f70776"),e.rsi<25&&(i.color="#e0ffcd"),i}),z.setData(d)},update:e=>{z.update(e),S.value.applyOptions({watermark:{color:"rgba(255, 255, 255, 1)",visible:!0,text:`RSI 14 SMA ${e.value}`,fontSize:11,horzAlign:"left",vertAlign:"top"}})}}),(e,i)=>(_(),$(Ka,null,[i[0]||(i[0]=b("div",{id:"chart-rsi"},[b("div",{class:"vertical-cursor"})],-1)),i[1]||(i[1]=b("div",{id:"chart-macd"},null,-1))],64))}},Aa={__name:"ChartMacd",props:["chartInfoVisible"],emits:["resizeChart","syncCrosshair"],setup(ce,{expose:G,emit:N}){const Z=ce,d=N,S=Te(),z=Wa(),te=new ua,A=R(null);let e=null,i=null,C=null,D=null,L=[],q=[],J=[],E=[];V(()=>Z.chartInfoVisible,function(g){o(g)});const Me=(g,k)=>{if(k){const T=L.filter(c=>c.time===k.time);T[0]&&i&&e.setCrosshairPosition(T[0],k.time,i);return}e.clearCrosshairPosition()},o=g=>{var k,T;(k=g==null?void 0:g.visibleLogicalRange)!=null&&k.to&&((T=g==null?void 0:g.visibleLogicalRange)!=null&&T.from)&&(g.visibleLogicalRange.to=parseInt(g.visibleLogicalRange.to),g.visibleLogicalRange.from=parseInt(g.visibleLogicalRange.from),e.timeScale().setVisibleLogicalRange({to:g.visibleLogicalRange.to,from:g.visibleLogicalRange.from}))},W=async()=>{const g=document.getElementById("chart-macd"),k=parseInt(z.w/1.005),T=parseInt(g.offsetHeight);console.log({w:k,h:T});let c=te.getConfigChart(k,T);c.timeScale.visible=!1,c.timeScale.timeVisible=!1,c.localization.priceFormatter=Y=>parseFloat(Y).toFixed(4),e=await fa(g,c),i=e.addHistogramSeries({color:"#26a69a"}),C=e.addLineSeries({color:"#8bffff",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),D=e.addLineSeries({color:"#f07810",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),i.applyOptions({lastValueVisible:!1,priceLineVisible:!1}),e.applyOptions({watermark:{color:"#00ff11",visible:!0,text:"MACD  - Fast [10] * Slow [20]",fontSize:14,horzAlign:"left",vertAlign:"top"}})},Q=()=>{S.chart.data.flatMap(c=>c.high);function g(c,Y){return c.time<Y.time?-1:c.time>Y.time?1:0}let k=[];S.chart.data.forEach((c,Y)=>{if(S.chart.data[Y-1]){let M=S.chart.data[Y-1];M.macd.MACD=parseFloat(parseFloat(M.macd.MACD).toFixed(5)),M.macd.histogram=parseFloat(parseFloat(M.macd.histogram).toFixed(5)),M.macd.signal=parseFloat(parseFloat(M.macd.signal).toFixed(5)),c.macd.MACD=parseFloat(parseFloat(c.macd.MACD).toFixed(5)),c.macd.histogram=parseFloat(parseFloat(c.macd.histogram).toFixed(5)),c.macd.signal=parseFloat(parseFloat(c.macd.signal).toFixed(5)),c.macd.signal>c.macd.MACD&&M.macd.MACD>M.macd.signal&&(k[c.time]=!0,E.push({time:M.time,position:"inBar",color:"orange",shape:"circle"})),c.macd.signal<c.macd.MACD&&M.macd.signal>M.macd.MACD&&(k[c.time]=!0,E.push({time:M.time,position:"inBar",color:"aqua",shape:"circle"}))}}),L=S.chart.data.flatMap((c,Y)=>{let M={value:c.macd.histogram,time:c.time};M.color=c.macd.histogram<0?"#c3195d":"#2ba71e70";let ee=S.chart.data[Y-1];return ee&&(ee.macd.histogram<0&&c.macd.histogram<0&&c.macd.histogram>ee.macd.histogram&&(M.color="pink"),ee.macd.histogram>0&&c.macd.histogram>0&&c.macd.histogram<ee.macd.histogram&&(M.color="#e0ffcd")),M}),L=L.sort(g),E=E.sort(g),J=S.chart.data.flatMap(c=>({value:c.macd.signal,time:c.time})),J=J.sort(g),q=S.chart.data.flatMap(c=>({value:c.macd.MACD,time:c.time})),q=q.sort(g),i&&C&&D&&(i.setData(L),C.setData(q),D.setData(J),D.setMarkers(E))};return De(async()=>{d("resizeChart"),await W(),Q(),e.subscribeCrosshairMove(g=>{const k=S.chart.data.filter(T=>T.time===g.time);k&&k[0]&&k[0].time&&d("syncCrosshair",k[0])})}),Ga(async()=>{d("resizeChart")}),G({processData:Q,histogramSeries:i,syncCrosshair:Me}),(g,k)=>(_(),$("div",{id:"chart-macd",class:"container-macd",ref_key:"chartMacd",ref:A},null,512))}},st={class:"container-volumen"},lt={__name:"FloatingVolume",setup(ce){const G=Te(),N=new WebSocket(`wss://stream.binance.com:9443/ws/${String(G.chart.symbols).toLowerCase()}@depth`);let Z={type:"bar",data:{labels:[],datasets:[{label:"Bids",data:[],backgroundColor:"rgba(75, 192, 75, 0.7)"},{label:"Asks",data:[],backgroundColor:"rgba(192, 75, 75, 0.7)"}]},options:{indexAxis:"y",scales:{x:{grid:{color:()=>"transparent",drawOnChartArea:!1},border:{display:!1},ticks:{display:!1}},y:{grid:{color:()=>"transparent",drawOnChartArea:!1},border:{display:!1},ticks:{color:"white"}}},elements:{bar:{borderWidth:0}},responsive:!0,plugins:{legend:{position:"right",color:"white",display:!1},title:{display:!0,text:"Flujo de Volume (Real-Time)",color:"white"}}}};return De(async()=>{const d=new Chart(document.getElementById("order-book-chart").getContext("2d"),Z);let S=await G.searchDataOrderBook(G.chart.symbols);const z=S.bids.map(i=>parseFloat(i[0]).toFixed(4)),te=S.asks.map(i=>parseFloat(i[0]).toFixed(4)),A=S.bids.map(i=>i[1]),e=S.asks.map(i=>i[1]);d.data.datasets[0].data=A,d.data.datasets[1].data=e,d.data.labels=[].concat(z,te).slice(0,10),d.update(),N.onerror=i=>{console.error("WebSocket Error:",i)},N.onclose=()=>{console.log("WebSocket Connection Closed")},N.onmessage=i=>{const C=JSON.parse(i.data),D=C.b.map(E=>E[1]),L=C.b.map(E=>parseFloat(E[0]).toFixed(4)),q=C.a.map(E=>E[1]),J=C.a.map(E=>parseFloat(E[0]).toFixed(4));d.data.labels=[].concat(L,J),d.data.datasets[0].data=D,d.data.datasets[1].data=q,d.update()}}),(d,S)=>(_(),$("div",st,S[0]||(S[0]=[b("canvas",{id:"order-book-chart",width:"300",height:"300"},null,-1)])))}},rt={class:"target-selector"},ot={class:"panelTarget"},nt={class:"selectors-areas"},ct={class:"target-symbols"},ht={class:"target-temporality"},dt={class:"legend"},mt={class:"l-hma10"},ut={key:0,id:"hma10-label"},ft={class:"l-hma20"},pt={key:0,id:"hma20-label"},bt={class:"l-ema200"},gt={key:0,id:"ema200-label"},Vt={class:"details"},Lt={key:0,class:"d-price"},vt={key:1,class:"d-high"},St={key:2,class:"d-low"},yt={key:3,class:"d-close"},Dt={key:4,class:"d-rsi"},Mt={key:5,class:"d-move"},kt={key:6,class:"d-ps"},wt={class:"timer-counter"},ma="#chart-main",Ct={__name:"ChartMobile",emits:["refresh"],setup(ce,{expose:G,emit:N}){var Ca,xa;const Z=N,d=Qa(),S=Za(),z=d.params&&d.params&&d.params.symbol?d.params.symbol.toString().toUpperCase():"BTCUSDT",te=d.params&&d.params&&d.params.temporality?d.params.temporality.toString().toLocaleLowerCase():"4h",A=Wa(),e=Te(),i=new ua,C=R(null),D=R(null),L=R(null),q=R(null),J=R(!1),E=R(!1),Me=R(null);let o,W;const Q=R(0),g=R(0),k=R("15m");let T,c,Y,M,ee,ke,we,Pe,Be,He,Oe,je,he,de,me,ue,fe,Ce,se,pe,be,ge,Ve,Le,xe,le,$e="#e0ffcd",Ne="#f96d00",ze="#ff347f",qe="#a393eb",Ue="#35bcbf",Ye="#8ed6ff",Xe="#b6cdbd",Ke="#cbf078",Ge="#0092ca",Qe="#e84a5f",Ze="#a393eb",Je="#defcf9",ea="#35bcbf",aa="#93deff",ta,ve;const ia=R(null),ie=We({bajista:[],alcista:[]}),X=We({resistencia:null,soporte:null});let re=[],Se=[],Fe=0,sa=null;const oe=We({alcistas:[],bajistas:[]}),n=We({price:null,close:null,high:null,low:null,rsi:null,rsih:null,higl:null,ps:null}),Ea=R([{value:"1m",label:"1m"},{value:"5m",label:"5m"},{value:"15m",label:"15m"},{value:"30m",label:"30m"},{value:"1h",label:"1h"},{value:"2h",label:"2h"},{value:"4h",label:"4h"},{value:"1d",label:"1d"},{value:"3d",label:"3d"},{value:"1w",label:"1w"}].flatMap(s=>te==s.label?{value:s.value,label:s.label,selected:!0}:{value:s.value,label:s.label}));(Ca=d==null?void 0:d.params)!=null&&Ca.symbol?e.chart.symbols=String(d.params.symbol).toUpperCase():e.chart.symbols=z,(xa=d==null?void 0:d.params)!=null&&xa.temporality?e.chart.temporality=d.params.temporality:e.chart.temporality=te;const pa=R([]),la=R(!1);function _e(){const s=new Date().getTime()+ia.value*1e3-Date.parse(new Date),t=Math.floor(s/1e3%60),l=Math.floor(s/1e3/60%60),r=Math.floor(s/(1e3*60*60)%24),h=Math.floor(s/(1e3*60*60*24));return{total:s,days:h<10?"0"+h:h,hours:r<10?"0"+r:r,minutes:l<10?"0"+l:l,seconds:t<10?"0"+t:t}}const ba=Ie(()=>_e().seconds),ga=Ie(()=>_e().minutes),Ra=Ie(()=>_e().hours),Ta=Ie(()=>_e().days),Ae=()=>{var l;const s=document.querySelector(ma);s!=null&&s.offsetHeight&&(o!=null&&o.resize)&&o.resize(parseInt(A.w/1.008),parseInt(s.offsetHeight));const t=document.querySelector("div#chart-rsi>div.vertical-cursor");(l=D==null?void 0:D.value)!=null&&l.chart&&t&&D.value.chart.resize(parseInt(document.querySelector("div.tv-lightweight-charts").offsetWidth),parseInt(document.querySelector("div#chart-rsi>div.vertical-cursor").offsetHeight))},Va=()=>{const t=i.kernelChannel(e.chart.data,89,3.5),l=t.flatMap(u=>({time:u.time,value:parseFloat(parseFloat(u.upperChannel).toFixed(4))})),r=t.flatMap(u=>({time:u.time,value:parseFloat(parseFloat(u.lowerChannel).toFixed(4))})),h=t.flatMap((u,x)=>{const y=parseFloat(u.smoothedData)<e.chart.data[x].close?"#A6FF96":"#DA0C81";return{time:u.time,value:parseFloat(parseFloat(u.smoothedData).toFixed(4)),color:y}});T.setData(h),c.setData(l),Y.setData(r)};V(()=>A.w,function(s){Ae()}),V(()=>A.h,function(s){Ae()});const Pa=Fa(function(s){E.value=!0;let t=e.chart.data[0].time;i.searchData({exchange:e.getExchange,interval:e.getTemporality,symbolsPairs:e.getSymbol,limit:500,cci:e.chart.indicators.cci,endTime:t}).then(l=>{l.pop(),console.log({previusData:l});const r=[...l,...e.chart.data];r.sort((h,u)=>parseInt(h.time)-parseInt(u.time)),e.chart.data=r,W.setData(r),s(),e.chart.indicators.macd&&L.value.processData(),D.value&&D.value.updateAndRecalculate()}).finally(function(){E.value=!1})},1e3),Ba=()=>{var s;if((s=e==null?void 0:e.chart)!=null&&s.data&&e.chart.data.length>100){const t=e.chart.data.flatMap(l=>l.close);i.calculoRSI(t.slice(-100)).then(l=>{var r;g.value=l.pop(),D.value&&((r=e==null?void 0:e.chart)!=null&&r.data)&&e.chart.data.length>0&&e.chart.data[e.chart.data.length-1]&&(e.chart.data[e.chart.data.length-1].rsi=g,e.chart.indicators.rsi&&e.chart.data&&e.chart.data.length>0&&D.value.update({value:g,time:e.chart.data[e.chart.data.length-1].time}))})}},Ha=Fa(async()=>{const s=String(e.getSymbol).toLowerCase();q.value=await new WebSocket(`wss://fstream.binance.com/ws/${s}@kline_${e.getTemporality}`),q.value.addEventListener("message",async function(t){var r,h,u,x;if(la.value&&la.value==!0||A.loading)return;const l=JSON.parse(t.data);if(t&&(l!=null&&l.s)&&l.result==null&&(l!=null&&l.k)&&(l==null?void 0:l.k)!=null&&((r=l==null?void 0:l.k)==null?void 0:r.i)==e.getTemporality&&e.chart.data.length&&String(l.s).toUpperCase()==String(e.getSymbol).toUpperCase()){const y=parseFloat(l.k.c),w=l.k.T?parseInt(l.k.T):null,P=l.k.x?l.k.x:!1,v=l.k.V?parseFloat(l.k.V):null;ve&&ve.update({value:v,time:w,color:"#d1e1e159"}),Q.value=y,n.price=y>100?parseFloat(y).toFixed(2):y;const f={time:parseInt(l.k.T),open:parseFloat(l.k.o),high:parseFloat(l.k.h),low:parseFloat(l.k.l),close:y,value:y,volume:v};if(e.chart.data[e.chart.data.length-1].time=f.time,e.chart.data[e.chart.data.length-1].open=f.open,e.chart.data[e.chart.data.length-1].high=f.high,e.chart.data[e.chart.data.length-1].low=f.low,e.chart.data[e.chart.data.length-1].close=f.close,e.chart.data[e.chart.data.length-1].value=f.value,e.chart.data[e.chart.data.length-1].volume=f.volume,Ba(),P&&((h=e==null?void 0:e.chart)!=null&&h.data)&&(await ja(),console.log("xClosed")),!J.value&&((u=e==null?void 0:e.chart)!=null&&u.data)&&e.chart.data.length>2&&e.chart.data[e.chart.data.length-1].high)if(e.chart.data[e.chart.data.length-1].high=f.high,e.chart.data[e.chart.data.length-1].low=f.low,e.chart.data[e.chart.data.length-1].close=f.close,e.chart.data[e.chart.data.length-1].volume=f.volume,e.chart.data[e.chart.data.length-1].value=f.value,(x=e==null?void 0:e.getIndicators)!=null&&x.heikinAshi){let ye=i.calculoNextHeikinAskiCandle(e.chart.data,e.chart.data[e.chart.data.length-1]);ye.time=f.time,W.update(ye)}else W.update(f);ia.value=parseInt((f.time-new Date().getTime())/1e3)}else if(l.s&&String(l.s).toUpperCase()!=String(e.getSymbol).toUpperCase()){const w=`${String(l.s).toLowerCase()}@kline_${e.getTemporality}`;q.value.send(JSON.stringify({method:"UNSUBSCRIBE",params:[w],id:new Date().getTime()})),console.log("* UNSUBSCRIBE",{dtJson:l,evt:t,previusSocket:w,s:e.getSymbol},e.getSymbol,t.currentTarget,l.s===e.getSymbol),q.value.send(JSON.stringify({method:"LIST_SUBSCRIPTIONS",id:new Date().getTime()}))}}),console.log("openSocket")}),Oa=async s=>{e.chart.temporality=s.value,La({value:String(e.getSymbol)})},La=s=>{A.loading=!0,la.value=!0,sa=s.value;const l=`${String(e.getSymbol).toLowerCase()}@kline_${e.getTemporality}`;if(e.chart.symbols=String(sa).toUpperCase(),S.push({name:"alpha:data",params:{symbol:String(sa).toLowerCase(),temporality:e.chart.temporality}}),q.value)return q.value.send(JSON.stringify({method:"UNSUBSCRIBE",params:[l],id:1})),q.value.send(JSON.stringify({method:"SUBSCRIBE",params:[`${String(e.getSymbol).toLowerCase()}@kline_${e.getTemporality}`],id:1})),Z("refresh")},ja=async(s=!0)=>{J.value=s,i.recalculeIndicators(e.chart.data).then(t=>{var h;e.chart.data[e.chart.data.length-1]=t.last;const l=e.chart.data[e.chart.data.length-1].time-e.chart.data[e.chart.data.length-2].time;console.log({dataUpdate:t});const r={open:t.last.close,close:t.last.close,high:t.last.close,low:t.last.close,time:t.last.time+l,macd:t.last.macd,volume:(h=t==null?void 0:t.last)!=null&&h.volume?t.last.volume:0,bb:{middle:t.last.bb.middle,upper:t.last.bb.upper,lower:t.last.bb.lower,pb:t.last.bb.pb},rsi:t.last.bb.rsi,hma10:t.last.hma10,hma20:t.last.hma20,value:t.last.value};e.chart.data.push(r),ra(),J.value=!1}),e.chart.indicators.macd&&L.value&&L.value.processData()},$a=()=>{o&&(M=o.addLineSeries({color:"#f6483e33",lineWidth:2,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:2}),ee=o.addLineSeries({color:"#f6483e33",lineWidth:7,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),ke=o.addLineSeries({color:"#f0f8ff8f",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:2}),we=o.addLineSeries({color:"#00ffa521",lineWidth:7,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),ta=o.addLineSeries({color:"yellow",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:3}),o.addLineSeries({color:"yellow",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:2}),Pe=o.addLineSeries({color:"#84ff3d8a",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),Be=o.addLineSeries({color:"orange",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),He=o.addLineSeries({color:"#f70776",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),Oe=o.addLineSeries({color:"#00bbf0",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),je=o.addLineSeries({color:"#bae8e8",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),he=o.addLineSeries({color:Ke,lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),de=o.addLineSeries({color:Ge,lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),me=o.addLineSeries({color:Qe,lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),ue=o.addLineSeries({color:Ze,lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),fe=o.addLineSeries({color:Je,lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),Ce=o.addLineSeries({color:ea,lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),se=o.addLineSeries({color:aa,lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),pe=o.addLineSeries({color:$e,lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),be=o.addLineSeries({color:Ne,lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),ge=o.addLineSeries({color:ze,lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),Ve=o.addLineSeries({color:qe,lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),Le=o.addLineSeries({color:Ue,lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),xe=o.addLineSeries({color:Ye,lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),le=o.addLineSeries({color:Xe,lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),T=o.addLineSeries({color:"yellow",lineWidth:4,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:1}),c=o.addLineSeries({color:"#c1c1c1",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:1}),Y=o.addLineSeries({color:"#c1c1c1",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:1}))},va=()=>{const t=e.chart.data.flatMap(m=>m).sort((m,I)=>parseInt(I.time)-parseInt(m.time));let l=25,r=0,h=0,u=[],x=[],y=[],w=[];for(var P=0;P<t.length;P++)if(r++,r==l){const m=t.slice(parseInt(h*l),parseInt(h*l)+l),I=m.flatMap(O=>O),oa=m.flatMap(O=>O),F=I.sort((O,ca)=>parseFloat(ca.high)-parseFloat(O.high)),na=oa.sort((O,ca)=>parseFloat(O.low)-parseFloat(ca.low));if(!F||!F[0])return;const H=F[0];if((x.length==0&&H||H!=null&&H.high&&x[x.length-1].high<H.high)&&x.push(H),u.length==0&&H?(u.push(H),w.push({linea:[H]})):H!=null&&H.high&&u[u.length-1].high>H.high&&u.push(H),na&&na[0]){const O=na[0];(y.length==0&&O||O!=null&&O.low&&y[y.length-1].low>O.low)&&y.push(O)}r=0,h++}console.log({highDescend:x,highAccend:u,lowDescend:y,marcaciones_leneas_asc:w});const f=e.chart.data.slice(-89).sort((m,I)=>I.high===m.high?parseInt(I.time)-parseInt(m.time):parseFloat(m.high)-parseFloat(I.high));f.sort((m,I)=>parseInt(m.time)-parseInt(I.time)),f.flatMap(m=>m).sort((m,I)=>parseFloat(I.high)-parseFloat(m.high));let a=null;for(var P=f.length-1;P>=0;P--)a?f[P].high>a.high&&(a=f[P]):a=f[P];u.flatMap(m=>({time:m.time,value:m.high,color:"#EC8F5E"})),o.addLineSeries({color:"#EC8F5E",lineWidth:3,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,crosshairMarkerVisible:!1,lineStyle:1});const p=x.flatMap(m=>({time:m.time,value:m.high,color:"olive"}));X.resistencia&&o&&X.resistencia.setData([]),X.soporte&&o&&X.soporte.setData([]),X.resistencia=o.addLineSeries({color:"olive",lineWidth:3,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,crosshairMarkerVisible:!1,lineStyle:1}),X.soporte=o.addLineSeries({color:"#fff",lineWidth:3,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,crosshairMarkerVisible:!1,lineStyle:1});const B=p.flatMap(m=>m);B.sort((m,I)=>parseInt(m.time)-parseInt(I.time)),X.resistencia.setData(B);const ae=y.flatMap(m=>({time:m.time,value:m.low,color:"#fff"}));X.soporte.setData(ae.sort((m,I)=>parseInt(m.time)-parseInt(I.time))),console.log("lineaTendenciaAlcista::..")},Sa=()=>{if(ee.setData([]),we.setData([]),ke.setData([]),!e.chart.indicators.bb)return;const s=e.chart.data.flatMap(r=>{let h={value:r.bb.upper,time:r.time};return r.high>r.bb.upper&&(h.color="#f443369e"),h}),t=e.chart.data.flatMap(r=>{let h={value:r.bb.lower,time:r.time};return r.low<r.bb.lower&&(h.color="#00ffa58a"),h}),l=e.chart.data.flatMap(r=>({value:r.bb.middle,time:r.time}));s.sort((r,h)=>r.time-h.time),t.sort((r,h)=>r.time-h.time),l.sort((r,h)=>r.time-h.time),ee.setData(s),we.setData(t),ke.setData(l)},ne=()=>{if(e.chart.data=e.chart.data.sort((s,t)=>s.time<t.time?-1:s.time>t.time?1:0),e.chart.indicators.hma10){const s=e.chart.data.flatMap(t=>({value:t.hma10,time:t.time}));Pe.setData(s)}if(e.chart.indicators.hma20){const s=e.chart.data.flatMap(t=>({value:t.hma20,time:t.time}));Be.setData(s)}if(e.chart.indicators.hma55){const s=i.calculateHMA(e.chart.data,55,"#f70776");He.setData(s)}if(e.chart.indicators.hma89){const s=i.calculateHMA(e.chart.data,89,"#9896f1");Oe.setData(s)}if(e.chart.indicators.hma233){const s=i.calculateHMA(e.chart.data,233,"#00bbf0");je.setData(s)}},ya=()=>{if(!e.chart.indicators.psar){M.setData([]);return}const s=e.chart.data.flatMap(h=>h.high),t=e.chart.data.flatMap(h=>h.low),r=i.calculoPSAR(t,s).flatMap((h,u)=>({value:h,time:e.chart.data[u].time,color:e.chart.data[u].close>h?"aqua":"red"}));M.setData(r)},Na=()=>{pe.setData([]),be.setData([]),ge.setData([]),Ve.setData([]),Le.setData([]),xe.setData([]),le.setData([]),e.chart.indicators.sma10&&pe.setData(i.calculateEMA(e.chart.data,10,$e)),e.chart.indicators.sma20&&be.setData(i.calculateEMA(e.chart.data,20,Ne)),e.chart.indicators.sma55&&ge.setData(i.calculateEMA(e.chart.data,55,ze)),e.chart.indicators.sma89&&Ve.setData(i.calculateEMA(e.chart.data,89,qe)),e.chart.indicators.sma100&&Le.setData(i.calculateEMA(e.chart.data,100,Ue)),e.chart.indicators.sma200&&le.setData(i.calculateEMA(e.chart.data,200,Ye)),e.chart.indicators.sma233&&le.setData(i.calculateEMA(e.chart.data,233,Xe))},za=()=>{he.setData([]),de.setData([]),me.setData([]),ue.setData([]),fe.setData([]),Ce.setData([]),se.setData([]),e.chart.indicators.ema10&&he.setData(i.calculateEMA(e.chart.data,10,Ke)),e.chart.indicators.ema20&&de.setData(i.calculateEMA(e.chart.data,20,Ge)),e.chart.indicators.ema55&&me.setData(i.calculateEMA(e.chart.data,55,Qe)),e.chart.indicators.ema89&&ue.setData(i.calculateEMA(e.chart.data,89,Ze)),e.chart.indicators.ema100&&fe.setData(i.calculateEMA(e.chart.data,100,Je)),e.chart.indicators.ema200&&se.setData(i.calculateEMA(e.chart.data,200,ea)),e.chart.indicators.ema233&&se.setData(i.calculateEMA(e.chart.data,233,aa))},Da=()=>{const s=new tt(e.chart.data);return new Promise((t,l)=>{s.agregarCallback(r=>{ie.alcista=r.alcista,ie.bajista=r.bajista}),t(s.iniciarProceso())})},Ma=()=>{setTimeout(function(){new Promise((s,t)=>{ie.bajista.length>0&&ie.bajista.forEach(l=>{let r=o.addLineSeries({color:"#fff",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,crosshairMarkerVisible:!1,lineStyle:0});r.setData(l),oe.bajistas.push(r)}),ie.alcista.length>0&&ie.alcista.forEach(l=>{let r=o.addLineSeries({color:"#fff",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,crosshairMarkerVisible:!1,lineStyle:0});r.setData(l),oe.alcistas.push(r)}),s(!0)})},0)},ka=async()=>{const s=await i.calculoVelasHeikinAshi(e.chart.data);W.setData(s)},ra=()=>{var s,t;Sa(),ne(),za(),Na(),ya(),(s=e==null?void 0:e.getIndicators)!=null&&s.heikinAshi&&e.getIndicators.heikinAshi==!0&&ka(),(t=e==null?void 0:e.getIndicators)!=null&&t.divergences&&setTimeout(function(){Promise.resolve(Da()).then(Ma())},0),e.chart.indicators.kernelChannel&&Va(),e.chart.indicators.srDinamic&&va(),Ya()},qa=()=>{const s=new Date().toLocaleString();Q.value&&Q.value&&Q.value!=null&&Q.value>0&&!isNaN(Q.value)&&""+parseFloat(Q.value).toFixed(4),o.applyOptions({watermark:{color:"#00ff11",visible:!0,text:`Topacio ${String(e.getSymbol).toUpperCase()}  ${e.getTemporality}  ${s}`,fontSize:14,horzAlign:"left",vertAlign:"top"}})},Ua=s=>{s.flatMap(v=>v).sort((v,f)=>v.value-f.value).slice(-7).flatMap(v=>v.time);const r=s.map(v=>v.value),h=r.reduce((v,f)=>v+f,0)/r.length,u={};r.forEach(v=>{u[v]=(u[v]||0)+1}),Object.keys(u).reduce((v,f)=>u[v]>u[f]?v:f);const x=r.slice().sort((v,f)=>v-f),y=Math.floor(x.length/2);x.length%2===0?(x[y-1]+x[y])/2:x[y];const w=parseInt(h*2.5);return s.flatMap(v=>(v.value>=w&&(v.color="#96EFFF"),v))},Ya=()=>{const s=e.chart.data.flatMap(l=>({time:l.time,value:l.volume,color:"#d1e1e159"})),t=Ua(s);ve.setData(t)};De(async()=>{A.loading=!0,A.openMenuMobile=!1;const s=document.querySelector(ma),t=parseInt(A.w/1.005),l=parseInt(s.offsetHeight),r=i.getConfigChart(t,l),h=i.getConfigVelasTransparentes();e.chart.data=await i.searchData({exchange:e.getExchange,interval:e.getTemporality,symbolsPairs:e.getSymbol,limit:500,cci:e.chart.indicators.cci});const u=document.querySelector(ma);console.log({configChart:r},e.chart.data),o=fa(u,r),W=o.addCandlestickSeries(h),W.setData(e.chart.data),ve=o.addHistogramSeries({lastValueVisible:!1,priceLineVisible:!1,priceFormat:{type:"volume"},priceScaleId:"volumen"}),ve.priceScale().applyOptions({priceFormat:{type:"volume"},scaleMargins:{top:.85,bottom:0}});const y=(await e.searchSymbolsFutures()).flatMap(a=>e.chart.symbols!=a.symbol?{label:a.symbol,value:a.symbol}:{label:a.symbol,value:a.symbol,selected:!0});pa.value=y.filter(a=>a.value.includes("USDT")),$a(),ra(),qa();let w=o.timeScale().getVisibleLogicalRange(),P=w&&(w!=null&&w.from)?parseInt(w.from):null;function v(a){var B,ae,m,I;const p=document.querySelector("div#chart-rsi>div.vertical-cursor");if(a!=null&&a.time&&o){const oa=o.timeScale().getVisibleLogicalRange(),F=parseInt(a.logical);(B=a==null?void 0:a.point)!=null&&B.x&&p&&(D.value.chart.timeScale().setVisibleLogicalRange(oa),p.style=`transform:translateX(${a.point.x}px)`),e.chart.data[F]&&(n.rsi=e.chart.data[F].rsi,n.low=e.chart.data[F].low,n.high=e.chart.data[F].high,n.close=e.chart.data[F].close,n.move=i.calculatePercentageBetweenValues(n.high,n.low),n.ps=null,n.hma10=(ae=e.chart.data[F])!=null&&ae.hma10?parseFloat(e.chart.data[F].hma10).toFixed(4):null,n.hma20=(m=e.chart.data[F])!=null&&m.hma20?parseFloat(e.chart.data[F].hma20).toFixed(4):null,e.chart.data[F].bb&&n.high>e.chart.data[F].bb.upper&&(n.ps=i.calculatePercentageBetweenValues(n.high,e.chart.data[F].bb.upper)),e.chart.data[F].bb&&n.low<e.chart.data[F].bb.lower&&(n.ps=i.calculatePercentageBetweenValues(e.chart.data[F].bb.lower,n.low))),w=o.timeScale().getVisibleLogicalRange(),P=w!=null&&w.from?parseInt(w.from):null,P&&P<250&&!E.value&&Pa(ra)}else p&&(p.style="display:none"),n.rsi=null,n.ps=null,n.move=null,n.low=null,n.high=null,n.close=null,n.ema200=null,n.hma10=null,n.hma20=null;(I=a==null?void 0:a.point)!=null&&I.y&&(Fe=W.coordinateToPrice(a.point.y))}o.subscribeCrosshairMove(v),document.addEventListener("keydown",a=>{if(re[a.key]=!0,re.Alt&&a.key=="h"){const p=W.createPriceLine({price:Fe,color:"#FFF"});Se.push(p)}if(re.Alt&&a.key=="s"){const p=W.createPriceLine({price:Fe,color:"#ff006e",title:"Short"});Se.push(p)}if(re.Alt&&a.key=="l"){const p=W.createPriceLine({price:Fe,color:"#00ff11",title:"Long"});Se.push(p)}(re.Alt&&a.key=="r"||a.key=="c")&&(console.log("* Cleaning Lines"),Se.map(p=>W.removePriceLine(p)),Se=[])}),document.addEventListener("keyup",a=>{delete re[a.key]}),document.querySelector("div.container-chart").addEventListener("click",a=>{var p;if((p=window==null?void 0:window.visualViewport)!=null&&p.width){const B=window.visualViewport.width,ae=parseInt(B)*.2;a.x>ae&&e.chart.menuOpen===!0&&(e.chart.menuOpen=!1)}}),setTimeout(function(){Ae()},1e3),Ha(),A.loading=!1,V(()=>e.chart.indicators.srDinamic,a=>{!a&&X.resistencia&&X.soporte?(X.resistencia.setData([]),X.soporte.setData([])):va()}),V(()=>e.chart.indicators.cci,async a=>{const p=await i.searchData({exchange:e.getExchange,interval:e.getTemporality,symbolsPairs:e.getSymbol,limit:500,cci:e.chart.indicators.cci});p.sort((B,ae)=>parseInt(B.time)-parseInt(ae.time)),e.chart.data=p,W.setData(p),console.log("newValue",a,{allData:p})}),V(()=>e.chart.indicators.psar,a=>{a?ya():M.setData([])}),V(()=>e.chart.indicators.kernelChannel,a=>{a?Va():(T.setData([]),c.setData([]),Y.setData([]))}),V(()=>e.chart.indicators.bb,a=>{a?Sa():(ee.setData([]),we.setData([]),ke.setData([]))}),V(()=>e.chart.indicators.hma10,a=>{a?ne():Pe.setData([])}),V(()=>e.chart.indicators.hma20,a=>{a?ne():Be.setData([])}),V(()=>e.chart.indicators.hma55,a=>{a?ne():He.setData([])}),V(()=>e.chart.indicators.hma89,a=>{a?ne():Oe.setData([])}),V(()=>e.chart.indicators.hma233,a=>{a?ne():je.setData([])}),V(()=>e.chart.indicators.heikinAshi,a=>{a?ka():W.setData(e.chart.data)}),V(()=>e.chart.indicators.ema10,a=>{a?he.setData(i.calculateEMA(e.chart.data,10,Ke)):he.setData([])}),V(()=>e.chart.indicators.ema20,a=>{a?de.setData(i.calculateEMA(e.chart.data,20,Ge)):de.setData([])}),V(()=>e.chart.indicators.ema55,a=>{a?me.setData(i.calculateEMA(e.chart.data,55,Qe)):me.setData([])}),V(()=>e.chart.indicators.ema89,a=>{a?ue.setData(i.calculateEMA(e.chart.data,89,Ze)):ue.setData([])}),V(()=>e.chart.indicators.ema100,a=>{a?fe.setData(i.calculateEMA(e.chart.data,100,Je)):fe.setData([])}),V(()=>e.chart.indicators.ema200,a=>{a?(ta.setData([]),Ce.setData(i.calculateEMA(e.chart.data,200,ea))):(ta.setData([]),Ce.setData([]))}),V(()=>e.chart.indicators.ema233,a=>{a?se.setData(i.calculateEMA(e.chart.data,233,aa)):se.setData([])}),V(()=>e.chart.indicators.sma10,a=>{a?pe.setData(i.calcularSMA(e.chart.data,10,$e)):pe.setData([])}),V(()=>e.chart.indicators.sma20,a=>{a?be.setData(i.calcularSMA(e.chart.data,20,Ne)):be.setData([])}),V(()=>e.chart.indicators.sma55,a=>{a?ge.setData(i.calcularSMA(e.chart.data,55,ze)):ge.setData([])}),V(()=>e.chart.indicators.sma89,a=>{a?Ve.setData(i.calcularSMA(e.chart.data,89,qe)):Ve.setData([])}),V(()=>e.chart.indicators.sma100,a=>{a?Le.setData(i.calcularSMA(e.chart.data,100,Ue)):Le.setData([])}),V(()=>e.chart.indicators.sma200,a=>{a?xe.setData(i.calcularSMA(e.chart.data,200,Ye)):xe.setData([])}),V(()=>e.chart.indicators.sma233,a=>{a?le.setData(i.calcularSMA(e.chart.data,233,Xe)):le.setData([])}),V(()=>e.chart.indicators.divergences,a=>{a?Promise.resolve(Da()).then(Ma()):(oe.alcistas.forEach(function(p){p.setData([])}),oe.bajistas.forEach(function(p){p.setData([])}),oe.alcistas=[],oe.bajistas=[],ie.alcista=[],ie.bajista=[])});function f(a){var m;const p=o.timeScale().getVisibleLogicalRange(),B=o.timeScale().getVisibleRange(),ae=parseInt(o.timeScale().scrollPosition());Me.value={visibleLogicalRange:p,visibleRange:B,scrollPosition:ae,t:Date.now()},L!=null&&L.value&&((m=L==null?void 0:L.value)!=null&&m.timeScale)&&L.value.timeScale().setVisibleLogicalRange(a)}const ye=(a,p)=>p.time&&p.seriesData.get(a)||null;o.subscribeCrosshairMove(a=>{var B;const p=ye(W,a);L!=null&&L.value&&((B=L==null?void 0:L.value)!=null&&B.syncCrosshair)&&L.value.syncCrosshair(W,p)}),o.timeScale().subscribeVisibleLogicalRangeChange(f)});const wa=s=>{o.setCrosshairPosition(s,s.time,W)};return G({mainStore:A,chartStore:e,lastPrice:Q,details:n,leftTime:ia,getSegundsLeft:ba,getMinLeft:ga,getDaysLeft:Ta,Selector:da,ChartRsi:_a,ChartMacd:Aa,chartMacd:L,lastRSI:g,syncCrosshairMACD:wa}),(s,t)=>(_(),$("div",{class:at({"container-chart":!0,"graphic-macd":K(e).chart.indicators.macd})},[b("div",rt,[b("div",ot,[b("p",null,"[ FUTURES: "+j(K(e).getExchange),1),b("div",nt,[b("div",ct,[ha(da,{opciones:pa.value,onlyLabel:!1,lblPorDefecto:K(e).chart.symbols,onActionChange:La},null,8,["opciones","lblPorDefecto"])]),b("div",ht,[ha(da,{lblPorDefecto:K(e).getTemporality,opciones:Ea.value,onlyLabel:!1,modelValue:k.value,"onUpdate:modelValue":t[0]||(t[0]=l=>k.value=l),onActionChange:Oa},null,8,["lblPorDefecto","opciones","modelValue"])])])])]),Ja(b("div",{id:"chart-main",ref_key:"chartElement",ref:C},[b("div",dt,[b("span",mt,[t[1]||(t[1]=Ee("HMA10 ")),n.hma10?(_(),$("label",ut,j(n.hma10),1)):U("",!0)]),b("span",ft,[t[2]||(t[2]=Ee("HMA20 ")),n.hma10?(_(),$("label",pt,j(n.hma20),1)):U("",!0)]),b("span",bt,[t[3]||(t[3]=Ee("EMA200 --- ")),n.ema200?(_(),$("label",gt,j(n.ema200),1)):U("",!0)])]),b("div",Vt,[n.price?(_(),$("span",Lt,[t[4]||(t[4]=b("p",null,"Price:",-1)),b("b",null,j(n.price),1),b("b",null,"RSI "+j(g.value),1)])):U("",!0),n.high?(_(),$("span",vt,[t[5]||(t[5]=b("p",null,"High:",-1)),b("p",null,j(n.high),1)])):U("",!0),n.low?(_(),$("span",St,[t[6]||(t[6]=b("p",null,"Low:",-1)),b("p",null,j(n.low),1)])):U("",!0),n.close?(_(),$("span",yt,[t[7]||(t[7]=b("p",null,"Close:",-1)),b("p",null,j(n.close),1)])):U("",!0),n.rsi?(_(),$("span",Dt,[t[8]||(t[8]=b("p",null,"RSI",-1)),b("p",null,j(n.rsi),1)])):U("",!0),n.move?(_(),$("span",Mt,[t[9]||(t[9]=b("p",null,"move",-1)),b("p",null,j(n.move)+"%",1)])):U("",!0),n.ps?(_(),$("span",kt,[t[10]||(t[10]=b("b",null,"PS ",-1)),b("p",null,j(n.ps)+"%",1)])):U("",!0)]),b("div",wt,[t[11]||(t[11]=b("span",null,"Left time",-1)),Ee(" "+j(Ra.value)+":"+j(ga.value)+":"+j(ba.value),1)]),K(e).chart.symbols=="BTCUSDT"?(_(),Re(lt,{key:0})):U("",!0)],512),[[et,!K(A).loading]]),K(e).chart.data.length>0&&!K(A).loading&&K(e).chart.indicators.rsi?(_(),Re(_a,{key:0,ref_key:"chartRsi",ref:D},null,512)):U("",!0),!K(A).loading&&K(e).chart.data.length>0&&K(e).chart.indicators.macd?(_(),Re(Aa,{key:1,chartInfoVisible:Me.value,onResizeChart:Ae,onSyncCrosshair:wa,ref_key:"chartMacd",ref:L},null,8,["chartInfoVisible"])):U("",!0),ha(it)],2))}},xt=Ia(Ct,[["__scopeId","data-v-f2fa54f1"]]),Ft={class:"charts"},_t={__name:"ChartView",setup(ce,{expose:G}){const N=R(!1),Z=()=>{N.value=!0,console.log("reloadChart"),setTimeout(function(){N.value=!1},100)},d=new Worker(new URL("/assets/claculateForCharts-BdmvpLvX.js",import.meta.url)),S=async()=>{d.postMessage({name:"searchData"}),d.onmessage=z=>{z.data&&console.log({recibe:z.data})}};return De(()=>{S()}),G({isRefresh:N}),(z,te)=>(_(),$("main",Ft,[N.value?U("",!0):(_(),Re(xt,{key:0,onRefresh:Z}))]))}},Bt=Ia(_t,[["__scopeId","data-v-edd3560a"]]);export{Bt as default};