(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(n){if(n.ep)return;n.ep=!0;const l=s(n);fetch(n.href,l)}})();const Q=(e,t)=>e===t,U={equals:Q};let W=j;const w=1,C=2,H={owned:null,cleanups:null,context:null,owner:null};var a=null;let I=null,J=null,c=null,p=null,y=null,v=0;function X(e,t){const s=c,i=a,n=e.length===0,l=t===void 0?i:t,o=n?H:{owned:null,cleanups:null,context:l?l.context:null,owner:l},r=n?e:()=>e(()=>$(()=>N(o)));a=o,c=null;try{return b(r,!0)}finally{c=s,a=i}}function Y(e,t){t=t?Object.assign({},U,t):U;const s={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},i=n=>(typeof n=="function"&&(n=n(s.value)),F(s,n));return[z.bind(s),i]}function x(e,t,s){const i=ee(e,t,!1,w);D(i)}function $(e){if(c===null)return e();const t=c;c=null;try{return e()}finally{c=t}}function Z(e){return a===null||(a.cleanups===null?a.cleanups=[e]:a.cleanups.push(e)),e}function z(){if(this.sources&&this.state)if(this.state===w)D(this);else{const e=p;p=null,b(()=>E(this),!1),p=e}if(c){const e=this.observers?this.observers.length:0;c.sources?(c.sources.push(this),c.sourceSlots.push(e)):(c.sources=[this],c.sourceSlots=[e]),this.observers?(this.observers.push(c),this.observerSlots.push(c.sources.length-1)):(this.observers=[c],this.observerSlots=[c.sources.length-1])}return this.value}function F(e,t,s){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&b(()=>{for(let n=0;n<e.observers.length;n+=1){const l=e.observers[n],o=I&&I.running;o&&I.disposed.has(l),(o?!l.tState:!l.state)&&(l.pure?p.push(l):y.push(l),l.observers&&V(l)),o||(l.state=w)}if(p.length>1e6)throw p=[],new Error},!1)),t}function D(e){if(!e.fn)return;N(e);const t=v;k(e,e.value,t)}function k(e,t,s){let i;const n=a,l=c;c=a=e;try{i=e.fn(t)}catch(o){return e.pure&&(e.state=w,e.owned&&e.owned.forEach(N),e.owned=null),e.updatedAt=s+1,G(o)}finally{c=l,a=n}(!e.updatedAt||e.updatedAt<=s)&&(e.updatedAt!=null&&"observers"in e?F(e,i):e.value=i,e.updatedAt=s)}function ee(e,t,s,i=w,n){const l={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:a,context:a?a.context:null,pure:s};return a===null||a!==H&&(a.owned?a.owned.push(l):a.owned=[l]),l}function R(e){if(e.state===0)return;if(e.state===C)return E(e);if(e.suspense&&$(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<v);)e.state&&t.push(e);for(let s=t.length-1;s>=0;s--)if(e=t[s],e.state===w)D(e);else if(e.state===C){const i=p;p=null,b(()=>E(e,t[0]),!1),p=i}}function b(e,t){if(p)return e();let s=!1;t||(p=[]),y?s=!0:y=[],v++;try{const i=e();return te(s),i}catch(i){s||(y=null),p=null,G(i)}}function te(e){if(p&&(j(p),p=null),e)return;const t=y;y=null,t.length&&b(()=>W(t),!1)}function j(e){for(let t=0;t<e.length;t++)R(e[t])}function E(e,t){e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];if(i.sources){const n=i.state;n===w?i!==t&&(!i.updatedAt||i.updatedAt<v)&&R(i):n===C&&E(i,t)}}}function V(e){for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];s.state||(s.state=C,s.pure?p.push(s):y.push(s),s.observers&&V(s))}}function N(e){let t;if(e.sources)for(;e.sources.length;){const s=e.sources.pop(),i=e.sourceSlots.pop(),n=s.observers;if(n&&n.length){const l=n.pop(),o=s.observerSlots.pop();i<n.length&&(l.sourceSlots[o]=i,n[i]=l,s.observerSlots[i]=o)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)N(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function se(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function G(e,t=a){throw se(e)}function ne(e,t){return $(()=>e(t||{}))}function le(e,t,s){let i=s.length,n=t.length,l=i,o=0,r=0,h=t[n-1].nextSibling,f=null;for(;o<n||r<l;){if(t[o]===s[r]){o++,r++;continue}for(;t[n-1]===s[l-1];)n--,l--;if(n===o){const u=l<i?r?s[r-1].nextSibling:s[l-r]:h;for(;r<l;)e.insertBefore(s[r++],u)}else if(l===r)for(;o<n;)(!f||!f.has(t[o]))&&t[o].remove(),o++;else if(t[o]===s[l-1]&&s[r]===t[n-1]){const u=t[--n].nextSibling;e.insertBefore(s[r++],t[o++].nextSibling),e.insertBefore(s[--l],u),t[n]=s[l]}else{if(!f){f=new Map;let d=r;for(;d<l;)f.set(s[d],d++)}const u=f.get(t[o]);if(u!=null)if(r<u&&u<l){let d=o,g=1,S;for(;++d<n&&d<l&&!((S=f.get(t[d]))==null||S!==u+g);)g++;if(g>u-r){const K=t[o];for(;r<u;)e.insertBefore(s[r++],K)}else e.replaceChild(s[r++],t[o++])}else o++;else t[o++].remove()}}}function ie(e,t,s,i={}){let n;return X(l=>{n=l,t===document?e():_(t,e(),t.firstChild?null:void 0,s)},i.owner),()=>{n(),t.textContent=""}}function L(e,t,s){let i;const n=()=>{const o=document.createElement("template");return o.innerHTML=e,s?o.content.firstChild.firstChild:o.content.firstChild},l=t?()=>$(()=>document.importNode(i||(i=n()),!0)):()=>(i||(i=n())).cloneNode(!0);return l.cloneNode=l,l}function A(e,t,s){s==null?e.removeAttribute(t):e.setAttribute(t,s)}function M(e,t,s){if(!t)return s?A(e,"style"):t;const i=e.style;if(typeof t=="string")return i.cssText=t;typeof s=="string"&&(i.cssText=s=void 0),s||(s={}),t||(t={});let n,l;for(l in s)t[l]==null&&i.removeProperty(l),delete s[l];for(l in t)n=t[l],n!==s[l]&&(i.setProperty(l,n),s[l]=n);return s}function _(e,t,s,i){if(s!==void 0&&!i&&(i=[]),typeof t!="function")return T(e,t,i,s);x(n=>T(e,t(),n,s),i)}function T(e,t,s,i,n){for(;typeof s=="function";)s=s();if(t===s)return s;const l=typeof t,o=i!==void 0;if(e=o&&s[0]&&s[0].parentNode||e,l==="string"||l==="number")if(l==="number"&&(t=t.toString()),o){let r=s[0];r&&r.nodeType===3?r.data!==t&&(r.data=t):r=document.createTextNode(t),s=m(e,s,i,r)}else s!==""&&typeof s=="string"?s=e.firstChild.data=t:s=e.textContent=t;else if(t==null||l==="boolean")s=m(e,s,i);else{if(l==="function")return x(()=>{let r=t();for(;typeof r=="function";)r=r();s=T(e,r,s,i)}),()=>s;if(Array.isArray(t)){const r=[],h=s&&Array.isArray(s);if(B(r,t,s,n))return x(()=>s=T(e,r,s,i,!0)),()=>s;if(r.length===0){if(s=m(e,s,i),o)return s}else h?s.length===0?q(e,r,i):le(e,s,r):(s&&m(e),q(e,r));s=r}else if(t.nodeType){if(Array.isArray(s)){if(o)return s=m(e,s,i,t);m(e,s,null,t)}else s==null||s===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);s=t}}return s}function B(e,t,s,i){let n=!1;for(let l=0,o=t.length;l<o;l++){let r=t[l],h=s&&s[e.length],f;if(!(r==null||r===!0||r===!1))if((f=typeof r)=="object"&&r.nodeType)e.push(r);else if(Array.isArray(r))n=B(e,r,h)||n;else if(f==="function")if(i){for(;typeof r=="function";)r=r();n=B(e,Array.isArray(r)?r:[r],Array.isArray(h)?h:[h])||n}else e.push(r),n=!0;else{const u=String(r);h&&h.nodeType===3&&h.data===u?e.push(h):e.push(document.createTextNode(u))}}return n}function q(e,t,s=null){for(let i=0,n=t.length;i<n;i++)e.insertBefore(t[i],s)}function m(e,t,s,i){if(s===void 0)return e.textContent="";const n=i||document.createTextNode("");if(t.length){let l=!1;for(let o=t.length-1;o>=0;o--){const r=t[o];if(n!==r){const h=r.parentNode===e;!l&&!o?h?e.replaceChild(n,r):e.insertBefore(n,s):h&&r.remove()}else l=!0}}else e.insertBefore(n,s);return[n]}const P="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3e%3ccircle%20cx='24'%20cy='24'%20r='18'%20stroke='%23333'%20fill='transparent'%20stroke-width='12'/%3e%3c/svg%3e",re="./assets/face-CxVOBDqA.svg";var oe=L("<img class=centered>"),O=L('<img class="centered hand">'),fe=L("<div class=centered><span style=font-size:48px;></span><span style=font-size:32px;>");function ue(){const[e,t]=Y(Date.now()),s=setInterval(()=>t(()=>Date.now()+100),100);Z(()=>clearInterval(s));const i=(f,u)=>{let d=Math.sin(Math.PI-f*Math.PI/180)*u,g=Math.cos(Math.PI-f*Math.PI/180)*u;return`transform: translate(-50%, -50%) translate(${d}px, ${g}px);`},n=()=>i(e()/1e3%60/60*360,200),l=()=>i(e()/1e3%3600/3600*360,164),o=()=>i((e()/1e3-new Date().getTimezoneOffset()*60)%43200/43200*360,128),r=()=>{let f=new Date(e()),u=f.getHours(),d=f.getMinutes(),g=(u-1)%12+1,S=d.toString().padStart(2,"0");return`${g}:${S}`},h=()=>new Date(e()).getHours()<12?"am":"pm";return[(()=>{var f=oe();return A(f,"src",re),f})(),(()=>{var f=O();return A(f,"src",P),x(u=>M(f,n(),u)),f})(),(()=>{var f=O();return A(f,"src",P),x(u=>M(f,l(),u)),f})(),(()=>{var f=O();return A(f,"src",P),x(u=>M(f,o(),u)),f})(),(()=>{var f=fe(),u=f.firstChild,d=u.nextSibling;return _(u,r),_(d,h),f})()]}const ce=document.getElementById("root");ie(()=>ne(ue,{}),ce);