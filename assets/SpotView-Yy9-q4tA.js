import{_ as de,r as h,H as G,h as P,a as w,b as A,d as E,t as N,f as M,l as y,x as J,F as H,g as q,J as ve,c as K,w as B,n as L,o as ne,k as me,i as re,u as pe,A as he,E as fe,G as be}from"./index-CAkKuhlX.js";import{u as ie}from"./processDivergence-CSZlw8ZB.js";import{L as Ce,z as ye,N as ge,G as we,U as Ie,H as Se,q as _e,Y as Le,X as Ae,j as xe,F as De}from"./index-BoUTTLoQ.js";import{I as le}from"./iconify-CyWVXyVL.js";import{C as Ve}from"./Candles-lrC0M3Rs.js";import{V as Oe}from"./lightweight-charts.production-DxYz0kgw.js";const Te=()=>{const I=e=>btoa(String.fromCharCode(...new Uint8Array(e))),V=e=>Uint8Array.from(atob(e),l=>l.charCodeAt(0)),r=async(e,l,g,f,m,p="AES-CBC")=>{const a=new TextEncoder;let b=await window.crypto.subtle.importKey("raw",a.encode(e),{name:"PBKDF2"},!1,["deriveKey"]);return await window.crypto.subtle.deriveKey({name:"PBKDF2",salt:a.encode(l),iterations:g,hash:m},b,{name:p,length:f},!1,["encrypt","decrypt"])};return{encriptar:async(e,l)=>{const g=new TextEncoder,f=window.crypto.getRandomValues(new Uint8Array(16)),m=window.crypto.getRandomValues(new Uint8Array(16)),p=g.encode(l),a=await r(e,f,1e5,256,"SHA-256"),b=await window.crypto.subtle.encrypt({name:"AES-CBC",iv:m},a,p);return I([...f,...m,...new Uint8Array(b)])},desencriptar:async(e,l)=>{const g=new TextDecoder,f=V(l),m=f.slice(0,16),p=f.slice(16,32),a=await r(e,m,1e5,256,"SHA-256"),b=await window.crypto.subtle.decrypt({name:"AES-CBC",iv:p},a,f.slice(32));return g.decode(b)}}},ke={key:0,class:"container-selector"},Ue={key:0,class:"amount"},Fe=["value","placeholder"],Be=["onClick"],Ne={__name:"SelectorV2",props:{lblPorDefecto:{type:String,required:!1,default:""},displayAmount:{type:Boolean,required:!1,default:!1},onlyLabel:{type:Boolean,default:!1},opciones:{type:Object,default(I){return[]}}},emits:["actionChange"],setup(I,{emit:V}){const k=V,v=I,r=h(""),i=h(!1),c=v.lblPorDefecto,e=G({data:[]});v.lblPorDefecto!==""&&(r.value=v.lblPorDefecto);const l=G({label:"",value:""}),g=a=>{const b=a.target.value.toUpperCase();r.value=b,l.label="SYMBOL",e.data=v.opciones.filter(x=>x.label.includes(b)),i.value=!0},f=()=>{i.value=!i.value},m=a=>{i.value=!1,l.label=a.label,l.value=a.value,r.value=v.onlyLabel&&v.onlyLabel.value==!0?a.label:a.value,!(!a||!a.value)&&k("actionChange",a)},p=a=>{e.data.length==0&&a!==void 0&&(e.data=a);const b=e.data.filter(x=>x.selected);b[0]&&b[0].label&&(r.value=b[0].label)};return v.opciones&&(e.data=v.opciones,p()),P(()=>v.opciones,p),(a,b)=>I.opciones&&I.opciones.length>0&&I.opciones[0].label?(w(),A("div",ke,[E("form",null,[I.displayAmount?(w(),A("span",Ue,N(I.opciones.length),1)):M("",!0),E("input",{class:"chosen-value",type:"text",value:r.value,placeholder:y(c),onInput:g,onClick:f},null,40,Fe),e&&e.data?(w(),A("ul",{key:1,class:J({"value-list":!0,open:i.value})},[(w(!0),A(H,null,q(e.data,x=>(w(),A("li",{onClick:_=>m(x)},N(x.label),9,Be))),256))],2)):M("",!0)])])):M("",!0)}},j=de(Ne,[["__scopeId","data-v-53398a51"]]),Ee=ve({__name:"AutoCompletedComponent",props:["opciones","txt-placeholder"],setup(I){const V=I,k=V.txtPlaceholder,v=h(k),r=V.opciones;return(i,c)=>(w(),K(y(De),{modelValue:v.value,"onUpdate:modelValue":c[0]||(c[0]=e=>v.value=e),class:"ComboboxRoot"},{default:B(()=>[L(y(ge),{class:"ComboboxAnchor"},{default:B(()=>[L(y(Ce),{class:"ComboboxInput",placeholder:y(k)},null,8,["placeholder"]),L(y(ye),null,{default:B(()=>[L(y(le),{icon:"radix-icons:chevron-down",class:"ComboboxIcon"})]),_:1})]),_:1}),L(y(xe),{class:"ComboboxContent"},{default:B(()=>[L(y(we),{class:"ComboboxViewport"},{default:B(()=>[L(y(Ie),{class:"ComboboxEmpty"}),L(y(Se),null,{default:B(()=>[(w(!0),A(H,null,q(y(r),(e,l)=>(w(),K(y(_e),{key:l,class:"ComboboxItem",value:e},{default:B(()=>[L(y(Le),{class:"ComboboxItemIndicator"},{default:B(()=>[L(y(le),{icon:"radix-icons:check"})]),_:1}),E("span",null,N(e),1)]),_:2},1032,["value"]))),128)),L(y(Ae),{class:"ComboboxSeparator"})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}}),Re=["id"],se={__name:"Ind",props:{ind:{type:String,required:!0,default:""}},setup(I,{expose:V}){const k=new re,v=ie(),r=I,i=h([]),c=h([]),e=h(null);let l;const g=r.ind==="rsi"?"#19f5eb":r.ind==="cci"?"yellow":"#fff",f=t=>{e.value.applyOptions({watermark:{color:g,visible:!0,text:t,fontSize:14,horzAlign:"left",vertAlign:"top"},crosshair:{mode:0,vertLine:{width:1,color:"#C3BCDB44",style:0,labelBackgroundColor:"#9B7DFF"},horzLine:{color:g,labelBackgroundColor:g}}})},m=async()=>{r.ind==="rsi"&&(z(),l.setData(i.value)),r.ind==="cci"&&O()},p=t=>{var s;e!=null&&e.value&&((s=e==null?void 0:e.value)!=null&&s.resize)&&(t!=null&&t.width)&&(t!=null&&t.height)&&e.value.resize(t.width,t.height)},a=t=>{l!=null&&l.coordinateToPrice&&l.coordinateToPrice(t)},b=t=>{var s;e.value&&((s=e==null?void 0:e.value)!=null&&s.setCrosshairPosition)&&l&&t&&e.value.setCrosshairPosition(t,t.time,l)},x=(t,s)=>{if(console.log("syncCrosshair"),s){const u=formato.filter(T=>T.time===s.time);u[0]&&l&&e.value.setCrosshairPosition(u[0],s.time,l);return}e.value.clearCrosshairPosition()},_=t=>{e.value.timeScale().setVisibleLogicalRange(t)},O=()=>{var t,s;if(c.value=v.chart.data.flatMap(u=>({time:u.time,value:u.cci,color:u!=null&&u.color?u.color:g})),e!=null&&e.value&&r.ind==="cci"&&((t=c==null?void 0:c.value[c.value.length-1])!=null&&t.value)){const u=parseFloat(c.value[c.value.length-1].value).toFixed(2);f(`CCI [mod 89] ${u}`),(s=c.value[c.value.length-1].value)!=null&&s.cciColor&&(c.value[c.value.length-1].value.color=c.value[c.value.length-1].value.cciColor),c.value.sort((T,R)=>T.time-R.time),l.setData(c.value)}},z=async()=>{var t;if(i.value=v.chart.data.flatMap(s=>({time:s.time,value:s.rsi})),console.log(r.ind,"RSI"),e!=null&&e.value&&((t=i==null?void 0:i.value[i.value.length-1])!=null&&t.value)){const s=i.value[i.value.length-1].value;f(`[14] ${String(r.ind).toUpperCase()} ${s}`),l.setData(i.value)}},U=()=>{const t=document.querySelector(`#chart-${r.ind}`);let s=k.getConfigChart(t.offsetWidth,t.offsetHeight);console.log({configChart:s},t.offsetWidth,t.offsetHeight),s.priceLineVisible=!1,s.priceLineColor="transparent",s.lastValueVisible=!1,s.localization={priceFormatter:u=>parseFloat(u).toFixed(2)},s.timeScale.visible=!1,s.lastValueVisible=!0,s.crosshair.mode=2,console.log({configChart:s}),e.value=Oe(t,s),l=e.value.addLineSeries({color:g,lineWidth:1,priceLineVisible:!1,lineVisible:!0,crosshairMarkerVisible:!0}),r.ind==="cci"&&l&&(l.createPriceLine({price:100,color:"#26a69a",lineWidth:1,lineStyle:1,axisLabelVisible:!0,title:"100"}),l.createPriceLine({price:0,color:"#c1c1c1",lineWidth:1,lineStyle:1,axisLabelVisible:!0,title:"0"}),l.createPriceLine({price:-100,color:"#ffb3c6",lineWidth:1,lineStyle:1,axisLabelVisible:!0,title:"-100"}))};return P(()=>v.chart.data,function(t){console.log("*ind* cambio Data",{dt:t}),m()}),ne(async()=>{console.log("* ind",r.ind),r.ind==="rsi"?(U(),await z()):r.ind==="cci"&&(U(),await O())}),me(()=>{console.log("desmontado",r.ind),e.value&&(e.value.removeSeries(l),e.value.remove())}),V({resize:p,refresh:m,chart:e,moveChartVisible:_,moveLineY:a,syncCrosshair:x,crossMove:b}),(t,s)=>(w(),A("div",{class:"container-indicator",id:`chart-${I.ind}`},null,8,Re))}},$e={class:"charts"},Pe={class:"selectors"},Me={key:0},ze=["onClick"],Qe={__name:"SpotView",setup(I,{expose:V}){const k=new re,{encriptar:v,desencriptar:r}=Te(),i=fe(),c=be(),e=ie();pe();const l=i.params&&i.params&&i.params.symbol?i.params.symbol.toString().toUpperCase():"BTCUSDT",g=i.params&&i.params&&i.params.temporality?i.params.temporality.toString().toLocaleLowerCase():"4h";e.chart.symbols=l,e.chart.temporality=g;const f=h([]),m=h(null),p=h(null),a=h(null),b=h(89),x=h(0),_=G({cci:!1}),O=he(()=>{const o=Object.keys(_).filter(d=>_[d]),n={};return o.forEach(d=>{n[d]=_[d]}),n}),z=o=>{var d,S;const n=parseInt(o.logical);o.targetBarraIndex=n,p.value&&(p!=null&&p.value)&&p.value[0]&&(o!=null&&o.visibleLogicalRange)&&((d=p.value[0])!=null&&d.moveChartVisible)&&(p.value[0].moveChartVisible(o.visibleLogicalRange),p.value[0].crossMove(o.dataPoint)),a.value&&(a!=null&&a.value)&&a.value[0]&&(o!=null&&o.visibleLogicalRange)&&((S=a.value[0])!=null&&S.moveChartVisible)&&(a.value[0].moveChartVisible(o.visibleLogicalRange),a.value[0].crossMove(o.dataPoint))},U=()=>Object.values(_).filter(d=>d===!0).length,t=h([{label:"1m",value:"1m"},{label:"5m",value:"5m"},{label:"15m",value:"15m"},{label:"30m",value:"30m"},{label:"1h",value:"1h"},{label:"2h",value:"2h"},{label:"4h",value:"4h"},{label:"6h",value:"6h"},{label:"1d",value:"1d"},{label:"1w",value:"1w"}]),s=h([]),u=h(null),T=h(null),R=h(null),F=h(null),C=G({symbol:l,temporality:g}),Y=h(!1),Z=async()=>{e.chart.data=await e.searchClandlesSpot({symbol:C.symbol,temporality:C.temporality,cci:b.value})},ce=async()=>{const o=await e.searchSymbolsSpot();f.value=o.flatMap(n=>n.symbol.includes("USDT")?{label:n.symbol,value:n.symbol}:[]),await Z()},W=async o=>{const n=t.value.find(d=>d.label==o.label);n!=null&&n.value?(C.temporality=n.value,e.chart.temporality=C.temporality):(C.symbol=o.value,e.chart.symbols=o.value),c.push({name:"spot:data",params:{symbol:String(C.symbol).toLowerCase(),temporality:e.chart.temporality}}),R.value=null,u.value&&(C!=null&&C.symbol)&&(C!=null&&C.temporality)&&(T.value&&await u.value.send(JSON.stringify({method:"UNSUBSCRIBE",params:[`${String(T.value).toLowerCase()}`],id:1})),T.value=`${String(C.symbol).toLowerCase()}@kline_${e.chart.temporality}`,u.value.send(JSON.stringify({method:"SUBSCRIBE",params:[`${String(T.value).toLowerCase()}`],id:1})),await Z())};return window.addEventListener("resize",o=>{var d;const n=document.querySelector(".container-chart-main");(d=m==null?void 0:m.value)!=null&&d.resizeChart&&(n!=null&&n.offsetHeight)&&U()==0&&m.value.resizeChart({height:n.offsetHeight,width:n.offsetWidth,visualViewport:o.target.visualViewport})}),P(()=>"target.symbol",W),P(_,({rsi:o})=>{console.log("indicadores",{rsi:o})}),P(U,o=>{const n=document.querySelector(".container-chart-main").offsetWidth;if(o==0)m.value.resizeChart({height:document.querySelector(".container-chart-main").offsetHeight,width:n});else{const d=o==1?.7:o==2?.6:.5,S=o==1?.3:o==2?.2:.5/o,D=document.querySelector(".container-chart-main").offsetHeight-120*o;console.log({c:o,chartMainHeight:D,anchura:n,porcentajeChartMain:d,porcentajeChartIndicator:S}),m.value.resizeChart({height:D,width:n})}}),ne(async()=>{const o=await v("TOPACIOTRADE","Algodon");console.log({encriptado:o,desencript:await r("TOPACIOTRADE",o)}),u.value=await new WebSocket("wss://stream.binance.com/ws"),T.value=`${String(C.symbol).toLowerCase()}@kline_1m`,await ce(),u.value.addEventListener("open",async function(n){u.value.send(JSON.stringify({method:"SUBSCRIBE",params:[`${String(T.value).toLowerCase()}`],id:1}))}),u.value.addEventListener("message",async function(n){var d,S;if(n&&n.data&&n.data!='{"result":null,"id":1}')try{const{k:{c:D,s:Ge,i:He,h:X,l:Q,x:ee,n:qe,o:ae,T:te,V:oe,v:We,t:ue}}=JSON.parse(n.data);if(ee===!0&&(e.chart.data.push({time:parseInt(te),timeEnd:parseInt(ue),open:parseFloat(ae),high:parseFloat(X),low:parseFloat(Q),close:parseFloat(D),value:parseFloat(D),volume:parseFloat(oe)}),console.log({x:ee,chartcci:a},"* Cierre de vela",e.chart.data.length,new Date)),R.value=parseFloat(D).toFixed(4),F.value={time:parseInt(te),open:parseFloat(ae),high:parseFloat(X),low:parseFloat(Q),close:parseFloat(D),value:parseFloat(D),volume:parseFloat(oe)},e.chart.data[e.chart.data.length-1]){e.chart.data[e.chart.data.length-1].high=F.value.high,e.chart.data[e.chart.data.length-1].low=F.value.low,e.chart.data[e.chart.data.length-1].close=F.value.close;let $=k.calcularCCI(e.chart.data,89);e.chart.data[e.chart.data.length-1].cci=parseFloat(parseFloat($.pop()).toFixed(2))}if((d=O==null?void 0:O.value)!=null&&d.cci&&O.value.cci===!0){const $=e.chart.data[e.chart.data.length-1].cci>=100?"#00f5d4":e.chart.data[e.chart.data.length-1].cci<=-100?"#ff006e":null;$&&(F.value.color=$,F.value.borderColor=$,F.value.wickColor=$)}a.value&&(a!=null&&a.value)&&(a!=null&&a.value[0])&&((S=a.value[0])!=null&&S.refresh)&&a.value[0].refresh()}catch(D){console.log({evt:n,e:D})}})}),V({dataCandles:s,isRefresh:Y,target:C,SelectorV2:j,dataPairs:f,dataTemporality:t,AutoCompletedComponent:Ee,chartStore:e,cantidadIndicadores:x,chartIndicators:_,activeIndicators:O,cantidadIndicadoresActivos:U,Ind:se}),(o,n)=>(w(),A("main",$e,[E("aside",null,[E("div",Pe,[L(j,{opciones:f.value,onlyLabel:!1,displayAmount:!0,lblPorDefecto:y(e).chart.symbols,class:"spot-selector-symbols",onActionChange:W},null,8,["opciones","lblPorDefecto"]),L(j,{opciones:t.value,onlyLabel:!1,displayAmount:!1,lblPorDefecto:C.temporality,class:"spot-selector-temp",onActionChange:W},null,8,["opciones","lblPorDefecto"])]),R.value?(w(),A("label",Me," PRICE: "+N(R.value),1)):M("",!0),E("pre",null,N(_),1),(w(!0),A(H,null,q(_,(d,S)=>(w(),A("button",{onClick:D=>_[S]=!_[S],class:"btn btn-ind"},N(S),9,ze))),256)),E("pre",null,N(O.value)+" ["+N(U())+"]",1)]),Y.value?M("",!0):(w(),A("section",{key:0,class:J({"container-chart-main":!0,"ind-2":x.value==2})},[L(Ve,{"chart-name-id":"chart-main",main:!0,ref_key:"chartMainSpot",ref:m,"data-candles":s.value,symbol:C.symbol,spot:!0,price:F.value,"chart-indicators":_,onCrosshairMove:z},null,8,["data-candles","symbol","price","chart-indicators"]),(w(!0),A(H,null,q(O.value,(d,S)=>(w(),K(se,{class:J(`indicador c-ind-${U()} ind-${S}`),ind:`${S}`,"data-candles":s.value,ref_for:!0,ref:`chart${S}`},null,8,["class","ind","data-candles"]))),256))],2))]))}};export{Qe as default};
