import{_ as m,u as d,r as s,h as g,b as _,d as f,a as v,i as P}from"./index-BTi2u3KS.js";import{C as S}from"./ContainerGallery-C6LTqgqf.js";import"./Paginator.vue_vue_type_style_index_0_lang-RkXuMDgd.js";import"./Tmine2-DhPnLw4a.js";import"./Paginator.vue_vue_type_script_setup_true_lang-D2QZP-gY.js";import"./iconify-DMfq0vf5.js";import"./index-C3IciF94.js";const b={class:"subscription"},w={__name:"SubscriptionView",setup(x,{expose:c}){const l=new P,o=d(),t=s(1),r=s(null),u=s(10),n=()=>{const e=JSON.parse(JSON.stringify(o.web3.nftTokensIds)),a=l.arrayPaginator(e,u.value,t.value);return r.value=a.totalPaginas,console.log({dataFormat:a}),a},p=()=>{t.value<r.value&&(t.value++,i.value=n()),console.log("nextPage",t.value)},i=s(n());return g(()=>o.web3.nftTokensIds,e=>{e&&n()}),c({data:[],mainStore:o,currentPage:i,nextPage:p,ContainerGallery:S}),(e,a)=>(v(),_("main",b,a[0]||(a[0]=[f("h1",{class:"title"},"Subscription IT'S COMING",-1)])))}},O=m(w,[["__scopeId","data-v-55cdaa76"]]);export{O as default};
