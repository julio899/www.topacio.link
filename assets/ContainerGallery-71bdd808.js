import{_ as te,p as oe,r as _,u as J,j as se,o as ne,a as v,f as m,b as o,d as q,t as I,l as F,q as re,v as ie,s as C,S as j,x as ue,y as h,z,e as O,A as L,n as P,w as V,F as U,B as le,C as ce,c as de,g as ve}from"./index-6214123c.js";import{e as M,_ as fe}from"./Paginator.vue_vue_type_style_index_0_lang-56bbd2c1.js";import{_ as ge}from"./Tmine2-25d51798.js";import{_ as ee}from"./Paginator.vue_vue_type_script_setup_true_lang-fbe73900.js";const me="/img/update-meta.svg",pe="/img/fly-svgrepo-com.svg",_e="/img/claim_.svg";const we={name:"SendNFT",props:["show","idtarget"],emits:["closeModalSend"],setup($,{emit:u}){const{show:w,idtarget:s}=oe($),f=_(!1),c=_(""),p=J();se(()=>{c.value="",f.value=!1}),ne(()=>{f.value=!1,c.value=""});const b=()=>{c.value="",f.value=!1,u("closeModalSend",!0)};return{store:p,show:w,closeModal:b,confirmSend:async()=>{f.value=!0;const x=c.value.toString().trim().replaceAll("	",""),y=j.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:d=>{d.addEventListener("mouseenter",j.stopTimer),d.addEventListener("mouseleave",j.resumeTimer)}});if(!ue(x))return f.value=!1,b(),y.fire({icon:"error",title:"Wallet is no valid"});const l=s.value;u("transferNFT",{w:x,id:l})},loading:f,wallet:c}}},ye={class:"modal-container"},be={class:"Cabecera"},ke={class:"Contenido"},Te={key:0,class:"loader-interno"},Se={key:1,class:"group"},he={class:"Bootonera"};function Ce($,u,w,s,f,c){return v(),m("section",{class:C({"modal-t":!0,"show-modal":s.show,"hide-modal":!s.show})},[o("div",ye,[o("div",be,[q(" SEND NFT 🔖 "+I(w.idtarget)+" ",1),o("button",{class:"close",onClick:u[0]||(u[0]=(...p)=>s.closeModal&&s.closeModal(...p))},"✖")]),o("div",ke,[s.loading?(v(),m("div",Te)):F("",!0),s.loading?F("",!0):(v(),m("div",Se,[re(o("input",{type:"text","onUpdate:modelValue":u[1]||(u[1]=p=>s.wallet=p),required:""},null,512),[[ie,s.wallet]]),u[3]||(u[3]=o("span",{class:"highlight"},null,-1)),u[4]||(u[4]=o("span",{class:"bar"},null,-1)),u[5]||(u[5]=o("label",null,"Wallet destine",-1))]))]),o("div",he,[s.loading?F("",!0):(v(),m("span",{key:0,class:"btn-send",onClick:u[2]||(u[2]=(...p)=>s.confirmSend&&s.confirmSend(...p))},"CONFIRM"))])])],2)}const xe=te(we,[["render",Ce],["__scopeId","data-v-5e478752"]]);const Ne={class:"header-card"},Ie=["href"],Le={class:"content-card-item-galery"},Pe={key:0,class:"title-gem"},Fe={key:1,class:"footer-card"},Me={key:2,class:"snippet","data-title":"dot-flashing"},ae={__name:"nftItemGallery",props:["nftId","grid","target"],setup($,{expose:u}){const w=h("getDataNFT"),s=h("getLinkNftScan"),f=h("toVault"),c=h("syncBalance"),p=h("syncTmineBalance"),b=h("claimReward"),B=h("transferNFT"),x=h("refreshTokens"),y=$,l=_(y.nftId),d=_(!1),t=_(null),D=_(null),r=_(!1),T=_(!1),S=_(!1),i=J(),A=z(()=>t.value&&t.value.metadata&&t.value.metadata.attributes?t.value.metadata.attributes.flatMap(a=>({type:a.trait_type,value:a.value})):[]),E=z(()=>{var a,e,n;return(a=t==null?void 0:t.value)!=null&&a.metadata&&((n=(e=t==null?void 0:t.value)==null?void 0:e.metadata)!=null&&n.name)&&t.value.metadata.name.length>25?t.value.metadata.name.replace("Fragment ",""):t.value.metadata.name}),W=()=>{S.value=!0},X=async({w:a,id:e})=>{console.log("toTransferNFT",{w:a,id:e});let n=null;console.time("transfer");try{n=await B(a,e)}catch(g){console.log({e:g,resp:n})}console.timeEnd("transfer"),console.log("transferNFT * ",{resp:n}),await c(),await p(),await x(),console.log({modalSend:D,resp:n}),!(n!=null&&n.blockNumber)||n===null?D.value.loading=!1:S.value=!1},Y=async()=>{d.value=!0;const a=parseInt(l.value),e=await w(a);e!=null&&e.id&&e.id===l.value&&(t.value=e,i.web3.nftLoad[a]=e),await c(),await p(),setTimeout(()=>{d.value=!1},2e3)},N=z(()=>{const a=parseInt(l.value);return i.web3.nftLoad[a]!==void 0}),H=async()=>{const a=parseInt(l.value);if(await b(a)===!0){await c(),await p(),console.log("* toClaim ok");const n=await w(a);n.id&&n.id===l.value&&a&&(t.value=n,i.web3.nftLoad[a]=n)}},K=z(()=>{var n,g,R,G;const a=parseInt(l.value),e="cover";return(g=(n=t==null?void 0:t.value)==null?void 0:n.metadata)!=null&&g.image&&console.log("* img",t.value.metadata.image),i.web3.nftLoad[a]!==void 0&&((G=(R=t==null?void 0:t.value)==null?void 0:R.metadata)!=null&&G.image)?`
	--crt:#fff;
    background-image: url(${t.value.metadata.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: ${e};`:""}),Q=a=>{const e=a.target,n=a.pageX-e.offsetLeft,g=a.pageY-e.offsetTop;e.style.setProperty("--x",n+"px"),e.style.setProperty("--y",g+"px")};return O(N,async a=>{if(a&&(console.log(a,"*existInLoad",i.web3.nftLoad[l.value]!==void 0,l.value,t.value),a&&!t.value)){const e=parseInt(l.value),n=await w(e);n.id&&n.id===l.value&&(t.value=n),console.log({resp:n})}}),O(()=>i.web3.blockNumber,async function(a){T.value=!0;const e=parseInt(l.value),n=await w(e);n!=null&&n.id&&n.id===l.value&&(t.value=n,i.web3.nftLoad[e]=n),T.value=!1}),O(()=>y.nftId,async function(a){var e;if(l.value=a,t.value=null,console.log("w",a,N.value,i.web3.nftLoad[a]),!N.value&&!i.web3.nftLoad[a]){const n=parseInt(l.value);console.log("*startSearch");const g=await w(n);g.id&&g.id===l.value&&(t.value=g,i.web3.nftLoad[n]=g),console.log("* meta",t.value,{data:g})}i.web3.nftLoad[a],((e=i.web3.nftLoad[a])==null?void 0:e.id)===a&&(t.value=i.web3.nftLoad[a])}),ne(async()=>{const a=parseInt(l.value),e=await w(a);console.log({resp:e,idAuxiliar:a},l.value),e&&l&&e.id&&e.id===l.value&&i.web3.nftLoad[a]&&(t.value=e,i.web3.nftLoad[a]=e),e&&!i.web3.nftLoad[l.value]&&(t.value=e,i.web3.nftLoad[l.value]=e)}),u({upReward:T,nftId:l,existInLoad:N,mainStore:i,getBgNft:K,getLinkNftScan:s,moseMoveInCard:Q,toClaim:H,loadRedresh:d,toRefresh:Y,showModalSedNft:S,toSend:W,toTransferNFT:X,Popper:M,toVault:f,showDetails:r,getProperties:A,titleFormat:E}),(a,e)=>{var n,g,R,G,Z;return v(),m(U,null,[o("div",{class:C({"nft-item":!0,"loader-bg":!N.value}),style:ce(K.value),onMousemove:Q},[o("div",Ne,[o("a",{href:L(s)(l.value),target:"_blank"},[q("# "+I(l.value)+" ",1),P(L(M),{content:a.$t("general.titles.examine_on_polygonscan"),arrow:!0,hover:!0},{default:V(()=>e[6]||(e[6]=[o("img",{class:"img-link-polygon",src:fe,alt:"logo matic"},null,-1)])),_:1},8,["content"])],8,Ie),P(L(M),{content:a.$t("general.titles.nft_attributes"),arrow:!0,hover:!0},{default:V(()=>[o("i",{class:"fa-solid fa-circle-info icon-info",onClick:e[0]||(e[0]=k=>r.value=!r.value)})]),_:1},8,["content"]),P(L(M),{content:a.$t("general.titles.update_metadata"),arrow:!0,hover:!0},{default:V(()=>[o("img",{src:me,class:C({"icon-update-meta":!0,"loading-refresh":d.value}),onClick:Y},null,2)]),_:1},8,["content"])]),o("div",{class:C({"details-attributes":!0,active:r.value}),onClick:e[4]||(e[4]=k=>r.value=!r.value)},[o("ul",{onClick:e[3]||(e[3]=k=>r.value=!r.value)},[(v(!0),m(U,null,le(A.value,k=>(v(),m("li",{onClick:e[1]||(e[1]=Re=>r.value=!r.value),class:C({colorEpic:k.type=="Staking"&&k.value>=4,colorEpicRarity:k.value=="epic"})},I(k.type)+" : "+I(k.value),3))),256)),t.value&&((g=(n=t.value)==null?void 0:n.metadata)!=null&&g.name)?(v(),m("li",{key:0,onClick:e[2]||(e[2]=k=>r.value=!r.value)},I(E.value),1)):F("",!0)])],2),o("div",Le,[P(L(M),{content:a.$t("general.titles.send_nft"),arrow:!0,hover:!0,placement:"top"},{default:V(()=>[o("img",{src:pe,onClick:W})]),_:1},8,["content"])]),t.value&&((G=(R=t.value)==null?void 0:R.metadata)!=null&&G.name)&&!r.value?(v(),m("div",Pe,I(E.value),1)):F("",!0),(Z=t.value)!=null&&Z.reward&&N.value&&!d.value?(v(),m("div",Fe,[o("label",{class:C({"nft-number nft-reward-tmine":!0,blink_me:T.value})},[e[7]||(e[7]=o("img",{src:ge,alt:"tmine logo",class:"img-logo-tmine"},null,-1)),q(" "+I(t.value.reward)+" TMINE ",1)],2),P(L(M),{content:a.$t("general.titles.claim_tmine"),hover:!0},{default:V(()=>[o("img",{src:_e,onClick:H,class:"icon-reward-claim"})]),_:1},8,["content"])])):F("",!0),!N.value||d.value?(v(),m("div",Me,e[8]||(e[8]=[o("div",{class:"stage"},[o("div",{class:"dot-flashing"})],-1)]))):F("",!0)],38),P(xe,{show:S.value,idtarget:l.value,onCloseModalSend:e[5]||(e[5]=k=>S.value=!1),onTransferNFT:X,ref_key:"modalSend",ref:D},null,8,["show","idtarget"])],64)}}};const $e={key:0,class:"paginator"},Be={class:"slot-btn btn-grid"},Ae={key:1,class:"paginator"},Ee={__name:"ContainerGallery",setup($,{expose:u}){const w=new ve,s=J(),f=_(1),c=_(!1),p=_(null),b=_(5),B=r=>{f.value=r,l()},x=()=>{c.value=!c.value,c.value?b.value=10:b.value=5,d.value=l()},y=z(()=>l().elementosPagina),l=()=>{const r=JSON.parse(JSON.stringify(s.web3.nftTokensIds)),T=w.arrayPaginator(r,b.value,f.value);return p.value=T.totalPaginas,T},d=_(l()),t=()=>{f.value<p.value&&(f.value++,d.value=l()),console.log("nextPage",f.value)};return O(()=>s.web3.nftTokensIds,r=>{r&&(d.value=l())}),u({data:[],mainStore:s,currentPage:d,nextPage:t,nftItemGallery:ae,getCurrentTarget:y,multiGrid14:c,changeToMultigrid:x,Paginator:ee,updatePage:B,amountPerPage:b}),(r,T)=>{var S,i,A;return v(),m(U,null,[o("section",{class:C({content:!0,"multi-grid-14":c.value,lessMinimal:y.value&&((S=y.value)==null?void 0:S.length)&&((i=y.value)==null?void 0:i.length)<=4,"minimal-size":c.value&&((A=y.value)==null?void 0:A.length)<=3})},[(v(!0),m(U,null,le(y.value,E=>(v(),de(ae,{grid:c.value,target:y.value,"nft-id":E},null,8,["grid","target","nft-id"]))),256))],2),d.value&&d.value.paginaActual?(v(),m("section",$e,[o("span",Be,[o("i",{class:C({"fas fa-th icon-grid":!0,active:c.value}),style:{color:"#ffffff"},onClick:x},null,2)]),P(ee,{currentPage:d.value,total:L(s).web3.nftTokensIds.length,amountPerPage:b.value,onUpdate:B},null,8,["currentPage","total","amountPerPage"])])):(v(),m("section",Ae))],64)}}},Oe=te(Ee,[["__scopeId","data-v-2230249b"]]);export{Oe as C};
