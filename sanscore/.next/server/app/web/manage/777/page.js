(()=>{var e={};e.id=723,e.ids=[723],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5225:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c}),s(4660),s(7764),s(5866);var n=s(3191),r=s(8716),a=s(7922),o=s.n(a),i=s(5231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);s.d(t,l);let c=["",{children:["web",{children:["manage",{children:["777",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,4660)),"C:\\Users\\신제형\\Desktop\\SanScore\\sanscore\\app\\web\\manage\\777\\page.js"]}]},{}]},{}]},{metadata:{icon:[],apple:[],openGraph:[],twitter:[],manifest:"/manifest.json"}}],modal:["__DEFAULT__",{},{defaultPage:[()=>Promise.resolve().then(s.bind(s,7890)),"C:\\Users\\신제형\\Desktop\\SanScore\\sanscore\\app\\@modal\\default.js"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,7764)),"C:\\Users\\신제형\\Desktop\\SanScore\\sanscore\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[],apple:[],openGraph:[],twitter:[],manifest:"/manifest.json"}}],d=["C:\\Users\\신제형\\Desktop\\SanScore\\sanscore\\app\\web\\manage\\777\\page.js"],u="/web/manage/777/page",p={require:s,loadChunk:()=>Promise.resolve()},m=new n.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/web/manage/777/page",pathname:"/web/manage/777",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},7399:(e,t,s)=>{Promise.resolve().then(s.bind(s,6922))},100:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},5584:()=>{},5303:()=>{},6922:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>f});var n=s(326),r=s(7577),a=s(7794),o=s.n(a),i=s(7977),l=s.n(i);function c({info:e,curNum:t}){let[s,a]=(0,r.useState)(1);return(0,n.jsxs)("div",{className:l().scoreBox,children:[n.jsx("p",{children:"조를 선택하세요"}),e.map((e,r)=>(0,n.jsxs)("div",{onClick:()=>{a(e.team_num),t(e.team_num)},className:l().listBox,id:e.team_num,style:{backgroundColor:s==e.team_num?"#4865FF":"white",color:s==e.team_num?"white":"black",borderRadius:"8px"},children:[(0,n.jsxs)("p",{children:[" ",e.team_num," 조"]}),(0,n.jsxs)("p",{children:[" ",e.team_score," 점"]})]},r))]})}var d=s(9029),u=s.n(d);let p={src:"/_next/static/media/plus.b856b804.svg",height:150,width:150,blurWidth:0,blurHeight:0},m={src:"/_next/static/media/minus.7c4cd468.svg",height:25,width:100,blurWidth:0,blurHeight:0};var x=s(9369),h=s.n(x),_=s(5047);function g({curNum:e,refresh:t}){(0,_.useRouter)();let[s,a]=(0,r.useState)(""),[o,i]=(0,r.useState)(100);return(0,n.jsxs)("div",{className:h().mainBox,children:[n.jsx("div",{children:(0,n.jsxs)("p",{style:{fontSize:"1.7rem",marginBottom:"5vh",fontWeight:"bold"},children:[e," 조"]})}),n.jsx("p",{style:{margin:"0",fontSize:"1.2rem"},children:"점수"}),(0,n.jsxs)("div",{className:h().iconBox,children:[n.jsx(u(),{className:h().minusIcon,src:m,onClick:()=>{let e=o-100;e<0&&(e=0),i(e)}}),n.jsx("input",{className:h().pointInput,onChange:e=>{let t=Number(e.target.value);t<0?t=0:isNaN(t)&&(t=0),i(t)},value:o,placeholder:o}),n.jsx(u(),{className:h().plusIcon,src:p,onClick:()=>{i(o+100)}})]}),(0,n.jsxs)("div",{className:h().descriptionBox,children:[n.jsx("p",{style:{margin:"1rem",fontSize:"1.2rem"},children:"점수상세"}),n.jsx("input",{className:h().descriptionInput,onChange:e=>{a(e.target.value)},value:s,placeholder:"내용을 입력하세요."})]}),(0,n.jsxs)("div",{className:h().btnBox,children:[n.jsx("button",{className:h().minusBtn,onClick:()=>{o>0?fetch("/api/score",{method:"POST",body:JSON.stringify({teamNum:e,info:{description:s,get:!1,score:o}})}).then(()=>{t(),a(""),i(100),alert("점수가 반영되었습니다.")}).catch(e=>{console.log(e)}):alert("점수를 입력해주세요.")},children:"감점"}),n.jsx("button",{className:h().plusBtn,onClick:()=>{o>0?fetch("/api/score",{method:"POST",body:JSON.stringify({teamNum:e,info:{description:s,get:!0,score:o}})}).then(()=>{t(),a(""),i(100),alert("점수가 반영되었습니다.")}).catch(e=>{console.log(e)}):alert("점수를 입력해주세요")},children:"추가"})]})]})}function f(){let[e,t]=(0,r.useState)([]),[s,a]=(0,r.useState)(1),[i,l]=(0,r.useState)(!1),[d,u]=(0,r.useState)(!1),p=(0,r.useRef)(),m=(0,r.useRef)();return n.jsx("main",{children:i?(0,n.jsxs)("div",{className:o().mainbox,children:[n.jsx(g,{ref:p,curNum:s,refresh:()=>{u(!d)}}),n.jsx(c,{ref:m,info:e,curNum:e=>{a(e)}})]}):n.jsx("div",{children:n.jsx("p",{children:"...Loading"})})})}},5047:(e,t,s)=>{"use strict";var n=s(7389);s.o(n,"useRouter")&&s.d(t,{useRouter:function(){return n.useRouter}})},131:(e,t,s)=>{"use strict";e.exports=s(1616).vendored.contexts.RouterContext},9029:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{default:function(){return l},getImageProps:function(){return i}});let n=s(1174),r=s(3078),a=s(2481),o=n._(s(6820));function i(e){let{props:t}=(0,r.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,s]of Object.entries(t))void 0===s&&delete t[e];return{props:t}}let l=a.Image},9369:e=>{e.exports={plusIcon:"addScore_plusIcon__vQjR6",minusIcon:"addScore_minusIcon__r2yGm",iconBox:"addScore_iconBox__9vkYt",pointInput:"addScore_pointInput__P4YQP",mainBox:"addScore_mainBox__1PNAw",descriptionBox:"addScore_descriptionBox__9zuoq",descriptionInput:"addScore_descriptionInput__ZRchD",btnBox:"addScore_btnBox__dRV0R",minusBtn:"addScore_minusBtn__6dUFj",plusBtn:"addScore_plusBtn__nvE0G"}},7794:e=>{e.exports={mainbox:"manage_mainbox__QukPQ"}},7977:e=>{e.exports={scoreBox:"scorelist_scoreBox__uCFhz",listBox:"scorelist_listBox__Rvfn4"}},7890:(e,t,s)=>{"use strict";function n(){return null}s.r(t),s.d(t,{default:()=>n})},7764:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>p,metadata:()=>d,viewport:()=>u});var n=s(9510),r=s(697),a=s.n(r);s(7272);let o="SanScore",i="산스코어!!",l="Ss - PWA App",c="체육대회점수판!",d={applicationName:o,title:{default:i,template:l},description:c,manifest:"/manifest.json",appleWebApp:{capable:!0,statusBarStyle:"default",title:i},formatDetection:{telephone:!1},openGraph:{type:"website",siteName:o,title:{default:i,template:l},description:c},twitter:{card:"summary",title:{default:i,template:l},description:c}},u={themeColor:"#358ef6"};function p({children:e,modal:t}){return(0,n.jsxs)("html",{lang:"en",children:[n.jsx("head",{}),(0,n.jsxs)("body",{className:a().className,children:[e,t]})]})}},4660:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>o,__esModule:()=>a,default:()=>i});var n=s(8570);let r=(0,n.createProxy)(String.raw`C:\Users\신제형\Desktop\SanScore\sanscore\app\web\manage\777\page.js`),{__esModule:a,$$typeof:o}=r;r.default;let i=(0,n.createProxy)(String.raw`C:\Users\신제형\Desktop\SanScore\sanscore\app\web\manage\777\page.js#default`)},7272:()=>{}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),n=t.X(0,[948,134,481],()=>s(5225));module.exports=n})();