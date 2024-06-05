var u=Object.defineProperty;var y=(t,r,e)=>r in t?u(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e;var w=(t,r,e)=>(y(t,typeof r!="symbol"?r+"":r,e),e);import{M as h}from"./match-data-01707e11.js";import{p as d,A as M,q as m,e as c}from"./axios-bfe83dd9.js";const g=t=>({matchId:t.matchId,teamMatchId:t.teamMatchId,matchListTime:t.matchListTime,matchStartTime:t.matchStartTime,matchEndTime:t.matchEndTime,arenaCreator:l(t.arenaCreator),challenger:l(t.challenger),arenaCreatorSignature:t.arenaCreatorSignature,challengerSignature:t.challengerSignature,extraSignature:t.extraSignature}),l=t=>t?{owner:t.owner,nftAddress:t.nftAddress,tokenId:t.tokenId,sellPrice:t.sellPrice,soldPrice:t.soldPrice}:{owner:d,nftAddress:d,tokenId:-1,sellPrice:"0",soldPrice:"0"};class L extends M{constructor(){super();w(this,"account")}async getMatchDataByMatchId(e,s){if(!m(e))throw new Error("l2_chain_id is not L2 chain id");const a=this.gateway+"/match/"+e+"/"+s,n=await c.get(a);return this.checkResponse(n),new h(n.data.data)}async getMatchDataListByTeamMatchId(e,s){if(!m(e))throw new Error("l2_chain_id is not L2 chain id");const a=this.gateway+"/match/team/"+e+"/"+s,n=await c.get(a);return this.checkResponse(n),n.data.data.map(o=>new h(o))}async getMatchDataListByStatus(e,s,a,n){if(!m(e))throw new Error("l2_chain_id is not L2 chain id");const o=this.gateway+"/match/status/"+e+"/"+s+"?page="+a+"&page_size="+n,i=await c.get(o);return this.checkResponse(i),i.data.data.map(p=>new h(p))}async getMatchDataListByUser(e,s,a,n){if(!m(e))throw new Error("l2_chain_id is not L2 chain id");const o=this.gateway+"/match/user/"+e+"/"+s+"?page="+a+"&page_size="+n,i=await c.get(o);return this.checkResponse(i),i.data.data.map(p=>new h(p))}async createMatch(e){const s=this.gateway+"/match/create",a=await c.post(s,e);return this.checkResponse(a),g(a.data.data)}async challengeMatch(e){const s=this.gateway+"/match/challenge",a=await c.post(s,e);return this.checkResponse(a),g(a.data.data)}async startMatch(e){const s=this.gateway+"/match/start",a=await c.post(s,e);return this.checkResponse(a),g(a.data.data)}}export{L as M};
