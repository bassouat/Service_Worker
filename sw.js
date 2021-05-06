importScripts('index.umd.js');

self.addEventListener('fetch', (event) => {
  // Alternatively, examine event.request and only use the
  // appcachePolyfill.handle() logic for a subset of requests.
  event.respondWith(appcachePolyfill.handle(event));
});