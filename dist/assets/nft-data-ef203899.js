var s=Object.defineProperty;var c=(r,e,n)=>e in r?s(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var i=(r,e,n)=>(c(r,typeof e!="symbol"?e+"":e,n),n);import{bg as h}from"./axios-578599d8.js";class o{constructor(e){i(this,"nftAddress");i(this,"name");i(this,"symbol");i(this,"nftTokenId");i(this,"nftType");i(this,"chainId");i(this,"tokenUri");i(this,"metaData");i(this,"imageUri");i(this,"cacheImageUrl");i(this,"animationUri");i(this,"cacheAnimationUri");i(this,"koScore");i(this,"initBiddedPrice");i(this,"lastBiddedPrice");i(this,"burned");i(this,"burnedTxHash");this.nftAddress=e.nftAddress,this.name=e.name,this.symbol=e.symbol,this.nftTokenId=e.nftTokenId,this.nftType=e.nftType,this.chainId=e.chainId,this.tokenUri=e.tokenUri,this.metaData=e.metaData,this.imageUri=e.imageUri,this.cacheImageUrl=e.cacheImageUrl,h()&&e.cacheImageJpeg?this.cacheImageUrl=e.cacheImageJpeg:this.cacheImageUrl=e.cacheImageUrl,this.animationUri=e.animationUri,this.cacheAnimationUri=e.cacheAnimationUri,this.koScore=Number(e.koScore),this.initBiddedPrice=Number(e.initBiddedPrice),this.lastBiddedPrice=Number(e.lastBiddedPrice),this.burned=e.burned,this.burnedTxHash=e.burnedTxHash}}export{o as N};
