import{r as l,f as s,ay as r,M as g,aU as m}from"./index-a3d4c865.js";function h(n,e){const{defaultValue:t,value:c=l()}=e||{};let u=typeof n=="function"?n():n;c.value!==void 0&&(u=s(c)),t!==void 0&&(u=typeof t=="function"?t():t);const a=l(u),i=l(u);r(()=>{let o=c.value!==void 0?c.value:a.value;e.postState&&(o=e.postState(o)),i.value=o});function f(o){const d=i.value;a.value=o,m(i.value)!==o&&e.onChange&&e.onChange(o,d)}return g(c,()=>{a.value=c.value}),[i,f]}function p(){const n=document.documentElement.clientWidth,e=window.innerHeight||document.documentElement.clientHeight;return{width:n,height:e}}function w(n){const e=n.getBoundingClientRect(),t=document.documentElement;return{left:e.left+(window.pageXOffset||t.scrollLeft)-(t.clientLeft||document.body.clientLeft||0),top:e.top+(window.pageYOffset||t.scrollTop)-(t.clientTop||document.body.clientTop||0)}}export{p as a,w as g,h as u};
