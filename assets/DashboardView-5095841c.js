import{_ as k,u as x,r as l,f as y,a as _,g as p,d as t,t as i,i as a,e as g,j as m,c as B,p as S,b as I,k as N,h as T}from"./index-8317f7f8.js";import{C as b}from"./ContainerGallery-215c6644.js";const V="/img/Tmine2-w.svg";const f=s=>(S("data-v-93cd46a7"),s=s(),I(),s),C={class:"subscription"},D={class:"title"},M={class:"sidebar"},F={key:0,id:"list-options"},J={class:"lbl-left"},O=f(()=>t("img",{src:N,alt:"matic-logo-banance",class:"matic-logo-banance"},null,-1)),j={class:"lbl-left"},A=f(()=>t("img",{src:V,alt:"tmine-logo-banance",class:"tmine-logo-banance"},null,-1)),E={__name:"DashboardView",setup(s,{expose:h}){const w=new T,e=x(),n=l(1),d=l(null),v=l(10),r=()=>{if(e.web3.nftTokensIds.length==0)return{elementosPagina:[],totalPaginas:1,paginaActual:1};const o=JSON.parse(JSON.stringify(e.web3.nftTokensIds)),c=w.arrayPaginator(o,v.value,n.value);return d.value=c.totalPaginas,console.log({dataFormat:c}),c},P=()=>{n.value<d.value&&(n.value++,u.value=r()),console.log("nextPage",n.value)},u=l(r());return y(()=>e.web3.nftTokensIds,o=>{o&&r()}),h({data:[],mainStore:e,currentPage:u,nextPage:P,ContainerGallery:b}),(o,c)=>(_(),p("main",C,[t("h1",D," Topacio Nft's assets ["+i(a(e).web3.nftBalance)+"] / Holders: "+i(a(e).web3.holdersCount),1),t("section",M,[a(e).connected&&a(e).web3.nftBalance>1?(_(),p("ul",F,[t("li",null,[t("label",J,[g(i(a(e).web3.balanceFormat)+" ",1),O])]),t("li",null,[t("label",j,[g(i(a(e).web3.tmineBalance)+" ",1),A])])])):m("",!0)]),a(e).connected&&a(e).web3.nftBalance>1?(_(),B(b,{key:0})):m("",!0)]))}},U=k(E,[["__scopeId","data-v-93cd46a7"]]);export{U as default};