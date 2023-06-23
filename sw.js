// Define el nombre de la caché actual
const CACHE_NAME = 'my-cache';

// Instala el Service Worker
self.addEventListener('install', event => {
  console.log('Instalado el SW');
});

// Activa el Service Worker
self.addEventListener('activate', event => {
  console.log('SW Activado');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            // Borra la caché si no coincide con el nombre de la caché actual
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Intercepta y responde a las solicitudes fetch
self.addEventListener('fetch', event => {
  console.log('Fetch', event);
});
