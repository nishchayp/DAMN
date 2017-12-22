importScripts('workbox-sw.prod.v2.1.2.js');
// importScripts('workbox-background-sync.prod.v2.0.3.js');

const workboxSW = new WorkboxSW();
workboxSW.precache([]);

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