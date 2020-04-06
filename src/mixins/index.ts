import Vue from 'vue'

import router from './router'
import proposal from './proposal'
import formhandler from './formhandler'
import snotify from './snotify'
import currency from './currency'
import date from './date'

Vue.mixin(router)
Vue.mixin(proposal)
Vue.mixin(formhandler)
Vue.mixin(snotify)
Vue.mixin(currency)
Vue.mixin(date)
