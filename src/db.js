import firebase from 'firebase/app';
import 'firebase/firestore';

// Get a Firestore instance
export const db = firebase
  .initializeApp({
    apiKey: "AIzaSyClxc7iAjxsD0XGc-NVj5UInTpFoWeXkmc",
    authDomain: "coffeemap-aeaf4.firebaseapp.com",
    databaseURL: "https://coffeemap-aeaf4.firebaseio.com",
    projectId: "coffeemap-aeaf4",
    storageBucket: "coffeemap-aeaf4.appspot.com",
    messagingSenderId: "642257912317",
    appId: "1:642257912317:web:a1db07d1650bc214559994"
  })
  .firestore();

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true });