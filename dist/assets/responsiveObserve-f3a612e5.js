import{a9 as m,aa as o,ab as l}from"./index-1e3b5e9c.js";const b=["xxxl","xxl","xl","lg","md","sm","xs"],u=r=>({xs:`(max-width: ${r.screenXSMax}px)`,sm:`(min-width: ${r.screenSM}px)`,md:`(min-width: ${r.screenMD}px)`,lg:`(min-width: ${r.screenLG}px)`,xl:`(min-width: ${r.screenXL}px)`,xxl:`(min-width: ${r.screenXXL}px)`,xxxl:`{min-width: ${r.screenXXXL}px}`});function v(){const[,r]=m();return o(()=>{const n=u(r.value),i=new Map;let c=-1,a={};return{matchHandlers:{},dispatch(e){return a=e,i.forEach(t=>t(a)),i.size>=1},subscribe(e){return i.size||this.register(),c+=1,i.set(c,e),e(a),c},unsubscribe(e){i.delete(e),i.size||this.unregister()},unregister(){Object.keys(n).forEach(e=>{const t=n[e],s=this.matchHandlers[t];s==null||s.mql.removeListener(s==null?void 0:s.listener)}),i.clear()},register(){Object.keys(n).forEach(e=>{const t=n[e],s=h=>{let{matches:x}=h;this.dispatch(l(l({},a),{[e]:x}))},d=window.matchMedia(t);d.addListener(s),this.matchHandlers[t]={mql:d,listener:s},s(d)})},responsiveMap:n}})}export{b as r,v as u};
