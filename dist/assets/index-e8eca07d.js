import{an as W,a_ as Y,b1 as at,a$ as $,ag as l,b0 as J,b2 as ct,aj as it,ad as X,bx as lt,au as p,av as w,aH as t,b5 as e,ah as s,b6 as V,bd as rt,a4 as h,aF as M,b8 as ut,b9 as dt,ba as vt,ck as q,aY as _t,b7 as pt,aE as ft,bA as x,bC as B,bb as mt,at as L,bi as xt,bf as wt,$ as ht,bz as bt,bc as I}from"./index-1e3b5e9c.js";import{B as At}from"./battle-pool-contract-service-be03c21e.js";import{T as gt}from"./publicUnit-82a6e2b0.js";import{N as yt}from"./index-1a12df55.js";import{R as Bt,C as Nt}from"./index-1f6fe659.js";import{T as Ct,a as kt,V as St}from"./VoteRecords-f870d803.js";import{U as It}from"./user-api-service-a6602b04.js";import{i as Et}from"./isMobile-40ed9066.js";import"./transaction-api-service-8b388dbb.js";import"./utils-518c8eb5.js";import"./contract-data-service-bee1e717.js";import"./index-f42bfe17.js";import"./firstNotUndefined-748ee901.js";import"./Col-006999ba.js";import"./responsiveObserve-f3a612e5.js";import"./useFlexGapSupport-f4e16cef.js";import"./match-api-service-85ee51bf.js";import"./match-data-ext-5e1df082.js";import"./nft-data-00f9cd4d.js";import"./match-service-ebe62e39.js";import"./match-utils-793d0e6d.js";import"./erc721-service-bd0ec81e.js";import"./battle-contract-service-bdced59b.js";import"./challenge-api-service-8347c7e6.js";import"./constants-2bfeaeae.js";import"./TimeFormatting-2526bf3a.js";import"./index-1a933474.js";import"./RightOutlined-8341334e.js";import"./AntdIcon-17d0cbb0.js";import"./index.vue_vue_type_script_setup_true_lang-d51c3f46.js";import"./user-data-72a94b9b.js";const Ut="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABMBJREFUWEftlltsFGUUx///2S07s0WgBEWNkUtINETlAWOMQoV2Z0u7s6sJUqpEnzAGMShEEzSahqjReImX8GC8xMSACbdwmdmW7iy0QBM1wQQ0Jl6DlSgvYrGhO9Pu7hyZkjXbZdvdtQ/ExO9x5v995/f9z8k5H3GVF69yfPw3AXozrTflFCUOj9MrOSji9Ubru05OpKvZATsTv5uULgFGAQxVAAgBmFOvanPu4R6nnLYmgMOjxpJgHr0g+maFzq29k19lJwPw9YE8TuUQXLBKPTBAQkr1VQMcdRO35MU7DuDUoKrF27nHd2DSVQwQRDYJKK/omvlZ8aaqALqdB+YHkDtByICrKtE4zUzxIT1OW6Mi3CLgQE7Lv9jG7rHUpEcSd4jnnfYdCCC7leCKfnXp4m3c5hX2VwRIDSdupOKdAHEBIbdJZ/qv4uD9krjGcb3fAPiFtpiCvZGw9WQpQBBZBeAPFHREwtbeqgB6h+JzcnXeMYAMZtm4cob5R6nnvjtB5M4I+Cgh6wDkdc2KlQK0agd+sR1jJ4hbddVaWhHAlshMjKhHIZglnrI8Wn/o94kSbjvGpwAeATAswP1RzTpSDqBnJHab4vFrUFp1Ndnja8qmoEei9XSnpQjM88DlLZp5plLB2U5sIdSR88UpKq4B34ExqIxxSIhAwaUrALqkNVTnBiwASzyFjS0h87tKwSf6XwDwwIWFS6Td+BMi0qlr1twrHOiVFcGcM30fFDRKzlsZnd516t8GL07BOADH+FCABbpmRcYBdEqnssw9uQNgHEJdD5tfTCW4v9d24q8BstlTR2e3MDU89i1jnAbZrWvm1nEAtmO8AOB5AG26ZvVNPbjx6qWifJaCdZGwtcs/z5R4WHVlCMKH9bC5exxAyjHOEtiha9ZzUw8+dvNnioP7Z6YyiXtJr19hflGz2v1ziQPxnyBejx5ObpwKgO0ar0OwGcJ1hVsWzrMzsaehsFNXrYYr+kDKMdYTeL+0U9UCk3aNN0XwFAUPFXe7fwAcY+elGNdHNKu5bCOy3dgbEG4iFSOiHrJrCZ5yjbco2ARhhx4295XbazvG9wD3FwqwbCNKObGPCHZQoEfC1ufVQNhu/G0INorI2mjY2l82uN9ZXXWQgvZJZ8FuWRNoGHF2UdAkinefHur6ZjKIVMZ4l+QGemiP1JsHJtKmHKOZQFqBN79Z6xoom4LCx92yZtosN2MRvF1hflmhYksPtzPx90B5HArb9ZB5cDJQO2NsBbFF16zrinUTjmN/HijutDSAueIpy0qHUTpjbBfiMY94sEW1zEqpst34PghCumYaVQH4IutCrCEU4nEB6I1mG1fN7PlTBEw7se0g15NcHVFNf25UXLZj/ArgA12zXq4awBceHm65IaDU9UNwEcQ7IBIQtIKyWleTycs1gEEI0g3auS/LvRPHXtEMnCWkKaIle2sC8MV2xrgZxMcAVgD4UcANUc08NvbPMV4C0AFgEYCLEPSJgnSQTDeFzG8vT1flEwGXz1bPLSwFrPgkK6b1B1bxe6743xGnbZ4gEBGIDqAJwLUEBgWoA+AJmChA1+xAxQSXCPw6sYfbljDAuwC6zNYlIzP2ny93Tk0O1ApSjf5/gL8BxAAfP4xFndAAAAAASUVORK5CYII=",j=b=>(dt("data-v-423ed994"),b=b(),vt(),b),Tt={class:"accountAssets"},Dt={class:"title first-letter default-family"},Ft={class:"balance"},Mt={class:"text-sm font-primary token"},jt={class:"text-sm text-white money"},Ht={class:"earn"},Pt={class:"earn_info mr-[14px]"},Gt={class:"earn_title"},Rt={class:"earn_content"},Zt={class:"earn_info"},Qt={class:"earn_title"},zt={class:"earn_content"},Ot=j(()=>t("div",{class:"space-line"},null,-1)),Kt={class:"space-y-2 contribute-point"},Vt={class:"label-title"},qt={class:"flex justify-between space-x-4"},Wt={class:"w-1/4 py-5 text-center tbox"},Yt={class:"text-xl text-white t_box_num"},$t={class:"text-sm f-1 font-pf t_box_text"},Jt={class:"w-1/4 py-5 text-center tbox"},Xt={class:"text-xl text-white t_box_num"},Lt={class:"text-sm f-1 font-pf t_box_text"},te={class:"w-1/4 py-5 text-center tbox"},ee={class:"text-xl text-white t_box_num"},se={class:"text-sm f-1 font-pf t_box_text"},oe={class:"w-1/4 py-5 text-center tbox"},ne={class:"text-xl text-white t_box_num"},ae={class:"text-sm f-1 font-pf t_box_text"},ce=j(()=>t("div",{class:"space-line"},null,-1)),ie={class:"space-y-2 nft-list"},le={class:"flex items-center justify-between label-title"},re=j(()=>t("span",{class:"text-base font-primary"}," NFTS ",-1)),ue=["src"],de=["onClick"],ve={key:0,class:"status_stop"},_e={class:"text-[#666] text-center text-lg"},pe={key:1,class:"content_box scrollBar-y empty_data"},fe={class:"btn-wrap btn-shadow"},me=W({__name:"AccountAssets",props:{nowTime:{type:Number}},setup(b){const{t:o}=Y(),[r]=[at()],u=$(),N=l(0),d=l([]),A=new ut,f=l(!1),g=l(!1),a=l(),C=l(),y=l(18),E=l(!0),U=l(0),{open:T}=J(),v=l(!0),{chain:n}=ct(),F=b;it(()=>F.nowTime,()=>{m()}),X(async()=>{if(f.value=!0,!u.address){f.value=!1,T();return}At.connect().then(c=>{c.getUserBalance(u.address).then(i=>{N.value=i})}),m(),tt()});const m=()=>{A.getMyBurnAddressNft(u.address,{start:0,length:y.value,accountType:"BURN",chainId:n==null?void 0:n.id}).then(c=>{d.value=c,f.value=!1,console.log(d.value)}).catch(c=>{f.value=!1,console.error(c)})},tt=async()=>{a.value=await A.getIntegral(u.address,{chainId:n==null?void 0:n.id})},H=lt.throttle(async c=>{const i=c.target;if(i.scrollTop+i.clientHeight>=i.scrollHeight&&E.value&&v.value){g.value=!0,v.value=!1;const S=await A.getMyBurnAddressNft(u.address,{start:y.value+y.value*U.value,length:y.value,accountType:"BURN",chainId:n==null?void 0:n.id});if(U.value+=1,S.length==0){E.value=!1,g.value=!1;return}d.value=d.value.concat(S),g.value=!1,v.value=!0}},300),et=c=>{const{nftAddress:i,nftTokenId:k}=c;r.push({path:"/detail/index",query:{nft_address:i,token_id:k}})},st=c=>{if(c=="syncing")return o("views.account.t18");if(c=="in_battle")return o("views.account.t17")},ot=()=>{r.push({path:"/account/listing"})};return(c,i)=>{var k,S,P,G,R,Z,Q,z,O,K;return p(),w("div",Tt,[t("section",Dt,e(s(o)("views.account.t1")),1),t("section",Ft,[t("div",Mt,e(s(gt)),1),t("div",jt,e(N.value),1)]),t("section",Ht,[t("div",Pt,[t("div",Gt,e(s(o)("views.account.content.t40")),1),t("div",Rt,e(s(q)(((k=a.value)==null?void 0:k.todayProfit)=="0"?(S=a.value)==null?void 0:S.todayProfit:"+"+(((P=a.value)==null?void 0:P.todayProfit)||0),6)),1)]),t("div",Zt,[t("div",Qt,e(s(o)("views.account.content.t41")),1),t("div",zt,e(s(q)(((G=a.value)==null?void 0:G.totalProfit)=="0"?(R=a.value)==null?void 0:R.totalProfit:"+"+(((Z=a.value)==null?void 0:Z.totalProfit)||0),6)),1)])]),Ot,V("",!0),t("section",Kt,[t("p",Vt,e(s(o)("views.account.t5")),1),t("div",qt,[t("div",Wt,[t("p",Yt,e(((Q=a.value)==null?void 0:Q.vote)||0),1),t("p",$t,e(s(o)("views.account.t6")),1)]),t("div",Jt,[t("p",Xt,e(((z=a.value)==null?void 0:z.battle)||0),1),t("p",Lt,e(s(o)("views.account.t15")),1)]),t("div",te,[t("p",ee,e(((O=a.value)==null?void 0:O.trade)||0),1),t("p",se,e(s(o)("views.account.t7")),1)]),t("div",oe,[t("p",ne,e(((K=a.value)==null?void 0:K.invite)||0),1),t("p",ae,e(s(o)("views.account.t8")),1)])])]),ce,t("section",ie,[t("div",le,[re,t("div",{class:"btn-nft-sell",onClick:ot},[t("img",{src:s(Ut),alt:""},null,8,ue),rt(" NFT "+e(s(o)("views.account.t9")),1)])]),h(s(mt),{spinning:f.value},{default:M(()=>{var D;return[((D=d.value)==null?void 0:D.length)>0?(p(),w("div",{key:0,class:"content_box scrollBar-y",onScroll:i[0]||(i[0]=(..._)=>s(H)&&s(H)(..._)),ref_key:"walletNftEle",ref:C},[h(s(Bt),{gutter:[10,6]},{default:M(()=>[(p(!0),w(_t,null,pt(d.value,(_,nt)=>(p(),ft(s(Nt),{md:8,xs:12,key:nt},{default:M(()=>[t("div",{class:"relative w-full h-full cursor-pointer",onClick:Ie=>et(_)},[h(yt,{img:_.imageUri,name:_.metaName,koNum:_.koScore,color:"#000"},null,8,["img","name","koNum"]),_.stakeStatus!=="staked"?(p(),w("div",ve,e(st(_.stakeStatus)),1)):V("",!0)],8,de)]),_:2},1024))),128))]),_:1}),x(t("div",_e,"loading...",512),[[B,g.value]])],544)):(p(),w("div",pe,e(s(o)("views.account.empty.t7")),1))]}),_:1},8,["spinning"]),t("div",fe,[t("div",{class:"cursor-pointer btn deposit",onClick:i[1]||(i[1]=D=>c.$router.push("/account/amountMange?type=1"))},e(s(o)("views.account.t10")),1),t("div",{class:"cursor-pointer btn extract",onClick:i[2]||(i[2]=D=>c.$router.push("/account/amountMange?type=2"))},e(s(o)("views.account.t11")),1)])])])}}});const xe=L(me,[["__scopeId","data-v-423ed994"]]),we={class:"m_menu"},he={class:"m_menu_tab"},be={class:"flex space-x-5 account"},Ae={class:"account-assets-wrap account-item-wrap"},ge={class:"records-wrap account-item-wrap"},ye={class:"flex bg-black tabs"},Be={class:"relative font-pf"},Ne={class:"relative font-pf"},Ce={class:"relative font-pf"},ke={class:"mt-6 tab-content"},Se=W({__name:"index",setup(b){const{t:o}=Y(),r=xt({current:1}),u=$(),N=l(!1),{open:d}=J(),A=l(new Date().getTime()),[f]=[wt()],{user_address:g}=f.query,a=l(1),C=l(!Et()),y=ht();X(async()=>{if(console.log(C.value),!g&&!u.address){d();return}new It().obtainAssetOnChain(u.address,y)});const E=v=>{N.value=v},U=()=>{A.value=new Date().getTime()},T=v=>{a.value=v};return(v,n)=>{const F=bt("loading");return p(),w("div",we,[t("div",he,[t("div",{class:I(["m_tab",{active:a.value==1}]),onClick:n[0]||(n[0]=m=>T(1))},e(s(o)("views.account.t19")),3),t("div",{class:I(["m_tab",{active:a.value==2}]),onClick:n[1]||(n[1]=m=>T(2))},e(s(o)("views.account.t20")),3)]),t("div",be,[x(t("section",Ae,[h(xe,{nowTime:A.value},null,8,["nowTime"])],512),[[B,a.value==1||C.value]]),x(t("section",ge,[t("div",ye,[t("div",{class:I(["flex items-center justify-center w-1/3 h-full text-xs font-medium cursor-pointer t1 f-1",r.current==1?"t1-active font-primary":""]),onClick:n[2]||(n[2]=m=>r.current=1)},[t("div",Be,e(s(o)("views.account.tab1"))+" ",1)],2),t("div",{class:I(["flex items-center justify-center w-1/3 h-full text-xs font-medium cursor-pointer t1 f-1",r.current==2?"t1-active font-primary":""]),style:{margin:"0 1px"},onClick:n[3]||(n[3]=m=>r.current=2)},[t("div",Ne,e(s(o)("views.account.tab2"))+" ",1)],2),t("div",{class:I(["flex items-center justify-center w-1/3 h-full text-xs font-medium cursor-pointer t1 f-1",r.current==3?"t1-active font-primary":""]),onClick:n[4]||(n[4]=m=>r.current=3)},[t("div",Ce,e(s(o)("views.account.tab3"))+" ",1)],2)]),x((p(),w("div",ke,[x(t("div",null,[h(Ct,{onGetDataDone:E,onGetBrunNft:U})],512),[[B,r.current===1]]),x(t("div",null,[h(kt)],512),[[B,r.current===2]]),x(t("div",null,[h(St)],512),[[B,r.current===3]])])),[[F,N.value]])],512),[[B,a.value==2||C.value]])])])}}});const is=L(Se,[["__scopeId","data-v-d349c5e5"]]);export{is as default};