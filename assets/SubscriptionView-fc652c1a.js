import{_ as d,u as m,r as o,f,a as g,g as v,h as S,p as h,b,d as w}from"./index-6fcddebf.js";import{C as I}from"./ContainerGallery-ee8cac3e.js";import"./Paginator.vue_vue_type_style_index_0_lang-c817803f.js";import"./Tmine2-25d51798.js";import"./Paginator.vue_vue_type_script_setup_true_lang-3fd63541.js";import"./iconify-10f5193a.js";import"./index-27343936.js";const P=e=>(h("data-v-1fda228c"),e=e(),b(),e),x={class:"subscription"},y=P(()=>w("h1",{class:"title"},"Subscription IT'S COMING",-1)),k=[y],C={__name:"SubscriptionView",setup(e,{expose:p}){const _=new S,n=m(),t=o(1),r=o(null),u=o(10),c=()=>{const a=JSON.parse(JSON.stringify(n.web3.nftTokensIds)),s=_.arrayPaginator(a,u.value,t.value);return r.value=s.totalPaginas,console.log({dataFormat:s}),s},l=()=>{t.value<r.value&&(t.value++,i.value=c()),console.log("nextPage",t.value)},i=o(c());return f(()=>n.web3.nftTokensIds,a=>{a&&c()}),p({data:[],mainStore:n,currentPage:i,nextPage:l,ContainerGallery:I}),(a,s)=>(g(),v("main",x,k))}},E=d(C,[["__scopeId","data-v-1fda228c"]]);export{E as default};
