import{l as x,r as _,u as G,m as T,f as N,o as F,a as o,g as c,d as i,i as z,e as S,t as b,n as m,j as y,q as R,_ as V,s as j,F as I,v as $,c as E,x as J,h as O}from"./index-c890f9c4.js";const q="/img/polygon-matic-logo.svg",U="/img/update-meta.svg",X="/img/Tmine2.svg",Y="/img/claim_.svg";const H={class:"header-card"},K={class:"nft-number"},Q=["href"],W=i("img",{src:q,alt:"logo matic"},null,-1),Z={key:0,class:"footer-card"},aa={class:"nft-number nft-reward-tmine"},ea=i("img",{src:X,alt:"tmine logo",class:"img-logo-tmine"},null,-1),ta={key:1,class:"snippet","data-title":"dot-flashing"},na=i("div",{class:"stage"},[i("div",{class:"dot-flashing"})],-1),sa=[na],M={__name:"nftItemGallery",props:["nftId"],setup(B,{expose:L}){const P=B,f=x("getDataNFT"),r=x("getLinkNftScan"),d=x("syncBalance"),h=x("syncTmineBalance"),k=x("claimReward"),l=_(P.nftId),u=_(!1),s=_(null),a=G(),w=async()=>{u.value=!0;const e=parseInt(l.value),n=await f(e);n.id&&n.id===l.value&&(s.value=n,a.web3.nftLoad[e]=n),await d(),await h(),setTimeout(()=>{u.value=!1},2e3)},v=T(()=>{const e=parseInt(l.value);return a.web3.nftLoad[e]!==void 0}),C=async()=>{const e=parseInt(l.value);if(await k(e)===!0){await d(),await h(),console.log("* toClaim ok");const t=await f(e);t.id&&t.id===l.value&&(s.value=t,a.web3.nftLoad[e]=t)}},A=T(()=>{var n,t;const e=parseInt(l.value);return a.web3.nftLoad[e]!==void 0&&((t=(n=s==null?void 0:s.value)==null?void 0:n.metadata)!=null&&t.image)?`
	--crt:#fff;
    background-image: url(${s.value.metadata.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 130% 100%;`:""}),g=e=>{const n=e.target,t=e.pageX-n.offsetLeft,p=e.pageY-n.offsetTop;n.style.setProperty("--x",t+"px"),n.style.setProperty("--y",p+"px")};return N(v,async e=>{if(e&&(console.log(e,"*existInLoad",a.web3.nftLoad[l.value]!==void 0,l.value,s.value),e&&!s.value)){const n=parseInt(l.value),t=await f(n);t.id&&t.id===l.value&&(s.value=t),console.log({resp:t})}}),N(()=>P.nftId,async function(e){if(l.value=e,s.value=null,console.log("w",e,v.value,a.web3.nftLoad[e]),!v.value&&!a.web3.nftLoad[e]){const n=parseInt(l.value);console.log("*startSearch");const t=await f(n);t.id&&t.id===l.value&&(s.value=t,a.web3.nftLoad[n]=t),console.log("* meta",s.value,{data:t})}a.web3.nftLoad[e],a.web3.nftLoad[e].id===e&&(s.value=a.web3.nftLoad[e])}),F(async()=>{const e=parseInt(l.value),n=await f(e);n.id&&n.id===l.value&&(s.value=n,a.web3.nftLoad[e]=n),n&&!a.web3.nftLoad[l.value]&&(s.value=n,a.web3.nftLoad[l.value]=n)}),L({nftId:l,existInLoad:v,mainStore:a,getBgNft:A,getLinkNftScan:r,moseMoveInCard:g,toClaim:C,loadRedresh:u,toRefresh:w}),(e,n)=>{var t;return o(),c("div",{class:m({"nft-item":!0,"loader-bg":!v.value}),style:R(A.value),onMousemove:g},[i("div",H,[i("label",K,[i("a",{href:z(r)(l.value),target:"_blank"},[S("# "+b(l.value)+" ",1),W],8,Q)]),i("img",{src:U,class:m({"icon-update-meta":!0,"loading-refresh":u.value}),onClick:w},null,2)]),(t=s.value)!=null&&t.reward&&v.value&&!u.value?(o(),c("div",Z,[i("label",aa,[ea,S(" "+b(s.value.reward)+" TMINE ",1)]),i("img",{src:Y,onClick:C,class:"icon-reward-claim"})])):y("",!0),!v.value||u.value?(o(),c("div",ta,sa)):y("",!0)],38)}}};const la={key:0,class:"paginator"},oa={key:0,class:"slot-btn"},ia={key:1,class:"slot-btn"},ca={class:"lbl-page"},ua={key:0},ra=["onClick"],da={class:"txt-pages"},va={key:1},ga=["onClick"],fa={key:2,class:"slot-btn _left"},_a={key:3,class:"slot-btn empty"},pa={key:1,class:"paginator"},ma={__name:"ContainerGallery",setup(B,{expose:L}){const P=new O,f=G(),r=_(1),d=_(!1),h=_(null),k=_(5),l=()=>{d.value=!d.value,d.value?k.value=14:k.value=5,a.value=s()},u=T(()=>s().elementosPagina),s=()=>{const g=JSON.parse(JSON.stringify(f.web3.nftTokensIds)),e=P.arrayPaginator(g,k.value,r.value);return h.value=e.totalPaginas,e},a=_(s()),w=g=>{r.value=parseInt(g),a.value=s(),console.log("toPage",r.value)},v=()=>{r.value<h.value&&(r.value++,a.value=s()),console.log("nextPage",r.value)},C=()=>{r.value>1&&(r.value--,a.value=s()),console.log("previusPage",r.value)};return N(()=>f.web3.nftTokensIds,g=>{g&&(a.value=s())}),L({data:[],mainStore:f,currentPage:a,nextPage:v,nftItemGallery:M,getCurrentTarget:u,multiGrid14:d,changeToMultigrid:l}),(g,e)=>{const n=j("key");return o(),c(I,null,[i("section",{class:m({content:!0,"multi-grid-14":d.value,lessMinimal:u.value&&u.value.length&&u.value.length<=4,"minimal-size":d.value&&u.value.length<=3})},[(o(!0),c(I,null,$(u.value,(t,p)=>(o(),E(M,{"nft-id":t,"v-key":p},null,8,["nft-id","v-key"]))),256))],2),a.value&&a.value.paginaActual?(o(),c("section",la,[a.value.paginaActual>1?(o(),c("span",oa,[i("i",{class:m({"fas fa-th icon-grid":!0,active:d.value}),style:{color:"#ffffff"},onClick:l},null,2),i("button",{class:"btn btn-secundary",onClick:C},"previus")])):y("",!0),a.value.paginaActual==1?(o(),c("span",ia,[i("i",{class:m({"fas fa-th icon-grid":!0,active:d.value}),style:{color:"#ffffff"},onClick:l},null,2)])):y("",!0),i("label",ca,[a.value.totalPaginas>2?(o(),c("div",ua,[(o(),c(I,null,$(3,(t,p)=>J(i("button",{class:m({"btn-pag":!0,active:a.value.paginaActual===t}),onClick:D=>w(t)},[S(b(t),1)],10,ra),[[n,p]])),64))])):y("",!0),i("div",da," page "+b(a.value.paginaActual)+" de "+b(a.value.totalPaginas),1),a.value.totalPaginas>=10?(o(),c("div",va,[(o(!0),c(I,null,$(a.value.totalPaginas,(t,p)=>(o(),c(I,null,[a.value.totalPaginas>3&&p>=a.value.totalPaginas-3?(o(),c("button",{key:0,class:m({"btn-pag":!0,active:a.value.paginaActual===t}),onClick:D=>w(t)},b(t),11,ga)):y("",!0)],64))),256))])):y("",!0)]),a.value.totalPaginas!==a.value.paginaActual?(o(),c("span",fa,[i("button",{class:"btn btn-primary",onClick:v},"next")])):(o(),c("span",_a))])):(o(),c("section",pa))],64)}}},ba=V(ma,[["__scopeId","data-v-1974534a"]]);export{ba as C};