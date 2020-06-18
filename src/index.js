import Vue from 'vue';
import VueRouter from 'vue-router';
import Map from './components/Map.vue';
import Cafe from './components/Cafe.vue';
import Filter from './components/Filter.vue';
import App from './components/App';
import './index.html';
import { firestorePlugin } from 'vuefire';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueRouter);
Vue.use(firestorePlugin);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);


const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/cafe', component: Cafe },
    { path: '/filter', component: Filter },
    { path: '/', component: Map },
  ],
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});

//add Json to Firebase

const admin = require('../node_modules/firebase-admin');
const serviceAccount = require("../serviceAccount.json");
const data = require("../data.json");
const collectionKey = "coffeemap-aeaf4"; //name of the collection
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://coffeemap-aeaf4.firebaseio.com"
});
const firestore = admin.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);
if (data && (typeof data === "object")) {
  Object.keys(data).forEach(docKey => {
    firestore.collection(collectionKey).doc(docKey).set(data[docKey]).then((res) => {
      console.log("Document " + docKey + " successfully written!");
    }).catch((error) => {
      console.error("Error writing document: ", error);
    });
  });
}