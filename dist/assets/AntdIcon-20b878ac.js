import{cx as w,bZ as H,n as M,h as T}from"./index-358dafb1.js";var _=[],y=[],R="insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).";function V(){var n=document.createElement("style");return n.setAttribute("type","text/css"),n}function q(n,r){if(r=r||{},n===void 0)throw new Error(R);var e=r.prepend===!0?"prepend":"append",o=r.container!==void 0?r.container:document.querySelector("head"),t=_.indexOf(o);t===-1&&(t=_.push(o)-1,y[t]={});var a;return y[t]!==void 0&&y[t][e]!==void 0?a=y[t][e]:(a=y[t][e]=V(),e==="prepend"?o.insertBefore(a,o.childNodes[0]):o.appendChild(a)),n.charCodeAt(0)===65279&&(n=n.substr(1,n.length)),a.styleSheet?a.styleSheet.cssText+=n:a.textContent+=n,a}function S(n){for(var r=1;r<arguments.length;r++){var e=arguments[r]!=null?Object(arguments[r]):{},o=Object.keys(e);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(t){F(n,t,e[t])})}return n}function F(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}function j(n){return typeof n=="object"&&typeof n.name=="string"&&typeof n.theme=="string"&&(typeof n.icon=="object"||typeof n.icon=="function")}function b(n,r,e){return e?w(n.tag,S({key:r},e,n.attrs),(n.children||[]).map(function(o,t){return b(o,"".concat(r,"-").concat(n.tag,"-").concat(t))})):w(n.tag,S({key:r},n.attrs),(n.children||[]).map(function(o,t){return b(o,"".concat(r,"-").concat(n.tag,"-").concat(t))}))}function $(n){return H(n)[0]}function k(n){return n?Array.isArray(n)?n:[n]:[]}var Y=`
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,A=!1,Z=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Y;M(function(){A||(typeof window<"u"&&window.document&&window.document.documentElement&&q(r,{prepend:!0}),A=!0)})},G=["icon","primaryColor","secondaryColor"];function J(n,r){if(n==null)return{};var e=Q(n,r),o,t;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)o=a[t],!(r.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(e[o]=n[o])}return e}function Q(n,r){if(n==null)return{};var e={},o=Object.keys(n),t,a;for(a=0;a<o.length;a++)t=o[a],!(r.indexOf(t)>=0)&&(e[t]=n[t]);return e}function d(n){for(var r=1;r<arguments.length;r++){var e=arguments[r]!=null?Object(arguments[r]):{},o=Object.keys(e);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(t){X(n,t,e[t])})}return n}function X(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}var p={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function K(n){var r=n.primaryColor,e=n.secondaryColor;p.primaryColor=r,p.secondaryColor=e||$(r),p.calculated=!!e}function nn(){return d({},p)}var s=function(r,e){var o=d({},r,e.attrs),t=o.icon,a=o.primaryColor,i=o.secondaryColor,c=J(o,G),l=p;if(a&&(l={primaryColor:a,secondaryColor:i||$(a)}),Z(),j(t),!j(t))return null;var u=t;return u&&typeof u.icon=="function"&&(u=d({},u,{icon:u.icon(l.primaryColor,l.secondaryColor)})),b(u.icon,"svg-".concat(u.name),d({},c,{"data-icon":u.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"}))};s.props={icon:Object,primaryColor:String,secondaryColor:String,focusable:String};s.inheritAttrs=!1;s.displayName="IconBase";s.getTwoToneColors=nn;s.setTwoToneColors=K;const v=s;function en(n,r){return an(n)||on(n,r)||tn(n,r)||rn()}function rn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tn(n,r){if(n){if(typeof n=="string")return x(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return x(n,r)}}function x(n,r){(r==null||r>n.length)&&(r=n.length);for(var e=0,o=new Array(r);e<r;e++)o[e]=n[e];return o}function on(n,r){var e=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var o=[],t=!0,a=!1,i,c;try{for(e=e.call(n);!(t=(i=e.next()).done)&&(o.push(i.value),!(r&&o.length===r));t=!0);}catch(l){a=!0,c=l}finally{try{!t&&e.return!=null&&e.return()}finally{if(a)throw c}}return o}}function an(n){if(Array.isArray(n))return n}function E(n){var r=k(n),e=en(r,2),o=e[0],t=e[1];return v.setTwoToneColors({primaryColor:o,secondaryColor:t})}function ln(){var n=v.getTwoToneColors();return n.calculated?[n.primaryColor,n.secondaryColor]:n.primaryColor}var cn=["class","icon","spin","rotate","tabindex","twoToneColor","onClick"];function un(n,r){return pn(n)||yn(n,r)||fn(n,r)||sn()}function sn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fn(n,r){if(n){if(typeof n=="string")return I(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return I(n,r)}}function I(n,r){(r==null||r>n.length)&&(r=n.length);for(var e=0,o=new Array(r);e<r;e++)o[e]=n[e];return o}function yn(n,r){var e=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var o=[],t=!0,a=!1,i,c;try{for(e=e.call(n);!(t=(i=e.next()).done)&&(o.push(i.value),!(r&&o.length===r));t=!0);}catch(l){a=!0,c=l}finally{try{!t&&e.return!=null&&e.return()}finally{if(a)throw c}}return o}}function pn(n){if(Array.isArray(n))return n}function P(n){for(var r=1;r<arguments.length;r++){var e=arguments[r]!=null?Object(arguments[r]):{},o=Object.keys(e);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(t){g(n,t,e[t])})}return n}function g(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}function dn(n,r){if(n==null)return{};var e=mn(n,r),o,t;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)o=a[t],!(r.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(e[o]=n[o])}return e}function mn(n,r){if(n==null)return{};var e={},o=Object.keys(n),t,a;for(a=0;a<o.length;a++)t=o[a],!(r.indexOf(t)>=0)&&(e[t]=n[t]);return e}E("#1890ff");var f=function(r,e){var o,t=P({},r,e.attrs),a=t.class,i=t.icon,c=t.spin,l=t.rotate,u=t.tabindex,z=t.twoToneColor,C=t.onClick,h=dn(t,cn),B=(o={anticon:!0},g(o,"anticon-".concat(i.name),!!i.name),g(o,a,a),o),W=c===""||c||i.name==="loading"?"anticon-spin":"",m=u;m===void 0&&C&&(m=-1,h.tabindex=m);var L=l?{msTransform:"rotate(".concat(l,"deg)"),transform:"rotate(".concat(l,"deg)")}:void 0,N=k(z),O=un(N,2),D=O[0],U=O[1];return T("span",P({role:"img","aria-label":i.name},h,{onClick:C,class:B}),[T(v,{class:W,icon:i,primaryColor:D,secondaryColor:U,style:L},null)])};f.props={spin:Boolean,rotate:Number,icon:Object,twoToneColor:String};f.displayName="AntdIcon";f.inheritAttrs=!1;f.getTwoToneColor=ln;f.setTwoToneColor=E;const gn=f;export{gn as A};
