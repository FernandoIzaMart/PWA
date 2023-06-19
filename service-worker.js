// Define el nombre de la caché
const cacheName = 'mi-pwa-cache';

// Lista de archivos a cachear
const filesToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/imagen1.jpg',
  '/imagen2.jpg',
  // Agrega aquí más archivos que deseas cachear
];

// Evento de instalación del Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName)
      .then((cache) => {
        return cache.addAll(filesToCache);
      })
  );
});

// Evento de activación del Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.filter((name) => {
            return name !== cacheName;
          }).map((name) => {
            return caches.delete(name);
          })
        );
      })
  );
});

// Evento fetch para interceptar las solicitudes de red
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
