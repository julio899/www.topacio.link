import{m as Nt,n as Dt,r as A,o as Oe,q as ze,s as te,f as oe,v as lt,a as T,g as $,d as C,x as ct,y as It,z as ue,w as he,A as He,j as M,e as ye,t as re,c as bt,k as W,B as Mt,T as Rt,C as yt,D as Ve,E as jt,F as Ft,G as Wt,i as ee,_ as wt,u as qe,H as zt,I as Ht,J as ae,S as Ie,K as Vt,p as qt,b as Xt,L as pe,M as Yt,N as Me,h as Ut}from"./index-bfcaa6be.js";const Gt="/img/polygon-matic-logo.svg",Kt="/img/update-meta.svg",Jt="/img/fly-svgrepo-com.svg",Qt="/img/Tmine2.svg",Zt="/img/claim_.svg";function Fe(t,e,a){var r,n,o,l,s;e==null&&(e=100);function c(){var i=Date.now()-l;i<e&&i>=0?r=setTimeout(c,e-i):(r=null,a||(s=t.apply(o,n),o=n=null))}var p=function(){o=this,n=arguments,l=Date.now();var i=a&&!r;return r||(r=setTimeout(c,e)),i&&(s=t.apply(o,n),o=n=null),s};return p.clear=function(){r&&(clearTimeout(r),r=null)},p.flush=function(){r&&(s=t.apply(o,n),o=n=null,clearTimeout(r),r=null)},p}Fe.debounce=Fe;var Re=Fe;function ea(t,e,a){Wt(t)?oe(t,(r,n)=>{n==null||n.removeEventListener(e,a),r==null||r.addEventListener(e,a)}):Oe(()=>{t.addEventListener(e,a)}),Ve(()=>{var r;(r=M(t))===null||r===void 0||r.removeEventListener(e,a)})}function ta(t,e){const a="pointerdown";return typeof window>"u"||!window?void 0:ea(window,a,n=>{const o=M(t);o&&(o===n.target||n.composedPath().includes(o)||e(n))})}function aa(t,e,a){let r=null;const n=A(!1);Oe(()=>{(t.content!==void 0||a.value)&&(n.value=!0),r=new MutationObserver(o),r.observe(e.value,{childList:!0,subtree:!0})}),Ve(()=>r.disconnect()),oe(a,l=>{l?n.value=!0:n.value=!1});const o=()=>{t.content?n.value=!0:n.value=!1};return{hasContent:n}}function de(t,e){var a=t.getBoundingClientRect(),r=1,n=1;return{width:a.width/r,height:a.height/n,top:a.top/n,right:a.right/r,bottom:a.bottom/n,left:a.left/r,x:a.left/r,y:a.top/n}}function V(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Xe(t){var e=V(t),a=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:a,scrollTop:r}}function we(t){var e=V(t).Element;return t instanceof e||t instanceof Element}function R(t){var e=V(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function xt(t){if(typeof ShadowRoot>"u")return!1;var e=V(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function ra(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function na(t){return t===V(t)||!R(t)?Xe(t):ra(t)}function Y(t){return t?(t.nodeName||"").toLowerCase():null}function ie(t){return((we(t)?t.ownerDocument:t.document)||window.document).documentElement}function Ye(t){return de(ie(t)).left+Xe(t).scrollLeft}function Z(t){return V(t).getComputedStyle(t)}function Ue(t){var e=Z(t),a=e.overflow,r=e.overflowX,n=e.overflowY;return/auto|scroll|overlay|hidden/.test(a+n+r)}function oa(t){var e=t.getBoundingClientRect(),a=e.width/t.offsetWidth||1,r=e.height/t.offsetHeight||1;return a!==1||r!==1}function ia(t,e,a){a===void 0&&(a=!1);var r=R(e);R(e)&&oa(e);var n=ie(e),o=de(t),l={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(r||!r&&!a)&&((Y(e)!=="body"||Ue(n))&&(l=na(e)),R(e)?(s=de(e),s.x+=e.clientLeft,s.y+=e.clientTop):n&&(s.x=Ye(n))),{x:o.left+l.scrollLeft-s.x,y:o.top+l.scrollTop-s.y,width:o.width,height:o.height}}function Ge(t){var e=de(t),a=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-a)<=1&&(a=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:a,height:r}}function Be(t){return Y(t)==="html"?t:t.assignedSlot||t.parentNode||(xt(t)?t.host:null)||ie(t)}function _t(t){return["html","body","#document"].indexOf(Y(t))>=0?t.ownerDocument.body:R(t)&&Ue(t)?t:_t(Be(t))}function be(t,e){var a;e===void 0&&(e=[]);var r=_t(t),n=r===((a=t.ownerDocument)==null?void 0:a.body),o=V(r),l=n?[o].concat(o.visualViewport||[],Ue(r)?r:[]):r,s=e.concat(l);return n?s:s.concat(be(Be(l)))}function sa(t){return["table","td","th"].indexOf(Y(t))>=0}function ut(t){return!R(t)||Z(t).position==="fixed"?null:t.offsetParent}function la(t){var e=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,a=navigator.userAgent.indexOf("Trident")!==-1;if(a&&R(t)){var r=Z(t);if(r.position==="fixed")return null}for(var n=Be(t);R(n)&&["html","body"].indexOf(Y(n))<0;){var o=Z(n);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||e&&o.willChange==="filter"||e&&o.filter&&o.filter!=="none")return n;n=n.parentNode}return null}function ke(t){for(var e=V(t),a=ut(t);a&&sa(a)&&Z(a).position==="static";)a=ut(a);return a&&(Y(a)==="html"||Y(a)==="body"&&Z(a).position==="static")?e:a||la(t)||e}var j="top",z="bottom",H="right",F="left",Ke="auto",Pe=[j,z,H,F],fe="start",xe="end",ca="clippingParents",Ot="viewport",me="popper",ua="reference",pt=Pe.reduce(function(t,e){return t.concat([e+"-"+fe,e+"-"+xe])},[]),kt=[].concat(Pe,[Ke]).reduce(function(t,e){return t.concat([e,e+"-"+fe,e+"-"+xe])},[]),pa="beforeRead",da="read",fa="afterRead",va="beforeMain",ma="main",ga="afterMain",ha="beforeWrite",ba="write",ya="afterWrite",wa=[pa,da,fa,va,ma,ga,ha,ba,ya];function xa(t){var e=new Map,a=new Set,r=[];t.forEach(function(o){e.set(o.name,o)});function n(o){a.add(o.name);var l=[].concat(o.requires||[],o.requiresIfExists||[]);l.forEach(function(s){if(!a.has(s)){var c=e.get(s);c&&n(c)}}),r.push(o)}return t.forEach(function(o){a.has(o.name)||n(o)}),r}function _a(t){var e=xa(t);return wa.reduce(function(a,r){return a.concat(e.filter(function(n){return n.phase===r}))},[])}function Oa(t){var e;return function(){return e||(e=new Promise(function(a){Promise.resolve().then(function(){e=void 0,a(t())})})),e}}function X(t){return t.split("-")[0]}function ka(t){var e=t.reduce(function(a,r){var n=a[r.name];return a[r.name]=n?Object.assign({},n,r,{options:Object.assign({},n.options,r.options),data:Object.assign({},n.data,r.data)}):r,a},{});return Object.keys(e).map(function(a){return e[a]})}function Pa(t){var e=V(t),a=ie(t),r=e.visualViewport,n=a.clientWidth,o=a.clientHeight,l=0,s=0;return r&&(n=r.width,o=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(l=r.offsetLeft,s=r.offsetTop)),{width:n,height:o,x:l+Ye(t),y:s}}var ne=Math.max,_e=Math.min,$e=Math.round;function Ca(t){var e,a=ie(t),r=Xe(t),n=(e=t.ownerDocument)==null?void 0:e.body,o=ne(a.scrollWidth,a.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),l=ne(a.scrollHeight,a.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),s=-r.scrollLeft+Ye(t),c=-r.scrollTop;return Z(n||a).direction==="rtl"&&(s+=ne(a.clientWidth,n?n.clientWidth:0)-o),{width:o,height:l,x:s,y:c}}function Pt(t,e){var a=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(a&&xt(a)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function We(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Sa(t){var e=de(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}function dt(t,e){return e===Ot?We(Pa(t)):R(e)?Sa(e):We(Ca(ie(t)))}function Ta(t){var e=be(Be(t)),a=["absolute","fixed"].indexOf(Z(t).position)>=0,r=a&&R(t)?ke(t):t;return we(r)?e.filter(function(n){return we(n)&&Pt(n,r)&&Y(n)!=="body"}):[]}function $a(t,e,a){var r=e==="clippingParents"?Ta(t):[].concat(e),n=[].concat(r,[a]),o=n[0],l=n.reduce(function(s,c){var p=dt(t,c);return s.top=ne(p.top,s.top),s.right=_e(p.right,s.right),s.bottom=_e(p.bottom,s.bottom),s.left=ne(p.left,s.left),s},dt(t,o));return l.width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l}function ve(t){return t.split("-")[1]}function Je(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Ct(t){var e=t.reference,a=t.element,r=t.placement,n=r?X(r):null,o=r?ve(r):null,l=e.x+e.width/2-a.width/2,s=e.y+e.height/2-a.height/2,c;switch(n){case j:c={x:l,y:e.y-a.height};break;case z:c={x:l,y:e.y+e.height};break;case H:c={x:e.x+e.width,y:s};break;case F:c={x:e.x-a.width,y:s};break;default:c={x:e.x,y:e.y}}var p=n?Je(n):null;if(p!=null){var i=p==="y"?"height":"width";switch(o){case fe:c[p]=c[p]-(e[i]/2-a[i]/2);break;case xe:c[p]=c[p]+(e[i]/2-a[i]/2);break}}return c}function St(){return{top:0,right:0,bottom:0,left:0}}function Tt(t){return Object.assign({},St(),t)}function $t(t,e){return e.reduce(function(a,r){return a[r]=t,a},{})}function Qe(t,e){e===void 0&&(e={});var a=e,r=a.placement,n=r===void 0?t.placement:r,o=a.boundary,l=o===void 0?ca:o,s=a.rootBoundary,c=s===void 0?Ot:s,p=a.elementContext,i=p===void 0?me:p,d=a.altBoundary,g=d===void 0?!1:d,y=a.padding,x=y===void 0?0:y,f=Tt(typeof x!="number"?x:$t(x,Pe)),b=i===me?ua:me,O=t.rects.popper,k=t.elements[g?b:i],_=$a(we(k)?k:k.contextElement||ie(t.elements.popper),l,c),h=de(t.elements.reference),P=Ct({reference:h,element:O,strategy:"absolute",placement:n}),w=We(Object.assign({},O,P)),u=i===me?w:h,v={top:_.top-u.top+f.top,bottom:u.bottom-_.bottom+f.bottom,left:_.left-u.left+f.left,right:u.right-_.right+f.right},m=t.modifiersData.offset;if(i===me&&m){var S=m[n];Object.keys(v).forEach(function(D){var U=[H,z].indexOf(D)>=0?1:-1,E=[j,z].indexOf(D)>=0?"y":"x";v[D]+=S[E]*U})}return v}var ft={placement:"bottom",modifiers:[],strategy:"absolute"};function vt(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function Ea(t){t===void 0&&(t={});var e=t,a=e.defaultModifiers,r=a===void 0?[]:a,n=e.defaultOptions,o=n===void 0?ft:n;return function(s,c,p){p===void 0&&(p=o);var i={placement:"bottom",orderedModifiers:[],options:Object.assign({},ft,o),modifiersData:{},elements:{reference:s,popper:c},attributes:{},styles:{}},d=[],g=!1,y={state:i,setOptions:function(O){var k=typeof O=="function"?O(i.options):O;f(),i.options=Object.assign({},o,i.options,k),i.scrollParents={reference:we(s)?be(s):s.contextElement?be(s.contextElement):[],popper:be(c)};var _=_a(ka([].concat(r,i.options.modifiers)));return i.orderedModifiers=_.filter(function(h){return h.enabled}),x(),y.update()},forceUpdate:function(){if(!g){var O=i.elements,k=O.reference,_=O.popper;if(vt(k,_)){i.rects={reference:ia(k,ke(_),i.options.strategy==="fixed"),popper:Ge(_)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach(function(S){return i.modifiersData[S.name]=Object.assign({},S.data)});for(var h=0;h<i.orderedModifiers.length;h++){if(i.reset===!0){i.reset=!1,h=-1;continue}var P=i.orderedModifiers[h],w=P.fn,u=P.options,v=u===void 0?{}:u,m=P.name;typeof w=="function"&&(i=w({state:i,options:v,name:m,instance:y})||i)}}}},update:Oa(function(){return new Promise(function(b){y.forceUpdate(),b(i)})}),destroy:function(){f(),g=!0}};if(!vt(s,c))return y;y.setOptions(p).then(function(b){!g&&p.onFirstUpdate&&p.onFirstUpdate(b)});function x(){i.orderedModifiers.forEach(function(b){var O=b.name,k=b.options,_=k===void 0?{}:k,h=b.effect;if(typeof h=="function"){var P=h({state:i,name:O,instance:y,options:_}),w=function(){};d.push(P||w)}})}function f(){d.forEach(function(b){return b()}),d=[]}return y}}var Ee={passive:!0};function Aa(t){var e=t.state,a=t.instance,r=t.options,n=r.scroll,o=n===void 0?!0:n,l=r.resize,s=l===void 0?!0:l,c=V(e.elements.popper),p=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&p.forEach(function(i){i.addEventListener("scroll",a.update,Ee)}),s&&c.addEventListener("resize",a.update,Ee),function(){o&&p.forEach(function(i){i.removeEventListener("scroll",a.update,Ee)}),s&&c.removeEventListener("resize",a.update,Ee)}}var La={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Aa,data:{}};function Ba(t){var e=t.state,a=t.name;e.modifiersData[a]=Ct({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var Na={name:"popperOffsets",enabled:!0,phase:"read",fn:Ba,data:{}},Da={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Ia(t){var e=t.x,a=t.y,r=window,n=r.devicePixelRatio||1;return{x:$e($e(e*n)/n)||0,y:$e($e(a*n)/n)||0}}function mt(t){var e,a=t.popper,r=t.popperRect,n=t.placement,o=t.variation,l=t.offsets,s=t.position,c=t.gpuAcceleration,p=t.adaptive,i=t.roundOffsets,d=i===!0?Ia(l):typeof i=="function"?i(l):l,g=d.x,y=g===void 0?0:g,x=d.y,f=x===void 0?0:x,b=l.hasOwnProperty("x"),O=l.hasOwnProperty("y"),k=F,_=j,h=window;if(p){var P=ke(a),w="clientHeight",u="clientWidth";P===V(a)&&(P=ie(a),Z(P).position!=="static"&&s==="absolute"&&(w="scrollHeight",u="scrollWidth")),P=P,(n===j||(n===F||n===H)&&o===xe)&&(_=z,f-=P[w]-r.height,f*=c?1:-1),(n===F||(n===j||n===z)&&o===xe)&&(k=H,y-=P[u]-r.width,y*=c?1:-1)}var v=Object.assign({position:s},p&&Da);if(c){var m;return Object.assign({},v,(m={},m[_]=O?"0":"",m[k]=b?"0":"",m.transform=(h.devicePixelRatio||1)<=1?"translate("+y+"px, "+f+"px)":"translate3d("+y+"px, "+f+"px, 0)",m))}return Object.assign({},v,(e={},e[_]=O?f+"px":"",e[k]=b?y+"px":"",e.transform="",e))}function Ma(t){var e=t.state,a=t.options,r=a.gpuAcceleration,n=r===void 0?!0:r,o=a.adaptive,l=o===void 0?!0:o,s=a.roundOffsets,c=s===void 0?!0:s,p={placement:X(e.placement),variation:ve(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,mt(Object.assign({},p,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:l,roundOffsets:c})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,mt(Object.assign({},p,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var Ra={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Ma,data:{}};function ja(t){var e=t.state;Object.keys(e.elements).forEach(function(a){var r=e.styles[a]||{},n=e.attributes[a]||{},o=e.elements[a];!R(o)||!Y(o)||(Object.assign(o.style,r),Object.keys(n).forEach(function(l){var s=n[l];s===!1?o.removeAttribute(l):o.setAttribute(l,s===!0?"":s)}))})}function Fa(t){var e=t.state,a={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,a.popper),e.styles=a,e.elements.arrow&&Object.assign(e.elements.arrow.style,a.arrow),function(){Object.keys(e.elements).forEach(function(r){var n=e.elements[r],o=e.attributes[r]||{},l=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:a[r]),s=l.reduce(function(c,p){return c[p]="",c},{});!R(n)||!Y(n)||(Object.assign(n.style,s),Object.keys(o).forEach(function(c){n.removeAttribute(c)}))})}}var Wa={name:"applyStyles",enabled:!0,phase:"write",fn:ja,effect:Fa,requires:["computeStyles"]},za=[La,Na,Ra,Wa],Ha=Ea({defaultModifiers:za});function Va(t){return t==="x"?"y":"x"}function Ae(t,e,a){return ne(t,_e(e,a))}function qa(t){var e=t.state,a=t.options,r=t.name,n=a.mainAxis,o=n===void 0?!0:n,l=a.altAxis,s=l===void 0?!1:l,c=a.boundary,p=a.rootBoundary,i=a.altBoundary,d=a.padding,g=a.tether,y=g===void 0?!0:g,x=a.tetherOffset,f=x===void 0?0:x,b=Qe(e,{boundary:c,rootBoundary:p,padding:d,altBoundary:i}),O=X(e.placement),k=ve(e.placement),_=!k,h=Je(O),P=Va(h),w=e.modifiersData.popperOffsets,u=e.rects.reference,v=e.rects.popper,m=typeof f=="function"?f(Object.assign({},e.rects,{placement:e.placement})):f,S={x:0,y:0};if(w){if(o||s){var D=h==="y"?j:F,U=h==="y"?z:H,E=h==="y"?"height":"width",G=w[h],K=w[h]+b[D],I=w[h]-b[U],J=y?-v[E]/2:0,B=k===fe?u[E]:v[E],N=k===fe?-v[E]:-u[E],L=e.elements.arrow,Q=y&&L?Ge(L):{width:0,height:0},le=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:St(),Ce=le[D],se=le[U],q=Ae(0,u[E],Q[E]),Se=_?u[E]/2-J-q-Ce-m:B-q-Ce-m,Ne=_?-u[E]/2+J+q+se+m:N+q+se+m,ce=e.elements.arrow&&ke(e.elements.arrow),De=ce?h==="y"?ce.clientTop||0:ce.clientLeft||0:0,tt=e.modifiersData.offset?e.modifiersData.offset[e.placement][h]:0,at=w[h]+Se-tt-De,rt=w[h]+Ne-tt;if(o){var nt=Ae(y?_e(K,at):K,G,y?ne(I,rt):I);w[h]=nt,S[h]=nt-G}if(s){var Lt=h==="x"?j:F,Bt=h==="x"?z:H,Te=w[P],ot=Te+b[Lt],it=Te-b[Bt],st=Ae(y?_e(ot,at):ot,Te,y?ne(it,rt):it);w[P]=st,S[P]=st-Te}}e.modifiersData[r]=S}}var Xa={name:"preventOverflow",enabled:!0,phase:"main",fn:qa,requiresIfExists:["offset"]},Ya={left:"right",right:"left",bottom:"top",top:"bottom"};function Le(t){return t.replace(/left|right|bottom|top/g,function(e){return Ya[e]})}var Ua={start:"end",end:"start"};function gt(t){return t.replace(/start|end/g,function(e){return Ua[e]})}function Ga(t,e){e===void 0&&(e={});var a=e,r=a.placement,n=a.boundary,o=a.rootBoundary,l=a.padding,s=a.flipVariations,c=a.allowedAutoPlacements,p=c===void 0?kt:c,i=ve(r),d=i?s?pt:pt.filter(function(x){return ve(x)===i}):Pe,g=d.filter(function(x){return p.indexOf(x)>=0});g.length===0&&(g=d);var y=g.reduce(function(x,f){return x[f]=Qe(t,{placement:f,boundary:n,rootBoundary:o,padding:l})[X(f)],x},{});return Object.keys(y).sort(function(x,f){return y[x]-y[f]})}function Ka(t){if(X(t)===Ke)return[];var e=Le(t);return[gt(t),e,gt(e)]}function Ja(t){var e=t.state,a=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var n=a.mainAxis,o=n===void 0?!0:n,l=a.altAxis,s=l===void 0?!0:l,c=a.fallbackPlacements,p=a.padding,i=a.boundary,d=a.rootBoundary,g=a.altBoundary,y=a.flipVariations,x=y===void 0?!0:y,f=a.allowedAutoPlacements,b=e.options.placement,O=X(b),k=O===b,_=c||(k||!x?[Le(b)]:Ka(b)),h=[b].concat(_).reduce(function(se,q){return se.concat(X(q)===Ke?Ga(e,{placement:q,boundary:i,rootBoundary:d,padding:p,flipVariations:x,allowedAutoPlacements:f}):q)},[]),P=e.rects.reference,w=e.rects.popper,u=new Map,v=!0,m=h[0],S=0;S<h.length;S++){var D=h[S],U=X(D),E=ve(D)===fe,G=[j,z].indexOf(U)>=0,K=G?"width":"height",I=Qe(e,{placement:D,boundary:i,rootBoundary:d,altBoundary:g,padding:p}),J=G?E?H:F:E?z:j;P[K]>w[K]&&(J=Le(J));var B=Le(J),N=[];if(o&&N.push(I[U]<=0),s&&N.push(I[J]<=0,I[B]<=0),N.every(function(se){return se})){m=D,v=!1;break}u.set(D,N)}if(v)for(var L=x?3:1,Q=function(q){var Se=h.find(function(Ne){var ce=u.get(Ne);if(ce)return ce.slice(0,q).every(function(De){return De})});if(Se)return m=Se,"break"},le=L;le>0;le--){var Ce=Q(le);if(Ce==="break")break}e.placement!==m&&(e.modifiersData[r]._skip=!0,e.placement=m,e.reset=!0)}}var Qa={name:"flip",enabled:!0,phase:"main",fn:Ja,requiresIfExists:["offset"],data:{_skip:!1}};function Za(t,e,a){var r=X(t),n=[F,j].indexOf(r)>=0?-1:1,o=typeof a=="function"?a(Object.assign({},e,{placement:t})):a,l=o[0],s=o[1];return l=l||0,s=(s||0)*n,[F,H].indexOf(r)>=0?{x:s,y:l}:{x:l,y:s}}function er(t){var e=t.state,a=t.options,r=t.name,n=a.offset,o=n===void 0?[0,0]:n,l=kt.reduce(function(i,d){return i[d]=Za(d,e.rects,o),i},{}),s=l[e.placement],c=s.x,p=s.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=p),e.modifiersData[r]=l}var tr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:er},ar=function(e,a){return e=typeof e=="function"?e(Object.assign({},a.rects,{placement:a.placement})):e,Tt(typeof e!="number"?e:$t(e,Pe))};function rr(t){var e,a=t.state,r=t.name,n=t.options,o=a.elements.arrow,l=a.modifiersData.popperOffsets,s=X(a.placement),c=Je(s),p=[F,H].indexOf(s)>=0,i=p?"height":"width";if(!(!o||!l)){var d=ar(n.padding,a),g=Ge(o),y=c==="y"?j:F,x=c==="y"?z:H,f=a.rects.reference[i]+a.rects.reference[c]-l[c]-a.rects.popper[i],b=l[c]-a.rects.reference[c],O=ke(o),k=O?c==="y"?O.clientHeight||0:O.clientWidth||0:0,_=f/2-b/2,h=d[y],P=k-g[i]-d[x],w=k/2-g[i]/2+_,u=Ae(h,w,P),v=c;a.modifiersData[r]=(e={},e[v]=u,e.centerOffset=u-w,e)}}function nr(t){var e=t.state,a=t.options,r=a.element,n=r===void 0?"[data-popper-arrow]":r;n!=null&&(typeof n=="string"&&(n=e.elements.popper.querySelector(n),!n)||Pt(e.elements.popper,n)&&(e.elements.arrow=n))}var or={name:"arrow",enabled:!0,phase:"main",fn:rr,effect:nr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};const je=t=>parseInt(t,10);function ir({arrowPadding:t,emit:e,locked:a,offsetDistance:r,offsetSkid:n,placement:o,popperNode:l,triggerNode:s}){const c=jt({isOpen:!1,popperInstance:null}),p=f=>{var b;(b=c.popperInstance)===null||b===void 0||b.setOptions(O=>({...O,modifiers:[...O.modifiers,{name:"eventListeners",enabled:f}]}))},i=()=>p(!0),d=()=>p(!1),g=()=>{c.isOpen&&(c.isOpen=!1,e("close:popper"))},y=()=>{c.isOpen||(c.isOpen=!0,e("open:popper"))};oe([()=>c.isOpen,o],async([f])=>{f?(await x(),i()):d()});const x=async()=>{await Ft(),c.popperInstance=Ha(s.value,l.value,{placement:o.value,modifiers:[Xa,Qa,{name:"flip",enabled:!a.value},or,{name:"arrow",options:{padding:je(t.value)}},tr,{name:"offset",options:{offset:[je(n.value),je(r.value)]}}]}),c.popperInstance.update()};return Ve(()=>{var f;(f=c.popperInstance)===null||f===void 0||f.destroy()}),{...ze(c),open:y,close:g}}const sr={id:"arrow","data-popper-arrow":""};function lr(t,e){return T(),$("div",sr)}function Et(t,e){e===void 0&&(e={});var a=e.insertAt;if(!(!t||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",a==="top"&&r.firstChild?r.insertBefore(n,r.firstChild):r.appendChild(n),n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t))}}var cr=`
#arrow[data-v-20b7fd4a],
  #arrow[data-v-20b7fd4a]::before {
    transition: background 250ms ease-in-out;
    position: absolute;
    width: calc(10px - var(--popper-theme-border-width, 0px));
    height: calc(10px - var(--popper-theme-border-width, 0px));
    box-sizing: border-box;
    background: var(--popper-theme-background-color);
}
#arrow[data-v-20b7fd4a] {
    visibility: hidden;
}
#arrow[data-v-20b7fd4a]::before {
    visibility: visible;
    content: "";
    transform: rotate(45deg);
}

  /* Top arrow */
.popper[data-popper-placement^="top"] > #arrow[data-v-20b7fd4a] {
    bottom: -5px;
}
.popper[data-popper-placement^="top"] > #arrow[data-v-20b7fd4a]::before {
    border-right: var(--popper-theme-border-width)
      var(--popper-theme-border-style) var(--popper-theme-border-color);
    border-bottom: var(--popper-theme-border-width)
      var(--popper-theme-border-style) var(--popper-theme-border-color);
}

  /* Bottom arrow */
.popper[data-popper-placement^="bottom"] > #arrow[data-v-20b7fd4a] {
    top: -5px;
}
.popper[data-popper-placement^="bottom"] > #arrow[data-v-20b7fd4a]::before {
    border-left: var(--popper-theme-border-width)
      var(--popper-theme-border-style) var(--popper-theme-border-color);
    border-top: var(--popper-theme-border-width)
      var(--popper-theme-border-style) var(--popper-theme-border-color);
}

  /* Left arrow */
.popper[data-popper-placement^="left"] > #arrow[data-v-20b7fd4a] {
    right: -5px;
}
.popper[data-popper-placement^="left"] > #arrow[data-v-20b7fd4a]::before {
    border-right: var(--popper-theme-border-width)
      var(--popper-theme-border-style) var(--popper-theme-border-color);
    border-top: var(--popper-theme-border-width)
      var(--popper-theme-border-style) var(--popper-theme-border-color);
}

  /* Right arrow */
.popper[data-popper-placement^="right"] > #arrow[data-v-20b7fd4a] {
    left: -5px;
}
`;Et(cr);const Ze={};Ze.render=lr;Ze.__scopeId="data-v-20b7fd4a";var ur=Ze;const pr=["onKeyup"];var At={props:{placement:{type:String,default:"bottom",validator:function(t){return["auto","auto-start","auto-end","top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end"].includes(t)}},disableClickAway:{type:Boolean,default:!1},offsetSkid:{type:String,default:"0"},offsetDistance:{type:String,default:"12"},hover:{type:Boolean,default:!1},show:{type:Boolean,default:null},disabled:{type:Boolean,default:!1},openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0},zIndex:{type:[Number,String],default:9999},arrow:{type:Boolean,default:!1},arrowPadding:{type:String,default:"0"},interactive:{type:Boolean,default:!0},locked:{type:Boolean,default:!1},content:{type:String,default:null}},emits:["open:popper","close:popper"],setup(t,{emit:e}){const a=t;Nt(B=>({c81fc0a4:t.zIndex}));const r=Dt(),n=A(null),o=A(null),l=A(null),s=A(!1);Oe(()=>{const B=r.default();if(B&&B.length>1)return console.error(`[Popper]: The <Popper> component expects only one child element at its root. You passed ${B.length} child nodes.`)});const{arrowPadding:c,closeDelay:p,content:i,disableClickAway:d,disabled:g,interactive:y,locked:x,offsetDistance:f,offsetSkid:b,openDelay:O,placement:k,show:_}=ze(a),{isOpen:h,open:P,close:w}=ir({arrowPadding:c,emit:e,locked:x,offsetDistance:f,offsetSkid:b,placement:k,popperNode:o,triggerNode:l}),{hasContent:u}=aa(r,o,i),v=te(()=>_.value!==null),m=te(()=>g.value||!u.value),S=te(()=>h.value&&!m.value),D=te(()=>!d.value&&!v.value),U=te(()=>y.value?`border: ${f.value}px solid transparent; margin: -${f.value}px;`:null),E=Re.debounce(P,O.value),G=Re.debounce(w,p.value),K=async()=>{m.value||v.value||(G.clear(),E())},I=async()=>{v.value||(E.clear(),G())},J=()=>{h.value?I():K()};return oe([u,g],([B,N])=>{h.value&&(!B||N)&&w()}),oe(h,B=>{B?s.value=!0:Re.debounce(()=>{s.value=!1},200)}),lt(()=>{v.value&&(_.value?E():G())}),lt(()=>{D.value&&ta(n,I)}),(B,N)=>(T(),$("div",{class:"inline-block",style:yt(M(U)),onMouseleave:N[2]||(N[2]=L=>t.hover&&I()),ref:(L,Q)=>{Q.popperContainerNode=L,n.value=L}},[C("div",{ref:(L,Q)=>{Q.triggerNode=L,l.value=L},onMouseover:N[0]||(N[0]=L=>t.hover&&K()),onClick:J,onFocus:K,onKeyup:It(I,["esc"])},[ct(B.$slots,"default")],40,pr),ue(Rt,{name:"fade"},{default:he(()=>[He(C("div",{onClick:N[1]||(N[1]=L=>!M(y)&&I()),class:"popper",ref:(L,Q)=>{Q.popperNode=L,o.value=L}},[ct(B.$slots,"content",{close:M(w),isOpen:s.value},()=>[ye(re(M(i)),1)]),t.arrow?(T(),bt(ur,{key:0})):W("",!0)],512),[[Mt,M(S)]])]),_:3})],36))}},dr=`
.inline-block[data-v-5784ed69] {
    display: inline-block;
}
.popper[data-v-5784ed69] {
    transition: background 250ms ease-in-out;
    background: var(--popper-theme-background-color);
    padding: var(--popper-theme-padding);
    color: var(--popper-theme-text-color);
    border-radius: var(--popper-theme-border-radius);
    border-width: var(--popper-theme-border-width);
    border-style: var(--popper-theme-border-style);
    border-color: var(--popper-theme-border-color);
    box-shadow: var(--popper-theme-box-shadow);
    z-index: var(--c81fc0a4);
}
.popper[data-v-5784ed69]:hover,
  .popper:hover > #arrow[data-v-5784ed69]::before {
    background: var(--popper-theme-background-color-hover);
}
.inline-block[data-v-5784ed69] {
    display: inline-block;
}
.fade-enter-active[data-v-5784ed69],
  .fade-leave-active[data-v-5784ed69] {
    transition: opacity 0.2s ease;
}
.fade-enter-from[data-v-5784ed69],
  .fade-leave-to[data-v-5784ed69] {
    opacity: 0;
}
`;Et(dr);At.__scopeId="data-v-5784ed69";var ge=(()=>{const t=At;return t.install=e=>{e.component("Popper",t)},t})();const fr=ee("transferNFT"),vr={name:"SendNFT",props:["show","idtarget"],emits:["closeModalSend"],setup(t,{emit:e}){const{show:a,idtarget:r}=ze(t),n=A(!1),o=A(""),l=qe();zt(()=>{o.value="",n.value=!1}),Oe(()=>{n.value=!1,o.value="",console.log({transferNFT:fr})});const s=()=>{o.value="",n.value=!1,e("closeModalSend",!0)};return{store:l,show:a,closeModal:s,confirmSend:async()=>{n.value=!0;const p=o.value.toString().trim().replaceAll("	",""),i=Ie.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:g=>{g.addEventListener("mouseenter",Ie.stopTimer),g.addEventListener("mouseleave",Ie.resumeTimer)}});if(!Vt(p))return n.value=!1,s(),i.fire({icon:"error",title:"Wallet is no valid"});const d=r.value;e("transferNFT",{w:p,id:d})},loading:n,wallet:o}}},et=t=>(qt("data-v-a5a1214e"),t=t(),Xt(),t),mr={class:"modal-container"},gr={class:"Cabecera"},hr={class:"Contenido"},br={key:0,class:"loader-interno"},yr={key:1,class:"group"},wr=et(()=>C("span",{class:"highlight"},null,-1)),xr=et(()=>C("span",{class:"bar"},null,-1)),_r=et(()=>C("label",null,"Wallet destine",-1)),Or={class:"Bootonera"};function kr(t,e,a,r,n,o){return T(),$("section",{class:ae({"modal-t":!0,"show-modal":r.show,"hide-modal":!r.show})},[C("div",mr,[C("div",gr,[ye(" SEND NFT 🔖 "+re(a.idtarget)+" ",1),C("button",{class:"close",onClick:e[0]||(e[0]=(...l)=>r.closeModal&&r.closeModal(...l))},"✖")]),C("div",hr,[r.loading?(T(),$("div",br)):W("",!0),r.loading?W("",!0):(T(),$("div",yr,[He(C("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=l=>r.wallet=l),required:""},null,512),[[Ht,r.wallet]]),wr,xr,_r]))]),C("div",Or,[r.loading?W("",!0):(T(),$("span",{key:0,class:"btn-send",onClick:e[2]||(e[2]=(...l)=>r.confirmSend&&r.confirmSend(...l))},"CONFIRM"))])])],2)}const Pr=wt(vr,[["render",kr],["__scopeId","data-v-a5a1214e"]]);const Cr={class:"header-card"},Sr=["href"],Tr=C("img",{class:"img-link-polygon",src:Gt,alt:"logo matic"},null,-1),$r={class:"content-card"},Er={key:0,class:"footer-card"},Ar={class:"nft-number nft-reward-tmine"},Lr=C("img",{src:Qt,alt:"tmine logo",class:"img-logo-tmine"},null,-1),Br={key:1,class:"snippet","data-title":"dot-flashing"},Nr=C("div",{class:"stage"},[C("div",{class:"dot-flashing"})],-1),Dr=[Nr],ht={__name:"nftItemGallery",props:["nftId","grid","target"],setup(t,{expose:e}){const a=t,r=ee("getDataNFT"),n=ee("getLinkNftScan"),o=ee("syncBalance"),l=ee("syncTmineBalance"),s=ee("claimReward"),c=ee("transferNFT"),p=ee("refreshTokens"),i=A(a.nftId),d=A(!1),g=A(null),y=A(null),x=A(!1),f=qe(),b=()=>{x.value=!0},O=async({w:u,id:v})=>{console.log("toTransferNFT",{w:u,id:v});const m=await c(u,v);await o(),await l(),await p(),console.log({modalSend:y,resp:m}),!(m!=null&&m.blockNumber)||m===null?y.value.loading=!1:x.value=!1},k=async()=>{d.value=!0;const u=parseInt(i.value),v=await r(u);v.id&&v.id===i.value&&(g.value=v,f.web3.nftLoad[u]=v),await o(),await l(),setTimeout(()=>{d.value=!1},2e3)},_=te(()=>{const u=parseInt(i.value);return f.web3.nftLoad[u]!==void 0}),h=async()=>{const u=parseInt(i.value);if(await s(u)===!0){await o(),await l(),console.log("* toClaim ok");const m=await r(u);m.id&&m.id===i.value&&(g.value=m,f.web3.nftLoad[u]=m)}},P=te(()=>{var m,S;const u=parseInt(i.value),v=a.grid&&a.grid&&a.target.length>7?"cover":"150% 100%";return f.web3.nftLoad[u]!==void 0&&((S=(m=g==null?void 0:g.value)==null?void 0:m.metadata)!=null&&S.image)?`
	--crt:#fff;
    background-image: url(${g.value.metadata.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: ${v};`:""}),w=u=>{const v=u.target,m=u.pageX-v.offsetLeft,S=u.pageY-v.offsetTop;v.style.setProperty("--x",m+"px"),v.style.setProperty("--y",S+"px")};return oe(_,async u=>{if(u&&(console.log(u,"*existInLoad",f.web3.nftLoad[i.value]!==void 0,i.value,g.value),u&&!g.value)){const v=parseInt(i.value),m=await r(v);m.id&&m.id===i.value&&(g.value=m),console.log({resp:m})}}),oe(()=>a.nftId,async function(u){var v;if(i.value=u,g.value=null,console.log("w",u,_.value,f.web3.nftLoad[u]),!_.value&&!f.web3.nftLoad[u]){const m=parseInt(i.value);console.log("*startSearch");const S=await r(m);S.id&&S.id===i.value&&(g.value=S,f.web3.nftLoad[m]=S),console.log("* meta",g.value,{data:S})}f.web3.nftLoad[u],((v=f.web3.nftLoad[u])==null?void 0:v.id)===u&&(g.value=f.web3.nftLoad[u])}),Oe(async()=>{const u=parseInt(i.value),v=await r(u);v.id&&v.id===i.value&&(g.value=v,f.web3.nftLoad[u]=v),v&&!f.web3.nftLoad[i.value]&&(g.value=v,f.web3.nftLoad[i.value]=v)}),e({nftId:i,existInLoad:_,mainStore:f,getBgNft:P,getLinkNftScan:n,moseMoveInCard:w,toClaim:h,loadRedresh:d,toRefresh:k,showModalSedNft:x,toSend:b,toTransferNFT:O,Popper:ge}),(u,v)=>{var m;return T(),$(pe,null,[C("div",{class:ae({"nft-item":!0,"loader-bg":!_.value}),style:yt(P.value),onMousemove:w},[C("div",Cr,[C("a",{href:M(n)(i.value),target:"_blank"},[ye("# "+re(i.value)+" ",1),ue(M(ge),{content:"Examinar en Polygonscan",arrow:!0,hover:!0},{default:he(()=>[Tr]),_:1})],8,Sr),ue(M(ge),{content:"Actualizar Metadata",arrow:!0,hover:!0},{default:he(()=>[C("img",{src:Kt,class:ae({"icon-update-meta":!0,"loading-refresh":d.value}),onClick:k},null,2)]),_:1})]),C("div",$r,[ue(M(ge),{content:"Enviar NFT",arrow:!0,hover:!0,placement:"top"},{default:he(()=>[C("img",{src:Jt,onClick:b})]),_:1})]),(m=g.value)!=null&&m.reward&&_.value&&!d.value?(T(),$("div",Er,[C("label",Ar,[Lr,ye(" "+re(g.value.reward)+" TMINE ",1)]),ue(M(ge),{content:"Hacer Claim de TMINE",hover:!0},{default:he(()=>[C("img",{src:Zt,onClick:h,class:"icon-reward-claim"})]),_:1})])):W("",!0),!_.value||d.value?(T(),$("div",Br,Dr)):W("",!0)],38),ue(Pr,{show:x.value,idtarget:i.value,onCloseModalSend:v[0]||(v[0]=S=>x.value=!1),onTransferNFT:O,ref_key:"modalSend",ref:y},null,8,["show","idtarget"])],64)}}};const Ir={key:0,class:"paginator"},Mr={key:0,class:"slot-btn"},Rr={key:1,class:"slot-btn"},jr={class:"lbl-page"},Fr={key:0},Wr=["onClick"],zr={class:"txt-pages"},Hr={key:1},Vr=["onClick"],qr={key:2,class:"slot-btn _left"},Xr={key:3,class:"slot-btn empty"},Yr={key:1,class:"paginator"},Ur={__name:"ContainerGallery",setup(t,{expose:e}){const a=new Ut,r=qe(),n=A(1),o=A(!1),l=A(null),s=A(5),c=()=>{o.value=!o.value,o.value?s.value=12:s.value=5,d.value=i()},p=te(()=>i().elementosPagina),i=()=>{const b=JSON.parse(JSON.stringify(r.web3.nftTokensIds)),O=a.arrayPaginator(b,s.value,n.value);return l.value=O.totalPaginas,O},d=A(i()),g=b=>{n.value=parseInt(b),d.value=i(),console.log("toPage",n.value)},y=()=>{n.value<l.value&&(n.value++,d.value=i()),console.log("nextPage",n.value)},x=()=>{n.value>1&&(n.value--,d.value=i()),console.log("previusPage",n.value)};return oe(()=>r.web3.nftTokensIds,b=>{b&&(d.value=i())}),e({data:[],mainStore:r,currentPage:d,nextPage:y,nftItemGallery:ht,getCurrentTarget:p,multiGrid14:o,changeToMultigrid:c}),(b,O)=>{var _,h,P;const k=Yt("key");return T(),$(pe,null,[C("section",{class:ae({content:!0,"multi-grid-14":o.value,lessMinimal:p.value&&((_=p.value)==null?void 0:_.length)&&((h=p.value)==null?void 0:h.length)<=4,"minimal-size":o.value&&((P=p.value)==null?void 0:P.length)<=3})},[(T(!0),$(pe,null,Me(p.value,(w,u)=>(T(),bt(ht,{grid:o.value,target:p.value,"nft-id":w,"v-key":u},null,8,["grid","target","nft-id","v-key"]))),256))],2),d.value&&d.value.paginaActual?(T(),$("section",Ir,[d.value.paginaActual>1?(T(),$("span",Mr,[C("i",{class:ae({"fas fa-th icon-grid":!0,active:o.value}),style:{color:"#ffffff"},onClick:c},null,2),C("button",{class:"btn btn-secundary",onClick:x},"previus")])):W("",!0),d.value.paginaActual==1?(T(),$("span",Rr,[C("i",{class:ae({"fas fa-th icon-grid":!0,active:o.value}),style:{color:"#ffffff"},onClick:c},null,2)])):W("",!0),C("label",jr,[d.value.totalPaginas>2?(T(),$("div",Fr,[(T(),$(pe,null,Me(3,(w,u)=>He(C("button",{class:ae({"btn-pag":!0,active:d.value.paginaActual===w}),onClick:v=>g(w)},[ye(re(w),1)],10,Wr),[[k,u]])),64))])):W("",!0),C("div",zr," page "+re(d.value.paginaActual)+" de "+re(d.value.totalPaginas),1),d.value.totalPaginas>=10?(T(),$("div",Hr,[(T(!0),$(pe,null,Me(d.value.totalPaginas,(w,u)=>(T(),$(pe,null,[u&&d.value.totalPaginas>3&&u>=d.value.totalPaginas-3?(T(),$("button",{key:0,class:ae({"btn-pag":!0,active:d.value.paginaActual===w}),onClick:v=>g(w)},re(w),11,Vr)):W("",!0)],64))),256))])):W("",!0)]),d.value.totalPaginas!==d.value.paginaActual?(T(),$("span",qr,[C("button",{class:"btn btn-primary",onClick:y},"next")])):(T(),$("span",Xr))])):(T(),$("section",Yr))],64)}}},Kr=wt(Ur,[["__scopeId","data-v-13a4c6e6"]]);export{Kr as C,Qt as _};