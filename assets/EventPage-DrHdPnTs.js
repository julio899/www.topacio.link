import{_ as j,co as A,r as p,u as q,p as V,h as J,o as K,a as y,b as L,d as i,q as T,e as x,t as g,k as z,w as G,f as F,s as ne,n as re,cf as ie,F as Y,g as ce,c as U,v as se,i as oe,m as ue,x as R,cp as H}from"./index-D4y_j-vj.js";import{_ as de}from"./polygon-matic-logo-DiA3gt9s.js";import{e as Q}from"./Paginator.vue_vue_type_style_index_0_lang-BDrzdMcx.js";import{_ as ge}from"./Paginator.vue_vue_type_script_setup_true_lang-BA02Wln_.js";import{_ as Z,a as ee}from"./CountdownComponent-CDhN4EQE.js";import"./iconify-B9-tJj7Z.js";import"./index-DTG86QYK.js";const pe={class:"box-card"},fe={class:"box-content"},ve={class:"header-card p-start"},me=["href"],we={class:"fecha-sorteo"},_e={key:0,class:"legend"},be={class:"content prop"},ye={class:"content prop"},he={class:"content info"},Se={__name:"nftItemEvent",props:["nftId","grid","target","k","w","h"],setup(O,{expose:D}){const w=A("getDataNFT"),B=A("getLinkNftScan"),l=A("syncBalance"),f=A("syncTmineBalance"),S=A("claimReward"),$=A("transferNFT"),k=A("refreshTokens"),u=O,s=p(u.nftId),N=p(u.w),C=p(u.k),_=p(!1),o=p(null),b=p(null),M=p(!1),a=q(),r=e=>{const t=parseInt(String(e)+"999");return new Date(t).toLocaleDateString()+" "+new Date(t).toLocaleTimeString()},d=e=>e.substring(0,7)+"    ......    "+e.slice(-7),h=()=>{M.value=!0},P=async({w:e,id:t})=>{console.log("toTransferNFT",{w:e,id:t});const n=await $(e,t);await l(),await f(),await k(),await c(),console.log({modalSend:b,resp:n}),!(n!=null&&n.blockNumber)||n===null?b.value.loading=!1:M.value=!1},c=async()=>{_.value=!0;const e=parseInt(s.value),t=await w(e);t.id&&t.id===s.value&&(o.value=t,a.web3.nftLoad[e]=t),await l(),await f(),setTimeout(()=>{_.value=!1},2e3)},I=V(()=>{const e=parseInt(s.value);return a.web3.nftLoad[e]!==void 0}),E=async()=>{const e=parseInt(s.value);if(await S(e)===!0){await l(),await f(),console.log("* toClaim ok");const n=await w(e);n.id&&n.id===s.value&&e&&(o.value=n,a.web3.nftLoad[e]=n)}},m=e=>{const n=W().filter(v=>v.prop==e);return n[0]&&n[0].value?n[0].value:null},W=()=>{var e,t;return(t=(e=o==null?void 0:o.value)==null?void 0:e.metadata)!=null&&t.attributes?o.value.metadata.attributes.flatMap(n=>({prop:n!=null&&n.trait_type?n==null?void 0:n.trait_type:null,value:n.value})):[]},le=V(()=>{var n,v;const e=parseInt(s.value),t=u.grid&&u.grid&&u.target.length>7?"cover":"150% 100%";return a.web3.nftLoad[e]!==void 0&&((v=(n=o==null?void 0:o.value)==null?void 0:n.metadata)!=null&&v.image)?`
	--crt:#fff;
    background-image: url(${o.value.metadata.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: ${t};`:""}),X=e=>{const t=e.target,n=e.pageX-t.offsetLeft,v=e.pageY-t.offsetTop;t.style.setProperty("--x",n+"px"),t.style.setProperty("--y",v+"px")};return J(I,async e=>{if(e&&(console.log(e,"*existInLoad",a.web3.nftLoad[s.value]!==void 0,s.value,o.value),e&&!o.value)){const t=parseInt(s.value),n=await w(t);n.id&&n.id===s.value&&(o.value=n),console.log({resp:n})}}),J(()=>u.nftId,async function(e){var t;if(s.value=e,o.value=null,console.log("w",e,I.value,a.web3.nftLoad[e]),!I.value&&!a.web3.nftLoad[e]){const n=parseInt(s.value);console.log("*startSearch");const v=await w(n);v.id&&v.id===s.value&&(o.value=v,a.web3.nftLoad[n]=v),console.log("* meta",o.value,{data:v})}a.web3.nftLoad[e],((t=a.web3.nftLoad[e])==null?void 0:t.id)===e&&(o.value=a.web3.nftLoad[e])}),K(async()=>{const e=parseInt(s.value),t=await w(e);t.id&&t.id===s.value&&a.web3.nftLoad[e]&&(o.value=t,a.web3.nftLoad[e]=t),t&&!a.web3.nftLoad[s.value]&&(o.value=t,a.web3.nftLoad[s.value]=t)}),D({nftId:s,existInLoad:I,mainStore:a,getBgNft:le,getLinkNftScan:B,moseMoveInCard:X,toClaim:E,loadRedresh:_,toRefresh:c,showModalSedNft:M,toSend:h,toTransferNFT:P,Popper:Q,key:C,formatDateTime:r,winnerWallet:N,formatWallet:d,getNftAtributes:W,getProp:m}),(e,t)=>{var n,v;return(n=o.value)!=null&&n.metadata?(y(),L("div",{key:0,class:ne({"nft-item-event":!0}),onMousemove:X,style:re(`background-image: url(${o.value.metadata.image})`)},[i("div",pe,[i("div",fe,[i("div",ve,[i("a",{href:T(B)(s.value),target:"_blank"},[x("# "+g(s.value)+" ",1),z(T(Q),{content:"Examinar en Polygonscan",arrow:!0,hover:!0},{default:G(()=>t[0]||(t[0]=[i("img",{class:"img-link-polygon",src:de,alt:"logo matic"},null,-1)])),_:1})],8,me),t[1]||(t[1]=i("i",{class:"fa-solid fa-circle-info icon-info"},null,-1)),i("span",we,g(r(C.value)),1)]),(v=o.value)!=null&&v.metadata?(y(),L("span",_e,[i("p",null,"Winner: "+g(d(N.value)),1),i("div",be,"Type: "+g(m("Type"))+" Luck: "+g(m("Luck")),1),i("div",ye,"Staking: "+g(m("Staking")),1)])):F("",!0)]),t[2]||(t[2]=i("div",{class:"box-img"},null,-1))]),i("p",he,g(o.value.metadata.name),1)],36)):F("",!0)}}},te=j(Se,[["__scopeId","data-v-f24a0516"]]),$e={key:1,class:"paginator"},Ie={key:2,class:"paginator"},Te={__name:"ContainerEventList",setup(O,{expose:D}){const{proxy:w}=se(),B=new oe,l=q(),f=p(1);p(null);const S=p(null),$=p(!1),k=p(null),u=p(9),s=ie({winners:[],loading:!0}),N=d=>{f.value=d,o(),console.log("updatePage",d),M(d)},C=()=>{$.value=!$.value,$.value?u.value=10:u.value=5,b.value=o()},_=V(()=>s.winners&&s.winners.length==0?[]:s.winners.flatMap(d=>d.id)),o=()=>{const d=JSON.parse(JSON.stringify(l.web3.nftTokensIds)),h=B.arrayPaginator(d,u.value,f.value);return k.value=h.totalPaginas,h},b=p(o()),M=async d=>{if(f.value=parseInt(d),b.value=o(),console.log("toPage",f.value),f.value>1){const P=f.value*u.value,c=S.value-P,I=Array.from({length:c}).map((m,W)=>W).splice(parseInt(u.value)*-1);console.log({sorteosPrevios:I});let E=[];for(var h=0;h<I.length;h++){const m=await w.$w3SearchWinnerInSorteo(I[h]);m.hash&&m.hash!=""&&E.push(m)}s.winners=E}},a=()=>{f.value<k.value&&(f.value++,b.value=o()),console.log("nextPage",f.value)};J(()=>l.web3.nftTokensIds,d=>{d&&(b.value=o())});const r=[];return K(async()=>{S.value=await w.$w3SearchLastSorteo();let d=await w.$w3SearchWinnerInSorteo(S.value);console.log({winnerLast:d,last_sorteo:S.value}),console.log({last_sorteo:S,winnerLast:d,winnersTarget:s}),s.loading=!1}),D({data:r,mainStore:l,currentPage:b,nextPage:a,nftItemEvent:te,getCurrentTarget:_,multiGrid14:$,changeToMultigrid:C,Paginator:ge,updatePage:N,amountPerPage:u,last_sorteo:S}),(d,h)=>{var P,c,I;return y(),L(Y,null,[s.loading?F("",!0):(y(),L("section",{key:0,class:ne({content:!0,"multi-grid-14":$.value,lessMinimal:_.value&&((P=_.value)==null?void 0:P.length)&&((c=_.value)==null?void 0:c.length)<=4,"minimal-size":$.value&&((I=_.value)==null?void 0:I.length)<=3})},[(y(!0),L(Y,null,ce(_.value,(E,m)=>(y(),U(te,{grid:$.value,target:_.value,"nft-id":E,h:s.winners[m].hash,k:s.winners[m].timestamp,w:s.winners[m].wallet,key:m},null,8,["grid","target","nft-id","h","k","w"]))),128))],2)),b.value&&b.value.paginaActual?(y(),L("section",$e)):(y(),L("section",Ie))],64)}}},ae=j(Te,[["__scopeId","data-v-091c2b59"]]),ke={class:"event"},xe={key:0,class:"title"},Le={class:"title-left-section"},Pe={class:"sidebar"},Ce={key:0,id:"list-options"},Ne={class:"lbl-left"},Me={class:"lbl-left"},Ae={class:"in-col p-1 li-sort"},Fe={class:"p-1-lr"},Be={__name:"EventPage",setup(O,{expose:D}){const w=ue.useToast(),B=new oe,l=q(),f=p(1),S=p(null),$=p(10),k=p(null),{proxy:u}=se(),s=()=>{var a=1,r=confetti.shapeFromText({text:"💎",scalar:a});confetti({particleCount:100,spread:180,shapes:[r]})},N=async()=>{var a,r,d,h,P;try{const c=await u.$w3AddMeToSorteo();console.log({r:c}),c&&w.open({message:u.$t("general.titles.registration_processed_successfully"),type:"success",position:"top-right"})}catch(c){console.log({e:c}),c!=null&&c.reason?w.open({message:c.reason,type:"error",position:"top-right"}):(d=(r=(a=c==null?void 0:c.info)==null?void 0:a.error)==null?void 0:r.data)!=null&&d.message&&((P=(h=c==null?void 0:c.info)==null?void 0:h.error)==null?void 0:P.code)==-32603&&w.open({message:$t("general.titles.insufficient_gas"),type:"error",position:"top-right"})}},C=()=>{if(l.web3.nftTokensIds.length==0)return{elementosPagina:[],totalPaginas:1,paginaActual:1};const a=JSON.parse(JSON.stringify(l.web3.nftTokensIds)),r=B.arrayPaginator(a,$.value,f.value);return S.value=r.totalPaginas,console.log({dataFormat:r}),r},_=()=>{f.value<S.value&&(f.value++,o.value=C()),console.log("nextPage",f.value)},o=p(C()),b=()=>{var a;return(a=l==null?void 0:l.web3)!=null&&a.participantsInSorteo&&l.web3.participantsInSorteo.length==0?[]:l.web3.participantsInSorteo?l.web3.participantsInSorteo.flatMap(r=>r.substring(0,7)+"    ......    "+r.slice(-7)):[]};J(()=>l.web3.nftTokensIds,async a=>{a&&(C(),u.$w3SyncTmineTotalSupply(),k.value=await u.$w3GetCostoInSorteo())});const M=[];return K(async()=>{k.value=await u.$w3GetCostoInSorteo(),console.log({costoSorteo:k.value}),u.$w3SyncTmineTotalSupply()}),D({data:M,mainStore:l,currentPage:o,nextPage:_,ContainerEventList:ae,shooterConfetti:s,CountdownComponent:Z,ButtomComponent:R,registerInSorteo:N,ScrollAreaComponent:ee,formatWallets:b,costoSorteo:k}),(a,r)=>(y(),L("main",ke,[T(l).connected&&T(l).web3?(y(),L("h1",xe,[i("span",Le,g(a.$t("general.titles.daily_giveaway_event")),1),x(" Topacio Nft's "+g(a.$t("general.titles.list_of_released_fragments"))+" 💎 / "+g(a.$t("general.titles.current_holders"))+": "+g(T(l).web3.holdersCount),1)])):F("",!0),i("section",Pe,[T(l).connected?(y(),L("ul",Ce,[i("li",null,[i("label",Ne,[x(g(a.$t("general.titles.my_balance"))+" ",1),i("span",null,[x(g(T(l).web3.balanceFormat)+" ",1),r[0]||(r[0]=i("img",{src:H,alt:"matic-logo-banance",class:"matic-logo-banance"},null,-1)),r[1]||(r[1]=x(" MATIC "))])])]),i("li",null,[i("label",Me,[x(g(a.$t("general.titles.participation"))+" ",1),i("span",null,[x(g(k.value)+" ",1),r[2]||(r[2]=i("img",{src:H,alt:"matic-logo-banance",class:"matic-logo-banance"},null,-1)),r[3]||(r[3]=x(" MATIC "))])])]),i("li",Ae,[i("span",null,g(a.$t("general.titles.next_draw")),1),T(l).web3.dateNextSorteo>999?(y(),U(Z,{key:0,dateTarget:T(l).web3.dateNextSorteo},null,8,["dateTarget"])):F("",!0),z(R,{class:"bnt1",onClick:N},{default:G(()=>[x(g(a.$t("general.titles.participate")),1)]),_:1}),z(R,{class:"btn3 p-1 no-cursor"},{default:G(()=>[x(g(a.$t("general.titles.participants_of_the_day"))+": "+g(T(l).web3.participantsInSorteo.length),1)]),_:1})]),i("li",Fe,[z(ee,{title:a.$t("general.titles.participating_in_the_draw"),items:b(),showKey:!0},null,8,["title","items"])])])):F("",!0)]),T(l).connected?(y(),U(ae,{key:1})):F("",!0)]))}},Ve=j(Be,[["__scopeId","data-v-062c3d96"]]);export{Ve as default};
