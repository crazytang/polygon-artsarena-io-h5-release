var m=Object.defineProperty;var l=(s,a,n)=>a in s?m(s,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[a]=n;var o=(s,a,n)=>(l(s,typeof a!="symbol"?a+"":a,n),n);import{e as i,q as w,h as g}from"./axios-8ebf58aa.js";class d{constructor(a,n,c,r,t){o(this,"contract_name");o(this,"contract_address");o(this,"abi");o(this,"chain_id");o(this,"network_name");this.contract_name=a,this.contract_address=n,this.abi=c,this.chain_id=r,this.network_name=t}}const e=class e{constructor(){}static async getL1NFTBattlePoolData(){const a=g(),n="NFTBattlePool",c=e.gateway+"/contract/"+a+"/"+n,t=(await i.get(c)).data.data;return new d(t.contractName,t.contractAddress,t.abi,t.chainId,t.networkName)}static async getL2BattleData(a){if(!w(a))throw new Error("invalid l2 chain id");const n="Battle",c=e.gateway+"/contract/"+a+"/"+n,t=(await i.get(c)).data.data;return new d(t.contractName,t.contractAddress,t.abi,t.chainId,t.networkName)}static async getL2BattlePoolData(a){if(!w(a))throw new Error("invalid l2 chain id");const n="BattlePool",c=e.gateway+"/contract/"+a+"/"+n,t=(await i.get(c)).data.data;return new d(t.contractName,t.contractAddress,t.abi,t.chainId,t.networkName)}};o(e,"gateway","/api");let h=e;export{h as C};
