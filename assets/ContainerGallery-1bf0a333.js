import{_ as te,s as se,r as p,u as W,k as le,o as ne,a as v,g,d as s,e as j,t as N,m as P,v as re,x as ie,y as M,S as U,z as ue,p as ce,b as de,j as S,A as R,f as J,l as I,n as L,w as G,F as O,B as oe,C as ve,c as fe,h as ge}from"./index-3c80ae99.js";import{e as $,_ as me}from"./Paginator.vue_vue_type_style_index_0_lang-1af2c808.js";import{_ as _e}from"./Tmine2-25d51798.js";import{_ as ee}from"./Paginator.vue_vue_type_script_setup_true_lang-75dbab6d.js";const pe="/img/update-meta.svg",we="/img/fly-svgrepo-com.svg",ye="/img/claim_.svg";const he={name:"SendNFT",props:["show","idtarget"],emits:["closeModalSend"],setup(b,{emit:_}){const{show:y,idtarget:l}=se(b),d=p(!1),u=p(""),m=W();le(()=>{u.value="",d.value=!1}),ne(()=>{d.value=!1,u.value=""});const w=()=>{u.value="",d.value=!1,_("closeModalSend",!0)};return{store:m,show:y,closeModal:w,confirmSend:async()=>{d.value=!0;const x=u.value.toString().trim().replaceAll("	",""),h=U.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:c=>{c.addEventListener("mouseenter",U.stopTimer),c.addEventListener("mouseleave",U.resumeTimer)}});if(!ue(x))return d.value=!1,w(),h.fire({icon:"error",title:"Wallet is no valid"});const o=l.value;_("transferNFT",{w:x,id:o})},loading:d,wallet:u}}},q=b=>(ce("data-v-5e478752"),b=b(),de(),b),ke={class:"modal-container"},be={class:"Cabecera"},Te={class:"Contenido"},Se={key:0,class:"loader-interno"},xe={key:1,class:"group"},Ce=q(()=>s("span",{class:"highlight"},null,-1)),Ne=q(()=>s("span",{class:"bar"},null,-1)),Ie=q(()=>s("label",null,"Wallet destine",-1)),Le={class:"Bootonera"};function Pe(b,_,y,l,d,u){return v(),g("section",{class:M({"modal-t":!0,"show-modal":l.show,"hide-modal":!l.show})},[s("div",ke,[s("div",be,[j(" SEND NFT 🔖 "+N(y.idtarget)+" ",1),s("button",{class:"close",onClick:_[0]||(_[0]=(...m)=>l.closeModal&&l.closeModal(...m))},"✖")]),s("div",Te,[l.loading?(v(),g("div",Se)):P("",!0),l.loading?P("",!0):(v(),g("div",xe,[re(s("input",{type:"text","onUpdate:modelValue":_[1]||(_[1]=m=>l.wallet=m),required:""},null,512),[[ie,l.wallet]]),Ce,Ne,Ie]))]),s("div",Le,[l.loading?P("",!0):(v(),g("span",{key:0,class:"btn-send",onClick:_[2]||(_[2]=(...m)=>l.confirmSend&&l.confirmSend(...m))},"CONFIRM"))])])],2)}const Me=te(he,[["render",Pe],["__scopeId","data-v-5e478752"]]);const Fe={class:"header-card"},$e=["href"],Ae=s("img",{class:"img-link-polygon",src:me,alt:"logo matic"},null,-1),Be={class:"content-card-item-galery"},Ee={key:0,class:"title-gem"},ze={key:1,class:"footer-card"},Ge={class:"nft-number nft-reward-tmine"},Re=s("img",{src:_e,alt:"tmine logo",class:"img-logo-tmine"},null,-1),Ve={key:2,class:"snippet","data-title":"dot-flashing"},De=s("div",{class:"stage"},[s("div",{class:"dot-flashing"})],-1),Oe=[De],ae={__name:"nftItemGallery",props:["nftId","grid","target"],setup(b,{expose:_}){const y=b,l=S("getDataNFT"),d=S("getLinkNftScan"),u=S("toVault"),m=S("syncBalance"),w=S("syncTmineBalance"),A=S("claimReward"),x=S("transferNFT"),h=S("refreshTokens"),o=p(y.nftId),c=p(!1),t=p(null),V=p(null),r=p(!1),T=p(!1),i=W(),B=R(()=>t.value&&t.value.metadata&&t.value.metadata.attributes?t.value.metadata.attributes.flatMap(a=>({type:a.trait_type,value:a.value})):[]),F=R(()=>{var a,e,n;return(a=t==null?void 0:t.value)!=null&&a.metadata&&((n=(e=t==null?void 0:t.value)==null?void 0:e.metadata)!=null&&n.name)&&t.value.metadata.name.length>25?t.value.metadata.name.replace("Fragment ",""):t.value.metadata.name}),D=()=>{T.value=!0},H=async({w:a,id:e})=>{console.log("toTransferNFT",{w:a,id:e});let n=null;console.time("transfer");try{n=await x(a,e)}catch(f){console.log({e:f,resp:n})}console.timeEnd("transfer"),console.log("transferNFT * ",{resp:n}),await m(),await w(),await h(),console.log({modalSend:V,resp:n}),!(n!=null&&n.blockNumber)||n===null?V.value.loading=!1:T.value=!1},X=async()=>{c.value=!0;const a=parseInt(o.value),e=await l(a);e!=null&&e.id&&e.id===o.value&&(t.value=e,i.web3.nftLoad[a]=e),await m(),await w(),setTimeout(()=>{c.value=!1},2e3)},C=R(()=>{const a=parseInt(o.value);return i.web3.nftLoad[a]!==void 0}),Y=async()=>{const a=parseInt(o.value);if(await A(a)===!0){await m(),await w(),console.log("* toClaim ok");const n=await l(a);n.id&&n.id===o.value&&a&&(t.value=n,i.web3.nftLoad[a]=n)}},K=R(()=>{var n,f,E,z;const a=parseInt(o.value),e=y.grid&&y.grid&&y.target.length>7?"cover":"190% 100%";return(f=(n=t==null?void 0:t.value)==null?void 0:n.metadata)!=null&&f.image&&console.log("* img",t.value.metadata.image),i.web3.nftLoad[a]!==void 0&&((z=(E=t==null?void 0:t.value)==null?void 0:E.metadata)!=null&&z.image)?`
	--crt:#fff;
    background-image: url(${t.value.metadata.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: ${e};`:""}),Q=a=>{const e=a.target,n=a.pageX-e.offsetLeft,f=a.pageY-e.offsetTop;e.style.setProperty("--x",n+"px"),e.style.setProperty("--y",f+"px")};return J(C,async a=>{if(a&&(console.log(a,"*existInLoad",i.web3.nftLoad[o.value]!==void 0,o.value,t.value),a&&!t.value)){const e=parseInt(o.value),n=await l(e);n.id&&n.id===o.value&&(t.value=n),console.log({resp:n})}}),J(()=>y.nftId,async function(a){var e;if(o.value=a,t.value=null,console.log("w",a,C.value,i.web3.nftLoad[a]),!C.value&&!i.web3.nftLoad[a]){const n=parseInt(o.value);console.log("*startSearch");const f=await l(n);f.id&&f.id===o.value&&(t.value=f,i.web3.nftLoad[n]=f),console.log("* meta",t.value,{data:f})}i.web3.nftLoad[a],((e=i.web3.nftLoad[a])==null?void 0:e.id)===a&&(t.value=i.web3.nftLoad[a])}),ne(async()=>{const a=parseInt(o.value),e=await l(a);console.log({resp:e,idAuxiliar:a},o.value),e.id&&e.id===o.value&&i.web3.nftLoad[a]&&(t.value=e,i.web3.nftLoad[a]=e),e&&!i.web3.nftLoad[o.value]&&(t.value=e,i.web3.nftLoad[o.value]=e)}),_({nftId:o,existInLoad:C,mainStore:i,getBgNft:K,getLinkNftScan:d,moseMoveInCard:Q,toClaim:Y,loadRedresh:c,toRefresh:X,showModalSedNft:T,toSend:D,toTransferNFT:H,Popper:$,toVault:u,showDetails:r,getProperties:B,titleFormat:F}),(a,e)=>{var n,f,E,z,Z;return v(),g(O,null,[s("div",{class:M({"nft-item":!0,"loader-bg":!C.value}),style:ve(K.value),onMousemove:Q},[s("div",Fe,[s("a",{href:I(d)(o.value),target:"_blank"},[j("# "+N(o.value)+" ",1),L(I($),{content:"Examinar en Polygonscan",arrow:!0,hover:!0},{default:G(()=>[Ae]),_:1})],8,$e),L(I($),{content:"Atributos de Nft",arrow:!0,hover:!0},{default:G(()=>[s("i",{class:"fa-solid fa-circle-info icon-info",onClick:e[0]||(e[0]=k=>r.value=!r.value)})]),_:1}),L(I($),{content:"Actualizar Metadata",arrow:!0,hover:!0},{default:G(()=>[s("img",{src:pe,class:M({"icon-update-meta":!0,"loading-refresh":c.value}),onClick:X},null,2)]),_:1})]),s("div",{class:M({"details-attributes":!0,active:r.value}),onClick:e[4]||(e[4]=k=>r.value=!r.value)},[s("ul",{onClick:e[3]||(e[3]=k=>r.value=!r.value)},[(v(!0),g(O,null,oe(B.value,k=>(v(),g("li",{onClick:e[1]||(e[1]=qe=>r.value=!r.value),class:M({colorEpic:k.type=="Staking"&&k.value>=4,colorEpicRarity:k.value=="epic"})},N(k.type)+" : "+N(k.value),3))),256)),t.value&&((f=(n=t.value)==null?void 0:n.metadata)!=null&&f.name)?(v(),g("li",{key:0,onClick:e[2]||(e[2]=k=>r.value=!r.value)},N(F.value),1)):P("",!0)])],2),s("div",Be,[L(I($),{content:"Enviar NFT",arrow:!0,hover:!0,placement:"top"},{default:G(()=>[s("img",{src:we,onClick:D})]),_:1})]),t.value&&((z=(E=t.value)==null?void 0:E.metadata)!=null&&z.name)&&!r.value?(v(),g("div",Ee,N(F.value),1)):P("",!0),(Z=t.value)!=null&&Z.reward&&C.value&&!c.value?(v(),g("div",ze,[s("label",Ge,[Re,j(" "+N(t.value.reward)+" TMINE ",1)]),L(I($),{content:"Hacer Claim de TMINE",hover:!0},{default:G(()=>[s("img",{src:ye,onClick:Y,class:"icon-reward-claim"})]),_:1})])):P("",!0),!C.value||c.value?(v(),g("div",Ve,Oe)):P("",!0)],38),L(Me,{show:T.value,idtarget:o.value,onCloseModalSend:e[5]||(e[5]=k=>T.value=!1),onTransferNFT:H,ref_key:"modalSend",ref:V},null,8,["show","idtarget"])],64)}}};const Ue={key:0,class:"paginator"},je={class:"slot-btn btn-grid"},Je={key:1,class:"paginator"},We={__name:"ContainerGallery",setup(b,{expose:_}){const y=new ge,l=W(),d=p(1),u=p(!1),m=p(null),w=p(5),A=r=>{d.value=r,o()},x=()=>{u.value=!u.value,u.value?w.value=10:w.value=5,c.value=o()},h=R(()=>o().elementosPagina),o=()=>{const r=JSON.parse(JSON.stringify(l.web3.nftTokensIds)),T=y.arrayPaginator(r,w.value,d.value);return m.value=T.totalPaginas,T},c=p(o()),t=()=>{d.value<m.value&&(d.value++,c.value=o()),console.log("nextPage",d.value)};return J(()=>l.web3.nftTokensIds,r=>{r&&(c.value=o())}),_({data:[],mainStore:l,currentPage:c,nextPage:t,nftItemGallery:ae,getCurrentTarget:h,multiGrid14:u,changeToMultigrid:x,Paginator:ee,updatePage:A,amountPerPage:w}),(r,T)=>{var i,B,F;return v(),g(O,null,[s("section",{class:M({content:!0,"multi-grid-14":u.value,lessMinimal:h.value&&((i=h.value)==null?void 0:i.length)&&((B=h.value)==null?void 0:B.length)<=4,"minimal-size":u.value&&((F=h.value)==null?void 0:F.length)<=3})},[(v(!0),g(O,null,oe(h.value,D=>(v(),fe(ae,{grid:u.value,target:h.value,"nft-id":D},null,8,["grid","target","nft-id"]))),256))],2),c.value&&c.value.paginaActual?(v(),g("section",Ue,[s("span",je,[s("i",{class:M({"fas fa-th icon-grid":!0,active:u.value}),style:{color:"#ffffff"},onClick:x},null,2)]),L(ee,{currentPage:c.value,total:I(l).web3.nftTokensIds.length,amountPerPage:w.value,onUpdate:A},null,8,["currentPage","total","amountPerPage"])])):(v(),g("section",Je))],64)}}},Qe=te(We,[["__scopeId","data-v-755e7290"]]);export{Qe as C};
