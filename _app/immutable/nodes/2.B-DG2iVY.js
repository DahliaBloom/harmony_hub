import{s as re,l as Rr,e as E,c as T,b as C,f as _,m,i as A,S as Q,u as Pr,o as Or,p as Dr,C as Un,T as Lt,t as Fe,d as Be,n as S,a as L,U as xn,g as M,h as b,V as Nr,y as Zt,W as Qe,E as Lr,X as Xe,v as Mr,Y as Ur,q as Qt}from"../chunks/scheduler.bKnp7D4U.js";import{S as ie,i as se,t as W,a as z,b as De,d as dt,m as Ne,e as Le,g as Mt,c as Ut,f as en}from"../chunks/index.CA0iJW0M.js";function tn(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function xr(n){const e=n-1;return e*e*e+1}function nn(n,{delay:e=0,duration:t=400,easing:r=xr,start:i=0,opacity:s=0}={}){const o=getComputedStyle(n),c=+o.opacity,a=o.transform==="none"?"":o.transform,l=1-i,u=c*(1-s);return{delay:e,duration:t,easing:r,css:(g,p)=>`
			transform: ${a} scale(${1-l*p});
			opacity: ${c-u*p}
		`}}const $r="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%239CA3AF'%3e%3cpath%20d='m108-160%20151-420q5-13%2015.5-20t22.5-7q8%200%2015%203t13%209l270%20270q6%206%209%2013t3%2015q0%2012-7%2022.5T580-259L160-108q-12%205-23%201.5T118-118q-8-8-11.5-19t1.5-23Zm813-519q-9%209-21%209t-21-9l-3-3q-14-14-35-14t-35%2014L603-479q-9%209-21%209t-21-9q-9-9-9-21t9-21l203-203q32-32%2077-32t77%2032l3%203q9%209%209%2021t-9%2021ZM399-799q9-9%2021-9t21%209l5%205q32%2032%2032%2076t-32%2076l-3%203q-9%209-21%209t-21-9q-9-9-9-21t9-21l3-3q14-14%2014-34t-14-34l-5-5q-9-9-9-21t9-21Zm162-80q9-9%2021-9t21%209l43%2043q32%2032%2032%2077t-32%2077L523-559q-9%209-21%209t-21-9q-9-9-9-21t9-21l123-123q14-14%2014-35t-14-35l-43-43q-9-9-9-21t9-21Zm320%20480q-9%209-21%209t-21-9l-43-43q-14-14-35-14t-35%2014l-43%2043q-9%209-21%209t-21-9q-9-9-9-21t9-21l43-43q32-32%2077-32t77%2032l43%2043q9%209%209%2021t-9%2021Z'/%3e%3c/svg%3e",Fr="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%239CA3AF'%3e%3cpath%20d='M280-400v240q0%2017-11.5%2028.5T240-120q-17%200-28.5-11.5T200-160v-600q0-17%2011.5-28.5T240-800h287q14%200%2025%209t14%2023l10%2048h184q17%200%2028.5%2011.5T800-680v320q0%2017-11.5%2028.5T760-320H553q-14%200-25-9t-14-23l-10-48H280Z'/%3e%3c/svg%3e",Br="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%239CA3AF'%3e%3cpath%20d='m480-404%2060%2046q11%209%2024%20.5t8-22.5l-24-76%2067-52q11-9%206-22.5T602-544h-78l-25-77q-5-14-19-14t-19%2014l-25%2077h-79q-14%200-18.5%2013.5T345-508l65%2052-24%2077q-5%2014%207%2022.5t24-.5l63-47ZM160-160q-33%200-56.5-23.5T80-240v-135q0-11%207-19t18-10q24-8%2039.5-29t15.5-47q0-26-15.5-47T105-556q-11-2-18-10t-7-19v-135q0-33%2023.5-56.5T160-800h640q33%200%2056.5%2023.5T880-720v135q0%2011-7%2019t-18%2010q-24%208-39.5%2029T800-480q0%2026%2015.5%2047t39.5%2029q11%202%2018%2010t7%2019v135q0%2033-23.5%2056.5T800-160H160Z'/%3e%3c/svg%3e",qr="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%239CA3AF'%3e%3cpath%20d='M393-132q-103-29-168-113.5T160-440q0-57%2019-108.5t54-94.5q11-12%2027-12.5t29%2012.5q11%2011%2011.5%2027T290-586q-24%2031-37%2068t-13%2078q0%2081%2047.5%20144.5T410-209q13%204%2021.5%2015t8.5%2024q0%2020-14%2031.5t-33%206.5Zm174%200q-19%205-33-7t-14-32q0-12%208.5-23t21.5-15q75-24%20122.5-87T720-440q0-100-70-170t-170-70h-3l16%2016q11%2011%2011%2028t-11%2028q-11%2011-28%2011t-28-11l-84-84q-6-6-8.5-13t-2.5-15q0-8%202.5-15t8.5-13l84-84q11-11%2028-11t28%2011q11%2011%2011%2028t-11%2028l-16%2016h3q134%200%20227%2093t93%20227q0%20109-65%20194T567-132Z'/%3e%3c/svg%3e",Hr="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%239CA3AF'%3e%3cpath%20d='M200-120q-33%200-56.5-23.5T120-200v-560q0-33%2023.5-56.5T200-840h240q17%200%2028.5%2011.5T480-800q0%2017-11.5%2028.5T440-760H200v560h240q17%200%2028.5%2011.5T480-160q0%2017-11.5%2028.5T440-120H200Zm487-320H400q-17%200-28.5-11.5T360-480q0-17%2011.5-28.5T400-520h287l-75-75q-11-11-11-27t11-28q11-12%2028-12.5t29%2011.5l143%20143q12%2012%2012%2028t-12%2028L669-309q-12%2012-28.5%2011.5T612-310q-11-12-10.5-28.5T613-366l74-74Z'/%3e%3c/svg%3e";function Vr(n){let e,t,r,i;const s=n[4].default,o=Rr(s,n,n[3],null);return{c(){e=E("div"),o&&o.c(),this.h()},l(c){e=T(c,"DIV",{class:!0});var a=C(e);o&&o.l(a),a.forEach(_),this.h()},h(){m(e,"class","h-full w-full touch-none")},m(c,a){A(c,e,a),o&&o.m(e,null),t=!0,r||(i=[Q(e,"touchstart",n[0]),Q(e,"touchmove",n[1]),Q(e,"touchend",n[2],{passive:!0})],r=!0)},p(c,[a]){o&&o.p&&(!t||a&8)&&Pr(o,s,c,c[3],t?Dr(s,c[3],a,null):Or(c[3]),null)},i(c){t||(W(o,c),t=!0)},o(c){z(o,c),t=!1},d(c){c&&_(e),o&&o.d(c),r=!1,Un(i)}}}function jr(n,e,t){let{$$slots:r={},$$scope:i}=e,s=0,o=0,c=0,a=0;const l=Lt(),u=f=>{s=f.touches[0].clientX,o=f.touches[0].clientY},g=f=>{c=f.touches[0].clientX,a=f.touches[0].clientY},p=()=>{const f=c-s,d=a-o;Math.abs(f)>Math.abs(d)?f>0?l("swipeRight"):l("swipeLeft"):d>0?l("swipeDown"):l("swipeUp"),s=0,o=0,c=0,a=0};return n.$$set=f=>{"$$scope"in f&&t(3,i=f.$$scope)},[u,g,p,i,r]}class Wr extends ie{constructor(e){super(),se(this,e,jr,Vr,re,{})}}function zr(n){let e;return{c(){e=Fe("Mood")},l(t){e=Be(t,"Mood")},m(t,r){A(t,e,r)},p:S,i:S,o:S,d(t){t&&_(e)}}}class Gr extends ie{constructor(e){super(),se(this,e,null,zr,re,{})}}function Kr(n){let e;return{c(){e=Fe("Habit")},l(t){e=Be(t,"Habit")},m(t,r){A(t,e,r)},p:S,i:S,o:S,d(t){t&&_(e)}}}class Jr extends ie{constructor(e){super(),se(this,e,null,Kr,re,{})}}function Yr(n){let e;return{c(){e=Fe("Activity")},l(t){e=Be(t,"Activity")},m(t,r){A(t,e,r)},p:S,i:S,o:S,d(t){t&&_(e)}}}class Xr extends ie{constructor(e){super(),se(this,e,null,Yr,re,{})}}function Zr(n){let e;return{c(){e=Fe("Todo")},l(t){e=Be(t,"Todo")},m(t,r){A(t,e,r)},p:S,i:S,o:S,d(t){t&&_(e)}}}class Qr extends ie{constructor(e){super(),se(this,e,null,Zr,re,{})}}function rn(n,e,t){const r=n.slice();return r[9]=e[t][0],r[10]=e[t][1],r}function ei(n){let e,t,r;var i=n[5](n[0]);function s(o,c){return{}}return i&&(t=Zt(i,s())),{c(){e=E("div"),t&&De(t.$$.fragment),this.h()},l(o){e=T(o,"DIV",{class:!0});var c=C(e);t&&dt(t.$$.fragment,c),c.forEach(_),this.h()},h(){m(e,"class","flex h-full items-center place-content-center text-amber-50 text-lg")},m(o,c){A(o,e,c),t&&Ne(t,e,null),r=!0},p(o,c){if(c&1&&i!==(i=o[5](o[0]))){if(t){Mt();const a=t;z(a.$$.fragment,1,0,()=>{Le(a,1)}),Ut()}i?(t=Zt(i,s()),De(t.$$.fragment),W(t.$$.fragment,1),Ne(t,e,null)):t=null}},i(o){r||(t&&W(t.$$.fragment,o),r=!0)},o(o){t&&z(t.$$.fragment,o),r=!1},d(o){o&&_(e),t&&Le(t)}}}function ti(n){let e,t='<span class="bg-white flex h-[15%] aspect-square rounded-full"></span>',r,i;function s(){return n[7](n[9])}return{c(){e=E("button"),e.innerHTML=t,this.h()},l(o){e=T(o,"BUTTON",{class:!0,"data-svelte-h":!0}),xn(e)!=="svelte-1h7qomw"&&(e.innerHTML=t),this.h()},h(){m(e,"class","h-full aspect-square grid place-items-center")},m(o,c){A(o,e,c),r||(i=Q(e,"click",s),r=!0)},p(o,c){n=o},i:S,o:S,d(o){o&&_(e),r=!1,i()}}}function ni(n){let e,t,r,i;return{c(){e=E("img"),this.h()},l(s){e=T(s,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Qe(e.src,t=n[10].icon)||m(e,"src",t),m(e,"alt",""),m(e,"class","svelte-7jyllk")},m(s,o){A(s,e,o),i=!0},p:S,i(s){i||(s&&Lr(()=>{i&&(r||(r=en(e,nn,{},!0)),r.run(1))}),i=!0)},o(s){s&&(r||(r=en(e,nn,{},!1)),r.run(0)),i=!1},d(s){s&&_(e),s&&r&&r.end()}}}function sn(n){let e,t,r,i;const s=[ni,ti],o=[];function c(a,l){return a[9]===a[0]?0:1}return t=c(n),r=o[t]=s[t](n),{c(){e=E("div"),r.c(),i=L(),this.h()},l(a){e=T(a,"DIV",{class:!0});var l=C(e);r.l(l),i=M(l),l.forEach(_),this.h()},h(){m(e,"class","h-full aspect-square grid place-items-center")},m(a,l){A(a,e,l),o[t].m(e,null),b(e,i)},p(a,l){let u=t;t=c(a),t===u?o[t].p(a,l):(Mt(),z(o[u],1,1,()=>{o[u]=null}),Ut(),r=o[t],r?r.p(a,l):(r=o[t]=s[t](a),r.c()),W(r,1),r.m(e,i))},d(a){a&&_(e),o[t].d()}}}function ri(n){let e,t,r=`<img src="${Hr}" alt="Logout" class="svelte-7jyllk"/>`,i,s,o,c,a,l,u,g;o=new Wr({props:{$$slots:{default:[ei]},$$scope:{ctx:n}}}),o.$on("swipeLeft",n[3]),o.$on("swipeRight",n[2]);let p=tn(Object.entries(n[1])),f=[];for(let d=0;d<p.length;d+=1)f[d]=sn(rn(n,p,d));return{c(){e=E("div"),t=E("button"),t.innerHTML=r,i=L(),s=E("div"),De(o.$$.fragment),c=L(),a=E("div");for(let d=0;d<f.length;d+=1)f[d].c();this.h()},l(d){e=T(d,"DIV",{class:!0});var y=C(e);t=T(y,"BUTTON",{"data-svelte-h":!0}),xn(t)!=="svelte-53e50g"&&(t.innerHTML=r),y.forEach(_),i=M(d),s=T(d,"DIV",{class:!0});var I=C(s);dt(o.$$.fragment,I),I.forEach(_),c=M(d),a=T(d,"DIV",{class:!0});var v=C(a);for(let O=0;O<f.length;O+=1)f[O].l(v);v.forEach(_),this.h()},h(){m(e,"class","fixed top-6 h-[3%] w-screen flex justify-end px-4"),m(s,"class","h-screen"),m(a,"class","fixed bottom-6 h-[4%] w-screen flex justify-center items-center")},m(d,y){A(d,e,y),b(e,t),A(d,i,y),A(d,s,y),Ne(o,s,null),A(d,c,y),A(d,a,y);for(let I=0;I<f.length;I+=1)f[I]&&f[I].m(a,null);l=!0,u||(g=Q(t,"click",n[6]),u=!0)},p(d,[y]){const I={};if(y&8193&&(I.$$scope={dirty:y,ctx:d}),o.$set(I),y&3){p=tn(Object.entries(d[1]));let v;for(v=0;v<p.length;v+=1){const O=rn(d,p,v);f[v]?f[v].p(O,y):(f[v]=sn(O),f[v].c(),f[v].m(a,null))}for(;v<f.length;v+=1)f[v].d(1);f.length=p.length}},i(d){l||(W(o.$$.fragment,d),l=!0)},o(d){z(o.$$.fragment,d),l=!1},d(d){d&&(_(e),_(i),_(s),_(c),_(a)),Le(o),Nr(f,d),u=!1,g()}}}function ii(n,e,t){const r={Mood:{icon:$r,view:Gr},Habit:{icon:Fr,view:Jr},Activity:{icon:Br,view:Xr},Todo:{icon:qr,view:Qr}},i=Object.keys(r);function s(){let p=i.indexOf(c);p===0&&(p=i.length),t(0,c=i[p-1])}function o(){let p=i.indexOf(c);p===i.length-1&&(p=-1),t(0,c=i[p+1])}let c="Habit";const a=Lt();function l(p){return r[p].view}return[c,r,s,o,a,l,()=>a("logout"),p=>t(0,c=p)]}class si extends ie{constructor(e){super(),se(this,e,ii,ri,re,{})}}const oi="data:image/svg+xml,%3csvg%20width='1024'%20height='1024'%20viewBox='0%200%201024%201024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='512'%20cy='512'%20r='512'%20fill='url(%23paint0_linear_6_18)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M273.169%20965C236.6%20945.68%20202.653%20922.062%20172%20894.818L172%20806.955L207%20785.156C213.144%20795.069%20218.007%20803.552%20222.2%20810.867C242.571%20846.407%20247.118%20854.341%20306%20864.481C377%20878.236%20527%20783.122%20598%20718.93C669%20653.21%20740%20615%20811%20615C882%20615%20953%20653.21%20988%20673.079L996.558%20677.802C954.104%20801.904%20865.316%20904.516%20750.831%20965H598H385H273.169Z'%20fill='url(%23paint1_linear_6_18)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M40.7347%20712.573C102.425%20704.266%20205.023%20695.337%20306.941%20732.294C357.164%20750.506%20407.553%20779.861%20457.962%20809.227C522.899%20847.057%20587.87%20884.907%20652.568%20898.983C731.495%20916.155%20810.829%20897.947%20871.257%20876.756C778.867%20967.773%20652.061%201023.95%20512.135%201024C512.075%201024%20512.016%201024%20511.956%201024C511.896%201024%20511.837%201024%20511.777%201024C300.269%201023.93%20118.741%20895.605%2040.7347%20712.573Z'%20fill='url(%23paint2_linear_6_18)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_6_18'%20x1='512'%20y1='0'%20x2='512'%20y2='1024'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFAE8F'/%3e%3cstop%20offset='0.543454'%20stop-color='%23FF677D'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_6_18'%20x1='721'%20y1='584'%20x2='584.279'%20y2='965'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23153190'/%3e%3cstop%20offset='1'%20stop-color='%230C173D'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_6_18'%20x1='455.996'%20y1='705.208'%20x2='455.996'%20y2='1024'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23153190'/%3e%3cstop%20offset='1'%20stop-color='%230C173D'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",ai="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%239CA3AF'%3e%3cpath%20d='M280-400q-33%200-56.5-23.5T200-480q0-33%2023.5-56.5T280-560q33%200%2056.5%2023.5T360-480q0%2033-23.5%2056.5T280-400Zm0%20160q-100%200-170-70T40-480q0-100%2070-170t170-70q67%200%20121.5%2033t86.5%2087h352l120%20120-180%20180-80-60-80%2060-85-60h-47q-32%2054-86.5%2087T280-240Zm0-80q56%200%2098.5-34t56.5-86h125l58%2041%2082-61%2071%2055%2075-75-40-40H435q-14-52-56.5-86T280-640q-66%200-113%2047t-47%20113q0%2066%2047%20113t113%2047Z'/%3e%3c/svg%3e",ci="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%239CA3AF'%3e%3cpath%20d='M160-160q-33%200-56.5-23.5T80-240v-480q0-33%2023.5-56.5T160-800h640q33%200%2056.5%2023.5T880-720v480q0%2033-23.5%2056.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80%20320-200H160l320%20200ZM160-640v-80%20480-400Z'/%3e%3c/svg%3e";var on={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},li=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],c=n[t++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Fn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,c=o?n[i+1]:0,a=i+2<n.length,l=a?n[i+2]:0,u=s>>2,g=(s&3)<<4|c>>4;let p=(c&15)<<2|l>>6,f=l&63;a||(f=64,o||(p=64)),r.push(t[u],t[g],t[p],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray($n(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):li(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const g=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||l==null||g==null)throw new ui;const p=s<<2|c>>4;if(r.push(p),l!==64){const f=c<<4&240|l>>2;if(r.push(f),g!==64){const d=l<<6&192|g;r.push(d)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ui extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const di=function(n){const e=$n(n);return Fn.encodeByteArray(e,!0)},Bn=function(n){return di(n).replace(/\./g,"")},qn=function(n){try{return Fn.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=()=>hi().__FIREBASE_DEFAULTS__,pi=()=>{if(typeof process>"u"||typeof on>"u")return;const n=on.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},gi=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&qn(n[1]);return e&&JSON.parse(e)},xt=()=>{try{return fi()||pi()||gi()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},mi=n=>{var e,t;return(t=(e=xt())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Hn=()=>{var n;return(n=xt())===null||n===void 0?void 0:n.config},Vn=n=>{var e;return(e=xt())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vi(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(k())}function Ii(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function wi(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yi(){const n=k();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function bi(){try{return typeof indexedDB=="object"}catch{return!1}}function Ei(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti="FirebaseError";class oe extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Ti,Object.setPrototypeOf(this,oe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qe.prototype.create)}}class qe{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Si(s,r):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new oe(i,c,r)}}function Si(n,e){return n.replace(Ci,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Ci=/\{\$([^}]+)}/g;function Ai(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function it(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(an(s)&&an(o)){if(!it(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function an(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Re(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Pe(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function ki(n,e){const t=new Ri(n,e);return t.subscribe.bind(t)}class Ri{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Pi(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=vt),i.error===void 0&&(i.error=vt),i.complete===void 0&&(i.complete=vt);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Pi(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function vt(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(n){return n&&n._delegate?n._delegate:n}class Ee{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const de="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new _i;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ni(e))try{this.getOrInitializeService({instanceIdentifier:de})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=de){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=de){return this.instances.has(e)}getOptions(e=de){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Di(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=de){return this.component?this.component.multipleInstances?e:de:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Di(n){return n===de?void 0:n}function Ni(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Oi(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var w;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(w||(w={}));const Mi={debug:w.DEBUG,verbose:w.VERBOSE,info:w.INFO,warn:w.WARN,error:w.ERROR,silent:w.SILENT},Ui=w.INFO,xi={[w.DEBUG]:"log",[w.VERBOSE]:"log",[w.INFO]:"info",[w.WARN]:"warn",[w.ERROR]:"error"},$i=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=xi[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jn{constructor(e){this.name=e,this._logLevel=Ui,this._logHandler=$i,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in w))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Mi[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,w.DEBUG,...e),this._logHandler(this,w.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,w.VERBOSE,...e),this._logHandler(this,w.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,w.INFO,...e),this._logHandler(this,w.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,w.WARN,...e),this._logHandler(this,w.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,w.ERROR,...e),this._logHandler(this,w.ERROR,...e)}}const Fi=(n,e)=>e.some(t=>n instanceof t);let cn,ln;function Bi(){return cn||(cn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qi(){return ln||(ln=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wn=new WeakMap,St=new WeakMap,zn=new WeakMap,It=new WeakMap,$t=new WeakMap;function Hi(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(ee(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Wn.set(t,n)}).catch(()=>{}),$t.set(e,n),e}function Vi(n){if(St.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});St.set(n,e)}let Ct={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return St.get(n);if(e==="objectStoreNames")return n.objectStoreNames||zn.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ee(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ji(n){Ct=n(Ct)}function Wi(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(wt(this),e,...t);return zn.set(r,e.sort?e.sort():[e]),ee(r)}:qi().includes(n)?function(...e){return n.apply(wt(this),e),ee(Wn.get(this))}:function(...e){return ee(n.apply(wt(this),e))}}function zi(n){return typeof n=="function"?Wi(n):(n instanceof IDBTransaction&&Vi(n),Fi(n,Bi())?new Proxy(n,Ct):n)}function ee(n){if(n instanceof IDBRequest)return Hi(n);if(It.has(n))return It.get(n);const e=zi(n);return e!==n&&(It.set(n,e),$t.set(e,n)),e}const wt=n=>$t.get(n);function Gi(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),c=ee(o);return r&&o.addEventListener("upgradeneeded",a=>{r(ee(o.result),a.oldVersion,a.newVersion,ee(o.transaction),a)}),t&&o.addEventListener("blocked",a=>t(a.oldVersion,a.newVersion,a)),c.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const Ki=["get","getKey","getAll","getAllKeys","count"],Ji=["put","add","delete","clear"],yt=new Map;function un(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(yt.get(e))return yt.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Ji.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ki.includes(t)))return;const s=async function(o,...c){const a=this.transaction(o,i?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[t](...c),i&&a.done]))[0]};return yt.set(e,s),s}ji(n=>({...n,get:(e,t,r)=>un(e,t)||n.get(e,t,r),has:(e,t)=>!!un(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Xi(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Xi(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const At="@firebase/app",dn="0.10.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=new jn("@firebase/app"),Zi="@firebase/app-compat",Qi="@firebase/analytics-compat",es="@firebase/analytics",ts="@firebase/app-check-compat",ns="@firebase/app-check",rs="@firebase/auth",is="@firebase/auth-compat",ss="@firebase/database",os="@firebase/database-compat",as="@firebase/functions",cs="@firebase/functions-compat",ls="@firebase/installations",us="@firebase/installations-compat",ds="@firebase/messaging",hs="@firebase/messaging-compat",fs="@firebase/performance",ps="@firebase/performance-compat",gs="@firebase/remote-config",ms="@firebase/remote-config-compat",_s="@firebase/storage",vs="@firebase/storage-compat",Is="@firebase/firestore",ws="@firebase/vertexai-preview",ys="@firebase/firestore-compat",bs="firebase",Es="10.12.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt="[DEFAULT]",Ts={[At]:"fire-core",[Zi]:"fire-core-compat",[es]:"fire-analytics",[Qi]:"fire-analytics-compat",[ns]:"fire-app-check",[ts]:"fire-app-check-compat",[rs]:"fire-auth",[is]:"fire-auth-compat",[ss]:"fire-rtdb",[os]:"fire-rtdb-compat",[as]:"fire-fn",[cs]:"fire-fn-compat",[ls]:"fire-iid",[us]:"fire-iid-compat",[ds]:"fire-fcm",[hs]:"fire-fcm-compat",[fs]:"fire-perf",[ps]:"fire-perf-compat",[gs]:"fire-rc",[ms]:"fire-rc-compat",[_s]:"fire-gcs",[vs]:"fire-gcs-compat",[Is]:"fire-fst",[ys]:"fire-fst-compat",[ws]:"fire-vertex","fire-js":"fire-js",[bs]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st=new Map,Ss=new Map,Rt=new Map;function hn(n,e){try{n.container.addComponent(e)}catch(t){he.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Me(n){const e=n.name;if(Rt.has(e))return he.debug(`There were multiple attempts to register component ${e}.`),!1;Rt.set(e,n);for(const t of st.values())hn(t,n);for(const t of Ss.values())hn(t,n);return!0}function Gn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function q(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},te=new qe("app","Firebase",Cs);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ee("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw te.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve=Es;function Kn(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:kt,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw te.create("bad-app-name",{appName:String(i)});if(t||(t=Hn()),!t)throw te.create("no-options");const s=st.get(i);if(s){if(it(t,s.options)&&it(r,s.config))return s;throw te.create("duplicate-app",{appName:i})}const o=new Li(i);for(const a of Rt.values())o.addComponent(a);const c=new As(t,r,o);return st.set(i,c),c}function ks(n=kt){const e=st.get(n);if(!e&&n===kt&&Hn())return Kn();if(!e)throw te.create("no-app",{appName:n});return e}function Ie(n,e,t){var r;let i=(r=Ts[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),he.warn(c.join(" "));return}Me(new Ee(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs="firebase-heartbeat-database",Ps=1,Ue="firebase-heartbeat-store";let bt=null;function Jn(){return bt||(bt=Gi(Rs,Ps,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ue)}catch(t){console.warn(t)}}}}).catch(n=>{throw te.create("idb-open",{originalErrorMessage:n.message})})),bt}async function Os(n){try{const t=(await Jn()).transaction(Ue),r=await t.objectStore(Ue).get(Yn(n));return await t.done,r}catch(e){if(e instanceof oe)he.warn(e.message);else{const t=te.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});he.warn(t.message)}}}async function fn(n,e){try{const r=(await Jn()).transaction(Ue,"readwrite");await r.objectStore(Ue).put(e,Yn(n)),await r.done}catch(t){if(t instanceof oe)he.warn(t.message);else{const r=te.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});he.warn(r.message)}}}function Yn(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=1024,Ns=30*24*60*60*1e3;class Ls{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Us(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=pn();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=Ns}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=pn(),{heartbeatsToSend:r,unsentEntries:i}=Ms(this._heartbeatsCache.heartbeats),s=Bn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function pn(){return new Date().toISOString().substring(0,10)}function Ms(n,e=Ds){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),gn(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),gn(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Us{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bi()?Ei().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Os(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return fn(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return fn(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function gn(n){return Bn(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(n){Me(new Ee("platform-logger",e=>new Yi(e),"PRIVATE")),Me(new Ee("heartbeat",e=>new Ls(e),"PRIVATE")),Ie(At,dn,n),Ie(At,dn,"esm2017"),Ie("fire-js","")}xs("");function Ft(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Xn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $s=Xn,Zn=new qe("auth","Firebase",Xn());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot=new jn("@firebase/auth");function Fs(n,...e){ot.logLevel<=w.WARN&&ot.warn(`Auth (${Ve}): ${n}`,...e)}function et(n,...e){ot.logLevel<=w.ERROR&&ot.error(`Auth (${Ve}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(n,...e){throw Bt(n,...e)}function $(n,...e){return Bt(n,...e)}function Qn(n,e,t){const r=Object.assign(Object.assign({},$s()),{[e]:t});return new qe("auth","Firebase",r).create(e,{appName:n.name})}function ne(n){return Qn(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Bt(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Zn.create(n,...e)}function h(n,e,...t){if(!n)throw Bt(e,...t)}function H(n){const e="INTERNAL ASSERTION FAILED: "+n;throw et(e),new Error(e)}function G(n,e){n||H(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Bs(){return mn()==="http:"||mn()==="https:"}function mn(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Bs()||Ii()||"connection"in navigator)?navigator.onLine:!0}function Hs(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,t){this.shortDelay=e,this.longDelay=t,G(t>e,"Short delay should be less than long delay!"),this.isMobile=vi()||wi()}get(){return qs()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(n,e){G(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;H("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;H("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;H("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=new je(3e4,6e4);function pe(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ce(n,e,t,r,i={}){return tr(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const c=He(Object.assign({key:n.config.apiKey},o)).slice(1),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/json",n.languageCode&&(a["X-Firebase-Locale"]=n.languageCode),er.fetch()(nr(n,n.config.apiHost,t,c),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function tr(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Vs),e);try{const i=new zs(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ze(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ze(n,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Ze(n,"email-already-in-use",o);if(a==="USER_DISABLED")throw Ze(n,"user-disabled",o);const u=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Qn(n,u,l);U(n,u)}}catch(i){if(i instanceof oe)throw i;U(n,"network-request-failed",{message:String(i)})}}async function ht(n,e,t,r,i={}){const s=await ce(n,e,t,r,i);return"mfaPendingCredential"in s&&U(n,"multi-factor-auth-required",{_serverResponse:s}),s}function nr(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?qt(n.config,i):`${n.config.apiScheme}://${i}`}function Ws(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zs{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r($(this.auth,"network-request-failed")),js.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ze(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=$(n,e,r);return i.customData._tokenResponse=t,i}function _n(n){return n!==void 0&&n.enterprise!==void 0}class Gs{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Ws(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Ks(n,e){return ce(n,"GET","/v2/recaptchaConfig",pe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Js(n,e){return ce(n,"POST","/v1/accounts:delete",e)}async function rr(n,e){return ce(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ys(n,e=!1){const t=ae(n),r=await t.getIdToken(e),i=Ht(r);h(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Oe(Et(i.auth_time)),issuedAtTime:Oe(Et(i.iat)),expirationTime:Oe(Et(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Et(n){return Number(n)*1e3}function Ht(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return et("JWT malformed, contained fewer than 3 sections"),null;try{const i=qn(t);return i?JSON.parse(i):(et("Failed to decode base64 JWT payload"),null)}catch(i){return et("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function vn(n){const e=Ht(n);return h(e,"internal-error"),h(typeof e.exp<"u","internal-error"),h(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xe(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof oe&&Xs(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Xs({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Oe(this.lastLoginAt),this.creationTime=Oe(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function at(n){var e;const t=n.auth,r=await n.getIdToken(),i=await xe(n,rr(t,{idToken:r}));h(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ir(s.providerUserInfo):[],c=eo(n.providerData,o),a=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(c!=null&&c.length),u=a?l:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Ot(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,g)}async function Qs(n){const e=ae(n);await at(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function eo(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ir(n){return n.map(e=>{var{providerId:t}=e,r=Ft(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function to(n,e){const t=await tr(n,{},async()=>{const r=He({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=nr(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",er.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function no(n,e){return ce(n,"POST","/v2/accounts:revokeToken",pe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){h(e.idToken,"internal-error"),h(typeof e.idToken<"u","internal-error"),h(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vn(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){h(e.length!==0,"internal-error");const t=vn(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(h(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await to(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new we;return r&&(h(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(h(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(h(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new we,this.toJSON())}_performRefresh(){return H("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(n,e){h(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class V{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Ft(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Zs(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ot(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await xe(this,this.stsTokenManager.getToken(this.auth,e));return h(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ys(this,e)}reload(){return Qs(this)}_assign(e){this!==e&&(h(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new V(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){h(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await at(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(q(this.auth.app))return Promise.reject(ne(this.auth));const e=await this.getIdToken();return await xe(this,Js(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,c,a,l,u;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,p=(i=t.email)!==null&&i!==void 0?i:void 0,f=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,d=(o=t.photoURL)!==null&&o!==void 0?o:void 0,y=(c=t.tenantId)!==null&&c!==void 0?c:void 0,I=(a=t._redirectEventId)!==null&&a!==void 0?a:void 0,v=(l=t.createdAt)!==null&&l!==void 0?l:void 0,O=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:D,emailVerified:Ae,isAnonymous:ge,providerData:B,stsTokenManager:me}=t;h(D&&me,e,"internal-error");const N=we.fromJSON(this.name,me);h(typeof D=="string",e,"internal-error"),K(g,e.name),K(p,e.name),h(typeof Ae=="boolean",e,"internal-error"),h(typeof ge=="boolean",e,"internal-error"),K(f,e.name),K(d,e.name),K(y,e.name),K(I,e.name),K(v,e.name),K(O,e.name);const le=new V({uid:D,auth:e,email:p,emailVerified:Ae,displayName:g,isAnonymous:ge,photoURL:d,phoneNumber:f,tenantId:y,stsTokenManager:N,createdAt:v,lastLoginAt:O});return B&&Array.isArray(B)&&(le.providerData=B.map(ke=>Object.assign({},ke))),I&&(le._redirectEventId=I),le}static async _fromIdTokenResponse(e,t,r=!1){const i=new we;i.updateFromServerResponse(t);const s=new V({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await at(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];h(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?ir(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new we;c.updateFromIdToken(r);const a=new V({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ot(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,l),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new Map;function j(n){G(n instanceof Function,"Expected a class definition");let e=In.get(n);return e?(G(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,In.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}sr.type="NONE";const wn=sr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(n,e,t){return`firebase:${n}:${e}:${t}`}class ye{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=tt(this.userKey,i.apiKey,s),this.fullPersistenceKey=tt("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?V._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ye(j(wn),e,r);const i=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||j(wn);const o=tt(r,e.config.apiKey,e.name);let c=null;for(const l of t)try{const u=await l._get(o);if(u){const g=V._fromJSON(e,u);l!==s&&(c=g),s=l;break}}catch{}const a=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new ye(s,e,r):(s=a[0],c&&await s._set(o,c.toJSON()),await Promise.all(t.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new ye(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cr(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(or(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ur(e))return"Blackberry";if(dr(e))return"Webos";if(Vt(e))return"Safari";if((e.includes("chrome/")||ar(e))&&!e.includes("edge/"))return"Chrome";if(lr(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function or(n=k()){return/firefox\//i.test(n)}function Vt(n=k()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ar(n=k()){return/crios\//i.test(n)}function cr(n=k()){return/iemobile/i.test(n)}function lr(n=k()){return/android/i.test(n)}function ur(n=k()){return/blackberry/i.test(n)}function dr(n=k()){return/webos/i.test(n)}function ft(n=k()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ro(n=k()){var e;return ft(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function io(){return yi()&&document.documentMode===10}function hr(n=k()){return ft(n)||lr(n)||dr(n)||ur(n)||/windows phone/i.test(n)||cr(n)}function so(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(n,e=[]){let t;switch(n){case"Browser":t=yn(k());break;case"Worker":t=`${yn(k())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ve}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,c)=>{try{const a=e(s);o(a)}catch(a){c(a)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ao(n,e={}){return ce(n,"GET","/v2/passwordPolicy",pe(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=6;class lo{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:co,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(t=a.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bn(this),this.idTokenSubscription=new bn(this),this.beforeStateQueue=new oo(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=j(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ye.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await rr(this,{idToken:e}),r=await V._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(q(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return h(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await at(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Hs()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(q(this.app))return Promise.reject(ne(this));const t=e?ae(e):null;return t&&h(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&h(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return q(this.app)?Promise.reject(ne(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return q(this.app)?Promise.reject(ne(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(j(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ao(this),t=new lo(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qe("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await no(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&j(e)||this._popupRedirectResolver;h(t,this,"argument-error"),this.redirectPersistenceManager=await ye.create(this,[j(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(h(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const a=e.addObserver(t,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(t);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return h(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Fs(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Se(n){return ae(n)}class bn{constructor(e){this.auth=e,this.observer=null,this.addObserver=ki(t=>this.observer=t)}get next(){return h(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ho(n){pt=n}function pr(n){return pt.loadJS(n)}function fo(){return pt.recaptchaEnterpriseScript}function po(){return pt.gapiScript}function go(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const mo="recaptcha-enterprise",_o="NO_RECAPTCHA";class vo{constructor(e){this.type=mo,this.auth=Se(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,c)=>{Ks(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new Gs(a);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(a=>{c(a)})})}function i(s,o,c){const a=window.grecaptcha;_n(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(_o)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(c=>{if(!t&&_n(window.grecaptcha))i(c,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=fo();a.length!==0&&(a+=c),pr(a).then(()=>{i(c,s,o)}).catch(l=>{o(l)})}}).catch(c=>{o(c)})})}}async function En(n,e,t,r=!1){const i=new vo(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Tn(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await En(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await En(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(n,e){const t=Gn(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(it(s,e??{}))return i;U(i,"already-initialized")}return t.initialize({options:e})}function wo(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(j);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function yo(n,e,t){const r=Se(n);h(r._canInitEmulator,r,"emulator-config-failed"),h(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=gr(e),{host:o,port:c}=bo(e),a=c===null?"":`:${c}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Eo()}function gr(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function bo(n){const e=gr(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Sn(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Sn(o)}}}function Sn(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Eo(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return H("not implemented")}_getIdTokenResponse(e){return H("not implemented")}_linkToIdToken(e,t){return H("not implemented")}_getReauthenticationResolver(e){return H("not implemented")}}async function To(n,e){return ce(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(n,e){return ht(n,"POST","/v1/accounts:signInWithPassword",pe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Co(n,e){return ht(n,"POST","/v1/accounts:signInWithEmailLink",pe(n,e))}async function Ao(n,e){return ht(n,"POST","/v1/accounts:signInWithEmailLink",pe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e extends jt{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new $e(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new $e(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tn(e,t,"signInWithPassword",So);case"emailLink":return Co(e,{email:this._email,oobCode:this._password});default:U(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tn(e,r,"signUpPassword",To);case"emailLink":return Ao(e,{idToken:t,email:this._email,oobCode:this._password});default:U(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function be(n,e){return ht(n,"POST","/v1/accounts:signInWithIdp",pe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko="http://localhost";class fe extends jt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new fe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):U("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Ft(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new fe(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return be(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,be(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,be(e,t)}buildRequest(){const e={requestUri:ko,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=He(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Po(n){const e=Re(Pe(n)).link,t=e?Re(Pe(e)).deep_link_id:null,r=Re(Pe(n)).deep_link_id;return(r?Re(Pe(r)).link:null)||r||t||e||n}class Wt{constructor(e){var t,r,i,s,o,c;const a=Re(Pe(e)),l=(t=a.apiKey)!==null&&t!==void 0?t:null,u=(r=a.oobCode)!==null&&r!==void 0?r:null,g=Ro((i=a.mode)!==null&&i!==void 0?i:null);h(l&&u&&g,"argument-error"),this.apiKey=l,this.operation=g,this.code=u,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=a.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=Po(e);try{return new Wt(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(){this.providerId=Ce.PROVIDER_ID}static credential(e,t){return $e._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Wt.parseLink(t);return h(r,"argument-error"),$e._fromEmailAndCode(e,r.code,r.tenantId)}}Ce.PROVIDER_ID="password";Ce.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ce.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We extends mr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J extends We{constructor(){super("facebook.com")}static credential(e){return fe._fromParams({providerId:J.PROVIDER_ID,signInMethod:J.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return J.credentialFromTaggedObject(e)}static credentialFromError(e){return J.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return J.credential(e.oauthAccessToken)}catch{return null}}}J.FACEBOOK_SIGN_IN_METHOD="facebook.com";J.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y extends We{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return fe._fromParams({providerId:Y.PROVIDER_ID,signInMethod:Y.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Y.credentialFromTaggedObject(e)}static credentialFromError(e){return Y.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Y.credential(t,r)}catch{return null}}}Y.GOOGLE_SIGN_IN_METHOD="google.com";Y.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X extends We{constructor(){super("github.com")}static credential(e){return fe._fromParams({providerId:X.PROVIDER_ID,signInMethod:X.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return X.credentialFromTaggedObject(e)}static credentialFromError(e){return X.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return X.credential(e.oauthAccessToken)}catch{return null}}}X.GITHUB_SIGN_IN_METHOD="github.com";X.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z extends We{constructor(){super("twitter.com")}static credential(e,t){return fe._fromParams({providerId:Z.PROVIDER_ID,signInMethod:Z.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Z.credentialFromTaggedObject(e)}static credentialFromError(e){return Z.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Z.credential(t,r)}catch{return null}}}Z.TWITTER_SIGN_IN_METHOD="twitter.com";Z.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await V._fromIdTokenResponse(e,r,i),o=Cn(r);return new Te({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Cn(r);return new Te({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Cn(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends oe{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ct.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new ct(e,t,r,i)}}function _r(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ct._fromErrorAndOperation(n,s,e,r):s})}async function Oo(n,e,t=!1){const r=await xe(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Te._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(n,e,t=!1){const{auth:r}=n;if(q(r.app))return Promise.reject(ne(r));const i="reauthenticate";try{const s=await xe(n,_r(r,i,e,n),t);h(s.idToken,r,"internal-error");const o=Ht(s.idToken);h(o,r,"internal-error");const{sub:c}=o;return h(n.uid===c,r,"user-mismatch"),Te._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&U(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vr(n,e,t=!1){if(q(n.app))return Promise.reject(ne(n));const r="signIn",i=await _r(n,r,e),s=await Te._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function No(n,e){return vr(Se(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lo(n){const e=Se(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Mo(n,e,t){return q(n.app)?Promise.reject(ne(n)):No(ae(n),Ce.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Lo(n),r})}function Uo(n,e,t,r){return ae(n).onIdTokenChanged(e,t,r)}function xo(n,e,t){return ae(n).beforeAuthStateChanged(e,t)}function $o(n){return ae(n).signOut()}const lt="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(lt,"1"),this.storage.removeItem(lt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(){const n=k();return Vt(n)||ft(n)}const Bo=1e3,qo=10;class wr extends Ir{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Fo()&&so(),this.fallbackToPolling=hr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);io()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,qo):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Bo)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}wr.type="LOCAL";const Ho=wr;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends Ir{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}yr.type="SESSION";const br=yr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new gt(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(o).map(async l=>l(t.origin,s)),a=await Vo(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gt.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,a)=>{const l=zt("",20);i.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(g){const p=g;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(p.data.response);break;default:clearTimeout(u),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(){return window}function Wo(n){F().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(){return typeof F().WorkerGlobalScope<"u"&&typeof F().importScripts=="function"}async function zo(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Go(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Ko(){return Er()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr="firebaseLocalStorageDb",Jo=1,ut="firebaseLocalStorage",Sr="fbase_key";class ze{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function mt(n,e){return n.transaction([ut],e?"readwrite":"readonly").objectStore(ut)}function Yo(){const n=indexedDB.deleteDatabase(Tr);return new ze(n).toPromise()}function Dt(){const n=indexedDB.open(Tr,Jo);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ut,{keyPath:Sr})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ut)?e(r):(r.close(),await Yo(),e(await Dt()))})})}async function An(n,e,t){const r=mt(n,!0).put({[Sr]:e,value:t});return new ze(r).toPromise()}async function Xo(n,e){const t=mt(n,!1).get(e),r=await new ze(t).toPromise();return r===void 0?null:r.value}function kn(n,e){const t=mt(n,!0).delete(e);return new ze(t).toPromise()}const Zo=800,Qo=3;class Cr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dt(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Qo)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Er()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gt._getInstance(Ko()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await zo(),!this.activeServiceWorker)return;this.sender=new jo(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Go()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dt();return await An(e,lt,"1"),await kn(e,lt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>An(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Xo(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>kn(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=mt(i,!1).getAll();return new ze(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zo)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cr.type="LOCAL";const ea=Cr;new je(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(n,e){return e?j(e):(h(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends jt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return be(e,this._buildIdpRequest())}_linkToIdToken(e,t){return be(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return be(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function na(n){return vr(n.auth,new Gt(n),n.bypassAuthState)}function ra(n){const{auth:e,user:t}=n;return h(t,e,"internal-error"),Do(t,new Gt(n),n.bypassAuthState)}async function ia(n){const{auth:e,user:t}=n;return h(t,e,"internal-error"),Oo(t,new Gt(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return na;case"linkViaPopup":case"linkViaRedirect":return ia;case"reauthViaPopup":case"reauthViaRedirect":return ra;default:U(this.auth,"internal-error")}}resolve(e){G(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){G(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa=new je(2e3,1e4);class ve extends Ar{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ve.currentPopupAction&&ve.currentPopupAction.cancel(),ve.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return h(e,this.auth,"internal-error"),e}async onExecution(){G(this.filter.length===1,"Popup operations only handle one event");const e=zt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject($(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ve.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sa.get())};e()}}ve.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa="pendingRedirect",nt=new Map;class aa extends Ar{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=nt.get(this.auth._key());if(!e){try{const r=await ca(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}nt.set(this.auth._key(),e)}return this.bypassAuthState||nt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ca(n,e){const t=da(e),r=ua(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function la(n,e){nt.set(n._key(),e)}function ua(n){return j(n._redirectPersistence)}function da(n){return tt(oa,n.config.apiKey,n.name)}async function ha(n,e,t=!1){if(q(n.app))return Promise.reject(ne(n));const r=Se(n),i=ta(r,e),o=await new aa(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa=10*60*1e3;class pa{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ga(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!kr(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError($(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fa&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rn(e))}saveEventToCache(e){this.cachedEventUids.add(Rn(e)),this.lastProcessedEventTime=Date.now()}}function Rn(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function kr({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ga(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kr(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ma(n,e={}){return ce(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,va=/^https?/;async function Ia(n){if(n.config.emulator)return;const{authorizedDomains:e}=await ma(n);for(const t of e)try{if(wa(t))return}catch{}U(n,"unauthorized-domain")}function wa(n){const e=Pt(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!va.test(t))return!1;if(_a.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=new je(3e4,6e4);function Pn(){const n=F().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ba(n){return new Promise((e,t)=>{var r,i,s;function o(){Pn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pn(),t($(n,"network-request-failed"))},timeout:ya.get()})}if(!((i=(r=F().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=F().gapi)===null||s===void 0)&&s.load)o();else{const c=go("iframefcb");return F()[c]=()=>{gapi.load?o():t($(n,"network-request-failed"))},pr(`${po()}?onload=${c}`).catch(a=>t(a))}}).catch(e=>{throw rt=null,e})}let rt=null;function Ea(n){return rt=rt||ba(n),rt}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=new je(5e3,15e3),Sa="__/auth/iframe",Ca="emulator/auth/iframe",Aa={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ka=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ra(n){const e=n.config;h(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?qt(e,Ca):`https://${n.config.authDomain}/${Sa}`,r={apiKey:e.apiKey,appName:n.name,v:Ve},i=ka.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${He(r).slice(1)}`}async function Pa(n){const e=await Ea(n),t=F().gapi;return h(t,n,"internal-error"),e.open({where:document.body,url:Ra(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Aa,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=$(n,"network-request-failed"),c=F().setTimeout(()=>{s(o)},Ta.get());function a(){F().clearTimeout(c),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Da=500,Na=600,La="_blank",Ma="http://localhost";class On{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ua(n,e,t,r=Da,i=Na){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},Oa),{width:r.toString(),height:i.toString(),top:s,left:o}),l=k().toLowerCase();t&&(c=ar(l)?La:t),or(l)&&(e=e||Ma,a.scrollbars="yes");const u=Object.entries(a).reduce((p,[f,d])=>`${p}${f}=${d},`,"");if(ro(l)&&c!=="_self")return xa(e||"",c),new On(null);const g=window.open(e||"",c,u);h(g,n,"popup-blocked");try{g.focus()}catch{}return new On(g)}function xa(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a="__/auth/handler",Fa="emulator/auth/handler",Ba=encodeURIComponent("fac");async function Dn(n,e,t,r,i,s){h(n.config.authDomain,n,"auth-domain-config-required"),h(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ve,eventId:i};if(e instanceof mr){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Ai(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,g]of Object.entries({}))o[u]=g}if(e instanceof We){const u=e.getScopes().filter(g=>g!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const a=await n._getAppCheckToken(),l=a?`#${Ba}=${encodeURIComponent(a)}`:"";return`${qa(n)}?${He(c).slice(1)}${l}`}function qa({config:n}){return n.emulator?qt(n,Fa):`https://${n.authDomain}/${$a}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="webStorageSupport";class Ha{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=br,this._completeRedirectFn=ha,this._overrideRedirectResult=la}async _openPopup(e,t,r,i){var s;G((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Dn(e,t,r,Pt(),i);return Ua(e,o,zt())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Dn(e,t,r,Pt(),i);return Wo(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(G(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Pa(e),r=new pa(e);return t.register("authEvent",i=>(h(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Tt,{type:Tt},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Tt];o!==void 0&&t(!!o),U(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ia(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return hr()||Vt()||ft()}}const Va=Ha;var Nn="@firebase/auth",Ln="1.7.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){h(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function za(n){Me(new Ee("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;h(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fr(n)},l=new uo(r,i,s,a);return wo(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Me(new Ee("auth-internal",e=>{const t=Se(e.getProvider("auth").getImmediate());return(r=>new ja(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ie(Nn,Ln,Wa(n)),Ie(Nn,Ln,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga=5*60,Ka=Vn("authIdTokenMaxAge")||Ga;let Mn=null;const Ja=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Ka)return;const i=t==null?void 0:t.token;Mn!==i&&(Mn=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ya(n=ks()){const e=Gn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Io(n,{popupRedirectResolver:Va,persistence:[ea,Ho,br]}),r=Vn("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Ja(s.toString());xo(t,o,()=>o(t.currentUser)),Uo(t,c=>o(c))}}const i=mi("auth");return i&&yo(t,`http://${i}`),t}function Xa(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}ho({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=$("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Xa().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});za("Browser");var Za="firebase",Qa="10.12.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ie(Za,Qa,"app");const ec={apiKey:"AIzaSyBHVQSKe0iryHvTUQaM9anJ4JDIBxFs4Bk",authDomain:"harmony-hub-90940.firebaseapp.com",projectId:"harmony-hub-90940",storageBucket:"harmony-hub-90940.appspot.com",messagingSenderId:"753913125555",appId:"1:753913125555:web:10fafd30cc0eac4d2eaec6"},tc=Kn(ec),Nt=Ya(tc);function nc(n){let e,t,r,i,s,o,c,a,l,u,g,p,f,d,y,I,v,O,D,Ae,ge,B,me,N,le,ke,ue,_e,Ge,Ke,_t,Kt;return{c(){e=E("div"),t=E("img"),s=L(),o=E("div"),c=E("form"),a=E("div"),l=E("input"),u=L(),g=E("img"),f=L(),d=E("div"),y=L(),I=E("div"),v=E("input"),O=L(),D=E("img"),ge=L(),B=E("div"),me=L(),N=E("button"),le=Fe("Login"),ke=L(),ue=E("div"),_e=E("div"),this.h()},l(P){e=T(P,"DIV",{class:!0});var R=C(e);t=T(R,"IMG",{src:!0,alt:!0,class:!0}),s=M(R),o=T(R,"DIV",{class:!0});var Jt=C(o);c=T(Jt,"FORM",{});var x=C(c);a=T(x,"DIV",{class:!0});var Je=C(a);l=T(Je,"INPUT",{type:!0,placeholder:!0,class:!0}),u=M(Je),g=T(Je,"IMG",{src:!0,alt:!0,class:!0}),Je.forEach(_),f=M(x),d=T(x,"DIV",{class:!0}),C(d).forEach(_),y=M(x),I=T(x,"DIV",{class:!0});var Ye=C(I);v=T(Ye,"INPUT",{type:!0,placeholder:!0,class:!0}),O=M(Ye),D=T(Ye,"IMG",{src:!0,alt:!0,class:!0}),Ye.forEach(_),ge=M(x),B=T(x,"DIV",{class:!0}),C(B).forEach(_),me=M(x),N=T(x,"BUTTON",{type:!0,class:!0});var Yt=C(N);le=Be(Yt,"Login"),Yt.forEach(_),x.forEach(_),Jt.forEach(_),ke=M(R),ue=T(R,"DIV",{class:!0});var Xt=C(ue);_e=T(Xt,"DIV",{class:!0}),C(_e).forEach(_),Xt.forEach(_),R.forEach(_),this.h()},h(){Qe(t.src,r=oi)||m(t,"src",r),m(t,"alt","Logo"),m(t,"class",i="w-1/2 transition-transform ease-in duration-1000 transform z-40 "+(n[3]?"scale-[20]":"")),m(l,"type","email"),m(l,"placeholder","Email"),m(l,"class","svelte-148yhji"),Qe(g.src,p=ci)||m(g,"src",p),m(g,"alt",""),m(g,"class","icon svelte-148yhji"),m(a,"class","relative"),m(d,"class","h-3"),m(v,"type","password"),m(v,"placeholder","Password"),m(v,"class","svelte-148yhji"),Qe(D.src,Ae=ai)||m(D,"src",Ae),m(D,"alt",""),m(D,"class","icon svelte-148yhji"),m(I,"class","relative"),m(B,"class","h-8"),m(N,"type","submit"),m(N,"class","bg-primary text-white py-2 px-4 rounded svelte-148yhji"),N.disabled=n[2],m(o,"class","w-2/3"),m(_e,"class",Ge="aspect-square w-10 bg-bg rounded-full transition-transform duration-1000 ease-in transform "+(n[4]?"scale-[100]":"")),m(ue,"class",Ke="fixed w-screen z-50 grid place-items-center "+(n[4]?"":"opacity-0")),m(e,"class","h-screen flex flex-col items-center place-content-center gap-16 overflow-hidden")},m(P,R){A(P,e,R),b(e,t),b(e,s),b(e,o),b(o,c),b(c,a),b(a,l),Xe(l,n[0]),b(a,u),b(a,g),b(c,f),b(c,d),b(c,y),b(c,I),b(I,v),Xe(v,n[1]),b(I,O),b(I,D),b(c,ge),b(c,B),b(c,me),b(c,N),b(N,le),b(e,ke),b(e,ue),b(ue,_e),_t||(Kt=[Q(l,"input",n[6]),Q(v,"input",n[7]),Q(c,"submit",n[5])],_t=!0)},p(P,[R]){R&8&&i!==(i="w-1/2 transition-transform ease-in duration-1000 transform z-40 "+(P[3]?"scale-[20]":""))&&m(t,"class",i),R&1&&l.value!==P[0]&&Xe(l,P[0]),R&2&&v.value!==P[1]&&Xe(v,P[1]),R&4&&(N.disabled=P[2]),R&16&&Ge!==(Ge="aspect-square w-10 bg-bg rounded-full transition-transform duration-1000 ease-in transform "+(P[4]?"scale-[100]":""))&&m(_e,"class",Ge),R&16&&Ke!==(Ke="fixed w-screen z-50 grid place-items-center "+(P[4]?"":"opacity-0"))&&m(ue,"class",Ke)},i:S,o:S,d(P){P&&_(e),_t=!1,Un(Kt)}}}function rc(n,e,t){let r="",i="",s=!1,o=!1,c=!1,a=()=>{};const l=Lt();function u(){t(3,o=!0),setTimeout(()=>{t(4,c=!0),setTimeout(()=>{l("login")},500)},1e3)}function g(d){d.preventDefault(),t(2,s=!0),Mo(Nt,r,i).then(y=>{t(2,s=!1),u();const I=y.user;console.log("User signed in:",I)}).catch(y=>{t(2,s=!1);const I=y.code,v=y.message;console.error("Error signing in:",I,v)})}Mr(()=>{a=Nt.onAuthStateChanged(d=>{d&&(console.log("User is already signed in:",d),u())})}),Ur(()=>{a()});function p(){r=this.value,t(0,r)}function f(){i=this.value,t(1,i)}return[r,i,s,o,c,g,p,f]}class ic extends ie{constructor(e){super(),se(this,e,rc,nc,re,{})}}function sc(n){let e,t;return e=new ic({}),e.$on("login",n[2]),{c(){De(e.$$.fragment)},l(r){dt(e.$$.fragment,r)},m(r,i){Ne(e,r,i),t=!0},p:S,i(r){t||(W(e.$$.fragment,r),t=!0)},o(r){z(e.$$.fragment,r),t=!1},d(r){Le(e,r)}}}function oc(n){let e,t;return e=new si({}),e.$on("logout",n[1]),{c(){De(e.$$.fragment)},l(r){dt(e.$$.fragment,r)},m(r,i){Ne(e,r,i),t=!0},p:S,i(r){t||(W(e.$$.fragment,r),t=!0)},o(r){z(e.$$.fragment,r),t=!1},d(r){Le(e,r)}}}function ac(n){let e,t,r,i;const s=[oc,sc],o=[];function c(a,l){return a[0]?0:1}return e=c(n),t=o[e]=s[e](n),{c(){t.c(),r=Qt()},l(a){t.l(a),r=Qt()},m(a,l){o[e].m(a,l),A(a,r,l),i=!0},p(a,[l]){let u=e;e=c(a),e===u?o[e].p(a,l):(Mt(),z(o[u],1,1,()=>{o[u]=null}),Ut(),t=o[e],t?t.p(a,l):(t=o[e]=s[e](a),t.c()),W(t,1),t.m(r.parentNode,r))},i(a){i||(W(t),i=!0)},o(a){z(t),i=!1},d(a){a&&_(r),o[e].d(a)}}}function cc(n,e,t){let r=!1;function i(){$o(Nt).then(()=>{console.log("User signed out successfully."),t(0,r=!1)}).catch(o=>{console.error("Error signing out:",o)})}return[r,i,()=>{t(0,r=!0)}]}class dc extends ie{constructor(e){super(),se(this,e,cc,ac,re,{})}}export{dc as component};
