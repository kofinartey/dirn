let self = this;

self.addEventListener("install", (event) => {
  console.log("[SERVICE WORKER] Installing...");
  event.waitUntil(
    caches
      .open("static")
      .then((cache) => {
        console.log("[SERVICE WORKER] Precaching App Shell");
        cache.addAll([
          "/static/js/bundle.js",
          "/static/js/main.chunk.js",
          "/static/js/",
          "/index.html",
          "/",
          //images
          "/favicon1.ico",
          "/static/media/illustration-empty.svg",
          "/static/media/illustration-empty.e3122ec28052ac246263daf21c5e9764.svg",
          "/static/media/logo.e8c9e71e5f292af8e66b49e99439f7b7.svg",
          "/static/media/icon-moon.7101c57dc8ecc85e045e9179625e2cb2.svg",
          "/static/media/icon-plus.278c048a38de266d0e5bdbb8bcaaf395.svg",
          "/static/media/icon-arrow-left.e9bb76376b884042fecf1abba1419934.svg",
        ]);
      })
      .catch((error) => {
        console.log(error);
      })
  );
});

self.addEventListener("activate", (event) => {
  console.log("[SERVICE WORKER] Activating...");
  return self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      } else {
        return fetch(event.request).catch((error) => console.log(error));
      }
    })
  );
});
