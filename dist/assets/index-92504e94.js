import{d as m,ah as k,u as C,r as I,m as S,o as B,n as M,b as h,c as f,h as v,w as R,f as i,e as s,t as l,F as T,k as N,aB as W,x as j,B as D,p as P,j as A,l as $}from"./index-fb5ecef5.js";import{P as F}from"./PlusOutlined-95846dc0.js";import{C as L}from"./index-7ed4cda6.js";import{M as U}from"./match-api-service-5aecafbf.js";import{U as V}from"./user-service-9c9f5e77.js";import{a as E}from"./axios-4ad483c4.js";import{M as z}from"./enums-0c352bd8.js";import"./AntdIcon-d84a78a7.js";import"./Checkbox-36128e33.js";import"./match-data-01707e11.js";import"./nft-data-9757ad81.js";const g=o=>(P("data-v-31f755bf"),o=o(),A(),o),K={class:"wipeOut"},Y={class:"arena-list"},q={class:"img-wrap"},G={class:"img-wrap"},H={class:"absolute top-0 left-0 flex items-center justify-between w-full pr-2"},J=g(()=>s("div",{class:"tag"},"23",-1)),Q=["src","onClick"],X=["onClick"],Z={class:"flex items-center justify-between text-[12px]"},tt={class:"text-white"},st=g(()=>s("span",{class:"font-primary"},"K.O.18",-1)),et={class:"flex items-center justify-between"},at={class:"text-white"},nt={class:"text-[17px]"},ot=g(()=>s("span",{class:"text-[13px]"}," eth ",-1)),ct={class:"p-1 px-2 bg-black f-1 text-[12px]"},rt=m({__name:"WipeOut",props:{type:{},list:{}},setup(o){var u;const p=k(),{t:n}=C(),_=o;console.log(_.list);const d=I(),x=S({width:(u=d.value)==null?void 0:u.clientWidth});function c(){p.push("/ring/challengeRing")}function r(e){const a=`/fightInfo?type=${_.type==1?"team":"fight"}&status=noOpponent&matchId=${e.matchId}`;p.push(a)}return B(()=>{M(()=>{W(d.value,()=>{var e;x.width=(e=d.value)==null?void 0:e.clientWidth})})}),(e,a)=>(h(),f("div",K,[v(i(D),{class:"text-base font-bold",style:{color:"#000"},onClick:a[0]||(a[0]=t=>c())},{default:R(()=>[j(l(i(n)("views.ring.btn")),1)]),_:1}),s("div",Y,[s("div",{class:"cell add-arena",onClick:a[1]||(a[1]=t=>e.$router.push("/ring/create"))},[s("div",q,[v(i(F),{class:"icon-plus"})]),s("p",null,l(i(n)("views.ring.boxText")),1)]),(h(!0),f(T,null,N(e.list,t=>{var b,w,y;return h(),f("div",{key:t==null?void 0:t.matchId,class:"cell"},[s("div",G,[s("div",H,[J,v(i(L))]),s("img",{src:(b=t==null?void 0:t.nft)==null?void 0:b.cacheImageUrl,alt:"img",onClick:O=>r(t)},null,8,Q)]),s("div",{class:"mt-3 space-y-1 text-xs font-autom",onClick:O=>r(t)},[s("p",Z,[s("span",tt,l((w=t==null?void 0:t.nft)==null?void 0:w.name)+" # "+l((y=t==null?void 0:t.nft)==null?void 0:y.nftTokenId),1),st]),s("div",et,[s("span",at,[s("span",nt,l(t==null?void 0:t.arenaCreatorNftSellPrice),1),ot]),s("div",ct,l(i(n)("views.ring.boxText2"))+" 0 ",1)])],8,X)])}),128))])]))}});const it=$(rt,[["__scopeId","data-v-31f755bf"]]),lt={class:"container space-y-8 rings"},dt=m({__name:"index",setup(o){k(),C();const p=S({current:1}),n=I([]),_=new U,d=new V("");async function x(){try{const c=E(),r=await _.getMatchDataListByStatus(c,z.READY,1,10),u=await Promise.all((r||[]).map(e=>d.getNFTData(e.arenaCreatorNftAddress,e.arenaCreatorTokenId)));n.value=u.map((e,a)=>{const t=r[a]||{};return{nft:e,...t}}),console.log("list:",n.value)}catch(c){console.log(c)}}return x(),(c,r)=>(h(),f("div",lt,[s("div",null,[v(it,{type:p.current,list:n.value},null,8,["type","list"])])]))}});const mt=$(dt,[["__scopeId","data-v-2b22b6e7"]]);export{mt as default};
