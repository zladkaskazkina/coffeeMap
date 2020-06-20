const firebase = require("firebase");
const fs = require('fs');
// Required for side-effects

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyClxc7iAjxsD0XGc-NVj5UInTpFoWeXkmc",
  authDomain: "coffeemap-aeaf4.firebaseapp.com",
  projectId: "coffeemap-aeaf4"
});

let db = firebase.firestore();


let rawdata = fs.readFileSync('../data.json');
const { coffeeShops } = JSON.parse(rawdata);
// console.log(coffeeShops);

coffeeShops.forEach(function (obj) {
  db.collection("coffeeShops").add(obj).then(function (docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});
