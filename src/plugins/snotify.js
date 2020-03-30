import Vue from 'vue';

import Snotify, { SnotifyPosition } from 'vue-snotify'

const options = {
  global: {
    showProgressBar: false,
    pauseOnHover: true,
    newOnTop: false,
    oneAtTime: true,
    preventDuplicates: true,
    titleMaxLength: 110,
    bodyMaxLength: 1110,
    timeout: 5000
  },
  toast: {
    position: SnotifyPosition.leftBottom
  }
}

Vue.use(Snotify, options)
