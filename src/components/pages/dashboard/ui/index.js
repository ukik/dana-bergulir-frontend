import Vue from "vue"

const UiDashboardAngkaCard = resolve => {
    require.ensure(
        ['./ui-dashboard-angka-card'],
        () => {
            resolve(require('./ui-dashboard-angka-card'))
        }, 'ui-dashboard-angka-card'
    )
}

const UiDashboardAngkaMeta = resolve => {
    require.ensure(
        ['./ui-dashboard-angka-meta'],
        () => {
            resolve(require('./ui-dashboard-angka-meta'))
        }, 'ui-dashboard-angka-meta'
    )
}

const UiDashboardGrafikMeta = resolve => {
    require.ensure(
        ['./ui-dashboard-grafik-meta'],
        () => {
            resolve(require('./ui-dashboard-grafik-meta'))
        }, 'ui-dashboard-grafik-meta'
    )
}

const UiDashboardGrafikChart = resolve => {
    require.ensure(
        ['./ui-dashboard-grafik-chart'],
        () => {
            resolve(require('./ui-dashboard-grafik-chart'))
        }, 'ui-dashboard-grafik-chart'
    )
}


Vue.component("ui-dashboard-grafik-meta", UiDashboardGrafikMeta)
Vue.component("ui-dashboard-grafik-chart", UiDashboardGrafikChart)
Vue.component("ui-dashboard-angka-card", UiDashboardAngkaCard)
Vue.component("ui-dashboard-angka-meta", UiDashboardAngkaMeta)
