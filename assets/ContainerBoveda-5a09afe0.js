import{e as I,_ as J}from"./Paginator.vue_vue_type_style_index_0_lang-e7b329a3.js";import{_ as G,y as r,r as y,u as H,z as B,e as P,o as X,a as v,f as m,b as u,A as i,d as T,t as w,n as $,w as C,F as Y,B as q,s as R,l as x,C as D,c as j}from"./index-0bc3e77b.js";import"./iconify-fba8d68e.js";import{_ as K}from"./Tmine2-25d51798.js";const O={class:"header-card"},Q=["href"],U={key:0,class:"detaills-gem"},Z={key:1,class:"title-gem-boveda"},ee={key:0,class:"footer-card"},ae={class:"nft-number nft-reward-tmine"},te={key:0,class:"snippet","data-title":"dot-flashing"},ne={__name:"nftItemBoveda",props:["nftId","grid","target","h","key"],setup(F,{expose:L}){const c=r("getDataNFT"),b=r("getLinkNftScan"),A=r("toVault"),g=r("claimVault");r("syncBalance"),r("syncTmineBalance"),r("claimReward"),r("refreshTokens");const N=r("getNFTVault");r("tmineAddAllowance");const h=F,n=y(h.nftId),d=y(!1),e=y(null);y(null);const f=y(null),o=H(),p=B(()=>{const a=parseInt(n.value);return o.web3.nftLoad[a]!==void 0}),M=B(()=>e.value.metadata&&e.value.metadata.attributes?e.value.metadata.attributes.flatMap(a=>({type:a.trait_type,value:a.value})):[]),V=B(()=>e.value.metadata&&e.value.metadata.name&&e.value.metadata.name.length>25?e.value.metadata.name.replace("Fragment ",""):e.value.metadata.name),S=B(()=>{var t,l,s,k;const a=parseInt(n.value);return(l=(t=e==null?void 0:e.value)==null?void 0:t.metadata)!=null&&l.image&&console.log("* img",e.value.metadata.image),o.web3.nftLoad[a]!==void 0&&((k=(s=e==null?void 0:e.value)==null?void 0:s.metadata)!=null&&k.image)?`
	--crt:#fff;
    background-image: url(${e.value.metadata.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    `:""}),z=a=>{const t=a.target,l=a.pageX-t.offsetLeft,s=a.pageY-t.offsetTop;t.style.setProperty("--x",l+"px"),t.style.setProperty("--y",s+"px")};return P(p,async a=>{if(a&&(console.log(a,"*existInLoad",o.web3.nftLoad[n.value]!==void 0,n.value,e.value),a&&!e.value)){const t=parseInt(n.value),l=await c(t);l.id&&l.id===n.value&&(e.value=l),console.log({resp:l})}}),P(()=>h.nftId,async function(a){var t;if(n.value=a,e.value=null,console.log("w",a,p.value,o.web3.nftLoad[a]),!p.value&&!o.web3.nftLoad[a]){const l=parseInt(n.value);console.log("*startSearch");const s=await c(l);s.id&&s.id===n.value&&(e.value=s,o.web3.nftLoad[l]=s),console.log("* meta",e.value,{data:s})}o.web3.nftLoad[a],((t=o.web3.nftLoad[a])==null?void 0:t.id)===a&&(e.value=o.web3.nftLoad[a])}),X(async()=>{const a=parseInt(n.value),t=await c(a);f.value=await N(a),t.id&&t.id===n.value&&o.web3.nftLoad[a]&&(e.value=t,o.web3.nftLoad[a]=t),t&&!o.web3.nftLoad[n.value]&&(e.value=t,o.web3.nftLoad[n.value]=t)}),L({nftId:n,existInLoad:p,mainStore:o,getBgNft:S,getLinkNftScan:b,moseMoveInCard:z,loadRedresh:d,Popper:I,toVault:A,dataItem:f,claimVault:g,getProperties:M,titleFormat:V}),(a,t)=>{var l,s,k,E;return v(),m("div",{class:R({"nft-item-boveda":!0,"loader-bg":!p.value}),style:D(`height: ${h.h}px;`),onMousemove:z},[u("div",{class:"content-card",style:D(S.value)},[u("div",O,[u("a",{href:i(b)(n.value),target:"_blank"},[T("# "+w(n.value)+" ",1),$(i(I),{content:"Examinar en Polygonscan",arrow:!0,hover:!0},{default:C(()=>t[1]||(t[1]=[u("img",{class:"img-link-polygon",src:J,alt:"logo matic"},null,-1)])),_:1})],8,Q)]),(s=(l=e.value)==null?void 0:l.metadata)!=null&&s.attributes?(v(),m("div",U,[u("ul",null,[(v(!0),m(Y,null,q(M.value,_=>(v(),m("li",{class:R({colorEpic:_.type=="Staking"&&_.value>=4,colorEpicRarity:_.value=="epic"})},w(_.type)+" : "+w(_.value),3))),256))])])):x("",!0),(E=(k=e.value)==null?void 0:k.metadata)!=null&&E.name?(v(),m("div",Z,w(V.value),1)):x("",!0),$(i(I),{content:"Exatraer Fragmento",arrow:!1,hover:!0,zIndex:"10000"},{default:C(()=>{var _;return[(_=f.value)!=null&&_.priceW&&p.value&&!d.value?(v(),m("div",ee,[u("label",ae,[u("img",{class:"img-logo-tmine",src:K,alt:"tmine logo",onClick:t[0]||(t[0]=se=>i(g)(n.value,f.value.priceW))}),T(" "+w(f.value.price)+" TMINE ",1)])])):x("",!0)]}),_:1})],4),!p.value||d.value?(v(),m("div",te,t[2]||(t[2]=[u("div",{class:"stage"},[u("div",{class:"dot-flashing"})],-1)]))):x("",!0)],38)}}},W=G(ne,[["__scopeId","data-v-98645ed1"]]);const oe={class:"content container-items"},le={__name:"ContainerBoveda",setup(F,{expose:L}){const c=H(),b=y(!1),A=r("getNFTsBoveda");r("tmineCheckAllowanceBoveda");const g=r("incrementAllowanceInBoveda"),N=[];function h(d,e){return d=Math.ceil(d),e=Math.floor(e),Math.floor(Math.random()*(e-d+1))+d}const n=()=>h(280,500);return X(async()=>{await A(),console.log("tokens",c.web3.bovedaTokens)}),L({data:N,getHeight:n,nftItemBoveda:W,multiGrid14:b,Popper:I,incrementAllowanceInBoveda:g,mainStore:c}),(d,e)=>(v(),m("main",oe,[i(c).connected&&!i(c).web3.bovedaAlloance||i(c).web3.bovedaAlloance==0?(v(),j(i(I),{key:0,content:d.$t("general.titles.increase_tmine_allowed_for_vault"),arrow:!1,hover:!0,zIndex:"10000"},{default:C(()=>[u("span",{class:"amountAlloance",onClick:e[0]||(e[0]=(...f)=>i(g)&&i(g)(...f))},[T(w(i(c).web3.bovedaAlloance),1),e[1]||(e[1]=u("i",{class:"fa-solid fa-chevron-up icon-alloance"},null,-1))])]),_:1},8,["content"])):x("",!0),(v(!0),m(Y,null,q(i(c).web3.bovedaTokens,(f,o)=>(v(),j(W,{grid:b.value,target:i(c).web3.bovedaTokens,"nft-id":f,h:n(),key:o},null,8,["grid","target","nft-id","h"]))),128))]))}},ue=G(le,[["__scopeId","data-v-9e1fc22d"]]);export{ue as default};
