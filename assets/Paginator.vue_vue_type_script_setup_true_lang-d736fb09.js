import{W as x,I as r,G as h,U as y,H as B,q as k,j as v,z as w,N}from"./Paginator.vue_vue_type_style_index_0_lang-76517c4b.js";import{P as C,a as s,c,w as t,m as a,k as e,g,C as b,F as m,e as f,t as L,l as U}from"./index-59dd1e42.js";const z=C({__name:"Paginator",props:["currentPage","total","amountPerPage"],emits:["update"],setup(l,{expose:P,emit:p}){const o=l,u=i=>{p("update",i)};return P({currentPage:o.currentPage,updatePage:u,total:o.total,props:o}),(i,V)=>l.currentPage?(s(),c(e(N),{key:0,total:l.total,itemsPerPage:o.amountPerPage,"sibling-count":1,"show-edges":"","default-page":1,"onUpdate:page":u},{default:t(()=>[a(e(w),{class:"PaginationList"},{default:t(({items:_})=>[a(e(x),{class:"Button"},{default:t(()=>[a(e(r),{icon:"radix-icons:double-arrow-left"})]),_:1}),a(e(h),{style:{marginRight:16},class:"Button"},{default:t(()=>[a(e(r),{icon:"radix-icons:chevron-left"})]),_:1}),(s(!0),g(m,null,b(_,(n,d)=>(s(),g(m,null,[n.type==="page"?(s(),c(e(y),{key:d,class:"Button",value:n.value},{default:t(()=>[f(L(n.value),1)]),_:2},1032,["value"])):(s(),c(e(B),{key:n.type,index:d,class:"PaginationEllipsis"},{default:t(()=>[f(" … ")]),_:2},1032,["index"]))],64))),256)),a(e(k),{style:{marginLeft:16},class:"Button"},{default:t(()=>[a(e(r),{icon:"radix-icons:chevron-right"})]),_:1}),a(e(v),{class:"Button"},{default:t(()=>[a(e(r),{icon:"radix-icons:double-arrow-right"})]),_:1})]),_:1})]),_:1},8,["total","itemsPerPage"])):U("",!0)}});export{z as _};
