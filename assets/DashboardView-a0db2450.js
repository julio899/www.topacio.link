import{_ as L,i as O,j as r,u as U,r as w,f as G,o as K,k as z,a as c,g as d,l as t,d as s,e as l,t as n,m as p,c as $,n as T,w as V,p as Q,b as X,q as Y,h as Z}from"./index-009b1c11.js";import{_ as ee}from"./Tmine2-25d51798.js";import{C as D}from"./ContainerGallery-b5f84c55.js";import{_ as P,a as C,b as E}from"./ScrollAreaComponent.vue_vue_type_style_index_0_lang-de26ca88.js";import"./Paginator.vue_vue_type_style_index_0_lang-3f2ffc68.js";import"./Paginator.vue_vue_type_script_setup_true_lang-7ad5bedc.js";import"./iconify-f8886ae1.js";import"./index-6388eed9.js";const A="/img/Tmine2-w.svg",te="/img/MATICTMIME.svg";const m=b=>(Q("data-v-59110875"),b=b(),X(),b),se={class:"subscription"},ae={key:0,class:"title"},oe={class:"title-left-section"},ne=m(()=>s("img",{src:A,alt:"tmine logo",class:"img-logo-tmine"},null,-1)),ie={key:0,class:"block-container"},le={key:0,class:"text-rate"},re={class:"halving-container"},ce={class:"sidebar"},pe={key:0,id:"list-options"},de={class:"lbl-left"},me=m(()=>s("span",null,[s("img",{src:Y,alt:"matic-logo-banance",class:"matic-logo-banance"}),l(" MATIC ")],-1)),_e={class:"lbl-left"},ue=m(()=>s("span",null,[s("img",{src:A,alt:"tmine-logo-banance",class:"tmine-logo-banance"}),l(" TMINE ")],-1)),ge={class:"lbl-left"},be={class:"add-to-metamask"},he=m(()=>s("img",{src:ee,class:"tmine-logo-banance"},null,-1)),fe={key:0,class:"in-col p-1 li-sort"},we=m(()=>s("span",null,"Proximo Sorteo",-1)),Te={class:"p-1-lr"},ye=m(()=>s("li",{class:"container-pool"},[s("img",{src:te,alt:"Liquidity Pool"})],-1)),ke={__name:"DashboardView",setup(b,{expose:F}){const y=O.useToast(),k=r("syncTmineTotalSupply"),v=r("addTmineToMetamask");r("executeSelectWinner"),r("resetTimeEventDaily"),r("selectWinnerSorteo");const H=r("addMeToSorteo"),S=r("searchTmineRewardPerBlock"),I=r("searchHalving"),R=new Z,e=U(),h=w(1),M=w(null),W=w(10),j=()=>{var a=1,o=confetti.shapeFromText({text:"💎",scalar:a});confetti({particleCount:100,spread:180,shapes:[o]})},x=async()=>{var a,o,u,g,f;try{const i=await H();y.open({message:"Registro procesado satisfactoriamente.",type:"success",position:"top-right"})}catch(i){console.log({e:i}),i!=null&&i.reason?y.open({message:i.reason,type:"error",position:"top-right"}):(u=(o=(a=i==null?void 0:i.info)==null?void 0:a.error)==null?void 0:o.data)!=null&&u.message&&((f=(g=i==null?void 0:i.info)==null?void 0:g.error)==null?void 0:f.code)==-32603&&y.open({message:$t("general.titles.insufficient_gas"),type:"error",position:"top-right"})}},_=()=>{if(e.web3.nftTokensIds.length==0)return{elementosPagina:[],totalPaginas:1,paginaActual:1};const a=JSON.parse(JSON.stringify(e.web3.nftTokensIds)),o=R.arrayPaginator(a,W.value,h.value);return M.value=o.totalPaginas,console.log({dataFormat:o}),o},q=()=>{h.value<M.value&&(h.value++,N.value=_()),console.log("nextPage",h.value)},N=w(_()),B=()=>{var a;return(a=e==null?void 0:e.web3)!=null&&a.participantsInSorteo&&e.web3.participantsInSorteo.length==0?[]:e.web3.participantsInSorteo?e.web3.participantsInSorteo.flatMap(o=>o.substring(0,7)+"    ......    "+o.slice(-7)):[]};G(()=>e.web3.nftTokensIds,a=>{a&&(_(),k(),S(),I())});const J=[];return K(async()=>{await S(),await I(),k(),_(),console.log("onMounted",e.connected&&e.web3,e.connected,e.web3)}),z(()=>{S(),I(),k(),_()}),F({data:J,mainStore:e,currentPage:N,nextPage:q,ContainerGallery:D,addTmineToMetamask:v,shooterConfetti:j,CountdownComponent:P,ButtomComponent:C,registerInSorteo:x,ScrollAreaComponent:E,formatWallets:B}),(a,o)=>{var u,g;return c(),d("main",se,[t(e).connected&&t(e).web3?(c(),d("h1",ae,[s("span",oe,[l(" Tmine "),ne,l(" "+n(a.$t("general.titles.total_supply"))+": "+n(t(e).web3.tmineTotalSupply)+" ",1),(g=(u=t(e))==null?void 0:u.web3)!=null&&g.blockNumber?(c(),d("span",ie,n(a.$t("general.titles.block"))+": "+n(t(e).web3.blockNumber),1)):p("",!0)]),t(e).web3.rewardTmineBase?(c(),d("span",le,n(a.$t("general.titles.rate"))+": "+n(t(e).web3.rewardTmineBase),1)):p("",!0),s("div",re,[l(n(a.$t("general.titles.halving"))+": ",1),t(e).web3.halving?(c(),$(P,{key:0,dateTarget:parseInt(t(e).web3.halving)},null,8,["dateTarget"])):p("",!0)]),l(" Topacio Nft's assets "+n(t(e).web3.nftBalance)+" 💎 / Holders: "+n(t(e).web3.holdersCount),1)])):p("",!0),s("section",ce,[t(e).connected?(c(),d("ul",pe,[s("li",null,[s("label",de,[l(n(t(e).web3.balanceFormat)+" ",1),me])]),s("li",null,[s("label",_e,[l(n(t(e).web3.tmineBalance)+" ",1),ue])]),s("li",{onClick:o[0]||(o[0]=(...f)=>t(v)&&t(v)(...f))},[s("label",ge,[s("span",be,[he,l(" "+n(a.$t("general.titles.add_tmine")),1)])])]),t(e).web3.dateNextSorteo>999?(c(),d("li",fe,[we,T(P,{dateTarget:t(e).web3.dateNextSorteo},null,8,["dateTarget"]),T(C,{class:"bnt1",onClick:x},{default:V(()=>[l("Participar")]),_:1}),T(C,{class:"btn3 p-1 no-cursor"},{default:V(()=>[l("Participantes en dia: "+n(t(e).web3.participantsInSorteo.length),1)]),_:1})])):p("",!0),s("li",Te,[T(E,{title:"Participando para sorteo",items:B(),showKey:!0},null,8,["items"])]),ye])):p("",!0)]),t(e).connected?(c(),$(D,{key:1})):p("",!0)])}}},Be=L(ke,[["__scopeId","data-v-59110875"]]);export{Be as default};