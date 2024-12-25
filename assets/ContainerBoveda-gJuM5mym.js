import{e as I}from"./Paginator.vue_vue_type_style_index_0_lang-bfr-Xhgg.js";import{_ as G,r as w,u as H,k as L,h as $,o as X,a as v,b as m,d as u,l as i,e as T,t as b,m as z,w as F,F as Y,g as q,p as R,f as x,n as D,cm as r,c as j}from"./index-DXoDjGXY.js";import"./iconify-OLIg8Fjc.js";import{_ as J}from"./polygon-matic-logo-DiA3gt9s.js";import{_ as K}from"./Tmine2-DhPnLw4a.js";const O={class:"header-card"},Q=["href"],U={key:0,class:"detaills-gem"},Z={key:1,class:"title-gem-boveda"},ee={key:0,class:"footer-card"},ae={class:"nft-number nft-reward-tmine"},te={key:0,class:"snippet","data-title":"dot-flashing"},ne={__name:"nftItemBoveda",props:["nftId","grid","target","h","key"],setup(M,{expose:B}){const c=r("getDataNFT"),y=r("getLinkNftScan"),A=r("toVault"),_=r("claimVault");r("syncBalance"),r("syncTmineBalance"),r("claimReward"),r("refreshTokens");const N=r("getNFTVault");r("tmineAddAllowance");const h=M,n=w(h.nftId),d=w(!1),e=w(null);w(null);const f=w(null),o=H(),g=L(()=>{const a=parseInt(n.value);return o.web3.nftLoad[a]!==void 0}),V=L(()=>e.value.metadata&&e.value.metadata.attributes?e.value.metadata.attributes.flatMap(a=>({type:a.trait_type,value:a.value})):[]),C=L(()=>e.value.metadata&&e.value.metadata.name&&e.value.metadata.name.length>25?e.value.metadata.name.replace("Fragment ",""):e.value.metadata.name),S=L(()=>{var t,l,s,k;const a=parseInt(n.value);return(l=(t=e==null?void 0:e.value)==null?void 0:t.metadata)!=null&&l.image&&console.log("* img",e.value.metadata.image),o.web3.nftLoad[a]!==void 0&&((k=(s=e==null?void 0:e.value)==null?void 0:s.metadata)!=null&&k.image)?`
	--crt:#fff;
    background-image: url(${e.value.metadata.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    `:""}),E=a=>{const t=a.target,l=a.pageX-t.offsetLeft,s=a.pageY-t.offsetTop;t.style.setProperty("--x",l+"px"),t.style.setProperty("--y",s+"px")};return $(g,async a=>{if(a&&(console.log(a,"*existInLoad",o.web3.nftLoad[n.value]!==void 0,n.value,e.value),a&&!e.value)){const t=parseInt(n.value),l=await c(t);l.id&&l.id===n.value&&(e.value=l),console.log({resp:l})}}),$(()=>h.nftId,async function(a){var t;if(n.value=a,e.value=null,console.log("w",a,g.value,o.web3.nftLoad[a]),!g.value&&!o.web3.nftLoad[a]){const l=parseInt(n.value);console.log("*startSearch");const s=await c(l);s.id&&s.id===n.value&&(e.value=s,o.web3.nftLoad[l]=s),console.log("* meta",e.value,{data:s})}o.web3.nftLoad[a],((t=o.web3.nftLoad[a])==null?void 0:t.id)===a&&(e.value=o.web3.nftLoad[a])}),X(async()=>{const a=parseInt(n.value),t=await c(a);f.value=await N(a),t.id&&t.id===n.value&&o.web3.nftLoad[a]&&(e.value=t,o.web3.nftLoad[a]=t),t&&!o.web3.nftLoad[n.value]&&(e.value=t,o.web3.nftLoad[n.value]=t)}),B({nftId:n,existInLoad:g,mainStore:o,getBgNft:S,getLinkNftScan:y,moseMoveInCard:E,loadRedresh:d,Popper:I,toVault:A,dataItem:f,claimVault:_,getProperties:V,titleFormat:C}),(a,t)=>{var l,s,k,P;return v(),m("div",{class:R({"nft-item-boveda":!0,"loader-bg":!g.value}),style:D(`height: ${h.h}px;`),onMousemove:E},[u("div",{class:"content-card",style:D(S.value)},[u("div",O,[u("a",{href:i(y)(n.value),target:"_blank"},[T("# "+b(n.value)+" ",1),z(i(I),{content:"Examinar en Polygonscan",arrow:!0,hover:!0},{default:F(()=>t[1]||(t[1]=[u("img",{class:"img-link-polygon",src:J,alt:"logo matic"},null,-1)])),_:1})],8,Q)]),(s=(l=e.value)==null?void 0:l.metadata)!=null&&s.attributes?(v(),m("div",U,[u("ul",null,[(v(!0),m(Y,null,q(V.value,p=>(v(),m("li",{class:R({colorEpic:p.type=="Staking"&&p.value>=4,colorEpicRarity:p.value=="epic"})},b(p.type)+" : "+b(p.value),3))),256))])])):x("",!0),(P=(k=e.value)==null?void 0:k.metadata)!=null&&P.name?(v(),m("div",Z,b(C.value),1)):x("",!0),z(i(I),{content:"Exatraer Fragmento",arrow:!1,hover:!0,zIndex:"10000"},{default:F(()=>{var p;return[(p=f.value)!=null&&p.priceW&&g.value&&!d.value?(v(),m("div",ee,[u("label",ae,[u("img",{class:"img-logo-tmine",src:K,alt:"tmine logo",onClick:t[0]||(t[0]=se=>i(_)(n.value,f.value.priceW))}),T(" "+b(f.value.price)+" TMINE ",1)])])):x("",!0)]}),_:1})],4),!g.value||d.value?(v(),m("div",te,t[2]||(t[2]=[u("div",{class:"stage"},[u("div",{class:"dot-flashing"})],-1)]))):x("",!0)],38)}}},W=G(ne,[["__scopeId","data-v-b976d147"]]),oe={class:"content container-items"},le={__name:"ContainerBoveda",setup(M,{expose:B}){const c=H(),y=w(!1),A=r("getNFTsBoveda");r("tmineCheckAllowanceBoveda");const _=r("incrementAllowanceInBoveda"),N=[];function h(d,e){return d=Math.ceil(d),e=Math.floor(e),Math.floor(Math.random()*(e-d+1))+d}const n=()=>h(280,500);return X(async()=>{await A(),console.log("tokens",c.web3.bovedaTokens)}),B({data:N,getHeight:n,nftItemBoveda:W,multiGrid14:y,Popper:I,incrementAllowanceInBoveda:_,mainStore:c}),(d,e)=>(v(),m("main",oe,[i(c).connected&&!i(c).web3.bovedaAlloance||i(c).web3.bovedaAlloance==0?(v(),j(i(I),{key:0,content:d.$t("general.titles.increase_tmine_allowed_for_vault"),arrow:!1,hover:!0,zIndex:"10000"},{default:F(()=>[u("span",{class:"amountAlloance",onClick:e[0]||(e[0]=(...f)=>i(_)&&i(_)(...f))},[T(b(i(c).web3.bovedaAlloance),1),e[1]||(e[1]=u("i",{class:"fa-solid fa-chevron-up icon-alloance"},null,-1))])]),_:1},8,["content"])):x("",!0),(v(!0),m(Y,null,q(i(c).web3.bovedaTokens,(f,o)=>(v(),j(W,{grid:y.value,target:i(c).web3.bovedaTokens,"nft-id":f,h:n(),key:o},null,8,["grid","target","nft-id","h"]))),128))]))}},ve=G(le,[["__scopeId","data-v-9e1fc22d"]]);export{ve as default};
