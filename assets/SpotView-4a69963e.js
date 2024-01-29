import{_ as ce,r as p,I as O,f as T,a as C,g as L,d as B,t as D,m as E,l as y,y as j,F as N,B as W,K as ue,c as J,w as $,n as S,o as oe,k as de,h as se,G as ve,H as he,u as me,A as pe}from"./index-cb001ddc.js";import{u as ne,C as fe}from"./processDivergence-d167e18e.js";import{b as be,_ as ye,C as ge,B as Ce,P as _e,E as Se,S as we,T as xe,D as Le,$ as Ve,g as Ie}from"./index-e216fe0e.js";import{I as te}from"./iconify-6f4308af.js";import{C as ke}from"./Candles-2ed4c333.js";const Fe={key:0,class:"container-selector"},$e={key:0,class:"amount"},De=["value","placeholder"],Be=["onClick"],Pe={__name:"SelectorV2",props:{lblPorDefecto:{type:String,required:!1,default:""},displayAmount:{type:Boolean,required:!1,default:!1},onlyLabel:{type:Boolean,default:!1},opciones:{type:Object,default(w){return[]}}},emits:["actionChange"],setup(w,{emit:I}){const k=I,i=w,r=p(""),e=p(!1),c=i.lblPorDefecto,a=O({data:[]});i.lblPorDefecto!==""&&(r.value=i.lblPorDefecto);const n=O({label:"",value:""}),_=f=>{const d=f.target.value.toUpperCase();r.value=d,n.label="SYMBOL",a.data=i.opciones.filter(g=>g.label.includes(d)),e.value=!0},x=()=>{e.value=!e.value},u=f=>{e.value=!1,n.label=f.label,n.value=f.value,r.value=i.onlyLabel&&i.onlyLabel.value==!0?f.label:f.value,!(!f||!f.value)&&k("actionChange",f)},P=f=>{a.data.length==0&&f!==void 0&&(a.data=f);const d=a.data.filter(g=>g.selected);d[0]&&d[0].label&&(r.value=d[0].label)};return i.opciones&&(a.data=i.opciones,P()),T(()=>i.opciones,P),(f,d)=>w.opciones&&w.opciones.length>0&&w.opciones[0].label?(C(),L("div",Fe,[B("form",null,[w.displayAmount?(C(),L("span",$e,D(w.opciones.length),1)):E("",!0),B("input",{class:"chosen-value",type:"text",value:r.value,placeholder:y(c),onInput:_,onClick:x},null,40,De),a&&a.data?(C(),L("ul",{key:1,class:j({"value-list":!0,open:e.value})},[(C(!0),L(N,null,W(a.data,g=>(C(),L("li",{onClick:U=>u(g)},D(g.label),9,Be))),256))],2)):E("",!0)])])):E("",!0)}},H=ce(Pe,[["__scopeId","data-v-ff981326"]]),Me=ue({__name:"AutoCompletedComponent",props:["opciones","txt-placeholder"],setup(w){const I=w,k=I.txtPlaceholder,i=p(k),r=I.opciones;return(e,c)=>(C(),J(y(Ie),{modelValue:i.value,"onUpdate:modelValue":c[0]||(c[0]=a=>i.value=a),class:"ComboboxRoot"},{default:$(()=>[S(y(ge),{class:"ComboboxAnchor"},{default:$(()=>[S(y(be),{class:"ComboboxInput",placeholder:y(k)},null,8,["placeholder"]),S(y(ye),null,{default:$(()=>[S(y(te),{icon:"radix-icons:chevron-down",class:"ComboboxIcon"})]),_:1})]),_:1}),S(y(Ve),{class:"ComboboxContent"},{default:$(()=>[S(y(Ce),{class:"ComboboxViewport"},{default:$(()=>[S(y(_e),{class:"ComboboxEmpty"}),S(y(Se),null,{default:$(()=>[(C(!0),L(N,null,W(y(r),(a,n)=>(C(),J(y(we),{key:n,class:"ComboboxItem",value:a},{default:$(()=>[S(y(xe),{class:"ComboboxItemIndicator"},{default:$(()=>[S(y(te),{icon:"radix-icons:check"})]),_:1}),B("span",null,D(a),1)]),_:2},1032,["value"]))),128)),S(y(Le),{class:"ComboboxSeparator"})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}});const Ae=["id"],le={__name:"Ind",props:{ind:{type:String,required:!0,default:""}},setup(w,{expose:I}){const k=new se,i=ne(),r=w,e=p([]),c=p([]),a=p(null);let n;const _=r.ind==="rsi"?"#19f5eb":r.ind==="cci"?"yellow":"#fff",x=t=>{a.value.applyOptions({watermark:{color:_,visible:!0,text:t,fontSize:14,horzAlign:"left",vertAlign:"top"},crosshair:{mode:0,vertLine:{width:1,color:"#C3BCDB44",style:0,labelBackgroundColor:"#9B7DFF"},horzLine:{color:_,labelBackgroundColor:_}}})},u=async()=>{r.ind==="rsi"&&(M(),n.setData(e.value)),r.ind==="cci"&&F()},P=t=>{var o;a!=null&&a.value&&((o=a==null?void 0:a.value)!=null&&o.resize)&&(t!=null&&t.width)&&(t!=null&&t.height)&&a.value.resize(t.width,t.height)},f=t=>{n!=null&&n.coordinateToPrice&&n.coordinateToPrice(t)},d=t=>{var o;a.value&&((o=a==null?void 0:a.value)!=null&&o.setCrosshairPosition)&&n&&t&&a.value.setCrosshairPosition(t,t.time,n)},g=(t,o)=>{if(console.log("syncCrosshair"),o){const b=formato.filter(V=>V.time===o.time);b[0]&&n&&a.value.setCrosshairPosition(b[0],o.time,n);return}a.value.clearCrosshairPosition()},U=t=>{a.value.timeScale().setVisibleLogicalRange(t)},F=()=>{var t,o;if(c.value=i.chart.data.flatMap(b=>({time:b.time,value:b.cci,color:b!=null&&b.color?b.color:_})),a!=null&&a.value&&r.ind==="cci"&&((t=c==null?void 0:c.value[c.value.length-1])!=null&&t.value)){const b=parseFloat(c.value[c.value.length-1].value).toFixed(2);x(`CCI [mod 89] ${b}`),(o=c.value[c.value.length-1].value)!=null&&o.cciColor&&(c.value[c.value.length-1].value.color=c.value[c.value.length-1].value.cciColor),c.value.sort((V,m)=>V.time-m.time),n.setData(c.value)}},M=async()=>{var t;if(e.value=i.chart.data.flatMap(o=>({time:o.time,value:o.rsi})),console.log(r.ind,"RSI"),a!=null&&a.value&&((t=e==null?void 0:e.value[e.value.length-1])!=null&&t.value)){const o=e.value[e.value.length-1].value;x(`[14] ${String(r.ind).toUpperCase()} ${o}`),n.setData(e.value)}},A=()=>{const t=document.querySelector(`#chart-${r.ind}`);let o=k.getConfigChart(t.offsetWidth,t.offsetHeight);console.log({configChart:o},t.offsetWidth,t.offsetHeight),o.priceLineVisible=!1,o.priceLineColor="transparent",o.lastValueVisible=!1,o.localization={priceFormatter:b=>parseFloat(b).toFixed(2)},o.timeScale.visible=!1,o.lastValueVisible=!0,o.crosshair.mode=2,console.log({configChart:o}),a.value=fe(t,o),n=a.value.addLineSeries({color:_,lineWidth:1,priceLineVisible:!1,lineVisible:!0,crosshairMarkerVisible:!0}),r.ind==="cci"&&n&&(n.createPriceLine({price:100,color:"#26a69a",lineWidth:1,lineStyle:1,axisLabelVisible:!0,title:"100"}),n.createPriceLine({price:0,color:"#c1c1c1",lineWidth:1,lineStyle:1,axisLabelVisible:!0,title:"0"}),n.createPriceLine({price:-100,color:"#ffb3c6",lineWidth:1,lineStyle:1,axisLabelVisible:!0,title:"-100"}))};return T(()=>i.chart.data,function(t){console.log("*ind* cambio Data",{dt:t}),u()}),oe(async()=>{console.log("* ind",r.ind),r.ind==="rsi"?(A(),await M()):r.ind==="cci"&&(A(),await F())}),de(()=>{console.log("desmontado",r.ind),a.value&&(a.value.removeSeries(n),a.value.remove())}),I({resize:P,refresh:u,chart:a,moveChartVisible:U,moveLineY:f,syncCrosshair:g,crossMove:d}),(t,o)=>(C(),L("div",{class:"container-indicator",id:`chart-${w.ind}`},null,8,Ae))}};const Re={class:"charts"},Te={class:"selectors"},Ee={key:0},Ue=["onClick"],Ye={__name:"SpotView",setup(w,{expose:I}){const k=new se,i=ve(),r=he(),e=ne();me();const c=i.params&&i.params&&i.params.symbol?i.params.symbol.toString().toUpperCase():"BTCUSDT",a=i.params&&i.params&&i.params.temporality?i.params.temporality.toString().toLocaleLowerCase():"4h";e.chart.symbols=c,e.chart.temporality=a;const n=p([]),_=p(null),x=p(null),u=p(null),P=p(89),f=p(0),d=O({cci:!1}),g=pe(()=>{const l=Object.keys(d).filter(v=>d[v]),s={};return l.forEach(v=>{s[v]=d[v]}),s}),U=l=>{var v,h;const s=parseInt(l.logical);l.targetBarraIndex=s,x&&(x!=null&&x.value)&&x.value[0]&&(l!=null&&l.visibleLogicalRange)&&((v=x.value[0])!=null&&v.moveChartVisible)&&(x.value[0].moveChartVisible(l.visibleLogicalRange),x.value[0].crossMove(l.dataPoint)),u&&(u!=null&&u.value)&&u.value[0]&&(l!=null&&l.visibleLogicalRange)&&((h=u.value[0])!=null&&h.moveChartVisible)&&(u.value[0].moveChartVisible(l.visibleLogicalRange),u.value[0].crossMove(l.dataPoint))},F=()=>Object.values(d).filter(v=>v===!0).length,M=p([{label:"1m",value:"1m"},{label:"5m",value:"5m"},{label:"15m",value:"15m"},{label:"30m",value:"30m"},{label:"1h",value:"1h"},{label:"2h",value:"2h"},{label:"4h",value:"4h"},{label:"6h",value:"6h"},{label:"1d",value:"1d"},{label:"1w",value:"1w"}]),A=p([]),t=p(null),o=p(null),b=p(null),V=p(null),m=O({symbol:c,temporality:a}),Y=p(!1),G=async()=>{e.chart.data=await e.searchClandlesSpot({symbol:m.symbol,temporality:m.temporality,cci:P.value})},ie=async()=>{const l=await e.searchSymbolsSpot();n.value=l.flatMap(s=>s.symbol.includes("USDT")?{label:s.symbol,value:s.symbol}:[]),await G()},q=async l=>{const s=M.value.find(v=>v.label==l.label);s!=null&&s.value?(m.temporality=s.value,e.chart.temporality=m.temporality):(m.symbol=l.value,e.chart.symbols=l.value),r.push({name:"spot:data",params:{symbol:String(m.symbol).toLowerCase(),temporality:e.chart.temporality}}),b.value=null,t.value&&(m!=null&&m.symbol)&&(m!=null&&m.temporality)&&(o.value&&await t.value.send(JSON.stringify({method:"UNSUBSCRIBE",params:[`${String(o.value).toLowerCase()}`],id:1})),o.value=`${String(m.symbol).toLowerCase()}@kline_${e.chart.temporality}`,t.value.send(JSON.stringify({method:"SUBSCRIBE",params:[`${String(o.value).toLowerCase()}`],id:1})),await G())};return window.addEventListener("resize",l=>{var v;const s=document.querySelector(".container-chart-main");(v=_==null?void 0:_.value)!=null&&v.resizeChart&&(s!=null&&s.offsetHeight)&&F()==0&&_.value.resizeChart({height:s.offsetHeight,width:s.offsetWidth,visualViewport:l.target.visualViewport})}),T(()=>"target.symbol",q),T(d,({rsi:l})=>{console.log("indicadores",{rsi:l})}),T(F,l=>{const s=document.querySelector(".container-chart-main").offsetWidth;if(l==0)_.value.resizeChart({height:document.querySelector(".container-chart-main").offsetHeight,width:s});else{const v=l==1?.7:l==2?.6:.5,h=l==1?.3:l==2?.2:.5/l,z=document.querySelector(".container-chart-main").offsetHeight-120*l;console.log({c:l,chartMainHeight:z,anchura:s,porcentajeChartMain:v,porcentajeChartIndicator:h}),_.value.resizeChart({height:z,width:s})}}),oe(async()=>{t.value=await new WebSocket("wss://stream.binance.com/ws"),o.value=`${String(m.symbol).toLowerCase()}@kline_1m`,await ie(),t.value.addEventListener("open",async function(l){t.value.send(JSON.stringify({method:"SUBSCRIBE",params:[`${String(o.value).toLowerCase()}`],id:1}))}),t.value.addEventListener("message",async function(l){var s,v;if(l&&l.data&&l.data!='{"result":null,"id":1}')try{const{k:{c:h,s:z,i:ze,h:K,l:Q,x:X,n:Oe,o:Z,T:ee,V:ae,v:Ne,t:re}}=JSON.parse(l.data);if(X===!0&&(e.chart.data.push({time:parseInt(ee),timeEnd:parseInt(re),open:parseFloat(Z),high:parseFloat(K),low:parseFloat(Q),close:parseFloat(h),value:parseFloat(h),volume:parseFloat(ae)}),console.log({x:X,chartcci:u},"* Cierre de vela",e.chart.data.length,new Date)),b.value=parseFloat(h).toFixed(4),V.value={time:parseInt(ee),open:parseFloat(Z),high:parseFloat(K),low:parseFloat(Q),close:parseFloat(h),value:parseFloat(h),volume:parseFloat(ae)},e.chart.data[e.chart.data.length-1]){e.chart.data[e.chart.data.length-1].high=V.value.high,e.chart.data[e.chart.data.length-1].low=V.value.low,e.chart.data[e.chart.data.length-1].close=V.value.close;let R=k.calcularCCI(e.chart.data,89);e.chart.data[e.chart.data.length-1].cci=parseFloat(parseFloat(R.pop()).toFixed(2))}if((s=g==null?void 0:g.value)!=null&&s.cci&&g.value.cci===!0){const R=e.chart.data[e.chart.data.length-1].cci>=100?"#00f5d4":e.chart.data[e.chart.data.length-1].cci<=-100?"#ff006e":null;R&&(V.value.color=R,V.value.borderColor=R,V.value.wickColor=R)}u&&(u!=null&&u.value)&&(u!=null&&u.value[0])&&((v=u.value[0])!=null&&v.refresh)&&u.value[0].refresh()}catch(h){console.log({evt:l,e:h})}})}),I({dataCandles:A,isRefresh:Y,target:m,SelectorV2:H,dataPairs:n,dataTemporality:M,AutoCompletedComponent:Me,chartStore:e,cantidadIndicadores:f,chartIndicators:d,activeIndicators:g,cantidadIndicadoresActivos:F,Ind:le}),(l,s)=>(C(),L("main",Re,[B("aside",null,[B("div",Te,[S(H,{opciones:n.value,onlyLabel:!1,displayAmount:!0,lblPorDefecto:y(e).chart.symbols,class:"spot-selector-symbols",onActionChange:q},null,8,["opciones","lblPorDefecto"]),S(H,{opciones:M.value,onlyLabel:!1,displayAmount:!1,lblPorDefecto:m.temporality,class:"spot-selector-temp",onActionChange:q},null,8,["opciones","lblPorDefecto"])]),b.value?(C(),L("label",Ee," PRICE: "+D(b.value),1)):E("",!0),B("pre",null,D(d),1),(C(!0),L(N,null,W(d,(v,h)=>(C(),L("button",{onClick:z=>d[h]=!d[h],class:"btn btn-ind"},D(h),9,Ue))),256)),B("pre",null,D(g.value)+" ["+D(F())+"]",1)]),Y.value?E("",!0):(C(),L("section",{key:0,class:j({"container-chart-main":!0,"ind-2":f.value==2})},[S(ke,{"chart-name-id":"chart-main",main:!0,ref_key:"chartMainSpot",ref:_,"data-candles":A.value,symbol:m.symbol,spot:!0,price:V.value,"chart-indicators":d,onCrosshairMove:U},null,8,["data-candles","symbol","price","chart-indicators"]),(C(!0),L(N,null,W(g.value,(v,h)=>(C(),J(le,{class:j(`indicador c-ind-${F()} ind-${h}`),ind:`${h}`,"data-candles":A.value,ref_for:!0,ref:`chart${h}`},null,8,["class","ind","data-candles"]))),256))],2))]))}};export{Ye as default};