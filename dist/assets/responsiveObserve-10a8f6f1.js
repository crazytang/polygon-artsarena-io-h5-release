import{c7 as m,L as o,_ as l}from"./index-a3d4c865.js";const v=["xxxl","xxl","xl","lg","md","sm","xs"],u=r=>({xs:`(max-width: ${r.screenXSMax}px)`,sm:`(min-width: ${r.screenSM}px)`,md:`(min-width: ${r.screenMD}px)`,lg:`(min-width: ${r.screenLG}px)`,xl:`(min-width: ${r.screenXL}px)`,xxl:`(min-width: ${r.screenXXL}px)`,xxxl:`{min-width: ${r.screenXXXL}px}`});function b(){const[,r]=m();return o(()=>{const n=u(r.value),i=new Map;let a=-1,c={};return{matchHandlers:{},dispatch(e){return c=e,i.forEach(t=>t(c)),i.size>=1},subscribe(e){return i.size||this.register(),a+=1,i.set(a,e),e(c),a},unsubscribe(e){i.delete(e),i.size||this.unregister()},unregister(){Object.keys(n).forEach(e=>{const t=n[e],s=this.matchHandlers[t];s==null||s.mql.removeListener(s==null?void 0:s.listener)}),i.clear()},register(){Object.keys(n).forEach(e=>{const t=n[e],s=h=>{let{matches:x}=h;this.dispatch(l(l({},c),{[e]:x}))},d=window.matchMedia(t);d.addListener(s),this.matchHandlers[t]={mql:d,listener:s},s(d)})},responsiveMap:n}})}export{v as r,b as u};
