import{S as me,ar as xe,ax as ye,_ as P,Y as ve,d as A,a6 as ae,L as T,G as ce,h as m,H as R,J as be,ay as _e,F as v,az as Ae,ae as ee,aA as we,au as Ce,r as Ie,m as Z,o as ke,n as Ee,u as $,b as o,c as i,e as t,v as I,q as k,y as b,f as r,s as x,w as B,t as f,P as N,p as U,j as O,aB as $e,B as V,l as D,ah as De,af as ie,x as E,k as _,aj as te}from"./index-51ba2674.js";import{R as j}from"./RightOutlined-3444b674.js";import{g as Fe,i as Be,a as Se}from"./colors-27aa69cf.js";import{I as se}from"./index-ace46f55.js";import"./AntdIcon-50e6dd4e.js";import"./css-8dc523e2.js";const M=(e,n,s)=>{const l=ye(s);return{[`${e.componentCls}-${n}`]:{color:e[`color${s}`],background:e[`color${l}Bg`],borderColor:e[`color${l}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}},Me=e=>Fe(e,(n,s)=>{let{textColor:l,lightBorderColor:d,lightColor:a,darkColor:u}=s;return{[`${e.componentCls}-${n}`]:{color:l,background:a,borderColor:d,"&-inverse":{color:e.colorTextLightSolid,background:u,borderColor:u},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}}),Te=e=>{const{paddingXXS:n,lineWidth:s,tagPaddingHorizontal:l,componentCls:d}=e,a=l-s,u=n-s;return{[d]:P(P({},ve(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:a,fontSize:e.tagFontSize,lineHeight:`${e.tagLineHeight}px`,whiteSpace:"nowrap",background:e.tagDefaultBg,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",[`&${d}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.tagDefaultColor},[`${d}-close-icon`]:{marginInlineStart:u,color:e.colorTextDescription,fontSize:e.tagIconSize,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${d}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${d}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:a}}),[`${d}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},le=me("Tag",e=>{const{fontSize:n,lineHeight:s,lineWidth:l,fontSizeIcon:d}=e,a=Math.round(n*s),u=e.fontSizeSM,c=a-l*2,p=e.colorFillAlter,g=e.colorText,h=xe(e,{tagFontSize:u,tagLineHeight:c,tagDefaultBg:p,tagDefaultColor:g,tagIconSize:d-2*l,tagPaddingHorizontal:8,tagBorderlessBg:e.colorFillTertiary});return[Te(h),Me(h),M(h,"success","Success"),M(h,"processing","Info"),M(h,"error","Error"),M(h,"warning","Warning")]}),Re=()=>({prefixCls:String,checked:{type:Boolean,default:void 0},onChange:{type:Function},onClick:{type:Function},"onUpdate:checked":Function}),Ve=A({compatConfig:{MODE:3},name:"ACheckableTag",inheritAttrs:!1,props:Re(),setup(e,n){let{slots:s,emit:l,attrs:d}=n;const{prefixCls:a}=ae("tag",e),[u,c]=le(a),p=h=>{const{checked:y}=e;l("update:checked",!y),l("change",!y),l("click",h)},g=T(()=>ce(a.value,c.value,{[`${a.value}-checkable`]:!0,[`${a.value}-checkable-checked`]:e.checked}));return()=>{var h;return u(m("span",R(R({},d),{},{class:[g.value,d.class],onClick:p}),[(h=s.default)===null||h===void 0?void 0:h.call(s)]))}}}),G=Ve,Ne=()=>({prefixCls:String,color:{type:String},closable:{type:Boolean,default:!1},closeIcon:ee.any,visible:{type:Boolean,default:void 0},onClose:{type:Function},onClick:we(),"onUpdate:visible":Function,icon:ee.any,bordered:{type:Boolean,default:!0}}),F=A({compatConfig:{MODE:3},name:"ATag",inheritAttrs:!1,props:Ne(),slots:Object,setup(e,n){let{slots:s,emit:l,attrs:d}=n;const{prefixCls:a,direction:u}=ae("tag",e),[c,p]=le(a),g=be(!0);_e(()=>{e.visible!==void 0&&(g.value=e.visible)});const h=w=>{w.stopPropagation(),l("update:visible",!1),l("close",w),!w.defaultPrevented&&e.visible===void 0&&(g.value=!1)},y=T(()=>Be(e.color)||Se(e.color)),C=T(()=>ce(a.value,p.value,{[`${a.value}-${e.color}`]:y.value,[`${a.value}-has-color`]:e.color&&!y.value,[`${a.value}-hidden`]:!g.value,[`${a.value}-rtl`]:u.value==="rtl",[`${a.value}-borderless`]:!e.bordered})),re=w=>{l("click",w)};return()=>{var w,z,q;const{icon:de=(w=s.icon)===null||w===void 0?void 0:w.call(s),color:H,closeIcon:L=(z=s.closeIcon)===null||z===void 0?void 0:z.call(s),closable:ue=!1}=e,fe=()=>ue?L?m("span",{class:`${a.value}-close-icon`,onClick:h},[L]):m(Ce,{class:`${a.value}-close-icon`,onClick:h},null):null,he={backgroundColor:H&&!y.value?H:void 0},Y=de||null,X=(q=s.default)===null||q===void 0?void 0:q.call(s),pe=Y?m(v,null,[Y,m("span",null,[X])]):X,ge=e.onClick!==void 0,J=m("span",R(R({},d),{},{onClick:re,class:[C.value,d.class],style:[he,d.style]}),[pe,fe()]);return c(ge?m(Ae,null,{default:()=>[J]}):J)}}});F.CheckableTag=G;F.install=function(e){return e.component(F.name,F),e.component(G.name,G),e};const Ue=F,Oe="/assets/img-win-ea7ea7a5.png",Qe="data:image/png;base64,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",Q=e=>(U("data-v-eb4310ba"),e=e(),O(),e),ze={class:"space-y-6 fightInfoItem"},qe={class:"p-3 space-y-3 section"},je={key:2,class:"result-tag"},Ge=["src"],Ze=["src"],We={class:"nft-bottom-info"},Ke={key:0,class:"left-0 flex items-center justify-between w-full px-2 text-sm"},He=Q(()=>t("span",{class:"text-white"}," DEGOD #980 ",-1)),Le={class:"text-sm font-bold"},Ye=Q(()=>t("span",{class:"text-xs font-autom"},"01:36:28",-1)),Xe={key:4,class:"absolute -translate-x-1/2 -translate-y-1/2 fightInfo-burn top-1/2 left-1/2 whitespace-nowrap"},Je={key:0,class:"flex items-center justify-between"},Pe={class:"flex flex-col"},et={class:"text-[15px] text-white pb-2"},tt={key:1,class:"flex items-center justify-between"},st={key:0,class:"text-xs f-1"},ot={key:0,style:{border:"1px solid rgba(255, 255, 255, 0.2)"},class:"flex h-[90px] section"},nt={class:"flex flex-col items-center w-1/2 justify-center",style:{"border-right":"1px solid rgba(255, 255, 255, 0.2)"}},at={class:"text-[15px] font-pf f-1 pb-1"},ct=Q(()=>t("span",{class:"text-[25px] text-white"},"0",-1)),it={class:"flex flex-col items-center justify-center w-1/2"},lt={class:"text-[15px] font-pf f-1 pb-1"},rt=Q(()=>t("span",{class:"text-[25px] text-white"},"0 ETH",-1)),dt=A({__name:"index",props:{status:{type:String},position:{type:String,default:"left"}},emits:["toView"],setup(e,{emit:n}){var u;const s=n,l=Ie(),d=Z({width:(u=l.value)==null?void 0:u.clientWidth});ke(()=>{Ee(()=>{$e(l.value,()=>{var c;d.width=(c=l.value)==null?void 0:c.clientWidth})})});const{t:a}=$();return(c,p)=>{const g=N;return o(),i("div",ze,[t("section",qe,[t("div",{class:"relative w-full",ref_key:"imgRef",ref:l},[e.status=="noOpponent"&&e.position=="right"?(o(),i("div",{key:0,class:"flex items-center justify-center w-full challenge-box",style:I(`height:${d.width}px`),onClick:p[0]||(p[0]=h=>s("toView","ko"))}," 挑战 ",4)):(o(),k(g,{key:1,src:"http://test.burnyou.yingguopi.com:3000/collection/image/0x53F433a6ca4940d9437AD08E3e394733920ECbb9/2",class:b(e.status=="over"||e.status=="save"?"grayscale":"")},null,8,["class"])),(o(),i("div",je,[e.status!=="over"?(o(),i("img",{key:0,src:r(Oe),alt:""},null,8,Ge)):x("",!0),e.status==="over"?(o(),i("img",{key:1,src:r(Qe),alt:""},null,8,Ze)):x("",!0)])),t("div",We,[e.status!="noOpponent"?(o(),i("p",Ke,[He,t("span",{class:b(["save","over"].includes(e.status)?"text-white":"font-primary")}," K.O.18 ",2)])):x("",!0)]),e.status=="save"?(o(),k(r(V),{key:3,class:"box-border absolute flex flex-col items-center justify-center px-12 py-6 -translate-x-1/2 -translate-y-1/2 border-0 rounded-none saveBtn top-1/2 left-1/2",onClick:p[1]||(p[1]=h=>c.$router.push("/teamFight/teamSave"))},{default:B(()=>[t("span",Le,f(r(a)("views.fightInfo.t17")),1),Ye]),_:1})):x("",!0),e.status=="over"?(o(),i("div",Xe," BURN ")):x("",!0)],512),["playing","saved","noOpponent"].includes(e.status)?(o(),i("div",Je,[t("div",Pe,[t("span",et,f(r(a)("views.fightInfo.t7")),1),t("span",{class:b(["text-base text-[25px]",["saved","noOpponent"].includes(e.status)?"text-white":"font-primary"])},"2.20 ETH",2)]),t("div",{class:b(["w-[220px] py-4 text-xl text-center",e.status=="noOpponent"?"ringBtn":e.status=="saved"?"saved f-1":"playing font-primary"]),onClick:p[2]||(p[2]=h=>c.$router.push("/flashSale/sale?type=team"))}," 2.200 ETH "+f(r(a)("views.fightInfo.t5")),3)])):x("",!0),e.status=="over"||e.status=="save"||e.status=="win"?(o(),i("div",tt,[t("div",null,[t("p",{class:b(["text-base",{grayscale:["over","save"].includes(e.status),"font-primary":!["over","save"].includes(e.status),"lose-text":["over","save"].includes(e.status)}])}," 107 票 ",2),["over","save"].includes(e.status)?x("",!0):(o(),i("p",st," 合集隊友 54 票 "))]),t("div",{class:b(["text-xl",{grayscale:["over","save"].includes(e.status),"line-through":["over","save"].includes(e.status),"lose-text":["over","save"].includes(e.status),"font-primary":!["over","save"].includes(e.status)}])}," K.O. +25 ",2)])):x("",!0)]),e.status=="playing"||e.status=="saved"?(o(),i("section",ot,[t("div",nt,[t("span",at,f(r(a)("views.fightInfo.t7")),1),ct]),t("div",it,[t("span",lt,f(r(a)("views.fightInfo.t9")),1),rt])])):x("",!0)])}}});const oe=D(dt,[["__scopeId","data-v-eb4310ba"]]),W=e=>(U("data-v-3759078d"),e=e(),O(),e),ut={class:"flex fight"},ft={class:"section"},ht={class:"text-center f-1 pt-36 center"},pt={key:0},gt=W(()=>t("p",{class:"text-xl font-primary font-pf"},"21已投票",-1)),mt=W(()=>t("p",{class:"text-[100px] text-white"},"VS",-1)),xt=W(()=>t("p",{class:"text-xl f-2"},"00:00:00",-1)),yt=[gt,mt,xt],vt={key:1,class:"text-6xl text-white"},bt={class:"section"},_t=A({__name:"FightInfo",setup(e){const n=De(),s=ie();function l(d){const{type:a,matchId:u}=s.query||{};console.log(a),d==="ko"&&n.push(`/ring/create?type=${a}&targetId=${u}`)}return(d,a)=>{var u,c,p,g,h,y,C;return o(),i("div",ut,[t("section",ft,[m(oe,{position:"left",status:["over","save"].includes((c=(u=d.$route)==null?void 0:u.query)==null?void 0:c.status)?"win":(g=(p=d.$route)==null?void 0:p.query)==null?void 0:g.status},null,8,["status"])]),t("section",ht,[((h=d.$route.query)==null?void 0:h.status)=="playing"?(o(),i("div",pt,yt)):(o(),i("p",vt,"K.O."))]),t("section",bt,[m(oe,{position:"right",status:(C=(y=d.$route)==null?void 0:y.query)==null?void 0:C.status,onToView:l},null,8,["status"])])])}}});const At=D(_t,[["__scopeId","data-v-3759078d"]]),S=e=>(U("data-v-1d7babd6"),e=e(),O(),e),wt={class:"flashSale flex p-5"},Ct={class:"w-1/2 flex-shrink-0 flex",style:{"border-right":"1px solid #3a3a3a"}},It={class:"w-1/2 space-y-2"},kt={class:"text-xs f-1 font-pf"},Et=S(()=>t("p",{class:"text-white space-x-1"},[t("span",{class:"text-3xl"},"8.657"),t("span",{class:"text-sm"},"ETH")],-1)),$t={class:"w-1/2"},Dt={class:"text-xs f-1 font-pf"},Ft=S(()=>t("p",{class:"text-xl text-white"},"0x48c…893ed",-1)),Bt={class:"text-xs f-1 font-pf"},St={key:0,class:"w-1/2 flex-shrink-0 pl-6 space-y-2"},Mt={class:"text-xs f-1 font-pf"},Tt={class:"flex justify-between items-center"},Rt=S(()=>t("div",{class:"font-primary space-x-1"},[t("span",{class:"text-3xl"},"8.657"),t("span",{class:"text-sm"},"ETH")],-1)),Vt={key:1,class:"w-1/2 flex-shrink-0 flex pl-6"},Nt={class:"w-1/2 space-y-2"},Ut={class:"text-xs f-1 font-pf"},Ot=S(()=>t("p",{class:"text-white space-x-1"},[t("span",{class:"text-3xl"},"8.657"),t("span",{class:"text-sm"},"ETH")],-1)),Qt={class:"w-1/2"},zt={class:"text-xs f-1 font-pf"},qt=S(()=>t("p",{class:"text-xl text-white"},"0x48c…893ed",-1)),jt={class:"text-xs f-1 font-pf"},Gt=A({__name:"FlashSale",setup(e){const{t:n}=$();return(s,l)=>{var d,a;return o(),i("div",wt,[t("section",Ct,[t("div",It,[t("p",kt,f(r(n)("views.fightInfo.t26")),1),Et]),t("div",$t,[t("p",Dt,f(r(n)("views.fightInfo.t27")),1),Ft,t("p",Bt,[E(f(r(n)("views.fightInfo.t22"))+" ",1),m(r(j),{class:"text-xs"})])])]),((a=(d=s.$route)==null?void 0:d.query)==null?void 0:a.status)=="over"?(o(),i("section",St,[t("p",Mt,f(r(n)("views.fightInfo.t29")),1),t("div",Tt,[Rt,m(r(V),{onClick:l[0]||(l[0]=u=>s.$router.push("/extendExpense")),class:"px-10 py-5 box-border border-0 rounded-none font-primary font-bold flex justify-center items-center"},{default:B(()=>[E(f(r(n)("views.fightInfo.t30")),1)]),_:1})])])):(o(),i("section",Vt,[t("div",Nt,[t("p",Ut,f(r(n)("views.fightInfo.t26")),1),Ot]),t("div",Qt,[t("p",zt,f(r(n)("views.fightInfo.t27")),1),qt,t("p",jt,[E(f(r(n)("views.fightInfo.t25")),1),m(r(j),{class:"text-xs"})])])]))])}}});const Zt=D(Gt,[["__scopeId","data-v-1d7babd6"]]),Wt={class:"p-5 myRush"},Kt={class:"text-base font-bold text-white"},Ht={class:"flex items-center space-x-5"},Lt={class:"flex"},Yt={class:"w-24 text-xs text-center f-1 font-pf",style:{"min-height":"18px"}},Xt={key:0},Jt={class:"flex items-center"},Pt={style:{border:"1px solid #3a3a3a"},class:"flex items-center justify-center w-5 h-5 bg-black rounded-full"},es={key:0,class:"w-2 h-2 rounded-full bg-primary"},ts=A({__name:"MyRush",setup(e){const{t:n}=$(),s=Z({list:{list1:[1,2,3,4,5,6],list2:[1,2,3,4]}});return(l,d)=>{const a=N;return o(),i("div",Wt,[t("p",Kt,f(r(n)("views.fightInfo.t15")),1),(o(!0),i(v,null,_(s.list,u=>{var c;return o(),i("section",Ht,[m(a,{width:50,height:50,src:"http://test.burnyou.yingguopi.com:3000/collection/image/0x53F433a6ca4940d9437AD08E3e394733920ECbb9/3",preview:!1,class:b(["flex-shrink-0",((c=l.$route.query)==null?void 0:c.status)!="playing"?"grayscale":""])},null,8,["class"]),t("div",Lt,[(o(!0),i(v,null,_(u,(p,g)=>(o(),i("div",{class:"flex flex-col items-center justify-end space-y-1",key:g},[t("div",Yt,[g==3?(o(),i("p",Xt,f(r(n)("views.fightInfo.t11")),1)):x("",!0)]),t("div",Jt,[t("p",{style:I([{background:"#3a3a3a"},`height:${g==0?0:1}px`]),class:"w-10"},null,4),t("div",Pt,[g==3?(o(),i("div",es)):x("",!0)]),t("p",{style:I([{background:"#3a3a3a"},`height:${u.length-1==g?0:1}px`]),class:"w-10"},null,4)]),t("div",{class:b(["h-6 text-xs text-center font-pf",g==3?"font-primary":"f-1"])}," 2.594 ",2)]))),128))])])}),256))])}}});const ss=D(ts,[["__scopeId","data-v-26672520"]]),os={class:"p-5 space-y-4 myVote"},ns={class:"text-base font-bold text-white"},as={class:"flex flex-col items-center space-x-5"},cs={key:0,class:"flex justify-center w-full"},is={class:"flex"},ls={class:"flex items-center"},rs={style:{border:"1px solid #3a3a3a"},class:"flex items-center justify-center w-5 h-5 bg-black rounded-full"},ds={key:0,class:"w-2 h-2 rounded-full bg-primary"},us=A({__name:"MyVote",setup(e){const{t:n}=$(),s=Z({list:[1,2,3,4,5,6,7,8,9]});return(l,d)=>{var a;return o(),i("div",os,[t("p",ns,f(r(n)("views.fightInfo.t10")),1),t("section",as,[["saved","noOpponent"].includes((a=l.$route.query)==null?void 0:a.status)?x("",!0):(o(),i("div",cs,[(o(!0),i(v,null,_(s.list.slice(0,8),u=>{var c;return o(),i("div",{class:"flex justify-center w-20 ml-5",key:u},[m(r(N),{width:50,height:50,src:"http://test.burnyou.yingguopi.com:3000/collection/image/0x53F433a6ca4940d9437AD08E3e394733920ECbb9/3",class:b(["flex-shrink-0",((c=l.$route.query)==null?void 0:c.status)!="playing"?"grayscale":""])},null,8,["class"])])}),128))])),t("div",is,[(o(!0),i(v,null,_(s.list,(u,c)=>(o(),i("div",{class:"space-y-1",key:c},[t("div",ls,[t("p",{style:I([{background:"#3a3a3a"},`height:${c==0?0:1}px`]),class:"w-10"},null,4),t("div",rs,[c==3?(o(),i("div",ds)):x("",!0)]),t("p",{style:I([{background:"#3a3a3a"},`height:${s.list.length-1==c?0:1}px`]),class:"w-10"},null,4)]),t("div",{class:b(["h-6 text-xs text-center font-pf",c==3?"font-primary":"f-1"])}," 2.594 ",2)]))),128))])])])}}});const fs=D(us,[["__scopeId","data-v-b21abcfd"]]),hs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAfCAMAAACxiD++AAAAaVBMVEUAAAC790wdJgym3EQJDAQDBAEiLQ59pTMlMQ+GsTZniSkoNRCy60ih1UFhgCdIXx0GCQIMEAW28Eo8TxgrORIRFges40WPvTqCqzVYdCQ2RhYxQRQkLw+AqTRvky1tkCxRayFDWRtDWBuyCZaSAAAA1UlEQVQoz4WPSRKDMAwEJbAh7DgsCZD9/4+MhA7BBEQfxGEa1wz4ZGecKSxs0oUoVNu5vaAQ7jzwpCxt6Ly284qiBB6IfQ3Cf8HCdXSH3YJ5AClds1uwAZcjll4QCU2Mc1LSZ4oWAP5IAEyOPuFCyB3AgCsS8B6o+7WQspBZa2lCzFU9CsSKhRMlIvjU/LMm3CgzmvDmEZpQUnFVuNIIVeARiiAjFEFGaMKHR2gCj1AFHqEKPEIRZIQIrTGGhLvxaGUEoEIIB0JyJKQsBMI0jm2wxlH+BfGlCSCPie7sAAAAAElFTkSuQmCC",ps="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAAAAXNSR0IArs4c6QAAAWZJREFUSEvtls+KglAUxr+LhkVIDyC0kKBd4QuEi5A2Pq0bFy7CB9CdJFQLcZUrtYWg6XAZCJrJut6piflzlnLO+Z3v83DvJaZpNnhBkL8N9n0feZ4/xXhZlqFp2rn3hdWu6yJN06eAR6MRFovFP/jdgY9WL5dLiKLIZX1VVXAc51zbyerVaoVer8cFLssStm3zgXVd/5Li9XrNB+aS2lLUyeqXgefzOQRBaOV7nsc8WyfF95bLsqxfBqbnKyGkVVWWZc9RzNyVIbHTP2box5zyc8DD4RCDwYBZWVsi7TObze5fi5IkYTqdYjwe31ww3ok+PQSOxyNUVcVkMuE+p1mGuQDvdjsoioJ+v39RW9c1TqcTSz/mnJuvTArb7/fYbreg9+sj4yq4aRrEcYzNZoOiKB7Ju75c9GuSJAiCAF1OJZ7Jzorps5YCD4cDT5/ONcQwjCYMQ0RRBGrxdwURRbF59OKwDP8GppkAwvV0DyEAAAAASUVORK5CYII=",gs={class:"comment_item"},ms={class:"flex items-center justify-start text-xs f-1 space-x-1"},xs={class:"space-x-1"},ys={class:"text-base font-pf text-white mt-2"},vs={class:"flex justify-between items-center text-xs f-1 font-pf mt-2"},bs={class:"flex items-center space-x-6"},_s={class:"flex items-center space-x-1"},As=t("span",null,"100",-1),ws={class:"flex items-center space-x-1"},Cs=t("span",null,"100",-1),Is={key:0,style:{background:"#1c1c1c"},class:"mt-4 p-3 pb-1 flex flex-wrap"},ks={key:1,style:{background:"#1c1c1c"},class:"p-4 space-y-4 mt-2"},Es={class:"flex items-center space-x-1 text-xs f-2"},$s={key:0,class:"f-1"},Ds={key:1},Fs={class:"text-white text-sm"},Bs={class:"flex items-center space-x-1 text-xs f-2"},Ss=t("a",{class:"f-1"},"回复",-1),Ms={class:"text-xs f-1 flex items-center"},Ts=t("span",null,"查看全部回复",-1),ne=A({__name:"item",props:{info:{type:Object,default:()=>({})}},setup(e){const n=e,s={1:{text:"持有人",bg:"#BBF74C"},2:{text:"已投票",bg:"#5F48FE"},3:{text:"搶購人",bg:"#FF731D"},4:{text:"親友團",bg:"#71FF82"},5:{text:"擺擂人",bg:"#F74D4C"},6:{text:"創作人",bg:"#71F6FF"},7:{text:"挑戰人",bg:"#4C9AF7"}};return(l,d)=>{var u;const a=N;return o(),i("div",gs,[t("section",ms,[t("div",xs,[(o(!0),i(v,null,_(n.info.tag,(c,p)=>{var g;return o(),k(r(Ue),{class:"text-black bg-white border-0 rounded-none font-bold mx-0",key:p,style:I(`background:${(g=s[c])==null?void 0:g.bg}`)},{default:B(()=>{var h;return[E(f((h=s[c])==null?void 0:h.text),1)]}),_:2},1032,["style"])}),128))]),t("span",null,f(n.info.name),1)]),t("section",ys,f(n.info.content),1),t("section",vs,[t("div",bs,[t("a",_s,[m(r(se),{src:r(hs),height:14,width:14,preview:!1},null,8,["src"]),As]),t("a",ws,[m(r(se),{src:r(ps),height:14,width:14,preview:!1},null,8,["src"]),Cs])]),t("span",null,f(n.info.time),1)]),n.info.imgs.length?(o(),i("section",Is,[(o(!0),i(v,null,_(n.info.imgs,(c,p)=>(o(),i("div",{key:p,class:"mr-2 mb-2",style:{width:"12.5%"}},[m(a,{width:50,height:50,src:c,preview:!1},null,8,["src"])]))),128))])):x("",!0),(u=n.info.huifu)!=null&&u.length?(o(),i("section",ks,[(o(!0),i(v,null,_(n.info.huifu,(c,p)=>(o(),i("div",{key:p,class:"space-y-1 font-pf"},[t("p",Es,[t("span",null,f(c.name),1),c.name2?(o(),i("span",$s,"回复")):x("",!0),c.name2?(o(),i("span",Ds,f(c.name2),1)):x("",!0)]),t("div",Fs,f(c.content),1),t("p",Bs,[t("span",null,f(c.time),1),Ss])]))),128)),t("a",Ms,[Ts,m(r(j))])])):x("",!0)])}}}),K=e=>(U("data-v-9d38bcd1"),e=e(),O(),e),Rs={class:"px-4 comment"},Vs={class:"flex"},Ns={class:"w-1/2 py-4 text-lg text-white"},Us=K(()=>t("div",{class:"mx-10",style:{width:"1px",background:"#3a3a3a"}},null,-1)),Os={class:"w-1/2 py-4 text-lg text-white"},Qs=K(()=>t("div",{class:"mx-10",style:{width:"1px",background:"#3a3a3a"}},null,-1)),zs={class:"flex"},qs={class:"w-1/2 mb-6 comment-input"},js=K(()=>t("div",{class:"mx-10",style:{width:"1px",background:"#3a3a3a"}},null,-1)),Gs={class:"w-1/2 py-4 mb-6 comment-input"},Zs=A({__name:"index",setup(e){const{t:n}=$(),s=[{left:[{tag:[1,2],name:"0xa3ed…7345",time:"8-30 13:49",content:"mfer一定贏，先搶了再說。但對面好像一毛推廣費都沒有啊，氣死。。。",imgs:[]},{tag:[3,4],name:"0xa3ed…7345",time:"8-30 13:49",content:"我持有10幾個mfer，真心想買這款，尤其如果勝出，很多人在Twitter把頭像換成這個NFT的話，我相信這個頭像一定能火。可惜被後面的人搶購了",imgs:["http://test.burnyou.yingguopi.com:3000/collection/image/0x53F433a6ca4940d9437AD08E3e394733920ECbb9/3","http://test.burnyou.yingguopi.com:3000/collection/image/0x53F433a6ca4940d9437AD08E3e394733920ECbb9/3","http://test.burnyou.yingguopi.com:3000/collection/image/0x53F433a6ca4940d9437AD08E3e394733920ECbb9/3","http://test.burnyou.yingguopi.com:3000/collection/image/0x53F433a6ca4940d9437AD08E3e394733920ECbb9/3","http://test.burnyou.yingguopi.com:3000/collection/image/0x53F433a6ca4940d9437AD08E3e394733920ECbb9/3","http://test.burnyou.yingguopi.com:3000/collection/image/0x53F433a6ca4940d9437AD08E3e394733920ECbb9/3","http://test.burnyou.yingguopi.com:3000/collection/image/0x53F433a6ca4940d9437AD08E3e394733920ECbb9/3","http://test.burnyou.yingguopi.com:3000/collection/image/0x53F433a6ca4940d9437AD08E3e394733920ECbb9/3","http://test.burnyou.yingguopi.com:3000/collection/image/0x53F433a6ca4940d9437AD08E3e394733920ECbb9/3","http://test.burnyou.yingguopi.com:3000/collection/image/0x53F433a6ca4940d9437AD08E3e394733920ECbb9/3","http://test.burnyou.yingguopi.com:3000/collection/image/0x53F433a6ca4940d9437AD08E3e394733920ECbb9/3","http://test.burnyou.yingguopi.com:3000/collection/image/0x53F433a6ca4940d9437AD08E3e394733920ECbb9/3","http://test.burnyou.yingguopi.com:3000/collection/image/0x53F433a6ca4940d9437AD08E3e394733920ECbb9/3","http://test.burnyou.yingguopi.com:3000/collection/image/0x53F433a6ca4940d9437AD08E3e394733920ECbb9/3","http://test.burnyou.yingguopi.com:3000/collection/image/0x53F433a6ca4940d9437AD08E3e394733920ECbb9/3"]},{tag:[5,6,7],name:"0xa3ed…7345",time:"8-30 13:49",content:"I'm the creator of mfer. Glad to meet everyone here.We will win this battle!!!",imgs:[],huifu:[{name:"张三",name2:"李四",content:"我持有10幾個mfer，真心想買這款，尤其如果勝出，很多人在Twitter把頭像換成這個NFT的話，我相信這個頭像一定能火。可惜被後面的人搶購了",time:"8-30 13:49"},{name:"张三",content:"我持有10幾個mfer，真心想買這款，尤其如果勝出，很多人在Twitter把頭像換成這個NFT的話，我相信這個頭像一定能火。可惜被後面的人搶購了",time:"8-30 13:49"}]}],right:[{tag:[],name:"0xa3ed…7345",time:"8-30 13:49",content:"Azuki的發行對全球區塊鏈都有特殊意義，它首創了自動生成頭像的NFT技術，令某些頭像可能隨機出現變化，增加了藏品的特殊收藏價值。",imgs:[]},{tag:[6],name:"",time:"8-30 13:49",content:"“加密朋克”是最早的一批NFT，發行於2017 年，是以太坊上的初代應用。該系列由1 萬個24x24 像素的藝術圖像組成。靈感來源於朋克文化，用於展現早期的區塊鏈運動鮮明的反建制精神。每個圖像都是一個外貌奇特的人物，各自有假定的個性和隨機生成的特徵，其中有6039 個男性朋克人物和3840 個女性朋克人物。",imgs:[]}]},{left:[{tag:[],name:"0xa3ed…7345",time:"8-30 13:49",content:"Mfers發行於2021年11月30日，起始鑄造價格為0.069ETH，總計發行10021個，其中10000個是常規款，另外21個是特殊款，Mfer可以翻譯為“小混蛋”， 它的靈感來源於一副漫畫",imgs:[]},{tag:[36],name:"0xa3ed…7345",time:"8-30 13:49",content:"I'm the creator of mfer. Glad to meet everyone here.We will win this battle!!!",imgs:[]}],right:[{tag:[7],name:"0xa3ed…7345",time:"8-30 13:49",content:"這邊的人氣怎麼這麼慘淡？咱家族的兄弟NFT要被銷毀了？",imgs:["http://test.burnyou.yingguopi.com:3000/collection/image/0x53F433a6ca4940d9437AD08E3e394733920ECbb9/3","http://test.burnyou.yingguopi.com:3000/collection/image/0x53F433a6ca4940d9437AD08E3e394733920ECbb9/3"]}]}];return(l,d)=>(o(),i("div",Rs,[t("section",Vs,[t("p",Ns,f(r(n)("views.fightInfo.comment.about"))+" DEGOD#0981 "+f(r(n)("views.fightInfo.comment.commentText")),1),Us,t("p",Os,f(r(n)("views.fightInfo.comment.about"))+" AZUKI#0981 "+f(r(n)("views.fightInfo.comment.commentText")),1)]),t("section",null,[(o(),i(v,null,_(s,(a,u)=>{var c,p,g,h;return t("div",{class:"flex justify-between row",key:u},[t("div",{class:"w-1/2 pb-6 mb-6 space-y-8",style:I(`border-bottom: ${s.length-1!=u?"1px solid #3a3a3a":"initial"};height:${["saved","noOpponent"].includes((c=l.$route.query)==null?void 0:c.status)?"300px":"auto"}`)},[["saved","noOpponent"].includes((p=l.$route.query)==null?void 0:p.status)?x("",!0):(o(!0),i(v,{key:0},_(a.left,(y,C)=>(o(),k(ne,{key:C,info:y},null,8,["info"]))),128))],4),Qs,t("div",{class:"w-1/2 pb-6 mb-6 space-y-8",style:I(`border-bottom: ${s.length-1!=u?"1px solid #3a3a3a":"initial"};height:${["saved","noOpponent"].includes((g=l.$route.query)==null?void 0:g.status)?"300px":"auto"}`)},[["saved","noOpponent"].includes((h=l.$route.query)==null?void 0:h.status)?x("",!0):(o(!0),i(v,{key:0},_(a.right,(y,C)=>(o(),k(ne,{key:C,info:y},null,8,["info"]))),128))],4)])}),64))]),t("section",zs,[t("div",qs,[m(r(te).TextArea,{placeholder:"回复 0x897d…65dc 的評論",bordered:!1,"auto-size":{minRows:1,maxRows:5},class:"rounded-none"}),m(r(V),{class:"flex items-center justify-center h-full text-sm border-0 rounded-none bg-primary font-pf",style:{color:"#000"}},{default:B(()=>[E(f(r(n)("views.fightInfo.t16")),1)]),_:1})]),js,t("div",Gs,[m(r(te).TextArea,{placeholder:"回复 0x897d…65dc 的評論",bordered:!1,"auto-size":{minRows:1,maxRows:5},class:"rounded-none"}),m(r(V),{class:"flex items-center justify-center h-full text-sm border-0 rounded-none bg-primary font-pf",style:{color:"#000"}},{default:B(()=>[E(f(r(n)("views.fightInfo.t16")),1)]),_:1})])])]))}});const Ws=D(Zs,[["__scopeId","data-v-9d38bcd1"]]),Ks={class:"fightInfo space-y-8"},Hs={key:0,class:"font-pf f-1 text-sm text-center"},to=A({__name:"index",setup(e){const{t:n}=$(),s=ie();return T(()=>{var l,d,a,u,c;return((l=s==null?void 0:s.query)==null?void 0:l.status)=="noOpponent"?((d=s==null?void 0:s.query)==null?void 0:d.type)=="team"?{title:"團滅戰 - 第1回合 (待挑戰)",subTitle:"等待開戰"}:{title:"等待挑戰",subTitle:"擂主將從已應戰的挑戰者 (3) 中選擇"}:((a=s==null?void 0:s.query)==null?void 0:a.status)=="playing"?((u=s==null?void 0:s.query)==null?void 0:u.type)=="team"?{title:n("views.fightInfo.t1"),subTitle:"2023.8.31～9.1 01:36:28"}:{title:"",subTitle:"2023.8.31～9.1 01:36:28"}:((c=s==null?void 0:s.query)==null?void 0:c.type)=="team"?{title:n("views.fightInfo.t1_team_over"),subTitle:"2023.8.31～9.1 01:36:28"}:{title:n("views.fightInfo.t1_fight_over"),subTitle:"2023.8.31～9.1 01:36:28"}}),(l,d)=>{var a,u,c,p,g,h;return o(),i("div",Ks,[["over","save","noOpponent"].includes((u=(a=l.$route)==null?void 0:a.query)==null?void 0:u.status)?x("",!0):(o(),i("p",Hs,f(r(n)("views.fightInfo.t3")),1)),m(At),["save","over"].includes((p=(c=l.$route)==null?void 0:c.query)==null?void 0:p.status)?(o(),k(Zt,{key:1})):x("",!0),["noOpponent","saved"].includes((h=(g=l.$route)==null?void 0:g.query)==null?void 0:h.status)?x("",!0):(o(),k(ss,{key:2})),m(fs),m(Ws)])}}});export{to as default};
