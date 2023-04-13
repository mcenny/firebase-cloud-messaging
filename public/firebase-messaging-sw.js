importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyAZ9NURHcW53iRqQA5o7NzKVaiqnm-W3FU",
  authDomain: "fmm-admin-notification.firebaseapp.com",
  projectId: "fmm-admin-notification",
  storageBucket: "fmm-admin-notification.appspot.com",
  messagingSenderId: "989065540265",
  appId: "1:989065540265:web:4d85907c1b6f8f28f9afb8",
  measurementId: "G-2E92193F4X",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
messaging.onBackgroundMessage((payload) => {
  console.log("new notification", payload);
  const notificationTitle = payload.notification.title;
  const notificationBody = { body: payload.notification.body };
  self.registration.showNotification(notificationTitle, notificationBody);
});
