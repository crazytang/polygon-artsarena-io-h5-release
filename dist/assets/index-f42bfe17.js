import{ab as i,an as F,a4 as T,ar as $,ac as H,ai as it,cs as st,cm as R,ap as z,aO as pt,aP as K,aQ as ct,aR as ft,ao as ut,aT as dt,aa as D,ag as q,aj as gt,cE as U,aX as mt,cg as vt,cF as bt,aU as ht,ce as G,cG as yt,aD as wt}from"./index-1e3b5e9c.js";import{T as Ct,f as Ot}from"./firstNotUndefined-748ee901.js";const E=["blue","purple","cyan","green","magenta","pink","red","orange","yellow","volcano","geekblue","lime","gold"],$t=(t,o,e,n,a)=>{const l=t/2,s=0,c=l,d=e*1/Math.sqrt(2),v=l-e*(1-1/Math.sqrt(2)),f=l-o*(1/Math.sqrt(2)),u=e*(Math.sqrt(2)-1)+o*(1/Math.sqrt(2)),g=2*l-f,y=u,b=2*l-d,N=v,I=2*l-s,A=c,_=l*Math.sqrt(2)+e*(Math.sqrt(2)-2),S=e*(Math.sqrt(2)-1);return{pointerEvents:"none",width:t,height:t,overflow:"hidden","&::after":{content:'""',position:"absolute",width:_,height:_,bottom:0,insetInline:0,margin:"auto",borderRadius:{_skip_check_:!0,value:`0 0 ${o}px 0`},transform:"translateY(50%) rotate(-135deg)",boxShadow:a,zIndex:0,background:"transparent"},"&::before":{position:"absolute",bottom:0,insetInlineStart:0,width:t,height:t/2,background:n,clipPath:{_multi_value_:!0,value:[`polygon(${S}px 100%, 50% ${S}px, ${2*l-S}px 100%, ${S}px 100%)`,`path('M ${s} ${c} A ${e} ${e} 0 0 0 ${d} ${v} L ${f} ${u} A ${o} ${o} 0 0 1 ${g} ${y} L ${b} ${N} A ${e} ${e} 0 0 0 ${I} ${A} Z')`]},content:'""'}}};function _t(t,o){return E.reduce((e,n)=>{const a=t[`${n}-1`],l=t[`${n}-3`],s=t[`${n}-6`],c=t[`${n}-7`];return i(i({},e),o(n,{lightColor:a,lightBorderColor:l,darkColor:s,textColor:c}))},{})}const C={adjustX:1,adjustY:1},O=[0,0],tt={left:{points:["cr","cl"],overflow:C,offset:[-4,0],targetOffset:O},right:{points:["cl","cr"],overflow:C,offset:[4,0],targetOffset:O},top:{points:["bc","tc"],overflow:C,offset:[0,-4],targetOffset:O},bottom:{points:["tc","bc"],overflow:C,offset:[0,4],targetOffset:O},topLeft:{points:["bl","tl"],overflow:C,offset:[0,-4],targetOffset:O},leftTop:{points:["tr","tl"],overflow:C,offset:[-4,0],targetOffset:O},topRight:{points:["br","tr"],overflow:C,offset:[0,-4],targetOffset:O},rightTop:{points:["tl","tr"],overflow:C,offset:[4,0],targetOffset:O},bottomRight:{points:["tr","br"],overflow:C,offset:[0,4],targetOffset:O},rightBottom:{points:["bl","br"],overflow:C,offset:[4,0],targetOffset:O},bottomLeft:{points:["tl","bl"],overflow:C,offset:[0,4],targetOffset:O},leftBottom:{points:["br","bl"],overflow:C,offset:[-4,0],targetOffset:O}},Pt={prefixCls:String,id:String,overlayInnerStyle:$.any},xt=F({compatConfig:{MODE:3},name:"TooltipContent",props:Pt,setup(t,o){let{slots:e}=o;return()=>{var n;return T("div",{class:`${t.prefixCls}-inner`,id:t.id,role:"tooltip",style:t.overlayInnerStyle},[(n=e.overlay)===null||n===void 0?void 0:n.call(e)])}}});var St=globalThis&&globalThis.__rest||function(t,o){var e={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&o.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(t);a<n.length;a++)o.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(e[n[a]]=t[n[a]]);return e};function Z(){}const Tt=F({compatConfig:{MODE:3},name:"Tooltip",inheritAttrs:!1,props:{trigger:$.any.def(["hover"]),defaultVisible:{type:Boolean,default:void 0},visible:{type:Boolean,default:void 0},placement:$.string.def("right"),transitionName:String,animation:$.any,afterVisibleChange:$.func.def(()=>{}),overlayStyle:{type:Object,default:void 0},overlayClassName:String,prefixCls:$.string.def("rc-tooltip"),mouseEnterDelay:$.number.def(.1),mouseLeaveDelay:$.number.def(.1),getPopupContainer:Function,destroyTooltipOnHide:{type:Boolean,default:!1},align:$.object.def(()=>({})),arrowContent:$.any.def(null),tipId:String,builtinPlacements:$.object,overlayInnerStyle:{type:Object,default:void 0},popupVisible:{type:Boolean,default:void 0},onVisibleChange:Function,onPopupAlign:Function},setup(t,o){let{slots:e,attrs:n,expose:a}=o;const l=H(),s=()=>{const{prefixCls:f,tipId:u,overlayInnerStyle:g}=t;return[T("div",{class:`${f}-arrow`,key:"arrow"},[st(e,t,"arrowContent")]),T(xt,{key:"content",prefixCls:f,id:u,overlayInnerStyle:g},{overlay:e.overlay})]};a({getPopupDomNode:()=>l.value.getPopupDomNode(),triggerDOM:l,forcePopupAlign:()=>{var f;return(f=l.value)===null||f===void 0?void 0:f.forcePopupAlign()}});const d=H(!1),v=H(!1);return it(()=>{const{destroyTooltipOnHide:f}=t;if(typeof f=="boolean")d.value=f;else if(f&&typeof f=="object"){const{keepParent:u}=f;d.value=u===!0,v.value=u===!1}}),()=>{const{overlayClassName:f,trigger:u,mouseEnterDelay:g,mouseLeaveDelay:y,overlayStyle:b,prefixCls:N,afterVisibleChange:I,transitionName:A,animation:_,placement:S,align:L,destroyTooltipOnHide:W,defaultVisible:B}=t,M=St(t,["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","afterVisibleChange","transitionName","animation","placement","align","destroyTooltipOnHide","defaultVisible"]),j=i({},M);t.visible!==void 0&&(j.popupVisible=t.visible);const X=i(i(i({popupClassName:f,prefixCls:N,action:u,builtinPlacements:tt,popupPlacement:S,popupAlign:L,afterPopupVisibleChange:I,popupTransitionName:A,popupAnimation:_,defaultPopupVisible:B,destroyPopupOnHide:d.value,autoDestroy:v.value,mouseLeaveDelay:y,popupStyle:b,mouseEnterDelay:g},j),n),{onPopupVisibleChange:t.onVisibleChange||Z,onPopupAlign:t.onPopupAlign||Z,ref:l,popup:s()});return T(Ct,X,{default:e.default})}}}),At=()=>({trigger:[String,Array],open:{type:Boolean,default:void 0},visible:{type:Boolean,default:void 0},placement:String,color:String,transitionName:String,overlayStyle:R(),overlayInnerStyle:R(),overlayClassName:String,openClassName:String,prefixCls:String,mouseEnterDelay:Number,mouseLeaveDelay:Number,getPopupContainer:Function,arrowPointAtCenter:{type:Boolean,default:void 0},autoAdjustOverflow:{type:[Boolean,Object],default:void 0},destroyTooltipOnHide:{type:Boolean,default:void 0},align:R(),builtinPlacements:R(),children:Array,onVisibleChange:Function,"onUpdate:visible":Function,onOpenChange:Function,"onUpdate:open":Function}),kt={adjustX:1,adjustY:1},Q={adjustX:0,adjustY:0},Nt=[0,0];function J(t){return typeof t=="boolean"?t?kt:Q:i(i({},Q),t)}function Bt(t){const{arrowWidth:o=4,horizontalArrowShift:e=16,verticalArrowShift:n=8,autoAdjustOverflow:a,arrowPointAtCenter:l}=t,s={left:{points:["cr","cl"],offset:[-4,0]},right:{points:["cl","cr"],offset:[4,0]},top:{points:["bc","tc"],offset:[0,-4]},bottom:{points:["tc","bc"],offset:[0,4]},topLeft:{points:["bl","tc"],offset:[-(e+o),-4]},leftTop:{points:["tr","cl"],offset:[-4,-(n+o)]},topRight:{points:["br","tc"],offset:[e+o,-4]},rightTop:{points:["tl","cr"],offset:[4,-(n+o)]},bottomRight:{points:["tr","bc"],offset:[e+o,4]},rightBottom:{points:["bl","cr"],offset:[4,n+o]},bottomLeft:{points:["tl","bc"],offset:[-(e+o),4]},leftBottom:{points:["br","cl"],offset:[-4,n+o]}};return Object.keys(s).forEach(c=>{s[c]=l?i(i({},s[c]),{overflow:J(a),targetOffset:Nt}):i(i({},tt[c]),{overflow:J(a)}),s[c].ignoreShake=!0}),s}const Dt=E.map(t=>`${t}-inverse`),It=["success","processing","error","default","warning"];function jt(t){return(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0)?[...Dt,...E].includes(t):E.includes(t)}function Yt(t){return It.includes(t)}function Rt(t,o){const e=jt(o),n=z({[`${t}-${o}`]:o&&e}),a={},l={};return o&&!e&&(a.background=o,l["--antd-arrow-background-color"]=o),{className:n,overlayStyle:a,arrowStyle:l}}function V(t){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return t.map(e=>`${o}${e}`).join(",")}const et=8;function Vt(t){const o=et,{sizePopupArrow:e,contentRadius:n,borderRadiusOuter:a,limitVerticalRadius:l}=t,s=e/2-Math.ceil(a*(Math.sqrt(2)-1)),c=(n>12?n+2:12)-s,d=l?o-s:c;return{dropdownArrowOffset:c,dropdownArrowOffsetVertical:d}}function Et(t,o){const{componentCls:e,sizePopupArrow:n,marginXXS:a,borderRadiusXS:l,borderRadiusOuter:s,boxShadowPopoverArrow:c}=t,{colorBg:d,showArrowCls:v,contentRadius:f=t.borderRadiusLG,limitVerticalRadius:u}=o,{dropdownArrowOffsetVertical:g,dropdownArrowOffset:y}=Vt({sizePopupArrow:n,contentRadius:f,borderRadiusOuter:s,limitVerticalRadius:u}),b=n/2+a;return{[e]:{[`${e}-arrow`]:[i(i({position:"absolute",zIndex:1,display:"block"},$t(n,l,s,d,c)),{"&:before":{background:d}})],[[`&-placement-top ${e}-arrow`,`&-placement-topLeft ${e}-arrow`,`&-placement-topRight ${e}-arrow`].join(",")]:{bottom:0,transform:"translateY(100%) rotate(180deg)"},[`&-placement-top ${e}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(100%) rotate(180deg)"},[`&-placement-topLeft ${e}-arrow`]:{left:{_skip_check_:!0,value:y}},[`&-placement-topRight ${e}-arrow`]:{right:{_skip_check_:!0,value:y}},[[`&-placement-bottom ${e}-arrow`,`&-placement-bottomLeft ${e}-arrow`,`&-placement-bottomRight ${e}-arrow`].join(",")]:{top:0,transform:"translateY(-100%)"},[`&-placement-bottom ${e}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(-100%)"},[`&-placement-bottomLeft ${e}-arrow`]:{left:{_skip_check_:!0,value:y}},[`&-placement-bottomRight ${e}-arrow`]:{right:{_skip_check_:!0,value:y}},[[`&-placement-left ${e}-arrow`,`&-placement-leftTop ${e}-arrow`,`&-placement-leftBottom ${e}-arrow`].join(",")]:{right:{_skip_check_:!0,value:0},transform:"translateX(100%) rotate(90deg)"},[`&-placement-left ${e}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(100%) rotate(90deg)"},[`&-placement-leftTop ${e}-arrow`]:{top:g},[`&-placement-leftBottom ${e}-arrow`]:{bottom:g},[[`&-placement-right ${e}-arrow`,`&-placement-rightTop ${e}-arrow`,`&-placement-rightBottom ${e}-arrow`].join(",")]:{left:{_skip_check_:!0,value:0},transform:"translateX(-100%) rotate(-90deg)"},[`&-placement-right ${e}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(-100%) rotate(-90deg)"},[`&-placement-rightTop ${e}-arrow`]:{top:g},[`&-placement-rightBottom ${e}-arrow`]:{bottom:g},[V(["&-placement-topLeft","&-placement-top","&-placement-topRight"],v)]:{paddingBottom:b},[V(["&-placement-bottomLeft","&-placement-bottom","&-placement-bottomRight"],v)]:{paddingTop:b},[V(["&-placement-leftTop","&-placement-left","&-placement-leftBottom"],v)]:{paddingRight:{_skip_check_:!0,value:b}},[V(["&-placement-rightTop","&-placement-right","&-placement-rightBottom"],v)]:{paddingLeft:{_skip_check_:!0,value:b}}}}}const Lt=t=>{const{componentCls:o,tooltipMaxWidth:e,tooltipColor:n,tooltipBg:a,tooltipBorderRadius:l,zIndexPopup:s,controlHeight:c,boxShadowSecondary:d,paddingSM:v,paddingXS:f,tooltipRadiusOuter:u}=t;return[{[o]:i(i(i(i({},ft(t)),{position:"absolute",zIndex:s,display:"block","&":[{width:"max-content"},{width:"intrinsic"}],maxWidth:e,visibility:"visible","&-hidden":{display:"none"},"--antd-arrow-background-color":a,[`${o}-inner`]:{minWidth:c,minHeight:c,padding:`${v/2}px ${f}px`,color:n,textAlign:"start",textDecoration:"none",wordWrap:"break-word",backgroundColor:a,borderRadius:l,boxShadow:d},[["&-placement-left","&-placement-leftTop","&-placement-leftBottom","&-placement-right","&-placement-rightTop","&-placement-rightBottom"].join(",")]:{[`${o}-inner`]:{borderRadius:Math.min(l,et)}},[`${o}-content`]:{position:"relative"}}),_t(t,(g,y)=>{let{darkColor:b}=y;return{[`&${o}-${g}`]:{[`${o}-inner`]:{backgroundColor:b},[`${o}-arrow`]:{"--antd-arrow-background-color":b}}}})),{"&-rtl":{direction:"rtl"}})},Et(K(t,{borderRadiusOuter:u}),{colorBg:"var(--antd-arrow-background-color)",showArrowCls:"",contentRadius:l,limitVerticalRadius:!0}),{[`${o}-pure`]:{position:"relative",maxWidth:"none"}}]},Mt=(t,o)=>pt("Tooltip",n=>{if((o==null?void 0:o.value)===!1)return[];const{borderRadius:a,colorTextLightSolid:l,colorBgDefault:s,borderRadiusOuter:c}=n,d=K(n,{tooltipMaxWidth:250,tooltipColor:l,tooltipBorderRadius:a,tooltipBg:s,tooltipRadiusOuter:c>4?4:c});return[Lt(d),ct(n,"zoom-big-fast")]},n=>{let{zIndexPopupBase:a,colorBgSpotlight:l}=n;return{zIndexPopup:a+70,colorBgDefault:l}})(t),Xt=(t,o)=>{const e={},n=i({},t);return o.forEach(a=>{t&&a in t&&(e[a]=t[a],delete n[a])}),{picked:e,omitted:n}},Ht=()=>i(i({},At()),{title:$.any}),qt=()=>({trigger:"hover",align:{},placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1,arrowPointAtCenter:!1,autoAdjustOverflow:!0}),zt=F({compatConfig:{MODE:3},name:"ATooltip",inheritAttrs:!1,props:ut(Ht(),{trigger:"hover",align:{},placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1,arrowPointAtCenter:!1,autoAdjustOverflow:!0}),slots:Object,setup(t,o){let{slots:e,emit:n,attrs:a,expose:l}=o;const{prefixCls:s,getPopupContainer:c,direction:d,rootPrefixCls:v}=dt("tooltip",t),f=D(()=>{var r;return(r=t.open)!==null&&r!==void 0?r:t.visible}),u=q(Ot([t.open,t.visible])),g=q();let y;gt(f,r=>{U.cancel(y),y=U(()=>{u.value=!!r})});const b=()=>{var r;const p=(r=t.title)!==null&&r!==void 0?r:e.title;return!p&&p!==0},N=r=>{const p=b();f.value===void 0&&(u.value=p?!1:r),p||(n("update:visible",r),n("visibleChange",r),n("update:open",r),n("openChange",r))};l({getPopupDomNode:()=>g.value.getPopupDomNode(),open:u,forcePopupAlign:()=>{var r;return(r=g.value)===null||r===void 0?void 0:r.forcePopupAlign()}});const A=D(()=>{const{builtinPlacements:r,arrowPointAtCenter:p,autoAdjustOverflow:P}=t;return r||Bt({arrowPointAtCenter:p,autoAdjustOverflow:P})}),_=r=>r||r==="",S=r=>{const p=r.type;if(typeof p=="object"&&r.props&&((p.__ANT_BUTTON===!0||p==="button")&&_(r.props.disabled)||p.__ANT_SWITCH===!0&&(_(r.props.disabled)||_(r.props.loading))||p.__ANT_RADIO===!0&&_(r.props.disabled))){const{picked:P,omitted:w}=Xt(yt(r),["position","left","right","top","bottom","float","display","zIndex"]),x=i(i({display:"inline-block"},P),{cursor:"not-allowed",lineHeight:1,width:r.props&&r.props.block?"100%":void 0}),h=i(i({},w),{pointerEvents:"none"}),m=G(r,{style:h},!0);return T("span",{style:x,class:`${s.value}-disabled-compatible-wrapper`},[m])}return r},L=()=>{var r,p;return(r=t.title)!==null&&r!==void 0?r:(p=e.title)===null||p===void 0?void 0:p.call(e)},W=(r,p)=>{const P=A.value,w=Object.keys(P).find(x=>{var h,m;return P[x].points[0]===((h=p.points)===null||h===void 0?void 0:h[0])&&P[x].points[1]===((m=p.points)===null||m===void 0?void 0:m[1])});if(w){const x=r.getBoundingClientRect(),h={top:"50%",left:"50%"};w.indexOf("top")>=0||w.indexOf("Bottom")>=0?h.top=`${x.height-p.offset[1]}px`:(w.indexOf("Top")>=0||w.indexOf("bottom")>=0)&&(h.top=`${-p.offset[1]}px`),w.indexOf("left")>=0||w.indexOf("Right")>=0?h.left=`${x.width-p.offset[0]}px`:(w.indexOf("right")>=0||w.indexOf("Left")>=0)&&(h.left=`${-p.offset[0]}px`),r.style.transformOrigin=`${h.left} ${h.top}`}},B=D(()=>Rt(s.value,t.color)),M=D(()=>a["data-popover-inject"]),[j,X]=Mt(s,D(()=>!M.value));return()=>{var r,p;const{openClassName:P,overlayClassName:w,overlayStyle:x,overlayInnerStyle:h}=t;let m=(p=mt((r=e.default)===null||r===void 0?void 0:r.call(e)))!==null&&p!==void 0?p:null;m=m.length===1?m[0]:m;let Y=u.value;if(f.value===void 0&&b()&&(Y=!1),!m)return null;const k=S(vt(m)&&!bt(m)?m:T("span",null,[m])),ot=z({[P||`${s.value}-open`]:!0,[k.props&&k.props.class]:k.props&&k.props.class}),nt=z(w,{[`${s.value}-rtl`]:d.value==="rtl"},B.value.className,X.value),rt=i(i({},B.value.overlayStyle),h),at=B.value.arrowStyle,lt=i(i(i({},a),t),{prefixCls:s.value,getPopupContainer:c==null?void 0:c.value,builtinPlacements:A.value,visible:Y,ref:g,overlayClassName:nt,overlayStyle:i(i({},at),x),overlayInnerStyle:rt,onVisibleChange:N,onPopupAlign:W,transitionName:ht(v.value,"zoom-big-fast",t.transitionName)});return j(T(Tt,lt,{default:()=>[u.value?G(k,{class:ot}):k],arrowContent:()=>T("span",{class:`${s.value}-arrow-content`},null),overlay:L}))}}}),Ut=wt(zt);export{E as P,Ut as T,At as a,_t as b,Yt as c,Vt as d,Bt as e,Et as g,jt as i,$t as r,qt as t};
