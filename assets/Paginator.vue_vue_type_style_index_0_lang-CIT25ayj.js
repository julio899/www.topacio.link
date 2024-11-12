import{ak as ht,al as bt,r as ae,o as Se,s as tt,B as ne,h as se,a7 as qe,a as ke,b as rt,d as Xe,P as Ue,a0 as gt,m as yt,w as wt,x as xt,k as Q,e as Ot,t as Pt,c as Et,f as kt,I as Bt,T as Ct,n as St,aj as De,H as Dt,Y as $t,am as At}from"./index-BOhIgEpW.js";function Be(t,e,r){var o,n,a,s,i;e==null&&(e=100);function p(){var l=Date.now()-s;l<e&&l>=0?o=setTimeout(p,e-l):(o=null,r||(i=t.apply(a,n),a=n=null))}var f=function(){a=this,n=arguments,s=Date.now();var l=r&&!o;return o||(o=setTimeout(p,e)),l&&(i=t.apply(a,n),a=n=null),i};return f.clear=function(){o&&(clearTimeout(o),o=null)},f.flush=function(){o&&(i=t.apply(a,n),a=n=null,clearTimeout(o),o=null)},f}Be.debounce=Be;var Pe=Be;function Tt(t,e,r){At(t)?se(t,(o,n)=>{n==null||n.removeEventListener(e,r),o==null||o.addEventListener(e,r)}):Se(()=>{t.addEventListener(e,r)}),De(()=>{var o;(o=Q(t))===null||o===void 0||o.removeEventListener(e,r)})}function jt(t,e){const r="pointerdown";return typeof window>"u"||!window?void 0:Tt(window,r,n=>{const a=Q(t);a&&(a===n.target||n.composedPath().includes(a)||e(n))})}function Lt(t,e,r){let o=null;const n=ae(!1);Se(()=>{(t.content!==void 0||r.value)&&(n.value=!0),o=new MutationObserver(a),o.observe(e.value,{childList:!0,subtree:!0})}),De(()=>o.disconnect()),se(r,s=>{s?n.value=!0:n.value=!1});const a=()=>{t.content?n.value=!0:n.value=!1};return{hasContent:n}}function ee(t,e){var r=t.getBoundingClientRect(),o=1,n=1;return{width:r.width/o,height:r.height/n,top:r.top/n,right:r.right/o,bottom:r.bottom/n,left:r.left/o,x:r.left/o,y:r.top/n}}function I(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function $e(t){var e=I(t),r=e.pageXOffset,o=e.pageYOffset;return{scrollLeft:r,scrollTop:o}}function pe(t){var e=I(t).Element;return t instanceof e||t instanceof Element}function j(t){var e=I(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function nt(t){if(typeof ShadowRoot>"u")return!1;var e=I(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function Rt(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Mt(t){return t===I(t)||!j(t)?$e(t):Rt(t)}function z(t){return t?(t.nodeName||"").toLowerCase():null}function G(t){return((pe(t)?t.ownerDocument:t.document)||window.document).documentElement}function Ae(t){return ee(G(t)).left+$e(t).scrollLeft}function U(t){return I(t).getComputedStyle(t)}function Te(t){var e=U(t),r=e.overflow,o=e.overflowX,n=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+o)}function Nt(t){var e=t.getBoundingClientRect(),r=e.width/t.offsetWidth||1,o=e.height/t.offsetHeight||1;return r!==1||o!==1}function It(t,e,r){r===void 0&&(r=!1);var o=j(e);j(e)&&Nt(e);var n=G(e),a=ee(t),s={scrollLeft:0,scrollTop:0},i={x:0,y:0};return(o||!o&&!r)&&((z(e)!=="body"||Te(n))&&(s=Mt(e)),j(e)?(i=ee(e),i.x+=e.clientLeft,i.y+=e.clientTop):n&&(i.x=Ae(n))),{x:a.left+s.scrollLeft-i.x,y:a.top+s.scrollTop-i.y,width:a.width,height:a.height}}function je(t){var e=ee(t),r=t.offsetWidth,o=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-o)<=1&&(o=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:o}}function we(t){return z(t)==="html"?t:t.assignedSlot||t.parentNode||(nt(t)?t.host:null)||G(t)}function ot(t){return["html","body","#document"].indexOf(z(t))>=0?t.ownerDocument.body:j(t)&&Te(t)?t:ot(we(t))}function ie(t,e){var r;e===void 0&&(e=[]);var o=ot(t),n=o===((r=t.ownerDocument)==null?void 0:r.body),a=I(o),s=n?[a].concat(a.visualViewport||[],Te(o)?o:[]):o,i=e.concat(s);return n?i:i.concat(ie(we(s)))}function Wt(t){return["table","td","th"].indexOf(z(t))>=0}function Ke(t){return!j(t)||U(t).position==="fixed"?null:t.offsetParent}function Ht(t){var e=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,r=navigator.userAgent.indexOf("Trident")!==-1;if(r&&j(t)){var o=U(t);if(o.position==="fixed")return null}for(var n=we(t);j(n)&&["html","body"].indexOf(z(n))<0;){var a=U(n);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||e&&a.willChange==="filter"||e&&a.filter&&a.filter!=="none")return n;n=n.parentNode}return null}function ce(t){for(var e=I(t),r=Ke(t);r&&Wt(r)&&U(r).position==="static";)r=Ke(r);return r&&(z(r)==="html"||z(r)==="body"&&U(r).position==="static")?e:r||Ht(t)||e}var L="top",M="bottom",N="right",R="left",Le="auto",ue=[L,M,N,R],te="start",le="end",zt="clippingParents",at="viewport",oe="popper",Vt="reference",Ge=ue.reduce(function(t,e){return t.concat([e+"-"+te,e+"-"+le])},[]),it=[].concat(ue,[Le]).reduce(function(t,e){return t.concat([e,e+"-"+te,e+"-"+le])},[]),Ft="beforeRead",Yt="read",qt="afterRead",Xt="beforeMain",Ut="main",Kt="afterMain",Gt="beforeWrite",Jt="write",Qt="afterWrite",Zt=[Ft,Yt,qt,Xt,Ut,Kt,Gt,Jt,Qt];function _t(t){var e=new Map,r=new Set,o=[];t.forEach(function(a){e.set(a.name,a)});function n(a){r.add(a.name);var s=[].concat(a.requires||[],a.requiresIfExists||[]);s.forEach(function(i){if(!r.has(i)){var p=e.get(i);p&&n(p)}}),o.push(a)}return t.forEach(function(a){r.has(a.name)||n(a)}),o}function er(t){var e=_t(t);return Zt.reduce(function(r,o){return r.concat(e.filter(function(n){return n.phase===o}))},[])}function tr(t){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(t())})})),e}}function H(t){return t.split("-")[0]}function rr(t){var e=t.reduce(function(r,o){var n=r[o.name];return r[o.name]=n?Object.assign({},n,o,{options:Object.assign({},n.options,o.options),data:Object.assign({},n.data,o.data)}):o,r},{});return Object.keys(e).map(function(r){return e[r]})}function nr(t){var e=I(t),r=G(t),o=e.visualViewport,n=r.clientWidth,a=r.clientHeight,s=0,i=0;return o&&(n=o.width,a=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=o.offsetLeft,i=o.offsetTop)),{width:n,height:a,x:s+Ae(t),y:i}}var K=Math.max,fe=Math.min,he=Math.round;function or(t){var e,r=G(t),o=$e(t),n=(e=t.ownerDocument)==null?void 0:e.body,a=K(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),s=K(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),i=-o.scrollLeft+Ae(t),p=-o.scrollTop;return U(n||r).direction==="rtl"&&(i+=K(r.clientWidth,n?n.clientWidth:0)-a),{width:a,height:s,x:i,y:p}}function st(t,e){var r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&nt(r)){var o=e;do{if(o&&t.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function Ce(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function ar(t){var e=ee(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}function Je(t,e){return e===at?Ce(nr(t)):j(e)?ar(e):Ce(or(G(t)))}function ir(t){var e=ie(we(t)),r=["absolute","fixed"].indexOf(U(t).position)>=0,o=r&&j(t)?ce(t):t;return pe(o)?e.filter(function(n){return pe(n)&&st(n,o)&&z(n)!=="body"}):[]}function sr(t,e,r){var o=e==="clippingParents"?ir(t):[].concat(e),n=[].concat(o,[r]),a=n[0],s=n.reduce(function(i,p){var f=Je(t,p);return i.top=K(f.top,i.top),i.right=fe(f.right,i.right),i.bottom=fe(f.bottom,i.bottom),i.left=K(f.left,i.left),i},Je(t,a));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function re(t){return t.split("-")[1]}function Re(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function pt(t){var e=t.reference,r=t.element,o=t.placement,n=o?H(o):null,a=o?re(o):null,s=e.x+e.width/2-r.width/2,i=e.y+e.height/2-r.height/2,p;switch(n){case L:p={x:s,y:e.y-r.height};break;case M:p={x:s,y:e.y+e.height};break;case N:p={x:e.x+e.width,y:i};break;case R:p={x:e.x-r.width,y:i};break;default:p={x:e.x,y:e.y}}var f=n?Re(n):null;if(f!=null){var l=f==="y"?"height":"width";switch(a){case te:p[f]=p[f]-(e[l]/2-r[l]/2);break;case le:p[f]=p[f]+(e[l]/2-r[l]/2);break}}return p}function lt(){return{top:0,right:0,bottom:0,left:0}}function ft(t){return Object.assign({},lt(),t)}function ct(t,e){return e.reduce(function(r,o){return r[o]=t,r},{})}function Me(t,e){e===void 0&&(e={});var r=e,o=r.placement,n=o===void 0?t.placement:o,a=r.boundary,s=a===void 0?zt:a,i=r.rootBoundary,p=i===void 0?at:i,f=r.elementContext,l=f===void 0?oe:f,b=r.altBoundary,O=b===void 0?!1:b,d=r.padding,m=d===void 0?0:d,u=ft(typeof m!="number"?m:ct(m,ue)),v=l===oe?Vt:oe,g=t.rects.popper,y=t.elements[O?v:l],w=sr(pe(y)?y:y.contextElement||G(t.elements.popper),s,p),c=ee(t.elements.reference),P=pt({reference:c,element:g,strategy:"absolute",placement:n}),h=Ce(Object.assign({},g,P)),x=l===oe?h:c,k={top:w.top-x.top+u.top,bottom:x.bottom-w.bottom+u.bottom,left:w.left-x.left+u.left,right:x.right-w.right+u.right},E=t.modifiersData.offset;if(l===oe&&E){var $=E[n];Object.keys(k).forEach(function(A){var V=[N,M].indexOf(A)>=0?1:-1,B=[L,M].indexOf(A)>=0?"y":"x";k[A]+=$[B]*V})}return k}var Qe={placement:"bottom",modifiers:[],strategy:"absolute"};function Ze(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function pr(t){t===void 0&&(t={});var e=t,r=e.defaultModifiers,o=r===void 0?[]:r,n=e.defaultOptions,a=n===void 0?Qe:n;return function(i,p,f){f===void 0&&(f=a);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},Qe,a),modifiersData:{},elements:{reference:i,popper:p},attributes:{},styles:{}},b=[],O=!1,d={state:l,setOptions:function(g){var y=typeof g=="function"?g(l.options):g;u(),l.options=Object.assign({},a,l.options,y),l.scrollParents={reference:pe(i)?ie(i):i.contextElement?ie(i.contextElement):[],popper:ie(p)};var w=er(rr([].concat(o,l.options.modifiers)));return l.orderedModifiers=w.filter(function(c){return c.enabled}),m(),d.update()},forceUpdate:function(){if(!O){var g=l.elements,y=g.reference,w=g.popper;if(Ze(y,w)){l.rects={reference:It(y,ce(w),l.options.strategy==="fixed"),popper:je(w)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function($){return l.modifiersData[$.name]=Object.assign({},$.data)});for(var c=0;c<l.orderedModifiers.length;c++){if(l.reset===!0){l.reset=!1,c=-1;continue}var P=l.orderedModifiers[c],h=P.fn,x=P.options,k=x===void 0?{}:x,E=P.name;typeof h=="function"&&(l=h({state:l,options:k,name:E,instance:d})||l)}}}},update:tr(function(){return new Promise(function(v){d.forceUpdate(),v(l)})}),destroy:function(){u(),O=!0}};if(!Ze(i,p))return d;d.setOptions(f).then(function(v){!O&&f.onFirstUpdate&&f.onFirstUpdate(v)});function m(){l.orderedModifiers.forEach(function(v){var g=v.name,y=v.options,w=y===void 0?{}:y,c=v.effect;if(typeof c=="function"){var P=c({state:l,name:g,instance:d,options:w}),h=function(){};b.push(P||h)}})}function u(){b.forEach(function(v){return v()}),b=[]}return d}}var be={passive:!0};function lr(t){var e=t.state,r=t.instance,o=t.options,n=o.scroll,a=n===void 0?!0:n,s=o.resize,i=s===void 0?!0:s,p=I(e.elements.popper),f=[].concat(e.scrollParents.reference,e.scrollParents.popper);return a&&f.forEach(function(l){l.addEventListener("scroll",r.update,be)}),i&&p.addEventListener("resize",r.update,be),function(){a&&f.forEach(function(l){l.removeEventListener("scroll",r.update,be)}),i&&p.removeEventListener("resize",r.update,be)}}var fr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:lr,data:{}};function cr(t){var e=t.state,r=t.name;e.modifiersData[r]=pt({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var ur={name:"popperOffsets",enabled:!0,phase:"read",fn:cr,data:{}},dr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function vr(t){var e=t.x,r=t.y,o=window,n=o.devicePixelRatio||1;return{x:he(he(e*n)/n)||0,y:he(he(r*n)/n)||0}}function _e(t){var e,r=t.popper,o=t.popperRect,n=t.placement,a=t.variation,s=t.offsets,i=t.position,p=t.gpuAcceleration,f=t.adaptive,l=t.roundOffsets,b=l===!0?vr(s):typeof l=="function"?l(s):s,O=b.x,d=O===void 0?0:O,m=b.y,u=m===void 0?0:m,v=s.hasOwnProperty("x"),g=s.hasOwnProperty("y"),y=R,w=L,c=window;if(f){var P=ce(r),h="clientHeight",x="clientWidth";P===I(r)&&(P=G(r),U(P).position!=="static"&&i==="absolute"&&(h="scrollHeight",x="scrollWidth")),P=P,(n===L||(n===R||n===N)&&a===le)&&(w=M,u-=P[h]-o.height,u*=p?1:-1),(n===R||(n===L||n===M)&&a===le)&&(y=N,d-=P[x]-o.width,d*=p?1:-1)}var k=Object.assign({position:i},f&&dr);if(p){var E;return Object.assign({},k,(E={},E[w]=g?"0":"",E[y]=v?"0":"",E.transform=(c.devicePixelRatio||1)<=1?"translate("+d+"px, "+u+"px)":"translate3d("+d+"px, "+u+"px, 0)",E))}return Object.assign({},k,(e={},e[w]=g?u+"px":"",e[y]=v?d+"px":"",e.transform="",e))}function mr(t){var e=t.state,r=t.options,o=r.gpuAcceleration,n=o===void 0?!0:o,a=r.adaptive,s=a===void 0?!0:a,i=r.roundOffsets,p=i===void 0?!0:i,f={placement:H(e.placement),variation:re(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,_e(Object.assign({},f,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:p})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,_e(Object.assign({},f,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:p})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var hr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:mr,data:{}};function br(t){var e=t.state;Object.keys(e.elements).forEach(function(r){var o=e.styles[r]||{},n=e.attributes[r]||{},a=e.elements[r];!j(a)||!z(a)||(Object.assign(a.style,o),Object.keys(n).forEach(function(s){var i=n[s];i===!1?a.removeAttribute(s):a.setAttribute(s,i===!0?"":i)}))})}function gr(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(o){var n=e.elements[o],a=e.attributes[o]||{},s=Object.keys(e.styles.hasOwnProperty(o)?e.styles[o]:r[o]),i=s.reduce(function(p,f){return p[f]="",p},{});!j(n)||!z(n)||(Object.assign(n.style,i),Object.keys(a).forEach(function(p){n.removeAttribute(p)}))})}}var yr={name:"applyStyles",enabled:!0,phase:"write",fn:br,effect:gr,requires:["computeStyles"]},wr=[fr,ur,hr,yr],xr=pr({defaultModifiers:wr});function Or(t){return t==="x"?"y":"x"}function ge(t,e,r){return K(t,fe(e,r))}function Pr(t){var e=t.state,r=t.options,o=t.name,n=r.mainAxis,a=n===void 0?!0:n,s=r.altAxis,i=s===void 0?!1:s,p=r.boundary,f=r.rootBoundary,l=r.altBoundary,b=r.padding,O=r.tether,d=O===void 0?!0:O,m=r.tetherOffset,u=m===void 0?0:m,v=Me(e,{boundary:p,rootBoundary:f,padding:b,altBoundary:l}),g=H(e.placement),y=re(e.placement),w=!y,c=Re(g),P=Or(c),h=e.modifiersData.popperOffsets,x=e.rects.reference,k=e.rects.popper,E=typeof u=="function"?u(Object.assign({},e.rects,{placement:e.placement})):u,$={x:0,y:0};if(h){if(a||i){var A=c==="y"?L:R,V=c==="y"?M:N,B=c==="y"?"height":"width",F=h[c],Y=h[c]+v[A],T=h[c]-v[V],q=d?-k[B]/2:0,S=y===te?x[B]:k[B],D=y===te?-k[B]:-x[B],C=e.elements.arrow,X=d&&C?je(C):{width:0,height:0},Z=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:lt(),de=Z[A],J=Z[V],W=ge(0,x[B],X[B]),ve=w?x[B]/2-q-W-de-E:S-W-de-E,xe=w?-x[B]/2+q+W+J+E:D+W+J+E,_=e.elements.arrow&&ce(e.elements.arrow),Oe=_?c==="y"?_.clientTop||0:_.clientLeft||0:0,Ie=e.modifiersData.offset?e.modifiersData.offset[e.placement][c]:0,We=h[c]+ve-Ie-Oe,He=h[c]+xe-Ie;if(a){var ze=ge(d?fe(Y,We):Y,F,d?K(T,He):T);h[c]=ze,$[c]=ze-F}if(i){var vt=c==="x"?L:R,mt=c==="x"?M:N,me=h[P],Ve=me+v[vt],Fe=me-v[mt],Ye=ge(d?fe(Ve,We):Ve,me,d?K(Fe,He):Fe);h[P]=Ye,$[P]=Ye-me}}e.modifiersData[o]=$}}var Er={name:"preventOverflow",enabled:!0,phase:"main",fn:Pr,requiresIfExists:["offset"]},kr={left:"right",right:"left",bottom:"top",top:"bottom"};function ye(t){return t.replace(/left|right|bottom|top/g,function(e){return kr[e]})}var Br={start:"end",end:"start"};function et(t){return t.replace(/start|end/g,function(e){return Br[e]})}function Cr(t,e){e===void 0&&(e={});var r=e,o=r.placement,n=r.boundary,a=r.rootBoundary,s=r.padding,i=r.flipVariations,p=r.allowedAutoPlacements,f=p===void 0?it:p,l=re(o),b=l?i?Ge:Ge.filter(function(m){return re(m)===l}):ue,O=b.filter(function(m){return f.indexOf(m)>=0});O.length===0&&(O=b);var d=O.reduce(function(m,u){return m[u]=Me(t,{placement:u,boundary:n,rootBoundary:a,padding:s})[H(u)],m},{});return Object.keys(d).sort(function(m,u){return d[m]-d[u]})}function Sr(t){if(H(t)===Le)return[];var e=ye(t);return[et(t),e,et(e)]}function Dr(t){var e=t.state,r=t.options,o=t.name;if(!e.modifiersData[o]._skip){for(var n=r.mainAxis,a=n===void 0?!0:n,s=r.altAxis,i=s===void 0?!0:s,p=r.fallbackPlacements,f=r.padding,l=r.boundary,b=r.rootBoundary,O=r.altBoundary,d=r.flipVariations,m=d===void 0?!0:d,u=r.allowedAutoPlacements,v=e.options.placement,g=H(v),y=g===v,w=p||(y||!m?[ye(v)]:Sr(v)),c=[v].concat(w).reduce(function(J,W){return J.concat(H(W)===Le?Cr(e,{placement:W,boundary:l,rootBoundary:b,padding:f,flipVariations:m,allowedAutoPlacements:u}):W)},[]),P=e.rects.reference,h=e.rects.popper,x=new Map,k=!0,E=c[0],$=0;$<c.length;$++){var A=c[$],V=H(A),B=re(A)===te,F=[L,M].indexOf(V)>=0,Y=F?"width":"height",T=Me(e,{placement:A,boundary:l,rootBoundary:b,altBoundary:O,padding:f}),q=F?B?N:R:B?M:L;P[Y]>h[Y]&&(q=ye(q));var S=ye(q),D=[];if(a&&D.push(T[V]<=0),i&&D.push(T[q]<=0,T[S]<=0),D.every(function(J){return J})){E=A,k=!1;break}x.set(A,D)}if(k)for(var C=m?3:1,X=function(W){var ve=c.find(function(xe){var _=x.get(xe);if(_)return _.slice(0,W).every(function(Oe){return Oe})});if(ve)return E=ve,"break"},Z=C;Z>0;Z--){var de=X(Z);if(de==="break")break}e.placement!==E&&(e.modifiersData[o]._skip=!0,e.placement=E,e.reset=!0)}}var $r={name:"flip",enabled:!0,phase:"main",fn:Dr,requiresIfExists:["offset"],data:{_skip:!1}};function Ar(t,e,r){var o=H(t),n=[R,L].indexOf(o)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,s=a[0],i=a[1];return s=s||0,i=(i||0)*n,[R,N].indexOf(o)>=0?{x:i,y:s}:{x:s,y:i}}function Tr(t){var e=t.state,r=t.options,o=t.name,n=r.offset,a=n===void 0?[0,0]:n,s=it.reduce(function(l,b){return l[b]=Ar(b,e.rects,a),l},{}),i=s[e.placement],p=i.x,f=i.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=p,e.modifiersData.popperOffsets.y+=f),e.modifiersData[o]=s}var jr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Tr},Lr=function(e,r){return e=typeof e=="function"?e(Object.assign({},r.rects,{placement:r.placement})):e,ft(typeof e!="number"?e:ct(e,ue))};function Rr(t){var e,r=t.state,o=t.name,n=t.options,a=r.elements.arrow,s=r.modifiersData.popperOffsets,i=H(r.placement),p=Re(i),f=[R,N].indexOf(i)>=0,l=f?"height":"width";if(!(!a||!s)){var b=Lr(n.padding,r),O=je(a),d=p==="y"?L:R,m=p==="y"?M:N,u=r.rects.reference[l]+r.rects.reference[p]-s[p]-r.rects.popper[l],v=s[p]-r.rects.reference[p],g=ce(a),y=g?p==="y"?g.clientHeight||0:g.clientWidth||0:0,w=u/2-v/2,c=b[d],P=y-O[l]-b[m],h=y/2-O[l]/2+w,x=ge(c,h,P),k=p;r.modifiersData[o]=(e={},e[k]=x,e.centerOffset=x-h,e)}}function Mr(t){var e=t.state,r=t.options,o=r.element,n=o===void 0?"[data-popper-arrow]":o;n!=null&&(typeof n=="string"&&(n=e.elements.popper.querySelector(n),!n)||st(e.elements.popper,n)&&(e.elements.arrow=n))}var Nr={name:"arrow",enabled:!0,phase:"main",fn:Rr,effect:Mr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};const Ee=t=>parseInt(t,10);function Ir({arrowPadding:t,emit:e,locked:r,offsetDistance:o,offsetSkid:n,placement:a,popperNode:s,triggerNode:i}){const p=Dt({isOpen:!1,popperInstance:null}),f=u=>{var v;(v=p.popperInstance)===null||v===void 0||v.setOptions(g=>({...g,modifiers:[...g.modifiers,{name:"eventListeners",enabled:u}]}))},l=()=>f(!0),b=()=>f(!1),O=()=>{p.isOpen&&(p.isOpen=!1,e("close:popper"))},d=()=>{p.isOpen||(p.isOpen=!0,e("open:popper"))};se([()=>p.isOpen,a],async([u])=>{u?(await m(),l()):b()});const m=async()=>{await $t(),p.popperInstance=xr(i.value,s.value,{placement:a.value,modifiers:[Er,$r,{name:"flip",enabled:!r.value},Nr,{name:"arrow",options:{padding:Ee(t.value)}},jr,{name:"offset",options:{offset:[Ee(n.value),Ee(o.value)]}}]}),p.popperInstance.update()};return De(()=>{var u;(u=p.popperInstance)===null||u===void 0||u.destroy()}),{...tt(p),open:d,close:O}}const Wr={id:"arrow","data-popper-arrow":""};function Hr(t,e){return ke(),rt("div",Wr)}function ut(t,e){e===void 0&&(e={});var r=e.insertAt;if(!(!t||typeof document>"u")){var o=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",r==="top"&&o.firstChild?o.insertBefore(n,o.firstChild):o.appendChild(n),n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t))}}var zr=`
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
`;ut(zr);const Ne={};Ne.render=Hr;Ne.__scopeId="data-v-20b7fd4a";var Vr=Ne;const Fr=["onKeyup"];var dt={props:{placement:{type:String,default:"bottom",validator:function(t){return["auto","auto-start","auto-end","top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end"].includes(t)}},disableClickAway:{type:Boolean,default:!1},offsetSkid:{type:String,default:"0"},offsetDistance:{type:String,default:"12"},hover:{type:Boolean,default:!1},show:{type:Boolean,default:null},disabled:{type:Boolean,default:!1},openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0},zIndex:{type:[Number,String],default:9999},arrow:{type:Boolean,default:!1},arrowPadding:{type:String,default:"0"},interactive:{type:Boolean,default:!0},locked:{type:Boolean,default:!1},content:{type:String,default:null}},emits:["open:popper","close:popper"],setup(t,{emit:e}){const r=t;ht(S=>({c81fc0a4:t.zIndex}));const o=bt(),n=ae(null),a=ae(null),s=ae(null),i=ae(!1);Se(()=>{const S=o.default();if(S&&S.length>1)return console.error(`[Popper]: The <Popper> component expects only one child element at its root. You passed ${S.length} child nodes.`)});const{arrowPadding:p,closeDelay:f,content:l,disableClickAway:b,disabled:O,interactive:d,locked:m,offsetDistance:u,offsetSkid:v,openDelay:g,placement:y,show:w}=tt(r),{isOpen:c,open:P,close:h}=Ir({arrowPadding:p,emit:e,locked:m,offsetDistance:u,offsetSkid:v,placement:y,popperNode:a,triggerNode:s}),{hasContent:x}=Lt(o,a,l),k=ne(()=>w.value!==null),E=ne(()=>O.value||!x.value),$=ne(()=>c.value&&!E.value),A=ne(()=>!b.value&&!k.value),V=ne(()=>d.value?`border: ${u.value}px solid transparent; margin: -${u.value}px;`:null),B=Pe.debounce(P,g.value),F=Pe.debounce(h,f.value),Y=async()=>{E.value||k.value||(F.clear(),B())},T=async()=>{k.value||(B.clear(),F())},q=()=>{c.value?T():Y()};return se([x,O],([S,D])=>{c.value&&(!S||D)&&h()}),se(c,S=>{S?i.value=!0:Pe.debounce(()=>{i.value=!1},200)}),qe(()=>{k.value&&(w.value?B():F())}),qe(()=>{A.value&&jt(n,T)}),(S,D)=>(ke(),rt("div",{class:"inline-block",style:St(Q(V)),onMouseleave:D[2]||(D[2]=C=>t.hover&&T()),ref:(C,X)=>{X.popperContainerNode=C,n.value=C}},[Xe("div",{ref:(C,X)=>{X.triggerNode=C,s.value=C},onMouseover:D[0]||(D[0]=C=>t.hover&&Y()),onClick:q,onFocus:Y,onKeyup:gt(T,["esc"])},[Ue(S.$slots,"default")],40,Fr),yt(Ct,{name:"fade"},{default:wt(()=>[xt(Xe("div",{onClick:D[1]||(D[1]=C=>!Q(d)&&T()),class:"popper",ref:(C,X)=>{X.popperNode=C,a.value=C}},[Ue(S.$slots,"content",{close:Q(h),isOpen:i.value},()=>[Ot(Pt(Q(l)),1)]),t.arrow?(ke(),Et(Vr,{key:0})):kt("",!0)],512),[[Bt,Q($)]])]),_:3})],36))}},Yr=`
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
`;ut(Yr);dt.__scopeId="data-v-5784ed69";var Xr=(()=>{const t=dt;return t.install=e=>{e.component("Popper",t)},t})();export{Xr as e};
