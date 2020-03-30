require("./register-proposal")
require("./master-pemohon")
require("./register-survey")
require("./register-surveyor")
require("./proposal")
require("./analisa-proposal")

import Vue from "vue"

const PageDashboard = resolve => {
    require.ensure(
        ['./page-dashboard'],
        () => {
            resolve(require('./page-dashboard'))
        }, 'page-dashboard'
    )
}


Vue.component("page-dashboard", PageDashboard)
