"use strict";(()=>{var e={};e.id=225,e.ids=[225],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,n)=>{Object.defineProperty(n,"l",{enumerable:!0,get:function(){return function e(n,t){return t in n?n[t]:"then"in n&&"function"==typeof n.then?n.then(n=>e(n,t)):"function"==typeof n&&"default"===t?n:void 0}}})},1356:(e,n,t)=>{let r;t.r(n),t.d(n,{config:()=>l,default:()=>d,routeModule:()=>P});var i={};t.r(i),t.d(i,{default:()=>s});var o=t(1802),a=t(7153),u=t(6249);async function s(e,n){let t=(await r).db("sanscore"),i=await t.collection("team").find().toArray();return n.status(200).json(i)}r=new(require("mongodb")).MongoClient("mongodb+srv://ShinBro:akfls123@shindb.gk0qr7i.mongodb.net/?retryWrites=true&w=majority&appName=ShinDB",{useNewUrlParser:!0}).connect();let d=(0,u.l)(i,"default"),l=(0,u.l)(i,"config"),P=new o.PagesAPIRouteModule({definition:{kind:a.x.PAGES_API,page:"/api/score",pathname:"/api/score",bundlePath:"",filename:""},userland:i})},7153:(e,n)=>{var t;Object.defineProperty(n,"x",{enumerable:!0,get:function(){return t}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(t||(t={}))},1802:(e,n,t)=>{e.exports=t(145)}};var n=require("../../webpack-api-runtime.js");n.C(e);var t=n(n.s=1356);module.exports=t})();