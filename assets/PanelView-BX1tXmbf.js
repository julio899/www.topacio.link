import{_ as A,a as I,b as M}from"./ButtomComponent-BbD4puDe.js";import{_ as E}from"./Tmine2-DhPnLw4a.js";import{_ as x,u as B,j as S,r as v,k as F,l as a,a as c,b as p,d as s,t as w,f as k,e as f,m as d,w as T,p as V,q as $,S as W,s as q,o as G,v as K,B as L,C as U,x as j}from"./index-DXoDjGXY.js";import{C as z}from"./ContainerGallery-ElGxv12_.js";import"./index-fob6fbA3.js";import"./Paginator.vue_vue_type_style_index_0_lang-bfr-Xhgg.js";import"./Paginator.vue_vue_type_script_setup_true_lang-DIJnf7v7.js";import"./iconify-OLIg8Fjc.js";const D="/img/Tmine2-w.svg",R={key:0,id:"list-options"},H={class:"balance-option"},J={class:"balance-option"},O={class:"lbl-left"},Q=["src"],X={key:0},Y=["src"],Z={class:"balance-option"},ee={class:"lbl-left"},te={class:"balance-option btn-tmine-container",style:{padding:"0 1em"}},se={key:0,class:"in-col p-1 li-sort"},oe={class:"box-vertical-flex"},ae={key:1,style:{padding:"0 1em"}},ne={class:"p-1-lr"},re={__name:"SidebarPanel",setup(P,{expose:r}){const h=$(),e=B(),b=S.useToast(),_=v(!1),g=v(!0),i=F(()=>!!(e.web3&&(e.web3.nftBalance==0||e.web3.nftBalance=="0"))),u=async()=>{_.value||(await e.requestAirdrop(),b.open({message:"Airdrop testnet procesado satisfactoriamente.",type:"success",position:"top-right",timeout:7e3}),W.fire({position:"bottom-end",icon:"success",title:"The Airdrop mint may take a few seconds.⏱️",timerProgressBar:!0,showConfirmButton:!1,timer:2e4}),setTimeout(()=>{g.value=!1},21e3)),_.value=!0},y=()=>{var o;return(o=e==null?void 0:e.web3)!=null&&o.participantsInSorteo&&e.web3.participantsInSorteo.length==0?[]:e.web3.participantsInSorteo?e.web3.participantsInSorteo.flatMap(t=>t.substring(0,7)+"    ......    "+t.slice(-7)):[]},l=async()=>{var o,t,m,C,N;try{const n=await h.proxy.$w3AddMeToSorteo();console.log({r:n}),b.open({message:"Registro procesado satisfactoriamente.",type:"success",position:"top-right"})}catch(n){console.log({e:n}),n!=null&&n.reason?b.open({message:n.reason,type:"error",position:"top-right"}):(m=(t=(o=n==null?void 0:n.info)==null?void 0:o.error)==null?void 0:t.data)!=null&&m.message&&((N=(C=n==null?void 0:n.info)==null?void 0:C.error)==null?void 0:N.code)==-32603&&b.open({message:$t("general.titles.insufficient_gas"),type:"error",position:"top-right"})}};return r({instance:h,mainStore:e,registerInSorteo:l,airdrop:u,clickedAirdrop:_,enabledAirdrop:i}),(o,t)=>{const m=A,C=I,N=M;return a(e).connected?(c(),p("ul",R,[s("li",null,[s("div",H,[t[0]||(t[0]=s("span",{class:"lbl-left"}," Total Supply TMINE ",-1)),s("label",null,w(a(e).web3.tmineTotalSupply),1)])]),s("li",null,[s("div",J,[s("span",O,[o.$getConnectedState()&&o.$getImgBlockchain()?(c(),p("img",{key:0,src:o.$getImgBlockchain(),alt:"logo blockchain",width:"25px",height:"25px",class:"icon-blockchain"},null,8,Q)):k("",!0),t[1]||(t[1]=f(" BALANCE "))]),s("label",null,w(a(e).web3.balanceFormat),1),a(e).web3.Network?(c(),p("span",X,[a(e).web3.Network.caipNetwork.assets.imageUrl?(c(),p("img",{key:0,src:a(e).web3.Network.caipNetwork.assets.imageUrl,alt:"matic-logo-banance",class:"matic-logo-banance"},null,8,Y)):k("",!0),f(" "+w(a(e).web3.Network.caipNetwork.name),1)])):k("",!0)])]),s("li",null,[s("div",Z,[s("label",ee,w(a(e).web3.tmaineBalanceFormat),1),t[2]||(t[2]=s("span",null,[s("img",{src:D,alt:"tmine-logo-banance",class:"tmine-logo-banance"}),f(" BALANCE TMINE ")],-1))])]),s("li",null,[s("div",te,[d(m,{class:"bnt1",onClick:a(h).proxy.$MultiWalletWeb3.addTmineToWallet},{default:T(()=>[t[3]||(t[3]=s("img",{src:E,class:"tmine-logo-banance"},null,-1)),f(" "+w(o.$t("general.titles.add_tmine")),1)]),_:1},8,["onClick"])])]),a(e).web3.dateNextSorteo&&a(e).web3.dateNextSorteo>999?(c(),p("li",se,[s("div",oe,[t[5]||(t[5]=s("span",null,"Proximo Sorteo",-1)),d(C,{dateTarget:a(e).web3.dateNextSorteo},null,8,["dateTarget"]),d(m,{class:"bnt1",onClick:l},{default:T(()=>t[4]||(t[4]=[f("Participar")])),_:1}),d(m,{class:"btn3 p-1 no-cursor"},{default:T(()=>[f("Participantes en dia: "+w(a(e).web3.participantsInSorteo.length),1)]),_:1})])])):k("",!0),g.value&&i.value?(c(),p("li",ae,[d(m,{class:V({airdroptBtn:!0,bnt1:!0,clicked:_.value}),onClick:u},{default:T(()=>t[6]||(t[6]=[f(" Get Airdrop "),s("img",{class:"button-hat",src:"https://assets.codepen.io/4175254/santa-hat-test-9.png",alt:""},null,-1)])),_:1},8,["class"])])):k("",!0),s("li",ne,[d(N,{title:"Participando para sorteo",items:y(),showKey:!0},null,8,["items"])])])):k("",!0)}}},ie=x(re,[["__scopeId","data-v-985032a4"]]),le={key:0,class:"panel-container"},ce={key:1},pe={__name:"PanelView",setup(P){const r=B(),h="0x7E375Febac53d9B854e24019d7bc3bA6dFFCBc3E",e=$(),{t:b}=q(),_=S.useToast();return G(async()=>{var g,i;if((g=r==null?void 0:r.web3)!=null&&g.nftContract){const{walletProvider:u}=K("eip155"),l=await new L(u).getSigner(),o=new U(h,j,l);console.log("signer",{signer:l,NftContract:o,instance:e},r.web3.walletName),((i=r==null?void 0:r.web3)==null?void 0:i.walletName)==="MetaMask"&&(o.on("NewMint",t=>{console.log("NewMint",{w:t}),(l==null?void 0:l.address)==t&&(confetti({particleCount:100,spread:180,scalar:.8}),setTimeout(function(){confetti({particleCount:150,spread:180,scalar:.5,shapes:[confetti.shapeFromText({text:"💎",scalar:1.25})]})},250),setTimeout(function(){confetti({particleCount:150,spread:180,scalar:.5})},500),_.open({message:b("general.success.airdrop_completed"),type:"success",position:"top-left"}),e.appContext.config.globalProperties.$refreshTokens())}),o.on("Transfer",t=>{console.log("Transfer",{e:t}),e.appContext.config.globalProperties.$refreshTokens()}))}}),(g,i)=>{var u,y;return((y=(u=a(r))==null?void 0:u.web3)==null?void 0:y.connected)===!0?(c(),p("section",le,[s("aside",null,[d(ie)]),s("article",null,[d(z)])])):(c(),p("section",ce,i[0]||(i[0]=[s("h1",null,"Necesitas conexion web3",-1)])))}}},ke=x(pe,[["__scopeId","data-v-084e99f1"]]);export{ke as default};
