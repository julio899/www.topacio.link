import{_ as ne,s as se,r as _,u as W,k as ie,o as oe,a as d,g as m,d as l,e as J,t as L,m as F,v as re,x as ue,y as x,S as j,z as ce,p as de,b as ve,j as C,A as z,f as O,l as P,n as $,w as V,F as U,B as le,C as fe,c as me,h as ge}from"./index-e4c7b7e0.js";import{e as M,_ as _e}from"./Paginator.vue_vue_type_style_index_0_lang-b1ef3733.js";import{_ as pe}from"./Tmine2-c9d9ad17.js";import{_ as te}from"./Paginator.vue_vue_type_script_setup_true_lang-124f1bef.js";const we="https://topaciotrade.github.io/community/img/update-meta.svg",ye="https://topaciotrade.github.io/community/img/fly-svgrepo-com.svg",he="https://topaciotrade.github.io/community/img/claim_.svg";const be={name:"SendNFT",props:["show","idtarget"],emits:["closeModalSend"],setup(k,{emit:p}){const{show:w,idtarget:s}=se(k),v=_(!1),u=_(""),g=W();ie(()=>{u.value="",v.value=!1}),oe(()=>{v.value=!1,u.value=""});const h=()=>{u.value="",v.value=!1,p("closeModalSend",!0)};return{store:g,show:w,closeModal:h,confirmSend:async()=>{v.value=!0;const I=u.value.toString().trim().replaceAll("	",""),y=j.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:c=>{c.addEventListener("mouseenter",j.stopTimer),c.addEventListener("mouseleave",j.resumeTimer)}});if(!ce(I))return v.value=!1,h(),y.fire({icon:"error",title:"Wallet is no valid"});const o=s.value;p("transferNFT",{w:I,id:o})},loading:v,wallet:u}}},q=k=>(de("data-v-5e478752"),k=k(),ve(),k),ke={class:"modal-container"},Se={class:"Cabecera"},Te={class:"Contenido"},Ce={key:0,class:"loader-interno"},xe={key:1,class:"group"},Ie=q(()=>l("span",{class:"highlight"},null,-1)),Ne=q(()=>l("span",{class:"bar"},null,-1)),Le=q(()=>l("label",null,"Wallet destine",-1)),Pe={class:"Bootonera"};function $e(k,p,w,s,v,u){return d(),m("section",{class:x({"modal-t":!0,"show-modal":s.show,"hide-modal":!s.show})},[l("div",ke,[l("div",Se,[J(" SEND NFT 🔖 "+L(w.idtarget)+" ",1),l("button",{class:"close",onClick:p[0]||(p[0]=(...g)=>s.closeModal&&s.closeModal(...g))},"✖")]),l("div",Te,[s.loading?(d(),m("div",Ce)):F("",!0),s.loading?F("",!0):(d(),m("div",xe,[re(l("input",{type:"text","onUpdate:modelValue":p[1]||(p[1]=g=>s.wallet=g),required:""},null,512),[[ue,s.wallet]]),Ie,Ne,Le]))]),l("div",Pe,[s.loading?F("",!0):(d(),m("span",{key:0,class:"btn-send",onClick:p[2]||(p[2]=(...g)=>s.confirmSend&&s.confirmSend(...g))},"CONFIRM"))])])],2)}const Fe=ne(be,[["render",$e],["__scopeId","data-v-5e478752"]]);const Me={class:"header-card"},Be=["href"],Ae=l("img",{class:"img-link-polygon",src:_e,alt:"logo matic"},null,-1),Ee={class:"content-card-item-galery"},Re={key:0,class:"title-gem"},Ge={key:1,class:"footer-card"},Ve=l("img",{src:pe,alt:"tmine logo",class:"img-logo-tmine"},null,-1),ze={key:2,class:"snippet","data-title":"dot-flashing"},De=l("div",{class:"stage"},[l("div",{class:"dot-flashing"})],-1),Oe=[De],ae={__name:"nftItemGallery",props:["nftId","grid","target"],setup(k,{expose:p}){const w=C("getDataNFT"),s=C("getLinkNftScan"),v=C("toVault"),u=C("syncBalance"),g=C("syncTmineBalance"),h=C("claimReward"),B=C("transferNFT"),I=C("refreshTokens"),y=k,o=_(y.nftId),c=_(!1),a=_(null),D=_(null),i=_(!1),S=_(!1),T=_(!1),r=W(),A=z(()=>a.value&&a.value.metadata&&a.value.metadata.attributes?a.value.metadata.attributes.flatMap(t=>({type:t.trait_type,value:t.value})):[]),E=z(()=>{var t,e,n;return(t=a==null?void 0:a.value)!=null&&t.metadata&&((n=(e=a==null?void 0:a.value)==null?void 0:e.metadata)!=null&&n.name)&&a.value.metadata.name.length>25?a.value.metadata.name.replace("Fragment ",""):a.value.metadata.name}),X=()=>{T.value=!0},Y=async({w:t,id:e})=>{console.log("toTransferNFT",{w:t,id:e});let n=null;console.time("transfer");try{n=await B(t,e)}catch(f){console.log({e:f,resp:n})}console.timeEnd("transfer"),console.log("transferNFT * ",{resp:n}),await u(),await g(),await I(),console.log({modalSend:D,resp:n}),!(n!=null&&n.blockNumber)||n===null?D.value.loading=!1:T.value=!1},H=async()=>{c.value=!0;const t=parseInt(o.value),e=await w(t);e!=null&&e.id&&e.id===o.value&&(a.value=e,r.web3.nftLoad[t]=e),await u(),await g(),setTimeout(()=>{c.value=!1},2e3)},N=z(()=>{const t=parseInt(o.value);return r.web3.nftLoad[t]!==void 0}),K=async()=>{const t=parseInt(o.value);if(await h(t)===!0){await u(),await g(),console.log("* toClaim ok");const n=await w(t);n.id&&n.id===o.value&&t&&(a.value=n,r.web3.nftLoad[t]=n)}},Q=z(()=>{var n,f,R,G;const t=parseInt(o.value),e="cover";return(f=(n=a==null?void 0:a.value)==null?void 0:n.metadata)!=null&&f.image&&console.log("* img",a.value.metadata.image),r.web3.nftLoad[t]!==void 0&&((G=(R=a==null?void 0:a.value)==null?void 0:R.metadata)!=null&&G.image)?`
	--crt:#fff;
    background-image: url(${a.value.metadata.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: ${e};`:""}),Z=t=>{const e=t.target,n=t.pageX-e.offsetLeft,f=t.pageY-e.offsetTop;e.style.setProperty("--x",n+"px"),e.style.setProperty("--y",f+"px")};return O(N,async t=>{if(t&&(console.log(t,"*existInLoad",r.web3.nftLoad[o.value]!==void 0,o.value,a.value),t&&!a.value)){const e=parseInt(o.value),n=await w(e);n.id&&n.id===o.value&&(a.value=n),console.log({resp:n})}}),O(()=>r.web3.blockNumber,async function(t){S.value=!0;const e=parseInt(o.value),n=await w(e);n!=null&&n.id&&n.id===o.value&&(a.value=n,r.web3.nftLoad[e]=n),S.value=!1}),O(()=>y.nftId,async function(t){var e;if(o.value=t,a.value=null,console.log("w",t,N.value,r.web3.nftLoad[t]),!N.value&&!r.web3.nftLoad[t]){const n=parseInt(o.value);console.log("*startSearch");const f=await w(n);f.id&&f.id===o.value&&(a.value=f,r.web3.nftLoad[n]=f),console.log("* meta",a.value,{data:f})}r.web3.nftLoad[t],((e=r.web3.nftLoad[t])==null?void 0:e.id)===t&&(a.value=r.web3.nftLoad[t])}),oe(async()=>{const t=parseInt(o.value),e=await w(t);console.log({resp:e,idAuxiliar:t},o.value),e&&o&&e.id&&e.id===o.value&&r.web3.nftLoad[t]&&(a.value=e,r.web3.nftLoad[t]=e),e&&!r.web3.nftLoad[o.value]&&(a.value=e,r.web3.nftLoad[o.value]=e)}),p({upReward:S,nftId:o,existInLoad:N,mainStore:r,getBgNft:Q,getLinkNftScan:s,moseMoveInCard:Z,toClaim:K,loadRedresh:c,toRefresh:H,showModalSedNft:T,toSend:X,toTransferNFT:Y,Popper:M,toVault:v,showDetails:i,getProperties:A,titleFormat:E}),(t,e)=>{var n,f,R,G,ee;return d(),m(U,null,[l("div",{class:x({"nft-item":!0,"loader-bg":!N.value}),style:fe(Q.value),onMousemove:Z},[l("div",Me,[l("a",{href:P(s)(o.value),target:"_blank"},[J("# "+L(o.value)+" ",1),$(P(M),{content:t.$t("general.titles.examine_on_polygonscan"),arrow:!0,hover:!0},{default:V(()=>[Ae]),_:1},8,["content"])],8,Be),$(P(M),{content:t.$t("general.titles.nft_attributes"),arrow:!0,hover:!0},{default:V(()=>[l("i",{class:"fa-solid fa-circle-info icon-info",onClick:e[0]||(e[0]=b=>i.value=!i.value)})]),_:1},8,["content"]),$(P(M),{content:t.$t("general.titles.update_metadata"),arrow:!0,hover:!0},{default:V(()=>[l("img",{src:we,class:x({"icon-update-meta":!0,"loading-refresh":c.value}),onClick:H},null,2)]),_:1},8,["content"])]),l("div",{class:x({"details-attributes":!0,active:i.value}),onClick:e[4]||(e[4]=b=>i.value=!i.value)},[l("ul",{onClick:e[3]||(e[3]=b=>i.value=!i.value)},[(d(!0),m(U,null,le(A.value,b=>(d(),m("li",{onClick:e[1]||(e[1]=qe=>i.value=!i.value),class:x({colorEpic:b.type=="Staking"&&b.value>=4,colorEpicRarity:b.value=="epic"})},L(b.type)+" : "+L(b.value),3))),256)),a.value&&((f=(n=a.value)==null?void 0:n.metadata)!=null&&f.name)?(d(),m("li",{key:0,onClick:e[2]||(e[2]=b=>i.value=!i.value)},L(E.value),1)):F("",!0)])],2),l("div",Ee,[$(P(M),{content:t.$t("general.titles.send_nft"),arrow:!0,hover:!0,placement:"top"},{default:V(()=>[l("img",{src:ye,onClick:X})]),_:1},8,["content"])]),a.value&&((G=(R=a.value)==null?void 0:R.metadata)!=null&&G.name)&&!i.value?(d(),m("div",Re,L(E.value),1)):F("",!0),(ee=a.value)!=null&&ee.reward&&N.value&&!c.value?(d(),m("div",Ge,[l("label",{class:x({"nft-number nft-reward-tmine":!0,blink_me:S.value})},[Ve,J(" "+L(a.value.reward)+" TMINE ",1)],2),$(P(M),{content:t.$t("general.titles.claim_tmine"),hover:!0},{default:V(()=>[l("img",{src:he,onClick:K,class:"icon-reward-claim"})]),_:1},8,["content"])])):F("",!0),!N.value||c.value?(d(),m("div",ze,Oe)):F("",!0)],38),$(Fe,{show:T.value,idtarget:o.value,onCloseModalSend:e[5]||(e[5]=b=>T.value=!1),onTransferNFT:Y,ref_key:"modalSend",ref:D},null,8,["show","idtarget"])],64)}}};const Ue={key:0,class:"paginator"},je={class:"slot-btn btn-grid"},Je={key:1,class:"paginator"},We={__name:"ContainerGallery",setup(k,{expose:p}){const w=new ge,s=W(),v=_(1),u=_(!1),g=_(null),h=_(5),B=i=>{v.value=i,o()},I=()=>{u.value=!u.value,u.value?h.value=10:h.value=5,c.value=o()},y=z(()=>o().elementosPagina),o=()=>{const i=JSON.parse(JSON.stringify(s.web3.nftTokensIds)),S=w.arrayPaginator(i,h.value,v.value);return g.value=S.totalPaginas,S},c=_(o()),a=()=>{v.value<g.value&&(v.value++,c.value=o()),console.log("nextPage",v.value)};return O(()=>s.web3.nftTokensIds,i=>{i&&(c.value=o())}),p({data:[],mainStore:s,currentPage:c,nextPage:a,nftItemGallery:ae,getCurrentTarget:y,multiGrid14:u,changeToMultigrid:I,Paginator:te,updatePage:B,amountPerPage:h}),(i,S)=>{var T,r,A;return d(),m(U,null,[l("section",{class:x({content:!0,"multi-grid-14":u.value,lessMinimal:y.value&&((T=y.value)==null?void 0:T.length)&&((r=y.value)==null?void 0:r.length)<=4,"minimal-size":u.value&&((A=y.value)==null?void 0:A.length)<=3})},[(d(!0),m(U,null,le(y.value,E=>(d(),me(ae,{grid:u.value,target:y.value,"nft-id":E},null,8,["grid","target","nft-id"]))),256))],2),c.value&&c.value.paginaActual?(d(),m("section",Ue,[l("span",je,[l("i",{class:x({"fas fa-th icon-grid":!0,active:u.value}),style:{color:"#ffffff"},onClick:I},null,2)]),$(te,{currentPage:c.value,total:P(s).web3.nftTokensIds.length,amountPerPage:h.value,onUpdate:B},null,8,["currentPage","total","amountPerPage"])])):(d(),m("section",Je))],64)}}},Qe=ne(We,[["__scopeId","data-v-2230249b"]]);export{Qe as C};
