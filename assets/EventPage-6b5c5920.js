import{_ as G,j as _,r as d,u as U,A as j,f as J,o as H,N as de,a as h,g as $,d as l,k as P,e as T,t as I,m as D,w as R,c as K,l as W,y as oe,B as pe,p as le,b as ie,E as _e,F as Z,C as ge,h as re,i as fe,n as ce}from"./index-19f18bb4.js";import{e as ee,_ as ve,a as me}from"./Paginator.vue_vue_type_style_index_0_lang-f1f6da14.js";import{_ as te,a as V,b as ae}from"./ScrollAreaComponent.vue_vue_type_style_index_0_lang-1dd6e8bb.js";const X=b=>(le("data-v-30c72d41"),b=b(),ie(),b),we={class:"box-card"},he={class:"box-content"},be={class:"header-card p-start"},ye=["href"],Se=X(()=>l("img",{class:"img-link-polygon",src:ve,alt:"logo matic"},null,-1)),Te=X(()=>l("i",{class:"fa-solid fa-circle-info icon-info"},null,-1)),Ie={class:"content prop"},xe={class:"content prop"},ke=X(()=>l("div",{class:"box-img"},null,-1)),Le={class:"content info"},Pe={__name:"nftItemEvent",props:["nftId","grid","target","k","w","h"],setup(b,{expose:z}){const v=b,y=_("getDataNFT"),F=_("getLinkNftScan"),x=_("syncBalance"),S=_("syncTmineBalance"),C=_("claimReward"),o=_("transferNFT"),N=_("refreshTokens"),s=d(v.nftId),p=d(v.w),k=d(v.k),M=d(!1),n=d(null),m=d(null),w=d(!1),i=U(),A=e=>{const a=parseInt(String(e)+"999");return new Date(a).toLocaleDateString()+" "+new Date(a).toLocaleTimeString()},g=e=>e.substring(0,7)+"    ......    "+e.slice(-7),r=()=>{w.value=!0},c=async({w:e,id:a})=>{console.log("toTransferNFT",{w:e,id:a});const t=await o(e,a);await x(),await S(),await N(),console.log({modalSend:m,resp:t}),!(t!=null&&t.blockNumber)||t===null?m.value.loading=!1:w.value=!1},E=async()=>{M.value=!0;const e=parseInt(s.value),a=await y(e);a.id&&a.id===s.value&&(n.value=a,i.web3.nftLoad[e]=a),await x(),await S(),setTimeout(()=>{M.value=!1},2e3)},L=j(()=>{const e=parseInt(s.value);return i.web3.nftLoad[e]!==void 0}),B=async()=>{const e=parseInt(s.value);if(await C(e)===!0){await x(),await S(),console.log("* toClaim ok");const t=await y(e);t.id&&t.id===s.value&&e&&(n.value=t,i.web3.nftLoad[e]=t)}},u=e=>{const t=Y().filter(f=>f.prop==e);return t[0]&&t[0].value?t[0].value:null},Y=()=>{var e,a;return(a=(e=n==null?void 0:n.value)==null?void 0:e.metadata)!=null&&a.attributes?n.value.metadata.attributes.flatMap(t=>({prop:t!=null&&t.trait_type?t==null?void 0:t.trait_type:null,value:t.value})):[]},ue=j(()=>{var t,f;const e=parseInt(s.value),a=v.grid&&v.grid&&v.target.length>7?"cover":"150% 100%";return i.web3.nftLoad[e]!==void 0&&((f=(t=n==null?void 0:n.value)==null?void 0:t.metadata)!=null&&f.image)?`
	--crt:#fff;
    background-image: url(${n.value.metadata.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: ${a};`:""}),q=e=>{const a=e.target,t=e.pageX-a.offsetLeft,f=e.pageY-a.offsetTop;a.style.setProperty("--x",t+"px"),a.style.setProperty("--y",f+"px")};return J(L,async e=>{if(e&&(console.log(e,"*existInLoad",i.web3.nftLoad[s.value]!==void 0,s.value,n.value),e&&!n.value)){const a=parseInt(s.value),t=await y(a);t.id&&t.id===s.value&&(n.value=t),console.log({resp:t})}}),J(()=>v.nftId,async function(e){var a;if(s.value=e,n.value=null,console.log("w",e,L.value,i.web3.nftLoad[e]),!L.value&&!i.web3.nftLoad[e]){const t=parseInt(s.value);console.log("*startSearch");const f=await y(t);f.id&&f.id===s.value&&(n.value=f,i.web3.nftLoad[t]=f),console.log("* meta",n.value,{data:f})}i.web3.nftLoad[e],((a=i.web3.nftLoad[e])==null?void 0:a.id)===e&&(n.value=i.web3.nftLoad[e])}),H(async()=>{const e=parseInt(s.value),a=await y(e);a.id&&a.id===s.value&&i.web3.nftLoad[e]&&(n.value=a,i.web3.nftLoad[e]=a),a&&!i.web3.nftLoad[s.value]&&(n.value=a,i.web3.nftLoad[s.value]=a)}),z({nftId:s,existInLoad:L,mainStore:i,getBgNft:ue,getLinkNftScan:F,moseMoveInCard:q,toClaim:B,loadRedresh:M,toRefresh:E,showModalSedNft:w,toSend:r,toTransferNFT:c,Popper:ee,key:k,formatDateTime:A,winnerWallet:p,formatWallet:g,getNftAtributes:Y,getProp:u}),(e,a)=>{var f,Q;const t=de("spam");return(f=n.value)!=null&&f.metadata?(h(),$("div",{key:0,class:oe({"nft-item-event":!0}),onMousemove:q,style:pe(`background-image: url(${n.value.metadata.image})`)},[l("div",we,[l("div",he,[l("div",be,[l("a",{href:P(F)(s.value),target:"_blank"},[T("# "+I(s.value)+" ",1),D(P(ee),{content:"Examinar en Polygonscan",arrow:!0,hover:!0},{default:R(()=>[Se]),_:1})],8,ye),Te,D(t,{class:"fecha-sorteo"},{default:R(()=>[T(I(A(k.value)),1)]),_:1})]),(Q=n.value)!=null&&Q.metadata?(h(),K(t,{key:0,class:"legend"},{default:R(()=>[l("p",null,"Winner: "+I(g(p.value)),1),l("div",Ie,"Type: "+I(u("Type"))+" Luck: "+I(u("Luck")),1),l("div",xe,"Staking: "+I(u("Staking")),1)]),_:1})):W("",!0)]),ke]),l("p",Le,I(n.value.metadata.name),1)],36)):W("",!0)}}},ne=G(Pe,[["__scopeId","data-v-30c72d41"]]);const Ce={key:1,class:"paginator"},Ne={key:2,class:"paginator"},$e={__name:"ContainerEventList",setup(b,{expose:z}){const v=_("searchLastSorteo"),y=_("searchWinnerInSorteo"),F=new re,x=U(),S=d(1);d(null);const C=d(null),o=d(!1),N=d(null),s=d(9),p=_e({winners:[],loading:!0}),k=g=>{S.value=g,m()},M=()=>{o.value=!o.value,o.value?s.value=10:s.value=5,w.value=m()},n=j(()=>p.winners&&p.winners.length==0?[]:p.winners.flatMap(g=>g.id)),m=()=>{const g=JSON.parse(JSON.stringify(x.web3.nftTokensIds)),r=F.arrayPaginator(g,s.value,S.value);return N.value=r.totalPaginas,r},w=d(m()),i=()=>{S.value<N.value&&(S.value++,w.value=m()),console.log("nextPage",S.value)};J(()=>x.web3.nftTokensIds,g=>{g&&(w.value=m())});const A=[];return H(async()=>{C.value=await v();let g=await y(C.value);for(var r=C.value;p.winners.length<s.value;r--){const c=await y(r);c.hash&&c.hash!=""&&p.winners.push(c)}console.log({last_sorteo:C,winnerLast:g,winnersTarget:p}),p.loading=!1}),z({data:A,mainStore:x,currentPage:w,nextPage:i,nftItemEvent:ne,getCurrentTarget:n,multiGrid14:o,changeToMultigrid:M,Paginator:me,updatePage:k,amountPerPage:s,last_sorteo:C}),(g,r)=>{var c,E,L;return h(),$(Z,null,[p.loading?W("",!0):(h(),$("section",{key:0,class:oe({content:!0,"multi-grid-14":o.value,lessMinimal:n.value&&((c=n.value)==null?void 0:c.length)&&((E=n.value)==null?void 0:E.length)<=4,"minimal-size":o.value&&((L=n.value)==null?void 0:L.length)<=3})},[(h(!0),$(Z,null,ge(n.value,(B,u)=>(h(),K(ne,{grid:o.value,target:n.value,"nft-id":B,h:p.winners[u].hash,k:p.winners[u].timestamp,w:p.winners[u].wallet},null,8,["grid","target","nft-id","h","k","w"]))),256))],2)),w.value&&w.value.paginaActual?(h(),$("section",Ce)):(h(),$("section",Ne))],64)}}},se=G($e,[["__scopeId","data-v-25b01bb9"]]);const O=b=>(le("data-v-a8bb3882"),b=b(),ie(),b),Me={class:"event"},Ae={key:0,class:"title"},Ee=O(()=>l("span",{class:"title-left-section"}," Evento de Sorteo Diario ",-1)),Fe={class:"sidebar"},Be={key:0,id:"list-options"},De={class:"lbl-left"},We=O(()=>l("img",{src:ce,alt:"matic-logo-banance",class:"matic-logo-banance"},null,-1)),ze={class:"lbl-left"},Re=O(()=>l("img",{src:ce,alt:"matic-logo-banance",class:"matic-logo-banance"},null,-1)),Je={class:"in-col p-1 li-sort"},Oe=O(()=>l("span",null,"Proximo Sorteo",-1)),Ve={class:"p-1-lr"},je={__name:"EventPage",setup(b,{expose:z}){const v=fe.useToast(),y=_("syncTmineTotalSupply"),F=_("addTmineToMetamask");_("executeSelectWinner"),_("resetTimeEventDaily"),_("selectWinnerSorteo");const x=_("getCostoInSorteo"),S=_("addMeToSorteo"),C=new re,o=U(),N=d(1),s=d(null),p=d(10),k=d(null),M=()=>{var r=1,c=confetti.shapeFromText({text:"💎",scalar:r});confetti({particleCount:100,spread:180,shapes:[c]})},n=async()=>{var r,c,E,L,B;try{const u=await S();v.open({message:"Registro procesado satisfactoriamente.",type:"success",position:"top-right"})}catch(u){console.log({e:u}),u!=null&&u.reason?v.open({message:u.reason,type:"error",position:"top-right"}):(E=(c=(r=u==null?void 0:u.info)==null?void 0:r.error)==null?void 0:c.data)!=null&&E.message&&((B=(L=u==null?void 0:u.info)==null?void 0:L.error)==null?void 0:B.code)==-32603&&v.open({message:"Gas insuficiente",type:"error",position:"top-right"})}},m=()=>{if(o.web3.nftTokensIds.length==0)return{elementosPagina:[],totalPaginas:1,paginaActual:1};const r=JSON.parse(JSON.stringify(o.web3.nftTokensIds)),c=C.arrayPaginator(r,p.value,N.value);return s.value=c.totalPaginas,console.log({dataFormat:c}),c},w=()=>{N.value<s.value&&(N.value++,i.value=m()),console.log("nextPage",N.value)},i=d(m()),A=()=>{var r;return(r=o==null?void 0:o.web3)!=null&&r.participantsInSorteo&&o.web3.participantsInSorteo.length==0?[]:o.web3.participantsInSorteo?o.web3.participantsInSorteo.flatMap(c=>c.substring(0,7)+"    ......    "+c.slice(-7)):[]};J(()=>o.web3.nftTokensIds,async r=>{r&&(m(),y(),k.value=await x())});const g=[];return H(async()=>{k.value=await x(),console.log({costoSorteo:k}),y()}),z({data:g,mainStore:o,currentPage:i,nextPage:w,ContainerEventList:se,addTmineToMetamask:F,shooterConfetti:M,CountdownComponent:te,ButtomComponent:V,registerInSorteo:n,ScrollAreaComponent:ae,formatWallets:A,costoSorteo:k}),(r,c)=>(h(),$("main",Me,[P(o).connected&&P(o).web3?(h(),$("h1",Ae,[Ee,T(" Topacio Nft's Listado de Fargmentos Liberados 💎 / Holders actuales: "+I(P(o).web3.holdersCount),1)])):W("",!0),l("section",Fe,[P(o).connected?(h(),$("ul",Be,[l("li",null,[l("label",De,[T(" Mi Balance "),l("span",null,[T(I(P(o).web3.balanceFormat)+" ",1),We,T(" MATIC ")])])]),l("li",null,[l("label",ze,[T(" PATICIPACIÓN "),l("span",null,[T(I(k.value)+" ",1),Re,T(" MATIC ")])])]),l("li",Je,[Oe,D(te,{dateTarget:P(o).web3.dateNextSorteo},null,8,["dateTarget"]),D(V,{class:"bnt1",onClick:n},{default:R(()=>[T("Participar")]),_:1}),D(V,{class:"btn3 p-1 no-cursor"},{default:R(()=>[T("Participantes en dia: "+I(P(o).web3.participantsInSorteo.length),1)]),_:1})]),l("li",Ve,[D(ae,{title:"Participando para sorteo",items:A(),showKey:!0},null,8,["items"])])])):W("",!0)]),P(o).connected?(h(),K(se,{key:1})):W("",!0)]))}},Ke=G(je,[["__scopeId","data-v-a8bb3882"]]);export{Ke as default};
