import{a as i}from"./user-service-7437982e.js";import{C as g}from"./contract-data-service-acfa5433.js";import{c as r,d as u,n as s,w as e,a as m}from"./axios-3b6576ea.js";class o extends i{constructor(a,t,n){super(a,t,n)}static async connect(){const a=m(),t=await g.getL2BattlePoolData(a);return new o(t.contract_address,t.abi,a)}async getUserBalance(a){const t=await this.contract.getUserBalance(a);return r(t)}async getUserFrozenBalance(a){const t=await this.contract.getUserFrozenBalance(a);return r(t)}async getUserNonce(a){const t=await this.contract.getUserNonce(a);return u(t)}async deposit(a){const t=s(a,18);console.log("bn_amount",t.toString());const{hash:n}=await e({...this.getConfig(),functionName:"deposit",args:[],value:BigInt(t.toString())});return n}async withdraw(a,t){const n=s(a),{hash:c}=await e({...this.getConfig(),functionName:"withdraw",args:[n,t]});return c}}export{o as B};
