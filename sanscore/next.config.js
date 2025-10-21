const { redirect } = require("next/navigation");


const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontEndNav:true,
  aggressiveFrontEndNavCaching : true,
  reloadOnOnline :true,
  disable:false,
  swcMinify:true,
  workboxOptions:{
    disableDevLogs: true,
    maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
  }
});

const nextConfig ={
  // async redirects(){
  //   return [
  //     {permanent : false}
  //   ]
  // }
}
module.exports = withPWA(nextConfig);