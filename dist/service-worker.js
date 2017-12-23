importScripts('workbox-sw.prod.v2.1.2.js');
importScripts('workbox-background-sync.prod.v2.0.3.js');

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
    "revision": "4e6b345c4878bd919ee383fad9b27bff"
  },
  {
    "url": "admin-static/inline.4ce40e0fb249ef6c445e.bundle.js",
    "revision": "026f53cd3a39800075d443813ddd94b3"
  },
  {
    "url": "admin-static/main.a369562a73a8feb6aa94.bundle.js",
    "revision": "544a913b090e5a76525824c97e920e96"
  },
  {
    "url": "admin-static/polyfills.10df7e33d13f0f4e4ea3.bundle.js",
    "revision": "3c76323055d3418b8c596188912c87ff"
  },
  {
    "url": "admin-static/styles.146d8f0a5157c7726eb8.bundle.css",
    "revision": "146d8f0a5157c7726eb846436b5240d4"
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
    "revision": "4e6b345c4878bd919ee383fad9b27bff"
  },
  {
    "url": "user-static/inline.d7e2f46eba80f01103f6.bundle.js",
    "revision": "22c95e368f6264e2fa5a6208f06ee16f"
  },
  {
    "url": "user-static/main.58f4cfb7ec6f2706ac32.bundle.js",
    "revision": "a77c800795556286ad7839400c279f6b"
  },
  {
    "url": "user-static/polyfills.10df7e33d13f0f4e4ea3.bundle.js",
    "revision": "3c76323055d3418b8c596188912c87ff"
  },
  {
    "url": "user-static/styles.118713447dd8619ffaf5.bundle.css",
    "revision": "118713447dd8619ffaf5b04624a4dd0e"
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

let bgQueue = new workbox.backgroundSync.QueuePlugin({
  callbacks: {
    replayDidSucceed: async(hash, res) => {
      console.log(res);
      if(res.url.indexOf('/makeAdminRequest') !== -1)
        message = 'Administrative privileges request sent'
      if(res.url.indexOf('/makeAccessRequest') !== -1)
        message = 'Access request sent'
      if(res.url.indexOf('/admin/acceptAdminRequest') !== -1)
        message = 'You have accepted the admin request'
      if(res.url.indexOf('/admin/rejectAdminRequest') !== -1)
        message = 'You have rejected the admin request'
      if(res.url.indexOf('/admin/revokeAdminPrivilege') !== -1)
        message = 'You have revoked the admin privilege'
      if(res.url.indexOf('/admin/acceptAccessRequest') !== -1)
        message = 'You have accepted the access request'
      if(res.url.indexOf('/admin/rejectAccessRequest') !== -1)
        message = 'You have rejected the access request'
      if(res.url.indexOf('/admin/revokeAccessPrivilege') !== -1)
        message = 'You have revoked the access privileges'
      if(Notification.permission === 'granted')
        self.registration.showNotification('DAMN', {
          body: message,
          icon: './images/icons/icon-128x128.png',
          vibrate: [100, 50, 100]
        });
    }
  }
});

workboxSW.router.registerRoute('/makeAdminRequest',
  workboxSW.strategies.networkOnly({plugins: [bgQueue]}), 'GET'
);

workboxSW.router.registerRoute('/makeAccessRequest',
  workboxSW.strategies.networkOnly({plugins: [bgQueue]}), 'POST'
);

workboxSW.router.registerRoute(new RegExp('/admin/acceptAdminRequest*'),
  workboxSW.strategies.networkOnly({plugins: [bgQueue]}), 'GET'
);

workboxSW.router.registerRoute(new RegExp('/admin/rejectAdminRequest*'),
  workboxSW.strategies.networkOnly({plugins: [bgQueue]}), 'GET'
);

workboxSW.router.registerRoute(new RegExp('/admin/revokeAdminPrivilege*'),
  workboxSW.strategies.networkOnly({plugins: [bgQueue]}), 'GET'
);

workboxSW.router.registerRoute(new RegExp('/admin/acceptAccessRequest*'),
  workboxSW.strategies.networkOnly({plugins: [bgQueue]}), 'POST'
);

workboxSW.router.registerRoute(new RegExp('/admin/rejectAccessRequest*'),
  workboxSW.strategies.networkOnly({plugins: [bgQueue]}), 'GET'
);

workboxSW.router.registerRoute(new RegExp('/admin/revokeAccessPrivilege*'),
  workboxSW.strategies.networkOnly({plugins: [bgQueue]}), 'GET'
);

self.addEventListener('message', function(event) {
  let data = event.data;
  if(data.command == 'online')
    bgQueue.replayRequests()
});