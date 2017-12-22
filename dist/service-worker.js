importScripts('workbox-sw.prod.v2.1.2.js');
// importScripts('workbox-background-sync.prod.v2.0.3.js');

const workboxSW = new WorkboxSW();
workboxSW.precache([
  {
    "url": "admin-static/3rdpartylicenses.txt",
    "revision": "658f71a05a587eba2e9010bdcf509377"
  },
  {
    "url": "admin-static/favicon.ico",
    "revision": "3e247f8f61dfa0f9afb75bc8f57344e7"
  },
  {
    "url": "admin-static/index.html",
    "revision": "9c70d0695d9455cd76f7a4dbaf196ac8"
  },
  {
    "url": "admin-static/inline.ffd687d78a2a39d6133e.bundle.js",
    "revision": "13e89e461192a780fcf2958d27622072"
  },
  {
    "url": "admin-static/main.34858d7c0b597b613193.bundle.js",
    "revision": "6c51221ce972f7abd0de3ab03c932217"
  },
  {
    "url": "admin-static/polyfills.10df7e33d13f0f4e4ea3.bundle.js",
    "revision": "3c76323055d3418b8c596188912c87ff"
  },
  {
    "url": "admin-static/styles.015a27099dd848e97fa4.bundle.css",
    "revision": "015a27099dd848e97fa45458038729c7"
  },
  {
    "url": "admin-static/vendor.c4d96deb385334a753fe.bundle.js",
    "revision": "518d3624104ddd707c5f6662f920cb61"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "ae48bd293634ccc724e2237515ff4cea"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "ad74d01d890786d909a601700bf499c8"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "d728a3f50dffc84f1b20ed17b9dc390b"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "2828d41ac54a4ddbcbeb9ac0b16919b2"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "eb757039b42d89a49f04bd2c24b2b62e"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "07c56ca9635be09665acc52cb4e2e915"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "de99e3ffb2b2831e56028bed806b77dd"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "119573c50a56caecc52d6c7790f63ada"
  },
  {
    "url": "manifest.json",
    "revision": "0f6c9083a2459adcb14a4665f401f742"
  },
  {
    "url": "user-static/3rdpartylicenses.txt",
    "revision": "6caedf28349167a572b3bcb8b35c5f4c"
  },
  {
    "url": "user-static/favicon.ico",
    "revision": "3e247f8f61dfa0f9afb75bc8f57344e7"
  },
  {
    "url": "user-static/index.html",
    "revision": "9c70d0695d9455cd76f7a4dbaf196ac8"
  },
  {
    "url": "user-static/inline.9554ad9e5222aeba5ee7.bundle.js",
    "revision": "ad99f784115a8222fb66e842547732c7"
  },
  {
    "url": "user-static/main.ea52b42c5a4ee6dc8eee.bundle.js",
    "revision": "2b0ef3791f52536796e485f00b5f0b3e"
  },
  {
    "url": "user-static/polyfills.10df7e33d13f0f4e4ea3.bundle.js",
    "revision": "3c76323055d3418b8c596188912c87ff"
  },
  {
    "url": "user-static/styles.48e72670b09a2857da07.bundle.css",
    "revision": "48e72670b09a2857da07b30145b307fd"
  },
  {
    "url": "user-static/vendor.ac94eee836a6cf48c626.bundle.js",
    "revision": "ae67b3371f3b03a4c25db58cc4925079"
  },
  {
    "url": "workbox-background-sync.prod.v2.0.3.js",
    "revision": "2da4c7c2602de81accb7e3e4f611e73f"
  }
]);

workboxSW.router.registerRoute('/', workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute('/login', workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute('/admin', workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute('/accesses', workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute('/accessrequests', workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute('/admins', workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute('/adminrequests', workboxSW.strategies.cacheFirst());

workboxSW.router.registerRoute(new RegExp('/admin/getAccesses'),
  workboxSW.strategies.networkFirst({cacheName: 'dynamic-cache'})
);
workboxSW.router.registerRoute(new RegExp('/admin/getAccessRequests'),
  workboxSW.strategies.networkFirst({cacheName: 'dynamic-cache'})
);
workboxSW.router.registerRoute(new RegExp('/admin/getAdmins'),
  workboxSW.strategies.networkFirst({cacheName: 'dynamic-cache'})
);
workboxSW.router.registerRoute(new RegExp('/admin/getAdminRequests'),
  workboxSW.strategies.networkFirst({cacheName: 'dynamic-cache'})
);

workboxSW.router.registerRoute(new RegExp('^https://fonts\\.googleapis\\.com'),
  workboxSW.strategies.cacheFirst({
    cacheName: 'googleapis',
    cacheExpiration: {
      maxEntries: 20
    },
    cacheableResponse: {statuses: [0, 200]}
  })
);
workboxSW.router.registerRoute(new RegExp('^https://cdnjs\\.cloudflare\\.com/ajax/libs/font-awesome'),
  workboxSW.strategies.cacheFirst({
    cacheName: 'iconfonts',
    cacheExpiration: {
      maxEntries: 20
    },
    cacheableResponse: {statuses: [0, 200]}
  })
);
workboxSW.router.registerRoute(new RegExp('^https://fonts\\.gstatic\\.com'),
  workboxSW.strategies.cacheFirst({
    cacheName: 'googleapis',
    cacheExpiration: {
      maxEntries: 20
    },
    cacheableResponse: {statuses: [0, 200]}
  })
);

// let bgQueue = new workbox.backgroundSync.Queue();

// self.addEventListener('fetch', function(event){
//   if (event.request.url.indexOf('/makeAdminRequest') !== -1)
//     queueReqAndSync(event, 'admin-request');
//   else if(event.request.url.indexOf('/makeAccessRequest' !== -1)
//     queueReqAndSync(event, 'access-request');
// });

// function queueReqAndSync(e, regname) {
//   const clone = e.request.clone();
//   e.respondWith(fetch(e.request).catch((err) => {
//     bgQueue.pushIntoQueue({
//       request: clone,
//     }).then((a) => {
//       self.registration.sync.register(regname)
//     });
//   }));
// }

// self.addEventListener('sync', function (event) {
//   if(event.tag === 'admin-request') {
//     console.log('adminreq')
//     event.waitUntil(bgQueue.replayRequests().then((a) => {
//       console.log('Admin request sent');
//     })
//     .catch((err) => {
//       console.log('Could not send admin request');
//     }));
//   } else if(event.tag === 'access-request') {
//     console.log('accessreq')
//     event.waitUntil(bgQueue.replayRequests().then((a) => {
//       console.log('Access request sent');
//     })
//     .catch((err) => {
//       console.log('Could not send access request');
//     }));
//   }
// });