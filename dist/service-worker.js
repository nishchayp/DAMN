importScripts('workbox-sw.prod.v2.1.2.js');

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
    "revision": "2ea11fbf79ba46eff761d4956a8e6659"
  },
  {
    "url": "admin-static/inline.9403069fabe5890ac8a4.bundle.js",
    "revision": "b7cf0770a87a1bc589eb9f2598e36fcc"
  },
  {
    "url": "admin-static/main.e5375b6cff88a4a12acf.bundle.js",
    "revision": "0476aa234ea88f916c8ac224a33240a3"
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
    "revision": "39b916daf0af6fd3f313fcc3c8c1616b"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "a07f719148f1f11a299a8270502483cb"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "c16b49f542d3ef5a0f973d1cd89c2b03"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "1d3c3126ff87a9524b37231487c8b5b7"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "8da20457457d4f14afc0d1364ca906fc"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "ed5e09209e0fa86b7a3798993dd2c8b6"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "00fc78901218fdb2203969e4ed3ad27b"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "eb092808c4404af612ad43e2f3e6cf82"
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
    "revision": "2ea11fbf79ba46eff761d4956a8e6659"
  },
  {
    "url": "user-static/inline.417e9f232ebe156230aa.bundle.js",
    "revision": "c4268eb1be8e6154b08a00b7392f78f2"
  },
  {
    "url": "user-static/main.70a3dba60cec0d89e3f6.bundle.js",
    "revision": "df767370491f93c0d33fa135ba0fd36c"
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
  }
]);

workboxSW.router.registerRoute('/',
  workboxSW.strategies.cacheFirst()
);

workboxSW.router.registerRoute('/admin',
  workboxSW.strategies.cacheFirst()
);

workboxSW.router.registerRoute(new RegExp('/admin/getAccesses'),
  workboxSW.strategies.networkFirst({
    cacheName: 'dynamic-cache'
  })
);

workboxSW.router.registerRoute(new RegExp('/admin/getAccessRequests'),
  workboxSW.strategies.networkFirst({
    cacheName: 'dynamic-cache'
  })
);

workboxSW.router.registerRoute(new RegExp('/admin/getAdmins'),
  workboxSW.strategies.networkFirst({
    cacheName: 'dynamic-cache'
  })
);

workboxSW.router.registerRoute(new RegExp('/admin/getAdminRequests'),
  workboxSW.strategies.networkFirst({
    cacheName: 'dynamic-cache'
  })
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