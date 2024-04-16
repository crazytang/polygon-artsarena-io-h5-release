import{S as B}from"./SelectNFTModal-8efa1495.js";import{d as D,ah as P,af as j,r as d,m as R,o as U,by as V,z as K,b as n,c as _,e as t,f as a,t as Z,F as w,k as L,s as q,h as m,q as y,w as b,p as z,j as W,aj as H,B as J,l as O}from"./index-b6389c7f.js";import{g as G,b as Q,a as I,h as X}from"./axios-8ebf58aa.js";import{P as Y}from"./enums-0c352bd8.js";import{C as $}from"./close_icon-ee0c1106.js";import{M as k}from"./match-service-ce716eea.js";import{M as tt}from"./match-api-service-05a393b9.js";import{C as et}from"./user-service-059b9971.js";import{I as T}from"./index-8982a7a0.js";import{P as st}from"./PlusOutlined-4babd4ef.js";import"./contract-data-service-8828ce35.js";import"./index-f276f24a.js";import"./Checkbox-bb81cb44.js";import"./challenge-data-66d06939.js";import"./match-data-01707e11.js";import"./nft-data-2a28f3bd.js";import"./css-73d90cf0.js";import"./AntdIcon-2f26085b.js";const o=r=>(z("data-v-9d26abb0"),r=r(),W(),r),at={class:"flex space-x-[30px] createRing"},ot={class:"w-[633px] h-[720px]"},ct={key:0,class:"p-4 space-y-4 m1"},nt={class:"text-xl text-white font-pf"},it={class:"flex space-x-3 overflow-x-auto whitespace-nowrap scrollBar-x",ref:"wrapper"},rt={class:"inline-block space-x-3"},lt={class:"w-full h-full p-[30px] m1"},pt=o(()=>t("p",{class:"text-[20px] text-white font-pf"},"选择你出战的NFT",-1)),dt=o(()=>t("p",{class:"mb-[15px] text-[15px] f-1"},"敗方僅在有效票數超過 20 時，才會被銷毁",-1)),_t=["src"],mt={class:"absolute cursor-pointer top-1 right-1"},ut={class:"w-[536px] p-[30px] m2",style:{"align-self":"baseline"}},ht=o(()=>t("p",{class:"text-xl text-white font-pf"},"設置NFT售價",-1)),ft={class:"mt-3 space-y-2"},xt=o(()=>t("p",{class:"text-sm font-primary"},"對戰勝出，NFT將出售給搶購人",-1)),vt=o(()=>t("span",{class:"text-base font-autom font-primary"},"ETH ",-1)),gt=o(()=>t("p",{class:"text-xs f-2"}," tips：將售價設高，你將可能保留你的NFT，但對手可能因無法贏得推廣費而不與你對戰。 ",-1)),wt=o(()=>t("span",{class:"text-sm font-bold text-black font-pf"}," 提交(NFT將被鎖定) ",-1)),yt=o(()=>t("span",{class:"text-xs text-gray-700"},"請在48小時內選擇一位挑戰者",-1)),bt=D({__name:"index",setup(r){P();const F=j(),l=d({}),f=d(),u=d(),N=d(!1);R({checked:1,imgs:["https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"]});const{type:x,targetId:h}=F.query||{},v={fight:{text:"向 AZUIKI 發出“单挑”挑戰，等待擂主選擇對手",num:1},team:{text:"向 AZUIKI 發出“團滅戰”挑戰，等待擂主選擇對手",num:5}},p=G();let S=Q();const C=()=>{var e,s;(s=(e=f.value)==null?void 0:e.openModal)==null||s.call(e)};U(async()=>{if(!p||!p.address||S===null||h===void 0)return;const s=await new tt().getMatchDataByMatchId(I(),h);if(console.log("match_data",s),!s)throw new Error("match_data is not existed")});function M(e){console.log(e),l.value=e}const A=async()=>{const{nftAddress:e,nftTokenId:s}=l.value;await E(e,s-0)},E=async(e,s)=>{const c=await new et().getNFTStatus(e,s);if(!c.stakedInPool){const i=X();await k.stake(i,e,s)}if(c.ownerInPool!=p.address)throw new Error("NFT not owned by user");if(c.stakeStatus!=Y.STAKED)throw new Error("NFT status is not STAKED");try{const i=await k.createMatch(p.address,I(),e,s,u.value);console.log("match_data_param",i)}catch(i){throw i}};return(e,s)=>{const g=V("loading");return K((n(),_("div",at,[t("section",ot,[a(h)?(n(),_("div",ct,[t("p",nt,Z(v[a(x)].text),1),t("div",it,[t("div",rt,[(n(!0),_(w,null,L(v[a(x)].num,c=>(n(),y(a(T),{key:c,width:70,height:70,src:"http://test.burnyou.yingguopi.com:3000/collection/image/0x53F433a6ca4940d9437AD08E3e394733920ECbb9/2",preview:!1}))),128))])],512)])):q("",!0),t("div",lt,[pt,dt,t("div",{class:"relative flex items-center justify-center w-full h-full bg-black m1-add",style:{border:"1px solid #393939"},onClick:C},[l.value.nftAddress?(n(),_(w,{key:0},[t("img",{src:l.value.cacheImageUrl},null,8,_t),t("div",mt,[m(a(T),{width:30,height:30,src:a($),preview:!1},null,8,["src"])])],64)):(n(),y(a(st),{key:1,class:"cursor-pointer text-7xl f-2"}))])])]),t("section",ut,[ht,t("div",ft,[xt,m(a(H),{value:u.value,"onUpdate:value":s[0]||(s[0]=c=>u.value=c),class:"custom-input"},{suffix:b(()=>[vt]),_:1},8,["value"]),gt]),m(a(J),{class:"bg-primary mt-7",onClick:A},{default:b(()=>[wt,yt]),_:1})]),m(B,{ref_key:"selectNFTRef",ref:f,onSuccess:M},null,512)])),[[g,N.value]])}}});const Zt=O(bt,[["__scopeId","data-v-9d26abb0"]]);export{Zt as default};