self.addEventListener('install', function(e){
  self.skipWaiting();
});
self.addEventListener('activate', function(e){
  clients.claim();
});
self.addEventListener('fetch', function(e){
  e.respondWith(fetch(e.request).catch(function(){
    return new Response('غير متصل بالإنترنت', {status:503});
  }));
});
