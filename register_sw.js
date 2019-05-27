// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('./sw.js')
//     .then(reg => {
//       // registration worked
//       console.log('[Service Worker] Registration succeeded. Scope is ' + reg.scope);
//       if ('Notification' in window) {
//         console.log('Notification permission default status:', Notification.permission);
//         Notification.requestPermission(function (status) {
//           console.log('Notification permission status:', status);
//           //displayNotification();
//         });
//       }
//       subscribeUser(reg);

//     }).catch(error => {
//       // registration failed
//       console.log('[Service Worker] Registration failed with ' + error);
//     });
//   }

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function(){
    navigator.serviceWorker.register('./sw.js').then(function(swRef){
      console.log('[Service Worker] Registration succeeded. Scope is ' + reg.scope);
        if ('Notification' in window) {
          console.log('Notification permission default status:', Notification.permission);
          Notification.requestPermission(function (status) {
            console.log('Notification permission status:', status);
            //displayNotification();
          });
        }
        subscribeUser(swRef);
    });
  });
}else{
  console.warn('Push messaing is not supported');
}


  function displayNotification() {
    if (Notification.permission == 'granted') {
      navigator.serviceWorker.getRegistration().then(reg => {
        var options = {
          icon: './assets/images/android_048.png',
          body: 'Angular 測試工作坊 9月23日(六)',
          image: 'https://dvblobcdn.azureedge.net//Content/Upload/Popular/Images/2017-07/fa2c3d72-7fad-4ccf-9857-e90af952b956_m.jpg',
          data: {
            link: 'https://www.facebook.com/groups/augularjs.tw/',
            link_ok: 'https://www.facebook.com/events/188912961650574/?acontext=%7B%22ref%22%3A%224%22%2C%22feed_story_type%22%3A%22370%22%2C%22action_history%22%3A%22null%22%7D',
            link_ng: 'https://www.facebook.com/groups/angularstudygroup/'
          },
          requireInteraction: true,
          actions: [{
              action: 'yes',
              title: '參加',
              icon: './assets/images/img_ok.png'
            },
            {
              action: 'no',
              title: '不參加',
              icon: './assets/images/img_ng.png'
            },
          ]
        };
        reg.showNotification('線上 Angular 讀書會 活動', options);
        console.log('displayNotification');
      });
    }
  }

const applicationServerPublicKey = 'BOpiQu6ESXDhu5irgP85QKJQJjmUBxgBUhzks4PffQWd_4PozBkfFLbjtLh06uMM36tUhzlIqRHHiPIxpOKpbOU';

function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
function subscribeUser(swRegistration) {
  const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
  swRegistration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: applicationServerKey
    })
    .then(subscription => {
      console.log('User is subscribed');
      console.log(JSON.stringify(subscription));
    })
    .catch(err => {
      console.log('Failed to subscribe the user: ', err);
    });
}
