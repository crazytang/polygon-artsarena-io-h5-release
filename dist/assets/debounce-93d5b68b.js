import{c7 as C,c8 as M,c9 as I,ca as N}from"./index-1e3b5e9c.js";var $="[object Symbol]";function j(n){return typeof n=="symbol"||C(n)&&M(n)==$}var B=/\s/;function R(n){for(var t=n.length;t--&&B.test(n.charAt(t)););return t}var F=/^\s+/;function _(n){return n&&n.slice(0,R(n)+1).replace(F,"")}var k=0/0,D=/^[-+]0x[0-9a-f]+$/i,G=/^0b[01]+$/i,H=/^0o[0-7]+$/i,P=parseInt;function S(n){if(typeof n=="number")return n;if(j(n))return k;if(I(n)){var t=typeof n.valueOf=="function"?n.valueOf():n;n=I(t)?t+"":t}if(typeof n!="string")return n===0?n:+n;n=_(n);var i=G.test(n);return i||H.test(n)?P(n.slice(2),i?2:8):D.test(n)?k:+n}var U=function(){return N.Date.now()};const y=U;var X="Expected a function",q=Math.max,z=Math.min;function K(n,t,i){var s,u,l,c,r,f,o=0,h=!1,d=!1,T=!0;if(typeof n!="function")throw new TypeError(X);t=S(t)||0,I(i)&&(h=!!i.leading,d="maxWait"in i,l=d?q(S(i.maxWait)||0,t):l,T="trailing"in i?!!i.trailing:T);function b(e){var a=s,m=u;return s=u=void 0,o=e,c=n.apply(m,a),c}function O(e){return o=e,r=setTimeout(g,t),h?b(e):c}function W(e){var a=e-f,m=e-o,E=t-a;return d?z(E,l-m):E}function p(e){var a=e-f,m=e-o;return f===void 0||a>=t||a<0||d&&m>=l}function g(){var e=y();if(p(e))return v(e);r=setTimeout(g,W(e))}function v(e){return r=void 0,T&&s?b(e):(s=u=void 0,c)}function L(){r!==void 0&&clearTimeout(r),o=0,s=f=u=r=void 0}function A(){return r===void 0?c:v(y())}function x(){var e=y(),a=p(e);if(s=arguments,u=this,f=e,a){if(r===void 0)return O(f);if(d)return clearTimeout(r),r=setTimeout(g,t),b(f)}return r===void 0&&(r=setTimeout(g,t)),c}return x.cancel=L,x.flush=A,x}export{K as d,j as i,S as t};