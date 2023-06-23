importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyB10kyter7oJYYJ2RoCBf2Fa15B4wO79YA",
    authDomain: "pushnotification-dba8c.firebaseapp.com",
    projectId: "pushnotification-dba8c",
    storageBucket: "pushnotification-dba8c.appspot.com",
    messagingSenderId: "593376484217",
    appId: "1:593376484217:web:3bfef690feab616ee5ada8",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    
    const message = payload.data.json();
    const title = message.notification.title;
    const options = {
      body: message.notification.body,
      icon: 'path/to/notification-icon.png',
      badge: 'path/to/notification-badge.png',
      // Otras opciones de configuración
    };


    self.registration.showNotification(title, options);
}); 