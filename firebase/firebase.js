import { initializeApp } from "firebase/app";
import { getMessaging, isSupported } from "firebase/messaging";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyAZ9NURHcW53iRqQA5o7NzKVaiqnm-W3FU",
  authDomain: "fmm-admin-notification.firebaseapp.com",
  projectId: "fmm-admin-notification",
  storageBucket: "fmm-admin-notification.appspot.com",
  messagingSenderId: "989065540265",
  appId: "1:989065540265:web:4d85907c1b6f8f28f9afb8",
  measurementId: "G-2E92193F4X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging and get a reference to the service
export const messaging = async () => (await isSupported()) && getMessaging(app);
