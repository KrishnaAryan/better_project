import axios from "axios";

function notification(roomID, clientID, clientName) {
  const publicKey = process.env.REACT_APP_NOTIF_PUBLIC_KEY;
  // document.addEventListener("load", async () => {
  // console.log(publicKey)
  async function registerServiceWorker() {
    await navigator.serviceWorker.register("/sw.js", { scope: "/" });
    // console.log(sw);
  }
  registerServiceWorker();
  // });
  async function subscribe() {
    let sw = await navigator.serviceWorker.ready;
    let subscriptionExists = await sw.pushManager.getSubscription().then(function (pushSubscription) {
      return pushSubscription;
    });
    // console.log(subscriptionExists);
    if (!subscriptionExists) {
      console.log("no subscription");
      let subscription = await sw.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: publicKey,
      });

      // console.log(subscription, JSON.stringify(subscription));
      axios.post(
        "https://better-co-admin.herokuapp.com/subscribe",
        { subscription: subscription, roomID, clientID, clientName },
        ({ data }) => {}
      );
    }
  }

  subscribe();
}

export default notification;
