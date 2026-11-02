// Service Worker minimal: كل الطلبات تذهب للإنترنت مباشرة (لا تخزين) حتى تعمل الإعلانات دائماً
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request));});
