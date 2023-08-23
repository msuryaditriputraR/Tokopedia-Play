const showNotification = (title) => {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      const notif = new Notification(title, {
        icon: "/favicon.png",
      });

      setTimeout(() => notif.close(), 5000);
    }
  });
};

export default showNotification;
