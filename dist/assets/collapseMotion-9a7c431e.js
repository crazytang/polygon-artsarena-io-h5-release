import{n}from"./index-a51cc7ab.js";const o=t=>({[t.componentCls]:{[`${t.antCls}-motion-collapse-legacy`]:{overflow:"hidden","&-active":{transition:`height ${t.motionDurationMid} ${t.motionEaseInOut},
        opacity ${t.motionDurationMid} ${t.motionEaseInOut} !important`}},[`${t.antCls}-motion-collapse`]:{overflow:"hidden",transition:`height ${t.motionDurationMid} ${t.motionEaseInOut},
        opacity ${t.motionDurationMid} ${t.motionEaseInOut} !important`}}}),u=o;function e(t,i){return t.classList?t.classList.contains(i):` ${t.className} `.indexOf(` ${i} `)>-1}function a(t,i){t.classList?t.classList.add(i):e(t,i)||(t.className=`${t.className} ${i}`)}function l(t,i){if(t.classList)t.classList.remove(i);else if(e(t,i)){const s=t.className;t.className=` ${s} `.replace(` ${i} `," ")}}const r=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"ant-motion-collapse",i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return{name:t,appear:i,css:!0,onBeforeEnter:s=>{s.style.height="0px",s.style.opacity="0",a(s,t)},onEnter:s=>{n(()=>{s.style.height=`${s.scrollHeight}px`,s.style.opacity="1"})},onAfterEnter:s=>{s&&(l(s,t),s.style.height=null,s.style.opacity=null)},onBeforeLeave:s=>{a(s,t),s.style.height=`${s.offsetHeight}px`,s.style.opacity=null},onLeave:s=>{setTimeout(()=>{s.style.height="0px",s.style.opacity="0"})},onAfterLeave:s=>{s&&(l(s,t),s.style&&(s.style.height=null,s.style.opacity=null))}}},p=r;export{p as c,u as g};
