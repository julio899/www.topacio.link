import{I as r}from"./iconify-bc2d563b.js";import{F as x,H as B,z as y,V as k,K as v,L as w,N as L,M as N}from"./index-972ceacc.js";import{K as V,a as s,c as i,w as a,n as t,l as e,g as m,B as F,F as g,e as f,t as b,m as C}from"./index-dd6b3ff9.js";const I=V({__name:"Paginator",props:["currentPage","total","amountPerPage"],emits:["update"],setup(l,{expose:h,emit:p}){const o=l,P=p,c=u=>{P("update",u)};return h({currentPage:o.currentPage,updatePage:c,total:o.total,props:o}),(u,K)=>l.currentPage?(s(),i(e(N),{key:0,total:l.total,itemsPerPage:o.amountPerPage,"sibling-count":1,"show-edges":"","default-page":1,"onUpdate:page":c},{default:a(()=>[t(e(L),{class:"PaginationList"},{default:a(({items:_})=>[t(e(x),{class:"Button"},{default:a(()=>[t(e(r),{icon:"radix-icons:double-arrow-left"})]),_:1}),t(e(B),{style:{marginRight:16},class:"Button"},{default:a(()=>[t(e(r),{icon:"radix-icons:chevron-left"})]),_:1}),(s(!0),m(g,null,F(_,(n,d)=>(s(),m(g,null,[n.type==="page"?(s(),i(e(y),{key:d,class:"Button",value:n.value},{default:a(()=>[f(b(n.value),1)]),_:2},1032,["value"])):(s(),i(e(k),{key:n.type,index:d,class:"PaginationEllipsis"},{default:a(()=>[f(" … ")]),_:2},1032,["index"]))],64))),256)),t(e(v),{style:{marginLeft:16},class:"Button"},{default:a(()=>[t(e(r),{icon:"radix-icons:chevron-right"})]),_:1}),t(e(w),{class:"Button"},{default:a(()=>[t(e(r),{icon:"radix-icons:double-arrow-right"})]),_:1})]),_:1})]),_:1},8,["total","itemsPerPage"])):C("",!0)}});export{I as _};
