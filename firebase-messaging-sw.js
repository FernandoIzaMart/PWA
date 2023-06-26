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

messaging.onMessage((payload) => {
  console.log("Mensaje Recibido", payload);

  const messageElement = document.querySelector('.notification-content');
  const dataHeaderElement = document.createElement('h5');
  const dataElement = document.createElement('pre');
  dataElement.style = "overflow-x: hidden;";
  dataHeaderElement.textContent = "Mensaje recibido";
  dataElement.textContent = JSON.stringify(payload, null, 2);
  messageElement.appendChild(dataHeaderElement);
  messageElement.appendChild(dataElement);
});

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    
    // Obtener el contenido de la notificación
    const { notification } = payload;
    const { title, body } = notification;

    // Mostrar el contenido en el HTML
    const notificationContent = document.getElementById('notification-content');
    notificationContent.innerHTML = `<h3>${title}</h3><p>${body}</p>`;

    // Mostrar la notificación en el sistema
    self.registration.showNotification(title, { body });
}); 