const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyClxc7iAjxsD0XGc-NVj5UInTpFoWeXkmc",
  authDomain: "coffeemap-aeaf4.firebaseapp.com",
  projectId: "coffeemap-aeaf4"
});

let db = firebase.firestore();

let places = [
  {
    "title": "onesip coffee",
    "totalScore": 4.8,
    "categoryName": "Espresso bar",
    "address": "Haštalská 755 /15, 110 00 Staré Město, Czechia",
    "plusCode": "3CRG+G5 Old Town, Prague 1, Czechia",
    "website": "onesip.coffee",
    "phone": "+420 605 411 441",
    "rank": 4,
    "placeId": "ChIJc5pD-cGUC0cRf3qi6QH52Fs",
    "url": "https://www.google.com/maps/place/onesip+coffee/@50.0912818,14.4232042,17z/data=!3m1!4b1!4m5!3m4!1s0x470b94c1f9439a73:0x5bd8f901e9a27a7f!8m2!3d50.0912818!4d14.4253929",
    "location": {
      "lat": 50.0912818,
      "lng": 14.4253929
    },
    "openingHours": {},
    "imgSrc": "",
    "terrace": 1,
    "baby": 1,
    "freelance": 1,
    "pets": 1,
    "nonDairy": 1,
    "barrierFree": 0,
    "deCaf": 1,
    "hotFood": 0
  },
  {
    "title": "Cafe Letka",
    "totalScore": 4.5,
    "categoryName": "Cafe",
    "address": "Letohradská 44, 170 00 Praha 7-Letná, Czechia Located in: Pidivadlo",
    "plusCode": "3CXG+74 Prague 7, Czechia",
    "website": "cafeletka.cz",
    "phone": "+420 777 444 035",
    "rank": 11,
    "placeId": "ChIJF9rFUMSUC0cRT2VLKDag1jQ",
    "url": "https://www.google.com/maps/place/Cafe+Letka/@50.0982349,14.4231768,17z/data=!3m1!4b1!4m5!3m4!1s0x470b94c450c5da17:0x34d6a036284b654f!8m2!3d50.0982349!4d14.4253655",
    "location": {
      "lat": 50.0982349,
      "lng": 14.4253655
    },
    "terrace": 1,
    "baby": 1,
    "freelance": 1,
    "pets": 1,
    "nonDairy": 1,
    "barrierFree": 0,
    "deCaf": 1,
    "hotFood": 0
  },
  {
    "title": "mazelab.coffee",
    "totalScore": 4.8,
    "categoryName": "Coffee shop",
    "address": "Československé armády 729/28, 160 00 Praha 6-Bubeneč, Czechia",
    "plusCode": "492X+9C Prague 6, Czechia",
    "website": "instagram.com",
    "phone": null,
    "rank": 5,
    "placeId": "ChIJ4Rw2HXOVC0cRcdcF7tU0yVo",
    "url": "https://www.google.com/maps/place/mazelab.coffee/@50.1009588,14.3963646,17z/data=!3m1!4b1!4m5!3m4!1s0x470b95731d361ce1:0x5ac934d5ee05d771!8m2!3d50.1009588!4d14.3985533",
    "location": {
      "lat": 50.1009588,
      "lng": 14.3985533
    },
    "terrace": 1,
    "baby": 1,
    "freelance": 1,
    "pets": 1,
    "nonDairy": 1,
    "barrierFree": 0,
    "deCaf": 1,
    "hotFood": 0
  },
  {
    "title": "EMA espresso bar",
    "totalScore": 4.6,
    "categoryName": "Espresso bar",
    "address": "Na Florenci 1420/3, 110 00 Nové Město, Czechia",
    "plusCode": "3CQM+F9 Prague 1, Czechia",
    "website": "emaespressobar.cz",
    "phone": "+420 730 156 933",
    "rank": 9,
    "placeId": "ChIJwbOybpWUC0cR0Ie0VH2PcqY",
    "url": "https://www.google.com/maps/place/EMA+espresso+bar/@50.088749,14.4312879,17z/data=!3m1!4b1!4m5!3m4!1s0x470b94956eb2b3c1:0xa6728f7d54b487d0!8m2!3d50.088749!4d14.4334766",
    "location": {
      "lat": 50.088749,
      "lng": 14.4334766
    },
    "terrace": 1,
    "baby": 1,
    "freelance": 1,
    "pets": 1,
    "nonDairy": 1,
    "barrierFree": 0,
    "deCaf": 1,
    "hotFood": 0
  },
  {
    "title": "Coffee Source Francouzská",
    "totalScore": 4.8,
    "categoryName": "Coffee shop",
    "address": "Francouzská 106, 101 00 Praha 10-Vršovice, Czechia",
    "plusCode": "3CCX+PR Prague 10, Czechia",
    "website": "facebook.com",
    "phone": "+420 775 443 491",
    "rank": 10,
    "placeId": "ChIJX4e4UeOVC0cRe8XlHZR9VIc",
    "url": "https://www.google.com/maps/place/Coffee+Source+Francouzsk%C3%A1/@50.0718043,14.4473327,17z/data=!3m1!4b1!4m5!3m4!1s0x470b95e351b8875f:0x87547d941de5c57b!8m2!3d50.0718043!4d14.4495214",
    "location": {
      "lat": 50.0718043,
      "lng": 14.4495214
    },
    "terrace": 1,
    "baby": 1,
    "freelance": 1,
    "pets": 1,
    "nonDairy": 1,
    "barrierFree": 0,
    "deCaf": 1,
    "hotFood": 0
  },
  {
    "title": "Café Tout va bien",
    "totalScore": 5,
    "categoryName": "Cafe",
    "address": "Slezská 482/125, 130 00 Vinohrady, Czechia",
    "plusCode": "3FG8+V4 Prague, Czechia",
    "website": "facebook.com",
    "phone": null,
    "rank": 8,
    "placeId": "ChIJFbknKfSTC0cRKYGFVZozIJQ",
    "url": "https://www.google.com/maps/place/Caf%C3%A9+Tout+va+bien/@50.077129,14.4630859,17z/data=!3m1!4b1!4m5!3m4!1s0x470b93f42927b915:0x9420339a55858129!8m2!3d50.077129!4d14.4652746",
    "location": {
      "lat": 50.077129,
      "lng": 14.4652746
    },
    "terrace": 1,
    "baby": 1,
    "freelance": 1,
    "pets": 1,
    "nonDairy": 1,
    "barrierFree": 0,
    "deCaf": 1,
    "hotFood": 0
  },
  {
    "title": "Super Tramp Coffee",
    "totalScore": 4.6,
    "categoryName": "Cafe",
    "address": "Opatovická 160, 110 00 Nové Město, Czechia",
    "plusCode": "3CH9+RC Prague 1, Czechia",
    "website": "facebook.com",
    "phone": "+420 777 446 022",
    "rank": 3,
    "placeId": "ChIJFQWDjvGUC0cR_nTpjXV2rYg",
    "url": "https://www.google.com/maps/place/Super+Tramp+Coffee/@50.0795465,14.4164312,17z/data=!3m1!4b1!4m5!3m4!1s0x470b94f18e830515:0x88ad76758de974fe!8m2!3d50.0795465!4d14.4186199",
    "location": {
      "lat": 50.0795465,
      "lng": 14.4186199
    },
    "terrace": 1,
    "baby": 1,
    "freelance": 1,
    "pets": 1,
    "nonDairy": 1,
    "barrierFree": 0,
    "deCaf": 1,
    "hotFood": 0
  },
  {
    "title": "Café Jen",
    "totalScore": 4.7,
    "categoryName": "Cafe",
    "address": "Kodaňská 37, 101 00 Praha 10-Vršovice, Czechia",
    "plusCode": "3FC4+H9 Prague 10, Czechia",
    "website": "cafejen.cz",
    "phone": "+420 604 329 904",
    "rank": 12,
    "placeId": "ChIJlYXSJ3yTC0cRcGzXFfxVvK0",
    "url": "https://www.google.com/maps/place/Caf%C3%A9+Jen/@50.0713921,14.4537611,17z/data=!3m1!4b1!4m5!3m4!1s0x470b937c27d28595:0xadbc55fc15d76c70!8m2!3d50.0713921!4d14.4559498",
    "location": {
      "lat": 50.0713921,
      "lng": 14.4559498
    },
    "terrace": 1,
    "baby": 1,
    "freelance": 1,
    "pets": 1,
    "nonDairy": 1,
    "barrierFree": 0,
    "deCaf": 1,
    "hotFood": 0
  },
  {
    "title": "Můj šálek kávy",
    "totalScore": 4.6,
    "categoryName": "Cafe",
    "address": "Křižíkova 386/105, 186 00 Praha 8-Karlín, Czechia",
    "plusCode": "3FV4+92 Prague 8, Czechia",
    "website": "mujsalekkavy.cz",
    "phone": "+420 725 556 944",
    "rank": 6,
    "placeId": "ChIJ433WHqSUC0cR-hbWXbPMSuE",
    "url": "https://www.google.com/maps/place/M%C5%AFj+%C5%A1%C3%A1lek+k%C3%A1vy/@50.093496,14.4529333,17z/data=!3m1!4b1!4m5!3m4!1s0x470b94a41ed67de3:0xe14accb35dd616fa!8m2!3d50.093496!4d14.455122",
    "location": {
      "lat": 50.093496,
      "lng": 14.455122
    },
    "terrace": 1,
    "baby": 1,
    "freelance": 1,
    "pets": 1,
    "nonDairy": 1,
    "barrierFree": 0,
    "deCaf": 1,
    "hotFood": 0
  },
  {
    "title": "Kafe Orient",
    "totalScore": 4.6,
    "categoryName": "Coffee shop",
    "address": "Klapkova 1035/28, 182 00 Praha 8-Kobylisy, Czechia",
    "plusCode": "4FF4+PG Prague 8, Czechia",
    "website": "kavovymagnat.cz",
    "phone": "+420 737 890 655",
    "rank": 1,
    "placeId": "ChIJy-PaKUfrC0cRk_uC6eyvwns",
    "url": "https://www.google.com/maps/place/Kafe+Orient/@50.1243711,14.4541639,17z/data=!3m1!4b1!4m5!3m4!1s0x470beb4729dae3cb:0x7bc2afece982fb93!8m2!3d50.1243711!4d14.4563526",
    "location": {
      "lat": 50.1243711,
      "lng": 14.4563526
    },
    "terrace": 1,
    "baby": 1,
    "freelance": 1,
    "pets": 1,
    "nonDairy": 1,
    "barrierFree": 0,
    "deCaf": 1,
    "hotFood": 0
  },
  {
    "title": "Kofárna Café",
    "totalScore": 4.6,
    "categoryName": "Cafe",
    "address": "Zborovská 84/60, 150 00 Malá Strana, Czechia",
    "plusCode": "3CJ4+3V Prague, Czechia",
    "website": "kofarna.cz",
    "phone": "+420 797 795 678",
    "rank": 10,
    "placeId": "ChIJtaRhCPuUC0cR080K8sfiKB4",
    "url": "https://www.google.com/maps/place/Kof%C3%A1rna+Caf%C3%A9/@50.0802294,14.4050318,17z/data=!3m1!4b1!4m5!3m4!1s0x470b94fb0861a4b5:0x1e28e2c7f20acdd3!8m2!3d50.0802294!4d14.4072205",
    "location": {
      "lat": 50.0802294,
      "lng": 14.4072205
    },
    "terrace": 1,
    "baby": 1,
    "freelance": 1,
    "pets": 1,
    "nonDairy": 1,
    "barrierFree": 0,
    "deCaf": 1,
    "hotFood": 0
  }
];

places.forEach(function (obj) {
  db.collection("places").add({
    title: obj.title,
    totalScore: obj.totalScore,
    address: obj.address,
    website: obj.website,
    location: {
      lat: obj.lat,
      lng: obj.lng
    },
    openingHours: obj.openingHours,
    imgSrc: obj.imgSrc,
    terrace: obj.terrace,
    baby: obj.baby,
    freelance: obj.freelance,
    pets: obj.pets,
    nonDairy: obj.nonDairy,
    barrierFree: obj.barrierFree,
    deCaf: obj.decaf,
    hotFood: obj.hotFood
  }).then(function (docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});