import{r as W,ak as Y,Q as P,D as K,N as q,al as E,am as Q,O as H,an as U,ao as A,d as _,L as u,_ as x,h as d,H as $,F as G,ap as J,aq as T,S as Z,ar as ee,as as te,Y as re,a6 as oe,at as se,au as ne,av as le,aw as ie,ah as ae,m as ce,o as ue,b as de,c as ge,f as N,e as L,p as pe,j as fe,P as he,l as ve}from"./index-8af4ac8d.js";import{C as me}from"./CheckOutlined-91861008.js";import{T as ye}from"./index-4bd0c1c1.js";import"./colors-dec6abbe.js";const Ce=()=>{const e=W(new Map),t=o=>r=>{e.value.set(o,r)};return Y(()=>{e.value=new Map}),[t,e]},be=Ce,$e=["normal","exception","active","success"],D=()=>({prefixCls:String,type:P(),percent:Number,format:K(),status:P(),showInfo:q(),strokeWidth:Number,strokeLinecap:P(),strokeColor:E(),trailColor:String,width:Number,success:Q(),gapDegree:Number,gapPosition:P(),size:H([String,Number,Array]),steps:Number,successPercent:Number,title:String,progressStatus:P()});function w(e){return!e||e<0?0:e>100?100:e}function I(e){let{success:t,successPercent:o}=e,r=o;return t&&"progress"in t&&(U(!1,"Progress","`success.progress` is deprecated. Please use `success.percent` instead."),r=t.progress),t&&"percent"in t&&(r=t.percent),r}function Se(e){let{percent:t,success:o,successPercent:r}=e;const s=w(I({success:o,successPercent:r}));return[s,w(w(t)-s)]}function ke(e){let{success:t={},strokeColor:o}=e;const{strokeColor:r}=t;return[r||A.green,o||null]}const j=(e,t,o)=>{var r,s,f,l;let n=-1,i=-1;if(t==="step"){const v=o.steps,g=o.strokeWidth;typeof e=="string"||typeof e>"u"?(n=e==="small"?2:14,i=g??8):typeof e=="number"?[n,i]=[e,e]:[n=14,i=8]=e,n*=v}else if(t==="line"){const v=o==null?void 0:o.strokeWidth;typeof e=="string"||typeof e>"u"?i=v||(e==="small"?6:8):typeof e=="number"?[n,i]=[e,e]:[n=-1,i=8]=e}else(t==="circle"||t==="dashboard")&&(typeof e=="string"||typeof e>"u"?[n,i]=e==="small"?[60,60]:[120,120]:typeof e=="number"?[n,i]=[e,e]:(n=(s=(r=e[0])!==null&&r!==void 0?r:e[1])!==null&&s!==void 0?s:120,i=(l=(f=e[0])!==null&&f!==void 0?f:e[1])!==null&&l!==void 0?l:120));return{width:n,height:i}};var xe=globalThis&&globalThis.__rest||function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(o[r[s]]=e[r[s]]);return o};const we=()=>x(x({},D()),{strokeColor:E(),direction:P()}),Pe=e=>{let t=[];return Object.keys(e).forEach(o=>{const r=parseFloat(o.replace(/%/g,""));isNaN(r)||t.push({key:r,value:e[o]})}),t=t.sort((o,r)=>o.key-r.key),t.map(o=>{let{key:r,value:s}=o;return`${s} ${r}%`}).join(", ")},_e=(e,t)=>{const{from:o=A.blue,to:r=A.blue,direction:s=t==="rtl"?"to left":"to right"}=e,f=xe(e,["from","to","direction"]);if(Object.keys(f).length!==0){const l=Pe(f);return{backgroundImage:`linear-gradient(${s}, ${l})`}}return{backgroundImage:`linear-gradient(${s}, ${o}, ${r})`}},Oe=_({compatConfig:{MODE:3},name:"ProgressLine",inheritAttrs:!1,props:we(),setup(e,t){let{slots:o,attrs:r}=t;const s=u(()=>{const{strokeColor:a,direction:p}=e;return a&&typeof a!="string"?_e(a,p):{backgroundColor:a}}),f=u(()=>e.strokeLinecap==="square"||e.strokeLinecap==="butt"?0:void 0),l=u(()=>e.trailColor?{backgroundColor:e.trailColor}:void 0),n=u(()=>{var a;return(a=e.size)!==null&&a!==void 0?a:[-1,e.strokeWidth||(e.size==="small"?6:8)]}),i=u(()=>j(n.value,"line",{strokeWidth:e.strokeWidth})),v=u(()=>{const{percent:a}=e;return x({width:`${w(a)}%`,height:`${i.value.height}px`,borderRadius:f.value},s.value)}),g=u(()=>I(e)),C=u(()=>{const{success:a}=e;return{width:`${w(g.value)}%`,height:`${i.value.height}px`,borderRadius:f.value,backgroundColor:a==null?void 0:a.strokeColor}}),h={width:i.value.width<0?"100%":i.value.width,height:`${i.value.height}px`};return()=>{var a;return d(G,null,[d("div",$($({},r),{},{class:[`${e.prefixCls}-outer`,r.class],style:[r.style,h]}),[d("div",{class:`${e.prefixCls}-inner`,style:l.value},[d("div",{class:`${e.prefixCls}-bg`,style:v.value},null),g.value!==void 0?d("div",{class:`${e.prefixCls}-success-bg`,style:C.value},null):null])]),(a=o.default)===null||a===void 0?void 0:a.call(o)])}}}),Ie={percent:0,prefixCls:"vc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,trailColor:"#D9D9D9",trailWidth:1},De=e=>{const t=W(null);return J(()=>{const o=Date.now();let r=!1;e.value.forEach(s=>{const f=(s==null?void 0:s.$el)||s;if(!f)return;r=!0;const l=f.style;l.transitionDuration=".3s, .3s, .3s, .06s",t.value&&o-t.value<100&&(l.transitionDuration="0s, 0s")}),r&&(t.value=Date.now())}),e},je={gapDegree:Number,gapPosition:{type:String},percent:{type:[Array,Number]},prefixCls:String,strokeColor:{type:[Object,String,Array]},strokeLinecap:{type:String},strokeWidth:Number,trailColor:String,trailWidth:Number,transition:String};var Ae=globalThis&&globalThis.__rest||function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(o[r[s]]=e[r[s]]);return o};let M=0;function X(e){return+e.replace("%","")}function B(e){return Array.isArray(e)?e:[e]}function F(e,t,o,r){let s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,f=arguments.length>5?arguments[5]:void 0;const l=50-r/2;let n=0,i=-l,v=0,g=-2*l;switch(f){case"left":n=-l,i=0,v=2*l,g=0;break;case"right":n=l,i=0,v=-2*l,g=0;break;case"bottom":i=l,g=2*l;break}const C=`M 50,50 m ${n},${i}
   a ${l},${l} 0 1 1 ${v},${-g}
   a ${l},${l} 0 1 1 ${-v},${g}`,h=Math.PI*2*l,a={stroke:o,strokeDasharray:`${t/100*(h-s)}px ${h}px`,strokeDashoffset:`-${s/2+e/100*(h-s)}px`,transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s"};return{pathString:C,pathStyle:a}}const We=_({compatConfig:{MODE:3},name:"VCCircle",props:T(je,Ie),setup(e){M+=1;const t=W(M),o=u(()=>B(e.percent)),r=u(()=>B(e.strokeColor)),[s,f]=be();De(f);const l=()=>{const{prefixCls:n,strokeWidth:i,strokeLinecap:v,gapDegree:g,gapPosition:C}=e;let h=0;return o.value.map((a,p)=>{const c=r.value[p]||r.value[r.value.length-1],b=Object.prototype.toString.call(c)==="[object Object]"?`url(#${n}-gradient-${t.value})`:"",{pathString:y,pathStyle:S}=F(h,a,c,i,g,C);h+=a;const k={key:p,d:y,stroke:b,"stroke-linecap":v,"stroke-width":i,opacity:a===0?0:1,"fill-opacity":"0",class:`${n}-circle-path`,style:S};return d("path",$({ref:s(p)},k),null)})};return()=>{const{prefixCls:n,strokeWidth:i,trailWidth:v,gapDegree:g,gapPosition:C,trailColor:h,strokeLinecap:a,strokeColor:p}=e,c=Ae(e,["prefixCls","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","strokeColor"]),{pathString:b,pathStyle:y}=F(0,100,h,i,g,C);delete c.percent;const S=r.value.find(m=>Object.prototype.toString.call(m)==="[object Object]"),k={d:b,stroke:h,"stroke-linecap":a,"stroke-width":v||i,"fill-opacity":"0",class:`${n}-circle-trail`,style:y};return d("svg",$({class:`${n}-circle`,viewBox:"0 0 100 100"},c),[S&&d("defs",null,[d("linearGradient",{id:`${n}-gradient-${t.value}`,x1:"100%",y1:"0%",x2:"0%",y2:"0%"},[Object.keys(S).sort((m,O)=>X(m)-X(O)).map((m,O)=>d("stop",{key:O,offset:m,"stop-color":S[m]},null))])]),d("path",k,null),l().reverse()])}}}),Ee=()=>x(x({},D()),{strokeColor:E()}),Te=3,Le=e=>Te/e*100,Re=_({compatConfig:{MODE:3},name:"ProgressCircle",inheritAttrs:!1,props:T(Ee(),{trailColor:null}),setup(e,t){let{slots:o,attrs:r}=t;const s=u(()=>{var c;return(c=e.width)!==null&&c!==void 0?c:120}),f=u(()=>{var c;return(c=e.size)!==null&&c!==void 0?c:[s.value,s.value]}),l=u(()=>j(f.value,"circle")),n=u(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),i=u(()=>({width:`${l.value.width}px`,height:`${l.value.height}px`,fontSize:`${l.value.width*.15+6}px`})),v=u(()=>{var c;return(c=e.strokeWidth)!==null&&c!==void 0?c:Math.max(Le(l.value.width),6)}),g=u(()=>e.gapPosition||e.type==="dashboard"&&"bottom"||void 0),C=u(()=>Se(e)),h=u(()=>Object.prototype.toString.call(e.strokeColor)==="[object Object]"),a=u(()=>ke({success:e.success,strokeColor:e.strokeColor})),p=u(()=>({[`${e.prefixCls}-inner`]:!0,[`${e.prefixCls}-circle-gradient`]:h.value}));return()=>{var c;const b=d(We,{percent:C.value,strokeWidth:v.value,trailWidth:v.value,strokeColor:a.value,strokeLinecap:e.strokeLinecap,trailColor:e.trailColor,prefixCls:e.prefixCls,gapDegree:n.value,gapPosition:g.value},null);return d("div",$($({},r),{},{class:[p.value,r.class],style:[r.style,i.value]}),[l.value.width<=20?d(ye,null,{default:()=>[d("span",null,[b])],title:o.default}):d(G,null,[b,(c=o.default)===null||c===void 0?void 0:c.call(o)])])}}}),Ne=()=>x(x({},D()),{steps:Number,strokeColor:H(),trailColor:String}),Me=_({compatConfig:{MODE:3},name:"Steps",props:Ne(),setup(e,t){let{slots:o}=t;const r=u(()=>Math.round(e.steps*((e.percent||0)/100))),s=u(()=>{var n;return(n=e.size)!==null&&n!==void 0?n:[e.size==="small"?2:14,e.strokeWidth||8]}),f=u(()=>j(s.value,"step",{steps:e.steps,strokeWidth:e.strokeWidth||8})),l=u(()=>{const{steps:n,strokeColor:i,trailColor:v,prefixCls:g}=e,C=[];for(let h=0;h<n;h+=1){const a=Array.isArray(i)?i[h]:i,p={[`${g}-steps-item`]:!0,[`${g}-steps-item-active`]:h<=r.value-1};C.push(d("div",{key:h,class:p,style:{backgroundColor:h<=r.value-1?a:v,width:`${f.value.width/n}px`,height:`${f.value.height}px`}},null))}return C});return()=>{var n;return d("div",{class:`${e.prefixCls}-steps-outer`},[l.value,(n=o.default)===null||n===void 0?void 0:n.call(o)])}}}),Xe=new te("antProgressActive",{"0%":{transform:"translateX(-100%) scaleX(0)",opacity:.1},"20%":{transform:"translateX(-100%) scaleX(0)",opacity:.5},to:{transform:"translateX(0) scaleX(1)",opacity:0}}),Be=e=>{const{componentCls:t,iconCls:o}=e;return{[t]:x(x({},re(e)),{display:"inline-block","&-rtl":{direction:"rtl"},"&-line":{position:"relative",width:"100%",fontSize:e.fontSize,marginInlineEnd:e.marginXS,marginBottom:e.marginXS},[`${t}-outer`]:{display:"inline-block",width:"100%"},[`&${t}-show-info`]:{[`${t}-outer`]:{marginInlineEnd:`calc(-2em - ${e.marginXS}px)`,paddingInlineEnd:`calc(2em + ${e.paddingXS}px)`}},[`${t}-inner`]:{position:"relative",display:"inline-block",width:"100%",overflow:"hidden",verticalAlign:"middle",backgroundColor:e.progressRemainingColor,borderRadius:e.progressLineRadius},[`${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.colorInfo}},[`${t}-success-bg, ${t}-bg`]:{position:"relative",backgroundColor:e.colorInfo,borderRadius:e.progressLineRadius,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`},[`${t}-success-bg`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,backgroundColor:e.colorSuccess},[`${t}-text`]:{display:"inline-block",width:"2em",marginInlineStart:e.marginXS,color:e.progressInfoTextColor,lineHeight:1,whiteSpace:"nowrap",textAlign:"start",verticalAlign:"middle",wordBreak:"normal",[o]:{fontSize:e.fontSize}},[`&${t}-status-active`]:{[`${t}-bg::before`]:{position:"absolute",inset:0,backgroundColor:e.colorBgContainer,borderRadius:e.progressLineRadius,opacity:0,animationName:Xe,animationDuration:e.progressActiveMotionDuration,animationTimingFunction:e.motionEaseOutQuint,animationIterationCount:"infinite",content:'""'}},[`&${t}-status-exception`]:{[`${t}-bg`]:{backgroundColor:e.colorError},[`${t}-text`]:{color:e.colorError}},[`&${t}-status-exception ${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.colorError}},[`&${t}-status-success`]:{[`${t}-bg`]:{backgroundColor:e.colorSuccess},[`${t}-text`]:{color:e.colorSuccess}},[`&${t}-status-success ${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.colorSuccess}}})}},Fe=e=>{const{componentCls:t,iconCls:o}=e;return{[t]:{[`${t}-circle-trail`]:{stroke:e.progressRemainingColor},[`&${t}-circle ${t}-inner`]:{position:"relative",lineHeight:1,backgroundColor:"transparent"},[`&${t}-circle ${t}-text`]:{position:"absolute",insetBlockStart:"50%",insetInlineStart:0,width:"100%",margin:0,padding:0,color:e.colorText,lineHeight:1,whiteSpace:"normal",textAlign:"center",transform:"translateY(-50%)",[o]:{fontSize:`${e.fontSize/e.fontSizeSM}em`}},[`${t}-circle&-status-exception`]:{[`${t}-text`]:{color:e.colorError}},[`${t}-circle&-status-success`]:{[`${t}-text`]:{color:e.colorSuccess}}},[`${t}-inline-circle`]:{lineHeight:1,[`${t}-inner`]:{verticalAlign:"bottom"}}}},He=e=>{const{componentCls:t}=e;return{[t]:{[`${t}-steps`]:{display:"inline-block","&-outer":{display:"flex",flexDirection:"row",alignItems:"center"},"&-item":{flexShrink:0,minWidth:e.progressStepMinWidth,marginInlineEnd:e.progressStepMarginInlineEnd,backgroundColor:e.progressRemainingColor,transition:`all ${e.motionDurationSlow}`,"&-active":{backgroundColor:e.colorInfo}}}}}},Ge=e=>{const{componentCls:t,iconCls:o}=e;return{[t]:{[`${t}-small&-line, ${t}-small&-line ${t}-text ${o}`]:{fontSize:e.fontSizeSM}}}},ze=Z("Progress",e=>{const t=e.marginXXS/2,o=ee(e,{progressLineRadius:100,progressInfoTextColor:e.colorText,progressDefaultColor:e.colorInfo,progressRemainingColor:e.colorFillSecondary,progressStepMarginInlineEnd:t,progressStepMinWidth:t,progressActiveMotionDuration:"2.4s"});return[Be(o),Fe(o),He(o),Ge(o)]});var Ve=globalThis&&globalThis.__rest||function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(o[r[s]]=e[r[s]]);return o};const Ye=_({compatConfig:{MODE:3},name:"AProgress",inheritAttrs:!1,props:T(D(),{type:"line",percent:0,showInfo:!0,trailColor:null,size:"default",strokeLinecap:"round"}),slots:Object,setup(e,t){let{slots:o,attrs:r}=t;const{prefixCls:s,direction:f}=oe("progress",e),[l,n]=ze(s),i=u(()=>Array.isArray(e.strokeColor)?e.strokeColor[0]:e.strokeColor),v=u(()=>{const{percent:p=0}=e,c=I(e);return parseInt(c!==void 0?c.toString():p.toString(),10)}),g=u(()=>{const{status:p}=e;return!$e.includes(p)&&v.value>=100?"success":p||"normal"}),C=u(()=>{const{type:p,showInfo:c,size:b}=e,y=s.value;return{[y]:!0,[`${y}-inline-circle`]:p==="circle"&&j(b,"circle").width<=20,[`${y}-${p==="dashboard"&&"circle"||p}`]:!0,[`${y}-status-${g.value}`]:!0,[`${y}-show-info`]:c,[`${y}-${b}`]:b,[`${y}-rtl`]:f.value==="rtl",[n.value]:!0}}),h=u(()=>typeof e.strokeColor=="string"||Array.isArray(e.strokeColor)?e.strokeColor:void 0),a=()=>{const{showInfo:p,format:c,type:b,percent:y,title:S}=e,k=I(e);if(!p)return null;let m;const O=c||(o==null?void 0:o.format)||(V=>`${V}%`),R=b==="line";return c||o!=null&&o.format||g.value!=="exception"&&g.value!=="success"?m=O(w(y),w(k)):g.value==="exception"?m=R?d(se,null,null):d(ne,null,null):g.value==="success"&&(m=R?d(le,null,null):d(me,null,null)),d("span",{class:`${s.value}-text`,title:S===void 0&&typeof m=="string"?m:void 0},[m])};return()=>{const{type:p,steps:c,title:b}=e,{class:y}=r,S=Ve(r,["class"]),k=a();let m;return p==="line"?m=c?d(Me,$($({},e),{},{strokeColor:h.value,prefixCls:s.value,steps:c}),{default:()=>[k]}):d(Oe,$($({},e),{},{strokeColor:i.value,prefixCls:s.value,direction:f.value}),{default:()=>[k]}):(p==="circle"||p==="dashboard")&&(m=d(Re,$($({},e),{},{prefixCls:s.value,strokeColor:i.value,progressStatus:g.value}),{default:()=>[k]})),l(d("div",$($({role:"progressbar"},S),{},{class:[C.value,y],title:b}),[m]))}}}),Ke=ie(Ye),z=e=>(pe("data-v-d19c8399"),e=e(),fe(),e),qe={class:"verifyAvatar p-6 flex flex-col items-center space-y-4"},Qe=z(()=>L("p",{class:"text-sm font-primary"},"系統正在驗證以下X賬號的頭像...",-1)),Ue=z(()=>L("div",{class:"f-1 text-2xl"},"@willamyang",-1)),Je={class:"w-96"},Ze=_({__name:"verifyAvatar",setup(e){const t=ae(),o=ce({percent:0});return ue(()=>{const r=setInterval(()=>{o.percent==100?(clearInterval(r),t.push("/extendExpense/tips")):o.percent+=10},800)}),(r,s)=>(de(),ge("div",qe,[d(N(he),{width:200,height:200,round:!0,src:"https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"}),Qe,Ue,L("div",Je,[d(N(Ke),{percent:o.percent,"stroke-color":"#BBF74C",trailColor:"rgba(187,247,76,0.3)","show-info":!1,size:2},null,8,["percent"])])]))}});const st=ve(Ze,[["__scopeId","data-v-d19c8399"]]);export{st as default};
