var f=Object.defineProperty;var M=(a,t,e)=>t in a?f(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var s=(a,t,e)=>(M(a,typeof t!="symbol"?t+"":t,e),e);import{A as x,e as m,p as w}from"./axios-c188113d.js";import{d as v,u as y,b as r,c as h,e as n,t as _,f as l,x as I,h as u,F as b,k as N,s as S,p as T,j as C,y as k,P as B,l as D}from"./index-a3a92cc6.js";import{R as E}from"./RightOutlined-6e3658fa.js";class d{constructor(t){s(this,"teamMatchId");s(this,"arenaNftCollection");s(this,"challengeNftCollection");s(this,"latestMatchId");s(this,"latestMatchWinner");s(this,"latestMatchEndTime");s(this,"waitingSeconds");s(this,"teamMatchStatus");s(this,"matchDataList");this.teamMatchId=t.teamMatchId,this.arenaNftCollection=t.arenaNftCollection,this.challengeNftCollection=t.challengeNftCollection,this.latestMatchId=t.latestMatchId,this.latestMatchWinner=t.latestMatchWinner,this.latestMatchEndTime=t.latestMatchEndTime,this.waitingSeconds=t.waitingSeconds,this.teamMatchStatus=t.teamMatchStatus,this.matchDataList=t.matchDataList}}class J extends x{async getTeamMatchDataListByStatus(t,e,c,o){const i=this.gateway+"/team-match/status/"+e+"/"+t+"?page="+c+"&page_size="+o,p=await m.get(i);return this.checkResponse(p),p.data.data.map(g=>new d(g))}async getTeamMatchDataListByTeamMatchId(t,e){const c=this.gateway+"/team-match/id/"+t+"/"+e,o=await m.get(c);this.checkResponse(o),console.error("data:",o.data.data);const i=o.data.data;return new d(i)}async createTeamMatch(t){if(!t.teamMatchId||t.teamMatchId==w)throw new Error("team_match_id is empty");const e=this.gateway+"/team-match/create",c=await m.post(e,t);return this.checkResponse(c),new d(c.data.data)}}const O=a=>(T("data-v-c53abf54"),a=a(),C(),a),R={class:"px-2 pt-3 pb-2 gameOverMember"},F={class:"flex items-center justify-between"},L={class:"space-x-2"},A=O(()=>n("span",{class:"text-lg text-white"},"MFERS",-1)),G={class:"text-xs f-1"},V={class:"text-xs f-1 font-pf"},W={class:"flex flex-nowrap overflow-x-auto scrollBar-x space-x-1 relative"},j={key:0,class:"burn"},z=v({__name:"GameOverMember",props:{status:{type:String,default:"playing"},imgNum:{type:Number,default:6}},setup(a){const{t}=y(),e=a;return(c,o)=>(r(),h("div",R,[n("section",F,[n("div",L,[A,n("span",G,_(l(t)("views.teamFight.gameOver.t1")),1)]),n("a",V,[I(_(l(t)("views.teamFight.gameOver.t2"))+" (9) ",1),u(l(E))])]),n("section",W,[(r(!0),h(b,null,N(e.imgNum,i=>(r(),h("div",{key:i,class:k(["w-1/6",e.status=="over"?"grayscale":""])},[u(l(B),{src:"http://test.burnyou.yingguopi.com:3000/collection/image/0x53F433a6ca4940d9437AD08E3e394733920ECbb9/2"})],2))),128)),e.status=="over"?(r(),h("div",j,"BURN")):S("",!0)])]))}});const K=D(z,[["__scopeId","data-v-c53abf54"]]);export{K as G,J as T};
