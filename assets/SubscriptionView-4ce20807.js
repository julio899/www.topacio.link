import{_ as d,u as m,r as o,f,a as g,g as v,h as S,p as h,b,d as w}from"./index-22b8b0c0.js";import{C as I}from"./ContainerGallery-50699c6b.js";import"./Paginator.vue_vue_type_style_index_0_lang-79fff019.js";import"./Tmine2-25d51798.js";import"./Paginator.vue_vue_type_script_setup_true_lang-73028e37.js";import"./iconify-77fdc8de.js";import"./index-5d7c76f6.js";const P=e=>(h("data-v-1fda228c"),e=e(),b(),e),x={class:"subscription"},y=P(()=>w("h1",{class:"title"},"Subscription IT'S COMING",-1)),k=[y],C={__name:"SubscriptionView",setup(e,{expose:p}){const _=new S,n=m(),t=o(1),r=o(null),u=o(10),c=()=>{const a=JSON.parse(JSON.stringify(n.web3.nftTokensIds)),s=_.arrayPaginator(a,u.value,t.value);return r.value=s.totalPaginas,console.log({dataFormat:s}),s},l=()=>{t.value<r.value&&(t.value++,i.value=c()),console.log("nextPage",t.value)},i=o(c());return f(()=>n.web3.nftTokensIds,a=>{a&&c()}),p({data:[],mainStore:n,currentPage:i,nextPage:l,ContainerGallery:I}),(a,s)=>(g(),v("main",x,k))}},E=d(C,[["__scopeId","data-v-1fda228c"]]);export{E as default};
