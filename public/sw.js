if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,n,c)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const a={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return i;case"module":return a;default:return e(s)}}))).then((e=>{const s=c(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-1ca495a9"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/FI_vf_vw0Ddf7XbkHPy3k/_buildManifest.js",revision:"FI_vf_vw0Ddf7XbkHPy3k"},{url:"/_next/static/FI_vf_vw0Ddf7XbkHPy3k/_ssgManifest.js",revision:"FI_vf_vw0Ddf7XbkHPy3k"},{url:"/_next/static/chunks/100-bf1e509cfaad2a6accf1.js",revision:"FI_vf_vw0Ddf7XbkHPy3k"},{url:"/_next/static/chunks/283-29b5b6298576dfdfcc21.js",revision:"FI_vf_vw0Ddf7XbkHPy3k"},{url:"/_next/static/chunks/41199329-00348e22afe411c8c063.js",revision:"FI_vf_vw0Ddf7XbkHPy3k"},{url:"/_next/static/chunks/910-43b7c63132e1ac7bcb9f.js",revision:"FI_vf_vw0Ddf7XbkHPy3k"},{url:"/_next/static/chunks/959-45156e6ea060a2fae9eb.js",revision:"FI_vf_vw0Ddf7XbkHPy3k"},{url:"/_next/static/chunks/985-f70ca140cc3b3e939dbe.js",revision:"FI_vf_vw0Ddf7XbkHPy3k"},{url:"/_next/static/chunks/a9a7754c-0495521f71f9c9ea586e.js",revision:"FI_vf_vw0Ddf7XbkHPy3k"},{url:"/_next/static/chunks/cb1608f2-6753d6ccf0df0d14b78c.js",revision:"FI_vf_vw0Ddf7XbkHPy3k"},{url:"/_next/static/chunks/commons-cf918827c6a4deacc245.js",revision:"FI_vf_vw0Ddf7XbkHPy3k"},{url:"/_next/static/chunks/framework-3d3a958fac336f63ef62.js",revision:"FI_vf_vw0Ddf7XbkHPy3k"},{url:"/_next/static/chunks/main-8d23c568a7d2529af5f6.js",revision:"FI_vf_vw0Ddf7XbkHPy3k"},{url:"/_next/static/chunks/pages/404-7564a005e8404ced5784.js",revision:"FI_vf_vw0Ddf7XbkHPy3k"},{url:"/_next/static/chunks/pages/_app-a920a35d3c7f6c8b381a.js",revision:"FI_vf_vw0Ddf7XbkHPy3k"},{url:"/_next/static/chunks/pages/_error-c5f85455b2e489aaa89b.js",revision:"FI_vf_vw0Ddf7XbkHPy3k"},{url:"/_next/static/chunks/pages/about-3ad83f5c550247a83f6c.js",revision:"FI_vf_vw0Ddf7XbkHPy3k"},{url:"/_next/static/chunks/pages/blog-ed65fb372e0330198c63.js",revision:"FI_vf_vw0Ddf7XbkHPy3k"},{url:"/_next/static/chunks/pages/contact-cd5594c2e50e1a0c6010.js",revision:"FI_vf_vw0Ddf7XbkHPy3k"},{url:"/_next/static/chunks/pages/index-053b2a0ac6beb1b714fc.js",revision:"FI_vf_vw0Ddf7XbkHPy3k"},{url:"/_next/static/chunks/pages/post/%5Bid%5D-23e692625b62f4827498.js",revision:"FI_vf_vw0Ddf7XbkHPy3k"},{url:"/_next/static/chunks/pages/tech-723d510675e610b5a662.js",revision:"FI_vf_vw0Ddf7XbkHPy3k"},{url:"/_next/static/chunks/polyfills-3d2c0f0875171918a758.js",revision:"FI_vf_vw0Ddf7XbkHPy3k"},{url:"/_next/static/chunks/webpack-ade6294e10e89d03b211.js",revision:"FI_vf_vw0Ddf7XbkHPy3k"},{url:"/_next/static/css/22fa9fb0485765d026a1.css",revision:"FI_vf_vw0Ddf7XbkHPy3k"},{url:"/apple-icon.png",revision:"fbad728c53358f6995c21108c2427a82"},{url:"/favicon-16x16.png",revision:"9c0e6af86421b227f6467599ecb9ec30"},{url:"/favicon-32x32.png",revision:"f6a420f9333af6b1d9c0ad3495d2c06e"},{url:"/favicon.ico",revision:"e86801dfeaec8d87df24648b6ce2bc4b"},{url:"/images/about-img.jpg",revision:"41fcf7d5b30411fbe0f9d09b9c888077"},{url:"/images/contentful.svg",revision:"a1907edd8467af36b005d4e8d535d310"},{url:"/images/firebase.svg",revision:"bfa69c4f3255d5c564c2ec600ff9885e"},{url:"/images/home-img.svg",revision:"d33da942fef3b509ff3f161f3f208dd6"},{url:"/images/icons/icon-128x128.png",revision:"a0dabcfbfc1173dc2b0ff10d2de55a88"},{url:"/images/icons/icon-144x144.png",revision:"7ce504a8019084dd0e651ae15562435d"},{url:"/images/icons/icon-152x152.png",revision:"93489d0bc4f6c4f9c3fa0d90e05a9c7e"},{url:"/images/icons/icon-192x192.png",revision:"ad2ed86f6a69d6908db7505fa6566cd4"},{url:"/images/icons/icon-384x384.png",revision:"6a3f69cb8c2e3b5e1a14774cfda7d8ed"},{url:"/images/icons/icon-512x512.png",revision:"cdf5acd8ff173b2c003bb4208ffd2bb8"},{url:"/images/icons/icon-72x72.png",revision:"2295f94abbcb11bd7087593a429517a1"},{url:"/images/icons/icon-96x96.png",revision:"b9e8ab253d6f5feda25727fc03499a6d"},{url:"/images/next-js.svg",revision:"b5d25ca3c0decaea251b75c69a934e8b"},{url:"/images/pwa.svg",revision:"b50455e046f84b118de3f049b0f27e23"},{url:"/images/tailwindcss.svg",revision:"3323dd0202edcaf8d4392e994668959c"},{url:"/images/ts.svg",revision:"9e8bfce4de1e3508a98fb887c593c11b"},{url:"/manifest.json",revision:"50dee78fe7b8e63b0dd4f7ef7d48faa5"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
