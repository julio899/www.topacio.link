import{_ as te,q as se,r as p,u as J,s as le,o as ne,a as d,g as f,d as s,e as j,t as I,l as P,v as re,x as ie,y as M,S as U,z as ce,p as ue,b as de,j as T,A as R,f as q,k as C,m as L,w as G,F as O,B as oe,C as ve,c as fe,h as ge}from"./index-4e56e947.js";import{e as A,_ as me}from"./Paginator.vue_vue_type_style_index_0_lang-bcc0f40b.js";import{_ as _e}from"./Tmine2-25d51798.js";import{_ as ee}from"./Paginator.vue_vue_type_script_setup_true_lang-07896035.js";const pe="/img/update-meta.svg",we="/img/fly-svgrepo-com.svg",he="/img/claim_.svg";const ye={name:"SendNFT",props:["show","idtarget"],emits:["closeModalSend"],setup(b,{emit:m}){const{show:h,idtarget:l}=se(b),u=p(!1),i=p(""),g=J();le(()=>{i.value="",u.value=!1}),ne(()=>{u.value=!1,i.value=""});const w=()=>{i.value="",u.value=!1,m("closeModalSend",!0)};return{store:g,show:h,closeModal:w,confirmSend:async()=>{u.value=!0;const S=i.value.toString().trim().replaceAll("	",""),y=U.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:c=>{c.addEventListener("mouseenter",U.stopTimer),c.addEventListener("mouseleave",U.resumeTimer)}});if(!ce(S))return u.value=!1,w(),y.fire({icon:"error",title:"Wallet is no valid"});const o=l.value;m("transferNFT",{w:S,id:o})},loading:u,wallet:i}}},W=b=>(ue("data-v-5e478752"),b=b(),de(),b),be={class:"modal-container"},ke={class:"Cabecera"},Te={class:"Contenido"},Se={key:0,class:"loader-interno"},xe={key:1,class:"group"},Ne=W(()=>s("span",{class:"highlight"},null,-1)),Ie=W(()=>s("span",{class:"bar"},null,-1)),Ce=W(()=>s("label",null,"Wallet destine",-1)),Le={class:"Bootonera"};function Pe(b,m,h,l,u,i){return d(),f("section",{class:M({"modal-t":!0,"show-modal":l.show,"hide-modal":!l.show})},[s("div",be,[s("div",ke,[j(" SEND NFT 🔖 "+I(h.idtarget)+" ",1),s("button",{class:"close",onClick:m[0]||(m[0]=(...g)=>l.closeModal&&l.closeModal(...g))},"✖")]),s("div",Te,[l.loading?(d(),f("div",Se)):P("",!0),l.loading?P("",!0):(d(),f("div",xe,[re(s("input",{type:"text","onUpdate:modelValue":m[1]||(m[1]=g=>l.wallet=g),required:""},null,512),[[ie,l.wallet]]),Ne,Ie,Ce]))]),s("div",Le,[l.loading?P("",!0):(d(),f("span",{key:0,class:"btn-send",onClick:m[2]||(m[2]=(...g)=>l.confirmSend&&l.confirmSend(...g))},"CONFIRM"))])])],2)}const Me=te(ye,[["render",Pe],["__scopeId","data-v-5e478752"]]);const Fe={class:"header-card"},Ae=["href"],Be=s("img",{class:"img-link-polygon",src:me,alt:"logo matic"},null,-1),$e={key:0},Ee={class:"content-card-item-galery"},ze={key:0,class:"title-gem"},Ge={key:1,class:"footer-card"},Re={class:"nft-number nft-reward-tmine"},Ve=s("img",{src:_e,alt:"tmine logo",class:"img-logo-tmine"},null,-1),De={key:2,class:"snippet","data-title":"dot-flashing"},Oe=s("div",{class:"stage"},[s("div",{class:"dot-flashing"})],-1),Ue=[Oe],ae={__name:"nftItemGallery",props:["nftId","grid","target"],setup(b,{expose:m}){const h=b,l=T("getDataNFT"),u=T("getLinkNftScan"),i=T("toVault"),g=T("syncBalance"),w=T("syncTmineBalance"),B=T("claimReward"),S=T("transferNFT"),y=T("refreshTokens"),o=p(h.nftId),c=p(!1),a=p(null),V=p(null),_=p(!1),k=p(!1),r=J(),$=R(()=>a.value&&a.value.metadata&&a.value.metadata.attributes?a.value.metadata.attributes.flatMap(e=>({type:e.trait_type,value:e.value})):[]),F=R(()=>{var e,t,n;return(e=a==null?void 0:a.value)!=null&&e.metadata&&((n=(t=a==null?void 0:a.value)==null?void 0:t.metadata)!=null&&n.name)&&a.value.metadata.name.length>25?a.value.metadata.name.replace("Fragment ",""):a.value.metadata.name}),D=()=>{k.value=!0},H=async({w:e,id:t})=>{console.log("toTransferNFT",{w:e,id:t});let n=null;console.time("transfer");try{n=await S(e,t)}catch(v){console.log({e:v,resp:n})}console.timeEnd("transfer"),console.log("transferNFT * ",{resp:n}),await g(),await w(),await y(),console.log({modalSend:V,resp:n}),!(n!=null&&n.blockNumber)||n===null?V.value.loading=!1:k.value=!1},X=async()=>{c.value=!0;const e=parseInt(o.value),t=await l(e);t!=null&&t.id&&t.id===o.value&&(a.value=t,r.web3.nftLoad[e]=t),await g(),await w(),setTimeout(()=>{c.value=!1},2e3)},x=R(()=>{const e=parseInt(o.value);return r.web3.nftLoad[e]!==void 0}),Y=async()=>{const e=parseInt(o.value);if(await B(e)===!0){await g(),await w(),console.log("* toClaim ok");const n=await l(e);n.id&&n.id===o.value&&e&&(a.value=n,r.web3.nftLoad[e]=n)}},K=R(()=>{var n,v,E,z;const e=parseInt(o.value),t=h.grid&&h.grid&&h.target.length>7?"cover":"150% 100%";return(v=(n=a==null?void 0:a.value)==null?void 0:n.metadata)!=null&&v.image&&console.log("* img",a.value.metadata.image),r.web3.nftLoad[e]!==void 0&&((z=(E=a==null?void 0:a.value)==null?void 0:E.metadata)!=null&&z.image)?`
	--crt:#fff;
    background-image: url(${a.value.metadata.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: ${t};`:""}),Q=e=>{const t=e.target,n=e.pageX-t.offsetLeft,v=e.pageY-t.offsetTop;t.style.setProperty("--x",n+"px"),t.style.setProperty("--y",v+"px")};return q(x,async e=>{if(e&&(console.log(e,"*existInLoad",r.web3.nftLoad[o.value]!==void 0,o.value,a.value),e&&!a.value)){const t=parseInt(o.value),n=await l(t);n.id&&n.id===o.value&&(a.value=n),console.log({resp:n})}}),q(()=>h.nftId,async function(e){var t;if(o.value=e,a.value=null,console.log("w",e,x.value,r.web3.nftLoad[e]),!x.value&&!r.web3.nftLoad[e]){const n=parseInt(o.value);console.log("*startSearch");const v=await l(n);v.id&&v.id===o.value&&(a.value=v,r.web3.nftLoad[n]=v),console.log("* meta",a.value,{data:v})}r.web3.nftLoad[e],((t=r.web3.nftLoad[e])==null?void 0:t.id)===e&&(a.value=r.web3.nftLoad[e])}),ne(async()=>{const e=parseInt(o.value),t=await l(e);console.log({resp:t,idAuxiliar:e},o.value),t.id&&t.id===o.value&&r.web3.nftLoad[e]&&(a.value=t,r.web3.nftLoad[e]=t),t&&!r.web3.nftLoad[o.value]&&(a.value=t,r.web3.nftLoad[o.value]=t)}),m({nftId:o,existInLoad:x,mainStore:r,getBgNft:K,getLinkNftScan:u,moseMoveInCard:Q,toClaim:Y,loadRedresh:c,toRefresh:X,showModalSedNft:k,toSend:D,toTransferNFT:H,Popper:A,toVault:i,showDetails:_,getProperties:$,titleFormat:F}),(e,t)=>{var n,v,E,z,Z;return d(),f(O,null,[s("div",{class:M({"nft-item":!0,"loader-bg":!x.value}),style:ve(K.value),onMousemove:Q},[s("div",Fe,[s("a",{href:C(u)(o.value),target:"_blank"},[j("# "+I(o.value)+" ",1),L(C(A),{content:"Examinar en Polygonscan",arrow:!0,hover:!0},{default:G(()=>[Be]),_:1})],8,Ae),L(C(A),{content:"Atributos de Nft",arrow:!0,hover:!0},{default:G(()=>[s("i",{class:"fa-solid fa-circle-info icon-info",onClick:t[0]||(t[0]=N=>_.value=!_.value)})]),_:1}),L(C(A),{content:"Actualizar Metadata",arrow:!0,hover:!0},{default:G(()=>[s("img",{src:pe,class:M({"icon-update-meta":!0,"loading-refresh":c.value}),onClick:X},null,2)]),_:1})]),s("div",{class:M({"details-attributes":!0,active:_.value})},[s("ul",null,[(d(!0),f(O,null,oe($.value,N=>(d(),f("li",{class:M({colorEpic:N.type=="Staking"&&N.value>=4,colorEpicRarity:N.value=="epic"})},I(N.type)+" : "+I(N.value),3))),256)),a.value&&((v=(n=a.value)==null?void 0:n.metadata)!=null&&v.name)?(d(),f("li",$e,I(F.value),1)):P("",!0)])],2),s("div",Ee,[L(C(A),{content:"Enviar NFT",arrow:!0,hover:!0,placement:"top"},{default:G(()=>[s("img",{src:we,onClick:D})]),_:1})]),a.value&&((z=(E=a.value)==null?void 0:E.metadata)!=null&&z.name)&&!_.value?(d(),f("div",ze,I(F.value),1)):P("",!0),(Z=a.value)!=null&&Z.reward&&x.value&&!c.value?(d(),f("div",Ge,[s("label",Re,[Ve,j(" "+I(a.value.reward)+" TMINE ",1)]),L(C(A),{content:"Hacer Claim de TMINE",hover:!0},{default:G(()=>[s("img",{src:he,onClick:Y,class:"icon-reward-claim"})]),_:1})])):P("",!0),!x.value||c.value?(d(),f("div",De,Ue)):P("",!0)],38),L(Me,{show:k.value,idtarget:o.value,onCloseModalSend:t[1]||(t[1]=N=>k.value=!1),onTransferNFT:H,ref_key:"modalSend",ref:V},null,8,["show","idtarget"])],64)}}};const je={key:0,class:"paginator"},qe={class:"slot-btn btn-grid"},Je={key:1,class:"paginator"},We={__name:"ContainerGallery",setup(b,{expose:m}){const h=new ge,l=J(),u=p(1),i=p(!1),g=p(null),w=p(5),B=_=>{u.value=_,o()},S=()=>{i.value=!i.value,i.value?w.value=10:w.value=5,c.value=o()},y=R(()=>o().elementosPagina),o=()=>{const _=JSON.parse(JSON.stringify(l.web3.nftTokensIds)),k=h.arrayPaginator(_,w.value,u.value);return g.value=k.totalPaginas,k},c=p(o()),a=()=>{u.value<g.value&&(u.value++,c.value=o()),console.log("nextPage",u.value)};return q(()=>l.web3.nftTokensIds,_=>{_&&(c.value=o())}),m({data:[],mainStore:l,currentPage:c,nextPage:a,nftItemGallery:ae,getCurrentTarget:y,multiGrid14:i,changeToMultigrid:S,Paginator:ee,updatePage:B,amountPerPage:w}),(_,k)=>{var r,$,F;return d(),f(O,null,[s("section",{class:M({content:!0,"multi-grid-14":i.value,lessMinimal:y.value&&((r=y.value)==null?void 0:r.length)&&(($=y.value)==null?void 0:$.length)<=4,"minimal-size":i.value&&((F=y.value)==null?void 0:F.length)<=3})},[(d(!0),f(O,null,oe(y.value,D=>(d(),fe(ae,{grid:i.value,target:y.value,"nft-id":D},null,8,["grid","target","nft-id"]))),256))],2),c.value&&c.value.paginaActual?(d(),f("section",je,[s("span",qe,[s("i",{class:M({"fas fa-th icon-grid":!0,active:i.value}),style:{color:"#ffffff"},onClick:S},null,2)]),L(ee,{currentPage:c.value,total:C(l).web3.nftTokensIds.length,amountPerPage:w.value,onUpdate:B},null,8,["currentPage","total","amountPerPage"])])):(d(),f("section",Je))],64)}}},Qe=te(We,[["__scopeId","data-v-755e7290"]]);export{Qe as C};
