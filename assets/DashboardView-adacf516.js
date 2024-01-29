import{_ as J,i as O,j as r,u as R,r as b,f as U,o as q,k as K,a as l,g as f,l as s,d as t,e as i,t as c,m as d,c as B,n as h,w as N,p as L,b as z,q as Q,h as X}from"./index-cb001ddc.js";import{_ as Y}from"./Tmine2-25d51798.js";import{C as V}from"./ContainerGallery-3a3f0025.js";import{_ as S,a as v,b as D}from"./ScrollAreaComponent.vue_vue_type_style_index_0_lang-6b4fb0ba.js";import"./Paginator.vue_vue_type_style_index_0_lang-798a2800.js";import"./Paginator.vue_vue_type_script_setup_true_lang-0fa3d1a6.js";import"./iconify-6f4308af.js";import"./index-e216fe0e.js";const E="/img/Tmine2-w.svg";const m=_=>(L("data-v-8e2e88cb"),_=_(),z(),_),Z={class:"subscription"},ee={key:0,class:"title"},te={class:"title-left-section"},se=m(()=>t("img",{src:E,alt:"tmine logo",class:"img-logo-tmine"},null,-1)),ae={key:0,class:"text-rate"},oe={class:"halving-container"},ne={class:"sidebar"},ie={key:0,id:"list-options"},ce={class:"lbl-left"},re=m(()=>t("span",null,[t("img",{src:Q,alt:"matic-logo-banance",class:"matic-logo-banance"}),i(" MATIC ")],-1)),le={class:"lbl-left"},pe=m(()=>t("span",null,[t("img",{src:E,alt:"tmine-logo-banance",class:"tmine-logo-banance"}),i(" TMINE ")],-1)),de=m(()=>t("label",{class:"lbl-left"},[t("span",{class:"add-to-metamask"},[t("img",{src:Y,class:"tmine-logo-banance"}),i(" Add TMine ")])],-1)),me=[de],_e={class:"in-col p-1 li-sort"},ue=m(()=>t("span",null,"Proximo Sorteo",-1)),ge={class:"p-1-lr"},be={__name:"DashboardView",setup(_,{expose:$}){const w=O.useToast(),T=r("syncTmineTotalSupply"),y=r("addTmineToMetamask");r("executeSelectWinner"),r("resetTimeEventDaily"),r("selectWinnerSorteo");const A=r("addMeToSorteo"),F=new X,e=R(),u=b(1),k=b(null),W=b(10),j=()=>{var o=1,a=confetti.shapeFromText({text:"💎",scalar:o});confetti({particleCount:100,spread:180,shapes:[a]})},x=async()=>{var o,a,g,P,M;try{const n=await A();w.open({message:"Registro procesado satisfactoriamente.",type:"success",position:"top-right"})}catch(n){console.log({e:n}),n!=null&&n.reason?w.open({message:n.reason,type:"error",position:"top-right"}):(g=(a=(o=n==null?void 0:n.info)==null?void 0:o.error)==null?void 0:a.data)!=null&&g.message&&((M=(P=n==null?void 0:n.info)==null?void 0:P.error)==null?void 0:M.code)==-32603&&w.open({message:"Gas insuficiente",type:"error",position:"top-right"})}},p=()=>{if(e.web3.nftTokensIds.length==0)return{elementosPagina:[],totalPaginas:1,paginaActual:1};const o=JSON.parse(JSON.stringify(e.web3.nftTokensIds)),a=F.arrayPaginator(o,W.value,u.value);return k.value=a.totalPaginas,console.log({dataFormat:a}),a},G=()=>{u.value<k.value&&(u.value++,C.value=p()),console.log("nextPage",u.value)},C=b(p()),I=()=>{var o;return(o=e==null?void 0:e.web3)!=null&&o.participantsInSorteo&&e.web3.participantsInSorteo.length==0?[]:e.web3.participantsInSorteo?e.web3.participantsInSorteo.flatMap(a=>a.substring(0,7)+"    ......    "+a.slice(-7)):[]};U(()=>e.web3.nftTokensIds,o=>{o&&(p(),T())});const H=[];return q(()=>{T(),p()}),K(()=>{T(),p()}),$({data:H,mainStore:e,currentPage:C,nextPage:G,ContainerGallery:V,addTmineToMetamask:y,shooterConfetti:j,CountdownComponent:S,ButtomComponent:v,registerInSorteo:x,ScrollAreaComponent:D,formatWallets:I}),(o,a)=>(l(),f("main",Z,[s(e).connected&&s(e).web3?(l(),f("h1",ee,[t("span",te,[i(" Tmine "),se,i(" Existencia Total: "+c(s(e).web3.tmineTotalSupply),1)]),s(e).web3.rewardTmineBase?(l(),f("span",ae,"Rate: "+c(s(e).web3.rewardTmineBase),1)):d("",!0),t("div",oe,[i(" Halving: "),s(e).web3.halving?(l(),B(S,{key:0,dateTarget:s(e).web3.halving},null,8,["dateTarget"])):d("",!0)]),i(" Topacio Nft's assets "+c(s(e).web3.nftBalance)+" 💎 / Holders: "+c(s(e).web3.holdersCount),1)])):d("",!0),t("section",ne,[s(e).connected?(l(),f("ul",ie,[t("li",null,[t("label",ce,[i(c(s(e).web3.balanceFormat)+" ",1),re])]),t("li",null,[t("label",le,[i(c(s(e).web3.tmineBalance)+" ",1),pe])]),t("li",{onClick:a[0]||(a[0]=(...g)=>s(y)&&s(y)(...g))},me),t("li",_e,[ue,h(S,{dateTarget:s(e).web3.dateNextSorteo},null,8,["dateTarget"]),h(v,{class:"bnt1",onClick:x},{default:N(()=>[i("Participar")]),_:1}),h(v,{class:"btn3 p-1 no-cursor"},{default:N(()=>[i("Participantes en dia: "+c(s(e).web3.participantsInSorteo.length),1)]),_:1})]),t("li",ge,[h(D,{title:"Participando para sorteo",items:I(),showKey:!0},null,8,["items"])])])):d("",!0)]),s(e).connected?(l(),B(V,{key:1})):d("",!0)]))}},xe=J(be,[["__scopeId","data-v-8e2e88cb"]]);export{xe as default};
