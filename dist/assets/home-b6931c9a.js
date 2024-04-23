var Ee=Object.defineProperty;var Ke=(s,e,o)=>e in s?Ee(s,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[e]=o;var p=(s,e,o)=>(Ke(s,typeof e!="symbol"?e+"":e,o),o);import{t as Ge,l as Pe}from"./logo-f2058af9.js";import{O as ue,N,D as z,ae as Z,Q as Ae,S as Re,ar as Oe,_ as Y,a2 as Qe,Y as Ue,d as C,aq as Ie,r as B,M as Ve,a6 as Be,L as qe,G as ee,h as l,H as te,aC as Me,aD as Fe,aE as Ye,ad as fe,aF as Le,aG as ze,J as We,ay as Je,an as je,z as Xe,aH as Ze,A as et,b as m,c as h,e as t,f as n,x as ve,v as tt,p as S,j as k,l as I,u as E,s as D,t as c,o as st,ag as me,w as f,F as R,k as q,q as ot,y as $}from"./index-a3d4c865.js";import{A as nt,e as X}from"./axios-1a0df114.js";import{N as L}from"./nft-data-8b961be0.js";import{M as at}from"./match-data-01707e11.js";import{C as it}from"./challenge-data-66d06939.js";import{C as ct,R as lt}from"./index-68751b45.js";import{f as dt,T as we}from"./index-c6284ebf.js";import{g as rt,c as _t}from"./collapseMotion-775a39bb.js";import"./responsiveObserve-10a8f6f1.js";import"./colors-8e98bfff.js";const ut=()=>({prefixCls:String,activeKey:ue([Array,Number,String]),defaultActiveKey:ue([Array,Number,String]),accordion:N(),destroyInactivePanel:N(),bordered:N(),expandIcon:z(),openAnimation:Z.object,expandIconPosition:Ae(),collapsible:Ae(),ghost:N(),onChange:z(),"onUpdate:activeKey":z()}),$e=()=>({openAnimation:Z.object,prefixCls:String,header:Z.any,headerClass:String,showArrow:N(),isActive:N(),destroyInactivePanel:N(),disabled:N(),accordion:N(),forceRender:N(),expandIcon:z(),extra:Z.any,panelKey:ue(),collapsible:Ae(),role:String,onItemClick:z()}),At=s=>{const{componentCls:e,collapseContentBg:o,padding:a,collapseContentPaddingHorizontal:i,collapseHeaderBg:r,collapseHeaderPadding:_,collapsePanelBorderRadius:w,lineWidth:u,lineType:A,colorBorder:d,colorText:O,colorTextHeading:T,colorTextDisabled:G,fontSize:Q,lineHeight:P,marginSM:U,paddingSM:v,motionDurationSlow:g,fontSizeIcon:x}=s,b=`${u}px ${A} ${d}`;return{[e]:Y(Y({},Ue(s)),{backgroundColor:r,border:b,borderBottom:0,borderRadius:`${w}px`,"&-rtl":{direction:"rtl"},[`& > ${e}-item`]:{borderBottom:b,"&:last-child":{[`
            &,
            & > ${e}-header`]:{borderRadius:`0 0 ${w}px ${w}px`}},[`> ${e}-header`]:{position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:_,color:T,lineHeight:P,cursor:"pointer",transition:`all ${g}, visibility 0s`,[`> ${e}-header-text`]:{flex:"auto"},"&:focus":{outline:"none"},[`${e}-expand-icon`]:{height:Q*P,display:"flex",alignItems:"center",paddingInlineEnd:U},[`${e}-arrow`]:Y(Y({},Qe()),{fontSize:x,svg:{transition:`transform ${g}`}}),[`${e}-header-text`]:{marginInlineEnd:"auto"}},[`${e}-header-collapsible-only`]:{cursor:"default",[`${e}-header-text`]:{flex:"none",cursor:"pointer"},[`${e}-expand-icon`]:{cursor:"pointer"}},[`${e}-icon-collapsible-only`]:{cursor:"default",[`${e}-expand-icon`]:{cursor:"pointer"}},[`&${e}-no-arrow`]:{[`> ${e}-header`]:{paddingInlineStart:v}}},[`${e}-content`]:{color:O,backgroundColor:o,borderTop:b,[`& > ${e}-content-box`]:{padding:`${a}px ${i}px`},"&-hidden":{display:"none"}},[`${e}-item:last-child`]:{[`> ${e}-content`]:{borderRadius:`0 0 ${w}px ${w}px`}},[`& ${e}-item-disabled > ${e}-header`]:{"\n          &,\n          & > .arrow\n        ":{color:G,cursor:"not-allowed"}},[`&${e}-icon-position-end`]:{[`& > ${e}-item`]:{[`> ${e}-header`]:{[`${e}-expand-icon`]:{order:1,paddingInlineEnd:0,paddingInlineStart:U}}}}})}},vt=s=>{const{componentCls:e}=s,o=`> ${e}-item > ${e}-header ${e}-arrow svg`;return{[`${e}-rtl`]:{[o]:{transform:"rotate(180deg)"}}}},pt=s=>{const{componentCls:e,collapseHeaderBg:o,paddingXXS:a,colorBorder:i}=s;return{[`${e}-borderless`]:{backgroundColor:o,border:0,[`> ${e}-item`]:{borderBottom:`1px solid ${i}`},[`
        > ${e}-item:last-child,
        > ${e}-item:last-child ${e}-header
      `]:{borderRadius:0},[`> ${e}-item:last-child`]:{borderBottom:0},[`> ${e}-item > ${e}-content`]:{backgroundColor:"transparent",borderTop:0},[`> ${e}-item > ${e}-content > ${e}-content-box`]:{paddingTop:a}}}},mt=s=>{const{componentCls:e,paddingSM:o}=s;return{[`${e}-ghost`]:{backgroundColor:"transparent",border:0,[`> ${e}-item`]:{borderBottom:0,[`> ${e}-content`]:{backgroundColor:"transparent",border:0,[`> ${e}-content-box`]:{paddingBlock:o}}}}}},ht=Re("Collapse",s=>{const e=Oe(s,{collapseContentBg:s.colorBgContainer,collapseHeaderBg:s.colorFillAlter,collapseHeaderPadding:`${s.paddingSM}px ${s.padding}px`,collapsePanelBorderRadius:s.borderRadiusLG,collapseContentPaddingHorizontal:16});return[At(e),pt(e),mt(e),vt(e),rt(e)]});function xe(s){let e=s;if(!Array.isArray(e)){const o=typeof e;e=o==="number"||o==="string"?[e]:[]}return e.map(o=>String(o))}const H=C({compatConfig:{MODE:3},name:"ACollapse",inheritAttrs:!1,props:Ie(ut(),{accordion:!1,destroyInactivePanel:!1,bordered:!0,expandIconPosition:"start"}),slots:Object,setup(s,e){let{attrs:o,slots:a,emit:i}=e;const r=B(xe(dt([s.activeKey,s.defaultActiveKey])));Ve(()=>s.activeKey,()=>{r.value=xe(s.activeKey)},{deep:!0});const{prefixCls:_,direction:w,rootPrefixCls:u}=Be("collapse",s),[A,d]=ht(_),O=qe(()=>{const{expandIconPosition:v}=s;return v!==void 0?v:w.value==="rtl"?"end":"start"}),T=v=>{const{expandIcon:g=a.expandIcon}=s,x=g?g(v):l(Le,{rotate:v.isActive?90:void 0},null);return l("div",{class:[`${_.value}-expand-icon`,d.value],onClick:()=>["header","icon"].includes(s.collapsible)&&Q(v.panelKey)},[ze(Array.isArray(g)?x[0]:x)?fe(x,{class:`${_.value}-arrow`},!1):x])},G=v=>{s.activeKey===void 0&&(r.value=v);const g=s.accordion?v[0]:v;i("update:activeKey",g),i("change",g)},Q=v=>{let g=r.value;if(s.accordion)g=g[0]===v?[]:[v];else{g=[...g];const x=g.indexOf(v);x>-1?g.splice(x,1):g.push(v)}G(g)},P=(v,g)=>{var x,b,V;if(Ye(v))return;const y=r.value,{accordion:W,destroyInactivePanel:ie,collapsible:J,openAnimation:ce}=s,le=ce||_t(`${u.value}-motion-collapse`),j=String((x=v.key)!==null&&x!==void 0?x:g),{header:De=(V=(b=v.children)===null||b===void 0?void 0:b.header)===null||V===void 0?void 0:V.call(b),headerClass:Se,collapsible:de,disabled:ge}=v.props||{};let re=!1;W?re=y[0]===j:re=y.indexOf(j)>-1;let _e=de??J;(ge||ge==="")&&(_e="disabled");const ke={key:j,panelKey:j,header:De,headerClass:Se,isActive:re,prefixCls:_.value,destroyInactivePanel:ie,openAnimation:le,accordion:W,onItemClick:_e==="disabled"?null:Q,expandIcon:T,collapsible:_e};return fe(v,ke)},U=()=>{var v;return Fe((v=a.default)===null||v===void 0?void 0:v.call(a)).map(P)};return()=>{const{accordion:v,bordered:g,ghost:x}=s,b=ee(_.value,{[`${_.value}-borderless`]:!g,[`${_.value}-icon-position-${O.value}`]:!0,[`${_.value}-rtl`]:w.value==="rtl",[`${_.value}-ghost`]:!!x,[o.class]:!!o.class},d.value);return A(l("div",te(te({class:b},Me(o)),{},{style:o.style,role:v?"tablist":null}),[U()]))}}}),gt=C({compatConfig:{MODE:3},name:"PanelContent",props:$e(),setup(s,e){let{slots:o}=e;const a=We(!1);return Je(()=>{(s.isActive||s.forceRender)&&(a.value=!0)}),()=>{var i;if(!a.value)return null;const{prefixCls:r,isActive:_,role:w}=s;return l("div",{class:ee(`${r}-content`,{[`${r}-content-active`]:_,[`${r}-content-inactive`]:!_}),role:w},[l("div",{class:`${r}-content-box`},[(i=o.default)===null||i===void 0?void 0:i.call(o)])])}}}),K=C({compatConfig:{MODE:3},name:"ACollapsePanel",inheritAttrs:!1,props:Ie($e(),{showArrow:!0,isActive:!1,onItemClick(){},headerClass:"",forceRender:!1}),slots:Object,setup(s,e){let{slots:o,emit:a,attrs:i}=e;je(s.disabled===void 0,"Collapse.Panel",'`disabled` is deprecated. Please use `collapsible="disabled"` instead.');const{prefixCls:r}=Be("collapse",s),_=()=>{a("itemClick",s.panelKey)},w=u=>{(u.key==="Enter"||u.keyCode===13||u.which===13)&&_()};return()=>{var u,A;const{header:d=(u=o.header)===null||u===void 0?void 0:u.call(o),headerClass:O,isActive:T,showArrow:G,destroyInactivePanel:Q,accordion:P,forceRender:U,openAnimation:v,expandIcon:g=o.expandIcon,extra:x=(A=o.extra)===null||A===void 0?void 0:A.call(o),collapsible:b}=s,V=b==="disabled",y=r.value,W=ee(`${y}-header`,{[O]:O,[`${y}-header-collapsible-only`]:b==="header",[`${y}-icon-collapsible-only`]:b==="icon"}),ie=ee({[`${y}-item`]:!0,[`${y}-item-active`]:T,[`${y}-item-disabled`]:V,[`${y}-no-arrow`]:!G,[`${i.class}`]:!!i.class});let J=l("i",{class:"arrow"},null);G&&typeof g=="function"&&(J=g(s));const ce=Xe(l(gt,{prefixCls:y,isActive:T,forceRender:U,role:P?"tabpanel":null},{default:o.default}),[[et,T]]),le=Y({appear:!1,css:!1},v);return l("div",te(te({},i),{},{class:ie}),[l("div",{class:W,onClick:()=>!["header","icon"].includes(b)&&_(),role:P?"tab":"button",tabindex:V?-1:0,"aria-expanded":T,onKeypress:w},[G&&J,l("span",{onClick:()=>b==="header"&&_(),class:`${y}-header-text`},[d]),x&&l("div",{class:`${y}-extra`},[x])]),l(Ze,le,{default:()=>[!Q||T?ce:null]})])}}});H.Panel=K;H.install=function(s){return s.component(H.name,H),s.component(K.name,K),s};const ft="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAeCAYAAADU8sWcAAAAAXNSR0IArs4c6QAAAhlJREFUSEvtlk2ITmEUx3//jEw+w8ZMwkJSvvJRNrPQLIQ0smBhwQ6lWIiY2SprSpINi9mMpnws2M0CSVmQUhIhsaHQ+BpxdOqoO0/3vvfOvYt38z6re+/5+D3nf869zxVtXGojmw68Lep3ZG8pu5m5QuuAPmBc0pU0wMzOAA+BMUnjVfrYUnYzmwacAA4AKyPhD+AqsACYCXwCpgP7wv4bGAVOS3rdahNl8AHgRpUqcnyeAeslTRTFF8LNbDbwFphfE+5heyVdqwPfH/I2YPMV6JX0LS9JbuVm1gW8BJY0IUfsdkl3pgJfCzxJAgzwPs4DFuck80lfE0OYNd+UtGsq8IPApSTgrKTBUOUBsClj75N038wWAi+SOfkLzJH0Pd1AkewjwJ6M84SkGf/vzWwj8Chj75L0x+/N7DawLQGtkuSqTVpF8OfAioynS75c0qsAHAXOZezdkn6F7SmwOuH0SxqrCv8CzE2c/bU7Bri0l2HScXwLOA9sAU4B/nHKrgFJ7lOp8o8ByZuTOs92S7peFf4e6Mn2HPgALC0he3veAMsSvx2SfBYqVb4VuOB9Du+fwEXgHrA5DpleoBv4DPiM3A3fQ8CGuPbNeJ4hSf7BKYfH4Hji48CRUMGDF0nygyV3mZlv8HAYvdJBSY+L/Et/JuK93gnMkjTcSvY4ek8Cw5LelQ1HKbwsQRN7B95EvdqxHdlrS9ck8B+KKpsftDqmmQAAAABJRU5ErkJggg==",wt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAABEBJREFUSEvtlW1IW2cUx70xJupUmhnyskQSjODUJAbSJPcmywtJBBtfEHRK2JgUGVImfinb+mGwDgZ7gdGyNxgodkwGc66h1RJRkxsNN9nivdmNmETR4ZJrpvkwFKuL9hoz7oeBK9Zcu7IO1ufrOfx/z/k/55wHKHhKB3hK3IJn4H/N+f+W1QiCfKlQKF4HgL/fK51OL8bjcWNbW9sfp1kzNjZWolAo7onFYiNJkgXhcPia3W7/5LTcUyuemJgolcvlP0qlUkUmkzlOJBI7FRUVxQKBoBTH8Vtqtfryw2K5XI6B4/ioUql05nI5Cvq1RqO5DABAjjaYSpycnKzTarU/lZeXPxcOh3sTiQRqsVhCHA6nLBAI9NlstpGTggsLCx+pVKo3CwsLgVgsNp1MJtsdDsfho5rmzDf2+XxOjUYzure3lwmFQgYWi/Wi0Wj8NpPJZGAY1nV1dUUpYa/XOwiC4M2SkhJgfX3951gsZmttbd0+q1PzNheGYZ81NjYOJJPJeCQS0fP5/Pd1Ot0bGxsbsampKY1EImnS6/Xj5eXlTIIgNhAEMTqdzl/zjUdeMAzDxVVVVZ7q6mo9iqLf7+/vvyYUCv21tbUXl5aWpoVC4UuVlZWl6XT6PoZhppaWFjwflIrnBVNJ4+Pj1Xq9foHL5XI8Hs/V1dXVuz09PSiPx7tAxXd3dx8gCNLhcDjcdKC0wVTizMxMCwRBd0iSzLrdbguTyRS0t7f/wGazAa/Xe91ms71HF3ouMJXs9/s/MBgM11KpFDE0NKSyWq3vGo3GQYIgVmZnZzV9fX336cJpWf2XGAzDTLFYPCOTySzU+yqVykuxWCxQV1enwzBsXK1Wdz9qbh++0LnAo6Oj9U1NTfM8Hq+SWhIej+f6ysrKrc7OTozL5T4fDAYHTSbT53Sqpg0eHh5+wWq1IlKpVHpwcHCczWaz1LZyu92X2Gx2idVqvX14eHiEoqipubk5lA9OCwzDcJlIJJqtqanRkSSZ8/v97zAYDNJsNn+cTqfTXq/3okQiGQBB8O3Nzc21xcVF7T9eICiKFrFYrLGGhoYOyt5QKPQVBEFXqIoikcgdpVLZtry8PE8QhEMkEt2rr683R6PR23K5/GUAAI4fa2XmcjkARdFPVSrVAIPBKIhGo3eDwWBXf38/SQmOjIxcsNvtC0KhsCYQCNzY2tq6CYJgSCAQ8DAMuwpB0I3HAs/Pz7+l1Wo/ZLFYwNraWgjHcVt3d/feSTGXy6U2m83+oqIi9tzc3CtMJpM0GAzfHR0dZTEMs9jt9uC5fqfp6WknBEHflJWVFRIE8QuCICan0/nbaSI+n+8KCIJfUE23vb39gM/nF1MfRiqVSng8HnVvb+/vtMbJ5XKp1Gq1n8PhFO/s7GxTN+/o6Iid1ak4jo/IZLJXT+ZQPRGPx106na6bFjjfKDyJOK1xehKgZxX//6z+E373yS7IC1dyAAAAAElFTkSuQmCC",Ne=s=>(S("data-v-e9aac61e"),s=s(),k(),s),xt={class:"footer"},bt=Ne(()=>t("div",{class:"line"},null,-1)),Ct=["src"],yt=Ne(()=>t("div",{class:"info"},"©2023 artsarena.io All rights reserved.",-1)),It={class:"link"},Bt=["src"],$t=["src"],Nt=C({__name:"footer",setup(s){const{useToken:e}=Ge,{token:o}=e(),a=()=>{window.open({}.VITE_HOME_DISCORD)},i=()=>{window.open("https://twitter.com/artsarenaio")};return(r,_)=>(m(),h("div",xt,[bt,t("div",{class:"cursor-pointer logo",style:tt(`color:${n(o).colorPrimary}`)},[t("img",{src:n(Pe),alt:""},null,8,Ct),ve(" ArtsArena.io ")],4),yt,t("div",It,[t("div",{class:"link_img",onClick:a},[t("img",{src:n(ft),alt:""},null,8,Bt)]),t("div",{class:"link_img",onClick:i},[t("img",{src:n(wt),alt:""},null,8,$t)])])]))}});const Tt=I(Nt,[["__scopeId","data-v-e9aac61e"]]),Ht="/assets/strip-52b47f12.png",Dt="/assets/mStrip-91cebb7d.png",St=s=>(S("data-v-58360f77"),s=s(),k(),s),kt={class:"launch_app"},Et=St(()=>t("div",{class:"background"},null,-1)),Kt=["src"],Gt={class:"main"},Pt=["innerHTML"],Rt={class:"content"},Ot=["src"],Qt=C({__name:"index",setup(s){const e=B(window.innerWidth>=768),{t:o}=E();return(a,i)=>(m(),h("div",kt,[Et,e.value?(m(),h("img",{key:0,src:n(Ht),alt:"",class:"item"},null,8,Kt)):D("",!0),t("div",Gt,[t("div",{class:"title",innerHTML:n(o)("views.newHome.launchApp.t1")},null,8,Pt),t("div",Rt,c(n(o)("views.newHome.launchApp.t2")),1),e.value?D("",!0):(m(),h("img",{key:0,src:n(Dt),alt:"",class:"mItem"},null,8,Ot))])]))}});const Ut=I(Qt,[["__scopeId","data-v-58360f77"]]);function Vt(s){const e=[];typeof s=="number"&&(s=s.toString());const o=s==null?void 0:s.indexOf("."),a=o>-1;for(let i=(s==null?void 0:s.length)-1;i>-1;i--){let r=1;for(;a&&i>=o;)e.unshift(s[i]),i--;for(;r<3;)e.unshift(s[i]),r++,i--;e.unshift(s[i]),e.unshift(",")}return e[0]===","&&e.shift(),e.join("")}const qt={class:"item"},Mt={class:"title"},Ft={class:"num"},Yt=C({__name:"item",props:{data:{type:Object,default:()=>{}}},setup(s){const e=s;return(o,a)=>(m(),h("div",qt,[t("div",Mt,c(e.data.title),1),t("div",Ft,c(n(Vt)(e.data.val)),1)]))}});const Lt=I(Yt,[["__scopeId","data-v-5293a399"]]);class zt{constructor(e){p(this,"allMatchCount");p(this,"finishedMatchCount");p(this,"totalPromotionBonus");p(this,"totalViewCount");p(this,"totalUserVotesCount");p(this,"totalVotedUsersCount");this.allMatchCount=e.allMatchCount,this.finishedMatchCount=e.finishedMatchCount,this.totalPromotionBonus=e.totalPromotionBonus,this.totalViewCount=e.totalViewCount,this.totalUserVotesCount=e.totalUserVotesCount,this.totalVotedUsersCount=e.totalVotedUsersCount}}class be{constructor(e){p(this,"id");p(this,"matchId");p(this,"nftAddress");p(this,"tokenId");p(this,"bidderAddress");p(this,"bidPrice");p(this,"refundableAmount");p(this,"refundedAt");p(this,"expectedBonus");p(this,"bidTxHash");p(this,"bonus");p(this,"lostAmount");p(this,"settledAt");p(this,"settleTxHash");p(this,"chainId");this.id=e.id,this.matchId=e.matchId,this.nftAddress=e.nftAddress,this.tokenId=Number(e.tokenId),this.bidderAddress=e.bidderAddress,this.bidPrice=Number(e.bidPrice),this.refundableAmount=Number(e.refundableAmount),this.refundedAt=e.refundedAt,this.expectedBonus=Number(e.expectedBonus),this.bidTxHash=e.bidTxHash,this.bonus=Number(e.bonus),this.lostAmount=Number(e.lostAmount),this.settledAt=e.settledAt,this.settleTxHash=e.settleTxHash,this.chainId=Number(e.chainId)}}class Ce extends at{constructor(o){super(o);p(this,"arenaCreatorNFTBidPrice");p(this,"challengerNFTBidPrice");p(this,"arenaCreatorNFTData");p(this,"challengerNFTData");p(this,"winnerNFTData");p(this,"loserNFTData");p(this,"arenaBidDataList");p(this,"challengerBidDataList");p(this,"challengeDataList");this.arenaCreatorNFTData=new L(o.arenaCreatorNFTData),this.challengerNFTData=new L(o.challengerNFTData),this.winnerNFTData=o.winnerNFTData?new L(o.winnerNFTData):null,this.loserNFTData=o.loserNFTData?new L(o.loserNFTData):null,this.arenaCreatorNFTBidPrice=o.arenaCreatorNFTBidPrice,this.challengerNFTBidPrice=o.challengerNFTBidPrice,this.arenaBidDataList=o.arenaBidDataList.map(a=>new be(a)),this.challengerBidDataList=o.challengerBidDataList.map(a=>new be(a)),this.challengeDataList=o.challengeDataList.map(a=>new it(a))}}class Wt extends nt{async getIndexData(){const e=this.gateway+"/stat/index-data",o=await X.get(e);return this.checkResponse(o),new zt(o.data.data)}async getTopNMatches(e){const o=this.gateway+"/stat/top-matches/"+e,a=await X.get(o);return this.checkResponse(a),a.data.data.map(i=>new Ce(i))}async getTopNMatchesOrderByKOScore(e){const o=this.gateway+"/stat/top-matches/koscore/"+e,a=await X.get(o);return this.checkResponse(a),a.data.data.map(r=>new Ce(r))}async getTopNNFTsOrderByKOScore(e){const o=this.gateway+"/stat/top-nfts/koscore/"+e,a=await X.get(o);return this.checkResponse(a),a.data.data.map(r=>new L(r))}}const se="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATAAAAAgCAYAAACVWiTcAAAAAXNSR0IArs4c6QAAAZdJREFUeF7t3MGNw0AMA8DdHtJ/henBeaQD6kEYmvsHghVzTG+Au8/zfM7g7977HXz8mG//k/vH/bc8fwABCEDyDQC0DCjAAJbH9xwBLgd4+xsQwAAGsHwDAC8DDjCA5fHVwAAGMD8iDAQRoHKAtr/Cta9fA9PABn46A2sHePt8gAEMYPkGNOByAwYYwPL4OgMDGMCcgQ0EEaBygLa/wrWvXwPTwAZ+OgNrB3j7fIABDGD5BjTgcgMGGMDy+DoDAxjAnIENBBGgcoC2v8K1r18D08AGfjoDawd4+3yAAQxg+QY04HIDzr+6/ycBCMDJPQSAMgAvb3B3cvMBDOAeYB5gE0OmDzCAvfwJBBCANAFp338AA5h/CT4QoB3g7fMBBjCAASzeQBtQgAEMYHF8nYECDCAAAUi8gTYg7fkaGEABGvOhgQEMIAABSLyBNiDt+RoYQAEa86GBAQwgAAFIvIE2IO35GhhAARrzoYEBDCAAAUi8gTYg7fkaGEABGvOhgQEMIAABSLyBNiDt+RoYQAEa86GBtQH7AbfosW2VNNnVAAAAAElFTkSuQmCC",Jt="/assets/trade-4af53106.png",jt="/assets/battle-da4cfb39.png",Xt="/assets/nfts-845ce9fd.png",Zt="data:image/png;base64,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",es="/assets/logo-59e2a0f7.png",oe=s=>(S("data-v-5bd5fcf8"),s=s(),k(),s),ts={class:"about"},ss=["innerHTML"],os={class:"title2"},ns={class:"content"},as=["src"],is=["src"],cs={class:"content_main"},ls={class:"left"},ds={class:"target"},rs=oe(()=>t("div",{class:"equal"},"=",-1)),_s={class:"trand"},us=["src"],As={class:"text text_trnad"},vs=oe(()=>t("p",{class:"add"},"+",-1)),ps={class:"battle"},ms=["src"],hs={class:"text text_price"},gs={class:"right"},fs={class:"project"},ws=["src"],xs=oe(()=>t("div",{class:"equal"},"=",-1)),bs={class:"last"},Cs={class:"battle"},ys=oe(()=>t("div",{class:"add"},"+",-1)),Is={class:"guess_bid"},Bs=["src"],$s={class:"nfts"},Ns=["innerHTML"],Ts={class:"item"},Hs=C({__name:"index",setup(s){const{t:e}=E(),o=B(),a=new Wt,i=B([{title:e("views.newHome.about.t10"),name:"allMatchCount",val:1900},{title:e("views.newHome.about.t11"),name:"totalPromotionBonus",val:28970},{title:e("views.newHome.about.t12"),name:"totalUserVotesCount",val:3970},{title:e("views.newHome.about.t13"),name:"allMatchCount",val:345},{title:e("views.newHome.about.t14"),name:"totalViewCount",val:6970},{title:e("views.newHome.about.t15"),name:"totalVotedUsersCount",val:56970}]);st(async()=>{try{await r()}catch(_){me.error(_.message)}});const r=async()=>{o.value=await a.getIndexData();for(let _=0;_<i.value.length;_++){const w=i.value[_].name,u=o.value[w];i.value[_].val=u}};return(_,w)=>(m(),h("div",ts,[t("div",{class:"title",innerHTML:n(e)("views.newHome.about.t1")},null,8,ss),t("div",os,c(n(e)("views.newHome.about.t3")),1),t("div",ns,[t("img",{class:"img top",src:n(se),alt:""},null,8,as),t("img",{class:"img bottom",src:n(se),alt:""},null,8,is),t("div",cs,[t("div",ls,[t("div",ds,c(n(e)("views.newHome.about.t4")),1),rs,t("div",_s,[t("img",{class:"img",src:n(Jt),alt:""},null,8,us),t("div",As,c(n(e)("views.newHome.about.t5")),1)]),vs,t("div",ps,[t("img",{class:"img",src:n(jt),alt:""},null,8,ms),t("div",hs,c(n(e)("views.newHome.about.t6")),1)])]),t("div",gs,[t("div",fs,[t("img",{class:"logo_img",src:n(es),alt:""},null,8,ws),xs,t("div",bs,[t("div",Cs,c(n(e)("views.newHome.about.t7")),1),ys,t("div",Is,c(n(e)("views.newHome.about.t8")),1)])]),t("img",{class:"goal",src:n(Zt),alt:""},null,8,Bs),t("div",$s,[t("div",{innerHTML:n(e)("views.newHome.about.t9",{img:n(Xt)})},null,8,Ns)])])])]),t("div",Ts,[l(n(lt),{gutter:[10,15]},{default:f(()=>[(m(!0),h(R,null,q(i.value,(u,A)=>(m(),ot(n(ct),{xs:{span:12},md:{span:8},key:A},{default:f(()=>[l(Lt,{data:u},null,8,["data"])]),_:2},1024))),128))]),_:1})])]))}});const Ds=I(Hs,[["__scopeId","data-v-5bd5fcf8"]]),Ss={class:"nft"},ks=["src"],Es={class:"nft_content"},Ks=["src"],Gs={key:0,class:"status"},Ps={class:"nft_info"},Rs={class:"w-3/5 name"},Os={class:"w-2/5 ko"},Qs=["src"],Us=C({__name:"index",props:{location:{type:String,default:"left"},info:{type:Object,default:()=>{}},isVote:{type:Boolean,default:!1}},setup(s){const e=s,o=a=>{a.target.clientWidth>=a.target.scrollWidth&&(a.target.style.pointerEvents="none")};return(a,i)=>(m(),h("div",Ss,[t("div",{class:$(["flex cell_top",(e==null?void 0:e.location)=="left"?"justify-start":"justify-end"])},[t("img",{src:n(se),alt:"",class:"cell_one"},null,8,ks)],2),t("div",Es,[t("img",{src:e.info.img,alt:"",class:"nft_img"},null,8,Ks),e.isVote?(m(),h("div",Gs,"WIN")):D("",!0)]),t("div",Ps,[l(n(we),{onMouseenter:o},{title:f(()=>[ve(c(e.info.mateName),1)]),default:f(()=>[t("div",Rs,c(e.info.mateName),1)]),_:1}),l(n(we),{onMouseenter:o},{title:f(()=>[ve(c(e.info.ko),1)]),default:f(()=>[t("div",Os,"K.O."+c(e.info.ko),1)]),_:1})]),t("div",{class:$(["flex cell_bottom",e.location=="left"?"justify-end":"justify-start"])},[t("img",{src:n(se),alt:"",class:"cell_two"},null,8,Qs)],2)]))}});const pe=I(Us,[["__scopeId","data-v-a9fab2e8"]]),ne=s=>(S("data-v-9ad0e3cb"),s=s(),k(),s),Vs={class:"battle"},qs={class:"w-2/5 battle_left"},Ms=ne(()=>t("div",{class:"item"},"01/",-1)),Fs={class:"content"},Ys=ne(()=>t("div",{class:"title"},"Battle",-1)),Ls={class:"list"},zs={class:"text"},Ws={class:"text"},Js={class:"text"},js={class:"relative w-3/5 battle_right"},Xs=ne(()=>t("div",{class:"vs"},"VS",-1)),Zs=ne(()=>t("div",{class:"absolute bg_style"},null,-1)),eo=C({__name:"index",setup(s){const e=B(window.innerWidth>=768),{t:o}=E(),a={img:"https://file.burnyou.io/collection/image/0xdf066367432c0ed9baaf0b072534b1523563f325/1981.png",mateName:"Crypto Caiman V1 #1981",ko:"1"},i={img:"https://file.burnyou.io/collection/image/0xe0a4b7a4bfced60ddcb124d5aa7ef34cb8b74639/2478.png",mateName:"Weirdo #2478",ko:"2"},r=()=>{me.info(o("common.stayTuned"))};return(_,w)=>(m(),h("div",Vs,[t("div",qs,[Ms,t("div",Fs,[Ys,t("ul",Ls,[t("li",zs,"· "+c(n(o)("views.newHome.introduction.battle.t1")),1),t("li",Ws,"· "+c(n(o)("views.newHome.introduction.battle.t2")),1),t("li",Js,"· "+c(n(o)("views.newHome.introduction.battle.t3")),1)]),e.value?(m(),h("div",{key:0,class:"start",onClick:r},c(n(o)("views.newHome.introduction.battle.t4")),1)):D("",!0)])]),t("div",js,[l(pe,{location:"left",info:a}),Xs,l(pe,{location:"right",info:i}),Zs]),e.value?D("",!0):(m(),h("div",{key:0,class:"m_start",onClick:r},c(n(o)("views.newHome.introduction.battle.t4")),1))]))}});const to=I(eo,[["__scopeId","data-v-9ad0e3cb"]]),so="/assets/vote-bd89a39b.png",oo=s=>(S("data-v-c76f4e75"),s=s(),k(),s),no={class:"voted"},ao=["src"],io={class:"info"},co={class:"title"},lo=oo(()=>t("div",{class:"vote_num"},"+300",-1)),ro=C({__name:"vote",setup(s){const{t:e}=E();return(o,a)=>(m(),h("div",no,[t("img",{src:n(so),alt:"",class:"img"},null,8,ao),t("div",io,[t("div",co,c(n(e)("views.newHome.introduction.vote.t5")),1),lo])]))}});const _o=I(ro,[["__scopeId","data-v-c76f4e75"]]),Te=s=>(S("data-v-2103c02f"),s=s(),k(),s),uo={class:"vote"},Ao={class:"w-2/5 vote_left"},vo={class:"w-3/5 vote_right"},po=Te(()=>t("div",{class:"item"},"02/",-1)),mo={class:"content"},ho=Te(()=>t("div",{class:"title"},"VOTE",-1)),go={class:"list"},fo={class:"text"},wo={class:"text"},xo={class:"text"},bo=C({__name:"index",setup(s){const e=B(window.innerWidth>=768),{t:o}=E(),a={img:"https://file.burnyou.io/collection/image/0xdf066367432c0ed9baaf0b072534b1523563f325/1981.png",mateName:"Crypto Caiman V1 #1981",ko:"1"},i=()=>{me.info(o("common.stayTuned"))};return(r,_)=>(m(),h("div",uo,[t("div",Ao,[l(pe,{class:"voted_nft",location:"left",info:a,isVote:!0}),l(_o,{class:"voted_com"}),e.value?D("",!0):(m(),h("div",{key:0,class:"m_start",onClick:i},c(n(o)("views.newHome.introduction.vote.t4")),1))]),t("div",vo,[po,t("div",mo,[ho,t("ul",go,[t("li",fo,"· "+c(n(o)("views.newHome.introduction.vote.t1")),1),t("li",wo,"· "+c(n(o)("views.newHome.introduction.vote.t2")),1),t("li",xo,"· "+c(n(o)("views.newHome.introduction.vote.t3")),1)]),e.value?(m(),h("div",{key:0,class:"start",onClick:i},c(n(o)("views.newHome.introduction.vote.t4")),1)):D("",!0)])])]))}});const Co=I(bo,[["__scopeId","data-v-2103c02f"]]),yo="/assets/bid-d7380835.png",Io="/assets/mBid-a73fce59.png",He=s=>(S("data-v-63803867"),s=s(),k(),s),Bo={class:"guess_bid"},$o={class:"guess_bid_left"},No=He(()=>t("div",{class:"item"},"03/",-1)),To={class:"content"},Ho=He(()=>t("div",{class:"title"},"guess bid",-1)),Do={class:"list"},So={class:"text"},ko={class:"text"},Eo={class:"text"},Ko={class:"relative guess_bid_right"},Go=["src"],Po=C({__name:"index",setup(s){const e=B(window.innerWidth>=768),{t:o}=E(),a=()=>{window.open("https://app.artsarena.io/#/guessBid/index")};return(i,r)=>(m(),h("div",Bo,[t("div",$o,[No,t("div",To,[Ho,t("ul",Do,[t("li",So,"· "+c(n(o)("views.newHome.introduction.guessbid.t1")),1),t("li",ko,"· "+c(n(o)("views.newHome.introduction.guessbid.t2")),1),t("li",Eo,"· "+c(n(o)("views.newHome.introduction.guessbid.t3")),1)]),e.value?(m(),h("div",{key:0,class:"start",onClick:a},c(n(o)("views.newHome.introduction.guessbid.t4")),1)):D("",!0)])]),t("div",Ko,[t("img",{class:"bk_img",src:e.value?n(yo):n(Io),alt:""},null,8,Go),e.value?D("",!0):(m(),h("div",{key:0,class:"m_start",onClick:a},c(n(o)("views.newHome.introduction.guessbid.t4")),1))])]))}});const Ro=I(Po,[["__scopeId","data-v-63803867"]]),ae=s=>(S("data-v-2522ca66"),s=s(),k(),s),Oo={class:"introduction"},Qo=ae(()=>t("div",{class:"line"},null,-1)),Uo={class:"title"},Vo=ae(()=>t("div",{class:"line"},null,-1)),qo=ae(()=>t("div",{class:"line"},null,-1)),Mo=ae(()=>t("div",{class:"line"},null,-1)),Fo=C({__name:"index",setup(s){const{t:e}=E();return(o,a)=>(m(),h("div",Oo,[Qo,t("div",Uo,c(n(e)("views.newHome.introduction.t1")),1),l(to),Vo,l(Co),qo,l(Ro),Mo]))}});const Yo=I(Fo,[["__scopeId","data-v-2522ca66"]]),ye="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAABACAYAAAB7jnWuAAAAAXNSR0IArs4c6QAAAH1JREFUaEPt17ENgDAMBEBcMhgd49IxGCVsEBeWhYtL6yKvk/JW4n7Od1ucY79iNa/OQgACBMYLZO+82hNpDwhAgAABAuMFqgHLu0AAAgTGC2QB23tAAAIEfhfI/o7tPSAAAQLtAtkF7UUkAAECBAi0C1QvKO8CAQgQ6Bb4AII8+Cl/Z/r0AAAAAElFTkSuQmCC",he=s=>(S("data-v-d17fcaf9"),s=s(),k(),s),Lo={class:"title"},zo={class:"roadmap"},Wo={class:"text"},Jo={class:"line_one"},jo=["src"],Xo={class:"line_two"},Zo=he(()=>t("div",{class:"s_circle"},null,-1)),en=he(()=>t("div",{class:"b_circle"},null,-1)),tn={class:"last_line"},sn=["src"],on={class:"last_text"},nn=he(()=>t("div",{class:"res_end"},null,-1)),an=C({__name:"newIndex",setup(s){const{t:e}=E(),o=[2,6,7],a=[1,6],i=[{text:e("views.newHome.roadmap.t2")},{text:e("views.newHome.roadmap.t3")},{text:e("views.newHome.roadmap.t4")},{text:e("views.newHome.roadmap.t12")},{text:""},{text:e("views.newHome.roadmap.t13")},{text:""},{text:e("views.newHome.roadmap.t14")},{text:e("views.newHome.roadmap.t15")}],r=[{text:""},{text:e("views.newHome.roadmap.t16")},{text:""},{text:""},{text:""},{text:""},{text:e("views.newHome.roadmap.t17")}];return(_,w)=>(m(),h(R,null,[t("div",Lo,c(n(e)("views.newHome.roadmap.t1")),1),t("div",zo,[t("div",Wo,[(m(),h(R,null,q(i,(u,A)=>t("div",{key:A,class:$(["item",{text_color:A==5,text_empty_left:A==4,text_empty_right:A==6,text_position:A==7,text_last:A==8}])},c(u.text),3)),64))]),t("div",Jo,[(m(),h(R,null,q(9,u=>t("div",{class:$(["for_item",{hiddens:u==6}]),key:u},[t("div",{class:$(["line",{line_color:u==8}])},null,2),t("div",{class:$(["s_circle",{hiddens:u==6,color:u==8}])},null,2),t("div",{class:$(["b_circle",{hiddens:u==6,colors:u==8}])},null,2)],2)),64)),t("img",{class:"arrow",src:n(ye),alt:""},null,8,jo)]),t("div",Xo,[(m(),h(R,null,q(7,u=>t("div",{class:$(["for_item",{hiddens:!o.includes(u)}]),key:u},[t("div",{class:$(["line",{line_hiddens:u!=6}])},null,2),Zo,en],2)),64)),t("div",tn,[(m(),h(R,null,q(r,(u,A)=>t("div",{class:$(["last_item",{hiddens:!a.includes(A)}]),key:A},null,2)),64))]),t("img",{class:"arrow",src:n(ye),alt:""},null,8,sn)]),t("div",on,[(m(),h(R,null,q(r,(u,A)=>t("div",{class:$(["text_item",{have_text:a.includes(A)}]),key:A},c(u.text),3)),64))])]),nn],64))}});const cn=I(an,[["__scopeId","data-v-d17fcaf9"]]),M="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAANpJREFUaEPtl1sOgDAIBOX+h64xUWMwDdClUXT9LVZ2Bl+yFD+keP8LAzxtkAZoACTAEQIBwqfTAIwQ3IAGegBba+26JiJTYE3ZdGu8bADduDaUbSLdQNkAVuOzTKQZYIDB98F/DVgjo5820XqvkGED0Yai9QxgEYgSjdZb1z/W3SOU3UDWfgxwqgx+bdLATq47QlmEvDfj6PUYwEvYqqOBg1CPRPaf1KgR3cftHmAAC61z3QvyewacgF5T5v4Wek3HqhEGeNoMDdAASIAjBAKET6cBGCG4QXkDK6ZOoDGKxhdzAAAAAElFTkSuQmCC",F="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAPVJREFUaEPtV0kSwyAMg/8/mpzSA4kHIcvt0FGueJNkm9Db4V8/vP5mAL9W0ApYgSQDbqEkgWl3K5CmMBng/xQYY4w3UnrvXwWL1vEoCnVMKr90R+swgCWVpAGtwJ0vCnCfq2eCzRcOJhuQJLyx+QyAZXz2kyugShABZAue48GXkyqhekkYALtWVYrCCmRnQlUwPQMGEPzlsi348WP3+G5L7NqjddEzsNtSj94VvS8MAL2YrEAwFLIWQpVQvyMMAP3bVDOfvgdWe3re+8cBWAFUnctnQFUYGscAUKaq7KxAFbNoXCuAMlVlZwWqmEXjWgGUqSq7C7zsoDErZDNAAAAAAElFTkSuQmCC",ln={class:"faq"},dn={class:"tittle"},rn=["src"],_n=["src"],un=["src"],An=["src"],vn=["src"],pn=C({__name:"index",setup(s){const{t:e}=E(),o=B([]),a=B([]),i=B([]),r=B([]),_=B([]),w=()=>{window.open("https://docs.artsarena.io")};return(u,A)=>(m(),h("div",ln,[t("div",dn,c(n(e)("views.newHome.faq.title")),1),l(n(H),{activeKey:o.value,"onUpdate:activeKey":A[0]||(A[0]=d=>o.value=d)},{expandIcon:f(d=>[t("img",{class:"img",src:d!=null&&d.isActive?n(M):n(F),alt:""},null,8,rn)]),default:f(()=>[l(n(K),{key:"1",header:n(e)("views.newHome.faq.one.t1")},{default:f(()=>[t("p",null," · "+c(n(e)("views.newHome.faq.one.t2")),1),t("p",null," · "+c(n(e)("views.newHome.faq.one.t3")),1)]),_:1},8,["header"])]),_:1},8,["activeKey"]),l(n(H),{activeKey:a.value,"onUpdate:activeKey":A[1]||(A[1]=d=>a.value=d)},{expandIcon:f(d=>[t("img",{class:"img",src:d!=null&&d.isActive?n(M):n(F),alt:""},null,8,_n)]),default:f(()=>[l(n(K),{key:"2",header:n(e)("views.newHome.faq.two.t1")},{default:f(()=>[t("p",null," · "+c(n(e)("views.newHome.faq.two.t2")),1),t("p",null," · "+c(n(e)("views.newHome.faq.two.t3")),1),t("p",null," · "+c(n(e)("views.newHome.faq.two.t4")),1)]),_:1},8,["header"])]),_:1},8,["activeKey"]),l(n(H),{activeKey:i.value,"onUpdate:activeKey":A[2]||(A[2]=d=>i.value=d)},{expandIcon:f(d=>[t("img",{class:"img",src:d!=null&&d.isActive?n(M):n(F),alt:""},null,8,un)]),default:f(()=>[l(n(K),{key:"3",header:n(e)("views.newHome.faq.three.t1")},{default:f(()=>[t("p",null," · "+c(n(e)("views.newHome.faq.three.t2")),1)]),_:1},8,["header"])]),_:1},8,["activeKey"]),l(n(H),{activeKey:r.value,"onUpdate:activeKey":A[3]||(A[3]=d=>r.value=d)},{expandIcon:f(d=>[t("img",{class:"img",src:d!=null&&d.isActive?n(M):n(F),alt:""},null,8,An)]),default:f(()=>[l(n(K),{key:"4",header:n(e)("views.newHome.faq.four.t1")},{default:f(()=>[t("p",null," · "+c(n(e)("views.newHome.faq.four.t2")),1),t("p",null," · "+c(n(e)("views.newHome.faq.four.t3")),1)]),_:1},8,["header"])]),_:1},8,["activeKey"]),l(n(H),{activeKey:_.value,"onUpdate:activeKey":A[4]||(A[4]=d=>_.value=d)},{expandIcon:f(d=>[t("img",{class:"img",src:d!=null&&d.isActive?n(M):n(F),alt:""},null,8,vn)]),default:f(()=>[l(n(K),{key:"5",header:n(e)("views.newHome.faq.five.t1")},{default:f(()=>[t("p",null," · "+c(n(e)("views.newHome.faq.five.t2")),1)]),_:1},8,["header"])]),_:1},8,["activeKey"]),t("div",{class:"goMore",onClick:w},c(n(e)("views.newHome.faq.more")),1)]))}});const mn=I(pn,[["__scopeId","data-v-a9ddefed"]]),hn={class:"home"},gn=C({__name:"home",setup(s){return(e,o)=>(m(),h("div",hn,[l(Ut),l(Ds),l(Yo),l(cn),l(mn),l(Tt)]))}});const Dn=I(gn,[["__scopeId","data-v-b9b99038"]]);export{Dn as default};
