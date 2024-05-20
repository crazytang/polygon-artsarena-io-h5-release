import{d as C,m as M,r as k,by as P,b as o,q as D,w,f as c,z as j,c as l,e as t,F as y,k as b,h as i,B as E,bF as L,ag as V,P as W,p as q,j as z,l as A}from"./index-7f382843.js";import{U as Y}from"./user-service-8bd2bb8e.js";import{g as G,b as H}from"./axios-246d19c8.js";import{C as J}from"./contract-data-service-7ec027a2.js";import{C as F}from"./index-a22e6514.js";const f=_=>(q("data-v-2d19dd33"),_=_(),z(),_),K={class:"selectNFTModal"},O={class:"flex selectNFTBox"},Q={class:"flex flex-col w-1/2 p-4 space-y-2"},R=f(()=>t("p",{class:"flex-shrink-0 text-lg text-white"},"從BurnYou賬戶選擇",-1)),X={class:"flex-grow overflow-hidden"},Z={class:"grid max-h-full grid-cols-4 gap-2 overflow-y-auto scrollBar-y"},$=f(()=>t("div",{style:{background:"#333",width:"1px",height:"100%"}},null,-1)),ee={class:"flex flex-col w-1/2 p-4 space-y-2"},se=f(()=>t("p",{class:"flex-shrink-0 text-lg text-white"},"從錢包選擇",-1)),te={class:"relative flex-grow"},ae={key:0,class:"grid max-h-full grid-cols-4 gap-2 overflow-y-auto scrollBar-y"},oe={key:1,class:"text-white w-full h-full flex justify-center items-center"},ce={class:"flex justify-center w-full pt-4"},le=f(()=>t("span",{class:"text-sm font-bold text-black"},"确定",-1)),ne=C({__name:"SelectNFTModal",emits:["success"],setup(_,{expose:N,emit:T}){const B=T,u=M({open:!1});let n=k(),p=k();const h=G(),x=H();let I;const v=k(!1);let m=!1;async function S(){if(!(!h||!h.address)){if(x===null)throw new Error("chain_id is null");if(!m){v.value=!0;try{console.log("user_account.address",h.address);const a=new Y(h.address);n.value=await a.getUserNFTInWallet(x),console.log(n.value);debugger;n.value.map(e=>(e.checked=!1,e)),I=(await J.getL1NFTBattlePoolData()).contract_address,p.value=await a.getUserNFTInPool(),p.value.map(e=>(e.checked=!1,e)),m=!0}catch(a){console.error(a)}v.value=!1}}}const U=async()=>{var r,e;let a=(r=p.value)==null?void 0:r.find(d=>d.checked);a||(a=(e=n.value)==null?void 0:e.find(d=>d.checked)),a?(u.open=!1,B("success",a)):V.error("请选择需要质押的NFT")};return N({openModal:()=>{u.open=!0,S()}}),(a,r)=>{const e=W,d=P("loading");return o(),D(c(L),{open:u.open,"onUpdate:open":r[0]||(r[0]=s=>u.open=s),closable:!1,footer:null,wrapClassName:"custom-modal",style:{width:"800px",height:"500px"},maskStyle:{animation:"none"}},{default:w(()=>[j((o(),l("div",K,[t("div",O,[t("section",Q,[R,t("div",X,[t("div",Z,[(o(!0),l(y,null,b(c(p),s=>(o(),l("div",{key:s,class:"relative"},[i(e,{src:s.cacheImageUrl},null,8,["src"]),i(c(F),{checked:s.checked,"onUpdate:checked":g=>s.checked=g,class:"absolute top-0 right-1"},null,8,["checked","onUpdate:checked"])]))),128))])])]),$,t("section",ee,[se,t("div",te,[c(n)?(o(),l("div",ae,[(o(!0),l(y,null,b(c(n),s=>(o(),l("div",{key:s,class:"relative"},[i(e,{src:s.cacheImageUrl},null,8,["src"]),i(c(F),{checked:s.checked,"onUpdate:checked":g=>s.checked=g,class:"absolute top-0 right-1"},null,8,["checked","onUpdate:checked"])]))),128))])):(o(),l("div",oe," 你的錢包目前沒有NFT "))])])]),t("div",ce,[i(c(E),{class:"submit-btn",onClick:U},{default:w(()=>[le]),_:1})])])),[[d,v.value]])]),_:1},8,["open"])}}});const pe=A(ne,[["__scopeId","data-v-2d19dd33"]]);export{pe as S};
