import{a4 as d,an as P,a_ as I,bf as A,b1 as E,ag as u,ad as j,au as k,av as F,aH as o,b5 as i,ah as s,aF as _,b9 as T,ba as B,be as M,bk as x,bd as g,at as q}from"./index-1e3b5e9c.js";import{M as V}from"./match-api-service-85ee51bf.js";import{F as H}from"./file-api-service-7551e511.js";import{D as R}from"./DownloadOutlined-6cd35f11.js";import{A as U}from"./AntdIcon-17d0cbb0.js";import"./match-data-ext-5e1df082.js";import"./nft-data-00f9cd4d.js";function y(a){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},c=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(c=c.concat(Object.getOwnPropertySymbols(n).filter(function(l){return Object.getOwnPropertyDescriptor(n,l).enumerable}))),c.forEach(function(l){$(a,l,n[l])})}return a}function $(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}var h=function(e,n){var c=y({},e,n.attrs);return d(U,y({},c,{icon:R}),null)};h.displayName="DownloadOutlined";h.inheritAttrs=!1;const z=h,G=a=>(T("data-v-79c3db1a"),a=a(),B(),a),J={class:"space-y-2 setAvatar default-family"},L={class:"f-1 text-[20px] mb-[20px]"},Q={class:"flex p-4 space-x-8 content"},W={class:"relative flex-shrink-0",style:{width:"40%"}},X=G(()=>o("p",{class:"absolute bottom-0 right-0 w-full pr-[12px] pb-[4px] text-[30px] text-right text-white c1 font-f"}," burnyou.io ",-1)),Y={class:"flex flex-col justify-between"},Z={class:"space-y-10"},K={class:"space-y-3"},ee={class:"text-base text-white"},te={class:"space-y-3"},ae={class:"text-base text-white"},ne=P({__name:"setAvavtar",setup(a){const{t:e}=I(),[n,c]=[A(),E()],l=new V,r=u(),v=u(),m=u(0),N=n.query.match_id;u(),j(()=>{S()});const S=async()=>{const t=await l.getMatchDataExtByMatchId(N);t.voteArenaCount>t.voteChallengeCount?(r.value=t.arenaCreatorNFTData,v.value=t.challengerNFTData,t.challengerNftSoldPrice>t.challengerNftSellPrice&&(m.value=t.challengerNftSoldPrice-t.challengerNftSellPrice)):(r.value=t.challengerNFTData,v.value=t.arenaCreatorNFTData,t.arenaCreatorNftSoldPrice>t.arenaCreatorNftSellPrice&&(m.value=t.arenaCreatorNftSoldPrice-t.arenaCreatorNftSellPrice)),console.log(r.value)},C=()=>{window.open("https://twitter.com/settings/profile/")},D=()=>{c.push({path:"/extendExpense/submitAccount",query:{match_id:n.query.match_id}})},O=()=>{var f,p;const t=new H;window.open(t.downloadNFTHeaderImageUrl((f=r.value)==null?void 0:f.nftAddress,(p=r.value)==null?void 0:p.nftTokenId))};return(t,f)=>{var p,b,w;return k(),F("div",J,[o("p",L,i(s(e)("views.extendExpense.index.t1",{nft:((p=r.value)==null?void 0:p.name)+" #"+((b=r.value)==null?void 0:b.nftTokenId)})),1),o("div",Q,[o("div",W,[d(s(M),{src:(w=r.value)==null?void 0:w.cacheImageUrl},null,8,["src"]),X]),o("div",Y,[o("section",Z,[o("div",K,[o("p",ee,i(s(e)("views.extendExpense.index.t2")),1),d(s(x),{style:{border:"1px solid #bbf74c"},onClick:O,class:"flex items-center justify-center w-[300px] h-[50px] border-0 rounded-none font-primary"},{default:_(()=>[d(s(z)),o("span",null,i(s(e)("views.extendExpense.index.t11")),1)]),_:1})]),o("div",te,[o("p",ae,i(s(e)("views.extendExpense.index.t3")),1),d(s(x),{style:{border:"1px solid #bbf74c"},onClick:C,class:"flex items-center justify-center w-[300px] h-[50px] border-0 rounded-none font-primary"},{default:_(()=>[g(i(s(e)("views.extendExpense.index.t4")),1)]),_:1})])]),d(s(x),{class:"h-[55px] w-[475px] flex items-center justify-center px-32 font-semibold border-0 rounded-none bg-primary font-f",style:{color:"#000"},onClick:D},{default:_(()=>[g(i(s(e)("views.extendExpense.index.t5")),1)]),_:1})])])])}}});const pe=q(ne,[["__scopeId","data-v-79c3db1a"]]);export{pe as default};