import Vue from 'vue';
import VueRouter from 'vue-router';
import Map from './components/Map.vue';
import Cafe from './components/Cafe.vue';
import Filter from './components/Filter.vue';
import App from './components/App';
import './index.html';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { firestorePlugin } from 'vuefire';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueRouter);
Vue.use(ElementUI);
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