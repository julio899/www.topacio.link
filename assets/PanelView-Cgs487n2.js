import{_ as C,a as x,b as $}from"./ButtomComponent-FPhHProm.js";import{_ as I}from"./Tmine2-DhPnLw4a.js";import{_ as h,u as N,j as T,k as s,a as l,b as r,d as e,t as m,f as g,e as _,l as c,w as y,m as v,o as P,p as A,q as B}from"./index-RFeXDzsh.js";import{C as M}from"./ContainerGallery-BQSsU3vs.js";import"./index-CdQ4Lq61.js";import"./Paginator.vue_vue_type_style_index_0_lang-BVYQghne.js";import"./Paginator.vue_vue_type_script_setup_true_lang-Cek571Bd.js";import"./iconify-m_VYCqw9.js";const E="/img/Tmine2-w.svg",V={key:0,id:"list-options"},W={class:"balance-option"},K={class:"balance-option"},F={class:"lbl-left"},L=["src"],U={key:0},j=["src"],q={class:"balance-option"},D={class:"lbl-left"},G={class:"balance-option btn-tmine-container",style:{padding:"0 1em"}},R={key:0,class:"in-col p-1 li-sort"},z={class:"box-vertical-flex"},H={class:"p-1-lr"},J={__name:"SidebarPanel",setup(S,{expose:k}){const u=v(),t=N(),i=T.useToast(),p=()=>{var a;return(a=t==null?void 0:t.web3)!=null&&a.participantsInSorteo&&t.web3.participantsInSorteo.length==0?[]:t.web3.participantsInSorteo?t.web3.participantsInSorteo.flatMap(o=>o.substring(0,7)+"    ......    "+o.slice(-7)):[]},b=async()=>{var a,o,d,w,f;try{const n=await u.proxy.$w3AddMeToSorteo();console.log({r:n}),i.open({message:"Registro procesado satisfactoriamente.",type:"success",position:"top-right"})}catch(n){console.log({e:n}),n!=null&&n.reason?i.open({message:n.reason,type:"error",position:"top-right"}):(d=(o=(a=n==null?void 0:n.info)==null?void 0:a.error)==null?void 0:o.data)!=null&&d.message&&((f=(w=n==null?void 0:n.info)==null?void 0:w.error)==null?void 0:f.code)==-32603&&i.open({message:$t("general.titles.insufficient_gas"),type:"error",position:"top-right"})}};return k({instance:u,mainStore:t,registerInSorteo:b}),(a,o)=>{const d=C,w=x,f=$;return s(t).connected?(l(),r("ul",V,[e("li",null,[e("div",W,[o[0]||(o[0]=e("span",{class:"lbl-left"}," Total Supply TMINE ",-1)),e("label",null,m(s(t).web3.tmineTotalSupply),1)])]),e("li",null,[e("div",K,[e("span",F,[a.$getConnectedState()&&a.$getImgBlockchain()?(l(),r("img",{key:0,src:a.$getImgBlockchain(),alt:"logo blockchain",width:"25px",height:"25px",class:"icon-blockchain"},null,8,L)):g("",!0),o[1]||(o[1]=_(" BALANCE "))]),e("label",null,m(s(t).web3.balanceFormat),1),s(t).web3.Network?(l(),r("span",U,[s(t).web3.Network.caipNetwork.assets.imageUrl?(l(),r("img",{key:0,src:s(t).web3.Network.caipNetwork.assets.imageUrl,alt:"matic-logo-banance",class:"matic-logo-banance"},null,8,j)):g("",!0),_(" "+m(s(t).web3.Network.caipNetwork.name),1)])):g("",!0)])]),e("li",null,[e("div",q,[e("label",D,m(s(t).web3.tmaineBalanceFormat),1),o[2]||(o[2]=e("span",null,[e("img",{src:E,alt:"tmine-logo-banance",class:"tmine-logo-banance"}),_(" BALANCE TMINE ")],-1))])]),e("li",null,[e("div",G,[c(d,{class:"bnt1",onClick:s(u).proxy.$MultiWalletWeb3.addTmineToWallet},{default:y(()=>[o[3]||(o[3]=e("img",{src:I,class:"tmine-logo-banance"},null,-1)),_(" "+m(a.$t("general.titles.add_tmine")),1)]),_:1},8,["onClick"])])]),s(t).web3.dateNextSorteo&&s(t).web3.dateNextSorteo>999?(l(),r("li",R,[e("div",z,[o[5]||(o[5]=e("span",null,"Proximo Sorteo",-1)),c(w,{dateTarget:s(t).web3.dateNextSorteo},null,8,["dateTarget"]),c(d,{class:"bnt1",onClick:b},{default:y(()=>o[4]||(o[4]=[_("Participar")])),_:1}),c(d,{class:"btn3 p-1 no-cursor"},{default:y(()=>[_("Participantes en dia: "+m(s(t).web3.participantsInSorteo.length),1)]),_:1})])])):g("",!0),e("li",H,[c(f,{title:"Participando para sorteo",items:p(),showKey:!0},null,8,["items"])])])):g("",!0)}}},O=h(J,[["__scopeId","data-v-e0d75f25"]]),Q={key:0,class:"panel-container"},X={key:1},Y={__name:"PanelView",setup(S){const k=N(),u=async()=>{const{address:t,isConnected:i}=A(),{walletProvider:p}=B("eip155");console.log({isConnected:i,walletProvider:p,address:t},"*update")};return P(async()=>{await u()}),(t,i)=>{var p,b;return((b=(p=s(k))==null?void 0:p.web3)==null?void 0:b.connected)===!0?(l(),r("section",Q,[e("aside",null,[c(O)]),e("article",null,[c(M)])])):(l(),r("section",X,i[0]||(i[0]=[e("h1",null,"Necesitas conexion web3",-1)])))}}},lt=h(Y,[["__scopeId","data-v-673ac967"]]);export{lt as default};
