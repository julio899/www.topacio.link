import{_ as N,r as b,I as k,f as L,a as i,g as _,d as x,t as w,m as C,l as s,y as O,F as $,B as P,K as F,c as D,w as f,n as r,G as J,H as M,u as q,o as j}from"./index-5d9c99f0.js";import{u as z}from"./chart-5b28736d.js";import{b as G,_ as H,C as K,B as W,P as Q,E as X,S as Y,T as Z,D as ee,$ as oe,g as ae}from"./index-3b8dde9d.js";import{I as V}from"./iconify-67965fb0.js";const te={key:0,class:"container-selector"},le={key:0,class:"amount"},se=["value","placeholder"],ne=["onClick"],ce={__name:"SelectorV2",props:{lblPorDefecto:{type:String,required:!1,default:""},displayAmount:{type:Boolean,required:!1,default:!1},onlyLabel:{type:Boolean,default:!1},opciones:{type:Object,default(p){return[]}}},emits:["actionChange"],setup(p,{emit:v}){const n=v,a=p,m=b(""),y=b(!1),d=a.lblPorDefecto;console.log({props:a,porDefault:d});const e=k({data:[]});a.lblPorDefecto!==""&&(m.value=a.lblPorDefecto);const u=k({label:"",value:""}),h=t=>{const o=t.target.value.toUpperCase();m.value=o},c=()=>{y.value=!y.value},S=t=>{y.value=!1,u.label=t.label,u.value=t.value,m.value=a.onlyLabel&&a.onlyLabel.value==!0?t.label:t.value,!(!t||!t.value)&&n("actionChange",t)},g=t=>{e.data.length==0&&t!==void 0&&(e.data=t);const o=e.data.filter(l=>l.selected);o[0]&&o[0].label&&(m.value=o[0].label),console.log("checkSelecction",{e:t,existCheck:o,dt:e.data})};return console.log({o:a.opciones}),a.opciones&&(e.data=a.opciones,g()),L(()=>a.opciones,g),(t,o)=>p.opciones&&p.opciones.length>0&&p.opciones[0].label?(i(),_("div",te,[x("form",null,[p.displayAmount?(i(),_("span",le,w(p.opciones.length),1)):C("",!0),x("input",{class:"chosen-value",type:"text",value:m.value,placeholder:s(d),onInput:h,onClick:c},null,40,se),e&&e.data?(i(),_("ul",{key:1,class:O({"value-list":!0,open:y.value})},[(i(!0),_($,null,P(e.data,l=>(i(),_("li",{onClick:B=>S(l)},w(l.label),9,ne))),256))],2)):C("",!0)])])):C("",!0)}},I=N(ce,[["__scopeId","data-v-f209cfe6"]]),re=F({__name:"AutoCompletedComponent",props:["opciones","txt-placeholder"],setup(p){const v=p,n=v.txtPlaceholder,a=b(n),m=v.opciones;return console.log({options:m}),(y,d)=>(i(),D(s(ae),{modelValue:a.value,"onUpdate:modelValue":d[0]||(d[0]=e=>a.value=e),class:"ComboboxRoot"},{default:f(()=>[r(s(K),{class:"ComboboxAnchor"},{default:f(()=>[r(s(G),{class:"ComboboxInput",placeholder:s(n)},null,8,["placeholder"]),r(s(H),null,{default:f(()=>[r(s(V),{icon:"radix-icons:chevron-down",class:"ComboboxIcon"})]),_:1})]),_:1}),r(s(oe),{class:"ComboboxContent"},{default:f(()=>[r(s(W),{class:"ComboboxViewport"},{default:f(()=>[r(s(Q),{class:"ComboboxEmpty"}),r(s(X),null,{default:f(()=>[(i(!0),_($,null,P(s(m),(e,u)=>(i(),D(s(Y),{key:u,class:"ComboboxItem",value:e},{default:f(()=>[r(s(Z),{class:"ComboboxItemIndicator"},{default:f(()=>[r(s(V),{icon:"radix-icons:check"})]),_:1}),x("span",null,w(e),1)]),_:2},1032,["value"]))),128)),r(s(ee),{class:"ComboboxSeparator"})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}});const ue={class:"charts"},ie={key:0},pe={key:0},be={__name:"SpotView",setup(p,{expose:v}){const n=J();M();const a=z();q();const m=n.params&&n.params&&n.params.symbol?n.params.symbol.toString().toUpperCase():"BTCUSDT",y=n.params&&n.params&&n.params.temporality?n.params.temporality.toString().toLocaleLowerCase():"4h",d=b([]),e=b(null),u=b(null),h=b(null),c=k({symbol:m,temporality:y}),S=b(!1),g=async()=>{const o=await a.searchSymbolsSpot();console.log(o.flatMap(l=>l.symbol.includes("USDT")?l.symbol:[])),d.value=o.flatMap(l=>l.symbol.includes("USDT")?{label:l.symbol,value:l.symbol}:[])},t=async o=>{h.value=null,c.symbol=o.value,console.log("changeTarget",{target:c,e:o}),e.value&&(c!=null&&c.symbol)&&(c!=null&&c.temporality)&&(u.value&&await e.value.send(JSON.stringify({method:"UNSUBSCRIBE",params:[`${String(u.value).toLowerCase()}`],id:1})),u.value=`${String(c.symbol).toLowerCase()}@kline_1m`,e.value.send(JSON.stringify({method:"SUBSCRIBE",params:[`${String(u.value).toLowerCase()}`],id:1})))};return L(()=>"target.symbol",t),j(async()=>{e.value=await new WebSocket("wss://stream.binance.com/ws"),u.value=`${String(c.symbol).toLowerCase()}@kline_1m`,await g(),e.value.addEventListener("open",async function(o){e.value.send(JSON.stringify({method:"SUBSCRIBE",params:[`${String(u.value).toLowerCase()}`],id:1}))}),e.value.addEventListener("message",async function(o){if(o&&o.data&&o.data!='{"result":null,"id":1}')try{const{k:{c:l,s:B,i:T,h:E,l:U,x:R,n:A}}=JSON.parse(o.data);console.log({c:l,s:B,i:T,h:E,l:U,x:R,n:A}),h.value=parseFloat(l).toFixed(4)}catch(l){console.log({evt:o,e:l})}})}),v({isRefresh:S,target:c,SelectorV2:I,dataPairs:d,AutoCompletedComponent:re,chartStore:a}),(o,l)=>(i(),_("main",ue,[x("aside",null,[r(I,{opciones:d.value,onlyLabel:!1,displayAmount:!0,lblPorDefecto:s(a).chart.symbols,class:"spot-selector-symbols",onActionChange:t},null,8,["opciones","lblPorDefecto"]),h.value?(i(),_("label",ie," PRICE: "+w(h.value),1)):C("",!0)]),S.value?C("",!0):(i(),_("section",pe,"chart"))]))}};export{be as default};