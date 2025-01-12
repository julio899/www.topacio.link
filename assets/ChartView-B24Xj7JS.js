import{r as _,o as _e,cc as Ya,a as k,b as P,d as p,F as Xa,i as Fa,_ as Wa,cd as Ka,ce as Ga,u as Qa,cf as Me,p as we,h as b,t as T,q as O,k as oa,c9 as Za,cg as Ja,e as Ce,f as R,c as xe,s as et}from"./index-CvWf1ljO.js";import{V as Aa}from"./lightweight-charts.production-Cq3om6Hu.js";import{u as ha}from"./chart-DsYQxzvD.js";import{p as at}from"./processDivergence-CKT4E2ef.js";import{d as Ca,_ as xa,a as tt}from"./ActivadorIndicator-DdcvwqWT.js";import{_ as na}from"./Selector-Dw-oEiRq.js";const _a={__name:"ChartRsi",setup(Fe,{expose:q}){const B=new Fa,U=ha();let d=[];const w=_(null);let H;return _e(()=>{d=U.chart.data.flatMap(F=>{let M={value:F.rsi,time:F.time};return F.rsi>75&&(M.color="#f70776"),F.rsi<25&&(M.color="#e0ffcd"),M});const e=document.querySelector("#chart-rsi");let l=B.getConfigChart(e.offsetWidth,e.offsetHeight);l.priceLineVisible=!1,l.priceLineColor="transparent",l.lastValueVisible=!1,l.localization={priceFormatter:F=>parseFloat(F).toFixed(2),timeFormatter:F=>Ya(new Date(F)).format("DD-MM-YYYY HH:mm:ss")},w.value=Aa(e,l),H=w.value.addLineSeries({color:"rgba(4, 111, 232, 1)",lineWidth:1,priceLineVisible:!1}),H.setData(d),console.log("dataRsi l:",d.length)}),q({chart:w,updateAndRecalculate:()=>{d=U.chart.data.flatMap(e=>{if(!e.rsi)return[];let l={value:e.rsi,time:e.time};return e.rsi>75&&(l.color="#f70776"),e.rsi<25&&(l.color="#e0ffcd"),l}),H.setData(d)},update:e=>{H.update(e),w.value.applyOptions({watermark:{color:"rgba(255, 255, 255, 1)",visible:!0,text:`RSI 14 SMA ${e.value}`,fontSize:11,horzAlign:"left",vertAlign:"top"}})}}),(e,l)=>(k(),P(Xa,null,[l[0]||(l[0]=p("div",{id:"chart-rsi"},[p("div",{class:"vertical-cursor"})],-1)),l[1]||(l[1]=p("div",{id:"chart-macd"},null,-1))],64))}},st={class:"container-volumen"},it={__name:"FloatingVolume",setup(Fe){const q=ha(),B=new WebSocket(`wss://stream.binance.com:9443/ws/${String(q.chart.symbols).toLowerCase()}@depth`);let U={type:"bar",data:{labels:[],datasets:[{label:"Bids",data:[],backgroundColor:"rgba(75, 192, 75, 0.7)"},{label:"Asks",data:[],backgroundColor:"rgba(192, 75, 75, 0.7)"}]},options:{indexAxis:"y",scales:{x:{grid:{color:()=>"transparent",drawOnChartArea:!1},border:{display:!1},ticks:{display:!1}},y:{grid:{color:()=>"transparent",drawOnChartArea:!1},border:{display:!1},ticks:{color:"white"}}},elements:{bar:{borderWidth:0}},responsive:!0,plugins:{legend:{position:"right",color:"white",display:!1},title:{display:!0,text:"Flujo de Volume (Real-Time)",color:"white"}}}};return _e(async()=>{const d=new Chart(document.getElementById("order-book-chart").getContext("2d"),U);let w=await q.searchDataOrderBook(q.chart.symbols);const H=w.bids.map(l=>parseFloat(l[0]).toFixed(4)),K=w.asks.map(l=>parseFloat(l[0]).toFixed(4)),C=w.bids.map(l=>l[1]),e=w.asks.map(l=>l[1]);d.data.datasets[0].data=C,d.data.datasets[1].data=e,d.data.labels=[].concat(H,K).slice(0,10),d.update(),B.onerror=l=>{console.error("WebSocket Error:",l)},B.onclose=()=>{console.log("WebSocket Connection Closed")},B.onmessage=l=>{const F=JSON.parse(l.data),M=F.b.map($=>$[1]),L=F.b.map($=>parseFloat($[0]).toFixed(4)),z=F.a.map($=>$[1]),ae=F.a.map($=>parseFloat($[0]).toFixed(4));d.data.labels=[].concat(L,ae),d.data.datasets[0].data=M,d.data.datasets[1].data=z,d.update()}}),(d,w)=>(k(),P("div",st,w[0]||(w[0]=[p("canvas",{id:"order-book-chart",width:"300",height:"300"},null,-1)])))}},lt={class:"target-selector"},rt={class:"panelTarget"},ot={class:"selectors-areas"},nt={class:"target-symbols"},ct={class:"target-temporality"},ht={class:"legend"},dt={class:"l-hma10"},ut={key:0,id:"hma10-label"},ft={class:"l-hma20"},mt={key:0,id:"hma20-label"},pt={class:"l-ema200"},bt={key:0,id:"ema200-label"},gt={class:"details"},Vt={key:0,class:"d-price"},Lt={key:1,class:"d-high"},vt={key:2,class:"d-low"},yt={key:3,class:"d-close"},St={key:4,class:"d-rsi"},Dt={key:5,class:"d-move"},kt={key:6,class:"d-ps"},Mt={class:"timer-counter"},ca="#chart-main",wt={__name:"ChartMobile",emits:["refresh"],setup(Fe,{expose:q,emit:B}){var Ma,wa;const U=B,d=Ka(),w=Ga(),H=d.params&&d.params&&d.params.symbol?d.params.symbol.toString().toUpperCase():"BTCUSDT",K=d.params&&d.params&&d.params.temporality?d.params.temporality.toString().toLocaleLowerCase():"4h",C=Qa(),e=ha(),l=new Fa,F=_(null),M=_(null),L=_(null),z=_(null),ae=_(!1),$=_(!1),da=_(null);let o,x;const Y=_(0),te=_(0),ua=_("15m");let We,Ae,Ee,be,ge,Ve,Le,Ie,Te,Re,Pe,Be,se,ie,le,re,oe,ve,G,ne,ce,he,de,ue,ye,Q,He="#e0ffcd",je="#f96d00",Oe="#ff347f",$e="#a393eb",Ne="#35bcbf",qe="#8ed6ff",ze="#b6cdbd",Ue="#cbf078",Ye="#0092ca",Xe="#e84a5f",Ke="#a393eb",Ge="#defcf9",Qe="#35bcbf",Ze="#93deff",Je,fe;const ea=_(null),X=Me({bajista:[],alcista:[]}),j=Me({resistencia:null,soporte:null});let Z=[],me=[],Se=0,aa=null;const J=Me({alcistas:[],bajistas:[]}),n=Me({price:null,close:null,high:null,low:null,rsi:null,rsih:null,higl:null,ps:null}),Ea=_([{value:"1m",label:"1m"},{value:"5m",label:"5m"},{value:"15m",label:"15m"},{value:"30m",label:"30m"},{value:"1h",label:"1h"},{value:"2h",label:"2h"},{value:"4h",label:"4h"},{value:"1d",label:"1d"},{value:"3d",label:"3d"},{value:"1w",label:"1w"}].flatMap(s=>K==s.label?{value:s.value,label:s.label,selected:!0}:{value:s.value,label:s.label}));(Ma=d==null?void 0:d.params)!=null&&Ma.symbol?e.chart.symbols=String(d.params.symbol).toUpperCase():e.chart.symbols=H,(wa=d==null?void 0:d.params)!=null&&wa.temporality?e.chart.temporality=d.params.temporality:e.chart.temporality=K;const fa=_([]),ta=_(!1);function De(){const s=new Date().getTime()+ea.value*1e3-Date.parse(new Date),t=Math.floor(s/1e3%60),i=Math.floor(s/1e3/60%60),r=Math.floor(s/(1e3*60*60)%24),c=Math.floor(s/(1e3*60*60*24));return{total:s,days:c<10?"0"+c:c,hours:r<10?"0"+r:r,minutes:i<10?"0"+i:i,seconds:t<10?"0"+t:t}}const ma=we(()=>De().seconds),pa=we(()=>De().minutes),Ia=we(()=>De().hours),Ta=we(()=>De().days),ke=()=>{var i;const s=document.querySelector(ca);s!=null&&s.offsetHeight&&(o!=null&&o.resize)&&o.resize(parseInt(C.w/1.008),parseInt(s.offsetHeight));const t=document.querySelector("div#chart-rsi>div.vertical-cursor");(i=M==null?void 0:M.value)!=null&&i.chart&&t&&M.value.chart.resize(parseInt(document.querySelector("div.tv-lightweight-charts").offsetWidth),parseInt(document.querySelector("div#chart-rsi>div.vertical-cursor").offsetHeight))},ba=()=>{const t=l.kernelChannel(e.chart.data,89,3.5),i=t.flatMap(u=>({time:u.time,value:parseFloat(parseFloat(u.upperChannel).toFixed(4))})),r=t.flatMap(u=>({time:u.time,value:parseFloat(parseFloat(u.lowerChannel).toFixed(4))})),c=t.flatMap((u,y)=>{const V=parseFloat(u.smoothedData)<e.chart.data[y].close?"#A6FF96":"#DA0C81";return{time:u.time,value:parseFloat(parseFloat(u.smoothedData).toFixed(4)),color:V}});We.setData(c),Ae.setData(i),Ee.setData(r)};b(()=>C.w,function(s){ke()}),b(()=>C.h,function(s){ke()});const Ra=Ca(function(s){$.value=!0;let t=e.chart.data[0].time;l.searchData({exchange:e.getExchange,interval:e.getTemporality,symbolsPairs:e.getSymbol,limit:500,cci:e.chart.indicators.cci,endTime:t}).then(i=>{i.pop(),console.log({previusData:i});const r=[...i,...e.chart.data];r.sort((c,u)=>parseInt(c.time)-parseInt(u.time)),e.chart.data=r,x.setData(r),s(),e.chart.indicators.macd&&L.value.processData(),M.value&&M.value.updateAndRecalculate()}).finally(function(){$.value=!1})},1e3),Pa=()=>{var s;if((s=e==null?void 0:e.chart)!=null&&s.data&&e.chart.data.length>100){const t=e.chart.data.flatMap(i=>i.close);l.calculoRSI(t.slice(-100)).then(i=>{var r;te.value=i.pop(),M.value&&((r=e==null?void 0:e.chart)!=null&&r.data)&&e.chart.data.length>0&&e.chart.data[e.chart.data.length-1]&&(e.chart.data[e.chart.data.length-1].rsi=te,e.chart.indicators.rsi&&e.chart.data&&e.chart.data.length>0&&M.value.update({value:te,time:e.chart.data[e.chart.data.length-1].time}))})}},Ba=Ca(async()=>{const s=String(e.getSymbol).toLowerCase();z.value=await new WebSocket(`wss://fstream.binance.com/ws/${s}@kline_${e.getTemporality}`),z.value.addEventListener("message",async function(t){var r,c,u,y;if(ta.value&&ta.value==!0||C.loading)return;const i=JSON.parse(t.data);if(t&&(i!=null&&i.s)&&i.result==null&&(i!=null&&i.k)&&(i==null?void 0:i.k)!=null&&((r=i==null?void 0:i.k)==null?void 0:r.i)==e.getTemporality&&e.chart.data.length&&String(i.s).toUpperCase()==String(e.getSymbol).toUpperCase()){const V=parseFloat(i.k.c),v=i.k.T?parseInt(i.k.T):null,W=i.k.x?i.k.x:!1,g=i.k.V?parseFloat(i.k.V):null;fe&&fe.update({value:g,time:v,color:"#d1e1e159"}),Y.value=V,n.price=V>100?parseFloat(V).toFixed(2):V;const f={time:parseInt(i.k.T),open:parseFloat(i.k.o),high:parseFloat(i.k.h),low:parseFloat(i.k.l),close:V,value:V,volume:g};if(e.chart.data[e.chart.data.length-1].time=f.time,e.chart.data[e.chart.data.length-1].open=f.open,e.chart.data[e.chart.data.length-1].high=f.high,e.chart.data[e.chart.data.length-1].low=f.low,e.chart.data[e.chart.data.length-1].close=f.close,e.chart.data[e.chart.data.length-1].value=f.value,e.chart.data[e.chart.data.length-1].volume=f.volume,Pa(),W&&((c=e==null?void 0:e.chart)!=null&&c.data)&&(await ja(),console.log("xClosed")),!ae.value&&((u=e==null?void 0:e.chart)!=null&&u.data)&&e.chart.data.length>2&&e.chart.data[e.chart.data.length-1].high)if(e.chart.data[e.chart.data.length-1].high=f.high,e.chart.data[e.chart.data.length-1].low=f.low,e.chart.data[e.chart.data.length-1].close=f.close,e.chart.data[e.chart.data.length-1].volume=f.volume,e.chart.data[e.chart.data.length-1].value=f.value,(y=e==null?void 0:e.getIndicators)!=null&&y.heikinAshi){let pe=l.calculoNextHeikinAskiCandle(e.chart.data,e.chart.data[e.chart.data.length-1]);pe.time=f.time,x.update(pe)}else x.update(f);ea.value=parseInt((f.time-new Date().getTime())/1e3)}else if(i.s&&String(i.s).toUpperCase()!=String(e.getSymbol).toUpperCase()){const v=`${String(i.s).toLowerCase()}@kline_${e.getTemporality}`;z.value.send(JSON.stringify({method:"UNSUBSCRIBE",params:[v],id:new Date().getTime()})),console.log("* UNSUBSCRIBE",{dtJson:i,evt:t,previusSocket:v,s:e.getSymbol},e.getSymbol,t.currentTarget,i.s===e.getSymbol),z.value.send(JSON.stringify({method:"LIST_SUBSCRIPTIONS",id:new Date().getTime()}))}}),console.log("openSocket")}),Ha=async s=>{e.chart.temporality=s.value,ga({value:String(e.getSymbol)})},ga=s=>{C.loading=!0,ta.value=!0,aa=s.value;const i=`${String(e.getSymbol).toLowerCase()}@kline_${e.getTemporality}`;if(e.chart.symbols=String(aa).toUpperCase(),w.push({name:"alpha:data",params:{symbol:String(aa).toLowerCase(),temporality:e.chart.temporality}}),z.value)return z.value.send(JSON.stringify({method:"UNSUBSCRIBE",params:[i],id:1})),z.value.send(JSON.stringify({method:"SUBSCRIBE",params:[`${String(e.getSymbol).toLowerCase()}@kline_${e.getTemporality}`],id:1})),U("refresh")},ja=async(s=!0)=>{ae.value=s,l.recalculeIndicators(e.chart.data).then(t=>{var c;e.chart.data[e.chart.data.length-1]=t.last;const i=e.chart.data[e.chart.data.length-1].time-e.chart.data[e.chart.data.length-2].time;console.log({dataUpdate:t});const r={open:t.last.close,close:t.last.close,high:t.last.close,low:t.last.close,time:t.last.time+i,macd:t.last.macd,volume:(c=t==null?void 0:t.last)!=null&&c.volume?t.last.volume:0,bb:{middle:t.last.bb.middle,upper:t.last.bb.upper,lower:t.last.bb.lower,pb:t.last.bb.pb},rsi:t.last.bb.rsi,hma10:t.last.hma10,hma20:t.last.hma20,value:t.last.value};e.chart.data.push(r),sa(),ae.value=!1}),e.chart.indicators.macd&&L.value&&L.value.processData()},Oa=()=>{o&&(be=o.addLineSeries({color:"#f6483e33",lineWidth:2,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:2}),ge=o.addLineSeries({color:"#f6483e33",lineWidth:7,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),Ve=o.addLineSeries({color:"#f0f8ff8f",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:2}),Le=o.addLineSeries({color:"#00ffa521",lineWidth:7,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),Je=o.addLineSeries({color:"yellow",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:3}),o.addLineSeries({color:"yellow",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:2}),Ie=o.addLineSeries({color:"#84ff3d8a",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),Te=o.addLineSeries({color:"orange",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),Re=o.addLineSeries({color:"#f70776",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),Pe=o.addLineSeries({color:"#00bbf0",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),Be=o.addLineSeries({color:"#bae8e8",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),se=o.addLineSeries({color:Ue,lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),ie=o.addLineSeries({color:Ye,lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),le=o.addLineSeries({color:Xe,lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),re=o.addLineSeries({color:Ke,lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),oe=o.addLineSeries({color:Ge,lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),ve=o.addLineSeries({color:Qe,lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),G=o.addLineSeries({color:Ze,lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),ne=o.addLineSeries({color:He,lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),ce=o.addLineSeries({color:je,lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),he=o.addLineSeries({color:Oe,lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),de=o.addLineSeries({color:$e,lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),ue=o.addLineSeries({color:Ne,lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),ye=o.addLineSeries({color:qe,lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),Q=o.addLineSeries({color:ze,lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:0}),We=o.addLineSeries({color:"yellow",lineWidth:4,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:1}),Ae=o.addLineSeries({color:"#c1c1c1",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:1}),Ee=o.addLineSeries({color:"#c1c1c1",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,priceLineWidth:!1,crosshairMarkerVisible:!1,lineStyle:1}))},Va=()=>{const t=e.chart.data.flatMap(h=>h).sort((h,D)=>parseInt(D.time)-parseInt(h.time));let i=25,r=0,c=0,u=[],y=[],V=[],v=[];for(var W=0;W<t.length;W++)if(r++,r==i){const h=t.slice(parseInt(c*i),parseInt(c*i)+i),D=h.flatMap(I=>I),ia=h.flatMap(I=>I),S=D.sort((I,ra)=>parseFloat(ra.high)-parseFloat(I.high)),la=ia.sort((I,ra)=>parseFloat(I.low)-parseFloat(ra.low));if(!S||!S[0])return;const E=S[0];if((y.length==0&&E||E!=null&&E.high&&y[y.length-1].high<E.high)&&y.push(E),u.length==0&&E?(u.push(E),v.push({linea:[E]})):E!=null&&E.high&&u[u.length-1].high>E.high&&u.push(E),la&&la[0]){const I=la[0];(V.length==0&&I||I!=null&&I.low&&V[V.length-1].low>I.low)&&V.push(I)}r=0,c++}console.log({highDescend:y,highAccend:u,lowDescend:V,marcaciones_leneas_asc:v});const f=e.chart.data.slice(-89).sort((h,D)=>D.high===h.high?parseInt(D.time)-parseInt(h.time):parseFloat(h.high)-parseFloat(D.high));f.sort((h,D)=>parseInt(h.time)-parseInt(D.time)),f.flatMap(h=>h).sort((h,D)=>parseFloat(D.high)-parseFloat(h.high));let a=null;for(var W=f.length-1;W>=0;W--)a?f[W].high>a.high&&(a=f[W]):a=f[W];u.flatMap(h=>({time:h.time,value:h.high,color:"#EC8F5E"})),o.addLineSeries({color:"#EC8F5E",lineWidth:3,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,crosshairMarkerVisible:!1,lineStyle:1});const m=y.flatMap(h=>({time:h.time,value:h.high,color:"olive"}));j.resistencia&&o&&j.resistencia.setData([]),j.soporte&&o&&j.soporte.setData([]),j.resistencia=o.addLineSeries({color:"olive",lineWidth:3,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,crosshairMarkerVisible:!1,lineStyle:1}),j.soporte=o.addLineSeries({color:"#fff",lineWidth:3,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,crosshairMarkerVisible:!1,lineStyle:1});const A=m.flatMap(h=>h);A.sort((h,D)=>parseInt(h.time)-parseInt(D.time)),j.resistencia.setData(A);const N=V.flatMap(h=>({time:h.time,value:h.low,color:"#fff"}));j.soporte.setData(N.sort((h,D)=>parseInt(h.time)-parseInt(D.time))),console.log("lineaTendenciaAlcista::..")},La=()=>{if(ge.setData([]),Le.setData([]),Ve.setData([]),!e.chart.indicators.bb)return;const s=e.chart.data.flatMap(r=>{let c={value:r.bb.upper,time:r.time};return r.high>r.bb.upper&&(c.color="#f443369e"),c}),t=e.chart.data.flatMap(r=>{let c={value:r.bb.lower,time:r.time};return r.low<r.bb.lower&&(c.color="#00ffa58a"),c}),i=e.chart.data.flatMap(r=>({value:r.bb.middle,time:r.time}));s.sort((r,c)=>r.time-c.time),t.sort((r,c)=>r.time-c.time),i.sort((r,c)=>r.time-c.time),ge.setData(s),Le.setData(t),Ve.setData(i)},ee=()=>{if(e.chart.data=e.chart.data.sort((s,t)=>s.time<t.time?-1:s.time>t.time?1:0),e.chart.indicators.hma10){const s=e.chart.data.flatMap(t=>({value:t.hma10,time:t.time}));Ie.setData(s)}if(e.chart.indicators.hma20){const s=e.chart.data.flatMap(t=>({value:t.hma20,time:t.time}));Te.setData(s)}if(e.chart.indicators.hma55){const s=l.calculateHMA(e.chart.data,55,"#f70776");Re.setData(s)}if(e.chart.indicators.hma89){const s=l.calculateHMA(e.chart.data,89,"#9896f1");Pe.setData(s)}if(e.chart.indicators.hma233){const s=l.calculateHMA(e.chart.data,233,"#00bbf0");Be.setData(s)}},va=()=>{if(!e.chart.indicators.psar){be.setData([]);return}const s=e.chart.data.flatMap(c=>c.high),t=e.chart.data.flatMap(c=>c.low),r=l.calculoPSAR(t,s).flatMap((c,u)=>({value:c,time:e.chart.data[u].time,color:e.chart.data[u].close>c?"aqua":"red"}));be.setData(r)},$a=()=>{ne.setData([]),ce.setData([]),he.setData([]),de.setData([]),ue.setData([]),ye.setData([]),Q.setData([]),e.chart.indicators.sma10&&ne.setData(l.calculateEMA(e.chart.data,10,He)),e.chart.indicators.sma20&&ce.setData(l.calculateEMA(e.chart.data,20,je)),e.chart.indicators.sma55&&he.setData(l.calculateEMA(e.chart.data,55,Oe)),e.chart.indicators.sma89&&de.setData(l.calculateEMA(e.chart.data,89,$e)),e.chart.indicators.sma100&&ue.setData(l.calculateEMA(e.chart.data,100,Ne)),e.chart.indicators.sma200&&Q.setData(l.calculateEMA(e.chart.data,200,qe)),e.chart.indicators.sma233&&Q.setData(l.calculateEMA(e.chart.data,233,ze))},Na=()=>{se.setData([]),ie.setData([]),le.setData([]),re.setData([]),oe.setData([]),ve.setData([]),G.setData([]),e.chart.indicators.ema10&&se.setData(l.calculateEMA(e.chart.data,10,Ue)),e.chart.indicators.ema20&&ie.setData(l.calculateEMA(e.chart.data,20,Ye)),e.chart.indicators.ema55&&le.setData(l.calculateEMA(e.chart.data,55,Xe)),e.chart.indicators.ema89&&re.setData(l.calculateEMA(e.chart.data,89,Ke)),e.chart.indicators.ema100&&oe.setData(l.calculateEMA(e.chart.data,100,Ge)),e.chart.indicators.ema200&&G.setData(l.calculateEMA(e.chart.data,200,Qe)),e.chart.indicators.ema233&&G.setData(l.calculateEMA(e.chart.data,233,Ze))},ya=()=>{const s=new at(e.chart.data);return new Promise((t,i)=>{s.agregarCallback(r=>{X.alcista=r.alcista,X.bajista=r.bajista}),t(s.iniciarProceso())})},Sa=()=>{setTimeout(function(){new Promise((s,t)=>{X.bajista.length>0&&X.bajista.forEach(i=>{let r=o.addLineSeries({color:"#fff",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,crosshairMarkerVisible:!1,lineStyle:0});r.setData(i),J.bajistas.push(r)}),X.alcista.length>0&&X.alcista.forEach(i=>{let r=o.addLineSeries({color:"#fff",lineWidth:1,axisLabelVisible:!1,priceLineVisible:!1,lastValueVisible:!1,crosshairMarkerVisible:!1,lineStyle:0});r.setData(i),J.alcistas.push(r)}),s(!0)})},0)},Da=async()=>{const s=await l.calculoVelasHeikinAshi(e.chart.data);x.setData(s)},sa=()=>{var s,t;La(),ee(),Na(),$a(),va(),(s=e==null?void 0:e.getIndicators)!=null&&s.heikinAshi&&e.getIndicators.heikinAshi==!0&&Da(),(t=e==null?void 0:e.getIndicators)!=null&&t.divergences&&setTimeout(function(){Promise.resolve(ya()).then(Sa())},0),e.chart.indicators.kernelChannel&&ba(),e.chart.indicators.srDinamic&&Va(),Ua()},qa=()=>{const s=new Date().toLocaleString();Y.value&&Y.value&&Y.value!=null&&Y.value>0&&!isNaN(Y.value)&&""+parseFloat(Y.value).toFixed(4),o.applyOptions({watermark:{color:"#00ff11",visible:!0,text:`Topacio ${String(e.getSymbol).toUpperCase()}  ${e.getTemporality}  ${s}`,fontSize:14,horzAlign:"left",vertAlign:"top"}})},za=s=>{s.flatMap(g=>g).sort((g,f)=>g.value-f.value).slice(-7).flatMap(g=>g.time);const r=s.map(g=>g.value),c=r.reduce((g,f)=>g+f,0)/r.length,u={};r.forEach(g=>{u[g]=(u[g]||0)+1}),Object.keys(u).reduce((g,f)=>u[g]>u[f]?g:f);const y=r.slice().sort((g,f)=>g-f),V=Math.floor(y.length/2);y.length%2===0?(y[V-1]+y[V])/2:y[V];const v=parseInt(c*2.5);return s.flatMap(g=>(g.value>=v&&(g.color="#96EFFF"),g))},Ua=()=>{const s=e.chart.data.flatMap(i=>({time:i.time,value:i.volume,color:"#d1e1e159"})),t=za(s);fe.setData(t)};_e(async()=>{C.loading=!0,C.openMenuMobile=!1;const s=document.querySelector(ca),t=parseInt(C.w/1.005),i=parseInt(s.offsetHeight),r=l.getConfigChart(t,i),c=l.getConfigVelasTransparentes();e.chart.data=await l.searchData({exchange:e.getExchange,interval:e.getTemporality,symbolsPairs:e.getSymbol,limit:500,cci:e.chart.indicators.cci});const u=document.querySelector(ca);console.log({configChart:r},e.chart.data),o=Aa(u,r),x=o.addCandlestickSeries(c),x.setData(e.chart.data),fe=o.addHistogramSeries({lastValueVisible:!1,priceLineVisible:!1,priceFormat:{type:"volume"},priceScaleId:"volumen"}),fe.priceScale().applyOptions({priceFormat:{type:"volume"},scaleMargins:{top:.85,bottom:0}});const V=(await e.searchSymbolsFutures()).flatMap(a=>e.chart.symbols!=a.symbol?{label:a.symbol,value:a.symbol}:{label:a.symbol,value:a.symbol,selected:!0});fa.value=V.filter(a=>a.value.includes("USDT")),Oa(),sa(),qa();let v=o.timeScale().getVisibleLogicalRange(),W=v&&(v!=null&&v.from)?parseInt(v.from):null;function g(a){var A,N,h,D;const m=document.querySelector("div#chart-rsi>div.vertical-cursor");if(a!=null&&a.time&&o){const ia=o.timeScale().getVisibleLogicalRange(),S=parseInt(a.logical);(A=a==null?void 0:a.point)!=null&&A.x&&m&&(M.value.chart.timeScale().setVisibleLogicalRange(ia),m.style=`transform:translateX(${a.point.x}px)`),e.chart.data[S]&&(n.rsi=e.chart.data[S].rsi,n.low=e.chart.data[S].low,n.high=e.chart.data[S].high,n.close=e.chart.data[S].close,n.move=l.calculatePercentageBetweenValues(n.high,n.low),n.ps=null,n.hma10=(N=e.chart.data[S])!=null&&N.hma10?parseFloat(e.chart.data[S].hma10).toFixed(4):null,n.hma20=(h=e.chart.data[S])!=null&&h.hma20?parseFloat(e.chart.data[S].hma20).toFixed(4):null,e.chart.data[S].bb&&n.high>e.chart.data[S].bb.upper&&(n.ps=l.calculatePercentageBetweenValues(n.high,e.chart.data[S].bb.upper)),e.chart.data[S].bb&&n.low<e.chart.data[S].bb.lower&&(n.ps=l.calculatePercentageBetweenValues(e.chart.data[S].bb.lower,n.low))),v=o.timeScale().getVisibleLogicalRange(),W=v!=null&&v.from?parseInt(v.from):null,W&&W<250&&!$.value&&Ra(sa)}else m&&(m.style="display:none"),n.rsi=null,n.ps=null,n.move=null,n.low=null,n.high=null,n.close=null,n.ema200=null,n.hma10=null,n.hma20=null;(D=a==null?void 0:a.point)!=null&&D.y&&(Se=x.coordinateToPrice(a.point.y))}o.subscribeCrosshairMove(g),document.addEventListener("keydown",a=>{if(Z[a.key]=!0,Z.Alt&&a.key=="h"){const m=x.createPriceLine({price:Se,color:"#FFF"});me.push(m)}if(Z.Alt&&a.key=="s"){const m=x.createPriceLine({price:Se,color:"#ff006e",title:"Short"});me.push(m)}if(Z.Alt&&a.key=="l"){const m=x.createPriceLine({price:Se,color:"#00ff11",title:"Long"});me.push(m)}(Z.Alt&&a.key=="r"||a.key=="c")&&(console.log("* Cleaning Lines"),me.map(m=>x.removePriceLine(m)),me=[])}),document.addEventListener("keyup",a=>{delete Z[a.key]}),document.querySelector("div.container-chart").addEventListener("click",a=>{var m;if((m=window==null?void 0:window.visualViewport)!=null&&m.width){const A=window.visualViewport.width,N=parseInt(A)*.2;a.x>N&&e.chart.menuOpen===!0&&(e.chart.menuOpen=!1)}}),setTimeout(function(){ke()},1e3),Ba(),C.loading=!1,b(()=>e.chart.indicators.srDinamic,a=>{!a&&j.resistencia&&j.soporte?(j.resistencia.setData([]),j.soporte.setData([])):Va()}),b(()=>e.chart.indicators.cci,async a=>{const m=await l.searchData({exchange:e.getExchange,interval:e.getTemporality,symbolsPairs:e.getSymbol,limit:500,cci:e.chart.indicators.cci});m.sort((A,N)=>parseInt(A.time)-parseInt(N.time)),e.chart.data=m,x.setData(m),console.log("newValue",a,{allData:m})}),b(()=>e.chart.indicators.psar,a=>{a?va():be.setData([])}),b(()=>e.chart.indicators.kernelChannel,a=>{a?ba():(We.setData([]),Ae.setData([]),Ee.setData([]))}),b(()=>e.chart.indicators.bb,a=>{a?La():(ge.setData([]),Le.setData([]),Ve.setData([]))}),b(()=>e.chart.indicators.hma10,a=>{a?ee():Ie.setData([])}),b(()=>e.chart.indicators.hma20,a=>{a?ee():Te.setData([])}),b(()=>e.chart.indicators.hma55,a=>{a?ee():Re.setData([])}),b(()=>e.chart.indicators.hma89,a=>{a?ee():Pe.setData([])}),b(()=>e.chart.indicators.hma233,a=>{a?ee():Be.setData([])}),b(()=>e.chart.indicators.heikinAshi,a=>{a?Da():x.setData(e.chart.data)}),b(()=>e.chart.indicators.ema10,a=>{a?se.setData(l.calculateEMA(e.chart.data,10,Ue)):se.setData([])}),b(()=>e.chart.indicators.ema20,a=>{a?ie.setData(l.calculateEMA(e.chart.data,20,Ye)):ie.setData([])}),b(()=>e.chart.indicators.ema55,a=>{a?le.setData(l.calculateEMA(e.chart.data,55,Xe)):le.setData([])}),b(()=>e.chart.indicators.ema89,a=>{a?re.setData(l.calculateEMA(e.chart.data,89,Ke)):re.setData([])}),b(()=>e.chart.indicators.ema100,a=>{a?oe.setData(l.calculateEMA(e.chart.data,100,Ge)):oe.setData([])}),b(()=>e.chart.indicators.ema200,a=>{a?(Je.setData([]),ve.setData(l.calculateEMA(e.chart.data,200,Qe))):(Je.setData([]),ve.setData([]))}),b(()=>e.chart.indicators.ema233,a=>{a?G.setData(l.calculateEMA(e.chart.data,233,Ze)):G.setData([])}),b(()=>e.chart.indicators.sma10,a=>{a?ne.setData(l.calcularSMA(e.chart.data,10,He)):ne.setData([])}),b(()=>e.chart.indicators.sma20,a=>{a?ce.setData(l.calcularSMA(e.chart.data,20,je)):ce.setData([])}),b(()=>e.chart.indicators.sma55,a=>{a?he.setData(l.calcularSMA(e.chart.data,55,Oe)):he.setData([])}),b(()=>e.chart.indicators.sma89,a=>{a?de.setData(l.calcularSMA(e.chart.data,89,$e)):de.setData([])}),b(()=>e.chart.indicators.sma100,a=>{a?ue.setData(l.calcularSMA(e.chart.data,100,Ne)):ue.setData([])}),b(()=>e.chart.indicators.sma200,a=>{a?ye.setData(l.calcularSMA(e.chart.data,200,qe)):ye.setData([])}),b(()=>e.chart.indicators.sma233,a=>{a?Q.setData(l.calcularSMA(e.chart.data,233,ze)):Q.setData([])}),b(()=>e.chart.indicators.divergences,a=>{a?Promise.resolve(ya()).then(Sa()):(J.alcistas.forEach(function(m){m.setData([])}),J.bajistas.forEach(function(m){m.setData([])}),J.alcistas=[],J.bajistas=[],X.alcista=[],X.bajista=[])});function f(a){var h;const m=o.timeScale().getVisibleLogicalRange(),A=o.timeScale().getVisibleRange(),N=parseInt(o.timeScale().scrollPosition());da.value={visibleLogicalRange:m,visibleRange:A,scrollPosition:N,t:Date.now()},L!=null&&L.value&&((h=L==null?void 0:L.value)!=null&&h.timeScale)&&L.value.timeScale().setVisibleLogicalRange(a)}const pe=(a,m)=>m.time&&m.seriesData.get(a)||null;o.subscribeCrosshairMove(a=>{var A;const m=pe(x,a);L!=null&&L.value&&((A=L==null?void 0:L.value)!=null&&A.syncCrosshair)&&L.value.syncCrosshair(x,m)}),o.timeScale().subscribeVisibleLogicalRangeChange(f)});const ka=s=>{o.setCrosshairPosition(s,s.time,x)};return q({mainStore:C,chartStore:e,lastPrice:Y,details:n,leftTime:ea,getSegundsLeft:ma,getMinLeft:pa,getDaysLeft:Ta,Selector:na,ChartRsi:_a,ChartMacd:xa,chartMacd:L,lastRSI:te,syncCrosshairMACD:ka}),(s,t)=>(k(),P("div",{class:et({"container-chart":!0,"graphic-macd":O(e).chart.indicators.macd})},[p("div",lt,[p("div",rt,[p("p",null,"[ FUTURES: "+T(O(e).getExchange),1),p("div",ot,[p("div",nt,[oa(na,{opciones:fa.value,onlyLabel:!1,lblPorDefecto:O(e).chart.symbols,onActionChange:ga},null,8,["opciones","lblPorDefecto"])]),p("div",ct,[oa(na,{lblPorDefecto:O(e).getTemporality,opciones:Ea.value,onlyLabel:!1,modelValue:ua.value,"onUpdate:modelValue":t[0]||(t[0]=i=>ua.value=i),onActionChange:Ha},null,8,["lblPorDefecto","opciones","modelValue"])])])])]),Za(p("div",{id:"chart-main",ref_key:"chartElement",ref:F},[p("div",ht,[p("span",dt,[t[1]||(t[1]=Ce("HMA10 ")),n.hma10?(k(),P("label",ut,T(n.hma10),1)):R("",!0)]),p("span",ft,[t[2]||(t[2]=Ce("HMA20 ")),n.hma10?(k(),P("label",mt,T(n.hma20),1)):R("",!0)]),p("span",pt,[t[3]||(t[3]=Ce("EMA200 --- ")),n.ema200?(k(),P("label",bt,T(n.ema200),1)):R("",!0)])]),p("div",gt,[n.price?(k(),P("span",Vt,[t[4]||(t[4]=p("p",null,"Price:",-1)),p("b",null,T(n.price),1),p("b",null,"RSI "+T(te.value),1)])):R("",!0),n.high?(k(),P("span",Lt,[t[5]||(t[5]=p("p",null,"High:",-1)),p("p",null,T(n.high),1)])):R("",!0),n.low?(k(),P("span",vt,[t[6]||(t[6]=p("p",null,"Low:",-1)),p("p",null,T(n.low),1)])):R("",!0),n.close?(k(),P("span",yt,[t[7]||(t[7]=p("p",null,"Close:",-1)),p("p",null,T(n.close),1)])):R("",!0),n.rsi?(k(),P("span",St,[t[8]||(t[8]=p("p",null,"RSI",-1)),p("p",null,T(n.rsi),1)])):R("",!0),n.move?(k(),P("span",Dt,[t[9]||(t[9]=p("p",null,"move",-1)),p("p",null,T(n.move)+"%",1)])):R("",!0),n.ps?(k(),P("span",kt,[t[10]||(t[10]=p("b",null,"PS ",-1)),p("p",null,T(n.ps)+"%",1)])):R("",!0)]),p("div",Mt,[t[11]||(t[11]=p("span",null,"Left time",-1)),Ce(" "+T(Ia.value)+":"+T(pa.value)+":"+T(ma.value),1)]),O(e).chart.symbols=="BTCUSDT"?(k(),xe(it,{key:0})):R("",!0)],512),[[Ja,!O(C).loading]]),O(e).chart.data.length>0&&!O(C).loading&&O(e).chart.indicators.rsi?(k(),xe(_a,{key:0,ref_key:"chartRsi",ref:M},null,512)):R("",!0),!O(C).loading&&O(e).chart.data.length>0&&O(e).chart.indicators.macd?(k(),xe(xa,{key:1,chartInfoVisible:da.value,onResizeChart:ke,onSyncCrosshair:ka,ref_key:"chartMacd",ref:L},null,8,["chartInfoVisible"])):R("",!0),oa(tt)],2))}},Ct=Wa(wt,[["__scopeId","data-v-f2fa54f1"]]),xt={class:"charts"},_t={__name:"ChartView",setup(Fe,{expose:q}){const B=_(!1),U=()=>{B.value=!0,console.log("reloadChart"),setTimeout(function(){B.value=!1},100)},d=new Worker(new URL("/assets/claculateForCharts-BdmvpLvX.js",import.meta.url)),w=async()=>{d.postMessage({name:"searchData"}),d.onmessage=H=>{H.data&&console.log({recibe:H.data})}};return _e(()=>{w()}),q({isRefresh:B}),(H,K)=>(k(),P("main",xt,[B.value?R("",!0):(k(),xe(Ct,{key:0,onRefresh:U}))]))}},Pt=Wa(_t,[["__scopeId","data-v-edd3560a"]]);export{Pt as default};
