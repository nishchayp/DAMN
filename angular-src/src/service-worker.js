importScripts('workbox-sw.prod.v2.1.2.js');
importScripts('workbox-background-sync.prod.v2.0.3.js');

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