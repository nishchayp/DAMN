import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/user/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(() => {
    registerServiceWorker('service-worker');
  })
  .catch(err => console.log(err));

function registerServiceWorker(swName: string) {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register(`/${swName}.js`)
      .then(reg => {
        // console.log('SW registered: ', reg)
      })
      .catch(err =>
        console.error('[App] Service worker registration failed', err)
      );
  } else {
    console.error('[App] Service Worker API is not supported in current browser');
  }
}