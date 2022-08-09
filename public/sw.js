self.addEventListener("push", e => {
  const data = e.data.json();
  clients.matchAll().then(function (c) {
    if (c.length === 0) {
      e.waitUntil(
        self.registration.showNotification(data.name, {
          body: data.message,
          icon: "./src/assets/b.png",
          tag: "id1",
          renotify: true,
        })
      );
    }
  });
});

self.addEventListener("notificationclick", e => {
  clients.openWindow("https://www.thebetterconstruction.com/myProfile");
  e.notification.close();
});
