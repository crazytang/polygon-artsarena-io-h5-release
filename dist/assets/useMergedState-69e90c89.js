import{ag as r,ah as c,ai as o,aj as g,ak as d}from"./index-1e3b5e9c.js";function m(l,n){const{defaultValue:u,value:a=r()}=n||{};let t=typeof l=="function"?l():l;a.value!==void 0&&(t=c(a)),u!==void 0&&(t=typeof u=="function"?u():u);const i=r(t),f=r(t);o(()=>{let e=a.value!==void 0?a.value:i.value;n.postState&&(e=n.postState(e)),f.value=e});function s(e){const v=f.value;i.value=e,d(f.value)!==e&&n.onChange&&n.onChange(e,v)}return g(a,()=>{i.value=a.value}),[f,s]}export{m as u};
