import{an as ee,a_ as te,b1 as le,ag as x,ad as oe,au as p,av as D,aH as e,b5 as t,ah as a,bd as C,ck as ue,a4 as _,be as $,bh as M,aF as g,aY as z,b9 as Ae,ba as Ie,at as ae,aj as Ce,bk as fe,cx as Te,b3 as X,a$ as ke,b6 as L,b0 as Pe,b2 as Se,bi as Ee,aL as Oe,bu as Fe,bc as ve,b7 as he,bA as me,bC as pe,aE as J,b8 as Ke,bb as $e}from"./index-1e3b5e9c.js";import{a as De}from"./match-data-ext-5e1df082.js";import{M as ge,D as xe,a as we,P as ne}from"./bignumber-c053b17e.js";import{C as Ue}from"./index-1a933474.js";import{T as Y}from"./publicUnit-82a6e2b0.js";import{T as Z}from"./index-f42bfe17.js";import{P as ye}from"./index-dd31fe32.js";import{M as Re}from"./match-api-service-85ee51bf.js";import{M as be}from"./enums-1cf4aa58.js";import{E as Ne}from"./index-7deb20c8.js";import{P as q,g as Me,s as He}from"./numThousand-1548beb8.js";import"./nft-data-00f9cd4d.js";import"./firstNotUndefined-748ee901.js";const se=N=>(Ae("data-v-eb6852f8"),N=N(),Ie(),N),Ve={class:"flex w-full space-x-6 m1"},Be={class:"flex flex-col justify-between flex-grow w-[274px]"},Ge={class:"space-y-2 text-right"},je={class:"text-sm f-1"},Qe={class:"text-2xl text-white font-pf"},qe={class:"space-x-2 text-xs"},Le={class:"f-1"},ze={class:"font-primary font-pf"},Ye={class:"flex flex-col justify-center h-20 pr-3 text-right win_free"},Ze={class:"text-xs f-1"},We={class:"text-lg font-primary font-pf"},Je=se(()=>e("span",{class:"text-[30px]"},"+",-1)),Xe={class:"relative flex flex-col items-center justify-center avatar"},et={class:"nft-bottom-info font-pf"},tt={class:"w-2/3 text-[12px] text-white omit"},at={class:"w-1/3 text-xs font-primary text-end omit"},st={class:"flex flex-col items-center justify-center flex-shrink-0 space-y-1 f-1 font-pf"},nt={class:"text-[#BBF74C] default-family text-[17px]"},lt=se(()=>e("p",{class:"text-5xl text-white"},"VS",-1)),ot={class:"text-[15px]"},it={class:"flex w-full space-x-6 m1"},ct={class:"relative flex flex-col items-center justify-center avatar"},rt={class:"nft-bottom-info"},dt={class:"w-2/3 text-xs text-white omit"},_t={class:"w-1/3 text-xs font-primary text-end omit"},ut={class:"flex flex-col justify-between flex-grow w-[274px]"},ft={class:"space-y-2"},vt={class:"text-sm f-1"},ht={class:"text-2xl text-white font-pf"},mt={class:"space-x-2 text-xs"},pt={class:"font-primary font-pf"},gt={class:"f-1"},xt={class:"flex flex-col justify-center h-20 pl-3 win_free"},wt={class:"text-xs f-1"},yt={class:"text-lg font-primary font-pf"},bt=se(()=>e("span",{class:"text-[30px]"},"+",-1)),Nt={class:"relative"},At={class:"absolute bottom-0 w-full text-end pr-[8px] font-primary default-family nft-bottom-info"},It={class:"text-[12px] text-white default-family m_omit"},Tt=se(()=>e("div",{class:"flex items-center justify-center font-pf"},[e("p",{class:"text-[24px] text-white"},"VS")],-1)),kt={class:"relative"},Dt={class:"absolute bottom-0 w-full text-end pr-[8px] font-primary default-family nft-bottom-info"},Ct={class:"text-[12px] text-white default-family m_omit"},Pt=ee({__name:"GamePlaying",props:{data:{type:De,default:()=>{}}},setup(N){const{t:c}=te(),u=le(),s=x(),r=new Date().getTime(),l=()=>{var m;u.push(`/fightInfo/index?match_id=${(m=s.value)==null?void 0:m.matchId}`)},F=N;oe(async()=>{s.value=F.data,new Date(F.data.matchEndTime)});const T=m=>{const{nftAddress:A,nftTokenId:v}=m;u.push({path:"/detail/index",query:{nft_address:A,token_id:v}})},k=m=>{m.target.clientWidth>=m.target.scrollWidth&&(m.target.style.pointerEvents="none")},P=()=>{u.go(0)};return(m,A)=>{var v,O,S,E,H,n,o,K,V,B,G,j,Q,R,d,b,w,I,W,f,h,ie,ce,re,de,_e;return p(),D(z,null,[e("div",{class:"flex justify-between game-playing default-family",onClick:l},[e("div",Ve,[e("div",Be,[e("div",Ge,[e("p",je,t(a(c)("views.challenge.gamePlaying.t1")),1),e("p",Qe,t((v=s.value)==null?void 0:v.arenaCreatorNftSoldPrice)+" "+t(a(Y)),1),e("p",qe,[e("span",Le,t((O=s.value)==null?void 0:O.arenaBidDataList.length)+" "+t(a(c)("views.challenge.gamePlaying.t2")),1),e("span",ze," +"+t(((S=s.value)==null?void 0:S.arenaCreatorNftSoldPrice)==0?0:a(ge)(a(xe)(a(we)((E=s.value)==null?void 0:E.arenaCreatorNftSoldPrice,(H=s.value)==null?void 0:H.arenaCreatorNftSellPrice),(n=s.value)==null?void 0:n.arenaCreatorNftSellPrice),100))+"% ",1)])]),e("div",Ye,[e("p",Ze,t(a(c)("views.challenge.gamePlaying.t3")),1),e("p",We,[Je,C(" "+t(a(ue)((o=s.value)==null?void 0:o.arenaNftPromotableFee))+" "+t(a(Y)),1)])])]),e("div",Xe,[_(a($),{width:200,src:(K=s.value)==null?void 0:K.arenaCreatorNFTData.cacheImageUrl},null,8,["src"]),e("div",et,[e("p",{class:"flex items-center justify-between w-full px-2 text-xs text-white",onClick:A[0]||(A[0]=M(i=>{var y;return T((y=s.value)==null?void 0:y.arenaCreatorNFTData)},["stop"]))},[_(a(Z),{onMouseenter:k},{title:g(()=>{var i,y;return[C(t((i=s.value)==null?void 0:i.arenaCreatorNFTData.name)+" #"+t((y=s.value)==null?void 0:y.arenaCreatorNFTData.nftTokenId),1)]}),default:g(()=>{var i,y;return[e("span",tt,t((i=s.value)==null?void 0:i.arenaCreatorNFTData.name)+" #"+t((y=s.value)==null?void 0:y.arenaCreatorNFTData.nftTokenId),1)]}),_:1}),_(a(Z),{onMouseenter:k},{title:g(()=>{var i;return[C("K.O."+t((i=s.value)==null?void 0:i.arenaNftKoScore),1)]}),default:g(()=>{var i;return[e("span",at," K.O."+t((i=s.value)==null?void 0:i.arenaNftKoScore),1)]}),_:1})])])])]),e("div",st,[e("p",nt,t(a(c)("views.challenge.f1"))+" "+t((V=s.value)==null?void 0:V.voteCount)+" "+t(a(c)("views.challenge.f2")),1),lt,e("p",ot,[_(Ue,{value:new Date((B=s.value)==null?void 0:B.matchEndTime).getTime()-a(r),future:!1,format:"HH:mm:ss",onFinish:P},null,8,["value"])])]),e("div",it,[e("div",ct,[_(a($),{width:200,src:(G=s.value)==null?void 0:G.challengerNFTData.cacheImageUrl},null,8,["src"]),e("div",rt,[e("p",{class:"flex items-center justify-between w-full px-2 text-xs text-white font-pf",onClick:A[1]||(A[1]=M(i=>{var y;return T((y=s.value)==null?void 0:y.challengerNFTData)},["stop"]))},[_(a(Z),{onMouseenter:k},{title:g(()=>{var i,y;return[C(t((i=s.value)==null?void 0:i.challengerNFTData.name)+" #"+t((y=s.value)==null?void 0:y.challengerNFTData.nftTokenId),1)]}),default:g(()=>{var i,y;return[e("span",dt,t((i=s.value)==null?void 0:i.challengerNFTData.name)+" #"+t((y=s.value)==null?void 0:y.challengerNFTData.nftTokenId),1)]}),_:1}),_(a(Z),{onMouseenter:k},{title:g(()=>{var i;return[C("K.O."+t((i=s.value)==null?void 0:i.challengeNftKoScore),1)]}),default:g(()=>{var i;return[e("span",_t," K.O."+t((i=s.value)==null?void 0:i.challengeNftKoScore),1)]}),_:1})])])]),e("div",ut,[e("div",ft,[e("p",vt,t(a(c)("views.challenge.gamePlaying.t1")),1),e("p",ht,t((j=s.value)==null?void 0:j.challengerNftSoldPrice)+" "+t(a(Y)),1),e("p",mt,[e("span",pt," +"+t(((Q=s.value)==null?void 0:Q.challengerNftSoldPrice)==0?0:a(ge)(a(xe)(a(we)((R=s.value)==null?void 0:R.challengerNftSoldPrice,(d=s.value)==null?void 0:d.challengerNftSellPrice),(b=s.value)==null?void 0:b.challengerNftSellPrice),100))+"% ",1),e("span",gt,t((w=s.value)==null?void 0:w.challengerBidDataList.length)+" "+t(a(c)("views.challenge.gamePlaying.t2")),1)])]),e("div",xt,[e("p",wt,t(a(c)("views.challenge.gamePlaying.t3")),1),e("p",yt,[bt,C(" "+t(a(ue)((I=s.value)==null?void 0:I.challengeNftPromotableFee))+" "+t(a(Y)),1)])])])])]),e("div",{class:"m_playing",onClick:l},[e("div",null,[e("div",Nt,[_(a($),{width:130,src:(W=s.value)==null?void 0:W.arenaCreatorNFTData.cacheImageUrl},null,8,["src"]),e("div",At," K.O."+t((f=s.value)==null?void 0:f.arenaNftKoScore),1)]),e("div",It,t((h=s.value)==null?void 0:h.arenaCreatorNFTData.name)+" #"+t((ie=s.value)==null?void 0:ie.arenaCreatorNFTData.nftTokenId),1)]),Tt,e("div",null,[e("div",kt,[_(a($),{width:130,src:(ce=s.value)==null?void 0:ce.challengerNFTData.cacheImageUrl},null,8,["src"]),e("span",Dt," K.O."+t((re=s.value)==null?void 0:re.challengeNftKoScore),1)]),e("div",Ct,t((de=s.value)==null?void 0:de.challengerNFTData.name)+" #"+t((_e=s.value)==null?void 0:_e.challengerNFTData.nftTokenId),1)])])],64)}}});const St=ae(Pt,[["__scopeId","data-v-eb6852f8"]]),Et="data:image/png;base64,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",Ot="/assets/burn-745333cf.png",U=N=>(Ae("data-v-26ef33fe"),N=N(),Ie(),N),Ft={class:"flex m1 h-[240px] items-center"},Kt={class:"relative flex flex-col items-center justify-center mr-[70px] avatar"},$t={class:"bottom-0 nft-bottom-info"},Ut={class:"w-2/3 text-white omit"},Rt={class:"font-primary"},Mt={class:"flex flex-col justify-between h-full"},Ht=U(()=>e("p",{class:"text-6xl text-white font-pf leading-[47px]"},"K.O.",-1)),Vt={class:"relative w-full"},Bt={class:"bottom-0 nft-bottom-info"},Gt={class:"w-2/3 text-white omit"},jt=U(()=>e("span",null," K.O."+t(0),-1)),Qt={key:0,class:"absolute burn"},qt={key:1,class:"absolute burn_s"},Lt=U(()=>e("div",{class:"flex justify-center flex-shrink-0",style:{color:"#ee0002"}},[e("div",{class:"h-full mx-[70px]",style:{background:"#333333",width:"1px",height:"100%"}})],-1)),zt={class:"flex w-full m1"},Yt={class:"flex flex-col items-center justify-center w-[240px] mr-5 avatar"},Zt=Te('<p class="mt-[18px] text-[15px] text-white" data-v-26ef33fe>KKINFET.eth</p><p class="text-xs f-1" data-v-26ef33fe>@KKLINEGET</p><p class="mt-[22px]" data-v-26ef33fe><span class="text-[15px] text-white" data-v-26ef33fe>0 </span><span class="text-[15px] f-1" data-v-26ef33fe>Followers</span></p>',3),Wt={class:"flex flex-col justify-between flex-grow w-1/2"},Jt={class:"text-sm default-family first-letter f-1"},Xt={class:"text-2xl font-primary"},ea={class:"text-sm"},ta={class:"text-sm default-family f-1"},aa=U(()=>e("p",{class:"text-lg text-white"},"0",-1)),sa={class:"text-sm default-family f-1"},na=U(()=>e("p",{class:"text-lg text-white"},"0",-1)),la={class:"battle_info"},oa={class:"battle_nft"},ia={class:"name m_omit"},ca={class:"ko_num"},ra=U(()=>e("p",{class:"ko"},"K.O.",-1)),da={class:"battle_nft loser"},_a={class:"name m_omit"},ua=U(()=>e("div",{class:"ko_num"},"K.O."+t(0),-1)),fa=["src"],va=["src"],ha={class:"earn"},ma={class:"twitter"},pa=Te('<p class="address" data-v-26ef33fe>KKINFET.eth</p><p class="twitter_account" data-v-26ef33fe>@KKLINEGET</p><p class="twitter_info" data-v-26ef33fe><span class="num" data-v-26ef33fe>0 </span><span class="follower" data-v-26ef33fe>Followers</span></p>',3),ga={class:"bid_info"},xa={class:"fees"},wa={class:"title"},ya={class:"fee"},ba={class:"token"},Na={class:"number"},Aa={class:"title"},Ia=U(()=>e("p",{class:"num"},"0",-1)),Ta={class:"pfp"},ka={class:"title"},Da=U(()=>e("p",{class:"impressions"},"0",-1)),Ca=ee({__name:"GameOver",props:{data:{type:De,default:()=>{}}},setup(N){const{t:c}=te(),u=le(),s=x(),r=x(),l=x(),F=x(0),T=x(0),k=x(0),P=x(0),m=x(),A=x(()=>m.value),v=N;Ce(()=>v.data,n=>{s.value=n}),oe(async()=>{const n=v.data;n.winner==n.arenaCreatorAddress?(r.value=n.arenaCreatorNFTData,l.value=n.challengerNFTData,T.value=n.arenaNftPromotableFee,P.value=n.challengeNftKoScore,k.value=n.arenaNftKoScore,n.challengerNftSoldPrice>n.challengerNftSellPrice&&(F.value=n.challengerNftSoldPrice-n.challengerNftSellPrice)):(r.value=n.challengerNFTData,l.value=n.arenaCreatorNFTData,T.value=n.challengeNftPromotableFee,P.value=n.arenaNftKoScore,k.value=n.challengeNftKoScore,n.arenaCreatorNftSoldPrice>n.arenaCreatorNftSellPrice&&(F.value=n.arenaCreatorNftSoldPrice-n.arenaCreatorNftSellPrice)),s.value=n});const O=n=>{n&&u.push({path:"/fightInfo/index",query:{match_id:n}})},S=n=>{if(n.winnerNFTData)u.push("/extendExpense/index");else{X(c("views.challenge.gameOver.t5"),"warning",!1);return}},E=n=>{const{nftAddress:o,nftTokenId:K}=n;u.push({path:"/detail/index",query:{nft_address:o,token_id:K}})},H=n=>{n.target.clientWidth>=n.target.scrollWidth&&(n.target.style.pointerEvents="none")};return(n,o)=>{var K,V,B,G,j,Q,R,d,b,w,I,W;return p(),D(z,null,[e("div",{class:"flex justify-between gameOver p-[30px] mb-[30px]",onClick:o[3]||(o[3]=f=>{var h;return O((h=s.value)==null?void 0:h.matchId)})},[e("div",Ft,[e("div",Kt,[_(a($),{class:"w-[240px]",src:(K=r.value)==null?void 0:K.cacheImageUrl},null,8,["src"]),e("div",$t,[e("p",{class:"flex items-center justify-between w-full px-2 text-xs text-white",onClick:o[0]||(o[0]=M(f=>E(r.value),["stop"]))},[_(a(Z),{onMouseenter:H},{title:g(()=>{var f,h;return[C(t((f=r.value)==null?void 0:f.name)+" #"+t((h=r.value)==null?void 0:h.nftTokenId),1)]}),default:g(()=>{var f,h;return[e("span",Ut,t((f=r.value)==null?void 0:f.name)+" #"+t((h=r.value)==null?void 0:h.nftTokenId),1)]}),_:1}),e("div",{ref_key:"popoverP",ref:m},[_(a(ye),{getPopupContainer:A.value},{content:g(()=>[e("p",null,t(k.value+"+"+P.value+"="+a(ne)(k.value,P.value)),1)]),default:g(()=>[e("span",Rt," K.O."+t(a(ne)(k.value,P.value)),1)]),_:1},8,["getPopupContainer"])],512)])])]),e("div",Mt,[Ht,e("div",Vt,[_(a($),{src:(V=l.value)==null?void 0:V.cacheImageUrl,class:"grayscale w-[180px]"},null,8,["src"]),e("div",Bt,[e("p",{class:"absolute flex items-center justify-between w-full px-2 mt-4 text-xs text-white bottom-1",onClick:o[1]||(o[1]=M(f=>E(l.value),["stop"]))},[_(a(Z),{onMouseenter:H},{title:g(()=>{var f,h;return[C(t((f=l.value)==null?void 0:f.name)+" #"+t((h=l.value)==null?void 0:h.nftTokenId),1)]}),default:g(()=>{var f,h;return[e("span",Gt,t((f=l.value)==null?void 0:f.name)+" #"+t((h=l.value)==null?void 0:h.nftTokenId),1)]}),_:1}),e("div",{ref_key:"popoverP",ref:m},[_(a(ye),{getPopupContainer:A.value},{content:g(()=>[e("p",null,t(P.value+"-"+P.value+"=0"),1)]),default:g(()=>[jt]),_:1},8,["getPopupContainer"])],512)])]),(B=v.data)!=null&&B.winnerNFTData?(p(),D("div",Qt,t(a(c)("views.fightInfo.t33")),1)):(p(),D("div",qt,t(a(c)("views.fightInfo.t32")),1))])])]),Lt,e("div",zt,[e("div",Yt,[_(a($),{class:"w-[100px]",round:!0,src:(G=r.value)==null?void 0:G.cacheImageUrl},null,8,["src"]),Zt]),e("div",Wt,[e("div",null,[e("p",Jt,t(a(c)("views.challenge.gameOver.t1")),1),e("p",Xt,[C(t(T.value)+" ",1),e("span",ea,t(a(Y)),1)])]),e("div",null,[e("p",ta,t(a(c)("views.challenge.gameOver.t2")),1),aa]),e("div",null,[e("p",sa,t(a(c)("views.challenge.gameOver.t3")),1),na]),_(a(fe),{style:{background:"#000000","box-shadow":"inset 0px 1px 11px 10px rgba(187, 247, 76, 0.4)",border:"1px solid #bbf74c"},class:"flex items-center justify-center w-full h-10 font-bold bg-black rounded-none font-primary",onClick:o[2]||(o[2]=M(f=>S(v.data),["stop"]))},{default:g(()=>[C(t(a(c)("views.challenge.gameOver.t4")),1)]),_:1})])])]),e("div",{class:"m_game_over",onClick:o[7]||(o[7]=f=>{var h;return O((h=s.value)==null?void 0:h.matchId)})},[e("div",la,[e("div",oa,[_(a($),{class:"w-[130px]",src:(j=r.value)==null?void 0:j.cacheImageUrl},null,8,["src"]),e("div",{class:"winner_nft",onClick:o[4]||(o[4]=M(f=>E(r.value),["stop"]))},[e("div",ia,t((Q=r.value)==null?void 0:Q.name)+" #"+t((R=r.value)==null?void 0:R.nftTokenId),1),e("div",ca,"K.O."+t(a(ne)(k.value,P.value)),1)])]),ra,e("div",da,[_(a($),{src:(d=l.value)==null?void 0:d.cacheImageUrl,class:"grayscale w-[130px] opacity-60"},null,8,["src"]),e("div",{class:"loser_nft",onClick:o[5]||(o[5]=M(f=>E(l.value),["stop"]))},[e("div",_a,t((b=l.value)==null?void 0:b.name)+" #"+t((w=l.value)==null?void 0:w.nftTokenId),1),ua]),(I=v.data)!=null&&I.winnerNFTData?(p(),D("img",{key:0,class:"absolute img",src:a(Ot),alt:""},null,8,fa)):(p(),D("img",{key:1,class:"absolute img",src:a(Et),alt:""},null,8,va))])]),e("div",ha,[e("div",ma,[_(a($),{class:"w-[53px]",round:!0,src:(W=r.value)==null?void 0:W.cacheImageUrl},null,8,["src"]),pa]),e("div",ga,[e("div",xa,[e("p",wa,t(a(c)("views.challenge.gameOver.t1")),1),e("p",ya,[C(t(T.value)+" ",1),e("span",ba,t(a(Y)),1)])]),e("div",Na,[e("p",Aa,t(a(c)("views.challenge.gameOver.t2")),1),Ia]),e("div",Ta,[e("p",ka,t(a(c)("views.challenge.gameOver.t3")),1),Da]),_(a(fe),{class:"earn_btn",onClick:o[6]||(o[6]=M(f=>S(v.data),["stop"]))},{default:g(()=>[C(t(a(c)("views.challenge.gameOver.t4")),1)]),_:1})])])])],64)}}});const Pa=ae(Ca,[["__scopeId","data-v-26ef33fe"]]),Sa="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAQRJREFUSEvt1jGOwjAQBdDvVFwMod17BIcGiYsg0SwaByl3oKGHC9ByEGgiZVaWshIFIh7PQCg2deTn+fFM7DDS40Zy8Q+/LfnPj5qZXV3XP8x89t6TNpqkiiMaQtgC8AAYwEKLJ8GxOiJaA1j1larxZNgaF8GWuBi2wrNgCzwb1uIqWIOr4R7fAFjetdrce797NmTUcNM0k7Zt98w87aErM39XVXV8GZyLxg1lV/wILYriqyzLU8ocz4I1lf5tSgxboOKorVARbIkmw/F/TEQH59xM0jIm7URE8RIQLwO3lD4dOtmiwxVCKLuuuwwNhyE0OeqUhaTviCqWLm7yjS3RUaP+Bauzxx84OJRCAAAAAElFTkSuQmCC",Ea={class:"mining"},Oa={class:"mining_menu"},Fa={class:"mining_menu_title"},Ka=["src"],$a={class:"mining_content"},Ua={class:"mining_content_item w-[440px] justify-between m_mining_content_item"},Ra={class:"w-1/3"},Ma={class:"text_title_style"},Ha={class:"text_content_style"},Va={class:"w-1/3"},Ba={class:"text_title_style"},Ga={class:"text_content_style"},ja={key:0,class:"vote_btn_num"},Qa={class:"mining_content_item w-[330px]"},qa={class:"w-1/2"},La={class:"text_title_style"},za={class:"text_content_style"},Ya={class:"text_title_style"},Za={class:"text_content_style"},Wa={class:"mining_content_item w-[330px]"},Ja={class:"w-1/2"},Xa={class:"text_title_style"},es={class:"text_content_style"},ts={class:"text_title_style"},as={class:"text_content_style"},ss=ee({__name:"challengeData",props:{miningData:{type:Object,default:()=>{}},noVotedNum:{type:Number,default:0}},emits:["quick"],setup(N,{emit:c}){const{t:u}=te(),s=ke(),r=c,l=N,F=()=>{r("quick")},T=()=>{X(u("common.stayTuned"),"warning",!1)};return(k,P)=>{var m,A,v,O,S,E;return p(),D("div",Ea,[e("div",Oa,[e("div",Fa,t(a(u)("views.challenge.miningData.t1")),1),e("div",{class:"mining_menu_history",onClick:T},[C(t(a(u)("views.challenge.miningData.t7"))+" ",1),e("img",{src:a(Sa),alt:""},null,8,Ka)])]),e("div",$a,[e("div",Ua,[e("div",Ra,[e("div",Ma,t(a(u)("views.challenge.miningData.t2")),1),e("div",Ha,"+"+t(a(q)((m=l.miningData)==null?void 0:m.voteDay)),1)]),e("div",Va,[e("div",Ba,t(a(u)("views.challenge.miningData.t3")),1),e("div",Ga,t(a(q)((A=l.miningData)==null?void 0:A.voteTotal)),1)]),e("div",{class:"w-1/3 vote_btn",onClick:F},[C(t(a(u)("views.challenge.miningData.t4"))+" ",1),a(s).address&&(l==null?void 0:l.noVotedNum)>0?(p(),D("div",ja,t(N.noVotedNum),1)):L("",!0)])]),e("div",Qa,[e("div",qa,[e("div",La,t(a(u)("views.challenge.miningData.t5")),1),e("div",za,"+"+t(a(q)((v=l.miningData)==null?void 0:v.battleDay)),1)]),e("div",null,[e("div",Ya,t(a(u)("views.challenge.miningData.t3")),1),e("div",Za,t(a(q)((O=l.miningData)==null?void 0:O.battleTotal)),1)])]),e("div",Wa,[e("div",Ja,[e("div",Xa,t(a(u)("views.challenge.miningData.t6")),1),e("div",es,"+"+t(a(q)((S=l.miningData)==null?void 0:S.battleTotal)),1)]),e("div",null,[e("div",ts,t(a(u)("views.challenge.miningData.t3")),1),e("div",as,t(a(q)((E=l.miningData)==null?void 0:E.battleTotal)),1)])])])])}}});const ns=ae(ss,[["__scopeId","data-v-29c914e6"]]),ls={class:"container space-y-8 challenge"},os={class:"flex items-center tabs default-family"},is={key:0,class:"space-y-6"},cs=ee({__name:"index",setup(N){const c=new Ke,u=x([]),s=x([]),{t:r}=te(),l=r("layout.noData"),F=r("layout.battleOther"),T=new Re,k=x(!1),P=x(!1),m=x("loading..."),[A]=[le()],v=x(!1),O=x(),S=ke(),E=x(0),{open:H}=Pe(),{chain:n}=Se(),o=Ee({current:Me("challengePage")||1}),K=async d=>{He("challengePage",d),o.current=d};oe(async()=>{V(),S.address&&Q(S.address)});const V=async()=>{v.value=!0;try{const d=await T.getMatchDataExtListByStatus(be.STARTED,1,30);for(let w=0;w<d.length;w++){const I=d[w];Oe(I.matchEndTime)>Fe()?u.value.push(I):s.value.push(I)}const b=await T.getMatchDataExtListByStatus(be.DETERMINED,1,20);for(let w=0;w<b.length;w++){const I=b[w];s.value.push(I)}O.value=await c.getAccountData({chainId:n==null?void 0:n.id}),v.value=!1}catch(d){X(d.message,"error",!1),v.value=!1}},B=async d=>{d.target},G=async d=>{d.target},j=async()=>{if(!S.address){H();return}const d=await T.getPlayingMatchIds(S.address);d.length>0?A.push({path:"/fightInfo/index",query:{match_id:d[0],quick:"quick"}}):X(r("views.fightInfo.t60"),"warning",!1)},Q=async d=>{const b=await T.getPlayingMatchIds(d);E.value=b.length,console.log(b)},R=()=>{A.push("/ring/index")};return(d,b)=>(p(),D("div",ls,[e("div",os,[e("div",{class:ve(["w-1/2 text-[17px] m_paly",o.current==1?"active_tab":""]),onClick:b[0]||(b[0]=()=>K(1))},t(a(r)("views.challenge.tab1")),3),e("div",{class:ve(["w-1/2 text-[17px] m_over",o.current==2?"active_tab":""]),onClick:b[1]||(b[1]=()=>K(2))},t(a(r)("views.challenge.tab2")),3)]),_(a($e),{spinning:v.value},null,8,["spinning"]),v.value?L("",!0):(p(),D("div",is,[o.current==1?(p(),D(z,{key:0},[e("div",{class:"overflow-y-auto wrap scrollBar-y",onScroll:B},[_(ns,{miningData:O.value,onQuick:j,noVotedNum:E.value},null,8,["miningData","noVotedNum"]),(p(!0),D(z,null,he(u.value,(w,I)=>(p(),J(St,{key:I,data:w,class:"cursor-pointer"},null,8,["data"]))),128))],32),me(e("div",{class:"text-[#666] text-center text-lg default-family"},t(m.value),513),[[pe,k.value]]),u.value.length==0?(p(),J(Ne,{key:0,class:"empty",content:a(l),btnText:a(F),onGoPage:R},null,8,["content","btnText"])):L("",!0)],64)):L("",!0),o.current==2?(p(),D(z,{key:1},[e("div",{class:"overflow-y-auto wrap scrollBar-y",onScroll:G},[(p(!0),D(z,null,he(s.value,(w,I)=>(p(),J(Pa,{key:I,data:w,class:"cursor-pointer"},null,8,["data"]))),128))],32),me(e("div",{class:"text-[#666] text-center text-lg default-family"},t(m.value),513),[[pe,P.value]]),s.value.length==0?(p(),J(Ne,{key:0,class:"emptyt",content:a(l),btnText:a(F),onGoPage:R},null,8,["content","btnText"])):L("",!0)],64)):L("",!0)]))]))}});const bs=ae(cs,[["__scopeId","data-v-b2279cfa"]]);export{bs as default};
