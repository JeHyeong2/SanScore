(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[723],{9466:function(e,t,n){Promise.resolve().then(n.bind(n,427))},427:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var s=n(7437),o=n(2265),i=n(7290),r=n.n(i),c=n(3405),u=n.n(c);function a(e){let{info:t,curNum:n}=e,[i,r]=(0,o.useState)(1);return(0,o.useEffect)(()=>{},[i]),(0,s.jsxs)("div",{className:u().scoreBox,children:[(0,s.jsx)("p",{children:"조를 선택하세요"}),t.map((e,t)=>(0,s.jsxs)("div",{onClick:()=>{r(e.team_num),n(e.team_num)},className:u().listBox,id:e.team_num,style:{backgroundColor:i==e.team_num?"#4865FF":"white",color:i==e.team_num?"white":"black",borderRadius:"8px"},children:[(0,s.jsxs)("p",{children:[" ",e.team_num," 조"]}),(0,s.jsxs)("p",{children:[" ",e.team_score," 점"]})]},t))]})}var l=n(5601),d=n.n(l),m={src:"/_next/static/media/plus.b856b804.svg",height:150,width:150,blurWidth:0,blurHeight:0},_={src:"/_next/static/media/minus.7c4cd468.svg",height:25,width:100,blurWidth:0,blurHeight:0},f=n(8725),h=n.n(f),x=n(6463);function p(e){let{curNum:t,refresh:n}=e;(0,x.useRouter)();let[i,r]=(0,o.useState)(""),[c,u]=(0,o.useState)(100);return(0,s.jsxs)("div",{className:h().mainBox,children:[(0,s.jsx)("div",{children:(0,s.jsxs)("p",{style:{fontSize:"1.7rem",marginBottom:"5vh",fontWeight:"bold"},children:[t," 조"]})}),(0,s.jsx)("p",{style:{margin:"0",fontSize:"1.2rem"},children:"점수"}),(0,s.jsxs)("div",{className:h().iconBox,children:[(0,s.jsx)(d(),{className:h().minusIcon,src:_,onClick:()=>{let e=c-100;e<0&&(e=0),u(e)}}),(0,s.jsx)("input",{className:h().pointInput,onChange:e=>{let t=Number(e.target.value);t<0?t=0:isNaN(t)&&(t=0),u(t)},value:c,placeholder:c}),(0,s.jsx)(d(),{className:h().plusIcon,src:m,onClick:()=>{u(c+100)}})]}),(0,s.jsxs)("div",{className:h().descriptionBox,children:[(0,s.jsx)("p",{style:{margin:"1rem",fontSize:"1.2rem"},children:"점수상세"}),(0,s.jsx)("input",{className:h().descriptionInput,onChange:e=>{r(e.target.value)},value:i,placeholder:"내용을 입력하세요."})]}),(0,s.jsxs)("div",{className:h().btnBox,children:[(0,s.jsx)("button",{className:h().minusBtn,onClick:()=>{c>0?fetch("/api/score",{method:"POST",body:JSON.stringify({teamNum:t,info:{description:i,get:!1,score:c}})}).then(()=>{n(),r(""),u(100),alert("점수가 반영되었습니다.")}).catch(e=>{console.log(e)}):alert("점수를 입력해주세요.")},children:"감점"}),(0,s.jsx)("button",{className:h().plusBtn,onClick:()=>{c>0?fetch("/api/score",{method:"POST",body:JSON.stringify({teamNum:t,info:{description:i,get:!0,score:c}})}).then(()=>{n(),r(""),u(100),alert("점수가 반영되었습니다.")}).catch(e=>{console.log(e)}):alert("점수를 입력해주세요")},children:"추가"})]})]})}function g(){let[e,t]=(0,o.useState)([]),[n,i]=(0,o.useState)(1),[c,u]=(0,o.useState)(!1),[l,d]=(0,o.useState)(!1),m=(0,o.useRef)(),_=(0,o.useRef)();return(0,o.useEffect)(()=>{fetch("/api/score").then(e=>e.json()).then(e=>{t(e)}).then(()=>{m&&_&&u(!0)}).catch(e=>{console.log(e)})},[n,l]),(0,s.jsx)("main",{children:c?(0,s.jsxs)("div",{className:r().mainbox,children:[(0,s.jsx)(p,{ref:m,curNum:n,refresh:()=>{d(!l)}}),(0,s.jsx)(a,{ref:_,info:e,curNum:e=>{i(e)}})]}):(0,s.jsx)("div",{children:(0,s.jsx)("p",{children:"...Loading"})})})}},6463:function(e,t,n){"use strict";var s=n(1169);n.o(s,"useRouter")&&n.d(t,{useRouter:function(){return s.useRouter}})},5601:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return u},getImageProps:function(){return c}});let s=n(9920),o=n(497),i=n(8173),r=s._(n(1241));function c(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:r.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let u=i.Image},291:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return s}});let s=n(9920)._(n(2265)).default.createContext(null)},8725:function(e){e.exports={plusIcon:"addScore_plusIcon__vQjR6",minusIcon:"addScore_minusIcon__r2yGm",iconBox:"addScore_iconBox__9vkYt",pointInput:"addScore_pointInput__P4YQP",mainBox:"addScore_mainBox__1PNAw",descriptionBox:"addScore_descriptionBox__9zuoq",descriptionInput:"addScore_descriptionInput__ZRchD",btnBox:"addScore_btnBox__dRV0R",minusBtn:"addScore_minusBtn__6dUFj",plusBtn:"addScore_plusBtn__nvE0G"}},7290:function(e){e.exports={mainbox:"manage_mainbox__QukPQ"}},3405:function(e){e.exports={scoreBox:"scorelist_scoreBox__uCFhz",listBox:"scorelist_listBox__Rvfn4"}}},function(e){e.O(0,[907,173,971,190,744],function(){return e(e.s=9466)}),_N_E=e.O()}]);