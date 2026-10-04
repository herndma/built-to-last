var CACHE="built-to-last-v27";
var FILES=["./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png","./icon-180.png"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(FILES)}));self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(n){return n!==CACHE}).map(function(n){return caches.delete(n)}))}));self.clients.claim()});
self.addEventListener("fetch",function(e){
  if(e.request.method!=="GET"||new URL(e.request.url).origin!==location.origin)return;
  e.respondWith(fetch(e.request).then(function(r){
    if(r&&r.ok){var c=r.clone();caches.open(CACHE).then(function(x){x.put(e.request,c)})}
    return r;
  }).catch(function(){return caches.match(e.request).then(function(m){return m||(e.request.mode==="navigate"?caches.match("./index.html"):Response.error())})}));
});
