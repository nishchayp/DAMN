importScripts('workbox-sw.prod.v2.1.2.js');

const workboxSW = new WorkboxSW();
workboxSW.precache([]);

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