const self = this;

const CACHE_STATIC = "static-v0.31";
const CACHE_DYNAMIC = "dynamic-v0.1";

self.addEventListener("install", (event) => {
  console.log("[SERVICE WORKER] Installing...");
  event.waitUntil(
    caches
      .open(CACHE_STATIC)
      .then((cache) => {
        console.log("[SERVICE WORKER] Precaching App Shell");
        cache.addAll([
          "/static/js/bundle.js",
          "/static/js/main.chunk.js",
          "/static/js/",
          "/index.html",
          "/",
          //images
          //   "/favicon1.ico",
          "/static/media/favicon1.ico",
          "/static/media/illustration-empty.svg",
          "/static/media/illustration-empty.e3122ec28052ac246263daf21c5e9764.svg",
          "/static/media/icon-delete.55a4f6bdb58d753dfd4d9a42f42e8e53.svg",
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
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_STATIC && key !== CACHE_DYNAMIC) {
            console.log("[SERVICE WORKER] removing old cache", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

//CACHE THEN NETWORK
self.addEventListener("fetch", (event) => {
  let url_fetchInvoices = `http://localhost:5000/api/invoices`;
  //use cache then network for some links
  if (event.request.url.indexOf(url_fetchInvoices) > -1) {
    event.respondWith(
      caches.open(CACHE_DYNAMIC).then((cache) => {
        return fetch(event.request).then((res) => {
          cache.put(event.request, res.clone());
          return res;
        });
      })
    );
  } else {
    //use cache with network fallback for other links
    event.respondWith(
      //check cache
      caches.match(event.request).then((response) => {
        if (response) {
          return response;
        }
        // make network requestt
        return fetch(event.request)
          .then((res) => {
            //store network results in dynamic cache
            caches.open(CACHE_DYNAMIC).then((cache) => {
              cache.put(event.request.url, res.clone());
              return res;
            });
          })
          .catch((error) => {
            //this is where you can add a fallback page
          });
      })
    );
  }
});

//CACHE WITH NETWORK FALLBACK STRATEGY
// self.addEventListener("fetch", (event) => {
//   if (event.request.url === "http://localhost:5000/api/users/login") {
//     // return;
//   }
//   event.respondWith(
//     //check cache
//     caches.match(event.request).then((response) => {
//       if (response) {
//         return response;
//       }
//       // make network requestt
//       return fetch(event.request)
//         .then((res) => {
//           //store network results in dynamic cache
//           caches.open(CACHE_DYNAMIC).then((cache) => {
//             cache.put(event.request.url, res.clone());
//             return res;
//           });
//         })
//         .catch((error) => {
//           //this is where you can add a fallback page
//         });
//     })
//   );
// });
