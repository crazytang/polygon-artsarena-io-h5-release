var S=Object.defineProperty;var w=(p,e,t)=>e in p?S(p,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):p[e]=t;var s=(p,e,t)=>(w(p,typeof e!="symbol"?e+"":e,t),t);import{al as x,am as a,aL as h,aM as m}from"./index-1e3b5e9c.js";import{N as A}from"./nft-data-00f9cd4d.js";import{C as I}from"./collection-data-v2-15891f6d.js";import{N,a as g,O as k,b as u,c as d,d as T,A as l}from"./enums-1cf4aa58.js";import{u as E}from"./utils-518c8eb5.js";class o extends A{constructor(t){super(t.nftData);s(this,"id");s(this,"makerAddress");s(this,"orderSide");s(this,"assetType");s(this,"orderType");s(this,"nftAddress");s(this,"tokenId");s(this,"amount");s(this,"nftInPool");s(this,"paymentToken");s(this,"price");s(this,"priceBigint");s(this,"listingTime");s(this,"expiredTime");s(this,"makerNonce");s(this,"makerSignature");s(this,"makerExtraSignature");s(this,"takerAddress");s(this,"takerNonce");s(this,"takerExtraSignature");s(this,"orderStatus");s(this,"txHash");s(this,"filledAt");s(this,"chainId");s(this,"collectionData");s(this,"load");this.id=t.id,this.makerAddress=t.makerAddress,this.orderSide=t.orderSide,this.assetType=t.assetType,this.orderType=t.orderType,this.nftAddress=t.nftAddress,this.tokenId=t.tokenId,this.amount=t.amount,this.nftInPool=t.nftInPool,this.paymentToken=t.paymentToken,this.price=t.price,this.priceBigint=t.priceBigint,this.listingTime=t.listingTime,this.expiredTime=t.expiredTime,this.makerNonce=t.makerNonce,this.makerSignature=t.makerSignature,this.makerExtraSignature=t.makerExtraSignature,this.takerAddress=t.takerAddress,this.takerNonce=t.takerNonce,this.takerExtraSignature=t.takerExtraSignature,this.orderStatus=t.orderStatus,this.txHash=t.txHash,this.filledAt=t.filledAt,this.chainId=t.chainId,this.load=t.load,t.collectionData?this.collectionData=new I(t.collectionData):this.collectionData=null}}class C extends x{async getListingOrders(e,t){const r=this.gateway+"/nft-order/listing-nfts/"+e,i=await a.get(r,{params:t});return this.checkResponse(i),i.data.data.map(n=>new o(n))}async getListingOrdersByNftAddress(e,t,r,i){const n=this.gateway+"/nft-order/listing-nfts/"+e+"/"+t+"/?page="+r+"&page_size="+i,c=await a.get(n);return this.checkResponse(c),c.data.data.map(y=>new o(y))}async getUserListingOrdres(e,t){const r=this.gateway+"/nft-order/user-listing-nfts/"+t+"/"+e,i=await a.get(r);return this.checkResponse(i),i.data.data.map(n=>new o(n))}async getUserAllOrders(e,t){const r=this.gateway+"/nft-order/user-nfts/"+t+"/"+e,i=await a.get(r);return this.checkResponse(i),i.data.data.map(n=>new o(n))}async getNFTAllOrders(e,t,r){const i=this.gateway+"/nft-order/nft/"+r+"/"+e+"/"+t,n=await a.get(i);return this.checkResponse(n),n.data.data.map(c=>new o(c))}async checkOrdreData(e,t){const r=this.gateway+"/nft-order/check-order-data/"+t,i=await a.post(r,e);return this.checkResponse(i),i.data.data}async getNFTOrderById(e,t){const r=this.gateway+"/nft-order/id/"+t+"/"+e,i=await a.get(r);return this.checkResponse(i),new o(i.data.data)}async getNFTOrderByNftAddressAndTokenId(e,t,r){const i=N.LISTING,n=this.gateway+"/nft-order/nft-status/"+i+"/"+r+"/"+e+"/"+t,c=await a.get(n);return this.checkResponse(c),c.data.data?new o(c.data.data):null}async makerList(e){const t=this.gateway+"/nft-order/maker-list",r=await a.post(t,e);return this.checkResponse(r),new o(r.data.data)}async preTaker(e){const t=this.gateway+"/nft-order/pre-taker",r=await a.post(t,e);return this.checkResponse(r),new o(r.data.data)}makeOrderInputData(e){const t=E.splitSignature(e.makerSignature),r={order:{trader:e.makerAddress,side:e.orderSide==g.SELL?k.SELL:k.BUY,orderType:e.orderType==u.FIXED_PRICE?d.FixedPrice:d.EnglishAuction,collection:e.nftAddress,assetType:e.assetType==T.ERC721?l.ERC721:l.ERC1155,tokenId:e.tokenId,amount:e.amount,nftInPool:e.nftInPool,paymentToken:e.paymentToken,price:e.price,listingTime:h(e.listingTime),expirationTime:h(e.expiredTime),traderNonce:e.makerNonce,extraParams:m},extraSignature:e.makerExtraSignature,v:t.v,r:t.r,s:t.s,merkleTree:{root:m,proof:[]}},i={order:{trader:e.takerAddress,side:e.orderSide==g.SELL?k.BUY:k.SELL,orderType:e.orderType==u.FIXED_PRICE?d.FixedPrice:d.EnglishAuction,collection:e.nftAddress,assetType:e.assetType==T.ERC721?l.ERC721:l.ERC1155,tokenId:e.tokenId,amount:e.amount,nftInPool:e.nftInPool,paymentToken:e.paymentToken,price:e.price,listingTime:h(e.listingTime),expirationTime:h(e.expiredTime),traderNonce:e.takerNonce,extraParams:m},extraSignature:e.takerExtraSignature,v:0,r:m,s:m,merkleTree:{root:m,proof:[]}};return{maker_input:r,taker_input:i}}}export{C as N};