import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = "host";

axios.interceptors.request.use(function (config) {

    // override init every request
    // config.params = {};
    // config.params['signiture'] = app.$data.signiture;
    // config.headers.common['Authorization'] = 'Bearer ' + store.state.auth.credential.token;
    // config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

		config.headers.post['Content-Type'] = 'application/json';
		config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

    // switch (config.method) {
    //   case "post":
    //   case "put":
    //   case "delete":
    //   default:
    //     break;
    // }

    return config;

}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

axios.interceptors.request.use(function (response) {

    return response;

}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

Vue.prototype.$axios = axios
