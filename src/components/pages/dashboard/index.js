require('./ui')

import Vue from "vue"

const DashboardAngka = resolve => {
    require.ensure(
        ['./dashboard-angka'],
        () => {
            resolve(require('./dashboard-angka'))
        }, 'dashboard-angka'
    )
}

const DashboardGrafik = resolve => {
    require.ensure(
        ['./dashboard-grafik'],
        () => {
            resolve(require('./dashboard-grafik'))
        }, 'dashboard-grafik'
    )
}

Vue.component("dashboard-angka", DashboardAngka)
Vue.component("dashboard-grafik", DashboardGrafik)
