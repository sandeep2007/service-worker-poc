const APP = {
  SW: null,
  init() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js", { scope: "/" })
        .then((registration) => {
          APP.SW =
            registration.installing ||
            registration.waiting ||
            registration.active;
          console.log("Service worker registered");
        });

      if (navigator.serviceWorker.controller) {
        console.log("Service worker installed");
      }

      navigator.serviceWorker.oncontrollerchange = (e) => {
        console.log("New service worker activated");
      };

      // navigator.serviceWorker.getRegistrations().then((registrations) => {
      //   for (let register of registrations) {
      //     register
      //       .unregister()
      //       .then((isUnregistration) => console.log(isUnregistration));
      //   }
      // });
    } else {
      console.log("Service worker are not supported.");
    }
  },
};

document.addEventListener("DOMContentLoaded", APP.init());
