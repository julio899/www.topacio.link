import{_ as j,i as q,j as r,u as J,r as w,f as L,o as O,k as U,a as c,g,l as a,d as t,e as l,t as i,m as p,c as P,n as G,p as K,b as z,q as Q,h as X}from"./index-382a00ec.js";import{_ as Y}from"./Tmine2-25d51798.js";import{C as B}from"./ContainerGallery-9b148478.js";import{_ as $,a as Z,b as N}from"./ScrollAreaComponent.vue_vue_type_style_index_0_lang-1e3eb973.js";import"./Paginator.vue_vue_type_style_index_0_lang-f7235073.js";import"./Paginator.vue_vue_type_script_setup_true_lang-c807fda7.js";import"./iconify-12e2416e.js";import"./index-57f44a14.js";const x="/img/Tmine2-w.svg",ee="/img/MATICTMIME.svg";const u=b=>(K("data-v-7639100d"),b=b(),z(),b),te={class:"subscription"},se={key:0,class:"title"},ae={class:"title-left-section"},oe=u(()=>t("img",{src:x,alt:"tmine logo",class:"img-logo-tmine"},null,-1)),ne={key:0,class:"block-container"},ie={key:0,class:"text-rate"},le={class:"halving-container"},re={class:"sidebar"},ce={key:0,id:"list-options"},pe={class:"lbl-left"},de=u(()=>t("span",null,[t("img",{src:Q,alt:"matic-logo-banance",class:"matic-logo-banance"}),l(" MATIC ")],-1)),me={class:"lbl-left"},_e=u(()=>t("span",null,[t("img",{src:x,alt:"tmine-logo-banance",class:"tmine-logo-banance"}),l(" TMINE ")],-1)),ge={class:"lbl-left"},ue={class:"add-to-metamask"},be=u(()=>t("img",{src:Y,class:"tmine-logo-banance"},null,-1)),he=u(()=>t("li",{class:"container-pool"},[t("img",{src:ee,alt:"Liquidity Pool",class:"img-pool"})],-1)),fe={class:"p-1-lr"},we={__name:"DashboardView",setup(b,{expose:V}){const T=q.useToast(),y=r("syncTmineTotalSupply"),v=r("addTmineToMetamask");r("executeSelectWinner"),r("resetTimeEventDaily"),r("selectWinnerSorteo");const D=r("addMeToSorteo"),k=r("searchTmineRewardPerBlock"),S=r("searchHalving"),E=new X,e=J(),h=w(1),I=w(null),A=w(10),F=()=>{var s=1,o=confetti.shapeFromText({text:"💎",scalar:s});confetti({particleCount:100,spread:180,shapes:[o]})},H=async()=>{var s,o,m,_,f;try{const n=await D();T.open({message:"Registro procesado satisfactoriamente.",type:"success",position:"top-right"})}catch(n){console.log({e:n}),n!=null&&n.reason?T.open({message:n.reason,type:"error",position:"top-right"}):(m=(o=(s=n==null?void 0:n.info)==null?void 0:s.error)==null?void 0:o.data)!=null&&m.message&&((f=(_=n==null?void 0:n.info)==null?void 0:_.error)==null?void 0:f.code)==-32603&&T.open({message:$t("general.titles.insufficient_gas"),type:"error",position:"top-right"})}},d=()=>{if(e.web3.nftTokensIds.length==0)return{elementosPagina:[],totalPaginas:1,paginaActual:1};const s=JSON.parse(JSON.stringify(e.web3.nftTokensIds)),o=E.arrayPaginator(s,A.value,h.value);return I.value=o.totalPaginas,console.log({dataFormat:o}),o},R=()=>{h.value<I.value&&(h.value++,M.value=d()),console.log("nextPage",h.value)},M=w(d()),C=()=>{var s;return(s=e==null?void 0:e.web3)!=null&&s.participantsInSorteo&&e.web3.participantsInSorteo.length==0?[]:e.web3.participantsInSorteo?e.web3.participantsInSorteo.flatMap(o=>o.substring(0,7)+"    ......    "+o.slice(-7)):[]};L(()=>e.web3.nftTokensIds,s=>{s&&(d(),y(),k(),S())});const W=[];return O(async()=>{await k(),await S(),y(),d(),console.log("onMounted",e.connected&&e.web3,e.connected,e.web3)}),U(()=>{k(),S(),y(),d()}),V({data:W,mainStore:e,currentPage:M,nextPage:R,ContainerGallery:B,addTmineToMetamask:v,shooterConfetti:F,CountdownComponent:$,ButtomComponent:Z,registerInSorteo:H,ScrollAreaComponent:N,formatWallets:C}),(s,o)=>{var m,_;return c(),g("main",te,[a(e).connected&&a(e).web3?(c(),g("h1",se,[t("span",ae,[l(" Tmine "),oe,l(" "+i(s.$t("general.titles.total_supply"))+": "+i(a(e).web3.tmineTotalSupply)+" ",1),(_=(m=a(e))==null?void 0:m.web3)!=null&&_.blockNumber?(c(),g("span",ne,i(s.$t("general.titles.block"))+": "+i(a(e).web3.blockNumber),1)):p("",!0)]),a(e).web3.rewardTmineBase?(c(),g("span",ie,i(s.$t("general.titles.rate"))+": "+i(a(e).web3.rewardTmineBase),1)):p("",!0),t("div",le,[l(i(s.$t("general.titles.halving"))+": ",1),a(e).web3.halving?(c(),P($,{key:0,dateTarget:parseInt(a(e).web3.halving)},null,8,["dateTarget"])):p("",!0)]),l(" Topacio Nft's assets "+i(a(e).web3.nftBalance)+" 💎 / Holders: "+i(a(e).web3.holdersCount),1)])):p("",!0),t("section",re,[a(e).connected?(c(),g("ul",ce,[t("li",null,[t("label",pe,[l(i(a(e).web3.balanceFormat)+" ",1),de])]),t("li",null,[t("label",me,[l(i(a(e).web3.tmineBalance)+" ",1),_e])]),t("li",{onClick:o[0]||(o[0]=(...f)=>a(v)&&a(v)(...f))},[t("label",ge,[t("span",ue,[be,l(" "+i(s.$t("general.titles.add_tmine")),1)])])]),he,t("li",fe,[G(N,{title:"Participando para sorteo",items:C(),showKey:!0},null,8,["items"])])])):p("",!0)]),a(e).connected?(c(),P(B,{key:1})):p("",!0)])}}},Pe=j(we,[["__scopeId","data-v-7639100d"]]);export{Pe as default};
