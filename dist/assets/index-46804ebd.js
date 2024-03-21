import{an as U,a_ as E,ag as g,ad as V,cX as it,au as r,av as p,aH as t,b5 as a,ah as n,bd as I,b9 as L,ba as P,cY as ct,bq as j,at as D,bf as F,b1 as K,aY as G,b7 as ot,aE as X,b6 as w,bc as y,a4 as _,be as Q,aF as O,a$ as dt,bk as $t,b2 as It,$ as Nt,b3 as Y,bp as kt,b8 as Dt,bb as Ct}from"./index-1e3b5e9c.js";import{N as lt}from"./nft-data-00f9cd4d.js";import{T as _t}from"./TimeFormatting-2526bf3a.js";import{R as rt}from"./RightOutlined-8341334e.js";import{T as J}from"./publicUnit-82a6e2b0.js";import{C as Ut}from"./collection-api-service-816a6e5a.js";import{C as Et}from"./contract-api-service-fb5a844b.js";import{N as Bt}from"./nft-order-api-service-1c3230f8.js";import{W as Tt}from"./webutlis-api-service-ba71ffac.js";import{M as ft}from"./bignumber-c053b17e.js";import{B as Wt}from"./index-dd9a6e92.js";import{N as Qt}from"./nft-order-contract-service-5bd42263.js";import{F as Ot}from"./file-api-service-7551e511.js";import{A as Vt}from"./index-733f40ef.js";import{T as Yt}from"./index-f42bfe17.js";import{C as Ft,a as Kt}from"./index-2dfa979d.js";import"./AntdIcon-17d0cbb0.js";import"./collection-data-v2-15891f6d.js";import"./enums-1cf4aa58.js";import"./utils-518c8eb5.js";import"./close-ecff6b21.js";import"./erc721-service-bd0ec81e.js";import"./transaction-api-service-8b388dbb.js";import"./contract-data-service-bee1e717.js";import"./firstNotUndefined-748ee901.js";import"./collapseMotion-84702878.js";const ut="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAANxJREFUOE/dkk8OwUAYxd9XiSgr17BxBRJloYmVYziAVYkrOAU7aRdUgr2VhTtYNzQinSdtjFB/mliazSST9/vmvZkn+HFJFueHdi2tsUx3fQcXp3b3UUAaFzEYCBABGAFSAFSZRL9Z9KYJeJvqADgAokQQAAxIBJbpDpfnTgWMJlTcEFi/gJbp1tO2NASFAQVVkrtMMIFUNAHYa5jeSue9Z9RW0zf6oe0wZ3jN/Gw7P9qD2E2r5Cb7U8Z3VrX1fwBFMCax/9YkpbB/epxYnG7OuwHx/+nzzK5+cnAFm2aHD47a+94AAAAASUVORK5CYII=",vt=c=>(L("data-v-7c49d66c"),c=c(),P(),c),zt={class:"descript default-family"},Zt={class:"descript_title"},qt={class:"descript_tip"},Mt={class:"descript_title"},Jt={class:"descript_content"},Lt={class:"descript_content_title"},Pt={class:"descript_content_text"},jt={class:"descript_content"},Gt={class:"descript_content_title"},Xt={class:"descript_content_text"},Ht={class:"descript_content"},te={class:"descript_content_title"},ee={class:"descript_content_text"},se=vt(()=>t("div",{class:"line"},null,-1)),ae={class:"descript_content"},ne={class:"descript_content_title"},ie={class:"descript_content_text link_color"},ce=["href"],oe=["src"],de={class:"descript_content"},le={class:"descript_content_title"},_e=vt(()=>t("div",{class:"descript_content_text"},"0%",-1)),re=U({__name:"index",props:{nft_data:{type:lt,default:()=>{}}},setup(c){const{t:o}=E(),h=g(),b=g(),u=g(""),d=c;return V(()=>{var i,s,l;d.nft_data&&(b.value=JSON.parse((i=d.nft_data)==null?void 0:i.metaData),u.value=it((s=d.nft_data)==null?void 0:s.chainId,(l=d.nft_data)==null?void 0:l.nftAddress))}),(i,s)=>{var l,e,A,f,v,x;return r(),p("div",zt,[t("div",Zt,a(n(o)("views.detail.descript.t1")),1),t("div",qt,a((l=b.value)==null?void 0:l.description),1),t("div",Mt,a(n(o)("views.detail.descript.t2")),1),t("div",Jt,[t("div",Lt,a(n(o)("views.detail.descript.t3")),1),t("div",Pt,a((e=i.$props.nft_data)==null?void 0:e.nftTokenId),1)]),t("div",jt,[t("div",Gt,a(n(o)("views.detail.descript.t4")),1),t("div",Xt,a(n(ct)((A=i.$props.nft_data)==null?void 0:A.chainId))+" "+a((f=h.value)==null?void 0:f.chainId),1)]),t("div",Ht,[t("div",te,a(n(o)("views.detail.descript.t5")),1),t("div",ee,a((v=i.$props.nft_data)==null?void 0:v.nftType),1)]),se,t("div",ae,[t("div",ne,a(n(o)("views.detail.descript.t6")),1),t("div",ie,[t("a",{href:u.value,target:"_blank",class:"flex"},[I(a(n(j)((x=i.$props.nft_data)==null?void 0:x.nftAddress))+" ",1),t("img",{src:n(ut),alt:""},null,8,oe)],8,ce)])]),t("div",de,[t("div",le,a(n(o)("views.detail.descript.t7")),1),_e])])}}});const fe=D(re,[["__scopeId","data-v-7c49d66c"]]);const ue={},ve={class:"empty"};function pe(c,o){return r(),p("div",ve," Have No Data ")}const pt=D(ue,[["render",pe],["__scopeId","data-v-9c13dfeb"]]),he={class:"overflow-y-auto battles wrap scrollBar-y"},Ae={class:"battle_item_time"},me={class:"battle_item_time_status"},be={class:"battle_item_arena"},ge={class:"relative battle_item_arena_nft"},ye={key:0,class:"absolute burn"},we={class:"battle_item_arena_info"},xe={class:"battle_item_arena_info_symbol omit"},Re={class:"battle_item_challenger"},Se={class:"battle_item_challenger_info"},$e={class:"battle_item_challenger_info_symbol omit"},Ie={class:"relative battle_item_challenger_nft"},Ne={key:0,class:"absolute burn"},ke=["onClick"],De=U({__name:"index",props:{nftRecord:{type:Object,default:()=>{}}},setup(c){const{t:o}=E(),[h,b]=[F(),K()],u=c,d=s=>{b.push({path:"/fightInfo/index",query:{match_id:s}})};V(async()=>{console.log(u.nftRecord)});const i=s=>({status:s.leftWin=="0"?"VS":s.leftWin=="1"?"K.O.":"Burn By",battleResLeft:s.leftWin=="1"?!0:s.leftWin=="-1"?!1:"1",battleResRight:s.rightWin=="1"?!0:s.rightWin=="-1"?!1:"1",battleStatus:s.leftWin=="0",showData:s.leftWin!="0",colorRed:s.leftWin!="0",battleRes:!(s.matchStatus=="determined"||s.matchStatus=="started"&&s.matchEndTime>new Date().getTime()),isDetermined:s.matchStatus!="determined",textColor:s.leftWin=="0"?"battle_vs":s.leftWin=="1"?"ballet_ko":"battle_defeated",btnTextLeft:s.leftWin=="-1"&&s.matchStatus!="determined",leftBtnStyle:s.leftWin=="0"?"ptice":s.leftWin=="1"?"win":s.matchStatus=="determined"?"defeated":"arbitrament",btnTextRight:s.rightWin=="-1"&&s.matchStatus!="determined",rightBtnStyle:s.rightWin=="0"?"ptice":s.rightWin=="1"?"win":s.matchStatus=="determined"?"defeated":"arbitrament"});return(s,l)=>(r(),p("div",he,[(r(!0),p(G,null,ot(u.nftRecord,(e,A)=>(r(),p("div",{class:"battle_item",key:A},[t("div",Ae,[t("div",{class:y(["battle_item_time_at font-f",{isDetermined:!i(e).isDetermined}])},a(n(_t)(e==null?void 0:e.matchEndTime)),3),t("div",me,a(i(e).battleStatus?n(o)("views.detail.battleRecord.t2"):n(o)("views.detail.battleRecord.t3")),1)]),t("div",be,[t("div",ge,[_(n(Q),{src:e==null?void 0:e.leftNftImage,width:40,height:40,class:y({grayscale:!i(e).battleResLeft})},null,8,["src","class"]),i(e).btnTextLeft?(r(),p("div",ye,"BURN")):w("",!0)]),t("div",we,[t("div",{class:y(["battle_item_arena_info_name omit",{isDetermined:!i(e).isDetermined}])},a(e==null?void 0:e.leftMetaName),3),t("div",xe,a(e==null?void 0:e.leftName),1)])]),t("div",{class:y(["battle_item_vs",i(e).textColor])},a(i(e).status),3),t("div",Re,[t("div",Se,[t("div",{class:y(["battle_item_challenger_info_name omit",{isDetermined:!i(e).isDetermined}])},a(e==null?void 0:e.rightMetaName),3),t("div",$e,a(e==null?void 0:e.rightName),1)]),t("div",Ie,[_(n(Q),{src:e==null?void 0:e.rightNftImage,width:40,height:40,class:y({grayscale:!i(e).battleResRight})},null,8,["src","class"]),i(e).btnTextRight?(r(),p("div",Ne,"BURN")):w("",!0)])]),t("div",{class:"battle_item_see",onClick:f=>d(e==null?void 0:e.matchId)},[I(a(i(e).battleRes?n(o)("views.detail.battleRecord.t5"):n(o)("views.detail.battleRecord.t4"))+" ",1),_(n(rt))],8,ke)]))),128)),u.nftRecord.length?w("",!0):(r(),X(pt,{key:0}))]))}});const Ce=D(De,[["__scopeId","data-v-e726c18f"]]),Ue={class:"overflow-y-auto battles wrap scrollBar-y"},Ee={class:"text"},Be={class:"battle_item_time"},Te={class:"battle_item_time_status"},We=["onClick"],Qe={class:"nft"},Oe={class:"battle_item_arena"},Ve={class:"relative battle_item_arena_nft"},Ye={key:0,class:"absolute burn"},Fe={class:"battle_item_arena_info"},Ke={class:"battle_item_arena_info_symbol omit"},ze={class:"battle_item_arena"},Ze={class:"relative battle_item_arena_nft"},qe={key:0,class:"absolute burn"},Me={class:"battle_item_arena_info"},Je={class:"battle_item_arena_info_symbol omit"},Le=U({__name:"mindex",props:{nftRecord:{type:Object,default:()=>{}}},setup(c){const{t:o}=E(),[h,b]=[F(),K()],u=c,d=s=>{b.push({path:"/fightInfo/index",query:{match_id:s}})};V(async()=>{console.log(u.nftRecord)});const i=s=>({status:s.leftWin=="0"?"VS":s.leftWin=="1"?"K.O.":"Burn By",battleResLeft:s.leftWin=="1"?!0:s.leftWin=="-1"?!1:"1",battleResRight:s.rightWin=="1"?!0:s.rightWin=="-1"?!1:"1",battleStatus:s.leftWin=="0",showData:s.leftWin!="0",colorRed:s.leftWin!="0",battleRes:!(s.matchStatus=="determined"||s.matchStatus=="started"&&s.matchEndTime>new Date().getTime()),isDetermined:s.matchStatus!="determined",textColor:s.leftWin=="0"?"battle_vs":s.leftWin=="1"?"ballet_ko":"battle_defeated",btnTextLeft:s.leftWin=="-1"&&s.matchStatus!="determined",leftBtnStyle:s.leftWin=="0"?"ptice":s.leftWin=="1"?"win":s.matchStatus=="determined"?"defeated":"arbitrament",btnTextRight:s.rightWin=="-1"&&s.matchStatus!="determined",rightBtnStyle:s.rightWin=="0"?"ptice":s.rightWin=="1"?"win":s.matchStatus=="determined"?"defeated":"arbitrament"});return(s,l)=>(r(),p("div",Ue,[(r(!0),p(G,null,ot(u.nftRecord,(e,A)=>(r(),p("div",{class:"battle_item",key:A},[t("div",Ee,[t("div",Be,[t("div",{class:y(["battle_item_time_at font-f",{isDetermined:!i(e).isDetermined}])},a(n(_t)(e==null?void 0:e.matchEndTime)),3),t("div",Te,a(i(e).battleStatus?n(o)("views.detail.battleRecord.t2"):n(o)("views.detail.battleRecord.t3")),1)]),t("div",{class:"battle_item_see",onClick:f=>d(e==null?void 0:e.matchId)},[I(a(i(e).battleRes?n(o)("views.detail.battleRecord.t5"):n(o)("views.detail.battleRecord.t4"))+" ",1),_(n(rt))],8,We)]),t("div",Qe,[t("div",Oe,[t("div",Ve,[_(n(Q),{src:e==null?void 0:e.leftNftImage,width:50,height:50,class:y({grayscale:!i(e).battleResLeft})},null,8,["src","class"]),i(e).btnTextLeft?(r(),p("div",Ye,"BURN")):w("",!0)]),t("div",Fe,[t("div",{class:y(["battle_item_arena_info_name omit",{isDetermined:!i(e).isDetermined}])},a(e==null?void 0:e.leftMetaName),3),t("div",Ke,a(e==null?void 0:e.leftName),1)])]),t("div",{class:y(["battle_item_vs",i(e).textColor])},a(i(e).status),3),t("div",ze,[t("div",Ze,[_(n(Q),{src:e==null?void 0:e.rightNftImage,width:50,height:50,class:y({grayscale:!i(e).battleResRight})},null,8,["src","class"]),i(e).btnTextRight?(r(),p("div",qe,"BURN")):w("",!0)]),t("div",Me,[t("div",{class:y(["battle_item_arena_info_name omit",{isDetermined:!i(e).isDetermined}])},a(e==null?void 0:e.rightMetaName),3),t("div",Je,a(e==null?void 0:e.rightName),1)])])])]))),128)),u.nftRecord.length?w("",!0):(r(),X(pt,{key:0}))]))}});const Pe=D(Le,[["__scopeId","data-v-10a1cd84"]]);const je="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAnpJREFUOE+tlE9oE0EYxd83mxahIq0GBS2UevBixUNOgoIoRlCo3WwWa714CgpK8SCleiiBQu1FPBSFKghi8U+SWQiIEkVQwVsPSvQkmoNQlPgHUZC6nWcnpCXVNgnSvewOM99v33zvzQhW+ZFV5qEZoLiue0JE1mqtJwCwnoiGQM/zzgEYsyCSg1rrK/8NHBkZUcVi8TXJnxYiIm09PT3b0+m0WQlaV2EymYyTvE/yVBVwVSl1OJvNFpoFiu/7bbOzsx2RSKQDwCjJXWEYbrWASCTyTkSKAAbDMPxK8ls+n7fqFxUvKvQ87yCA6wDWAVAA1pCV/l/SWg/ZD8/z0iTPi1TKflkQyR9Kqf5sNvu80pYF6Z7n3QGQIDkuImUA30i+1Vq/qHW2r69vv+M4nQDaRSRKchjAvVwuN7AEmEgkBkRkiuTTMAyP5vP5j/Xc7O3t3dTa2nrXtsQYczIIghtLgHZQhV4DUFJK+ZlM5s1yUNd1tymlNIBuY0wqCIKphXX/uOy67j7HceyfZ0qlUmx6evp3LTQWi7V0dXUVRWSzMeZIEARPaueXjY3neRMkj0ej0Y2Tk5NLgKlUqqVcLn8SkVu5XO7M3ztYCfiK5Het9W5bEI/H2+y7UChUAp5IJKyj7VrrHQ2BrutuUEq9J3nZcZxRY8xpGxXrtIiMKaUmjDEXAJw1xnQHQfC57pZtHkk+mM/hRRE5AGAngEfVIjt+SdKelGGSh4IgeFgXmEwm95B8DMABMENySGt9u7rVYyIyPn8AOu1NAWCv1vpZQ1Nc1/VFZIvjODczmcyX2gLf99fPzc31A/igtc437GG9MDcz1/A+bAZSu+YPiO4SJIcUANsAAAAASUVORK5CYII=",Ge="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAWBJREFUOE/tkz9LA0EQxd/sNUmbWIgg+QJCEP+UktaDQG43BEGwEjutbP0C9oJgYSeI7EaOyFkeIlY2VrG0sbC4NsTcnSMnBhJjzB1J6Za7s799b94OYcaLZsxDKqCUshRFUdd13bdJAlIBlVL3zJwzxqzOCtgGEGutl/6BIx1IG8p0PXQc5yCO4wfXdR8TCUqpIaCUco2IVrTWpz8ljiisVCq5QqEQENEHM+8aYy4HgfV6fYuZzwCEQRAs+L7fHYT+atlxnLIQ4gpAiZmPATSIKGLmayI6ZOYXZm40m82niQr7BbZtz+fz+QsAGwCs7/0YgB+G4fa4qfkzlMR+sVg8YeadBEhE551OZ9/zvPdxHzxVylLKIyJa1FrvpZ6UWq22LoRYBsCTLo30jehOa/385aJ/qJS6AWBnhSX1zHxrjNkcAlar1TnLsspZgUII6vV67Var9ToEzAqaKpQsj30CnNyYFdV52bsAAAAASUVORK5CYII=",Xe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAmlJREFUOE/VlM9vTFEUx7/nzlM/NhYTVkJtKtG0wdAuSEyx0KSTybw7j5WIhIiQWlT8ARJCbUWiCJEg+ubeN1TSSP14hAUrG/EjEQtEhNcI0sqMd4/e5r2mjUqEbnqX53zv5/y8lzDDh2aYh1kOlFKuBdABYDkzZ4QQ7+I4fuQ4zn3f9+Pp2jVtyeVyuZOZjwNoZeZvRPSSmetEtBLAQmZ+K4Q4UqlUzgPgyeApwFwuN6exsfEkgG5mvg2gd3h4OAzD8GdyiaSUbcx8CIAkoqE4jrdXq9UvKXQCmM/n52Wz2ZtjoA0ADmitz1mRlNJmuRfAXGa+GATBQ2svlUpbhRBXbLb1en3zwMDAZ2ufALqu209EXcaYYhAEQ9bpuu4aInoA4COA7wCamdnTWgfWXywWWxzHuQPgdRRFHWEY/hgHSin3ATjFzOVUnACvElFzFEVtYRjWpJT9AFYopVrSEl3XXUdE9wCcUUr1pMALAGwJrb7vf5okttEjrfW2JMDRsWx2aK2XphrP8+YbYx5bnVKqYxzoed6iOI6fEtH7kZGRLYODg18TQA8RnQBwGMAogGPMXNFa77H+fD7vZLNZDWATgHal1LOJHnqet8oYcxfAq1qt1pU0Wbiu20tE+wFkmNnPZDK7fd8fLRQKCxoaGi4DKAAoK6WqU4aS9LKdma8n5RzUWl9LM2lqaqK+vr56MuGNQojTAJYZY3YFQeD/tjapoVQqLSais0RkIz8HcIOZ3yQbsQRAJxHlmPkJEe1USr3442JPdkgpV4+ti53+ejtZAAbABwB2Dy8ppW799dP7ny9tln9f/1L6L1lvBSQCbS4SAAAAAElFTkSuQmCC",He=c=>(L("data-v-a0b542c7"),c=c(),P(),c),ts={class:"m_nft_info"},es={class:"content_symbol"},ss={class:"content_name"},as={class:"content_data"},ns={class:"content_data_left"},is=He(()=>t("div",{class:"content_data_line"},null,-1)),cs={class:"content_data_right"},os={class:"content_owner"},ds={class:"content_owner_img"},ls={class:"content_owner_info"},_s={class:"content_owner_info_title"},rs={class:"content_owner_info_address"},fs={class:"content_active"},us={class:"content_active_item"},vs=["src"],ps={class:"cursor-pointer content_active_item"},hs=["src"],As=["src"],ms=U({__name:"index",props:{nftData:{type:Object,default:()=>({})}},setup(c){const{t:o}=E(),[h,b]=[F(),K()],u=h.query.nft_address,d=s=>{b.push({path:"/detail/userPage",query:{user_address:s}})},i=()=>{const s=new Ot;window.open(s.downloadNFTHeaderImageUrl(u,h.query.token_id))};return(s,l)=>{var e,A,f,v,x,R;return r(),p("div",ts,[t("div",es,a((e=c.nftData)==null?void 0:e.name),1),t("div",ss,a((A=c.nftData)==null?void 0:A.metaName),1),t("div",as,[t("div",ns,"K.O."+a((f=c.nftData)==null?void 0:f.koScore),1),is,t("div",cs,[I(" NO."+a((v=c.nftData)==null?void 0:v.rankNo),1),t("span",null," (all:"+a((x=c.nftData)==null?void 0:x.totalAll)+")",1)])]),t("div",os,[t("div",ds,[_(Vt)]),t("div",ls,[t("div",_s,a(n(o)("views.detail.t1")),1),t("div",rs,[_(n(Yt),null,{title:O(()=>{var S;return[t("div",{onClick:l[0]||(l[0]=N=>{var k;return d((k=c.nftData)==null?void 0:k.userAddress)}),class:"cursor-pointer w-max"},a((S=c.nftData)==null?void 0:S.userAddress),1)]}),default:O(()=>{var S;return[t("div",{class:"userAddressLinkButton",onClick:l[1]||(l[1]=N=>{var k;return d((k=c.nftData)==null?void 0:k.userAddress)})},a(n(j)((S=c.nftData)==null?void 0:S.userAddress)),1)]}),_:1})])])]),t("div",fs,[t("div",us,[t("img",{src:n(Xe),alt:""},null,8,vs),I(" "+a(n(o)("views.detail.t2",{count:(R=c.nftData)==null?void 0:R.viewCount})),1)]),t("div",ps,[t("img",{src:n(je),alt:""},null,8,hs),I(" "+a(n(o)("views.detail.t3",{count:0})),1)]),t("div",{class:"cursor-pointer content_active_item",onClick:i},[t("img",{src:n(Ge),alt:""},null,8,As),I(" "+a(n(o)("views.detail.t4")),1)])])])}}});const at=D(ms,[["__scopeId","data-v-a0b542c7"]]),bs={class:"content_info"},gs={class:"content_info_up"},ys={class:"content_info_up_price"},ws={class:"content_info_up_price_title"},xs={class:"content_info_up_price_monery font-f"},Rs={class:"content_info_down"},Ss=U({__name:"index",props:{fixedData:{type:Object,default:()=>({})},priceUsdt:{type:Object,default:()=>({})}},emits:["buy"],setup(c,{emit:o}){const{t:h}=E(),b=o,u=dt(),d=c,i=()=>{b("buy",d.fixedData)};return(s,l)=>{var e,A,f,v;return r(),p("div",bs,[t("div",gs,[t("div",ys,[t("div",ws,a(n(h)("views.detail.t5")),1),t("div",xs,a(((e=c.fixedData)==null?void 0:e.price)||"--")+" "+a(n(J)),1)]),_(n($t),{class:y(["content_info_up_btn",{not_buy:!c.fixedData||((A=c.fixedData)==null?void 0:A.makerAddress)==n(u).address}]),onClick:i},{default:O(()=>[I(a(n(h)("views.detail.t7")),1)]),_:1},8,["class"])]),t("div",Rs,a(n(h)("views.detail.t6"))+" "+a(((f=c.fixedData)==null?void 0:f.price)||"--")+" "+a(n(J))+" ($"+a(n(ft)((v=c.fixedData)==null?void 0:v.price,c.priceUsdt.price)||"--")+") ",1)])}}});const nt=D(Ss,[["__scopeId","data-v-a0287779"]]),ht=c=>(L("data-v-01620462"),c=c(),P(),c),$s={class:"descript default-family"},Is={class:"descript_tip"},Ns={class:"descript_title"},ks={class:"descript_content"},Ds={class:"descript_content_title"},Cs={class:"descript_content_text"},Us={class:"descript_content"},Es={class:"descript_content_title"},Bs={class:"descript_content_text"},Ts={class:"descript_content"},Ws={class:"descript_content_title"},Qs={class:"descript_content_text"},Os=ht(()=>t("div",{class:"line"},null,-1)),Vs={class:"descript_content"},Ys={class:"descript_content_title"},Fs={class:"descript_content_text link_color"},Ks=["href"],zs=["src"],Zs={class:"descript_content"},qs={class:"descript_content_title"},Ms=ht(()=>t("div",{class:"descript_content_text"},"0%",-1)),Js=U({__name:"index",props:{nft_data:{type:lt,default:()=>{}}},setup(c){const{t:o}=E(),h=g(),b=g(["1"]),u=g(""),d=c;return V(()=>{var i,s,l;d.nft_data&&(h.value=JSON.parse((i=d.nft_data)==null?void 0:i.metaData),u.value=it((s=d.nft_data)==null?void 0:s.chainId,(l=d.nft_data)==null?void 0:l.nftAddress))}),(i,s)=>(r(),X(n(Kt),{activeKey:b.value,"onUpdate:activeKey":s[0]||(s[0]=l=>b.value=l)},{default:O(()=>[_(n(Ft),{key:"1",header:n(o)("views.detail.descript.t1")},{default:O(()=>{var l,e,A,f,v,x;return[t("div",$s,[t("div",Is,a((l=h.value)==null?void 0:l.description),1),t("div",Ns,a(n(o)("views.detail.descript.t2")),1),t("div",ks,[t("div",Ds,a(n(o)("views.detail.descript.t3")),1),t("div",Cs,a((e=i.$props.nft_data)==null?void 0:e.nftTokenId),1)]),t("div",Us,[t("div",Es,a(n(o)("views.detail.descript.t4")),1),t("div",Bs,a(n(ct)((A=i.$props.nft_data)==null?void 0:A.chainId))+" "+a((f=c.nft_data)==null?void 0:f.chainId),1)]),t("div",Ts,[t("div",Ws,a(n(o)("views.detail.descript.t5")),1),t("div",Qs,a((v=i.$props.nft_data)==null?void 0:v.nftType),1)]),Os,t("div",Vs,[t("div",Ys,a(n(o)("views.detail.descript.t6")),1),t("div",Fs,[t("a",{href:u.value,target:"_blank",class:"flex"},[I(a(n(j)((x=i.$props.nft_data)==null?void 0:x.nftAddress))+" ",1),t("img",{src:n(ut),alt:""},null,8,zs)],8,Ks)])]),t("div",Zs,[t("div",qs,a(n(o)("views.detail.descript.t7")),1),Ms])])]}),_:1},8,["header"])]),_:1},8,["activeKey"]))}});const Ls=D(Js,[["__scopeId","data-v-01620462"]]),Ps={class:"text-[#fff] flex detail"},js={key:0,class:"w-[393px] nft_info"},Gs={key:1,class:"w-[787px] content"},Xs={class:"battle"},Hs={class:"battle_title"},ta={key:2,class:"m_detail"},ea={class:"m_nft_detail"},sa=["src"],aa={class:"battle"},na={class:"battle_title"},ia=U({__name:"index",setup(c){const{t:o}=E(),h=dt(),[b,u]=[F(),K()],d=g(),i=g(""),s=new Dt,l=new Ut,e=new Bt,A=new Tt,f=b.query.nft_address,v=Number(b.query.token_id),x=new Et,R=g(),S=g([]),{chain:N}=It(),k=Nt(),$=g(),At=g(),z=g(0),Z=g(!1),q=g(!1),B=g(!1);(!f||v==null)&&(Y("NFT Address or Token ID is null","error",!1),u.go(-1)),V(async()=>{B.value=!0;try{await mt(),await H(),await bt(),await et(),await gt(J)}catch(m){Y(m.message,"error",!1)}finally{B.value=!1}});const mt=async()=>{d.value=await l.getNFTData(f,v);const m=await x.getNFTStatus(f,v);m.stakedInPool?i.value=m.ownerInPool:i.value=m.owner},H=async()=>{var m,T;R.value=await s.getNftDetailInfo(f,v,{chainId:N==null?void 0:N.id}),At.value=kt((m=d.value)==null?void 0:m.chainId,(T=R.value)==null?void 0:T.userAddress)},tt=()=>{var m;$.value&&((m=$.value)==null?void 0:m.makerAddress)!=h.address&&(Z.value=!0)},bt=async()=>{S.value=await s.getBattleRecord(f,v,{start:0,length:20,chainId:N==null?void 0:N.id})},et=async()=>{$.value=await e.getNFTOrderByNftAddressAndTokenId(f,v.toString(),k)},gt=async m=>{z.value=await A.getAssetPrice(m+"USDT")},st=()=>{Z.value=!1},yt=async()=>{var m,T,W;q.value=!0;try{const C=await Qt.connect(),wt=await C.nonces(h.address),xt={makerAddress:(m=$.value)==null?void 0:m.makerAddress,nftAddress:(T=$.value)==null?void 0:T.nftAddress,tokenId:(W=$.value)==null?void 0:W.nftTokenId,takerAddress:h.address,takerNonce:wt,chainId:k},M=await e.preTaker(xt);M.price=ft(M.price,Math.pow(10,18)).toString();const{maker_input:Rt,taker_input:St}=e.makeOrderInputData(M);await C.execute(Rt,St),Y(o("views.fixedPrice.t27"),"success",!1,2,async()=>{await et(),await H()})}catch(C){Y(C.message,"error",!1)}finally{st(),q.value=!1}};return(m,T)=>{var W,C;return r(),p(G,null,[t("div",Ps,[_(n(Ct),{spinning:B.value},null,8,["spinning"]),B.value?w("",!0):(r(),p("div",js,[_(n(Q),{src:(W=R.value)==null?void 0:W.imageUri,width:393,height:393},null,8,["src"]),_(fe,{class:"my-[20px]",nft_data:d.value},null,8,["nft_data"]),w("",!0)])),B.value?w("",!0):(r(),p("div",Gs,[_(at,{nftData:R.value,class:"nft_data_info"},null,8,["nftData"]),_(nt,{fixedData:$.value,priceUsdt:z.value,onBuy:tt},null,8,["fixedData","priceUsdt"]),t("div",Xs,[t("div",Hs,a(n(o)("views.detail.battleRecord.t1")),1),_(Ce,{class:"battle_record",nftRecord:S.value},null,8,["nftRecord"])]),w("",!0)])),B.value?w("",!0):(r(),p("div",ta,[t("div",ea,[t("img",{src:(C=R.value)==null?void 0:C.imageUri,class:"img"},null,8,sa),_(at,{nftData:R.value,class:"nft_data_info"},null,8,["nftData"])]),_(nt,{fixedData:$.value,priceUsdt:z.value,onBuy:tt,class:"m_buy"},null,8,["fixedData","priceUsdt"]),_(Ls,{nft_data:d.value},null,8,["nft_data"]),t("div",aa,[t("div",na,a(n(o)("views.detail.battleRecord.t1")),1),_(Pe,{class:"m_battle_record",nftRecord:S.value},null,8,["nftRecord"])])]))]),_(Wt,{open:Z.value,onClose:st,onBuyClick:yt,info:$.value,loading:q.value},null,8,["open","info","loading"])],64)}}});const Ua=D(ia,[["__scopeId","data-v-2b370878"]]);export{Ua as default};