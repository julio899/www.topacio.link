import{_ as O,i as U,j as l,u as q,r as f,f as K,o as L,k as z,a as c,g as d,l as t,d as a,e as r,t as i,m as p,c as $,n as T,w as V,p as Q,b as X,q as Y,h as Z}from"./index-c609e3c6.js";import{_ as ee}from"./Tmine2-25d51798.js";import{C as D}from"./ContainerGallery-bffa0fbd.js";import{_ as P,a as C,b as A}from"./ScrollAreaComponent.vue_vue_type_style_index_0_lang-10abd7c2.js";import"./Paginator.vue_vue_type_style_index_0_lang-6f8577e2.js";import"./Paginator.vue_vue_type_script_setup_true_lang-419e97fe.js";import"./iconify-aecc105a.js";import"./index-3644b859.js";const E="/img/Tmine2-w.svg";const g=b=>(Q("data-v-5308217e"),b=b(),X(),b),te={class:"subscription"},ae={key:0,class:"title"},se={class:"title-left-section"},oe=g(()=>a("img",{src:E,alt:"tmine logo",class:"img-logo-tmine"},null,-1)),ne={key:0,class:"block-container"},ie={key:0,class:"text-rate"},re={class:"halving-container"},le={class:"sidebar"},ce={key:0,id:"list-options"},pe={class:"lbl-left"},de=g(()=>a("span",null,[a("img",{src:Y,alt:"matic-logo-banance",class:"matic-logo-banance"}),r(" MATIC ")],-1)),me={class:"lbl-left"},_e=g(()=>a("span",null,[a("img",{src:E,alt:"tmine-logo-banance",class:"tmine-logo-banance"}),r(" TMINE ")],-1)),ue=g(()=>a("label",{class:"lbl-left"},[a("span",{class:"add-to-metamask"},[a("img",{src:ee,class:"tmine-logo-banance"}),r(" Add TMine ")])],-1)),ge=[ue],be={key:0,class:"in-col p-1 li-sort"},he=g(()=>a("span",null,"Proximo Sorteo",-1)),we={class:"p-1-lr"},fe={__name:"DashboardView",setup(b,{expose:F}){const y=U.useToast(),k=l("syncTmineTotalSupply"),v=l("addTmineToMetamask");l("executeSelectWinner"),l("resetTimeEventDaily"),l("selectWinnerSorteo");const H=l("addMeToSorteo"),S=l("searchTmineRewardPerBlock"),I=l("searchHalving"),R=new Z,e=q(),h=f(1),x=f(null),W=f(10),j=()=>{var s=1,o=confetti.shapeFromText({text:"💎",scalar:s});confetti({particleCount:100,spread:180,shapes:[o]})},M=async()=>{var s,o,_,u,w;try{const n=await H();y.open({message:"Registro procesado satisfactoriamente.",type:"success",position:"top-right"})}catch(n){console.log({e:n}),n!=null&&n.reason?y.open({message:n.reason,type:"error",position:"top-right"}):(_=(o=(s=n==null?void 0:n.info)==null?void 0:s.error)==null?void 0:o.data)!=null&&_.message&&((w=(u=n==null?void 0:n.info)==null?void 0:u.error)==null?void 0:w.code)==-32603&&y.open({message:"Gas insuficiente",type:"error",position:"top-right"})}},m=()=>{if(e.web3.nftTokensIds.length==0)return{elementosPagina:[],totalPaginas:1,paginaActual:1};const s=JSON.parse(JSON.stringify(e.web3.nftTokensIds)),o=R.arrayPaginator(s,W.value,h.value);return x.value=o.totalPaginas,console.log({dataFormat:o}),o},G=()=>{h.value<x.value&&(h.value++,N.value=m()),console.log("nextPage",h.value)},N=f(m()),B=()=>{var s;return(s=e==null?void 0:e.web3)!=null&&s.participantsInSorteo&&e.web3.participantsInSorteo.length==0?[]:e.web3.participantsInSorteo?e.web3.participantsInSorteo.flatMap(o=>o.substring(0,7)+"    ......    "+o.slice(-7)):[]};K(()=>e.web3.nftTokensIds,s=>{s&&(m(),k(),S(),I())});const J=[];return L(async()=>{await S(),await I(),k(),m(),console.log("onMounted",e.connected&&e.web3,e.connected,e.web3)}),z(()=>{S(),I(),k(),m()}),F({data:J,mainStore:e,currentPage:N,nextPage:G,ContainerGallery:D,addTmineToMetamask:v,shooterConfetti:j,CountdownComponent:P,ButtomComponent:C,registerInSorteo:M,ScrollAreaComponent:A,formatWallets:B}),(s,o)=>{var _,u;return c(),d("main",te,[t(e).connected&&t(e).web3?(c(),d("h1",ae,[a("span",se,[r(" Tmine "),oe,r(" "+i(s.$t("general.titles.total_supply"))+": "+i(t(e).web3.tmineTotalSupply)+" ",1),(u=(_=t(e))==null?void 0:_.web3)!=null&&u.blockNumber?(c(),d("span",ne,i(s.$t("general.titles.block"))+": "+i(t(e).web3.blockNumber),1)):p("",!0)]),t(e).web3.rewardTmineBase?(c(),d("span",ie,i(s.$t("general.titles.rate"))+": "+i(t(e).web3.rewardTmineBase),1)):p("",!0),a("div",re,[r(i(s.$t("general.titles.halving"))+": ",1),t(e).web3.halving?(c(),$(P,{key:0,dateTarget:parseInt(t(e).web3.halving)},null,8,["dateTarget"])):p("",!0)]),r(" Topacio Nft's assets "+i(t(e).web3.nftBalance)+" 💎 / Holders: "+i(t(e).web3.holdersCount),1)])):p("",!0),a("section",le,[t(e).connected?(c(),d("ul",ce,[a("li",null,[a("label",pe,[r(i(t(e).web3.balanceFormat)+" ",1),de])]),a("li",null,[a("label",me,[r(i(t(e).web3.tmineBalance)+" ",1),_e])]),a("li",{onClick:o[0]||(o[0]=(...w)=>t(v)&&t(v)(...w))},ge),t(e).web3.dateNextSorteo>999?(c(),d("li",be,[he,T(P,{dateTarget:t(e).web3.dateNextSorteo},null,8,["dateTarget"]),T(C,{class:"bnt1",onClick:M},{default:V(()=>[r("Participar")]),_:1}),T(C,{class:"btn3 p-1 no-cursor"},{default:V(()=>[r("Participantes en dia: "+i(t(e).web3.participantsInSorteo.length),1)]),_:1})])):p("",!0),a("li",we,[T(A,{title:"Participando para sorteo",items:B(),showKey:!0},null,8,["items"])])])):p("",!0)]),t(e).connected?(c(),$(D,{key:1})):p("",!0)])}}},xe=O(fe,[["__scopeId","data-v-5308217e"]]);export{xe as default};