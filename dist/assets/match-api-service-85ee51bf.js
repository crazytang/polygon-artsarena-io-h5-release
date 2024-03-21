var I=Object.defineProperty;var T=(t,i,e)=>i in t?I(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e;var m=(t,i,e)=>(T(t,typeof i!="symbol"?i+"":i,e),e);import{M as h,a as g}from"./match-data-ext-5e1df082.js";import{aL as w,bs as y,al as k,aI as d,am as r,$ as p}from"./index-1e3b5e9c.js";const l=t=>(typeof t.matchListTime=="string"&&t.matchListTime.indexOf("-")>0&&(t.matchListTime=w(t.matchListTime),t.matchStartTime=w(t.matchStartTime),t.matchEndTime=w(t.matchEndTime)),{matchId:t.matchId,teamMatchId:t.teamMatchId,matchListTime:t.matchListTime,matchStartTime:t.matchStartTime,matchEndTime:t.matchEndTime,arenaCreator:f(t.arenaCreator),challenger:f(t.challenger),arenaCreatorSignature:t.arenaCreatorSignature,challengerSignature:t.challengerSignature,extraSignature:t.extraSignature}),f=t=>t?{owner:t.owner,nftAddress:t.nftAddress,tokenId:t.tokenId,sellPrice:t.sellPrice,soldPrice:t.soldPrice}:{owner:y,nftAddress:y,tokenId:-1,sellPrice:"0",soldPrice:"0"},x=t=>({matchResultParam:t.matchResultParam,userVoteParam:t.userVoteParam}),P=t=>({matchId:t.matchId,nftAddress:t.nftAddress,tokenId:Number(t.tokenId),bidPrice:Number(t.bidPrice),refundableAmount:Number(t.refundableAmount),expectedBonus:Number(t.expectedBonus),expectedLost:Number(t.expectedLost)}),D=t=>({matchId:t.matchId,autoStart:t.autoStart,matchListTime:t.matchListTime,matchStartTime:t.matchStartTime,matchEndTime:t.matchEndTime,arenaCreator:M(t.arenaCreator),challenger:M(t.challenger),arenaCreatorSignature:t.arenaCreatorSignature,challengerSignature:t.challengerSignature,extraSignature:t.extraSignature}),M=t=>({owner:t.owner,nftAddress:t.nftAddress,tokenId:t.tokenId,sellPrice:t.sellPrice});class R{constructor(i){m(this,"prev");m(this,"next");this.prev=i.prev,this.next=i.next}}class E extends k{constructor(){super();m(this,"account")}async getMatchDataByMatchId(e,s){if(!d(e))throw new Error("chain_id is not L2 chain id");const a=this.gateway+"/match/id/"+e+"/"+s,n=await r.get(a);return this.checkResponse(n),new h(n.data.data)}async getMatchDataExtByMatchId(e){const s=this.gateway+"/match/ext/"+e,a=await r.get(s);return this.checkResponse(a),new g(a.data.data)}async getMatchDataListByTeamMatchId(e,s){if(!d(e))throw new Error("chain_id is not L2 chain id");const a=this.gateway+"/match/team/"+e+"/"+s,n=await r.get(a);return this.checkResponse(n),n.data.data.map(c=>new h(c))}async getMatchDataListByStatus(e,s,a,n){if(!d(e))throw new Error("chain_id is not L2 chain id");const c=this.gateway+"/match/status/"+e+"/"+s+"?page="+a+"&page_size="+n,o=await r.get(c);return this.checkResponse(o),o.data.data.map(u=>new h(u))}async getMatchDataExtListByStatus(e,s,a){const n=this.gateway+"/match/status-ext/"+e+"?page="+s+"&page_size="+a,c=await r.get(n);return this.checkResponse(c),c.data.data.map(o=>new g(o))}async getMatchDataListByUser(e,s,a,n){if(!d(e))throw new Error("chain_id is not L2 chain id");const c=this.gateway+"/match/user/"+e+"/"+s+"?page="+a+"&page_size="+n,o=await r.get(c);return this.checkResponse(o),o.data.data.map(u=>new h(u))}async getMatchDataExtListByUser(e,s,a){const n=this.gateway+"/match/user-ext/"+e+"?page="+s+"&page_size="+a,c=await r.get(n);return this.checkResponse(c),c.data.data.map(o=>new g(o))}async getMatchDataListByNftAddress(e,s){const a=p(),n=this.gateway+"/match/nft/"+a+"/"+e+"/"+s,c=await r.get(n);return this.checkResponse(c),c.data.data.map(o=>new h(o))}async getMatchDataExtListByNftAddress(e,s){const a=p(),n=this.gateway+"/match/nft-ext/"+a+"/"+e+"/"+s,c=await r.get(n);return this.checkResponse(c),c.data.data.map(o=>new g(o))}async getMatchDataByMatchIdAndNftAddress(e,s,a){const n=this.gateway+"/match/nft-in-match/"+e+"/"+s+"/"+a,c=await r.get(n);this.checkResponse(c);const o=c.data.data;return new h(o)}async nftAddressIsInArena(e,s){const a=this.gateway+"/match/nft-in-create/"+e+"/"+s,n=await r.get(a);return this.checkResponse(n),!!n.data.data}async nftAddressIsInChallenge(e,s,a){const n=this.gateway+"/match/nft-in-challenge/"+e+"/"+s+"/"+a,c=await r.get(n);return this.checkResponse(c),!!c.data.data}async getMatchResult(e){const s=this.gateway+"/match/result/"+e,a=await r.get(s);return this.checkResponse(a),x(a.data.data)}async createMatch(e){const s=this.gateway+"/match/create",a=await r.post(s,e);return this.checkResponse(a),l(a.data.data)}async cancelMatch(e){const s=this.gateway+"/match/cancel",a=await r.post(s,e);return this.checkResponse(a),new h(a.data.data)}async cancelChallenge(e){const s=this.gateway+"/match/challenge/cancel",a=await r.post(s,e);return this.checkResponse(a),new h(a.data.data)}async challengeMatch(e){const s=this.gateway+"/match/challenge",a=await r.post(s,e);return this.checkResponse(a),l(a.data.data)}async startMatch(e){const s=this.gateway+"/match/start",a=await r.post(s,e);return this.checkResponse(a),l(a.data.data)}async getPlayingMatchIds(e,s){s||(s=p());const a=this.gateway+"/match/playing/"+s+"/"+e,n=await r.get(a);return this.checkResponse(n),n.data.data}async getPrevAndNextMatchId(e,s){s||(s=p());const a=this.gateway+"/match/prev-and-next/"+s+"/"+e,n=await r.get(a);return this.checkResponse(n),new R(n.data.data)}}export{E as M,P as a,D as f};
