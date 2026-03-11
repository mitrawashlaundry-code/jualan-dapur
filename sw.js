// JualanDapur PWA Service Worker v2.0
// Update cache name setiap ada rilis mayor agar pengguna mendapat versi terbaru
const CACHE_NAME = 'jualan-dapur-v2';
const ASSETS_TO_CACHE = [
  '/jualan-dapur/',
  '/jualan-dapur/index.html',
  '/jualan-dapur/manifest.json',
  'https://unpkg.com/react@18/umd/react.production.min.js',
  'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
  'https://unpkg.com/@babel/standalone/babel.min.js'
  // Catatan: Google Fonts tidak di-cache karena respons CORS bersifat opaque.
  // Font akan fallback ke system font saat offline — ini perilaku yang diharapkan.
];

// Install — cache semua aset
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Caching aset aplikasi');
        // Cache satu per satu agar 1 gagal tidak membatalkan semua
        return Promise.allSettled(
          ASSETS_TO_CACHE.map(url =>
            cache.add(url).catch(err => console.warn('[SW] Gagal cache:', url, err))
          )
        );
      })
      .then(() => self.skipWaiting())
  );
});

// Activate — hapus cache lama
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => {
            console.log('[SW] Hapus cache lama:', key);
            return caches.delete(key);
          })
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch — Cache First, fallback ke network
self.addEventListener('fetch', event => {
  // Skip request non-GET
  if (event.request.method !== 'GET') return;

  // Skip cross-origin kecuali CDN yang kita cache
  const url = new URL(event.request.url);
  const isCachedOrigin = ASSETS_TO_CACHE.some(a => a.startsWith('http') && event.request.url.startsWith(new URL(a).origin));
  const isSameOrigin = url.origin === self.location.origin;
  if (!isSameOrigin && !isCachedOrigin) return;

  event.respondWith(
    caches.match(event.request)
      .then(cached => {
        if (cached) return cached;
        return fetch(event.request)
          .then(response => {
            // Cache respons baru yang valid (bukan opaque)
            if (response && response.status === 200 && response.type !== 'opaque') {
              const responseClone = response.clone();
              caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
            }
            return response;
          })
          .catch(() => {
            // Offline fallback ke index.html (path sesuai sub-path GitHub Pages)
            if (event.request.mode === 'navigate') {
              return caches.match('/jualan-dapur/index.html');
            }
          });
      })
  );
});

// Background sync placeholder
self.addEventListener('sync', event => {
  if (event.tag === 'sync-data') {
    console.log('[SW] Background sync — tidak ada server, data tetap di localStorage');
  }
});
