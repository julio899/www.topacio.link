import{cf as Fe,cD as te}from"./index-DXoDjGXY.js";const ye=/^[a-z0-9]+(-[a-z0-9]+)*$/,D=(e,t,n,r="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),l=o.pop(),u={provider:o.length>0?o[0]:r,prefix:l,name:c};return t&&!O(u)?null:u}const i=o[0],s=i.split("-");if(s.length>1){const c={provider:r,prefix:s.shift(),name:s.join("-")};return t&&!O(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:i};return t&&!O(c,n)?null:c}return null},O=(e,t)=>e?!!((t&&e.prefix===""||e.prefix)&&e.name):!1,be=Object.freeze({left:0,top:0,width:16,height:16}),_=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),N=Object.freeze({...be,..._}),Q=Object.freeze({...N,body:"",hidden:!1});function Ae(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const r=((e.rotate||0)+(t.rotate||0))%4;return r&&(n.rotate=r),n}function ne(e,t){const n=Ae(e,t);for(const r in Q)r in _?r in e&&!(r in n)&&(n[r]=_[r]):r in t?n[r]=t[r]:r in e&&(n[r]=e[r]);return n}function _e(e,t){const n=e.icons,r=e.aliases||Object.create(null),o=Object.create(null);function i(s){if(n[s])return o[s]=[];if(!(s in o)){o[s]=null;const c=r[s]&&r[s].parent,l=c&&i(c);l&&(o[s]=[c].concat(l))}return o[s]}return Object.keys(n).concat(Object.keys(r)).forEach(i),o}function De(e,t,n){const r=e.icons,o=e.aliases||Object.create(null);let i={};function s(c){i=ne(r[c]||o[c],i)}return s(t),n.forEach(s),ne(e,i)}function we(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(o=>{t(o,null),n.push(o)});const r=_e(e);for(const o in r){const i=r[o];i&&(t(o,De(e,o,i)),n.push(o))}return n}const Ne={provider:"",aliases:{},not_found:{},...be};function z(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function xe(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!z(e,Ne))return null;const n=t.icons;for(const o in n){const i=n[o];if(!o||typeof i.body!="string"||!z(i,Q))return null}const r=t.aliases||Object.create(null);for(const o in r){const i=r[o],s=i.parent;if(!o||typeof s!="string"||!n[s]&&!r[s]||!z(i,Q))return null}return t}const oe=Object.create(null);function Re(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function v(e,t){const n=oe[e]||(oe[e]=Object.create(null));return n[t]||(n[t]=Re(e,t))}function J(e,t){return xe(t)?we(t,(n,r)=>{r?e.icons[n]=r:e.missing.add(n)}):[]}function Be(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let P=!1;function Ie(e){return typeof e=="boolean"&&(P=e),P}function ze(e){const t=typeof e=="string"?D(e,!0,P):e;if(t){const n=v(t.provider,t.prefix),r=t.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function Ve(e,t){const n=D(e,!0,P);if(!n)return!1;const r=v(n.provider,n.prefix);return t?Be(r,n.name,t):(r.missing.add(n.name),!0)}function Qe(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),P&&!t&&!e.prefix){let o=!1;return xe(e)&&(e.prefix="",we(e,(i,s)=>{Ve(i,s)&&(o=!0)})),o}const n=e.prefix;if(!O({provider:t,prefix:n,name:"a"}))return!1;const r=v(t,n);return!!J(r,e)}const Se=Object.freeze({width:null,height:null}),ve=Object.freeze({...Se,..._}),$e=/(-?[0-9.]*[0-9]+[0-9.]*)/g,qe=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function re(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const r=e.split($e);if(r===null||!r.length)return e;const o=[];let i=r.shift(),s=qe.test(i);for(;;){if(s){const c=parseFloat(i);isNaN(c)?o.push(i):o.push(Math.ceil(c*t*n)/n)}else o.push(i);if(i=r.shift(),i===void 0)return o.join("");s=!s}}function He(e,t="defs"){let n="";const r=e.indexOf("<"+t);for(;r>=0;){const o=e.indexOf(">",r),i=e.indexOf("</"+t);if(o===-1||i===-1)break;const s=e.indexOf(">",i);if(s===-1)break;n+=e.slice(o+1,i).trim(),e=e.slice(0,r).trim()+e.slice(s+1)}return{defs:n,content:e}}function Ue(e,t){return e?"<defs>"+e+"</defs>"+t:t}function Ge(e,t,n){const r=He(e);return Ue(r.defs,t+r.content+n)}const Ke=e=>e==="unset"||e==="undefined"||e==="none";function Je(e,t){const n={...N,...e},r={...ve,...t},o={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(g=>{const a=[],C=g.hFlip,I=g.vFlip;let w=g.rotate;C?I?w+=2:(a.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),a.push("scale(-1 1)"),o.top=o.left=0):I&&(a.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),a.push("scale(1 -1)"),o.top=o.left=0);let y;switch(w<0&&(w-=Math.floor(w/4)*4),w=w%4,w){case 1:y=o.height/2+o.top,a.unshift("rotate(90 "+y.toString()+" "+y.toString()+")");break;case 2:a.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:y=o.width/2+o.left,a.unshift("rotate(-90 "+y.toString()+" "+y.toString()+")");break}w%2===1&&(o.left!==o.top&&(y=o.left,o.left=o.top,o.top=y),o.width!==o.height&&(y=o.width,o.width=o.height,o.height=y)),a.length&&(i=Ge(i,'<g transform="'+a.join(" ")+'">',"</g>"))});const s=r.width,c=r.height,l=o.width,u=o.height;let f,d;s===null?(d=c===null?"1em":c==="auto"?u:c,f=re(d,l/u)):(f=s==="auto"?l:s,d=c===null?re(f,u/l):c==="auto"?u:c);const p={},m=(g,a)=>{Ke(a)||(p[g]=a.toString())};m("width",f),m("height",d);const x=[o.left,o.top,l,u];return p.viewBox=x.join(" "),{attributes:p,viewBox:x,body:i}}const We=/\sid="(\S+)"/g,Xe="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Ye=0;function Ze(e,t=Xe){const n=[];let r;for(;r=We.exec(e);)n.push(r[1]);if(!n.length)return e;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const s=typeof t=="function"?t(i):t+(Ye++).toString(),c=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+s+o+"$3")}),e=e.replace(new RegExp(o,"g"),""),e}const $=Object.create(null);function et(e,t){$[e]=t}function q(e){return $[e]||$[""]}function W(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const X=Object.create(null),j=["https://api.simplesvg.com","https://api.unisvg.com"],F=[];for(;j.length>0;)j.length===1||Math.random()>.5?F.push(j.shift()):F.push(j.pop());X[""]=W({resources:["https://api.iconify.design"].concat(F)});function tt(e,t){const n=W(t);return n===null?!1:(X[e]=n,!0)}function Y(e){return X[e]}const nt=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let ie=nt();function ot(e,t){const n=Y(e);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(s=>{o=Math.max(o,s.length)});const i=t+".json?icons=";r=n.maxURL-o-n.path.length-i.length}return r}function rt(e){return e===404}const it=(e,t,n)=>{const r=[],o=ot(e,t),i="icons";let s={type:i,provider:e,prefix:t,icons:[]},c=0;return n.forEach((l,u)=>{c+=l.length+1,c>=o&&u>0&&(r.push(s),s={type:i,provider:e,prefix:t,icons:[]},c=l.length),s.icons.push(l)}),r.push(s),r};function st(e){if(typeof e=="string"){const t=Y(e);if(t)return t.path}return"/"}const ct=(e,t,n)=>{if(!ie){n("abort",424);return}let r=st(t.provider);switch(t.type){case"icons":{const i=t.prefix,c=t.icons.join(","),l=new URLSearchParams({icons:c});r+=i+".json?"+l.toString();break}case"custom":{const i=t.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let o=503;ie(e+r).then(i=>{const s=i.status;if(s!==200){setTimeout(()=>{n(rt(s)?"abort":"next",s)});return}return o=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",o)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",o)})},lt={prepare:it,send:ct};function ft(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((o,i)=>o.provider!==i.provider?o.provider.localeCompare(i.provider):o.prefix!==i.prefix?o.prefix.localeCompare(i.prefix):o.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return e.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const i=o.provider,s=o.prefix,c=o.name,l=n[i]||(n[i]=Object.create(null)),u=l[s]||(l[s]=v(i,s));let f;c in u.icons?f=t.loaded:s===""||u.missing.has(c)?f=t.missing:f=t.pending;const d={provider:i,prefix:s,name:c};f.push(d)}),t}function Ce(e,t){e.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==t))})}function ut(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const r=e.provider,o=e.prefix;t.forEach(i=>{const s=i.icons,c=s.pending.length;s.pending=s.pending.filter(l=>{if(l.prefix!==o)return!0;const u=l.name;if(e.icons[u])s.loaded.push({provider:r,prefix:o,name:u});else if(e.missing.has(u))s.missing.push({provider:r,prefix:o,name:u});else return n=!0,!0;return!1}),s.pending.length!==c&&(n||Ce([e],i.id),i.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),i.abort))})}))}let at=0;function dt(e,t,n){const r=at++,o=Ce.bind(null,n,r);if(!t.pending.length)return o;const i={id:r,icons:t,callback:e,abort:o};return n.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(i)}),o}function ht(e,t=!0,n=!1){const r=[];return e.forEach(o=>{const i=typeof o=="string"?D(o,t,n):o;i&&r.push(i)}),r}var pt={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function gt(e,t,n,r){const o=e.resources.length,i=e.random?Math.floor(Math.random()*o):e.index;let s;if(e.random){let h=e.resources.slice(0);for(s=[];h.length>1;){const b=Math.floor(Math.random()*h.length);s.push(h[b]),h=h.slice(0,b).concat(h.slice(b+1))}s=s.concat(h)}else s=e.resources.slice(i).concat(e.resources.slice(0,i));const c=Date.now();let l="pending",u=0,f,d=null,p=[],m=[];typeof r=="function"&&m.push(r);function x(){d&&(clearTimeout(d),d=null)}function g(){l==="pending"&&(l="aborted"),x(),p.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),p=[]}function a(h,b){b&&(m=[]),typeof h=="function"&&m.push(h)}function C(){return{startTime:c,payload:t,status:l,queriesSent:u,queriesPending:p.length,subscribe:a,abort:g}}function I(){l="failed",m.forEach(h=>{h(void 0,f)})}function w(){p.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),p=[]}function y(h,b,k){const L=b!=="success";switch(p=p.filter(S=>S!==h),l){case"pending":break;case"failed":if(L||!e.dataAfterTimeout)return;break;default:return}if(b==="abort"){f=k,I();return}if(L){f=k,p.length||(s.length?B():I());return}if(x(),w(),!e.random){const S=e.resources.indexOf(h.resource);S!==-1&&S!==e.index&&(e.index=S)}l="completed",m.forEach(S=>{S(k)})}function B(){if(l!=="pending")return;x();const h=s.shift();if(h===void 0){if(p.length){d=setTimeout(()=>{x(),l==="pending"&&(w(),I())},e.timeout);return}I();return}const b={status:"pending",resource:h,callback:(k,L)=>{y(b,k,L)}};p.push(b),u++,d=setTimeout(B,e.rotate),n(h,t,b.callback)}return setTimeout(B),C}function ke(e){const t={...pt,...e};let n=[];function r(){n=n.filter(c=>c().status==="pending")}function o(c,l,u){const f=gt(t,c,l,(d,p)=>{r(),u&&u(d,p)});return n.push(f),f}function i(c){return n.find(l=>c(l))||null}return{query:o,find:i,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:r}}function se(){}const V=Object.create(null);function mt(e){if(!V[e]){const t=Y(e);if(!t)return;const n=ke(t),r={config:t,redundancy:n};V[e]=r}return V[e]}function yt(e,t,n){let r,o;if(typeof e=="string"){const i=q(e);if(!i)return n(void 0,424),se;o=i.send;const s=mt(e);s&&(r=s.redundancy)}else{const i=W(e);if(i){r=ke(i);const s=e.resources?e.resources[0]:"",c=q(s);c&&(o=c.send)}}return!r||!o?(n(void 0,424),se):r.query(t,o,n)().abort}const ce="iconify2",E="iconify",je=E+"-count",le=E+"-version",Te=36e5,bt=168,wt=50;function H(e,t){try{return e.getItem(t)}catch{}}function Z(e,t,n){try{return e.setItem(t,n),!0}catch{}}function fe(e,t){try{e.removeItem(t)}catch{}}function U(e,t){return Z(e,je,t.toString())}function G(e){return parseInt(H(e,je))||0}const R={local:!0,session:!0},Pe={local:new Set,session:new Set};let ee=!1;function xt(e){ee=e}let M=typeof window>"u"?{}:window;function Ee(e){const t=e+"Storage";try{if(M&&M[t]&&typeof M[t].length=="number")return M[t]}catch{}R[e]=!1}function Le(e,t){const n=Ee(e);if(!n)return;const r=H(n,le);if(r!==ce){if(r){const c=G(n);for(let l=0;l<c;l++)fe(n,E+l.toString())}Z(n,le,ce),U(n,0);return}const o=Math.floor(Date.now()/Te)-bt,i=c=>{const l=E+c.toString(),u=H(n,l);if(typeof u=="string"){try{const f=JSON.parse(u);if(typeof f=="object"&&typeof f.cached=="number"&&f.cached>o&&typeof f.provider=="string"&&typeof f.data=="object"&&typeof f.data.prefix=="string"&&t(f,c))return!0}catch{}fe(n,l)}};let s=G(n);for(let c=s-1;c>=0;c--)i(c)||(c===s-1?(s--,U(n,s)):Pe[e].add(c))}function Me(){if(!ee){xt(!0);for(const e in R)Le(e,t=>{const n=t.data,r=t.provider,o=n.prefix,i=v(r,o);if(!J(i,n).length)return!1;const s=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,s):s,!0})}}function It(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const r in R)Le(r,o=>{const i=o.data;return o.provider!==e.provider||i.prefix!==e.prefix||i.lastModified===t});return!0}function St(e,t){ee||Me();function n(r){let o;if(!R[r]||!(o=Ee(r)))return;const i=Pe[r];let s;if(i.size)i.delete(s=Array.from(i).shift());else if(s=G(o),s>=wt||!U(o,s+1))return;const c={cached:Math.floor(Date.now()/Te),provider:e.provider,data:t};return Z(o,E+s.toString(),JSON.stringify(c))}t.lastModified&&!It(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}function ue(){}function vt(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,ut(e)}))}function Ct(e){const t=[],n=[];return e.forEach(r=>{(r.match(ye)?t:n).push(r)}),{valid:t,invalid:n}}function T(e,t,n,r){function o(){const i=e.pendingIcons;t.forEach(s=>{i&&i.delete(s),e.icons[s]||e.missing.add(s)})}if(n&&typeof n=="object")try{if(!J(e,n).length){o();return}r&&St(e,n)}catch(i){console.error(i)}o(),vt(e)}function ae(e,t){e instanceof Promise?e.then(n=>{t(n)}).catch(()=>{t(null)}):t(e)}function kt(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:r}=e,o=e.iconsToLoad;if(delete e.iconsToLoad,!o||!o.length)return;const i=e.loadIcon;if(e.loadIcons&&(o.length>1||!i)){ae(e.loadIcons(o,r,n),f=>{T(e,o,f,!1)});return}if(i){o.forEach(f=>{const d=i(f,r,n);ae(d,p=>{const m=p?{prefix:r,icons:{[f]:p}}:null;T(e,[f],m,!1)})});return}const{valid:s,invalid:c}=Ct(o);if(c.length&&T(e,c,null,!1),!s.length)return;const l=r.match(ye)?q(n):null;if(!l){T(e,s,null,!1);return}l.prepare(n,r,s).forEach(f=>{yt(n,f,d=>{T(e,f.icons,d,!0)})})}))}const jt=(e,t)=>{const n=ht(e,!0,Ie()),r=ft(n);if(!r.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(r.loaded,r.missing,r.pending,ue)}),()=>{l=!1}}const o=Object.create(null),i=[];let s,c;return r.pending.forEach(l=>{const{provider:u,prefix:f}=l;if(f===c&&u===s)return;s=u,c=f,i.push(v(u,f));const d=o[u]||(o[u]=Object.create(null));d[f]||(d[f]=[])}),r.pending.forEach(l=>{const{provider:u,prefix:f,name:d}=l,p=v(u,f),m=p.pendingIcons||(p.pendingIcons=new Set);m.has(d)||(m.add(d),o[u][f].push(d))}),i.forEach(l=>{const u=o[l.provider][l.prefix];u.length&&kt(l,u)}),t?dt(t,r,i):ue};function Tt(e,t){const n={...e};for(const r in t){const o=t[r],i=typeof o;r in Se?(o===null||o&&(i==="string"||i==="number"))&&(n[r]=o):i===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}const Pt=/[\s,]+/;function Et(e,t){t.split(Pt).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function Lt(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(e);return isNaN(o)?0:r(o)}else if(n!==e){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let i=parseFloat(e.slice(0,e.length-n.length));return isNaN(i)?0:(i=i/o,i%1===0?r(i):0)}}return t}function Mt(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)n+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function Ot(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Ft(e){return"data:image/svg+xml,"+Ot(e)}function At(e){return'url("'+Ft(e)+'")'}const de={...ve,inline:!1},_t={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Dt={display:"inline-block"},K={backgroundColor:"currentColor"},Oe={backgroundColor:"transparent"},he={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},pe={webkitMask:K,mask:K,background:Oe};for(const e in pe){const t=pe[e];for(const n in he)t[e+n]=he[n]}const A={};["horizontal","vertical"].forEach(e=>{const t=e.slice(0,1)+"Flip";A[e+"-flip"]=t,A[e.slice(0,1)+"-flip"]=t,A[e+"Flip"]=t});function ge(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const me=(e,t)=>{const n=Tt(de,t),r={..._t},o=t.mode||"svg",i={},s=t.style,c=typeof s=="object"&&!(s instanceof Array)?s:{};for(let g in t){const a=t[g];if(a!==void 0)switch(g){case"icon":case"style":case"onLoad":case"mode":case"ssr":break;case"inline":case"hFlip":case"vFlip":n[g]=a===!0||a==="true"||a===1;break;case"flip":typeof a=="string"&&Et(n,a);break;case"color":i.color=a;break;case"rotate":typeof a=="string"?n[g]=Lt(a):typeof a=="number"&&(n[g]=a);break;case"ariaHidden":case"aria-hidden":a!==!0&&a!=="true"&&delete r["aria-hidden"];break;default:{const C=A[g];C?(a===!0||a==="true"||a===1)&&(n[C]=!0):de[g]===void 0&&(r[g]=a)}}}const l=Je(e,n),u=l.attributes;if(n.inline&&(i.verticalAlign="-0.125em"),o==="svg"){r.style={...i,...c},Object.assign(r,u);let g=0,a=t.id;return typeof a=="string"&&(a=a.replace(/-/g,"_")),r.innerHTML=Ze(l.body,a?()=>a+"ID"+g++:"iconifyVue"),te("svg",r)}const{body:f,width:d,height:p}=e,m=o==="mask"||(o==="bg"?!1:f.indexOf("currentColor")!==-1),x=Mt(f,{...u,width:d+"",height:p+""});return r.style={...i,"--svg":At(x),width:ge(u.width),height:ge(u.height),...Dt,...m?K:Oe,...c},te("span",r)};Ie(!0);et("",lt);if(typeof document<"u"&&typeof window<"u"){Me();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Qe(r))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const r="IconifyProviders["+n+"] is invalid.";try{const o=t[n];if(typeof o!="object"||!o||o.resources===void 0)continue;tt(n,o)||console.error(r)}catch{console.error(r)}}}}const Nt={...N,body:""},Bt=Fe({inheritAttrs:!1,data(){return{_name:"",_loadingIcon:null,iconMounted:!1,counter:0}},mounted(){this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(e,t,n){if(typeof e=="object"&&e!==null&&typeof e.body=="string")return this._name="",this.abortLoading(),{data:e};let r;if(typeof e!="string"||(r=D(e,!1,!0))===null)return this.abortLoading(),null;let o=ze(r);if(!o)return(!this._loadingIcon||this._loadingIcon.name!==e)&&(this.abortLoading(),this._name="",o!==null&&(this._loadingIcon={name:e,abort:jt([r],()=>{this.counter++})})),null;if(this.abortLoading(),this._name!==e&&(this._name=e,t&&t(e)),n){o=Object.assign({},o);const s=n(o.body,r.name,r.prefix,r.provider);typeof s=="string"&&(o.body=s)}const i=["iconify"];return r.prefix!==""&&i.push("iconify--"+r.prefix),r.provider!==""&&i.push("iconify--"+r.provider),{data:o,classes:i}}},render(){this.counter;const e=this.$attrs,t=this.iconMounted||e.ssr?this.getIcon(e.icon,e.onLoad,e.customise):null;if(!t)return me(Nt,e);let n=e;return t.classes&&(n={...e,class:(typeof e.class=="string"?e.class+" ":"")+t.classes.join(" ")}),me({...N,...t.data},n)}});export{Bt as I};
