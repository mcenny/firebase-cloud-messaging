import { messaging } from "./firebase";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const VAPID_KEY =
  "BG_xLLqsQwunMUhUhphZa12LakM5TpGu47ekZXT8RuU9ntEBMJNsFoOJVw4-ivB7gex8rNoATf1Eh50U2lURY1U";

export async function RequestNotificationsPermission() {
  const permission = await Notification.permission();
  if (permission === "granted") {
    await getDeviceToken();
  } else {
    console.log("permission denied");
  }
}

export async function getDeviceToken() {
  const msg = await messaging();
  const fmcToken = await getToken(msg, { vapidKey: VAPID_KEY });
  if (fmcToken) {
    console.log(fmcToken, "::: token");

    onMessage(msg, (message) => {
      console.log("New notification", message.notification);
      new Notification(message.notification.title, {
        body: message.notification.body,
      });
    });
  } else {
    RequestNotificationsPermission();
  }
}
