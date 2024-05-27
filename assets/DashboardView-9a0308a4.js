import{_ as U,i as q,j as l,u as G,r as w,f as K,o as L,k as z,a as c,g as d,l as t,d as a,e as r,t as n,m as p,c as $,n as T,w as V,p as Q,b as X,q as Y,h as Z}from"./index-1f0c1ad7.js";import{_ as ee}from"./Tmine2-25d51798.js";import{C as D}from"./ContainerGallery-cd847ce4.js";import{_ as P,a as C,b as E}from"./ScrollAreaComponent.vue_vue_type_style_index_0_lang-6e12c107.js";import"./Paginator.vue_vue_type_style_index_0_lang-ac83e538.js";import"./Paginator.vue_vue_type_script_setup_true_lang-f8f1d517.js";import"./iconify-7b29cc02.js";import"./index-727e3892.js";const A="/img/Tmine2-w.svg";const g=b=>(Q("data-v-cdfb8ab4"),b=b(),X(),b),te={class:"subscription"},ae={key:0,class:"title"},se={class:"title-left-section"},oe=g(()=>a("img",{src:A,alt:"tmine logo",class:"img-logo-tmine"},null,-1)),ne={key:0,class:"block-container"},ie={key:0,class:"text-rate"},re={class:"halving-container"},le={class:"sidebar"},ce={key:0,id:"list-options"},pe={class:"lbl-left"},de=g(()=>a("span",null,[a("img",{src:Y,alt:"matic-logo-banance",class:"matic-logo-banance"}),r(" MATIC ")],-1)),me={class:"lbl-left"},_e=g(()=>a("span",null,[a("img",{src:A,alt:"tmine-logo-banance",class:"tmine-logo-banance"}),r(" TMINE ")],-1)),ue={class:"lbl-left"},ge={class:"add-to-metamask"},be=g(()=>a("img",{src:ee,class:"tmine-logo-banance"},null,-1)),he={key:0,class:"in-col p-1 li-sort"},fe=g(()=>a("span",null,"Proximo Sorteo",-1)),we={class:"p-1-lr"},Te={__name:"DashboardView",setup(b,{expose:F}){const y=q.useToast(),k=l("syncTmineTotalSupply"),v=l("addTmineToMetamask");l("executeSelectWinner"),l("resetTimeEventDaily"),l("selectWinnerSorteo");const H=l("addMeToSorteo"),S=l("searchTmineRewardPerBlock"),I=l("searchHalving"),R=new Z,e=G(),h=w(1),x=w(null),W=w(10),j=()=>{var s=1,o=confetti.shapeFromText({text:"💎",scalar:s});confetti({particleCount:100,spread:180,shapes:[o]})},M=async()=>{var s,o,_,u,f;try{const i=await H();y.open({message:"Registro procesado satisfactoriamente.",type:"success",position:"top-right"})}catch(i){console.log({e:i}),i!=null&&i.reason?y.open({message:i.reason,type:"error",position:"top-right"}):(_=(o=(s=i==null?void 0:i.info)==null?void 0:s.error)==null?void 0:o.data)!=null&&_.message&&((f=(u=i==null?void 0:i.info)==null?void 0:u.error)==null?void 0:f.code)==-32603&&y.open({message:$t("general.titles.insufficient_gas"),type:"error",position:"top-right"})}},m=()=>{if(e.web3.nftTokensIds.length==0)return{elementosPagina:[],totalPaginas:1,paginaActual:1};const s=JSON.parse(JSON.stringify(e.web3.nftTokensIds)),o=R.arrayPaginator(s,W.value,h.value);return x.value=o.totalPaginas,console.log({dataFormat:o}),o},J=()=>{h.value<x.value&&(h.value++,N.value=m()),console.log("nextPage",h.value)},N=w(m()),B=()=>{var s;return(s=e==null?void 0:e.web3)!=null&&s.participantsInSorteo&&e.web3.participantsInSorteo.length==0?[]:e.web3.participantsInSorteo?e.web3.participantsInSorteo.flatMap(o=>o.substring(0,7)+"    ......    "+o.slice(-7)):[]};K(()=>e.web3.nftTokensIds,s=>{s&&(m(),k(),S(),I())});const O=[];return L(async()=>{await S(),await I(),k(),m(),console.log("onMounted",e.connected&&e.web3,e.connected,e.web3)}),z(()=>{S(),I(),k(),m()}),F({data:O,mainStore:e,currentPage:N,nextPage:J,ContainerGallery:D,addTmineToMetamask:v,shooterConfetti:j,CountdownComponent:P,ButtomComponent:C,registerInSorteo:M,ScrollAreaComponent:E,formatWallets:B}),(s,o)=>{var _,u;return c(),d("main",te,[t(e).connected&&t(e).web3?(c(),d("h1",ae,[a("span",se,[r(" Tmine "),oe,r(" "+n(s.$t("general.titles.total_supply"))+": "+n(t(e).web3.tmineTotalSupply)+" ",1),(u=(_=t(e))==null?void 0:_.web3)!=null&&u.blockNumber?(c(),d("span",ne,n(s.$t("general.titles.block"))+": "+n(t(e).web3.blockNumber),1)):p("",!0)]),t(e).web3.rewardTmineBase?(c(),d("span",ie,n(s.$t("general.titles.rate"))+": "+n(t(e).web3.rewardTmineBase),1)):p("",!0),a("div",re,[r(n(s.$t("general.titles.halving"))+": ",1),t(e).web3.halving?(c(),$(P,{key:0,dateTarget:parseInt(t(e).web3.halving)},null,8,["dateTarget"])):p("",!0)]),r(" Topacio Nft's assets "+n(t(e).web3.nftBalance)+" 💎 / Holders: "+n(t(e).web3.holdersCount),1)])):p("",!0),a("section",le,[t(e).connected?(c(),d("ul",ce,[a("li",null,[a("label",pe,[r(n(t(e).web3.balanceFormat)+" ",1),de])]),a("li",null,[a("label",me,[r(n(t(e).web3.tmineBalance)+" ",1),_e])]),a("li",{onClick:o[0]||(o[0]=(...f)=>t(v)&&t(v)(...f))},[a("label",ue,[a("span",ge,[be,r(" "+n(s.$t("general.titles.add_tmine")),1)])])]),t(e).web3.dateNextSorteo>999?(c(),d("li",he,[fe,T(P,{dateTarget:t(e).web3.dateNextSorteo},null,8,["dateTarget"]),T(C,{class:"bnt1",onClick:M},{default:V(()=>[r("Participar")]),_:1}),T(C,{class:"btn3 p-1 no-cursor"},{default:V(()=>[r("Participantes en dia: "+n(t(e).web3.participantsInSorteo.length),1)]),_:1})])):p("",!0),a("li",we,[T(E,{title:"Participando para sorteo",items:B(),showKey:!0},null,8,["items"])])])):p("",!0)]),t(e).connected?(c(),$(D,{key:1})):p("",!0)])}}},Me=U(Te,[["__scopeId","data-v-cdfb8ab4"]]);export{Me as default};
