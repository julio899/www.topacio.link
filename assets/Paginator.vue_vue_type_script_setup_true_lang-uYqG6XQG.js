import{I as r}from"./iconify-HmW8hJn6.js";import{h,w as v,b as B,m as k,C as w,y as b,g as C,v as L}from"./index-DfpcZtYQ.js";import{p as N,a as s,c as i,w as a,l as e,k as t,b as m,g as V,F as f,e as y,t as E,f as F}from"./index-BHCRGyVk.js";const S=N({__name:"Paginator",props:["currentPage","total","amountPerPage"],emits:["update"],setup(l,{expose:p,emit:P}){const o=l,x=P,u=c=>{x("update",c)};return p({currentPage:o.currentPage,updatePage:u,total:o.total,props:o}),(c,d)=>l.currentPage?(s(),i(t(L),{key:0,total:l.total,itemsPerPage:o.amountPerPage,"sibling-count":1,"show-edges":"","default-page":1,"onUpdate:page":u},{default:a(()=>[e(t(C),{class:"PaginationList"},{default:a(({items:_})=>[e(t(h),{class:"Button"},{default:a(()=>[e(t(r),{icon:"radix-icons:double-arrow-left"})]),_:1}),e(t(v),{style:{marginRight:16},class:"Button"},{default:a(()=>[e(t(r),{icon:"radix-icons:chevron-left"})]),_:1}),(s(!0),m(f,null,V(_,(n,g)=>(s(),m(f,null,[n.type==="page"?(s(),i(t(B),{key:g,class:"Button",value:n.value},{default:a(()=>[y(E(n.value),1)]),_:2},1032,["value"])):(s(),i(t(k),{key:n.type,index:g,class:"PaginationEllipsis"},{default:a(()=>d[0]||(d[0]=[y(" … ")])),_:2},1032,["index"]))],64))),256)),e(t(w),{style:{marginLeft:16},class:"Button"},{default:a(()=>[e(t(r),{icon:"radix-icons:chevron-right"})]),_:1}),e(t(b),{class:"Button"},{default:a(()=>[e(t(r),{icon:"radix-icons:double-arrow-right"})]),_:1})]),_:1})]),_:1},8,["total","itemsPerPage"])):F("",!0)}});export{S as _};
