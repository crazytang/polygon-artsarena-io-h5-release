import{an as $,a_ as O,ag as _,bf as S,b1 as E,ad as R,au as y,av as T,aH as t,a4 as r,ah as a,be as U,b6 as W,b5 as o,aF as p,bd as j,bb as q,bc as z,at as A}from"./index-1e3b5e9c.js";import{B as F,W as H}from"./burn-icon-93c9a88e.js";import{T as K}from"./publicUnit-82a6e2b0.js";import{i as L}from"./isMobile-40ed9066.js";import{T as G}from"./index-f42bfe17.js";import{D as J}from"./index-1e62a016.js";const Q={class:"sales_nft_img"},X=["src"],Y={class:"nft_info_ns"},Z={class:"nft_info_name"},ee={class:"nft_info_symbol"},ae={class:"nft_info_price"},te=$({__name:"index",props:{data:{type:Object,default:()=>{}},load:{type:Boolean,default:!1},index:{type:Number,default:999}},emits:["listing","delist"],setup(B,{emit:C}){const{t:m}=O(),e=B,n=_(!1),f=_(L()),v=C,[l,M]=[S(),E()],u=_();R(()=>{f.value?n.value=!0:n.value=!1,l.path=="/account/listing"?u.value=m("views.fixedPrice.t5"):u.value=m("views.fixedPrice.t6")});const P=()=>{l.path=="/account/sales"?v("listing",e.data,e.index):v("delist",e.data,e.index)},w=()=>{f.value||(n.value=!0)},D=()=>{f.value||(n.value=!1)},V=i=>{const{nftAddress:c,nftTokenId:d}=i;M.push({path:"/detail/index",query:{nft_address:c,token_id:d}})};return(i,c)=>{var d,b,g,h,I,k,x;return y(),T("div",{class:"nft_info",onMouseenter:w,onMouseleave:D},[t("div",Q,[r(a(U),{src:(d=i.$props.data)==null?void 0:d.cacheImageUrl,alt:"img"},null,8,["src"]),a(l).path=="/account/sales"?(y(),T("img",{key:0,src:(b=i.$props.data)!=null&&b.nftInPool?a(F):a(H),class:"nft_info_status"},null,8,X)):W("",!0),t("div",{class:"nft_info_ko",onClick:c[0]||(c[0]=s=>V(e.data))},"k.o."+o((g=e.data)==null?void 0:g.koScore),1)]),t("div",Y,[t("div",Z,[r(a(G),{title:((h=e.data)==null?void 0:h.metaName)??"# "+((I=e.data)==null?void 0:I.nftTokenId)},{default:p(()=>{var s,N;return[j(o(((s=e.data)==null?void 0:s.metaName)??"# "+((N=e.data)==null?void 0:N.nftTokenId)),1)]}),_:1},8,["title"])]),t("div",ee,o((k=e.data)==null?void 0:k.name),1)]),t("div",ae,"Last sale: "+o((x=e.data)==null?void 0:x.lastBiddedPrice)+" "+o(a(K)),1),r(a(J),{placement:"bottom",closable:!1,open:n.value,"get-container":!1,style:{position:"absolute"},class:z({cancel_order:a(l).path=="/account/listing"})},{default:p(()=>{var s;return[r(a(q),{spinning:(s=i.$props.data)==null?void 0:s.load},{default:p(()=>[t("div",{onClick:P,class:"active"},o(u.value),1)]),_:1},8,["spinning"])]}),_:1},8,["open","class"])],32)}}});const de=A(te,[["__scopeId","data-v-b02f3e3b"]]);export{de as N};
