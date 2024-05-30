import{_ as ne,s as se,r as p,u as W,k as re,o as le,a as d,g as m,d as o,e as J,t as L,m as F,v as ie,x as ue,y as x,S as j,z as ce,p as de,b as ve,j as C,A as z,f as O,l as P,n as $,w as V,F as U,B as oe,C as fe,c as ge,h as me}from"./index-dd6b3ff9.js";import{e as M,_ as _e}from"./Paginator.vue_vue_type_style_index_0_lang-320a4825.js";import{_ as pe}from"./Tmine2-25d51798.js";import{_ as ae}from"./Paginator.vue_vue_type_script_setup_true_lang-f59a00a3.js";const we="/img/update-meta.svg",ye="/img/fly-svgrepo-com.svg",he="/img/claim_.svg";const be={name:"SendNFT",props:["show","idtarget"],emits:["closeModalSend"],setup(k,{emit:w}){const{show:y,idtarget:s}=se(k),v=p(!1),u=p(""),_=W();re(()=>{u.value="",v.value=!1}),le(()=>{v.value=!1,u.value=""});const h=()=>{u.value="",v.value=!1,w("closeModalSend",!0)};return{store:_,show:y,closeModal:h,confirmSend:async()=>{v.value=!0;const I=u.value.toString().trim().replaceAll("	",""),f=j.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:c=>{c.addEventListener("mouseenter",j.stopTimer),c.addEventListener("mouseleave",j.resumeTimer)}});if(!ce(I))return v.value=!1,h(),f.fire({icon:"error",title:"Wallet is no valid"});const l=s.value;w("transferNFT",{w:I,id:l})},loading:v,wallet:u}}},q=k=>(de("data-v-5e478752"),k=k(),ve(),k),ke={class:"modal-container"},Se={class:"Cabecera"},Te={class:"Contenido"},Ce={key:0,class:"loader-interno"},xe={key:1,class:"group"},Ie=q(()=>o("span",{class:"highlight"},null,-1)),Ne=q(()=>o("span",{class:"bar"},null,-1)),Le=q(()=>o("label",null,"Wallet destine",-1)),Pe={class:"Bootonera"};function $e(k,w,y,s,v,u){return d(),m("section",{class:x({"modal-t":!0,"show-modal":s.show,"hide-modal":!s.show})},[o("div",ke,[o("div",Se,[J(" SEND NFT 🔖 "+L(y.idtarget)+" ",1),o("button",{class:"close",onClick:w[0]||(w[0]=(..._)=>s.closeModal&&s.closeModal(..._))},"✖")]),o("div",Te,[s.loading?(d(),m("div",Ce)):F("",!0),s.loading?F("",!0):(d(),m("div",xe,[ie(o("input",{type:"text","onUpdate:modelValue":w[1]||(w[1]=_=>s.wallet=_),required:""},null,512),[[ue,s.wallet]]),Ie,Ne,Le]))]),o("div",Pe,[s.loading?F("",!0):(d(),m("span",{key:0,class:"btn-send",onClick:w[2]||(w[2]=(..._)=>s.confirmSend&&s.confirmSend(..._))},"CONFIRM"))])])],2)}const Fe=ne(be,[["render",$e],["__scopeId","data-v-5e478752"]]);const Me={class:"header-card"},Be=["href"],Ae=o("img",{class:"img-link-polygon",src:_e,alt:"logo matic"},null,-1),Ee={class:"content-card-item-galery"},Re={key:0,class:"title-gem"},Ge={key:1,class:"footer-card"},Ve=o("img",{src:pe,alt:"tmine logo",class:"img-logo-tmine"},null,-1),ze={key:2,class:"snippet","data-title":"dot-flashing"},De=o("div",{class:"stage"},[o("div",{class:"dot-flashing"})],-1),Oe=[De],te={__name:"nftItemGallery",props:["nftId","grid","target"],setup(k,{expose:w}){const y=C("getDataNFT"),s=C("getLinkNftScan"),v=C("toVault"),u=C("syncBalance"),_=C("syncTmineBalance"),h=C("claimReward"),B=C("transferNFT"),I=C("refreshTokens"),f=k,l=p(f.nftId),c=p(!1),t=p(null),D=p(null),r=p(!1),S=p(!1),T=p(!1),i=W(),A=z(()=>t.value&&t.value.metadata&&t.value.metadata.attributes?t.value.metadata.attributes.flatMap(a=>({type:a.trait_type,value:a.value})):[]),E=z(()=>{var a,e,n;return(a=t==null?void 0:t.value)!=null&&a.metadata&&((n=(e=t==null?void 0:t.value)==null?void 0:e.metadata)!=null&&n.name)&&t.value.metadata.name.length>25?t.value.metadata.name.replace("Fragment ",""):t.value.metadata.name}),X=()=>{T.value=!0},Y=async({w:a,id:e})=>{console.log("toTransferNFT",{w:a,id:e});let n=null;console.time("transfer");try{n=await B(a,e)}catch(g){console.log({e:g,resp:n})}console.timeEnd("transfer"),console.log("transferNFT * ",{resp:n}),await u(),await _(),await I(),console.log({modalSend:D,resp:n}),!(n!=null&&n.blockNumber)||n===null?D.value.loading=!1:T.value=!1},H=async()=>{c.value=!0;const a=parseInt(l.value),e=await y(a);e!=null&&e.id&&e.id===l.value&&(t.value=e,i.web3.nftLoad[a]=e),await u(),await _(),setTimeout(()=>{c.value=!1},2e3)},N=z(()=>{const a=parseInt(l.value);return i.web3.nftLoad[a]!==void 0}),K=async()=>{const a=parseInt(l.value);if(await h(a)===!0){await u(),await _(),console.log("* toClaim ok");const n=await y(a);n.id&&n.id===l.value&&a&&(t.value=n,i.web3.nftLoad[a]=n)}},Q=z(()=>{var n,g,R,G;const a=parseInt(l.value),e=f.grid&&f.grid&&f.target.length>7?"cover":"190% 100%";return(g=(n=t==null?void 0:t.value)==null?void 0:n.metadata)!=null&&g.image&&console.log("* img",t.value.metadata.image),i.web3.nftLoad[a]!==void 0&&((G=(R=t==null?void 0:t.value)==null?void 0:R.metadata)!=null&&G.image)?`
	--crt:#fff;
    background-image: url(${t.value.metadata.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: ${e};`:""}),Z=a=>{const e=a.target,n=a.pageX-e.offsetLeft,g=a.pageY-e.offsetTop;e.style.setProperty("--x",n+"px"),e.style.setProperty("--y",g+"px")};return O(N,async a=>{if(a&&(console.log(a,"*existInLoad",i.web3.nftLoad[l.value]!==void 0,l.value,t.value),a&&!t.value)){const e=parseInt(l.value),n=await y(e);n.id&&n.id===l.value&&(t.value=n),console.log({resp:n})}}),O(()=>i.web3.blockNumber,async function(a){S.value=!0;const e=parseInt(l.value),n=await y(e);n!=null&&n.id&&n.id===l.value&&(t.value=n,i.web3.nftLoad[e]=n),S.value=!1}),O(()=>f.nftId,async function(a){var e;if(l.value=a,t.value=null,console.log("w",a,N.value,i.web3.nftLoad[a]),!N.value&&!i.web3.nftLoad[a]){const n=parseInt(l.value);console.log("*startSearch");const g=await y(n);g.id&&g.id===l.value&&(t.value=g,i.web3.nftLoad[n]=g),console.log("* meta",t.value,{data:g})}i.web3.nftLoad[a],((e=i.web3.nftLoad[a])==null?void 0:e.id)===a&&(t.value=i.web3.nftLoad[a])}),le(async()=>{const a=parseInt(l.value),e=await y(a);console.log({resp:e,idAuxiliar:a},l.value),e&&l&&e.id&&e.id===l.value&&i.web3.nftLoad[a]&&(t.value=e,i.web3.nftLoad[a]=e),e&&!i.web3.nftLoad[l.value]&&(t.value=e,i.web3.nftLoad[l.value]=e)}),w({upReward:S,nftId:l,existInLoad:N,mainStore:i,getBgNft:Q,getLinkNftScan:s,moseMoveInCard:Z,toClaim:K,loadRedresh:c,toRefresh:H,showModalSedNft:T,toSend:X,toTransferNFT:Y,Popper:M,toVault:v,showDetails:r,getProperties:A,titleFormat:E}),(a,e)=>{var n,g,R,G,ee;return d(),m(U,null,[o("div",{class:x({"nft-item":!0,"loader-bg":!N.value}),style:fe(Q.value),onMousemove:Z},[o("div",Me,[o("a",{href:P(s)(l.value),target:"_blank"},[J("# "+L(l.value)+" ",1),$(P(M),{content:a.$t("general.titles.examine_on_polygonscan"),arrow:!0,hover:!0},{default:V(()=>[Ae]),_:1},8,["content"])],8,Be),$(P(M),{content:a.$t("general.titles.nft_attributes"),arrow:!0,hover:!0},{default:V(()=>[o("i",{class:"fa-solid fa-circle-info icon-info",onClick:e[0]||(e[0]=b=>r.value=!r.value)})]),_:1},8,["content"]),$(P(M),{content:a.$t("general.titles.update_metadata"),arrow:!0,hover:!0},{default:V(()=>[o("img",{src:we,class:x({"icon-update-meta":!0,"loading-refresh":c.value}),onClick:H},null,2)]),_:1},8,["content"])]),o("div",{class:x({"details-attributes":!0,active:r.value}),onClick:e[4]||(e[4]=b=>r.value=!r.value)},[o("ul",{onClick:e[3]||(e[3]=b=>r.value=!r.value)},[(d(!0),m(U,null,oe(A.value,b=>(d(),m("li",{onClick:e[1]||(e[1]=qe=>r.value=!r.value),class:x({colorEpic:b.type=="Staking"&&b.value>=4,colorEpicRarity:b.value=="epic"})},L(b.type)+" : "+L(b.value),3))),256)),t.value&&((g=(n=t.value)==null?void 0:n.metadata)!=null&&g.name)?(d(),m("li",{key:0,onClick:e[2]||(e[2]=b=>r.value=!r.value)},L(E.value),1)):F("",!0)])],2),o("div",Ee,[$(P(M),{content:a.$t("general.titles.send_nft"),arrow:!0,hover:!0,placement:"top"},{default:V(()=>[o("img",{src:ye,onClick:X})]),_:1},8,["content"])]),t.value&&((G=(R=t.value)==null?void 0:R.metadata)!=null&&G.name)&&!r.value?(d(),m("div",Re,L(E.value),1)):F("",!0),(ee=t.value)!=null&&ee.reward&&N.value&&!c.value?(d(),m("div",Ge,[o("label",{class:x({"nft-number nft-reward-tmine":!0,blink_me:S.value})},[Ve,J(" "+L(t.value.reward)+" TMINE ",1)],2),$(P(M),{content:a.$t("general.titles.claim_tmine"),hover:!0},{default:V(()=>[o("img",{src:he,onClick:K,class:"icon-reward-claim"})]),_:1},8,["content"])])):F("",!0),!N.value||c.value?(d(),m("div",ze,Oe)):F("",!0)],38),$(Fe,{show:T.value,idtarget:l.value,onCloseModalSend:e[5]||(e[5]=b=>T.value=!1),onTransferNFT:Y,ref_key:"modalSend",ref:D},null,8,["show","idtarget"])],64)}}};const Ue={key:0,class:"paginator"},je={class:"slot-btn btn-grid"},Je={key:1,class:"paginator"},We={__name:"ContainerGallery",setup(k,{expose:w}){const y=new me,s=W(),v=p(1),u=p(!1),_=p(null),h=p(5),B=r=>{v.value=r,l()},I=()=>{u.value=!u.value,u.value?h.value=10:h.value=5,c.value=l()},f=z(()=>l().elementosPagina),l=()=>{const r=JSON.parse(JSON.stringify(s.web3.nftTokensIds)),S=y.arrayPaginator(r,h.value,v.value);return _.value=S.totalPaginas,S},c=p(l()),t=()=>{v.value<_.value&&(v.value++,c.value=l()),console.log("nextPage",v.value)};return O(()=>s.web3.nftTokensIds,r=>{r&&(c.value=l())}),w({data:[],mainStore:s,currentPage:c,nextPage:t,nftItemGallery:te,getCurrentTarget:f,multiGrid14:u,changeToMultigrid:I,Paginator:ae,updatePage:B,amountPerPage:h}),(r,S)=>{var T,i,A;return d(),m(U,null,[o("section",{class:x({content:!0,"multi-grid-14":u.value,lessMinimal:f.value&&((T=f.value)==null?void 0:T.length)&&((i=f.value)==null?void 0:i.length)<=4,"minimal-size":u.value&&((A=f.value)==null?void 0:A.length)<=3})},[(d(!0),m(U,null,oe(f.value,E=>(d(),ge(te,{grid:u.value,target:f.value,"nft-id":E},null,8,["grid","target","nft-id"]))),256))],2),c.value&&c.value.paginaActual?(d(),m("section",Ue,[o("span",je,[o("i",{class:x({"fas fa-th icon-grid":!0,active:u.value}),style:{color:"#ffffff"},onClick:I},null,2)]),$(ae,{currentPage:c.value,total:P(s).web3.nftTokensIds.length,amountPerPage:h.value,onUpdate:B},null,8,["currentPage","total","amountPerPage"])])):(d(),m("section",Je))],64)}}},Qe=ne(We,[["__scopeId","data-v-2230249b"]]);export{Qe as C};
