import{_ as t}from"./index-fb5ecef5.js";const n=["blue","purple","cyan","green","magenta","pink","red","orange","yellow","volcano","geekblue","lime","gold"];function C(e,s){return n.reduce((o,r)=>{const u=e[`${r}-1`],l=e[`${r}-3`],i=e[`${r}-6`],a=e[`${r}-7`];return t(t({},o),s(r,{lightColor:u,lightBorderColor:l,darkColor:i,textColor:a}))},{})}const c=n.map(e=>`${e}-inverse`),g=["success","processing","error","default","warning"];function m(e){return(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0)?[...c,...n].includes(e):n.includes(e)}function p(e){return g.includes(e)}export{n as P,p as a,C as g,m as i};
