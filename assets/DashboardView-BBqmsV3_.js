import{_ as A,W as E,j as W,u as D,r as b,h as F,o as H,k as U,b as m,l as a,d as s,e as i,t as n,f as p,c as y,m as J,n as w,w as k,p as h,a as l,i as L}from"./index-7AMwQnQK.js";import{_ as O}from"./Tmine2-DhPnLw4a.js";import{C as j}from"./ContainerGallery-URAvsQzt.js";import{_ as S,a as $,b as q}from"./ScrollAreaComponent.vue_vue_type_style_index_0_lang-7SoKA9rE.js";import"./Paginator.vue_vue_type_style_index_0_lang-DyQzsCJV.js";import"./Paginator.vue_vue_type_script_setup_true_lang-CNkfVwIz.js";import"./iconify-DHCfBmeV.js";import"./index-BFQ5JPbk.js";const P="/img/Tmine2-w.svg",G="/img/MATICTMIME.svg",K={class:"subscription"},z={key:0,class:"title"},Q={class:"title-left-section"},X={key:0,class:"block-container"},Y={key:0,class:"text-rate"},Z={class:"halving-container"},ee={class:"sidebar"},te={key:0,id:"list-options"},se={class:"lbl-left"},ae={class:"lbl-left"},oe={class:"lbl-left"},ne={class:"add-to-metamask"},re={key:0,class:"in-col p-1 li-sort"},ie={class:"p-1-lr"},le={__name:"DashboardView",setup(ce){const _=h(),{proxy:c}=h(),I=new E,f=W.useToast(),v=new L,e=D(),M=b(1),N=b(null),B=b(10),C=async()=>{var o,t,d,g,T;try{const r=await _.proxy.$w3AddMeToSorteo();f.open({message:"Registro procesado satisfactoriamente.",type:"success",position:"top-right"})}catch(r){console.log({e:r}),r!=null&&r.reason?f.open({message:r.reason,type:"error",position:"top-right"}):(d=(t=(o=r==null?void 0:r.info)==null?void 0:o.error)==null?void 0:t.data)!=null&&d.message&&((T=(g=r==null?void 0:r.info)==null?void 0:g.error)==null?void 0:T.code)==-32603&&f.open({message:$t("general.titles.insufficient_gas"),type:"error",position:"top-right"})}},u=()=>{if(e.web3.nftTokensIds.length==0)return{elementosPagina:[],totalPaginas:1,paginaActual:1};const o=JSON.parse(JSON.stringify(e.web3.nftTokensIds)),t=v.arrayPaginator(o,B.value,M.value);return N.value=t.totalPaginas,console.log({dataFormat:t,data:o}),t};b(u());const x=()=>{var o;return(o=e==null?void 0:e.web3)!=null&&o.participantsInSorteo&&e.web3.participantsInSorteo.length==0?[]:e.web3.participantsInSorteo?e.web3.participantsInSorteo.flatMap(t=>t.substring(0,7)+"    ......    "+t.slice(-7)):[]};F(()=>e.web3.nftTokensIds,o=>{o&&(u(),c.$w3SyncTmineTotalSupply(),c.$w3SearchTmineRewardPerBlock(),c.$w3SearchHalving())});const R=()=>_.proxy.$w3AddTmineToMetamask(),V=()=>I.searchTmineRewardPerBlock();return H(async()=>{V(),u(),console.log("onMounted",e.connected&&e.web3,_.proxy.$w3SearchTmineRewardPerBlock)}),U(()=>{c.$w3SearchTmineRewardPerBlock(),c.$w3SearchHalving(),c.$w3SyncTmineTotalSupply(),u(),console.log("onUnmounted",{proxy:c})}),(o,t)=>{var d,g;return l(),m("main",K,[a(e).connected&&a(e).web3?(l(),m("h1",z,[s("span",Q,[t[0]||(t[0]=i(" Tmine ")),t[1]||(t[1]=s("img",{src:P,alt:"tmine logo",class:"img-logo-tmine"},null,-1)),i(" "+n(o.$t("general.titles.total_supply"))+": "+n(a(e).web3.tmineTotalSupply)+" ",1),(g=(d=a(e))==null?void 0:d.web3)!=null&&g.blockNumber?(l(),m("span",X,n(o.$t("general.titles.block"))+": "+n(a(e).web3.blockNumber),1)):p("",!0)]),a(e).web3.rewardTmineBase?(l(),m("span",Y,n(o.$t("general.titles.rate"))+": "+n(a(e).web3.rewardTmineBase),1)):p("",!0),s("div",Z,[i(n(o.$t("general.titles.halving"))+": ",1),a(e).web3.halving?(l(),y(S,{key:0,dateTarget:parseInt(a(e).web3.halving)},null,8,["dateTarget"])):p("",!0)]),i(" Topacio Nft's assets "+n(a(e).web3.nftBalance)+" 💎 / Holders: "+n(a(e).web3.holdersCount),1)])):p("",!0),s("section",ee,[a(e).connected?(l(),m("ul",te,[s("li",null,[s("label",se,[i(n(a(e).web3.balanceFormat)+" ",1),t[2]||(t[2]=s("span",null,[s("img",{src:J,alt:"matic-logo-banance",class:"matic-logo-banance"}),i(" MATIC ")],-1))])]),s("li",null,[s("label",ae,[i(n(a(e).web3.tmaineBalanceFormat)+" ",1),t[3]||(t[3]=s("span",null,[s("img",{src:P,alt:"tmine-logo-banance",class:"tmine-logo-banance"}),i(" TMINE ")],-1))])]),s("li",{onClick:R},[s("label",oe,[s("span",ne,[t[4]||(t[4]=s("img",{src:O,class:"tmine-logo-banance"},null,-1)),i(" "+n(o.$t("general.titles.add_tmine")),1)])])]),a(e).web3.dateNextSorteo&&a(e).web3.dateNextSorteo>999?(l(),m("li",re,[t[6]||(t[6]=s("span",null,"Proximo Sorteo",-1)),w(S,{dateTarget:a(e).web3.dateNextSorteo},null,8,["dateTarget"]),w($,{class:"bnt1",onClick:C},{default:k(()=>t[5]||(t[5]=[i("Participar")])),_:1}),w($,{class:"btn3 p-1 no-cursor"},{default:k(()=>[i("Participantes en dia: "+n(a(e).web3.participantsInSorteo.length),1)]),_:1})])):p("",!0),t[7]||(t[7]=s("li",{class:"container-pool"},[s("img",{src:G,alt:"Liquidity Pool",class:"img-pool"})],-1)),s("li",ie,[w(q,{title:"Participando para sorteo",items:x(),showKey:!0},null,8,["items"])])])):p("",!0)]),a(e).connected?(l(),y(j,{key:1})):p("",!0)])}}},fe=A(le,[["__scopeId","data-v-191ccdb0"]]);export{fe as default};
