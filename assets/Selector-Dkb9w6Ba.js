import{_ as h,s as y,r as p,H as m,h as C,o as D,a as f,b,d as _,y as B,F as L,g as O,t as S,f as V}from"./index-K_GMrkD6.js";const M={name:"Selector",props:["opciones","onlyLabel"],setup(n,{emit:s}){const{opciones:c,lblPorDefecto:t,onlyLabel:u}=y(n),i=p(!1),l=p(""),e=c.value.filter(a=>a.selected),o=m({label:e&&e[0]&&e[0].label?e[0].label:"SYMBOL",value:e&&e[0]&&e[0].value?e[0].value:""}),v=m({data:[]}),x=()=>{i.value=!i.value};C(c,a=>{const r=a.filter(d=>d.selected);r&&r[0]&&(l.value=r[0].label)}),v.data=c.value;const k=a=>{const r=a.target.value.toUpperCase();l.value=r,o.label="SYMBOL",v.data=n.opciones.filter(d=>d.label.includes(r)),i.value=!0},g=a=>{i.value=!1,o.label=a.label,o.value=a.value,l.value=u.value&&u.value==!0?a.label:a.value,!(!a||!a.value)&&s("actionChange",a)};return e&&e[0]&&(o.value=e[0].value,o.label=e[0].label,l.value=e[0].label),D(async()=>{n.opciones&&n.opciones[0]!=null&&!e[0]&&(o.label=n.opciones[0].label,o.value=n.opciones[0].value,l.value=n.opciones[0].value)}),{open:i,controllerText:k,clickOption:g,defaultOption:o,txtValue:l,opcionesData:v,porDefault:e,abrir:x}}},T={key:0,class:"container-selector"},F=["value","placeholder"],I=["onClick"];function N(n,s,c,t,u,i){return c.opciones&&c.opciones.length>0&&c.opciones[0].label?(f(),b("div",T,[_("form",null,[_("input",{class:"chosen-value",type:"text",value:t.txtValue,placeholder:t.porDefault,onInput:s[0]||(s[0]=(...l)=>t.controllerText&&t.controllerText(...l)),onClick:s[1]||(s[1]=(...l)=>t.abrir&&t.abrir(...l))},null,40,F),_("ul",{class:B({"value-list":!0,open:t.open})},[(f(!0),b(L,null,O(t.opcionesData.data,l=>(f(),b("li",{onClick:e=>t.clickOption(l)},S(l.label),9,I))),256))],2)])])):V("",!0)}const w=h(M,[["render",N],["__scopeId","data-v-ae86c8ed"]]);export{w as _};
