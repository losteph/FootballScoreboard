const CACHE_NAME = 'steph-score-v13'; // <-- Ogni volta che fai modifiche grandi, ti basta cambiare questo numeretto (v14, v15...)

// Installazione immediata del nuovo Service Worker senza attendere
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Pulizia automatica delle vecchie cache quando cambia la versione
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Strategia Network-First con fallback su Cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // Se la richiesta va a buon fine, aggiorna la copia in cache
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Se non c'è connessione (offline), pesca dalla cache
        return caches.match(event.request);
      })
  );
});