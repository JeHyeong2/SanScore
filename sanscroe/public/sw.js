if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const d=e=>a(e,t),r={module:{uri:t},exports:c,require:d};s[t]=Promise.all(n.map((e=>r[e]||d(e)))).then((e=>(i(...e),c)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Title.svg",revision:"fe99ca02f640f646f52ab1f0132ad3f6"},{url:"/_next/static/chunks/173-25ebf0bbd455e73f.js",revision:"j4Ed0mvqzL2DwXAkDdSPW"},{url:"/_next/static/chunks/190-d366a21eb6d94e3e.js",revision:"j4Ed0mvqzL2DwXAkDdSPW"},{url:"/_next/static/chunks/291-197b5f058e60ee5a.js",revision:"j4Ed0mvqzL2DwXAkDdSPW"},{url:"/_next/static/chunks/app/@modal/(.)detail/%5Bteamnum%5D/loading-f4b9275a426afb2d.js",revision:"j4Ed0mvqzL2DwXAkDdSPW"},{url:"/_next/static/chunks/app/@modal/(.)detail/%5Bteamnum%5D/page-84f6f53c2e9f5372.js",revision:"j4Ed0mvqzL2DwXAkDdSPW"},{url:"/_next/static/chunks/app/@modal/default-c774b44d8b59090f.js",revision:"j4Ed0mvqzL2DwXAkDdSPW"},{url:"/_next/static/chunks/app/_not-found/page-72ba1dd8314c5b70.js",revision:"j4Ed0mvqzL2DwXAkDdSPW"},{url:"/_next/static/chunks/app/catch-all/page-cd5cfa79de1932b7.js",revision:"j4Ed0mvqzL2DwXAkDdSPW"},{url:"/_next/static/chunks/app/default-84a3c8646295d82b.js",revision:"j4Ed0mvqzL2DwXAkDdSPW"},{url:"/_next/static/chunks/app/detail/%5Bteamnum%5D/page-8c1a37296f04c37a.js",revision:"j4Ed0mvqzL2DwXAkDdSPW"},{url:"/_next/static/chunks/app/layout-7f1a9a832f10115d.js",revision:"j4Ed0mvqzL2DwXAkDdSPW"},{url:"/_next/static/chunks/app/page-c418c591a5fbd817.js",revision:"j4Ed0mvqzL2DwXAkDdSPW"},{url:"/_next/static/chunks/app/web/manage/777/page-83297169bb5f3678.js",revision:"j4Ed0mvqzL2DwXAkDdSPW"},{url:"/_next/static/chunks/fd9d1056-4e1a26e2d413ba3c.js",revision:"j4Ed0mvqzL2DwXAkDdSPW"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"j4Ed0mvqzL2DwXAkDdSPW"},{url:"/_next/static/chunks/main-87c439ce66302ccf.js",revision:"j4Ed0mvqzL2DwXAkDdSPW"},{url:"/_next/static/chunks/main-app-31241bb506351a6f.js",revision:"j4Ed0mvqzL2DwXAkDdSPW"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"j4Ed0mvqzL2DwXAkDdSPW"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"j4Ed0mvqzL2DwXAkDdSPW"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-99b46dfde292a940.js",revision:"j4Ed0mvqzL2DwXAkDdSPW"},{url:"/_next/static/css/1f46c258ea7d469b.css",revision:"1f46c258ea7d469b"},{url:"/_next/static/css/273e08e0c9802230.css",revision:"273e08e0c9802230"},{url:"/_next/static/css/407d0f479b95ed0f.css",revision:"407d0f479b95ed0f"},{url:"/_next/static/css/ff5880da55061611.css",revision:"ff5880da55061611"},{url:"/_next/static/j4Ed0mvqzL2DwXAkDdSPW/_buildManifest.js",revision:"6e089d496fed2a81ee25d6d4a35b88d8"},{url:"/_next/static/j4Ed0mvqzL2DwXAkDdSPW/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/Title.382c3da6.svg",revision:"fe99ca02f640f646f52ab1f0132ad3f6"},{url:"/_next/static/media/background.48b7900a.svg",revision:"9ca90f32eaf7a6716089735b52640f30"},{url:"/_next/static/media/teamBox.21bc1ca1.png",revision:"00b90d07e4c0d072faec0da282972124"},{url:"/background.svg",revision:"9ca90f32eaf7a6716089735b52640f30"},{url:"/font/DungGeunMo.ttf",revision:"638b8471d8607c64142f58f1eac6f604"},{url:"/icons/favicon-16x16.png",revision:"e7d285fadfde30701dda6ebdb03b78f5"},{url:"/icons/favicon-32x32.png",revision:"7a67b407fa6b111bdb130f5a716bb367"},{url:"/icons/icon-192x192.png",revision:"3bfaef4acce99f304833e177be211d67"},{url:"/icons/icon-256x256.png",revision:"72b567d6eeede7883196d60b3d4fb54c"},{url:"/icons/icon-384x384.png",revision:"7374fb35f37b8cec3f447201d0363226"},{url:"/icons/icon-512x512.png",revision:"ac893ad2df2d92cf5536d52dc1007ad9"},{url:"/move.gif",revision:"b23acecdbdf43731c65d1c04616ec77b"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/pixel.svg",revision:"efbee45f8f6da2e7e3d7a3a6deb906f8"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"},{url:"/teamBox.png",revision:"00b90d07e4c0d072faec0da282972124"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
