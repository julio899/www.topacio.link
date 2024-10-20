import{V as v,d as g}from"./lightweight-charts.production-DxYz0kgw.js";import{_ as M,u as P,b as w,d as S,i as y,a as B}from"./index-chZ2vKUL.js";const I=P(),h=new y,V={mounted(){const e=document.getElementById("chart-container"),o=document.getElementById("mainchart"),i=parseInt(e.offsetWidth/1.01),a=parseInt(o.offsetHeight/1.1);let c=h.getConfigChart(i,a);const s=h.getConfigVelasTransparentes();console.log({mainStore:I,w:i,h:a,composableMainStore:h,configChart:c,configCandles:s});const l=v(e,c),n=l.addCandlestickSeries(s);n.setData([{time:"2022-01-01",open:100,high:110,low:90,close:105},{time:"2022-01-02",open:105,high:115,low:95,close:110},{time:"2022-01-03",open:110,high:120,low:100,close:115}]);const r=[n.createPriceLine({price:110,color:"red",lineWidth:2,lineStyle:g.Solid,axisLabelVisible:!0,title:"Line 1"}),n.createPriceLine({price:115,color:"blue",lineWidth:2,lineStyle:g.Solid,axisLabelVisible:!0,title:"Line 2"})];let d=!1,t=null;function L(p){if(!d||t===null)return;const u=e.getBoundingClientRect(),f=n.coordinateToPrice(p.clientY-u.top);r[t].applyOptions({price:f})}function _(p){const u=e.getBoundingClientRect(),f=n.coordinateToPrice(p.clientY-u.top);r.forEach((x,C)=>{const m=parseFloat(x.options().price.toFixed(5)),E=parseFloat(f.toFixed(5));Math.abs(E-m)<.01*m&&(d=!0,t=C,l.applyOptions({handleScroll:!1,handleScale:!1}))})}function b(){t!==null&&alert(`Price line ${t+1} moved to: `+r[t].options().price.toFixed(5)),d=!1,t=null,l.applyOptions({handleScroll:!0,handleScale:!0})}e.addEventListener("mousemove",L),e.addEventListener("mousedown",_),e.addEventListener("mouseup",b),console.log("mounted")},setup(){}},F={id:"mainchart",class:"charts"};function $(e,o,i,a,c,s){return B(),w("main",F,o[0]||(o[0]=[S("h1",null,"Refactor",-1),S("div",{id:"chart-container"},null,-1)]))}const R=M(V,[["render",$],["__scopeId","data-v-1f00f2eb"]]);export{R as default};
