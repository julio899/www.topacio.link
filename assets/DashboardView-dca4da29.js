import{_ as h,u as w,r,f as v,a as _,g as P,d as a,t as s,i as t,c as S,j as y,p as k,b as x,h as B}from"./index-c8e1dafe.js";import{C as b}from"./ContainerGallery-ef421cfe.js";const C=n=>(k("data-v-4d8b5c0f"),n=n(),x(),n),I={class:"subscription"},D=C(()=>a("h1",{class:"title"},"Dashboard",-1)),N={class:"sidebar"},V={id:"list-options"},T={class:"lbl-left"},M={__name:"DashboardView",setup(n,{expose:p}){const f=new B,e=w(),o=r(1),d=r(null),g=r(10),i=()=>{if(e.web3.nftTokensIds.length==0)return{elementosPagina:[],totalPaginas:1,paginaActual:1};const l=JSON.parse(JSON.stringify(e.web3.nftTokensIds)),c=f.arrayPaginator(l,g.value,o.value);return d.value=c.totalPaginas,console.log({dataFormat:c}),c},m=()=>{o.value<d.value&&(o.value++,u.value=i()),console.log("nextPage",o.value)},u=r(i());return v(()=>e.web3.nftTokensIds,l=>{l&&i()}),p({data:[],mainStore:e,currentPage:u,nextPage:m,ContainerGallery:b}),(l,c)=>(_(),P("main",I,[D,a("section",N,[a("ul",V,[a("li",null,"balance: "+s(t(e).web3.balanceFormat),1),a("li",null,[a("label",T," Tmine balance: "+s(t(e).web3.tmineBalance),1)]),a("li",null,"["+s(t(e).web3.nftNameContract)+" ]",1),a("li",null,s(t(e).web3.nftSymb)+" : "+s(t(e).web3.nftBalance),1),a("li",null,"Count Holders: "+s(t(e).web3.holdersCount),1)])]),t(e).connected&&t(e).web3.nftBalance>1?(_(),S(b,{key:0})):y("",!0)]))}},j=h(M,[["__scopeId","data-v-4d8b5c0f"]]);export{j as default};