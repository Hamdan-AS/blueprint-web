const CACHE_NAME = 'blueprint-v2-shell-4';
const RUNTIME_NAME = 'blueprint-v2-content-4';
const ROOT = self.registration.scope;
const SHELL = [
  'web-app/', 'web-app/index.html', 'web-app/style.css?v=6', 'web-app/app.js?v=6',
  'web-app/vendor/marked.min.js', 'terms/2026-fall/term.json',
].map((path) => new URL(path, ROOT).href);

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys
    .filter((key) => ![CACHE_NAME, RUNTIME_NAME].includes(key)).map((key) => caches.delete(key))))
    .then(() => self.clients.claim()));
});

async function notifyUpdated() {
  const clients = await self.clients.matchAll({ includeUncontrolled: true });
  for (const client of clients) client.postMessage({ type: 'CACHE_UPDATED', at: new Date().toISOString() });
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).catch(() => caches.match(new URL('web-app/index.html', ROOT).href)));
    return;
  }

  const isTermConfig = url.pathname.endsWith('/terms/2026-fall/term.json');
  if (isTermConfig) {
    event.respondWith(fetch(request).then(async (response) => {
      const cache = await caches.open(RUNTIME_NAME);
      await cache.put(request, response.clone());
      notifyUpdated();
      return response;
    }).catch(() => caches.match(request)));
    return;
  }

  event.respondWith(fetch(request).then(async (response) => {
    if (response.ok) {
      const cache = await caches.open(RUNTIME_NAME);
      await cache.put(request, response.clone());
      notifyUpdated();
    }
    return response;
  }).catch(() => caches.match(request)));
});
