import Vue from "vue"

const UiMonitoringEvaluasiMeta = resolve => {
    require.ensure(
        ['./ui-monitoring-evaluasi-meta'],
        () => {
            resolve(require('./ui-monitoring-evaluasi-meta'))
        }, 'ui-monitoring-evaluasi-meta'
    )
}
const UiMonitoringEvaluasiAngkaCard = resolve => {
    require.ensure(
        ['./ui-monitoring-evaluasi-angka-card'],
        () => {
            resolve(require('./ui-monitoring-evaluasi-angka-card'))
        }, 'ui-monitoring-evaluasi-angka-card'
    )
}

const UiMonitoringEvaluasiAngkaMeta = resolve => {
    require.ensure(
        ['./ui-monitoring-evaluasi-angka-meta'],
        () => {
            resolve(require('./ui-monitoring-evaluasi-angka-meta'))
        }, 'ui-monitoring-evaluasi-angka-meta'
    )
}
const UiMonitoringEvaluasiMasterContent = resolve => {
    require.ensure(
        ['./ui-monitoring-evaluasi-master-content'],
        () => {
            resolve(require('./ui-monitoring-evaluasi-master-content'))
        }, 'ui-monitoring-evaluasi-master-content'
    )
}
const UiMonitoringEvaluasiEditContent = resolve => {
    require.ensure(
        ['./ui-monitoring-evaluasi-edit-content'],
        () => {
            resolve(require('./ui-monitoring-evaluasi-edit-content'))
        }, 'ui-monitoring-evaluasi-edit-content'
    )
}
const UiMonitoringEvaluasiRemedialMasterContent = resolve => {
    require.ensure(
        ['./ui-monitoring-evaluasi-remedial-master-content'],
        () => {
            resolve(require('./ui-monitoring-evaluasi-remedial-master-content'))
        }, 'ui-monitoring-evaluasi-remedial-master-content'
    )
}
Vue.component("ui-monitoring-evaluasi-remedial-master-content", UiMonitoringEvaluasiRemedialMasterContent)
Vue.component("ui-monitoring-evaluasi-edit-content", UiMonitoringEvaluasiEditContent)
Vue.component("ui-monitoring-evaluasi-master-content", UiMonitoringEvaluasiMasterContent)
Vue.component("ui-monitoring-evaluasi-angka-card", UiMonitoringEvaluasiAngkaCard)
Vue.component("ui-monitoring-evaluasi-angka-meta", UiMonitoringEvaluasiAngkaMeta)
Vue.component("ui-monitoring-evaluasi-meta", UiMonitoringEvaluasiMeta)
