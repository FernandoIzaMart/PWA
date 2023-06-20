const tokenString = document.getElementById("token");
const errorMessage = document.getElementById("error");
const message = document.getElementById("message");

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB10kyter7oJYYJ2RoCBf2Fa15B4wO79YA",
    authDomain: "pushnotification-dba8c.firebaseapp.com",
    projectId: "pushnotification-dba8c",
    storageBucket: "pushnotification-dba8c.appspot.com",
    messagingSenderId: "593376484217",
    appId: "1:593376484217:web:3bfef690feab616ee5ada8"
};


firebase.initializeApp(config);


const messaging = firebase.messaging();


messaging
  .requestPermission()
  .then(() => {
    message.innerHTML = "Notifications allowed";
    return messaging.getToken();
  })
  .then(token => {
    tokenString.innerHTML = "Token Is : " + token;
  })
  .catch(err => {
    errorMessage.innerHTML = errorMessage.innerHTML + "; " + err;
    console.log("No permission to send push", err);
  });

  
messaging.onMessage(payload => {
    console.log("Message received. ", payload);
    const { title, ...options } = payload.notification;
  });