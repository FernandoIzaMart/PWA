importScripts('assets/lib/cache-polyfill.js');

let CACHE_VERSION = 'app-v0.00';
// Agregamos las rutas de todos los archivos que se trabajaran sin conexión
let CACHE_FILES = [
  './',
  'index.html',
  'assets/style/style.css',
  'assets/script/script.js',
  'assets/lib/cache-polyfill.js',
  'assets/lib/bootstrap.bundle.min.js',
  'assets/image/icon-144.png',
  'assets/image/app-store-badge.svg',
  'assets/image/demo-screen.mp4',
  'assets/image/favicon.ico',
  'assets/image/google-play-badge.svg',
  'assets/image/tnw-logo.svg',
  'assets/image/photo-1620207418302-439b387441b0.jpg',
  'assets/image/photo-1620912189865-1e8a33da4c5e.jpg',
];

self.addEventListener('install', function (event) {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_VERSION)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(CACHE_FILES);
            })
    )
})

self.addEventListener('fetch', function (event) {
    let online = navigator.onLine
    if (!online) {
        event.respondWith(
            caches.match(event.request).then(function (res) {
                if (res) {
                    return res;
                }
            })
        )
    }
})

self.addEventListener('activate', function(event){
    event.waitUntil(
        caches.keys().then(function(keys){
            return prompt.all(keys.map(function(keys, i){
                if(keys !== CACHE_VERSION){
                    return caches.delete(keys[i]);
                }
            }))
        })
    )
})


importScripts('https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.2/firebase-messaging.js');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB10kyter7oJYYJ2RoCBf2Fa15B4wO79YA",
  authDomain: "pushnotification-dba8c.firebaseapp.com",
  projectId: "pushnotification-dba8c",
  storageBucket: "pushnotification-dba8c.appspot.com",
  messagingSenderId: "593376484217",
  appId: "1:593376484217:web:3bfef690feab616ee5ada8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const messaging = firebase.messaging();

self.addEventListener('push', (event) => {
  const data = event.data.json();
  const { title, body } = data;

  self.registration.showNotification(title, {
    body,
  });
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  // Aquí puedes manejar el evento de clic en la notificación
});

messaging.onBackgroundMessage((payload) => {
  const { title, body } = payload.notification;

  self.registration.showNotification(title, {
    body,
  });
});

