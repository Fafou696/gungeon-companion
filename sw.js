const CACHE='gungeon-companion-v8';
const CORE=['./','./index.html','./styles.css','./app.js','./pictograms.js','./manifest.webmanifest','./icon-192.png','./icon-512.png','./data/guide.json','./data/floors.json'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)))});
self.addEventListener('activate',e=>e.waitUntil(
  caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())
));
self.addEventListener('fetch',e=>e.respondWith(
  fetch(e.request).then(r=>{const c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c));return r})
  .catch(()=>caches.match(e.request))
));
