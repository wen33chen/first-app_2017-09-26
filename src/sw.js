

self.addEventListener('install', event => {
  console.log('[ServiceWorker] Install');
});

self.addEventListener('activate', event => {
  console.log('[ServiceWorker] Activate');
});

self.addEventListener('fetch', event => {
  //console.log('[ServiceWorker] fetch', event.request);
  event.respondWith(
    caches.match(event.request)
    .then(response => response || fetch(event.request))
  );
});

self.addEventListener('notificationclick', event => {
  const notification = event.notification;
  const action = event.action;
  const link = notification.data.link;
  const link_ok = notification.data.link_ok;
  const link_ng = notification.data.link_ng;
  switch (action) {
    case 'yes':
      if (link_ok) {
        clients.openWindow(link_ok);
      }
      break;
    case 'no':
      if (link_ng) {
        clients.openWindow(link_ng);
      }
      break;
    case 'close':
      break;
    default:
      if (link) {
        clients.openWindow(link);
      }
      break;
  }
  notification.close();
  console.log('notificationclick action is', action);
})

self.addEventListener('push', event => {
  console.log('[Service Worker] Push Received.');
  let title = 'Server Push';
  let options = {
    body: 'push TEST',
    icon: './assets/images/android_048.png'
  };
  if (event.data) {
    options = event.data.json();
    title = options.title;
  }
  event.waitUntil(self.registration.showNotification(title, options));
});

