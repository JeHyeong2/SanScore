"use strict";(()=>{var e={};e.id=225,e.ids=[225],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},1356:(e,t,r)=>{let o;r.r(t),r.d(t,{config:()=>m,default:()=>u,routeModule:()=>d});var n={};r.r(n),r.d(n,{default:()=>c});var a=r(1802),i=r(7153),s=r(6249);async function c(e,t){if("GET"===e.method){let e=(await o).db("sanscore"),r=await e.collection("team").find().toArray();return t.status(200).json(r)}if("POST"===e.method){let r=JSON.parse(e.body),n=(await o).db("sanscore"),a=await n.collection("team").find({team_num:r.teamNum}).toArray();if(r.info.get){let e=a.map(e=>(e.team_score+=r.info.score,e.score_description.push(r.info),e));await n.collection("team").updateOne({team_num:r.teamNum},{$set:{team_score:e[0].team_score,score_description:e[0].score_description}})}else{let e=a.map(e=>(e.team_score-r.info.score>0?e.team_score-=r.info.score:e.team_score=0,e.score_description.push(r.info),e));await n.collection("team").updateOne({team_num:r.teamNum},{$set:{team_score:e[0].team_score,score_description:e[0].score_description}})}return t.status(200).redirect("/web/manage/777")}}o=new(require("mongodb")).MongoClient("mongodb+srv://ShinBro:akfls123@shindb.gk0qr7i.mongodb.net/?retryWrites=true&w=majority&appName=ShinDB",{useNewUrlParser:!0}).connect();let u=(0,s.l)(n,"default"),m=(0,s.l)(n,"config"),d=new a.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/score",pathname:"/api/score",bundlePath:"",filename:""},userland:n})},7153:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},1802:(e,t,r)=>{e.exports=r(145)}};var t=require("../../webpack-api-runtime.js");t.C(e);var r=t(t.s=1356);module.exports=r})();