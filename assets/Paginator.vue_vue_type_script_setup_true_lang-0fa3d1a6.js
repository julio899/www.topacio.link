import{I as r}from"./iconify-6f4308af.js";import{z as B,X as h,G as y,j as k,Y as v,U as w,q as b,W as C}from"./index-e216fe0e.js";import{K as L,a as s,c as i,w as a,n as t,l as e,g as m,B as N,F as g,e as f,t as U,m as V}from"./index-cb001ddc.js";const F=L({__name:"Paginator",props:["currentPage","total","amountPerPage"],emits:["update"],setup(l,{expose:p,emit:P}){const o=l,_=P,c=u=>{_("update",u)};return p({currentPage:o.currentPage,updatePage:c,total:o.total,props:o}),(u,j)=>l.currentPage?(s(),i(e(C),{key:0,total:l.total,itemsPerPage:o.amountPerPage,"sibling-count":1,"show-edges":"","default-page":1,"onUpdate:page":c},{default:a(()=>[t(e(b),{class:"PaginationList"},{default:a(({items:x})=>[t(e(B),{class:"Button"},{default:a(()=>[t(e(r),{icon:"radix-icons:double-arrow-left"})]),_:1}),t(e(h),{style:{marginRight:16},class:"Button"},{default:a(()=>[t(e(r),{icon:"radix-icons:chevron-left"})]),_:1}),(s(!0),m(g,null,N(x,(n,d)=>(s(),m(g,null,[n.type==="page"?(s(),i(e(y),{key:d,class:"Button",value:n.value},{default:a(()=>[f(U(n.value),1)]),_:2},1032,["value"])):(s(),i(e(k),{key:n.type,index:d,class:"PaginationEllipsis"},{default:a(()=>[f(" … ")]),_:2},1032,["index"]))],64))),256)),t(e(v),{style:{marginLeft:16},class:"Button"},{default:a(()=>[t(e(r),{icon:"radix-icons:chevron-right"})]),_:1}),t(e(w),{class:"Button"},{default:a(()=>[t(e(r),{icon:"radix-icons:double-arrow-right"})]),_:1})]),_:1})]),_:1},8,["total","itemsPerPage"])):V("",!0)}});export{F as _};
