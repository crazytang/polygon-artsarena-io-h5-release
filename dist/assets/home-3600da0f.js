var Tt=Object.defineProperty;var Nt=(s,e,n)=>e in s?Tt(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n;var _=(s,e,n)=>(Nt(s,typeof e!="symbol"?e+"":e,n),n);import{t as Dt,l as kt}from"./logo-214c57b5.js";import{O as ct,N as T,D as Q,ae as X,Q as lt,S as Pt,ar as Kt,_ as G,a2 as Vt,Y as Mt,d as w,aq as $t,r as k,M as Et,a6 as bt,L as Ft,G as W,h as c,H as Z,aC as qt,aD as Ot,aE as Ut,ad as ht,aF as Rt,aG as Gt,J as Jt,ay as Qt,an as zt,z as Lt,aH as jt,A as Yt,b as f,c as A,e as t,f as o,x as dt,v as Xt,p as I,j as B,l as x,u as S,t as i,ag as R,o as Wt,w as b,F as Zt,k as te,q as ee,y as pt,s as se,i as oe}from"./index-eca88661.js";import{A as ne,e as Y}from"./axios-c3a0723c.js";import{N as J}from"./nft-data-b6ae7a0a.js";import{M as ie}from"./match-data-01707e11.js";import{C as ae}from"./challenge-data-66d06939.js";import{C as ce,R as le}from"./index-59b20325.js";import{f as de,T as mt}from"./index-686323c4.js";import{g as re,c as _e}from"./collapseMotion-d482c32d.js";import"./responsiveObserve-e8f67f54.js";import"./colors-efd2f7d5.js";const ve=()=>({prefixCls:String,activeKey:ct([Array,Number,String]),defaultActiveKey:ct([Array,Number,String]),accordion:T(),destroyInactivePanel:T(),bordered:T(),expandIcon:Q(),openAnimation:X.object,expandIconPosition:lt(),collapsible:lt(),ghost:T(),onChange:Q(),"onUpdate:activeKey":Q()}),xt=()=>({openAnimation:X.object,prefixCls:String,header:X.any,headerClass:String,showArrow:T(),isActive:T(),destroyInactivePanel:T(),disabled:T(),accordion:T(),forceRender:T(),expandIcon:Q(),extra:X.any,panelKey:ct(),collapsible:lt(),role:String,onItemClick:Q()}),ue=s=>{const{componentCls:e,collapseContentBg:n,padding:a,collapseContentPaddingHorizontal:l,collapseHeaderBg:v,collapseHeaderPadding:d,collapsePanelBorderRadius:$,lineWidth:u,lineType:p,colorBorder:E,colorText:F,colorTextHeading:N,colorTextDisabled:K,fontSize:q,lineHeight:V,marginSM:O,paddingSM:r,motionDurationSlow:h,fontSizeIcon:m}=s,g=`${u}px ${p} ${E}`;return{[e]:G(G({},Mt(s)),{backgroundColor:v,border:g,borderBottom:0,borderRadius:`${$}px`,"&-rtl":{direction:"rtl"},[`& > ${e}-item`]:{borderBottom:g,"&:last-child":{[`
            &,
            & > ${e}-header`]:{borderRadius:`0 0 ${$}px ${$}px`}},[`> ${e}-header`]:{position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:d,color:N,lineHeight:V,cursor:"pointer",transition:`all ${h}, visibility 0s`,[`> ${e}-header-text`]:{flex:"auto"},"&:focus":{outline:"none"},[`${e}-expand-icon`]:{height:q*V,display:"flex",alignItems:"center",paddingInlineEnd:O},[`${e}-arrow`]:G(G({},Vt()),{fontSize:m,svg:{transition:`transform ${h}`}}),[`${e}-header-text`]:{marginInlineEnd:"auto"}},[`${e}-header-collapsible-only`]:{cursor:"default",[`${e}-header-text`]:{flex:"none",cursor:"pointer"},[`${e}-expand-icon`]:{cursor:"pointer"}},[`${e}-icon-collapsible-only`]:{cursor:"default",[`${e}-expand-icon`]:{cursor:"pointer"}},[`&${e}-no-arrow`]:{[`> ${e}-header`]:{paddingInlineStart:r}}},[`${e}-content`]:{color:F,backgroundColor:n,borderTop:g,[`& > ${e}-content-box`]:{padding:`${a}px ${l}px`},"&-hidden":{display:"none"}},[`${e}-item:last-child`]:{[`> ${e}-content`]:{borderRadius:`0 0 ${$}px ${$}px`}},[`& ${e}-item-disabled > ${e}-header`]:{"\n          &,\n          & > .arrow\n        ":{color:K,cursor:"not-allowed"}},[`&${e}-icon-position-end`]:{[`& > ${e}-item`]:{[`> ${e}-header`]:{[`${e}-expand-icon`]:{order:1,paddingInlineEnd:0,paddingInlineStart:O}}}}})}},he=s=>{const{componentCls:e}=s,n=`> ${e}-item > ${e}-header ${e}-arrow svg`;return{[`${e}-rtl`]:{[n]:{transform:"rotate(180deg)"}}}},pe=s=>{const{componentCls:e,collapseHeaderBg:n,paddingXXS:a,colorBorder:l}=s;return{[`${e}-borderless`]:{backgroundColor:n,border:0,[`> ${e}-item`]:{borderBottom:`1px solid ${l}`},[`
        > ${e}-item:last-child,
        > ${e}-item:last-child ${e}-header
      `]:{borderRadius:0},[`> ${e}-item:last-child`]:{borderBottom:0},[`> ${e}-item > ${e}-content`]:{backgroundColor:"transparent",borderTop:0},[`> ${e}-item > ${e}-content > ${e}-content-box`]:{paddingTop:a}}}},me=s=>{const{componentCls:e,paddingSM:n}=s;return{[`${e}-ghost`]:{backgroundColor:"transparent",border:0,[`> ${e}-item`]:{borderBottom:0,[`> ${e}-content`]:{backgroundColor:"transparent",border:0,[`> ${e}-content-box`]:{paddingBlock:n}}}}}},fe=Pt("Collapse",s=>{const e=Kt(s,{collapseContentBg:s.colorBgContainer,collapseHeaderBg:s.colorFillAlter,collapseHeaderPadding:`${s.paddingSM}px ${s.padding}px`,collapsePanelBorderRadius:s.borderRadiusLG,collapseContentPaddingHorizontal:16});return[ue(e),pe(e),me(e),he(e),re(e)]});function ft(s){let e=s;if(!Array.isArray(e)){const n=typeof e;e=n==="number"||n==="string"?[e]:[]}return e.map(n=>String(n))}const D=w({compatConfig:{MODE:3},name:"ACollapse",inheritAttrs:!1,props:$t(ve(),{accordion:!1,destroyInactivePanel:!1,bordered:!0,expandIconPosition:"start"}),slots:Object,setup(s,e){let{attrs:n,slots:a,emit:l}=e;const v=k(ft(de([s.activeKey,s.defaultActiveKey])));Et(()=>s.activeKey,()=>{v.value=ft(s.activeKey)},{deep:!0});const{prefixCls:d,direction:$,rootPrefixCls:u}=bt("collapse",s),[p,E]=fe(d),F=Ft(()=>{const{expandIconPosition:r}=s;return r!==void 0?r:$.value==="rtl"?"end":"start"}),N=r=>{const{expandIcon:h=a.expandIcon}=s,m=h?h(r):c(Rt,{rotate:r.isActive?90:void 0},null);return c("div",{class:[`${d.value}-expand-icon`,E.value],onClick:()=>["header","icon"].includes(s.collapsible)&&q(r.panelKey)},[Gt(Array.isArray(h)?m[0]:m)?ht(m,{class:`${d.value}-arrow`},!1):m])},K=r=>{s.activeKey===void 0&&(v.value=r);const h=s.accordion?r[0]:r;l("update:activeKey",h),l("change",h)},q=r=>{let h=v.value;if(s.accordion)h=h[0]===r?[]:[r];else{h=[...h];const m=h.indexOf(r);m>-1?h.splice(m,1):h.push(r)}K(h)},V=(r,h)=>{var m,g,U;if(Ut(r))return;const y=v.value,{accordion:z,destroyInactivePanel:et,collapsible:L,openAnimation:st}=s,ot=st||_e(`${u.value}-motion-collapse`),j=String((m=r.key)!==null&&m!==void 0?m:h),{header:It=(U=(g=r.children)===null||g===void 0?void 0:g.header)===null||U===void 0?void 0:U.call(g),headerClass:Bt,collapsible:nt,disabled:ut}=r.props||{};let it=!1;z?it=y[0]===j:it=y.indexOf(j)>-1;let at=nt??L;(ut||ut==="")&&(at="disabled");const St={key:j,panelKey:j,header:It,headerClass:Bt,isActive:it,prefixCls:d.value,destroyInactivePanel:et,openAnimation:ot,accordion:z,onItemClick:at==="disabled"?null:q,expandIcon:N,collapsible:at};return ht(r,St)},O=()=>{var r;return Ot((r=a.default)===null||r===void 0?void 0:r.call(a)).map(V)};return()=>{const{accordion:r,bordered:h,ghost:m}=s,g=W(d.value,{[`${d.value}-borderless`]:!h,[`${d.value}-icon-position-${F.value}`]:!0,[`${d.value}-rtl`]:$.value==="rtl",[`${d.value}-ghost`]:!!m,[n.class]:!!n.class},E.value);return p(c("div",Z(Z({class:g},qt(n)),{},{style:n.style,role:r?"tablist":null}),[O()]))}}}),we=w({compatConfig:{MODE:3},name:"PanelContent",props:xt(),setup(s,e){let{slots:n}=e;const a=Jt(!1);return Qt(()=>{(s.isActive||s.forceRender)&&(a.value=!0)}),()=>{var l;if(!a.value)return null;const{prefixCls:v,isActive:d,role:$}=s;return c("div",{class:W(`${v}-content`,{[`${v}-content-active`]:d,[`${v}-content-inactive`]:!d}),role:$},[c("div",{class:`${v}-content-box`},[(l=n.default)===null||l===void 0?void 0:l.call(n)])])}}}),P=w({compatConfig:{MODE:3},name:"ACollapsePanel",inheritAttrs:!1,props:$t(xt(),{showArrow:!0,isActive:!1,onItemClick(){},headerClass:"",forceRender:!1}),slots:Object,setup(s,e){let{slots:n,emit:a,attrs:l}=e;zt(s.disabled===void 0,"Collapse.Panel",'`disabled` is deprecated. Please use `collapsible="disabled"` instead.');const{prefixCls:v}=bt("collapse",s),d=()=>{a("itemClick",s.panelKey)},$=u=>{(u.key==="Enter"||u.keyCode===13||u.which===13)&&d()};return()=>{var u,p;const{header:E=(u=n.header)===null||u===void 0?void 0:u.call(n),headerClass:F,isActive:N,showArrow:K,destroyInactivePanel:q,accordion:V,forceRender:O,openAnimation:r,expandIcon:h=n.expandIcon,extra:m=(p=n.extra)===null||p===void 0?void 0:p.call(n),collapsible:g}=s,U=g==="disabled",y=v.value,z=W(`${y}-header`,{[F]:F,[`${y}-header-collapsible-only`]:g==="header",[`${y}-icon-collapsible-only`]:g==="icon"}),et=W({[`${y}-item`]:!0,[`${y}-item-active`]:N,[`${y}-item-disabled`]:U,[`${y}-no-arrow`]:!K,[`${l.class}`]:!!l.class});let L=c("i",{class:"arrow"},null);K&&typeof h=="function"&&(L=h(s));const st=Lt(c(we,{prefixCls:y,isActive:N,forceRender:O,role:V?"tabpanel":null},{default:n.default}),[[Yt,N]]),ot=G({appear:!1,css:!1},r);return c("div",Z(Z({},l),{},{class:et}),[c("div",{class:z,onClick:()=>!["header","icon"].includes(g)&&d(),role:V?"tab":"button",tabindex:U?-1:0,"aria-expanded":N,onKeypress:$},[K&&L,c("span",{onClick:()=>g==="header"&&d(),class:`${y}-header-text`},[E]),m&&c("div",{class:`${y}-extra`},[m])]),c(jt,ot,{default:()=>[!q||N?st:null]})])}}});D.Panel=P;D.install=function(s){return s.component(D.name,D),s.component(P.name,P),s};const ge="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAeCAYAAADU8sWcAAAAAXNSR0IArs4c6QAAAhlJREFUSEvtlk2ITmEUx3//jEw+w8ZMwkJSvvJRNrPQLIQ0smBhwQ6lWIiY2SprSpINi9mMpnws2M0CSVmQUhIhsaHQ+BpxdOqoO0/3vvfOvYt38z6re+/5+D3nf869zxVtXGojmw68Lep3ZG8pu5m5QuuAPmBc0pU0wMzOAA+BMUnjVfrYUnYzmwacAA4AKyPhD+AqsACYCXwCpgP7wv4bGAVOS3rdahNl8AHgRpUqcnyeAeslTRTFF8LNbDbwFphfE+5heyVdqwPfH/I2YPMV6JX0LS9JbuVm1gW8BJY0IUfsdkl3pgJfCzxJAgzwPs4DFuck80lfE0OYNd+UtGsq8IPApSTgrKTBUOUBsClj75N038wWAi+SOfkLzJH0Pd1AkewjwJ6M84SkGf/vzWwj8Chj75L0x+/N7DawLQGtkuSqTVpF8OfAioynS75c0qsAHAXOZezdkn6F7SmwOuH0SxqrCv8CzE2c/bU7Bri0l2HScXwLOA9sAU4B/nHKrgFJ7lOp8o8ByZuTOs92S7peFf4e6Mn2HPgALC0he3veAMsSvx2SfBYqVb4VuOB9Du+fwEXgHrA5DpleoBv4DPiM3A3fQ8CGuPbNeJ4hSf7BKYfH4Hji48CRUMGDF0nygyV3mZlv8HAYvdJBSY+L/Et/JuK93gnMkjTcSvY4ek8Cw5LelQ1HKbwsQRN7B95EvdqxHdlrS9ck8B+KKpsftDqmmQAAAABJRU5ErkJggg==",yt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAABEBJREFUSEvtlW1IW2cUx70xJupUmhnyskQSjODUJAbSJPcmywtJBBtfEHRK2JgUGVImfinb+mGwDgZ7gdGyNxgodkwGc66h1RJRkxsNN9nivdmNmETR4ZJrpvkwFKuL9hoz7oeBK9Zcu7IO1ufrOfx/z/k/55wHKHhKB3hK3IJn4H/N+f+W1QiCfKlQKF4HgL/fK51OL8bjcWNbW9sfp1kzNjZWolAo7onFYiNJkgXhcPia3W7/5LTcUyuemJgolcvlP0qlUkUmkzlOJBI7FRUVxQKBoBTH8Vtqtfryw2K5XI6B4/ioUql05nI5Cvq1RqO5DABAjjaYSpycnKzTarU/lZeXPxcOh3sTiQRqsVhCHA6nLBAI9NlstpGTggsLCx+pVKo3CwsLgVgsNp1MJtsdDsfho5rmzDf2+XxOjUYzure3lwmFQgYWi/Wi0Wj8NpPJZGAY1nV1dUUpYa/XOwiC4M2SkhJgfX3951gsZmttbd0+q1PzNheGYZ81NjYOJJPJeCQS0fP5/Pd1Ot0bGxsbsampKY1EImnS6/Xj5eXlTIIgNhAEMTqdzl/zjUdeMAzDxVVVVZ7q6mo9iqLf7+/vvyYUCv21tbUXl5aWpoVC4UuVlZWl6XT6PoZhppaWFjwflIrnBVNJ4+Pj1Xq9foHL5XI8Hs/V1dXVuz09PSiPx7tAxXd3dx8gCNLhcDjcdKC0wVTizMxMCwRBd0iSzLrdbguTyRS0t7f/wGazAa/Xe91ms71HF3ouMJXs9/s/MBgM11KpFDE0NKSyWq3vGo3GQYIgVmZnZzV9fX336cJpWf2XGAzDTLFYPCOTySzU+yqVykuxWCxQV1enwzBsXK1Wdz9qbh++0LnAo6Oj9U1NTfM8Hq+SWhIej+f6ysrKrc7OTozL5T4fDAYHTSbT53Sqpg0eHh5+wWq1IlKpVHpwcHCczWaz1LZyu92X2Gx2idVqvX14eHiEoqipubk5lA9OCwzDcJlIJJqtqanRkSSZ8/v97zAYDNJsNn+cTqfTXq/3okQiGQBB8O3Nzc21xcVF7T9eICiKFrFYrLGGhoYOyt5QKPQVBEFXqIoikcgdpVLZtry8PE8QhEMkEt2rr683R6PR23K5/GUAAI4fa2XmcjkARdFPVSrVAIPBKIhGo3eDwWBXf38/SQmOjIxcsNvtC0KhsCYQCNzY2tq6CYJgSCAQ8DAMuwpB0I3HAs/Pz7+l1Wo/ZLFYwNraWgjHcVt3d/feSTGXy6U2m83+oqIi9tzc3CtMJpM0GAzfHR0dZTEMs9jt9uC5fqfp6WknBEHflJWVFRIE8QuCICan0/nbaSI+n+8KCIJfUE23vb39gM/nF1MfRiqVSng8HnVvb+/vtMbJ5XKp1Gq1n8PhFO/s7GxTN+/o6Iid1ak4jo/IZLJXT+ZQPRGPx106na6bFjjfKDyJOK1xehKgZxX//6z+E373yS7IC1dyAAAAAElFTkSuQmCC",Ct=s=>(I("data-v-e9aac61e"),s=s(),B(),s),Ae={class:"footer"},$e=Ct(()=>t("div",{class:"line"},null,-1)),be=["src"],xe=Ct(()=>t("div",{class:"info"},"©2023 artsarena.io All rights reserved.",-1)),ye={class:"link"},Ce=["src"],He=["src"],Ie=w({__name:"footer",setup(s){const{useToken:e}=Dt,{token:n}=e(),a=()=>{window.open({}.VITE_HOME_DISCORD)},l=()=>{window.open("https://twitter.com/artsarenaio")};return(v,d)=>(f(),A("div",Ae,[$e,t("div",{class:"cursor-pointer logo",style:Xt(`color:${o(n).colorPrimary}`)},[t("img",{src:o(kt),alt:""},null,8,be),dt(" ArtsArena.io ")],4),xe,t("div",ye,[t("div",{class:"link_img",onClick:a},[t("img",{src:o(ge),alt:""},null,8,Ce)]),t("div",{class:"link_img",onClick:l},[t("img",{src:o(yt),alt:""},null,8,He)])])]))}});const Be=x(Ie,[["__scopeId","data-v-e9aac61e"]]),Se=s=>(I("data-v-9c06f562"),s=s(),B(),s),Te={class:"launch_app"},Ne=Se(()=>t("div",{class:"background"},null,-1)),De={class:"main"},ke=["innerHTML"],Pe={class:"content"},Ke=w({__name:"index",setup(s){const{t:e}=S(),n=()=>{R.info(e("common.stayTuned"))};return(a,l)=>(f(),A("div",Te,[Ne,t("div",De,[t("div",{class:"title",innerHTML:o(e)("views.newHome.launchApp.t1")},null,8,ke),t("div",Pe,i(o(e)("views.newHome.launchApp.t2")),1),t("div",{class:"launch",onClick:n},i(o(e)("views.newHome.launchApp.t3")),1)])]))}});const Ve=x(Ke,[["__scopeId","data-v-9c06f562"]]),Me={class:"item"},Ee={class:"title"},Fe={class:"num"},qe=w({__name:"item",props:{data:{type:Object,default:()=>{}}},setup(s){const e=s;return(n,a)=>(f(),A("div",Me,[t("div",Ee,i(e.data.title),1),t("div",Fe,i(e.data.val),1)]))}});const Oe=x(qe,[["__scopeId","data-v-b15427bd"]]);class Ue{constructor(e){_(this,"allMatchCount");_(this,"finishedMatchCount");_(this,"totalPromotionBonus");_(this,"totalViewCount");_(this,"totalUserVotesCount");_(this,"totalVotedUsersCount");this.allMatchCount=e.allMatchCount,this.finishedMatchCount=e.finishedMatchCount,this.totalPromotionBonus=e.totalPromotionBonus,this.totalViewCount=e.totalViewCount,this.totalUserVotesCount=e.totalUserVotesCount,this.totalVotedUsersCount=e.totalVotedUsersCount}}class wt{constructor(e){_(this,"id");_(this,"matchId");_(this,"nftAddress");_(this,"tokenId");_(this,"bidderAddress");_(this,"bidPrice");_(this,"refundableAmount");_(this,"refundedAt");_(this,"expectedBonus");_(this,"bidTxHash");_(this,"bonus");_(this,"lostAmount");_(this,"settledAt");_(this,"settleTxHash");_(this,"chainId");this.id=e.id,this.matchId=e.matchId,this.nftAddress=e.nftAddress,this.tokenId=Number(e.tokenId),this.bidderAddress=e.bidderAddress,this.bidPrice=Number(e.bidPrice),this.refundableAmount=Number(e.refundableAmount),this.refundedAt=e.refundedAt,this.expectedBonus=Number(e.expectedBonus),this.bidTxHash=e.bidTxHash,this.bonus=Number(e.bonus),this.lostAmount=Number(e.lostAmount),this.settledAt=e.settledAt,this.settleTxHash=e.settleTxHash,this.chainId=Number(e.chainId)}}class gt extends ie{constructor(n){super(n);_(this,"arenaCreatorNFTBidPrice");_(this,"challengerNFTBidPrice");_(this,"arenaCreatorNFTData");_(this,"challengerNFTData");_(this,"winnerNFTData");_(this,"loserNFTData");_(this,"arenaBidDataList");_(this,"challengerBidDataList");_(this,"challengeDataList");this.arenaCreatorNFTData=new J(n.arenaCreatorNFTData),this.challengerNFTData=new J(n.challengerNFTData),this.winnerNFTData=n.winnerNFTData?new J(n.winnerNFTData):null,this.loserNFTData=n.loserNFTData?new J(n.loserNFTData):null,this.arenaCreatorNFTBidPrice=n.arenaCreatorNFTBidPrice,this.challengerNFTBidPrice=n.challengerNFTBidPrice,this.arenaBidDataList=n.arenaBidDataList.map(a=>new wt(a)),this.challengerBidDataList=n.challengerBidDataList.map(a=>new wt(a)),this.challengeDataList=n.challengeDataList.map(a=>new ae(a))}}class Re extends ne{async getIndexData(){const e=this.gateway+"/stat/index-data",n=await Y.get(e);return this.checkResponse(n),new Ue(n.data.data)}async getTopNMatches(e){const n=this.gateway+"/stat/top-matches/"+e,a=await Y.get(n);return this.checkResponse(a),a.data.data.map(l=>new gt(l))}async getTopNMatchesOrderByKOScore(e){const n=this.gateway+"/stat/top-matches/koscore/"+e,a=await Y.get(n);return this.checkResponse(a),a.data.data.map(v=>new gt(v))}async getTopNNFTsOrderByKOScore(e){const n=this.gateway+"/stat/top-nfts/koscore/"+e,a=await Y.get(n);return this.checkResponse(a),a.data.data.map(v=>new J(v))}}const Ge={class:"about"},Je=["innerHTML"],Qe={class:"content"},ze={class:"item"},Le=w({__name:"index",setup(s){const{t:e}=S(),n=k(),a=new Re,l=k([{title:"Number Of Battles",name:"allMatchCount",val:0},{title:"Promotional Fee(Matic)",name:"totalPromotionBonus",val:0},{title:"Total Vote Count",name:"totalUserVotesCount",val:0},{title:"Burn Opponent's NFT",name:"allMatchCount",val:0},{title:"NFT Exposure",name:"totalViewCount",val:0},{title:"Voting Accounts",name:"totalVotedUsersCount",val:0}]);Wt(async()=>{try{await v()}catch(d){R.error(d.message)}});const v=async()=>{n.value=await a.getIndexData();for(let d=0;d<l.value.length;d++){const $=l.value[d].name,u=n.value[$];l.value[d].val=u}};return(d,$)=>(f(),A("div",Ge,[t("div",{class:"title",innerHTML:o(e)("views.newHome.about.t1")},null,8,Je),t("div",Qe,i(o(e)("views.newHome.about.t2")),1),t("div",ze,[c(o(le),{gutter:[10,15]},{default:b(()=>[(f(!0),A(Zt,null,te(l.value,(u,p)=>(f(),ee(o(ce),{xs:{span:24},md:{span:8},key:p},{default:b(()=>[c(Oe,{data:u},null,8,["data"])]),_:2},1024))),128))]),_:1})])]))}});const je=x(Le,[["__scopeId","data-v-b68f2613"]]),At="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATAAAAAgCAYAAACVWiTcAAAAAXNSR0IArs4c6QAAAZdJREFUeF7t3MGNw0AMA8DdHtJ/henBeaQD6kEYmvsHghVzTG+Au8/zfM7g7977HXz8mG//k/vH/bc8fwABCEDyDQC0DCjAAJbH9xwBLgd4+xsQwAAGsHwDAC8DDjCA5fHVwAAGMD8iDAQRoHKAtr/Cta9fA9PABn46A2sHePt8gAEMYPkGNOByAwYYwPL4OgMDGMCcgQ0EEaBygLa/wrWvXwPTwAZ+OgNrB3j7fIABDGD5BjTgcgMGGMDy+DoDAxjAnIENBBGgcoC2v8K1r18D08AGfjoDawd4+3yAAQxg+QY04HIDzr+6/ycBCMDJPQSAMgAvb3B3cvMBDOAeYB5gE0OmDzCAvfwJBBCANAFp338AA5h/CT4QoB3g7fMBBjCAASzeQBtQgAEMYHF8nYECDCAAAUi8gTYg7fkaGEABGvOhgQEMIAABSLyBNiDt+RoYQAEa86GBAQwgAAFIvIE2IO35GhhAARrzoYEBDCAAAUi8gTYg7fkaGEABGvOhgQEMIAABSLyBNiDt+RoYQAEa86GBtQH7AbfosW2VNNnVAAAAAElFTkSuQmCC",Ye={class:"nft"},Xe=["src"],We={class:"nft_content"},Ze=["src"],ts={key:0,class:"status"},es={class:"nft_info"},ss={class:"w-3/5 name"},os={class:"w-2/5 ko"},ns=["src"],is=w({__name:"index",props:{location:{type:String,default:"left"},info:{type:Object,default:()=>{}},isVote:{type:Boolean,default:!1}},setup(s){const e=s,n=a=>{a.target.clientWidth>=a.target.scrollWidth&&(a.target.style.pointerEvents="none")};return(a,l)=>(f(),A("div",Ye,[t("div",{class:pt(["flex cell_top",(e==null?void 0:e.location)=="left"?"justify-start":"justify-end"])},[t("img",{src:o(At),alt:"",class:"cell_one"},null,8,Xe)],2),t("div",We,[t("img",{src:e.info.img,alt:"",class:"nft_img"},null,8,Ze),e.isVote?(f(),A("div",ts,"WIN")):se("",!0)]),t("div",es,[c(o(mt),{onMouseenter:n},{title:b(()=>[dt(i(e.info.mateName),1)]),default:b(()=>[t("div",ss,i(e.info.mateName),1)]),_:1}),c(o(mt),{onMouseenter:n},{title:b(()=>[dt(i(e.info.ko),1)]),default:b(()=>[t("div",os,"K.O."+i(e.info.ko),1)]),_:1})]),t("div",{class:pt(["flex cell_bottom",e.location=="left"?"justify-end":"justify-start"])},[t("img",{src:o(At),alt:"",class:"cell_two"},null,8,ns)],2)]))}});const rt=x(is,[["__scopeId","data-v-201a4f57"]]),tt=s=>(I("data-v-5713e5b4"),s=s(),B(),s),as={class:"battle"},cs={class:"w-2/5 battle_left"},ls=tt(()=>t("div",{class:"item"},"01/",-1)),ds={class:"content"},rs=tt(()=>t("div",{class:"title"},"Battle",-1)),_s={class:"list"},vs={class:"text"},us={class:"text"},hs={class:"text"},ps={class:"relative w-3/5 battle_right"},ms=tt(()=>t("div",{class:"vs"},"VS",-1)),fs=tt(()=>t("div",{class:"absolute bg_style"},null,-1)),ws=w({__name:"index",setup(s){const{t:e}=S(),n={img:"https://file.burnyou.io/collection/image/0xdf066367432c0ed9baaf0b072534b1523563f325/1981.png",mateName:"Crypto Caiman V1 #1981",ko:"1"},a={img:"https://file.burnyou.io/collection/image/0xe0a4b7a4bfced60ddcb124d5aa7ef34cb8b74639/2478.png",mateName:"Weirdo #2478",ko:"2"},l=()=>{R.info(e("common.stayTuned"))};return(v,d)=>(f(),A("div",as,[t("div",cs,[ls,t("div",ds,[rs,t("ul",_s,[t("li",vs,"· "+i(o(e)("views.newHome.introduction.battle.t1")),1),t("li",us,"· "+i(o(e)("views.newHome.introduction.battle.t2")),1),t("li",hs,"· "+i(o(e)("views.newHome.introduction.battle.t3")),1)]),t("div",{class:"start",onClick:l},i(o(e)("views.newHome.introduction.battle.t4")),1)])]),t("div",ps,[c(rt,{location:"left",info:n}),ms,c(rt,{location:"right",info:a}),fs])]))}});const gs=x(ws,[["__scopeId","data-v-5713e5b4"]]),As="/assets/vote-bd89a39b.png",$s=s=>(I("data-v-9ee6d7b6"),s=s(),B(),s),bs={class:"voted"},xs=["src"],ys={class:"info"},Cs={class:"title"},Hs=$s(()=>t("div",{class:"vote_num"},"+300",-1)),Is=w({__name:"vote",setup(s){const{t:e}=S();return(n,a)=>(f(),A("div",bs,[t("img",{src:o(As),alt:"",class:"img"},null,8,xs),t("div",ys,[t("div",Cs,i(o(e)("views.newHome.introduction.vote.t5")),1),Hs])]))}});const Bs=x(Is,[["__scopeId","data-v-9ee6d7b6"]]),Ht=s=>(I("data-v-5e2d52e6"),s=s(),B(),s),Ss={class:"vote"},Ts={class:"w-2/5 vote_left"},Ns={class:"w-3/5 vote_right"},Ds=Ht(()=>t("div",{class:"item"},"02/",-1)),ks={class:"content"},Ps=Ht(()=>t("div",{class:"title"},"VOTE",-1)),Ks={class:"list"},Vs={class:"text"},Ms={class:"text"},Es={class:"text"},Fs=w({__name:"index",setup(s){const{t:e}=S(),n={img:"https://file.burnyou.io/collection/image/0xdf066367432c0ed9baaf0b072534b1523563f325/1981.png",mateName:"Crypto Caiman V1 #1981",ko:"1"},a=()=>{R.info(e("common.stayTuned"))};return(l,v)=>(f(),A("div",Ss,[t("div",Ts,[c(rt,{location:"left",info:n,isVote:!0}),c(Bs,{class:"voted_com"})]),t("div",Ns,[Ds,t("div",ks,[Ps,t("ul",Ks,[t("li",Vs,"· "+i(o(e)("views.newHome.introduction.vote.t1")),1),t("li",Ms,"· "+i(o(e)("views.newHome.introduction.vote.t2")),1),t("li",Es,"· "+i(o(e)("views.newHome.introduction.vote.t3")),1)]),t("div",{class:"start",onClick:a},i(o(e)("views.newHome.introduction.vote.t4")),1)])])]))}});const qs=x(Fs,[["__scopeId","data-v-5e2d52e6"]]),M=s=>(I("data-v-3f654244"),s=s(),B(),s),Os={class:"promotion"},Us={class:"w-3/5 promotion_left"},Rs=M(()=>t("div",{class:"item"},"03/",-1)),Gs={class:"content"},Js=M(()=>t("div",{class:"title"},"Promotion",-1)),Qs={class:"list"},zs={class:"text"},Ls={class:"text"},js={class:"w-2/5 promotion_right"},Ys=oe('<div class="info" data-v-3f654244><div class="account" data-v-3f654244><div class="address" data-v-3f654244>Vitalik.eth</div><div class="x_account" data-v-3f654244>@VitalikButerin</div></div><div class="follwers" data-v-3f654244>Follwers <span data-v-3f654244>4.9M</span></div></div>',1),Xs=M(()=>t("div",{class:"line"},null,-1)),Ws={class:"other_info"},Zs={class:"item"},to={class:"item_title"},eo=M(()=>t("div",{class:"item_content"},"345.90 Matic",-1)),so={class:"item"},oo={class:"item_title"},no=M(()=>t("div",{class:"item_content"},"10,890",-1)),io={class:"item mt-[30px]"},ao={class:"total_title"},co=M(()=>t("div",{class:"total_content"},"129,025",-1)),lo=["src"],ro=M(()=>t("div",{class:"absolute bg"},null,-1)),_o="https://i.seadn.io/gae/J-P--SFI7yHkjwkxYoJawdop0rmDR8R5XL4K8JI1bBUGBX51FYLBUK5WhT7Qs5RU6iXAyG0kKkXgjC2ZInCKDfBIwajg4Ycd5QAPLg?auto=format&dpr=1&w=1000",vo=w({__name:"index",setup(s){const{t:e}=S(),n=()=>{window.open("https://twitter.com/artsarenaio")},a=()=>{R.info(e("common.stayTuned"))};return(l,v)=>(f(),A("div",Os,[t("div",Us,[Rs,t("div",Gs,[Js,t("ul",Qs,[t("li",zs,"· "+i(o(e)("views.newHome.introduction.promotion.t1")),1),t("li",Ls,"· "+i(o(e)("views.newHome.introduction.promotion.t2")),1)]),t("div",{class:"start",onClick:a},i(o(e)("views.newHome.introduction.promotion.t3")),1)])]),t("div",js,[t("div",{class:"x_info"},[t("img",{class:"avatar",src:_o,alt:""}),Ys]),Xs,t("div",Ws,[t("div",Zs,[t("div",to,i(o(e)("views.newHome.introduction.promotion.t4")),1),eo]),t("div",so,[t("div",oo,i(o(e)("views.newHome.introduction.promotion.t5")),1),no]),t("div",io,[t("div",ao,i(o(e)("views.newHome.introduction.promotion.t6")),1),co])]),t("img",{src:o(yt),alt:"",class:"absolute X",onClick:n},null,8,lo),ro])]))}});const uo=x(vo,[["__scopeId","data-v-3f654244"]]),C=s=>(I("data-v-8d54804b"),s=s(),B(),s),ho={class:"bids"},po={class:"bid_btn"},mo=C(()=>t("div",{class:"vertical"},null,-1)),fo=C(()=>t("div",{class:"add_four"},[t("div",{class:"four"},"+4%"),t("div",{class:"line"})],-1)),wo={class:"bid_start"},go={class:"price"},Ao=C(()=>t("div",{class:"add_price"},"+0.122 Matic",-1)),$o={class:"bid_list"},bo=C(()=>t("div",{class:"vertical"},null,-1)),xo=C(()=>t("div",{class:"add_four"},[t("div",{class:"four"},"+4%"),t("div",{class:"line"})],-1)),yo={class:"bid_record"},Co=C(()=>t("div",{class:"bid_records"},[t("div",{class:"price_record"},"3.157 Matic"),t("div",{class:"time"},"16:37:58")],-1)),Ho=C(()=>t("div",{class:"add_price"},"+0.122 Matic",-1)),Io={class:"bid_address"},Bo=C(()=>t("div",{class:"address"},"0x68ed",-1)),So={class:"content"},To={class:"bid_list"},No=C(()=>t("div",{class:"add_four"},[t("div",{class:"four"},"+4%"),t("div",{class:"line"})],-1)),Do={class:"first_bid"},ko=C(()=>t("div",{class:"bid_initial"},[t("div",{class:"title"},"3.157 Matic(Initial Price)"),t("div",{class:"time"},"16:37:58")],-1)),Po=C(()=>t("div",{class:"add_price"},"+0.122 Matic",-1)),Ko={class:"bid_address"},Vo=C(()=>t("div",{class:"address"},"0x45dc",-1)),Mo={class:"content"},Eo=w({__name:"bid",setup(s){const{t:e}=S();return(n,a)=>(f(),A("div",ho,[t("div",po,[mo,fo,t("div",wo,[t("div",go,"3.157 "+i(o(e)("views.newHome.introduction.bid.t5")),1),Ao])]),t("div",$o,[bo,xo,t("div",yo,[Co,Ho,t("div",Io,[Bo,t("div",So,i(o(e)("views.newHome.introduction.bid.t6")),1)])])]),t("div",To,[No,t("div",Do,[ko,Po,t("div",Ko,[Vo,t("div",Mo,i(o(e)("views.newHome.introduction.bid.t7")),1)])])])]))}});const Fo=x(Eo,[["__scopeId","data-v-8d54804b"]]),_t=s=>(I("data-v-91c94cd7"),s=s(),B(),s),qo={class:"bid"},Oo={class:"w-2/5 bid_left"},Uo={class:"battle_info"},Ro={class:"battle_nft"},Go=["src"],Jo={class:"ko"},Qo={class:"name"},zo=_t(()=>t("div",{class:"vs"},"VS",-1)),Lo={class:"battle_info"},jo={class:"battle_nft"},Yo=["src"],Xo={class:"ko"},Wo={class:"name"},Zo={class:"w-3/5 bid_right"},tn=_t(()=>t("div",{class:"item"},"04/",-1)),en={class:"content"},sn=_t(()=>t("div",{class:"title"},"BID",-1)),on={class:"list"},nn={class:"text"},an={class:"text"},cn={class:"text"},ln=w({__name:"index",setup(s){const{t:e}=S(),n={img:"https://file.burnyou.io/collection/image/0xdf066367432c0ed9baaf0b072534b1523563f325/1981.png",mateName:"Crypto Caiman V1 #1981",ko:"1"},a={img:"https://file.burnyou.io/collection/image/0xe0a4b7a4bfced60ddcb124d5aa7ef34cb8b74639/2478.png",mateName:"Weirdo #2478",ko:"2"},l=()=>{R.info(e("common.stayTuned"))};return(v,d)=>(f(),A("div",qo,[t("div",Oo,[t("div",Uo,[t("div",Ro,[t("img",{src:n.img,alt:"",class:"img"},null,8,Go),t("div",Jo,"K.O."+i(n.ko),1)]),t("div",Qo,i(n.mateName),1)]),zo,t("div",Lo,[t("div",jo,[t("img",{src:a.img,alt:"",class:"img"},null,8,Yo),t("div",Xo,"K.O."+i(a.ko),1)]),t("div",Wo,i(a.mateName),1)]),c(Fo,{class:"absolute"})]),t("div",Zo,[tn,t("div",en,[sn,t("ul",on,[t("li",nn,"· "+i(o(e)("views.newHome.introduction.bid.t1")),1),t("li",an,"· "+i(o(e)("views.newHome.introduction.bid.t2")),1),t("li",cn,"· "+i(o(e)("views.newHome.introduction.bid.t3")),1)]),t("div",{class:"start",onClick:l},i(o(e)("views.newHome.introduction.bid.t4")),1)])])]))}});const dn=x(ln,[["__scopeId","data-v-91c94cd7"]]),vt=s=>(I("data-v-6c7612f0"),s=s(),B(),s),rn={class:"introduction"},_n={class:"title"},vn=vt(()=>t("div",{class:"line"},null,-1)),un=vt(()=>t("div",{class:"line"},null,-1)),hn=vt(()=>t("div",{class:"line"},null,-1)),pn=w({__name:"index",setup(s){const{t:e}=S();return(n,a)=>(f(),A("div",rn,[t("div",_n,i(o(e)("views.newHome.introduction.t1")),1),c(gs),vn,c(qs),un,c(uo),hn,c(dn)]))}});const mn=x(pn,[["__scopeId","data-v-6c7612f0"]]),H=s=>(I("data-v-024b3537"),s=s(),B(),s),fn={class:"roadmap"},wn={class:"title"},gn={class:"top"},An={class:"content"},$n=H(()=>t("div",{class:"left"},[t("div",{class:"step"},"1"),t("div",{class:"vertical"})],-1)),bn={class:"right"},xn=H(()=>t("div",{class:"time"},"2023.08",-1)),yn={class:"text"},Cn={class:"content"},Hn=H(()=>t("div",{class:"left"},[t("div",{class:"step"},"3"),t("div",{class:"vertical"})],-1)),In={class:"right"},Bn=H(()=>t("div",{class:"time"},"2023.11",-1)),Sn={class:"text views"},Tn={class:"view"},Nn={class:"content"},Dn=H(()=>t("div",{class:"left"},[t("div",{class:"step"},"5"),t("div",{class:"vertical"})],-1)),kn={class:"right"},Pn=H(()=>t("div",{class:"time"},"2024.01",-1)),Kn={class:"text"},Vn=H(()=>t("div",{class:"line"},null,-1)),Mn={class:"bottom"},En={class:"content"},Fn=H(()=>t("div",{class:"left"},[t("div",{class:"step"},"2"),t("div",{class:"vertical"})],-1)),qn={class:"right"},On=H(()=>t("div",{class:"time"},"2023.09",-1)),Un={class:"text"},Rn={class:"content"},Gn=H(()=>t("div",{class:"left"},[t("div",{class:"step"},"4"),t("div",{class:"vertical"})],-1)),Jn={class:"right"},Qn=H(()=>t("div",{class:"time"},"2023.12",-1)),zn={class:"text"},Ln={class:"content"},jn=H(()=>t("div",{class:"left"},[t("div",{class:"step"},"6"),t("div",{class:"vertical"})],-1)),Yn={class:"right"},Xn={class:"tuned"},Wn=w({__name:"index",setup(s){const{t:e}=S();return(n,a)=>(f(),A("div",fn,[t("div",wn,i(o(e)("views.newHome.roadmap.t1")),1),t("div",gn,[t("div",An,[$n,t("div",bn,[xn,t("div",yn,[t("p",null,i(o(e)("views.newHome.roadmap.t2")),1),t("p",null,i(o(e)("views.newHome.roadmap.t3")),1),t("p",null,i(o(e)("views.newHome.roadmap.t4")),1),t("p",null,i(o(e)("views.newHome.roadmap.t5")),1)])])]),t("div",Cn,[Hn,t("div",In,[Bn,t("div",Sn,[t("p",null,i(o(e)("views.newHome.roadmap.t6")),1),t("p",Tn,i(o(e)("views.newHome.roadmap.t7"))+" >",1)])])]),t("div",Nn,[Dn,t("div",kn,[Pn,t("div",Kn,[t("p",null,i(o(e)("views.newHome.roadmap.t8")),1)])])])]),Vn,t("div",Mn,[t("div",En,[Fn,t("div",qn,[On,t("div",Un,[t("p",null,i(o(e)("views.newHome.roadmap.t9")),1)])])]),t("div",Rn,[Gn,t("div",Jn,[Qn,t("div",zn,[t("p",null,i(o(e)("views.newHome.roadmap.t10")),1)])])]),t("div",Ln,[jn,t("div",Yn,[t("div",Xn,i(o(e)("views.newHome.roadmap.t11")),1)])])])]))}});const Zn=x(Wn,[["__scopeId","data-v-024b3537"]]),ti=s=>(I("data-v-6b789224"),s=s(),B(),s),ei={class:"faq"},si=ti(()=>t("div",{class:"tittle"},"FAQ",-1)),oi={class:"mt-[10px]"},ni={class:"text-[15px]"},ii={class:"text-[15px]"},ai={class:"text-[15px]"},ci={class:"text-[15px]"},li={class:"my-[10px]"},di={class:"text-[#fff]"},ri={class:"indent-[1em]"},_i={class:"text-[#fff]"},vi={class:"indent-[1em]"},ui={class:"text-[#fff]"},hi={class:"indent-[1em]"},pi=w({__name:"index",setup(s){const{t:e}=S(),n=k(["1"]),a=k(["2"]),l=k(["3"]),v=k(["4"]),d=k(["5"]);return($,u)=>(f(),A("div",ei,[si,c(o(D),{activeKey:n.value,"onUpdate:activeKey":u[0]||(u[0]=p=>n.value=p)},{default:b(()=>[c(o(P),{key:"1",header:o(e)("views.newHome.faq.one.t1")},{default:b(()=>[t("p",null," · "+i(o(e)("views.newHome.faq.one.t2")),1),t("p",null," · "+i(o(e)("views.newHome.faq.one.t3")),1),t("p",null," · "+i(o(e)("views.newHome.faq.one.t4")),1),t("p",null," · "+i(o(e)("views.newHome.faq.one.t5")),1)]),_:1},8,["header"])]),_:1},8,["activeKey"]),c(o(D),{activeKey:a.value,"onUpdate:activeKey":u[1]||(u[1]=p=>a.value=p)},{default:b(()=>[c(o(P),{key:"2",header:o(e)("views.newHome.faq.two.t1")},{default:b(()=>[t("p",null,i(o(e)("views.newHome.faq.two.t2")),1),t("p",oi,i(o(e)("views.newHome.faq.two.t3")),1),t("div",ni," · "+i(o(e)("views.newHome.faq.two.t4")),1),t("div",ii," · "+i(o(e)("views.newHome.faq.two.t5")),1),t("div",ai," · "+i(o(e)("views.newHome.faq.two.t6")),1),t("div",ci," · "+i(o(e)("views.newHome.faq.two.t7")),1),t("p",li,i(o(e)("views.newHome.faq.two.t8")),1),t("p",null,i(o(e)("views.newHome.faq.two.t9")),1)]),_:1},8,["header"])]),_:1},8,["activeKey"]),c(o(D),{activeKey:l.value,"onUpdate:activeKey":u[2]||(u[2]=p=>l.value=p)},{default:b(()=>[c(o(P),{key:"3",header:o(e)("views.newHome.faq.three.t1")},{default:b(()=>[t("p",null,i(o(e)("views.newHome.faq.three.t2")),1),t("p",null,i(o(e)("views.newHome.faq.three.t3")),1),t("p",null,i(o(e)("views.newHome.faq.three.t4")),1),t("p",null,i(o(e)("views.newHome.faq.three.t5")),1)]),_:1},8,["header"])]),_:1},8,["activeKey"]),c(o(D),{activeKey:v.value,"onUpdate:activeKey":u[3]||(u[3]=p=>v.value=p)},{default:b(()=>[c(o(P),{key:"4",header:o(e)("views.newHome.faq.four.t1")},{default:b(()=>[t("p",null,i(o(e)("views.newHome.faq.four.t2")),1)]),_:1},8,["header"])]),_:1},8,["activeKey"]),c(o(D),{activeKey:d.value,"onUpdate:activeKey":u[4]||(u[4]=p=>d.value=p)},{default:b(()=>[c(o(P),{key:"5",header:o(e)("views.newHome.faq.five.t1")},{default:b(()=>[t("p",di," · "+i(o(e)("views.newHome.faq.five.t2")),1),t("div",ri,i(o(e)("views.newHome.faq.five.t3")),1),t("p",_i," · "+i(o(e)("views.newHome.faq.five.t4")),1),t("div",vi,i(o(e)("views.newHome.faq.five.t5")),1),t("p",ui," · "+i(o(e)("views.newHome.faq.five.t6")),1),t("div",hi,i(o(e)("views.newHome.faq.five.t7")),1)]),_:1},8,["header"])]),_:1},8,["activeKey"])]))}});const mi=x(pi,[["__scopeId","data-v-6b789224"]]),fi={class:"home"},wi=w({__name:"home",setup(s){return(e,n)=>(f(),A("div",fi,[c(Ve),c(je),c(mn),c(Zn),c(mi),c(Be)]))}});const Ni=x(wi,[["__scopeId","data-v-bf9439fd"]]);export{Ni as default};
