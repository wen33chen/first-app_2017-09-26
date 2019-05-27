import * as webpush from 'web-push';
const vapidKeys = {
  publicKey: 'BOpiQu6ESXDhu5irgP85QKJQJjmUBxgBUhzks4PffQWd_4PozBkfFLbjtLh06uMM36tUhzlIqRHHiPIxpOKpbOU',
  privateKey: '0Fmxsa5JlmtFVNG2hYxYpCVrK09Jm8oDMyXVUsEEcRY'
};
const webPush = webpush;
webPush.setVapidDetails(
  'mailto:denhuang@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);
const options = {
  title: '我是標題',
  icon: 'assets/images/android_048.png',
  body: '開發一科測試訊息',
  image: 'https://i0.wp.com/www.womstation.com/wp-content/uploads/2018/03/1-2.png?resize=240%2C227&ssl=1',
  data: {
    link: 'https://www.cathaybk.com.tw',
    link_ok: 'https://www.cathaybk.com.tw',
    link_ng: 'https://tw.yahoo.com/'
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
const subscription = {
  endpoint: 'https://fcm.googleapis.com/fcm/send/dZ0ovHZGe_c:APA91bEr1fthNYeguY0rTxAadLjEabCJkdRxcAkicBGR9_LvP7-GCEACQkYLxz2CUAG4uLrQuFvRMNyBC2iYcJ55OwSbJJksDx0470gTrzKASzpcff43KCdLPqqWhJQdUeK4Bu5jtOQj',
  expirationTime: null,
  keys: {
    p256dh: 'BELWOBQsvENa1vL0NoCE3eIpcCVWkVtAhaO2lhGP515m7NefL5gRoJZ56YtY_89RtafRnWD6CqDuqWDwGB_BxEA',
    auth: 'BIcV0buGDjrV5vo1eWsi_Q'
  }
};

// const subscription = {
//   endpoint: 'https://fcm.googleapis.com/fcm/send/dN21VtT-67I:APA91bHPEu82qRMg_RZueWqzpHYT0oUPbStSaKSx1eCqoy2lShh382pVPt_3XPvDwfdAoGcAOhhOO4ho6YZxyGbwSmQI-Lxx9oSaNHdnd7cToNDYPmMYEnNhk6v-SI4CXoQ5nlmubL5A',
//   expirationTime: null,
//   keys: {
//     p256dh: 'BH4RVglKVIQq-Jl7hhbpUBf2Yw6BsKZ_eiekDIDsIJTJlRhmxPHz2HEHBejPUswgwn6ihS5lLsXLjPCS9aa6uyc',
//     auth: 'pdcGbZOmdOSceGv-qf1WaQ'
//   }
// };

//DL
// const subscription = {
//   endpoint: 'https://fcm.googleapis.com/fcm/send/d16r0qyi_0A:APA91bFHgNb7vLXusvG4NtcSJZ7BfiMj-zRkNs70KLIENLUIuhT1XZyGdR54102OOmMCjyYe1tVFgRDAd9z0etjXIffm8tSNlIwu93HxdhHU_AsgrrG3g6E1vTr7XmNxDombZ105OxmG',
//   expirationTime: null,
//   keys: {
//     p256dh: 'BHTEtGnlJ_3oSmBHWHoQXulV0Fm2znv82cDEEF_hahTkZSwat8Ceu6gJbDrWCpwBqG2c9gBjDmHwEp78uubg9NQ',
//     auth: 's11wCCwPoJU0P_eGbA4vxw'
//   }
// };

webPush.sendNotification(subscription, JSON.stringify(options));
