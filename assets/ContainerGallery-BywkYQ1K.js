import{_ as te,s as oe,r as w,u as j,k as se,o as ne,a as v,b as g,d as o,e as W,t as L,f as M,v as re,x as ie,y as C,S as J,z as ue,A as S,B as D,h as O,l as I,p as P,w as z,F as U,g as le,n as ce,c as de,i as ve}from"./index-Bxb4x26N.js";import{e as F,_ as fe}from"./Paginator.vue_vue_type_style_index_0_lang-B36fZoFh.js";import{_ as me}from"./Tmine2-DhPnLw4a.js";import{_ as ee}from"./Paginator.vue_vue_type_script_setup_true_lang-qFCZ--3l.js";const ge="/img/update-meta.svg",pe="/img/fly-svgrepo-com.svg",we="/img/claim_.svg",_e={name:"SendNFT",props:["show","idtarget"],emits:["closeModalSend"],setup($,{emit:u}){const{show:_,idtarget:s}=oe($),f=w(!1),c=w(""),p=j();se(()=>{c.value="",f.value=!1}),ne(()=>{f.value=!1,c.value=""});const b=()=>{c.value="",f.value=!1,u("closeModalSend",!0)};return{store:p,show:_,closeModal:b,confirmSend:async()=>{f.value=!0;const N=c.value.toString().trim().replaceAll("	",""),y=J.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:d=>{d.addEventListener("mouseenter",J.stopTimer),d.addEventListener("mouseleave",J.resumeTimer)}});if(!ue(N))return f.value=!1,b(),y.fire({icon:"error",title:"Wallet is no valid"});const l=s.value;u("transferNFT",{w:N,id:l})},loading:f,wallet:c}}},ye={class:"modal-container"},be={class:"Cabecera"},ke={class:"Contenido"},Te={key:0,class:"loader-interno"},he={key:1,class:"group"},Se={class:"Bootonera"};function Ce($,u,_,s,f,c){return v(),g("section",{class:C({"modal-t":!0,"show-modal":s.show,"hide-modal":!s.show})},[o("div",ye,[o("div",be,[W(" SEND NFT 🔖 "+L(_.idtarget)+" ",1),o("button",{class:"close",onClick:u[0]||(u[0]=(...p)=>s.closeModal&&s.closeModal(...p))},"✖")]),o("div",ke,[s.loading?(v(),g("div",Te)):M("",!0),s.loading?M("",!0):(v(),g("div",he,[re(o("input",{type:"text","onUpdate:modelValue":u[1]||(u[1]=p=>s.wallet=p),required:""},null,512),[[ie,s.wallet]]),u[3]||(u[3]=o("span",{class:"highlight"},null,-1)),u[4]||(u[4]=o("span",{class:"bar"},null,-1)),u[5]||(u[5]=o("label",null,"Wallet destine",-1))]))]),o("div",Se,[s.loading?M("",!0):(v(),g("span",{key:0,class:"btn-send",onClick:u[2]||(u[2]=(...p)=>s.confirmSend&&s.confirmSend(...p))},"CONFIRM"))])])],2)}const Ne=te(_e,[["render",Ce],["__scopeId","data-v-a1755a0e"]]),xe={class:"header-card"},Le=["href"],Ie={class:"content-card-item-galery"},Pe={key:0,class:"title-gem"},Me={key:1,class:"footer-card"},Fe={key:2,class:"snippet","data-title":"dot-flashing"},ae={__name:"nftItemGallery",props:["nftId","grid","target"],setup($,{expose:u}){const _=S("getDataNFT"),s=S("getLinkNftScan"),f=S("toVault"),c=S("syncBalance"),p=S("syncTmineBalance"),b=S("claimReward"),B=S("transferNFT"),N=S("refreshTokens"),y=$,l=w(y.nftId),d=w(!1),t=w(null),G=w(null),r=w(!1),T=w(!1),h=w(!1),i=j(),A=D(()=>t.value&&t.value.metadata&&t.value.metadata.attributes?t.value.metadata.attributes.flatMap(a=>({type:a.trait_type,value:a.value})):[]),E=D(()=>{var a,e,n;return(a=t==null?void 0:t.value)!=null&&a.metadata&&((n=(e=t==null?void 0:t.value)==null?void 0:e.metadata)!=null&&n.name)&&t.value.metadata.name.length>25?t.value.metadata.name.replace("Fragment ",""):t.value.metadata.name}),q=()=>{h.value=!0},X=async({w:a,id:e})=>{console.log("toTransferNFT",{w:a,id:e});let n=null;console.time("transfer");try{n=await B(a,e)}catch(m){console.log({e:m,resp:n})}console.timeEnd("transfer"),console.log("transferNFT * ",{resp:n}),await c(),await p(),await N(),console.log({modalSend:G,resp:n}),!(n!=null&&n.blockNumber)||n===null?G.value.loading=!1:h.value=!1},Y=async()=>{d.value=!0;const a=parseInt(l.value),e=await _(a);e!=null&&e.id&&e.id===l.value&&(t.value=e,i.web3.nftLoad[a]=e),await c(),await p(),setTimeout(()=>{d.value=!1},2e3)},x=D(()=>{const a=parseInt(l.value);return i.web3.nftLoad[a]!==void 0}),H=async()=>{const a=parseInt(l.value);if(await b(a)===!0){await c(),await p(),console.log("* toClaim ok");const n=await _(a);n.id&&n.id===l.value&&a&&(t.value=n,i.web3.nftLoad[a]=n)}},K=D(()=>{var n,m,R,V;const a=parseInt(l.value),e="cover";return(m=(n=t==null?void 0:t.value)==null?void 0:n.metadata)!=null&&m.image&&console.log("* img",t.value.metadata.image),i.web3.nftLoad[a]!==void 0&&((V=(R=t==null?void 0:t.value)==null?void 0:R.metadata)!=null&&V.image)?`
	--crt:#fff;
    background-image: url(${t.value.metadata.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: ${e};`:""}),Q=a=>{const e=a.target,n=a.pageX-e.offsetLeft,m=a.pageY-e.offsetTop;e.style.setProperty("--x",n+"px"),e.style.setProperty("--y",m+"px")};return O(x,async a=>{if(a&&(console.log(a,"*existInLoad",i.web3.nftLoad[l.value]!==void 0,l.value,t.value),a&&!t.value)){const e=parseInt(l.value),n=await _(e);n.id&&n.id===l.value&&(t.value=n),console.log({resp:n})}}),O(()=>i.web3.blockNumber,async function(a){T.value=!0;const e=parseInt(l.value),n=await _(e);n!=null&&n.id&&n.id===l.value&&(t.value=n,i.web3.nftLoad[e]=n),T.value=!1}),O(()=>y.nftId,async function(a){var e;if(l.value=a,t.value=null,console.log("w",a,x.value,i.web3.nftLoad[a]),!x.value&&!i.web3.nftLoad[a]){const n=parseInt(l.value);console.log("*startSearch");const m=await _(n);m.id&&m.id===l.value&&(t.value=m,i.web3.nftLoad[n]=m),console.log("* meta",t.value,{data:m})}i.web3.nftLoad[a],((e=i.web3.nftLoad[a])==null?void 0:e.id)===a&&(t.value=i.web3.nftLoad[a])}),ne(async()=>{const a=parseInt(l.value),e=await _(a);console.log({resp:e,idAuxiliar:a},l.value),e&&l&&e.id&&e.id===l.value&&i.web3.nftLoad[a]&&(t.value=e,i.web3.nftLoad[a]=e),e&&!i.web3.nftLoad[l.value]&&(t.value=e,i.web3.nftLoad[l.value]=e)}),u({upReward:T,nftId:l,existInLoad:x,mainStore:i,getBgNft:K,getLinkNftScan:s,moseMoveInCard:Q,toClaim:H,loadRedresh:d,toRefresh:Y,showModalSedNft:h,toSend:q,toTransferNFT:X,Popper:F,toVault:f,showDetails:r,getProperties:A,titleFormat:E}),(a,e)=>{var n,m,R,V,Z;return v(),g(U,null,[o("div",{class:C({"nft-item":!0,"loader-bg":!x.value}),style:ce(K.value),onMousemove:Q},[o("div",xe,[o("a",{href:I(s)(l.value),target:"_blank"},[W("# "+L(l.value)+" ",1),P(I(F),{content:a.$t("general.titles.examine_on_polygonscan"),arrow:!0,hover:!0},{default:z(()=>e[6]||(e[6]=[o("img",{class:"img-link-polygon",src:fe,alt:"logo matic"},null,-1)])),_:1},8,["content"])],8,Le),P(I(F),{content:a.$t("general.titles.nft_attributes"),arrow:!0,hover:!0},{default:z(()=>[o("i",{class:"fa-solid fa-circle-info icon-info",onClick:e[0]||(e[0]=k=>r.value=!r.value)})]),_:1},8,["content"]),P(I(F),{content:a.$t("general.titles.update_metadata"),arrow:!0,hover:!0},{default:z(()=>[o("img",{src:ge,class:C({"icon-update-meta":!0,"loading-refresh":d.value}),onClick:Y},null,2)]),_:1},8,["content"])]),o("div",{class:C({"details-attributes":!0,active:r.value}),onClick:e[4]||(e[4]=k=>r.value=!r.value)},[o("ul",{onClick:e[3]||(e[3]=k=>r.value=!r.value)},[(v(!0),g(U,null,le(A.value,k=>(v(),g("li",{onClick:e[1]||(e[1]=Re=>r.value=!r.value),class:C({colorEpic:k.type=="Staking"&&k.value>=4,colorEpicRarity:k.value=="epic"})},L(k.type)+" : "+L(k.value),3))),256)),t.value&&((m=(n=t.value)==null?void 0:n.metadata)!=null&&m.name)?(v(),g("li",{key:0,onClick:e[2]||(e[2]=k=>r.value=!r.value)},L(E.value),1)):M("",!0)])],2),o("div",Ie,[P(I(F),{content:a.$t("general.titles.send_nft"),arrow:!0,hover:!0,placement:"top"},{default:z(()=>[o("img",{src:pe,onClick:q})]),_:1},8,["content"])]),t.value&&((V=(R=t.value)==null?void 0:R.metadata)!=null&&V.name)&&!r.value?(v(),g("div",Pe,L(E.value),1)):M("",!0),(Z=t.value)!=null&&Z.reward&&x.value&&!d.value?(v(),g("div",Me,[o("label",{class:C({"nft-number nft-reward-tmine":!0,blink_me:T.value})},[e[7]||(e[7]=o("img",{src:me,alt:"tmine logo",class:"img-logo-tmine"},null,-1)),W(" "+L(t.value.reward)+" TMINE ",1)],2),P(I(F),{content:a.$t("general.titles.claim_tmine"),hover:!0},{default:z(()=>[o("img",{src:we,onClick:H,class:"icon-reward-claim"})]),_:1},8,["content"])])):M("",!0),!x.value||d.value?(v(),g("div",Fe,e[8]||(e[8]=[o("div",{class:"stage"},[o("div",{class:"dot-flashing"})],-1)]))):M("",!0)],38),P(Ne,{show:h.value,idtarget:l.value,onCloseModalSend:e[5]||(e[5]=k=>h.value=!1),onTransferNFT:X,ref_key:"modalSend",ref:G},null,8,["show","idtarget"])],64)}}},$e={key:0,class:"paginator"},Be={class:"slot-btn btn-grid"},Ae={key:1,class:"paginator"},Ee={__name:"ContainerGallery",setup($,{expose:u}){const _=new ve,s=j(),f=w(1),c=w(!1),p=w(null),b=w(5),B=r=>{f.value=r,l()},N=()=>{c.value=!c.value,c.value?b.value=10:b.value=5,d.value=l()},y=D(()=>l().elementosPagina),l=()=>{const r=JSON.parse(JSON.stringify(s.web3.nftTokensIds)),T=_.arrayPaginator(r,b.value,f.value);return p.value=T.totalPaginas,T},d=w(l()),t=()=>{f.value<p.value&&(f.value++,d.value=l()),console.log("nextPage",f.value)};return O(()=>s.web3.nftTokensIds,r=>{r&&(d.value=l())}),u({data:[],mainStore:s,currentPage:d,nextPage:t,nftItemGallery:ae,getCurrentTarget:y,multiGrid14:c,changeToMultigrid:N,Paginator:ee,updatePage:B,amountPerPage:b}),(r,T)=>{var h,i,A;return v(),g(U,null,[o("section",{class:C({content:!0,"multi-grid-14":c.value,lessMinimal:y.value&&((h=y.value)==null?void 0:h.length)&&((i=y.value)==null?void 0:i.length)<=4,"minimal-size":c.value&&((A=y.value)==null?void 0:A.length)<=3})},[(v(!0),g(U,null,le(y.value,E=>(v(),de(ae,{grid:c.value,target:y.value,"nft-id":E},null,8,["grid","target","nft-id"]))),256))],2),d.value&&d.value.paginaActual?(v(),g("section",$e,[o("span",Be,[o("i",{class:C({"fas fa-th icon-grid":!0,active:c.value}),style:{color:"#ffffff"},onClick:N},null,2)]),P(ee,{currentPage:d.value,total:I(s).web3.nftTokensIds.length,amountPerPage:b.value,onUpdate:B},null,8,["currentPage","total","amountPerPage"])])):(v(),g("section",Ae))],64)}}},Oe=te(Ee,[["__scopeId","data-v-51dbabe1"]]);export{Oe as C};
