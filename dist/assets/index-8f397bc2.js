import{d as w,r as _,ah as I,m as F,o as j,b as n,c as p,e as s,F as d,k as T,h as e,f as o,q as N,w as f,P as B,p as C,j as P,aj as E,B as S,l as R}from"./index-a3a92cc6.js";import{S as V}from"./SelectNFTModal-1b1fc3f4.js";import{C as U}from"./close_icon-ee0c1106.js";import{B as Z}from"./core.esm-b974a788.js";import{I as u}from"./index-eff3b1bd.js";import{P as M}from"./PlusOutlined-1f734088.js";import"./user-service-7539de90.js";import"./axios-c188113d.js";import"./nft-data-2fc052cb.js";import"./contract-data-service-575f694d.js";import"./index-1256ad27.js";import"./Checkbox-ce022fa7.js";import"./css-14a59bc5.js";import"./AntdIcon-f26c38ad.js";const t=a=>(C("data-v-3c973a16"),a=a(),P(),a),A={class:"flex py-16 space-x-10 createRing"},z={class:"w-6/12 space-y-8"},D={class:"p-4 space-y-4 m1"},J=t(()=>s("p",{class:"text-xl text-white font-pf"}," 向 AZUIKI 發出“團滅戰”挑戰，等待擂主選擇對手 ",-1)),W={class:"inline-block space-x-3"},q={class:"w-full p-4 m1"},H=t(()=>s("p",{class:"text-xl text-white font-pf"},"选择你出战的NFT",-1)),K=t(()=>s("p",{class:"mb-3 text-sm f-1"},"敗方僅在有效票數超過 20 時，才會被銷",-1)),L={class:"absolute cursor-pointer top-1 right-1"},O={class:"w-6/12 p-4 m2",style:{"align-self":"baseline"}},X=t(()=>s("p",{class:"text-xl text-white font-pf"},"設置NFT售價",-1)),$={class:"mt-3 space-y-2"},G=t(()=>s("p",{class:"text-sm font-primary"},"對戰勝出，NFT將出售給搶購人",-1)),Q=t(()=>s("span",{class:"text-base font-autom font-primary"},"ETH ",-1)),Y=t(()=>s("p",{class:"text-xs f-2"}," tips：將售價設高，你將可能保留你的NFT，但對手可能因無法贏得推廣費而不與你對戰。 ",-1)),ss=t(()=>s("span",{class:"text-sm font-bold text-black font-pf"}," 提交(NFT將被鎖定) ",-1)),ts=t(()=>s("span",{class:"text-xs text-gray-700"},"請在48小時內選擇一位挑戰者",-1)),es=w({__name:"index",setup(a){const r=_(),h=I(),m=_(),i=F({checked:1,imgs:["https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"]}),x=()=>{var c,l;(l=(c=m.value)==null?void 0:c.openModal)==null||l.call(c)},g=()=>{h.push(`/ring/tips/${i.checked}`)},y=()=>{i.imgs=[]},b=()=>{i.imgs=["https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"]};return j(()=>{new Z(r.value,{scrollX:!0,probeType:3})}),(c,l)=>{const v=B;return n(),p("div",A,[s("section",z,[s("div",D,[J,s("div",{class:"flex space-x-3 overflow-x-auto whitespace-nowrap scrollBar-x",ref_key:"wrapper",ref:r},[s("div",W,[(n(),p(d,null,T(5,k=>e(o(u),{key:k,width:70,height:70,src:"http://test.burnyou.yingguopi.com:3000/collection/image/0x53F433a6ca4940d9437AD08E3e394733920ECbb9/2",preview:!1})),64))])],512)]),s("div",q,[H,K,s("div",{class:"relative flex items-center justify-center w-full bg-black m1-add",style:{border:"1px solid #393939"},onClick:x},[i.imgs.length?(n(),p(d,{key:0},[e(v,{src:"http://test.burnyou.yingguopi.com:3000/collection/image/0x53F433a6ca4940d9437AD08E3e394733920ECbb9/2",preview:!1}),s("div",L,[e(o(u),{width:30,height:30,src:o(U),preview:!1,onClick:y},null,8,["src"])])],64)):(n(),N(o(M),{key:1,class:"text-6xl cursor-pointer f-2"}))])])]),s("section",O,[X,s("div",$,[G,e(o(E),{class:"custom-input",placeholder:"輸入售價"},{suffix:f(()=>[Q]),_:1}),Y]),e(o(S),{class:"bg-primary mt-7",onClick:g},{default:f(()=>[ss,ts]),_:1})]),e(V,{ref_key:"selectNFTRef",ref:m,onSuccess:b},null,512)])}}});const xs=R(es,[["__scopeId","data-v-3c973a16"]]);export{xs as default};
