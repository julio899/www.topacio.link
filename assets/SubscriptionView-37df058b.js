import{_ as d,u as f,r as o,f as g,a as m,g as v,h as S,p as h,b,d as w}from"./index-4d4615af.js";import{C as I}from"./ContainerGallery-6b2d7fdc.js";import"./Paginator.vue_vue_type_style_index_0_lang-c6214b91.js";import"./Tmine2-25d51798.js";import"./Paginator.vue_vue_type_script_setup_true_lang-079b0d90.js";const P=e=>(h("data-v-1fda228c"),e=e(),b(),e),x={class:"subscription"},y=P(()=>w("h1",{class:"title"},"Subscription IT'S COMING",-1)),k=[y],C={__name:"SubscriptionView",setup(e,{expose:p}){const _=new S,n=f(),a=o(1),r=o(null),u=o(10),c=()=>{const t=JSON.parse(JSON.stringify(n.web3.nftTokensIds)),s=_.arrayPaginator(t,u.value,a.value);return r.value=s.totalPaginas,console.log({dataFormat:s}),s},l=()=>{a.value<r.value&&(a.value++,i.value=c()),console.log("nextPage",a.value)},i=o(c());return g(()=>n.web3.nftTokensIds,t=>{t&&c()}),p({data:[],mainStore:n,currentPage:i,nextPage:l,ContainerGallery:I}),(t,s)=>(m(),v("main",x,k))}},G=d(C,[["__scopeId","data-v-1fda228c"]]);export{G as default};
