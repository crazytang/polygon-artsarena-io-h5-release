import{d as E,aq as T,r as f,M as V,_ as o,G as M,h,H as W,ae as F}from"./index-8af4ac8d.js";var G=globalThis&&globalThis.__rest||function(t,r){var c={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&r.indexOf(a)<0&&(c[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(t);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(t,a[n])&&(c[a[n]]=t[a[n]]);return c};const H={prefixCls:String,name:String,id:String,type:String,defaultChecked:{type:[Boolean,Number],default:void 0},checked:{type:[Boolean,Number],default:void 0},disabled:Boolean,tabindex:{type:[Number,String]},readonly:Boolean,autofocus:Boolean,value:F.any,required:Boolean},R=E({compatConfig:{MODE:3},name:"Checkbox",inheritAttrs:!1,props:T(H,{prefixCls:"rc-checkbox",type:"checkbox",defaultChecked:!1}),emits:["click","change"],setup(t,r){let{attrs:c,emit:a,expose:n}=r;const s=f(t.checked===void 0?t.defaultChecked:t.checked),d=f();V(()=>t.checked,()=>{s.value=t.checked}),n({focus(){var e;(e=d.value)===null||e===void 0||e.focus()},blur(){var e;(e=d.value)===null||e===void 0||e.blur()}});const i=f(),y=e=>{if(t.disabled)return;t.checked===void 0&&(s.value=e.target.checked),e.shiftKey=i.value;const u={target:o(o({},t),{checked:e.target.checked}),stopPropagation(){e.stopPropagation()},preventDefault(){e.preventDefault()},nativeEvent:e};t.checked!==void 0&&(d.value.checked=!!t.checked),a("change",u),i.value=!1},k=e=>{a("click",e),i.value=e.shiftKey};return()=>{const{prefixCls:e,name:u,id:g,type:m,disabled:b,readonly:x,tabindex:C,autofocus:O,value:P,required:S}=t,_=G(t,["prefixCls","name","id","type","disabled","readonly","tabindex","autofocus","value","required"]),{class:j,onFocus:B,onBlur:K,onKeydown:N,onKeypress:w,onKeyup:q}=c,v=o(o({},_),c),D=Object.keys(v).reduce((p,l)=>((l.startsWith("data-")||l.startsWith("aria-")||l==="role")&&(p[l]=v[l]),p),{}),$=M(e,j,{[`${e}-checked`]:s.value,[`${e}-disabled`]:b}),A=o(o({name:u,id:g,type:m,readonly:x,disabled:b,tabindex:C,class:`${e}-input`,checked:!!s.value,autofocus:O,value:P},D),{onChange:y,onClick:k,onFocus:B,onBlur:K,onKeydown:N,onKeypress:w,onKeyup:q,required:S});return h("span",{class:$},[h("input",W({ref:d},A),null),h("span",{class:`${e}-inner`},null)])}}});export{R as V};
