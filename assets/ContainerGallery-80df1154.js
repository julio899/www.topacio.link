import{m as ee,C as N,n as D,q as j,i as S,_ as Y,s as te,r as w,u as U,v as ne,o as Q,a as p,g as f,d as i,e as R,t as x,k as C,x as Z,y as ae,z as A,S as W,A as se,p as oe,b as ie,B as z,f as V,j as le,D as re,E as ue,F as E,G as ce,H,c as de,h as pe}from"./index-d8383364.js";const J=[{inputs:[{internalType:"address",name:"_nft_contract",type:"address"},{internalType:"address",name:"_tmine_token",type:"address"}],stateMutability:"payable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"",type:"address"}],name:"CraftingNftEpic",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[],name:"amounts_nfts",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256[]",name:"_ids_nft",type:"uint256[]"}],name:"crafting",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"fee_tmine",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_idNFT",type:"uint256"}],name:"isOwnerNFT",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"nfts_burned",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"nfts_epic",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_active",type:"bool"}],name:"updateActivation",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint8",name:"_amount",type:"uint8"}],name:"updateAmountsNeeded",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_fee",type:"uint256"}],name:"updateFee",outputs:[],stateMutability:"nonpayable",type:"function"}],fe="/img/polygon-matic-logo.svg",me="/img/update-meta.svg",ve="/img/fly-svgrepo-com.svg",ge="/img/Tmine2.svg",ye="/img/claim_.svg",K="0xA265F936538D74Ecb1484576810D6d360b974cCd",G="0x3Eb30097eA45107e31612b0C60d90FBB064d8C61",B="0x9B2F9E0a7152C0B87E25c27c7Bb9dF15828B43D5",_e=ee("user",{state(){return{wallet:"",balance:0,balanceTmine:0,supplyTmine:0,nftsBalance:0,nftsHoldersAmount:0,nftsTotalSupply:0,feeTmineCrafting:0,amountNftForCrafting:0,amountTmineApproveForCrafting:0,isApproveCrafting:!1,nfts:[],provider:null,signerInternal:null,network:null,contractNfts:null,contractTmineStakingNativo:null}},getters:{getWallet(t){return t.wallet},getBalance(t){return t.balance},getTmineBalance(t){return t.balanceTmine},getSupplyTmine(t){return t.supplyTmine},getNftsTotalSupply(t){return t.nftsTotalSupply},getNftsHoldersAmount(t){return t.nftsHoldersAmount},getNfts(t){return t.nfts},getFeeTmineCrafting(t){return t.feeTmineCrafting},getAmountNftForCrafting(t){return t.amountNftForCrafting},getAmountTmineApproveForCrafting(t){return t.amountTmineApproveForCrafting},getIsApproveCrafting(t){return t.isApproveCrafting}},methods:{},actions:{async searchTmineBalance(){const l=await(window.ethereum?new(void 0).Web3Provider(window.ethereum):null).getSigner(),m=new N(G,D,l),a=await m.allowance(this.wallet,B);this.amountTmineApproveForCrafting=await(void 0).formatEther(a);const r=await m.balanceOf(this.wallet).then(c=>c.toString());this.balanceTmine=await(void 0).formatEther(r),console.log("searchTmineBalance * ",this.balanceTmine)},async searchTmineApprove(){const l=await(window.ethereum?new(void 0).Web3Provider(window.ethereum):null).getSigner(),a=await new N(G,D,l).allowance(this.wallet,B);this.amountTmineApproveForCrafting=await(void 0).formatEther(a),console.log("searchTmineApprove * ",this.amountTmineApproveForCrafting)},async syncCrafting(){const l=await(window.ethereum?new(void 0).Web3Provider(window.ethereum):null).getSigner();let m=new N(K,j,l);const a=new N(G,D,l),r=new N(B,J,l);this.isApproveCrafting=await m.isApprovedForAll(this.wallet,B),this.feeTmineCrafting==0&&(this.feeTmineCrafting=await(void 0).formatEther(await r.fee_tmine())),this.amountNftForCrafting==0&&(this.amountNftForCrafting=await r.amounts_nfts());const c=await a.allowance(this.wallet,B);this.amountTmineApproveForCrafting=await(void 0).formatEther(c),console.log("*syncCrafting")},async syncData(){try{var t=window.ethereum?new(void 0).Web3Provider(window.ethereum):null;const m=await t.getSigner();this.provider||(this.provider=window.ethereum?new(void 0).Web3Provider(window.ethereum):null),this.provider&&(this.wallet=await this.provider.send("eth_requestAccounts",[]).then(v=>v[0]),this.signerInternal=await this.provider.getSigner());const a=new N(G,D,m),r=new N(B,J,m);if(this.provider&&this.signerInternal&&!this.contractNfts){var l=new N(K,j,m);l&&(this.nftsHoldersAmount=await l.getHoldersCount().then(v=>v.toNumber()),this.nftsBalance=await l.balanceOf(this.wallet).then(v=>v.toNumber()),this.nftsTotalSupply=await l.totalSupply().then(v=>v.toNumber()))}const c=await a.balanceOf(this.wallet).then(v=>v.toString());this.balanceTmine=await(void 0).formatEther(c),this.supplyTmine=await a.totalSupply().then(v=>(void 0).formatEther(v.toString()));const g=await t.getBalance(this.wallet);this.balance=await(void 0).formatEther(await g.toString()),console.log("*syncData")}catch(m){console.log({e:m})}}}});const we=S("transferNFT"),he={name:"SendNFT",props:["show","idtarget"],emits:["closeModalSend"],setup(t,{emit:l}){const{show:m,idtarget:a}=te(t),r=w(!1),c=w(""),g=U();_e(),ne(()=>{c.value="",r.value=!1}),Q(()=>{r.value=!1,c.value="",console.log({transferNFT:we})});const v=()=>{c.value="",r.value=!1,l("closeModalSend",!0)};return{store:g,show:m,closeModal:v,confirmSend:async()=>{r.value=!0;const h=c.value.toString().trim().replaceAll("	",""),s=W.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:d=>{d.addEventListener("mouseenter",W.stopTimer),d.addEventListener("mouseleave",W.resumeTimer)}});if(!se(h))return r.value=!1,v(),s.fire({icon:"error",title:"Wallet is no valid"});const o=a.value;l("transferNFT",{w:h,id:o})},loading:r,wallet:c}}},q=t=>(oe("data-v-1314bbb8"),t=t(),ie(),t),be={class:"modal-container"},Te={class:"Cabecera"},Ce={class:"Contenido"},ke={key:0,class:"loader-interno"},Ne={key:1,class:"group"},Se=q(()=>i("span",{class:"highlight"},null,-1)),Ae=q(()=>i("span",{class:"bar"},null,-1)),Fe=q(()=>i("label",null,"Wallet destine",-1)),xe={class:"Bootonera"};function Ie(t,l,m,a,r,c){return p(),f("section",{class:A({"modal-t":!0,"show-modal":a.show,"hide-modal":!a.show})},[i("div",be,[i("div",Te,[R(" SEND NFT 🔖 "+x(m.idtarget)+" ",1),i("button",{class:"close",onClick:l[0]||(l[0]=(...g)=>a.closeModal&&a.closeModal(...g))},"✖")]),i("div",Ce,[a.loading?(p(),f("div",ke)):C("",!0),a.loading?C("",!0):(p(),f("div",Ne,[Z(i("input",{type:"text","onUpdate:modelValue":l[1]||(l[1]=g=>a.wallet=g),required:""},null,512),[[ae,a.wallet]]),Se,Ae,Fe]))]),i("div",xe,[a.loading?C("",!0):(p(),f("span",{key:0,class:"btn-send",onClick:l[2]||(l[2]=(...g)=>a.confirmSend&&a.confirmSend(...g))},"CONFIRM"))])])],2)}const Me=Y(he,[["render",Ie],["__scopeId","data-v-1314bbb8"]]);const Pe={class:"header-card"},Be={class:"nft-number"},Ee=["href"],Le=i("img",{src:fe,alt:"logo matic"},null,-1),Oe={key:0,class:"footer-card"},$e={class:"nft-number nft-reward-tmine"},De=i("img",{src:ge,alt:"tmine logo",class:"img-logo-tmine"},null,-1),Ge={key:1,class:"snippet","data-title":"dot-flashing"},Re=i("div",{class:"stage"},[i("div",{class:"dot-flashing"})],-1),We=[Re],X={__name:"nftItemGallery",props:["nftId"],setup(t,{expose:l}){const m=t,a=S("getDataNFT"),r=S("getLinkNftScan"),c=S("syncBalance"),g=S("syncTmineBalance"),v=S("claimReward"),I=S("transferNFT"),h=S("refreshTokens"),s=w(m.nftId),o=w(!1),d=w(null),M=w(null),F=w(!1),y=U(),b=()=>{F.value=!0},P=async({w:e,id:n})=>{console.log("toTransferNFT",{w:e,id:n});const u=await I(e,n);await c(),await g(),await h(),console.log({modalSend:M,resp:u}),!(u!=null&&u.blockNumber)||u===null?M.value.loading=!1:F.value=!1},$=async()=>{o.value=!0;const e=parseInt(s.value),n=await a(e);n.id&&n.id===s.value&&(d.value=n,y.web3.nftLoad[e]=n),await c(),await g(),setTimeout(()=>{o.value=!1},2e3)},T=z(()=>{const e=parseInt(s.value);return y.web3.nftLoad[e]!==void 0}),L=async()=>{const e=parseInt(s.value);if(await v(e)===!0){await c(),await g(),console.log("* toClaim ok");const u=await a(e);u.id&&u.id===s.value&&(d.value=u,y.web3.nftLoad[e]=u)}},O=z(()=>{var n,u;const e=parseInt(s.value);return y.web3.nftLoad[e]!==void 0&&((u=(n=d==null?void 0:d.value)==null?void 0:n.metadata)!=null&&u.image)?`
	--crt:#fff;
    background-image: url(${d.value.metadata.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 130% 100%;`:""}),_=e=>{const n=e.target,u=e.pageX-n.offsetLeft,k=e.pageY-n.offsetTop;n.style.setProperty("--x",u+"px"),n.style.setProperty("--y",k+"px")};return V(T,async e=>{if(e&&(console.log(e,"*existInLoad",y.web3.nftLoad[s.value]!==void 0,s.value,d.value),e&&!d.value)){const n=parseInt(s.value),u=await a(n);u.id&&u.id===s.value&&(d.value=u),console.log({resp:u})}}),V(()=>m.nftId,async function(e){var n;if(s.value=e,d.value=null,console.log("w",e,T.value,y.web3.nftLoad[e]),!T.value&&!y.web3.nftLoad[e]){const u=parseInt(s.value);console.log("*startSearch");const k=await a(u);k.id&&k.id===s.value&&(d.value=k,y.web3.nftLoad[u]=k),console.log("* meta",d.value,{data:k})}y.web3.nftLoad[e],((n=y.web3.nftLoad[e])==null?void 0:n.id)===e&&(d.value=y.web3.nftLoad[e])}),Q(async()=>{const e=parseInt(s.value),n=await a(e);n.id&&n.id===s.value&&(d.value=n,y.web3.nftLoad[e]=n),n&&!y.web3.nftLoad[s.value]&&(d.value=n,y.web3.nftLoad[s.value]=n)}),l({nftId:s,existInLoad:T,mainStore:y,getBgNft:O,getLinkNftScan:r,moseMoveInCard:_,toClaim:L,loadRedresh:o,toRefresh:$,showModalSedNft:F,toSend:b,toTransferNFT:P}),(e,n)=>{var u;return p(),f(E,null,[i("div",{class:A({"nft-item":!0,"loader-bg":!T.value}),style:re(O.value),onMousemove:_},[i("div",Pe,[i("label",Be,[i("a",{href:le(r)(s.value),target:"_blank"},[R("# "+x(s.value)+" ",1),Le],8,Ee)]),i("img",{src:me,class:A({"icon-update-meta":!0,"loading-refresh":o.value}),onClick:$},null,2)]),i("div",{class:"content-card"},[i("img",{src:ve,onClick:b})]),(u=d.value)!=null&&u.reward&&T.value&&!o.value?(p(),f("div",Oe,[i("label",$e,[De,R(" "+x(d.value.reward)+" TMINE ",1)]),i("img",{src:ye,onClick:L,class:"icon-reward-claim"})])):C("",!0),!T.value||o.value?(p(),f("div",Ge,We)):C("",!0)],38),ue(Me,{show:F.value,idtarget:s.value,onCloseModalSend:n[0]||(n[0]=k=>F.value=!1),onTransferNFT:P,ref_key:"modalSend",ref:M},null,8,["show","idtarget"])],64)}}};const He={key:0,class:"paginator"},ze={key:0,class:"slot-btn"},Ve={key:1,class:"slot-btn"},Ue={class:"lbl-page"},qe={key:0},je=["onClick"],Je={class:"txt-pages"},Ke={key:1},Xe=["onClick"],Ye={key:2,class:"slot-btn _left"},Qe={key:3,class:"slot-btn empty"},Ze={key:1,class:"paginator"},et={__name:"ContainerGallery",setup(t,{expose:l}){const m=new pe,a=U(),r=w(1),c=w(!1),g=w(null),v=w(5),I=()=>{c.value=!c.value,c.value?v.value=14:v.value=5,o.value=s()},h=z(()=>s().elementosPagina),s=()=>{const b=JSON.parse(JSON.stringify(a.web3.nftTokensIds)),P=m.arrayPaginator(b,v.value,r.value);return g.value=P.totalPaginas,P},o=w(s()),d=b=>{r.value=parseInt(b),o.value=s(),console.log("toPage",r.value)},M=()=>{r.value<g.value&&(r.value++,o.value=s()),console.log("nextPage",r.value)},F=()=>{r.value>1&&(r.value--,o.value=s()),console.log("previusPage",r.value)};return V(()=>a.web3.nftTokensIds,b=>{b&&(o.value=s())}),l({data:[],mainStore:a,currentPage:o,nextPage:M,nftItemGallery:X,getCurrentTarget:h,multiGrid14:c,changeToMultigrid:I}),(b,P)=>{var T,L,O;const $=ce("key");return p(),f(E,null,[i("section",{class:A({content:!0,"multi-grid-14":c.value,lessMinimal:h.value&&((T=h.value)==null?void 0:T.length)&&((L=h.value)==null?void 0:L.length)<=4,"minimal-size":c.value&&((O=h.value)==null?void 0:O.length)<=3})},[(p(!0),f(E,null,H(h.value,(_,e)=>(p(),de(X,{"nft-id":_,"v-key":e},null,8,["nft-id","v-key"]))),256))],2),o.value&&o.value.paginaActual?(p(),f("section",He,[o.value.paginaActual>1?(p(),f("span",ze,[i("i",{class:A({"fas fa-th icon-grid":!0,active:c.value}),style:{color:"#ffffff"},onClick:I},null,2),i("button",{class:"btn btn-secundary",onClick:F},"previus")])):C("",!0),o.value.paginaActual==1?(p(),f("span",Ve,[i("i",{class:A({"fas fa-th icon-grid":!0,active:c.value}),style:{color:"#ffffff"},onClick:I},null,2)])):C("",!0),i("label",Ue,[o.value.totalPaginas>2?(p(),f("div",qe,[(p(),f(E,null,H(3,(_,e)=>Z(i("button",{class:A({"btn-pag":!0,active:o.value.paginaActual===_}),onClick:n=>d(_)},[R(x(_),1)],10,je),[[$,e]])),64))])):C("",!0),i("div",Je," page "+x(o.value.paginaActual)+" de "+x(o.value.totalPaginas),1),o.value.totalPaginas>=10?(p(),f("div",Ke,[(p(!0),f(E,null,H(o.value.totalPaginas,(_,e)=>(p(),f(E,null,[e&&o.value.totalPaginas>3&&e>=o.value.totalPaginas-3?(p(),f("button",{key:0,class:A({"btn-pag":!0,active:o.value.paginaActual===_}),onClick:n=>d(_)},x(_),11,Xe)):C("",!0)],64))),256))])):C("",!0)]),o.value.totalPaginas!==o.value.paginaActual?(p(),f("span",Ye,[i("button",{class:"btn btn-primary",onClick:M},"next")])):(p(),f("span",Qe))])):(p(),f("section",Ze))],64)}}},nt=Y(et,[["__scopeId","data-v-db607000"]]);export{nt as C};
