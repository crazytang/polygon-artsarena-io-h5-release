import{bv as d,b$ as E,c0 as z,_ as n,c1 as A,c2 as S,c3 as p,c4 as h,c5 as u,c6 as C}from"./index-eca88661.js";const c=(r,e)=>new d(r).setAlpha(e).toRgbString(),s=(r,e)=>new d(r).lighten(e).toHexString(),F=r=>{const e=E(r,{theme:"dark"});return{1:e[0],2:e[1],3:e[2],4:e[3],5:e[6],6:e[5],7:e[4],8:e[6],9:e[5],10:e[4]}},b=(r,e)=>{const t=r||"#000",o=e||"#fff";return{colorBgBase:t,colorTextBase:o,colorText:c(o,.85),colorTextSecondary:c(o,.65),colorTextTertiary:c(o,.45),colorTextQuaternary:c(o,.25),colorFill:c(o,.18),colorFillSecondary:c(o,.12),colorFillTertiary:c(o,.08),colorFillQuaternary:c(o,.04),colorBgElevated:s(t,12),colorBgContainer:s(t,8),colorBgLayout:s(t,0),colorBgSpotlight:s(t,26),colorBorder:s(t,26),colorBorderSecondary:s(t,19)}},H=(r,e)=>{const t=Object.keys(z).map(l=>{const a=E(r[l],{theme:"dark"});return new Array(10).fill(1).reduce((i,B,g)=>(i[`${l}-${g+1}`]=a[g],i),{})}).reduce((l,a)=>(l=n(n({},l),a),l),{}),o=e??A(r);return n(n(n({},o),t),S(r,{generateColorPalettes:F,generateNeutralColorPalettes:b}))},J=H;function M(r){const{sizeUnit:e,sizeStep:t}=r,o=t-2;return{sizeXXL:e*(o+10),sizeXL:e*(o+6),sizeLG:e*(o+2),sizeMD:e*(o+2),sizeMS:e*(o+1),size:e*o,sizeSM:e*o,sizeXS:e*(o-1),sizeXXS:e*(o-1)}}const X=(r,e)=>{const t=e??A(r),o=t.fontSizeSM,l=t.controlHeight-4;return n(n(n(n(n({},t),M(e??r)),h(o)),{controlHeight:l}),p(n(n({},t),{controlHeight:l})))},w=X;function f(){const[r,e,t]=C();return{theme:r,token:e,hashId:t}}const U={defaultConfig:u,defaultSeed:u.token,useToken:f,defaultAlgorithm:A,darkAlgorithm:J,compactAlgorithm:w},k="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA7dJREFUaEPtWk9IFFEY/73ZzdySXAgqotA1sE42UJcuobluVAqLt0LTbh0EE+ySwrqgdEiIwEOHDpFSNxG0ol3DpUsXD1aXEHJXkkgiWMNa/+zOq7c6s7PbzsybcXVd2Q/eYfZ9+73v973ve++b7xuCHFEw1jgFoJZTXKjBMVHHyavLRnIhhMkoKACBZa9IbPGHavCEEpES6uQyCEEUFDNqXmqTujwlr9J+45FlaQeCsUbmKsxlckl1DY6JkFmBXAAmfzd5iZBQrCtBqATgM7uYHj+leGQjkrIDVLBF3fvHx4zW4AMQuxamIEzpHSMCEnE7xl1GC+oCeB3zJpXeh/WpfABYhy15Ul1xjEW0gGgCYMrbEQ8bWWAn5uOwu7RA7D0AwT9NdwiROplld9pttN2EbriQJHS5D6YH9n87EIw19lk5YUaHwmCDh5o7XGDDLAkgt+od40/T7p9MIVYBDA/M4ln/LJdON3ur0dpTzcWrZtrbAAJrV0WSEJwEpI2CthuZZzkax5ePSwpbYGQBgeGvyrMoinA6U5lFKJS6ZD2tJ+FpOaHwnqopR5nTbrQkIMEPASFqk6Jy2qHEgMlkDB/e/UT35feai4bDYVRWbtx9kUgELpe2zw++uYCzFw8bA0hxKNnstgF4OduJoxUHkksuRH7Ae/qJpoK7EsDI50sKgMX5GFrOvM0/AHbSyPR9Ppbm87W1tWBDpnO3P6G0fDX5uLpUgunHNcoci4fMmDhW4VDmOU6olAtt+j548vkGx4SmFXt8d9Hr61bmp9fuYYUuJp9LyRGcL7mvzPX7BzHgf6Ap699Rrh8PqvcJEow1Ut7o0QNg5mw3ujMMAagULgKQjVHcAZVbFF1IK6j1gri5owrNHXxvnaNDEYwOzVk/hbYjiHlPMh6+vLgQj2K8PEUAVmKApc9s8NDMzAzY0CKzO7BRYaNEhEFpUC+I+/r64PPx1br8fj8Yv2UAlERBaNICptLpXZRKWHsfKALY9JkcJHN7cAcCa16RJOJOKpF2ItC2bAGWbxdiFWxCMEYT9qinbCw9iGWF9epC+Qaw5bqQu3Rc8+ibiz/HXPwFzzWAKvt1VNlvaPJOrjRlndsygOO2es1Ff0lhLFPtBE39xzJShUOCdpnlWyJ7AYAPQKEXd2VLFfsDXNHAx2SpwcFEF3SLSW2byUJt8skgMtuslAoiJUh2cXJFEuC3Q1KaeTlts2YqWXCN7kwAm2lH2qcGPO8TihxVPi//tqOfGmRzG5P9heLXKrIR/wLVyTirOqTo5gAAAABJRU5ErkJggg==";export{k as l,U as t};
