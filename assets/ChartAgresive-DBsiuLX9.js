import{_ as D}from"./Selector-BrGgn4yc.js";import{C as l}from"./Candles-keeScSWz.js";import{_ as A,u as B,r as o,o as P,q as y,b as M,d as c,k as i,cd as U,a as S,ce as E,i as L}from"./index-Dx1DjroG.js";import{u as N}from"./chart-rAGeHkBH.js";import"./lightweight-charts.production-Cq3om6Hu.js";import"./processDivergence-CKT4E2ef.js";const R={key:0,class:"charts"},V={class:"target-symbols"},q={class:"MainChart"},z={class:"microSection"},F={key:1},I={__name:"ChartAgresive",setup(j,{expose:w}){var b,v;const a=N(),r=B(),e=U(),C=E(),g=new L,m=o([]),p=o(null),u=o(null),h=o(null),d=o(null);let f=null;o(!1);const x=e.params&&e.params&&e.params.symbol?e.params.symbol.toString().toUpperCase():"BTCUSDT",T=e.params&&e.params&&e.params.temporality?e.params.temporality.toString().toLocaleLowerCase():"1m";(b=e==null?void 0:e.params)!=null&&b.symbol?a.chart.symbols=String(e.params.symbol).toUpperCase():a.chart.symbols=x,(v=e==null?void 0:e.params)!=null&&v.temporality?a.chart.temporality=e.params.temporality:a.chart.temporality=T;const _=async s=>{f=s.value,p.value&&(r.loading=!0,C.push({name:"agresive:data",params:{symbol:String(f).toLowerCase(),temporality:a.chart.temporality}}),a.chart.symbols=s.value,await p.value.changeTarget(s),a.chart.data=await g.searchData({exchange:a.getExchange,interval:a.getTemporality,symbolsPairs:a.getSymbol,limit:500}),u.value&&await u.value.resetMicro(s),h.value&&await h.value.resetMicro(s),d.value&&await d.value.resetMicro(s),r.loading=!1)},k=async()=>{const n=(await a.searchSymbolsFutures()).flatMap(t=>a.chart.symbols!=t.symbol?{label:t.symbol,value:t.symbol}:{label:t.symbol,value:t.symbol,selected:!0});m.value=n.filter(t=>t.value.includes("USDT")),a.chart.data=await g.searchData({exchange:a.getExchange,interval:a.getTemporality,symbolsPairs:a.getSymbol,limit:500})};return P(async()=>{r.loading=!0,await k(),r.loading=!1}),w({Candles:l,mainStore:r,dataPairs:m,changeTarget:_}),(s,n)=>{const t=D;return y(r).connected&&y(r).web3.nftBalance>0?(S(),M("main",R,[c("div",V,[i(t,{opciones:m.value,onlyLabel:!1,lblPorDefecto:y(a).chart.symbols,onActionChange:_},null,8,["opciones","lblPorDefecto"])]),c("div",q,[i(l,{"chart-name-id":"chart-main","chart-indicators":{},main:!0,ref_key:"chartMainAgresive",ref:p},null,512)]),c("div",z,[i(l,{"chart-name-id":"chart-5s","chart-indicators":{},micro:!0,t:5,ref_key:"chartMicro1",ref:u},null,512),i(l,{"chart-name-id":"chart-15s","chart-indicators":{},micro:!0,t:15,ref_key:"chartMicro2",ref:h},null,512),i(l,{"chart-name-id":"chart-30s","chart-indicators":{},micro:!0,t:30,ref_key:"chartMicro3",ref:d},null,512)])])):(S(),M("main",F,n[0]||(n[0]=[c("h1",null,"Necesitas al menos 1 fragmento de alguna de las gemas del Meta de Topacio",-1),c("p",{class:"message-info"}," Encuentra alguno de los Nft's de este hermoso proyecto. participa de los difrentes eventos, se parte de la descentralización. y siguenos en las redes sociales para estar atento y estar participando para los Airdoprs. ",-1)])))}}},W=A(I,[["__scopeId","data-v-b308b26c"]]);export{W as default};
