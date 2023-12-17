import{_ as Z,q as te,r as _,u as U,s as ne,o as ee,a as f,g as m,d as n,e as R,t as B,l as $,v as oe,x as se,y as L,S as G,z as le,p as re,b as ie,j as x,A as z,f as O,k as T,m as S,w as P,F as D,B as ae,C as ce,c as ue,h as de}from"./index-f7495f4a.js";import{e as C,_ as ve}from"./Paginator.vue_vue_type_style_index_0_lang-9ea35e36.js";import{_ as fe}from"./Tmine2-25d51798.js";import{_ as K}from"./Paginator.vue_vue_type_script_setup_true_lang-400f6511.js";const ge="/img/update-meta.svg",_e="/img/fly-svgrepo-com.svg",me="/img/claim_.svg";const pe={name:"SendNFT",props:["show","idtarget"],emits:["closeModalSend"],setup(k,{emit:g}){const{show:h,idtarget:l}=te(k),d=_(!1),c=_(""),v=U();ne(()=>{c.value="",d.value=!1}),ee(()=>{d.value=!1,c.value=""});const p=()=>{c.value="",d.value=!1,g("closeModalSend",!0)};return{store:v,show:h,closeModal:p,confirmSend:async()=>{d.value=!0;const N=c.value.toString().trim().replaceAll("	",""),y=G.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:u=>{u.addEventListener("mouseenter",G.stopTimer),u.addEventListener("mouseleave",G.resumeTimer)}});if(!le(N))return d.value=!1,p(),y.fire({icon:"error",title:"Wallet is no valid"});const t=l.value;g("transferNFT",{w:N,id:t})},loading:d,wallet:c}}},j=k=>(re("data-v-5e478752"),k=k(),ie(),k),we={class:"modal-container"},he={class:"Cabecera"},ye={class:"Contenido"},be={key:0,class:"loader-interno"},ke={key:1,class:"group"},Te=j(()=>n("span",{class:"highlight"},null,-1)),xe=j(()=>n("span",{class:"bar"},null,-1)),Se=j(()=>n("label",null,"Wallet destine",-1)),Ne={class:"Bootonera"};function Ie(k,g,h,l,d,c){return f(),m("section",{class:L({"modal-t":!0,"show-modal":l.show,"hide-modal":!l.show})},[n("div",we,[n("div",he,[R(" SEND NFT 🔖 "+B(h.idtarget)+" ",1),n("button",{class:"close",onClick:g[0]||(g[0]=(...v)=>l.closeModal&&l.closeModal(...v))},"✖")]),n("div",ye,[l.loading?(f(),m("div",be)):$("",!0),l.loading?$("",!0):(f(),m("div",ke,[oe(n("input",{type:"text","onUpdate:modelValue":g[1]||(g[1]=v=>l.wallet=v),required:""},null,512),[[se,l.wallet]]),Te,xe,Se]))]),n("div",Ne,[l.loading?$("",!0):(f(),m("span",{key:0,class:"btn-send",onClick:g[2]||(g[2]=(...v)=>l.confirmSend&&l.confirmSend(...v))},"CONFIRM"))])])],2)}const Ce=Z(pe,[["render",Ie],["__scopeId","data-v-5e478752"]]);const Le={class:"header-card"},Pe=["href"],Me=n("img",{class:"img-link-polygon",src:ve,alt:"logo matic"},null,-1),Fe=n("i",{class:"fa-solid fa-boxes-packing"},null,-1),Ae=[Fe],Be={class:"content-card"},$e={key:0,class:"footer-card"},Ee={class:"nft-number nft-reward-tmine"},Ve=n("img",{src:fe,alt:"tmine logo",class:"img-logo-tmine"},null,-1),ze={key:1,class:"snippet","data-title":"dot-flashing"},De=n("div",{class:"stage"},[n("div",{class:"dot-flashing"})],-1),Ge=[De],Q={__name:"nftItemGallery",props:["nftId","grid","target"],setup(k,{expose:g}){const h=k,l=x("getDataNFT"),d=x("getLinkNftScan"),c=x("toVault"),v=x("syncBalance"),p=x("syncTmineBalance"),M=x("claimReward"),N=x("transferNFT"),y=x("refreshTokens"),t=_(h.nftId),u=_(!1),o=_(null),E=_(null),w=_(!1),b=_(!1),r=U(),F=z(()=>o.value&&o.value.metadata&&o.value.metadata.attributes?o.value.metadata.attributes.flatMap(e=>({type:e.trait_type,value:e.value})):[]),A=()=>{b.value=!0},V=async({w:e,id:a})=>{console.log("toTransferNFT",{w:e,id:a});const s=await N(e,a,b);console.log("transferNFT * ",{resp:s}),await v(),await p(),await y(),console.log({modalSend:E,resp:s}),!(s!=null&&s.blockNumber)||s===null?E.value.loading=!1:b.value=!1},q=async()=>{u.value=!0;const e=parseInt(t.value),a=await l(e);a.id&&a.id===t.value&&(o.value=a,r.web3.nftLoad[e]=a),await v(),await p(),setTimeout(()=>{u.value=!1},2e3)},I=z(()=>{const e=parseInt(t.value);return r.web3.nftLoad[e]!==void 0}),J=async()=>{const e=parseInt(t.value);if(await M(e)===!0){await v(),await p(),console.log("* toClaim ok");const s=await l(e);s.id&&s.id===t.value&&e&&(o.value=s,r.web3.nftLoad[e]=s)}},W=z(()=>{var s,i,X,Y;const e=parseInt(t.value),a=h.grid&&h.grid&&h.target.length>7?"cover":"150% 100%";return(i=(s=o==null?void 0:o.value)==null?void 0:s.metadata)!=null&&i.image&&console.log("* img",o.value.metadata.image),r.web3.nftLoad[e]!==void 0&&((Y=(X=o==null?void 0:o.value)==null?void 0:X.metadata)!=null&&Y.image)?`
	--crt:#fff;
    background-image: url(${o.value.metadata.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: ${a};`:""}),H=e=>{const a=e.target,s=e.pageX-a.offsetLeft,i=e.pageY-a.offsetTop;a.style.setProperty("--x",s+"px"),a.style.setProperty("--y",i+"px")};return O(I,async e=>{if(e&&(console.log(e,"*existInLoad",r.web3.nftLoad[t.value]!==void 0,t.value,o.value),e&&!o.value)){const a=parseInt(t.value),s=await l(a);s.id&&s.id===t.value&&(o.value=s),console.log({resp:s})}}),O(()=>h.nftId,async function(e){var a;if(t.value=e,o.value=null,console.log("w",e,I.value,r.web3.nftLoad[e]),!I.value&&!r.web3.nftLoad[e]){const s=parseInt(t.value);console.log("*startSearch");const i=await l(s);i.id&&i.id===t.value&&(o.value=i,r.web3.nftLoad[s]=i),console.log("* meta",o.value,{data:i})}r.web3.nftLoad[e],((a=r.web3.nftLoad[e])==null?void 0:a.id)===e&&(o.value=r.web3.nftLoad[e])}),ee(async()=>{const e=parseInt(t.value),a=await l(e);a.id&&a.id===t.value&&r.web3.nftLoad[e]&&(o.value=a,r.web3.nftLoad[e]=a),a&&!r.web3.nftLoad[t.value]&&(o.value=a,r.web3.nftLoad[t.value]=a)}),g({nftId:t,existInLoad:I,mainStore:r,getBgNft:W,getLinkNftScan:d,moseMoveInCard:H,toClaim:J,loadRedresh:u,toRefresh:q,showModalSedNft:b,toSend:A,toTransferNFT:V,Popper:C,toVault:c,showDetails:w,getProperties:F}),(e,a)=>{var s;return f(),m(D,null,[n("div",{class:L({"nft-item":!0,"loader-bg":!I.value}),style:ce(W.value),onMousemove:H},[n("div",Le,[n("a",{href:T(d)(t.value),target:"_blank"},[R("# "+B(t.value)+" ",1),S(T(C),{content:"Examinar en Polygonscan",arrow:!0,hover:!0},{default:P(()=>[Me]),_:1})],8,Pe),S(T(C),{content:"Atributos de Nft",arrow:!0,hover:!0},{default:P(()=>[n("i",{class:"fa-solid fa-circle-info icon-info",onClick:a[0]||(a[0]=i=>w.value=!w.value)})]),_:1}),S(T(C),{content:"To Vault",arrow:!0,hover:!0},{default:P(()=>[n("span",{onClick:a[1]||(a[1]=i=>T(c)({nftID:t.value,price:"2500000000000000000000"}))},Ae)]),_:1}),S(T(C),{content:"Actualizar Metadata",arrow:!0,hover:!0},{default:P(()=>[n("img",{src:ge,class:L({"icon-update-meta":!0,"loading-refresh":u.value}),onClick:q},null,2)]),_:1})]),n("div",{class:L({"details-attributes":!0,active:w.value})},[n("ul",null,[(f(!0),m(D,null,ae(F.value,i=>(f(),m("li",{class:L({colorEpic:i.type=="Staking"&&i.value>=4,colorEpicRarity:i.value=="epic"})},B(i.type)+" : "+B(i.value),3))),256))])],2),n("div",Be,[S(T(C),{content:"Enviar NFT",arrow:!0,hover:!0,placement:"top"},{default:P(()=>[n("img",{src:_e,onClick:A})]),_:1})]),(s=o.value)!=null&&s.reward&&I.value&&!u.value?(f(),m("div",$e,[n("label",Ee,[Ve,R(" "+B(o.value.reward)+" TMINE ",1)]),S(T(C),{content:"Hacer Claim de TMINE",hover:!0},{default:P(()=>[n("img",{src:me,onClick:J,class:"icon-reward-claim"})]),_:1})])):$("",!0),!I.value||u.value?(f(),m("div",ze,Ge)):$("",!0)],38),S(Ce,{show:b.value,idtarget:t.value,onCloseModalSend:a[2]||(a[2]=i=>b.value=!1),onTransferNFT:V,ref_key:"modalSend",ref:E},null,8,["show","idtarget"])],64)}}};const Re={key:0,class:"paginator"},Oe={class:"slot-btn btn-grid"},Ue={key:1,class:"paginator"},je={__name:"ContainerGallery",setup(k,{expose:g}){const h=new de,l=U(),d=_(1),c=_(!1),v=_(null),p=_(5),M=w=>{d.value=w,t()},N=()=>{c.value=!c.value,c.value?p.value=10:p.value=5,u.value=t()},y=z(()=>t().elementosPagina),t=()=>{const w=JSON.parse(JSON.stringify(l.web3.nftTokensIds)),b=h.arrayPaginator(w,p.value,d.value);return v.value=b.totalPaginas,b},u=_(t()),o=()=>{d.value<v.value&&(d.value++,u.value=t()),console.log("nextPage",d.value)};return O(()=>l.web3.nftTokensIds,w=>{w&&(u.value=t())}),g({data:[],mainStore:l,currentPage:u,nextPage:o,nftItemGallery:Q,getCurrentTarget:y,multiGrid14:c,changeToMultigrid:N,Paginator:K,updatePage:M,amountPerPage:p}),(w,b)=>{var r,F,A;return f(),m(D,null,[n("section",{class:L({content:!0,"multi-grid-14":c.value,lessMinimal:y.value&&((r=y.value)==null?void 0:r.length)&&((F=y.value)==null?void 0:F.length)<=4,"minimal-size":c.value&&((A=y.value)==null?void 0:A.length)<=3})},[(f(!0),m(D,null,ae(y.value,V=>(f(),ue(Q,{grid:c.value,target:y.value,"nft-id":V},null,8,["grid","target","nft-id"]))),256))],2),u.value&&u.value.paginaActual?(f(),m("section",Re,[n("span",Oe,[n("i",{class:L({"fas fa-th icon-grid":!0,active:c.value}),style:{color:"#ffffff"},onClick:N},null,2)]),S(K,{currentPage:u.value,total:T(l).web3.nftTokensIds.length,amountPerPage:p.value,onUpdate:M},null,8,["currentPage","total","amountPerPage"])])):(f(),m("section",Ue))],64)}}},Xe=Z(je,[["__scopeId","data-v-755e7290"]]);export{Xe as C};