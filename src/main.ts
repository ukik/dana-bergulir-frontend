require("./layouts");
require("./components");
require("./pages");
require("./plugins");
require("./filters");
require("./mixins");

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import "@/css/animate.css";
import "@/assets/styles/app.css";
import "@/assets/styles/side-navigation.css";
import "@/assets/styles/top-navigation.css";

Vue.config.productionTip = false;

new Vue({
  name:'1',
  router,
  store,
  render: h => h(App)
}).$mount('#app');
