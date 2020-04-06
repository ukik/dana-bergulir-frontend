require("./layouts");
require("./components");
require("./pages");
require("./plugins");
require("./filters");
require("./mixins");
require("./directives");
require("./store/maps");

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import "@/css/animate.css";
import "@/assets/styles/app.scss";
import "@/assets/styles/side-navigation.css";
import "@/assets/styles/top-navigation.css";
import "@/assets/styles/simple-snotify.css";

Vue.config.productionTip = false;

import Autocomplete from 'vuejs-auto-complete'
Vue.component("autocomplete", Autocomplete)

import CheckboxRadio from 'vue-checkbox-radio';
Vue.use(CheckboxRadio);

new Vue({
  name:'11111',
  router,
  store,
  render: h => h(App)
}).$mount('#app');
