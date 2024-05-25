import{_ as de,r as h,I as G,f as P,a as g,g as x,d as E,t as N,m as M,l as C,y as K,F as H,B as W,K as ve,c as J,w as F,n as L,o as ne,k as pe,h as re,G as me,H as he,u as fe,A as be}from"./index-c609e3c6.js";import{u as ie,T as ye}from"./processDivergence-a7a8aa9a.js";import{r as Ce,u as _e,i as ge,m as we,v as Se,c as Ie,h as Le,y as xe,g as Ae,f as Ve,s as De}from"./index-3644b859.js";import{I as le}from"./iconify-aecc105a.js";import{C as Te}from"./Candles-7f2fecd2.js";const Oe=()=>{const w=e=>btoa(String.fromCharCode(...new Uint8Array(e))),D=e=>Uint8Array.from(atob(e),l=>l.charCodeAt(0)),r=async(e,l,_,f,p,m="AES-CBC")=>{const a=new TextEncoder;let b=await window.crypto.subtle.importKey("raw",a.encode(e),{name:"PBKDF2"},!1,["deriveKey"]);return await window.crypto.subtle.deriveKey({name:"PBKDF2",salt:a.encode(l),iterations:_,hash:p},b,{name:m,length:f},!1,["encrypt","decrypt"])};return{encriptar:async(e,l)=>{const _=new TextEncoder,f=window.crypto.getRandomValues(new Uint8Array(16)),p=window.crypto.getRandomValues(new Uint8Array(16)),m=_.encode(l),a=await r(e,f,1e5,256,"SHA-256"),b=await window.crypto.subtle.encrypt({name:"AES-CBC",iv:p},a,m);return w([...f,...p,...new Uint8Array(b)])},desencriptar:async(e,l)=>{const _=new TextDecoder,f=D(l),p=f.slice(0,16),m=f.slice(0+16,16+16),a=await r(e,p,1e5,256,"SHA-256"),b=await window.crypto.subtle.decrypt({name:"AES-CBC",iv:m},a,f.slice(16+16));return _.decode(b)}}};const ke={key:0,class:"container-selector"},Be={key:0,class:"amount"},Ue=["value","placeholder"],Fe=["onClick"],Ne={__name:"SelectorV2",props:{lblPorDefecto:{type:String,required:!1,default:""},displayAmount:{type:Boolean,required:!1,default:!1},onlyLabel:{type:Boolean,default:!1},opciones:{type:Object,default(w){return[]}}},emits:["actionChange"],setup(w,{emit:D}){const k=D,v=w,r=h(""),i=h(!1),c=v.lblPorDefecto,e=G({data:[]});v.lblPorDefecto!==""&&(r.value=v.lblPorDefecto);const l=G({label:"",value:""}),_=a=>{const b=a.target.value.toUpperCase();r.value=b,l.label="SYMBOL",e.data=v.opciones.filter(A=>A.label.includes(b)),i.value=!0},f=()=>{i.value=!i.value},p=a=>{i.value=!1,l.label=a.label,l.value=a.value,r.value=v.onlyLabel&&v.onlyLabel.value==!0?a.label:a.value,!(!a||!a.value)&&k("actionChange",a)},m=a=>{e.data.length==0&&a!==void 0&&(e.data=a);const b=e.data.filter(A=>A.selected);b[0]&&b[0].label&&(r.value=b[0].label)};return v.opciones&&(e.data=v.opciones,m()),P(()=>v.opciones,m),(a,b)=>w.opciones&&w.opciones.length>0&&w.opciones[0].label?(g(),x("div",ke,[E("form",null,[w.displayAmount?(g(),x("span",Be,N(w.opciones.length),1)):M("",!0),E("input",{class:"chosen-value",type:"text",value:r.value,placeholder:C(c),onInput:_,onClick:f},null,40,Ue),e&&e.data?(g(),x("ul",{key:1,class:K({"value-list":!0,open:i.value})},[(g(!0),x(H,null,W(e.data,A=>(g(),x("li",{onClick:I=>p(A)},N(A.label),9,Fe))),256))],2)):M("",!0)])])):M("",!0)}},j=de(Ne,[["__scopeId","data-v-ff981326"]]),Ee=ve({__name:"AutoCompletedComponent",props:["opciones","txt-placeholder"],setup(w){const D=w,k=D.txtPlaceholder,v=h(k),r=D.opciones;return(i,c)=>(g(),J(C(De),{modelValue:v.value,"onUpdate:modelValue":c[0]||(c[0]=e=>v.value=e),class:"ComboboxRoot"},{default:F(()=>[L(C(ge),{class:"ComboboxAnchor"},{default:F(()=>[L(C(Ce),{class:"ComboboxInput",placeholder:C(k)},null,8,["placeholder"]),L(C(_e),null,{default:F(()=>[L(C(le),{icon:"radix-icons:chevron-down",class:"ComboboxIcon"})]),_:1})]),_:1}),L(C(Ve),{class:"ComboboxContent"},{default:F(()=>[L(C(we),{class:"ComboboxViewport"},{default:F(()=>[L(C(Se),{class:"ComboboxEmpty"}),L(C(Ie),null,{default:F(()=>[(g(!0),x(H,null,W(C(r),(e,l)=>(g(),J(C(Le),{key:l,class:"ComboboxItem",value:e},{default:F(()=>[L(C(xe),{class:"ComboboxItemIndicator"},{default:F(()=>[L(C(le),{icon:"radix-icons:check"})]),_:1}),E("span",null,N(e),1)]),_:2},1032,["value"]))),128)),L(C(Ae),{class:"ComboboxSeparator"})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}});const Re=["id"],se={__name:"Ind",props:{ind:{type:String,required:!0,default:""}},setup(w,{expose:D}){const k=new re,v=ie(),r=w,i=h([]),c=h([]),e=h(null);let l;const _=r.ind==="rsi"?"#19f5eb":r.ind==="cci"?"yellow":"#fff",f=t=>{e.value.applyOptions({watermark:{color:_,visible:!0,text:t,fontSize:14,horzAlign:"left",vertAlign:"top"},crosshair:{mode:0,vertLine:{width:1,color:"#C3BCDB44",style:0,labelBackgroundColor:"#9B7DFF"},horzLine:{color:_,labelBackgroundColor:_}}})},p=async()=>{r.ind==="rsi"&&(z(),l.setData(i.value)),r.ind==="cci"&&T()},m=t=>{var s;e!=null&&e.value&&((s=e==null?void 0:e.value)!=null&&s.resize)&&(t!=null&&t.width)&&(t!=null&&t.height)&&e.value.resize(t.width,t.height)},a=t=>{l!=null&&l.coordinateToPrice&&l.coordinateToPrice(t)},b=t=>{var s;e.value&&((s=e==null?void 0:e.value)!=null&&s.setCrosshairPosition)&&l&&t&&e.value.setCrosshairPosition(t,t.time,l)},A=(t,s)=>{if(console.log("syncCrosshair"),s){const u=formato.filter(O=>O.time===s.time);u[0]&&l&&e.value.setCrosshairPosition(u[0],s.time,l);return}e.value.clearCrosshairPosition()},I=t=>{e.value.timeScale().setVisibleLogicalRange(t)},T=()=>{var t,s;if(c.value=v.chart.data.flatMap(u=>({time:u.time,value:u.cci,color:u!=null&&u.color?u.color:_})),e!=null&&e.value&&r.ind==="cci"&&((t=c==null?void 0:c.value[c.value.length-1])!=null&&t.value)){const u=parseFloat(c.value[c.value.length-1].value).toFixed(2);f(`CCI [mod 89] ${u}`),(s=c.value[c.value.length-1].value)!=null&&s.cciColor&&(c.value[c.value.length-1].value.color=c.value[c.value.length-1].value.cciColor),c.value.sort((O,R)=>O.time-R.time),l.setData(c.value)}},z=async()=>{var t;if(i.value=v.chart.data.flatMap(s=>({time:s.time,value:s.rsi})),console.log(r.ind,"RSI"),e!=null&&e.value&&((t=i==null?void 0:i.value[i.value.length-1])!=null&&t.value)){const s=i.value[i.value.length-1].value;f(`[14] ${String(r.ind).toUpperCase()} ${s}`),l.setData(i.value)}},B=()=>{const t=document.querySelector(`#chart-${r.ind}`);let s=k.getConfigChart(t.offsetWidth,t.offsetHeight);console.log({configChart:s},t.offsetWidth,t.offsetHeight),s.priceLineVisible=!1,s.priceLineColor="transparent",s.lastValueVisible=!1,s.localization={priceFormatter:u=>parseFloat(u).toFixed(2)},s.timeScale.visible=!1,s.lastValueVisible=!0,s.crosshair.mode=2,console.log({configChart:s}),e.value=ye(t,s),l=e.value.addLineSeries({color:_,lineWidth:1,priceLineVisible:!1,lineVisible:!0,crosshairMarkerVisible:!0}),r.ind==="cci"&&l&&(l.createPriceLine({price:100,color:"#26a69a",lineWidth:1,lineStyle:1,axisLabelVisible:!0,title:"100"}),l.createPriceLine({price:0,color:"#c1c1c1",lineWidth:1,lineStyle:1,axisLabelVisible:!0,title:"0"}),l.createPriceLine({price:-100,color:"#ffb3c6",lineWidth:1,lineStyle:1,axisLabelVisible:!0,title:"-100"}))};return P(()=>v.chart.data,function(t){console.log("*ind* cambio Data",{dt:t}),p()}),ne(async()=>{console.log("* ind",r.ind),r.ind==="rsi"?(B(),await z()):r.ind==="cci"&&(B(),await T())}),pe(()=>{console.log("desmontado",r.ind),e.value&&(e.value.removeSeries(l),e.value.remove())}),D({resize:m,refresh:p,chart:e,moveChartVisible:I,moveLineY:a,syncCrosshair:A,crossMove:b}),(t,s)=>(g(),x("div",{class:"container-indicator",id:`chart-${w.ind}`},null,8,Re))}};const $e={class:"charts"},Pe={class:"selectors"},Me={key:0},ze=["onClick"],Qe={__name:"SpotView",setup(w,{expose:D}){const k=new re,{encriptar:v,desencriptar:r}=Oe(),i=me(),c=he(),e=ie();fe();const l=i.params&&i.params&&i.params.symbol?i.params.symbol.toString().toUpperCase():"BTCUSDT",_=i.params&&i.params&&i.params.temporality?i.params.temporality.toString().toLocaleLowerCase():"4h";e.chart.symbols=l,e.chart.temporality=_;const f=h([]),p=h(null),m=h(null),a=h(null),b=h(89),A=h(0),I=G({cci:!1}),T=be(()=>{const o=Object.keys(I).filter(d=>I[d]),n={};return o.forEach(d=>{n[d]=I[d]}),n}),z=o=>{var d,S;const n=parseInt(o.logical);o.targetBarraIndex=n,m&&(m!=null&&m.value)&&m.value[0]&&(o!=null&&o.visibleLogicalRange)&&((d=m.value[0])!=null&&d.moveChartVisible)&&(m.value[0].moveChartVisible(o.visibleLogicalRange),m.value[0].crossMove(o.dataPoint)),a&&(a!=null&&a.value)&&a.value[0]&&(o!=null&&o.visibleLogicalRange)&&((S=a.value[0])!=null&&S.moveChartVisible)&&(a.value[0].moveChartVisible(o.visibleLogicalRange),a.value[0].crossMove(o.dataPoint))},B=()=>Object.values(I).filter(d=>d===!0).length,t=h([{label:"1m",value:"1m"},{label:"5m",value:"5m"},{label:"15m",value:"15m"},{label:"30m",value:"30m"},{label:"1h",value:"1h"},{label:"2h",value:"2h"},{label:"4h",value:"4h"},{label:"6h",value:"6h"},{label:"1d",value:"1d"},{label:"1w",value:"1w"}]),s=h([]),u=h(null),O=h(null),R=h(null),U=h(null),y=G({symbol:l,temporality:_}),Z=h(!1),Y=async()=>{e.chart.data=await e.searchClandlesSpot({symbol:y.symbol,temporality:y.temporality,cci:b.value})},ce=async()=>{const o=await e.searchSymbolsSpot();f.value=o.flatMap(n=>n.symbol.includes("USDT")?{label:n.symbol,value:n.symbol}:[]),await Y()},q=async o=>{const n=t.value.find(d=>d.label==o.label);n!=null&&n.value?(y.temporality=n.value,e.chart.temporality=y.temporality):(y.symbol=o.value,e.chart.symbols=o.value),c.push({name:"spot:data",params:{symbol:String(y.symbol).toLowerCase(),temporality:e.chart.temporality}}),R.value=null,u.value&&(y!=null&&y.symbol)&&(y!=null&&y.temporality)&&(O.value&&await u.value.send(JSON.stringify({method:"UNSUBSCRIBE",params:[`${String(O.value).toLowerCase()}`],id:1})),O.value=`${String(y.symbol).toLowerCase()}@kline_${e.chart.temporality}`,u.value.send(JSON.stringify({method:"SUBSCRIBE",params:[`${String(O.value).toLowerCase()}`],id:1})),await Y())};return window.addEventListener("resize",o=>{var d;const n=document.querySelector(".container-chart-main");(d=p==null?void 0:p.value)!=null&&d.resizeChart&&(n!=null&&n.offsetHeight)&&B()==0&&p.value.resizeChart({height:n.offsetHeight,width:n.offsetWidth,visualViewport:o.target.visualViewport})}),P(()=>"target.symbol",q),P(I,({rsi:o})=>{console.log("indicadores",{rsi:o})}),P(B,o=>{const n=document.querySelector(".container-chart-main").offsetWidth;if(o==0)p.value.resizeChart({height:document.querySelector(".container-chart-main").offsetHeight,width:n});else{const d=o==1?.7:o==2?.6:.5,S=o==1?.3:o==2?.2:.5/o,V=document.querySelector(".container-chart-main").offsetHeight-120*o;console.log({c:o,chartMainHeight:V,anchura:n,porcentajeChartMain:d,porcentajeChartIndicator:S}),p.value.resizeChart({height:V,width:n})}}),ne(async()=>{const o=await v("TOPACIOTRADE","Algodon");console.log({encriptado:o,desencript:await r("TOPACIOTRADE",o)}),u.value=await new WebSocket("wss://stream.binance.com/ws"),O.value=`${String(y.symbol).toLowerCase()}@kline_1m`,await ce(),u.value.addEventListener("open",async function(n){u.value.send(JSON.stringify({method:"SUBSCRIBE",params:[`${String(O.value).toLowerCase()}`],id:1}))}),u.value.addEventListener("message",async function(n){var d,S;if(n&&n.data&&n.data!='{"result":null,"id":1}')try{const{k:{c:V,s:Ge,i:He,h:Q,l:X,x:ee,n:We,o:ae,T:te,V:oe,v:qe,t:ue}}=JSON.parse(n.data);if(ee===!0&&(e.chart.data.push({time:parseInt(te),timeEnd:parseInt(ue),open:parseFloat(ae),high:parseFloat(Q),low:parseFloat(X),close:parseFloat(V),value:parseFloat(V),volume:parseFloat(oe)}),console.log({x:ee,chartcci:a},"* Cierre de vela",e.chart.data.length,new Date)),R.value=parseFloat(V).toFixed(4),U.value={time:parseInt(te),open:parseFloat(ae),high:parseFloat(Q),low:parseFloat(X),close:parseFloat(V),value:parseFloat(V),volume:parseFloat(oe)},e.chart.data[e.chart.data.length-1]){e.chart.data[e.chart.data.length-1].high=U.value.high,e.chart.data[e.chart.data.length-1].low=U.value.low,e.chart.data[e.chart.data.length-1].close=U.value.close;let $=k.calcularCCI(e.chart.data,89);e.chart.data[e.chart.data.length-1].cci=parseFloat(parseFloat($.pop()).toFixed(2))}if((d=T==null?void 0:T.value)!=null&&d.cci&&T.value.cci===!0){const $=e.chart.data[e.chart.data.length-1].cci>=100?"#00f5d4":e.chart.data[e.chart.data.length-1].cci<=-100?"#ff006e":null;$&&(U.value.color=$,U.value.borderColor=$,U.value.wickColor=$)}a&&(a!=null&&a.value)&&(a!=null&&a.value[0])&&((S=a.value[0])!=null&&S.refresh)&&a.value[0].refresh()}catch(V){console.log({evt:n,e:V})}})}),D({dataCandles:s,isRefresh:Z,target:y,SelectorV2:j,dataPairs:f,dataTemporality:t,AutoCompletedComponent:Ee,chartStore:e,cantidadIndicadores:A,chartIndicators:I,activeIndicators:T,cantidadIndicadoresActivos:B,Ind:se}),(o,n)=>(g(),x("main",$e,[E("aside",null,[E("div",Pe,[L(j,{opciones:f.value,onlyLabel:!1,displayAmount:!0,lblPorDefecto:C(e).chart.symbols,class:"spot-selector-symbols",onActionChange:q},null,8,["opciones","lblPorDefecto"]),L(j,{opciones:t.value,onlyLabel:!1,displayAmount:!1,lblPorDefecto:y.temporality,class:"spot-selector-temp",onActionChange:q},null,8,["opciones","lblPorDefecto"])]),R.value?(g(),x("label",Me," PRICE: "+N(R.value),1)):M("",!0),E("pre",null,N(I),1),(g(!0),x(H,null,W(I,(d,S)=>(g(),x("button",{onClick:V=>I[S]=!I[S],class:"btn btn-ind"},N(S),9,ze))),256)),E("pre",null,N(T.value)+" ["+N(B())+"]",1)]),Z.value?M("",!0):(g(),x("section",{key:0,class:K({"container-chart-main":!0,"ind-2":A.value==2})},[L(Te,{"chart-name-id":"chart-main",main:!0,ref_key:"chartMainSpot",ref:p,"data-candles":s.value,symbol:y.symbol,spot:!0,price:U.value,"chart-indicators":I,onCrosshairMove:z},null,8,["data-candles","symbol","price","chart-indicators"]),(g(!0),x(H,null,W(T.value,(d,S)=>(g(),J(se,{class:K(`indicador c-ind-${B()} ind-${S}`),ind:`${S}`,"data-candles":s.value,ref_for:!0,ref:`chart${S}`},null,8,["class","ind","data-candles"]))),256))],2))]))}};export{Qe as default};
