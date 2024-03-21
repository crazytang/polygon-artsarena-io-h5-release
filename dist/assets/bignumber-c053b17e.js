var Ee=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,ae=Math.ceil,q=Math.floor,U="[BigNumber Error] ",we=U+"Number primitive has more than 15 significant digits: ",H=1e14,O=14,he=9007199254740991,pe=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],J=1e7,R=1e9;function Ne(E){var N,_,D,p=h.prototype={constructor:h,toString:null,valueOf:null},I=new h(1),x=20,B=4,C=-7,k=21,Q=-1e7,z=1e7,Z=!1,b=1,Y=0,fe={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},K="0123456789abcdefghijklmnopqrstuvwxyz",le=!0;function h(e,r){var i,o,t,l,c,n,f,u,s=this;if(!(s instanceof h))return new h(e,r);if(r==null){if(e&&e._isBigNumber===!0){s.s=e.s,!e.c||e.e>z?s.c=s.e=null:e.e<Q?s.c=[s.e=0]:(s.e=e.e,s.c=e.c.slice());return}if((n=typeof e=="number")&&e*0==0){if(s.s=1/e<0?(e=-e,-1):1,e===~~e){for(l=0,c=e;c>=10;c/=10,l++);l>z?s.c=s.e=null:(s.e=l,s.c=[e]);return}u=String(e)}else{if(!Ee.test(u=String(e)))return D(s,u,n);s.s=u.charCodeAt(0)==45?(u=u.slice(1),-1):1}(l=u.indexOf("."))>-1&&(u=u.replace(".","")),(c=u.search(/e/i))>0?(l<0&&(l=c),l+=+u.slice(c+1),u=u.substring(0,c)):l<0&&(l=u.length)}else{if(v(r,2,K.length,"Base"),r==10&&le)return s=new h(e),G(s,x+s.e+1,B);if(u=String(e),n=typeof e=="number"){if(e*0!=0)return D(s,u,n,r);if(s.s=1/e<0?(u=u.slice(1),-1):1,h.DEBUG&&u.replace(/^0\.0*|\./,"").length>15)throw Error(we+e)}else s.s=u.charCodeAt(0)===45?(u=u.slice(1),-1):1;for(i=K.slice(0,r),l=c=0,f=u.length;c<f;c++)if(i.indexOf(o=u.charAt(c))<0){if(o=="."){if(c>l){l=f;continue}}else if(!t&&(u==u.toUpperCase()&&(u=u.toLowerCase())||u==u.toLowerCase()&&(u=u.toUpperCase()))){t=!0,c=-1,l=0;continue}return D(s,String(e),n,r)}n=!1,u=_(u,r,10,s.s),(l=u.indexOf("."))>-1?u=u.replace(".",""):l=u.length}for(c=0;u.charCodeAt(c)===48;c++);for(f=u.length;u.charCodeAt(--f)===48;);if(u=u.slice(c,++f)){if(f-=c,n&&h.DEBUG&&f>15&&(e>he||e!==q(e)))throw Error(we+s.s*e);if((l=l-c-1)>z)s.c=s.e=null;else if(l<Q)s.c=[s.e=0];else{if(s.e=l,s.c=[],c=(l+1)%O,l<0&&(c+=O),c<f){for(c&&s.c.push(+u.slice(0,c)),f-=O;c<f;)s.c.push(+u.slice(c,c+=O));c=O-(u=u.slice(c)).length}else c-=f;for(;c--;u+="0");s.c.push(+u)}}else s.c=[s.e=0]}h.clone=Ne,h.ROUND_UP=0,h.ROUND_DOWN=1,h.ROUND_CEIL=2,h.ROUND_FLOOR=3,h.ROUND_HALF_UP=4,h.ROUND_HALF_DOWN=5,h.ROUND_HALF_EVEN=6,h.ROUND_HALF_CEIL=7,h.ROUND_HALF_FLOOR=8,h.EUCLID=9,h.config=h.set=function(e){var r,i;if(e!=null)if(typeof e=="object"){if(e.hasOwnProperty(r="DECIMAL_PLACES")&&(i=e[r],v(i,0,R,r),x=i),e.hasOwnProperty(r="ROUNDING_MODE")&&(i=e[r],v(i,0,8,r),B=i),e.hasOwnProperty(r="EXPONENTIAL_AT")&&(i=e[r],i&&i.pop?(v(i[0],-R,0,r),v(i[1],0,R,r),C=i[0],k=i[1]):(v(i,-R,R,r),C=-(k=i<0?-i:i))),e.hasOwnProperty(r="RANGE"))if(i=e[r],i&&i.pop)v(i[0],-R,-1,r),v(i[1],1,R,r),Q=i[0],z=i[1];else if(v(i,-R,R,r),i)Q=-(z=i<0?-i:i);else throw Error(U+r+" cannot be zero: "+i);if(e.hasOwnProperty(r="CRYPTO"))if(i=e[r],i===!!i)if(i)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))Z=i;else throw Z=!i,Error(U+"crypto unavailable");else Z=i;else throw Error(U+r+" not true or false: "+i);if(e.hasOwnProperty(r="MODULO_MODE")&&(i=e[r],v(i,0,9,r),b=i),e.hasOwnProperty(r="POW_PRECISION")&&(i=e[r],v(i,0,R,r),Y=i),e.hasOwnProperty(r="FORMAT"))if(i=e[r],typeof i=="object")fe=i;else throw Error(U+r+" not an object: "+i);if(e.hasOwnProperty(r="ALPHABET"))if(i=e[r],typeof i=="string"&&!/^.?$|[+\-.\s]|(.).*\1/.test(i))le=i.slice(0,10)=="0123456789",K=i;else throw Error(U+r+" invalid: "+i)}else throw Error(U+"Object expected: "+e);return{DECIMAL_PLACES:x,ROUNDING_MODE:B,EXPONENTIAL_AT:[C,k],RANGE:[Q,z],CRYPTO:Z,MODULO_MODE:b,POW_PRECISION:Y,FORMAT:fe,ALPHABET:K}},h.isBigNumber=function(e){if(!e||e._isBigNumber!==!0)return!1;if(!h.DEBUG)return!0;var r,i,o=e.c,t=e.e,l=e.s;e:if({}.toString.call(o)=="[object Array]"){if((l===1||l===-1)&&t>=-R&&t<=R&&t===q(t)){if(o[0]===0){if(t===0&&o.length===1)return!0;break e}if(r=(t+1)%O,r<1&&(r+=O),String(o[0]).length==r){for(r=0;r<o.length;r++)if(i=o[r],i<0||i>=H||i!==q(i))break e;if(i!==0)return!0}}}else if(o===null&&t===null&&(l===null||l===1||l===-1))return!0;throw Error(U+"Invalid BigNumber: "+e)},h.maximum=h.max=function(){return ge(arguments,-1)},h.minimum=h.min=function(){return ge(arguments,1)},h.random=function(){var e=9007199254740992,r=Math.random()*e&2097151?function(){return q(Math.random()*e)}:function(){return(Math.random()*1073741824|0)*8388608+(Math.random()*8388608|0)};return function(i){var o,t,l,c,n,f=0,u=[],s=new h(I);if(i==null?i=x:v(i,0,R),c=ae(i/O),Z)if(crypto.getRandomValues){for(o=crypto.getRandomValues(new Uint32Array(c*=2));f<c;)n=o[f]*131072+(o[f+1]>>>11),n>=9e15?(t=crypto.getRandomValues(new Uint32Array(2)),o[f]=t[0],o[f+1]=t[1]):(u.push(n%1e14),f+=2);f=c/2}else if(crypto.randomBytes){for(o=crypto.randomBytes(c*=7);f<c;)n=(o[f]&31)*281474976710656+o[f+1]*1099511627776+o[f+2]*4294967296+o[f+3]*16777216+(o[f+4]<<16)+(o[f+5]<<8)+o[f+6],n>=9e15?crypto.randomBytes(7).copy(o,f):(u.push(n%1e14),f+=7);f=c/7}else throw Z=!1,Error(U+"crypto unavailable");if(!Z)for(;f<c;)n=r(),n<9e15&&(u[f++]=n%1e14);for(c=u[--f],i%=O,c&&i&&(n=pe[O-i],u[f]=q(c/n)*n);u[f]===0;u.pop(),f--);if(f<0)u=[l=0];else{for(l=-1;u[0]===0;u.splice(0,1),l-=O);for(f=1,n=u[0];n>=10;n/=10,f++);f<O&&(l-=O-f)}return s.e=l,s.c=u,s}}(),h.sum=function(){for(var e=1,r=arguments,i=new h(r[0]);e<r.length;)i=i.plus(r[e++]);return i},_=function(){var e="0123456789";function r(i,o,t,l){for(var c,n=[0],f,u=0,s=i.length;u<s;){for(f=n.length;f--;n[f]*=o);for(n[0]+=l.indexOf(i.charAt(u++)),c=0;c<n.length;c++)n[c]>t-1&&(n[c+1]==null&&(n[c+1]=0),n[c+1]+=n[c]/t|0,n[c]%=t)}return n.reverse()}return function(i,o,t,l,c){var n,f,u,s,a,g,w,d,S=i.indexOf("."),P=x,m=B;for(S>=0&&(s=Y,Y=0,i=i.replace(".",""),d=new h(o),g=d.pow(i.length-S),Y=s,d.c=r(W(y(g.c),g.e,"0"),10,t,e),d.e=d.c.length),w=r(i,o,t,c?(n=K,e):(n=e,K)),u=s=w.length;w[--s]==0;w.pop());if(!w[0])return n.charAt(0);if(S<0?--u:(g.c=w,g.e=u,g.s=l,g=N(g,d,P,m,t),w=g.c,a=g.r,u=g.e),f=u+P+1,S=w[f],s=t/2,a=a||f<0||w[f+1]!=null,a=m<4?(S!=null||a)&&(m==0||m==(g.s<0?3:2)):S>s||S==s&&(m==4||a||m==6&&w[f-1]&1||m==(g.s<0?8:7)),f<1||!w[0])i=a?W(n.charAt(1),-P,n.charAt(0)):n.charAt(0);else{if(w.length=f,a)for(--t;++w[--f]>t;)w[f]=0,f||(++u,w=[1].concat(w));for(s=w.length;!w[--s];);for(S=0,i="";S<=s;i+=n.charAt(w[S++]));i=W(i,u,n.charAt(0))}return i}}(),N=function(){function e(o,t,l){var c,n,f,u,s=0,a=o.length,g=t%J,w=t/J|0;for(o=o.slice();a--;)f=o[a]%J,u=o[a]/J|0,c=w*f+u*g,n=g*f+c%J*J+s,s=(n/l|0)+(c/J|0)+w*u,o[a]=n%l;return s&&(o=[s].concat(o)),o}function r(o,t,l,c){var n,f;if(l!=c)f=l>c?1:-1;else for(n=f=0;n<l;n++)if(o[n]!=t[n]){f=o[n]>t[n]?1:-1;break}return f}function i(o,t,l,c){for(var n=0;l--;)o[l]-=n,n=o[l]<t[l]?1:0,o[l]=n*c+o[l]-t[l];for(;!o[0]&&o.length>1;o.splice(0,1));}return function(o,t,l,c,n){var f,u,s,a,g,w,d,S,P,m,A,T,re,ue,ce,X,ee,F=o.s==t.s?1:-1,L=o.c,M=t.c;if(!L||!L[0]||!M||!M[0])return new h(!o.s||!t.s||(L?M&&L[0]==M[0]:!M)?NaN:L&&L[0]==0||!M?F*0:F/0);for(S=new h(F),P=S.c=[],u=o.e-t.e,F=l+u+1,n||(n=H,u=$(o.e/O)-$(t.e/O),F=F/O|0),s=0;M[s]==(L[s]||0);s++);if(M[s]>(L[s]||0)&&u--,F<0)P.push(1),a=!0;else{for(ue=L.length,X=M.length,s=0,F+=2,g=q(n/(M[0]+1)),g>1&&(M=e(M,g,n),L=e(L,g,n),X=M.length,ue=L.length),re=X,m=L.slice(0,X),A=m.length;A<X;m[A++]=0);ee=M.slice(),ee=[0].concat(ee),ce=M[0],M[1]>=n/2&&ce++;do{if(g=0,f=r(M,m,X,A),f<0){if(T=m[0],X!=A&&(T=T*n+(m[1]||0)),g=q(T/ce),g>1)for(g>=n&&(g=n-1),w=e(M,g,n),d=w.length,A=m.length;r(w,m,d,A)==1;)g--,i(w,X<d?ee:M,d,n),d=w.length,f=1;else g==0&&(f=g=1),w=M.slice(),d=w.length;if(d<A&&(w=[0].concat(w)),i(m,w,A,n),A=m.length,f==-1)for(;r(M,m,X,A)<1;)g++,i(m,X<A?ee:M,A,n),A=m.length}else f===0&&(g++,m=[0]);P[s++]=g,m[0]?m[A++]=L[re]||0:(m=[L[re]],A=1)}while((re++<ue||m[0]!=null)&&F--);a=m[0]!=null,P[0]||P.splice(0,1)}if(n==H){for(s=1,F=P[0];F>=10;F/=10,s++);G(S,l+(S.e=s+u*O-1)+1,c,a)}else S.e=u,S.r=+a;return S}}();function se(e,r,i,o){var t,l,c,n,f;if(i==null?i=B:v(i,0,8),!e.c)return e.toString();if(t=e.c[0],c=e.e,r==null)f=y(e.c),f=o==1||o==2&&(c<=C||c>=k)?ne(f,c):W(f,c,"0");else if(e=G(new h(e),r,i),l=e.e,f=y(e.c),n=f.length,o==1||o==2&&(r<=l||l<=C)){for(;n<r;f+="0",n++);f=ne(f,l)}else if(r-=c,f=W(f,l,"0"),l+1>n){if(--r>0)for(f+=".";r--;f+="0");}else if(r+=l-n,r>0)for(l+1==n&&(f+=".");r--;f+="0");return e.s<0&&t?"-"+f:f}function ge(e,r){for(var i,o,t=1,l=new h(e[0]);t<e.length;t++)o=new h(e[t]),(!o.s||(i=j(l,o))===r||i===0&&l.s===r)&&(l=o);return l}function oe(e,r,i){for(var o=1,t=r.length;!r[--t];r.pop());for(t=r[0];t>=10;t/=10,o++);return(i=o+i*O-1)>z?e.c=e.e=null:i<Q?e.c=[e.e=0]:(e.e=i,e.c=r),e}D=function(){var e=/^(-?)0([xbo])(?=\w[\w.]*$)/i,r=/^([^.]+)\.$/,i=/^\.([^.]+)$/,o=/^-?(Infinity|NaN)$/,t=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(l,c,n,f){var u,s=n?c:c.replace(t,"");if(o.test(s))l.s=isNaN(s)?null:s<0?-1:1;else{if(!n&&(s=s.replace(e,function(a,g,w){return u=(w=w.toLowerCase())=="x"?16:w=="b"?2:8,!f||f==u?g:a}),f&&(u=f,s=s.replace(r,"$1").replace(i,"0.$1")),c!=s))return new h(s,u);if(h.DEBUG)throw Error(U+"Not a"+(f?" base "+f:"")+" number: "+c);l.s=null}l.c=l.e=null}}();function G(e,r,i,o){var t,l,c,n,f,u,s,a=e.c,g=pe;if(a){e:{for(t=1,n=a[0];n>=10;n/=10,t++);if(l=r-t,l<0)l+=O,c=r,f=a[u=0],s=q(f/g[t-c-1]%10);else if(u=ae((l+1)/O),u>=a.length)if(o){for(;a.length<=u;a.push(0));f=s=0,t=1,l%=O,c=l-O+1}else break e;else{for(f=n=a[u],t=1;n>=10;n/=10,t++);l%=O,c=l-O+t,s=c<0?0:q(f/g[t-c-1]%10)}if(o=o||r<0||a[u+1]!=null||(c<0?f:f%g[t-c-1]),o=i<4?(s||o)&&(i==0||i==(e.s<0?3:2)):s>5||s==5&&(i==4||o||i==6&&(l>0?c>0?f/g[t-c]:0:a[u-1])%10&1||i==(e.s<0?8:7)),r<1||!a[0])return a.length=0,o?(r-=e.e+1,a[0]=g[(O-r%O)%O],e.e=-r||0):a[0]=e.e=0,e;if(l==0?(a.length=u,n=1,u--):(a.length=u+1,n=g[O-l],a[u]=c>0?q(f/g[t-c]%g[c])*n:0),o)for(;;)if(u==0){for(l=1,c=a[0];c>=10;c/=10,l++);for(c=a[0]+=n,n=1;c>=10;c/=10,n++);l!=n&&(e.e++,a[0]==H&&(a[0]=1));break}else{if(a[u]+=n,a[u]!=H)break;a[u--]=0,n=1}for(l=a.length;a[--l]===0;a.pop());}e.e>z?e.c=e.e=null:e.e<Q&&(e.c=[e.e=0])}return e}function V(e){var r,i=e.e;return i===null?e.toString():(r=y(e.c),r=i<=C||i>=k?ne(r,i):W(r,i,"0"),e.s<0?"-"+r:r)}return p.absoluteValue=p.abs=function(){var e=new h(this);return e.s<0&&(e.s=1),e},p.comparedTo=function(e,r){return j(this,new h(e,r))},p.decimalPlaces=p.dp=function(e,r){var i,o,t,l=this;if(e!=null)return v(e,0,R),r==null?r=B:v(r,0,8),G(new h(l),e+l.e+1,r);if(!(i=l.c))return null;if(o=((t=i.length-1)-$(this.e/O))*O,t=i[t])for(;t%10==0;t/=10,o--);return o<0&&(o=0),o},p.dividedBy=p.div=function(e,r){return N(this,new h(e,r),x,B)},p.dividedToIntegerBy=p.idiv=function(e,r){return N(this,new h(e,r),0,1)},p.exponentiatedBy=p.pow=function(e,r){var i,o,t,l,c,n,f,u,s,a=this;if(e=new h(e),e.c&&!e.isInteger())throw Error(U+"Exponent not an integer: "+V(e));if(r!=null&&(r=new h(r)),n=e.e>14,!a.c||!a.c[0]||a.c[0]==1&&!a.e&&a.c.length==1||!e.c||!e.c[0])return s=new h(Math.pow(+V(a),n?e.s*(2-ie(e)):+V(e))),r?s.mod(r):s;if(f=e.s<0,r){if(r.c?!r.c[0]:!r.s)return new h(NaN);o=!f&&a.isInteger()&&r.isInteger(),o&&(a=a.mod(r))}else{if(e.e>9&&(a.e>0||a.e<-1||(a.e==0?a.c[0]>1||n&&a.c[1]>=24e7:a.c[0]<8e13||n&&a.c[0]<=9999975e7)))return l=a.s<0&&ie(e)?-0:0,a.e>-1&&(l=1/l),new h(f?1/l:l);Y&&(l=ae(Y/O+2))}for(n?(i=new h(.5),f&&(e.s=1),u=ie(e)):(t=Math.abs(+V(e)),u=t%2),s=new h(I);;){if(u){if(s=s.times(a),!s.c)break;l?s.c.length>l&&(s.c.length=l):o&&(s=s.mod(r))}if(t){if(t=q(t/2),t===0)break;u=t%2}else if(e=e.times(i),G(e,e.e+1,1),e.e>14)u=ie(e);else{if(t=+V(e),t===0)break;u=t%2}a=a.times(a),l?a.c&&a.c.length>l&&(a.c.length=l):o&&(a=a.mod(r))}return o?s:(f&&(s=I.div(s)),r?s.mod(r):l?G(s,Y,B,c):s)},p.integerValue=function(e){var r=new h(this);return e==null?e=B:v(e,0,8),G(r,r.e+1,e)},p.isEqualTo=p.eq=function(e,r){return j(this,new h(e,r))===0},p.isFinite=function(){return!!this.c},p.isGreaterThan=p.gt=function(e,r){return j(this,new h(e,r))>0},p.isGreaterThanOrEqualTo=p.gte=function(e,r){return(r=j(this,new h(e,r)))===1||r===0},p.isInteger=function(){return!!this.c&&$(this.e/O)>this.c.length-2},p.isLessThan=p.lt=function(e,r){return j(this,new h(e,r))<0},p.isLessThanOrEqualTo=p.lte=function(e,r){return(r=j(this,new h(e,r)))===-1||r===0},p.isNaN=function(){return!this.s},p.isNegative=function(){return this.s<0},p.isPositive=function(){return this.s>0},p.isZero=function(){return!!this.c&&this.c[0]==0},p.minus=function(e,r){var i,o,t,l,c=this,n=c.s;if(e=new h(e,r),r=e.s,!n||!r)return new h(NaN);if(n!=r)return e.s=-r,c.plus(e);var f=c.e/O,u=e.e/O,s=c.c,a=e.c;if(!f||!u){if(!s||!a)return s?(e.s=-r,e):new h(a?c:NaN);if(!s[0]||!a[0])return a[0]?(e.s=-r,e):new h(s[0]?c:B==3?-0:0)}if(f=$(f),u=$(u),s=s.slice(),n=f-u){for((l=n<0)?(n=-n,t=s):(u=f,t=a),t.reverse(),r=n;r--;t.push(0));t.reverse()}else for(o=(l=(n=s.length)<(r=a.length))?n:r,n=r=0;r<o;r++)if(s[r]!=a[r]){l=s[r]<a[r];break}if(l&&(t=s,s=a,a=t,e.s=-e.s),r=(o=a.length)-(i=s.length),r>0)for(;r--;s[i++]=0);for(r=H-1;o>n;){if(s[--o]<a[o]){for(i=o;i&&!s[--i];s[i]=r);--s[i],s[o]+=H}s[o]-=a[o]}for(;s[0]==0;s.splice(0,1),--u);return s[0]?oe(e,s,u):(e.s=B==3?-1:1,e.c=[e.e=0],e)},p.modulo=p.mod=function(e,r){var i,o,t=this;return e=new h(e,r),!t.c||!e.s||e.c&&!e.c[0]?new h(NaN):!e.c||t.c&&!t.c[0]?new h(t):(b==9?(o=e.s,e.s=1,i=N(t,e,0,3),e.s=o,i.s*=o):i=N(t,e,0,b),e=t.minus(i.times(e)),!e.c[0]&&b==1&&(e.s=t.s),e)},p.multipliedBy=p.times=function(e,r){var i,o,t,l,c,n,f,u,s,a,g,w,d,S,P,m=this,A=m.c,T=(e=new h(e,r)).c;if(!A||!T||!A[0]||!T[0])return!m.s||!e.s||A&&!A[0]&&!T||T&&!T[0]&&!A?e.c=e.e=e.s=null:(e.s*=m.s,!A||!T?e.c=e.e=null:(e.c=[0],e.e=0)),e;for(o=$(m.e/O)+$(e.e/O),e.s*=m.s,f=A.length,a=T.length,f<a&&(d=A,A=T,T=d,t=f,f=a,a=t),t=f+a,d=[];t--;d.push(0));for(S=H,P=J,t=a;--t>=0;){for(i=0,g=T[t]%P,w=T[t]/P|0,c=f,l=t+c;l>t;)u=A[--c]%P,s=A[c]/P|0,n=w*u+s*g,u=g*u+n%P*P+d[l]+i,i=(u/S|0)+(n/P|0)+w*s,d[l--]=u%S;d[l]=i}return i?++o:d.splice(0,1),oe(e,d,o)},p.negated=function(){var e=new h(this);return e.s=-e.s||null,e},p.plus=function(e,r){var i,o=this,t=o.s;if(e=new h(e,r),r=e.s,!t||!r)return new h(NaN);if(t!=r)return e.s=-r,o.minus(e);var l=o.e/O,c=e.e/O,n=o.c,f=e.c;if(!l||!c){if(!n||!f)return new h(t/0);if(!n[0]||!f[0])return f[0]?e:new h(n[0]?o:t*0)}if(l=$(l),c=$(c),n=n.slice(),t=l-c){for(t>0?(c=l,i=f):(t=-t,i=n),i.reverse();t--;i.push(0));i.reverse()}for(t=n.length,r=f.length,t-r<0&&(i=f,f=n,n=i,r=t),t=0;r;)t=(n[--r]=n[r]+f[r]+t)/H|0,n[r]=H===n[r]?0:n[r]%H;return t&&(n=[t].concat(n),++c),oe(e,n,c)},p.precision=p.sd=function(e,r){var i,o,t,l=this;if(e!=null&&e!==!!e)return v(e,1,R),r==null?r=B:v(r,0,8),G(new h(l),e,r);if(!(i=l.c))return null;if(t=i.length-1,o=t*O+1,t=i[t]){for(;t%10==0;t/=10,o--);for(t=i[0];t>=10;t/=10,o++);}return e&&l.e+1>o&&(o=l.e+1),o},p.shiftedBy=function(e){return v(e,-he,he),this.times("1e"+e)},p.squareRoot=p.sqrt=function(){var e,r,i,o,t,l=this,c=l.c,n=l.s,f=l.e,u=x+4,s=new h("0.5");if(n!==1||!c||!c[0])return new h(!n||n<0&&(!c||c[0])?NaN:c?l:1/0);if(n=Math.sqrt(+V(l)),n==0||n==1/0?(r=y(c),(r.length+f)%2==0&&(r+="0"),n=Math.sqrt(+r),f=$((f+1)/2)-(f<0||f%2),n==1/0?r="5e"+f:(r=n.toExponential(),r=r.slice(0,r.indexOf("e")+1)+f),i=new h(r)):i=new h(n+""),i.c[0]){for(f=i.e,n=f+u,n<3&&(n=0);;)if(t=i,i=s.times(t.plus(N(l,t,u,1))),y(t.c).slice(0,n)===(r=y(i.c)).slice(0,n))if(i.e<f&&--n,r=r.slice(n-3,n+1),r=="9999"||!o&&r=="4999"){if(!o&&(G(t,t.e+x+2,0),t.times(t).eq(l))){i=t;break}u+=4,n+=4,o=1}else{(!+r||!+r.slice(1)&&r.charAt(0)=="5")&&(G(i,i.e+x+2,1),e=!i.times(i).eq(l));break}}return G(i,i.e+x+1,B,e)},p.toExponential=function(e,r){return e!=null&&(v(e,0,R),e++),se(this,e,r,1)},p.toFixed=function(e,r){return e!=null&&(v(e,0,R),e=e+this.e+1),se(this,e,r)},p.toFormat=function(e,r,i){var o,t=this;if(i==null)e!=null&&r&&typeof r=="object"?(i=r,r=null):e&&typeof e=="object"?(i=e,e=r=null):i=fe;else if(typeof i!="object")throw Error(U+"Argument not an object: "+i);if(o=t.toFixed(e,r),t.c){var l,c=o.split("."),n=+i.groupSize,f=+i.secondaryGroupSize,u=i.groupSeparator||"",s=c[0],a=c[1],g=t.s<0,w=g?s.slice(1):s,d=w.length;if(f&&(l=n,n=f,f=l,d-=l),n>0&&d>0){for(l=d%n||n,s=w.substr(0,l);l<d;l+=n)s+=u+w.substr(l,n);f>0&&(s+=u+w.slice(l)),g&&(s="-"+s)}o=a?s+(i.decimalSeparator||"")+((f=+i.fractionGroupSize)?a.replace(new RegExp("\\d{"+f+"}\\B","g"),"$&"+(i.fractionGroupSeparator||"")):a):s}return(i.prefix||"")+o+(i.suffix||"")},p.toFraction=function(e){var r,i,o,t,l,c,n,f,u,s,a,g,w=this,d=w.c;if(e!=null&&(n=new h(e),!n.isInteger()&&(n.c||n.s!==1)||n.lt(I)))throw Error(U+"Argument "+(n.isInteger()?"out of range: ":"not an integer: ")+V(n));if(!d)return new h(w);for(r=new h(I),u=i=new h(I),o=f=new h(I),g=y(d),l=r.e=g.length-w.e-1,r.c[0]=pe[(c=l%O)<0?O+c:c],e=!e||n.comparedTo(r)>0?l>0?r:u:n,c=z,z=1/0,n=new h(g),f.c[0]=0;s=N(n,r,0,1),t=i.plus(s.times(o)),t.comparedTo(e)!=1;)i=o,o=t,u=f.plus(s.times(t=u)),f=t,r=n.minus(s.times(t=r)),n=t;return t=N(e.minus(i),o,0,1),f=f.plus(t.times(u)),i=i.plus(t.times(o)),f.s=u.s=w.s,l=l*2,a=N(u,o,l,B).minus(w).abs().comparedTo(N(f,i,l,B).minus(w).abs())<1?[u,o]:[f,i],z=c,a},p.toNumber=function(){return+V(this)},p.toPrecision=function(e,r){return e!=null&&v(e,1,R),se(this,e,r,2)},p.toString=function(e){var r,i=this,o=i.s,t=i.e;return t===null?o?(r="Infinity",o<0&&(r="-"+r)):r="NaN":(e==null?r=t<=C||t>=k?ne(y(i.c),t):W(y(i.c),t,"0"):e===10&&le?(i=G(new h(i),x+t+1,B),r=W(y(i.c),i.e,"0")):(v(e,2,K.length,"Base"),r=_(W(y(i.c),t,"0"),10,e,o,!0)),o<0&&i.c[0]&&(r="-"+r)),r},p.valueOf=p.toJSON=function(){return V(this)},p._isBigNumber=!0,p[Symbol.toStringTag]="BigNumber",p[Symbol.for("nodejs.util.inspect.custom")]=p.valueOf,E!=null&&h.set(E),h}function $(E){var N=E|0;return E>0||E===N?N:N-1}function y(E){for(var N,_,D=1,p=E.length,I=E[0]+"";D<p;){for(N=E[D++]+"",_=O-N.length;_--;N="0"+N);I+=N}for(p=I.length;I.charCodeAt(--p)===48;);return I.slice(0,p+1||1)}function j(E,N){var _,D,p=E.c,I=N.c,x=E.s,B=N.s,C=E.e,k=N.e;if(!x||!B)return null;if(_=p&&!p[0],D=I&&!I[0],_||D)return _?D?0:-B:x;if(x!=B)return x;if(_=x<0,D=C==k,!p||!I)return D?0:!p^_?1:-1;if(!D)return C>k^_?1:-1;for(B=(C=p.length)<(k=I.length)?C:k,x=0;x<B;x++)if(p[x]!=I[x])return p[x]>I[x]^_?1:-1;return C==k?0:C>k^_?1:-1}function v(E,N,_,D){if(E<N||E>_||E!==q(E))throw Error(U+(D||"Argument")+(typeof E=="number"?E<N||E>_?" out of range: ":" not an integer: ":" not a primitive number: ")+String(E))}function ie(E){var N=E.c.length-1;return $(E.e/O)==N&&E.c[N]%2!=0}function ne(E,N){return(E.length>1?E.charAt(0)+"."+E.slice(1):E)+(N<0?"e":"e+")+N}function W(E,N,_){var D,p;if(N<0){for(p=_+".";++N;p+=_);E=p+E}else if(D=E.length,++N>D){for(p=_,N-=D;--N;p+=_);E+=p}else N<D&&(E=E.slice(0,N)+"."+E.slice(N));return E}var te=Ne();function Oe(E,N){return Number(te(E).plus(N))}function me(E,N){return Number(te(E).minus(N))}function de(E,N){return Number(te(E).multipliedBy(N))}function Ae(E,N){return Number(te(E).dividedBy(N))}export{Ae as D,de as M,Oe as P,me as a};
