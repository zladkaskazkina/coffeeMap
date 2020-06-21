import Vue from 'vue';
import VueRouter from 'vue-router';
import Map from './components/Map.vue';
import CafePart from './components/cafePart.vue';
import CafeCard from './components/CafeCard.vue';
import Filter from './components/Filter.vue';
import Form from './components/AddForm.vue';
import App from './components/App.vue';

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
    { path: '/cafe/:id', component: CafePart },
    { path: '/filter', component: Filter },
    { path: '/', component: Map },
    { path: '/cafecard/:id', component: CafeCard },
    { path: '/form', component: Form },
  ],
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});

