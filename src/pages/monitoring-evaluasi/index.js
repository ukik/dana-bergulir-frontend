import Vue from "vue"

const PageMonitoringEvaluasi = resolve => {
    require.ensure(
        ['./page-monitoring-evaluasi'],
        () => {
            resolve(require('./page-monitoring-evaluasi'))
        }, 'page-monitoring-evaluasi'
    )
}
const PageMonitoringEvaluasiMaster = resolve => {
    require.ensure(
        ['./page-monitoring-evaluasi-master'],
        () => {
            resolve(require('./page-monitoring-evaluasi-master'))
        }, 'page-monitoring-evaluasi-master'
    )
}
const PageMonitoringEvaluasiEdit = resolve => {
    require.ensure(
        ['./page-monitoring-evaluasi-edit'],
        () => {
            resolve(require('./page-monitoring-evaluasi-edit'))
        }, 'page-monitoring-evaluasi-edit'
    )
}
const PageMonitoringEvaluasiRemedialMaster = resolve => {
    require.ensure(
        ['./page-monitoring-evaluasi-remedial-master'],
        () => {
            resolve(require('./page-monitoring-evaluasi-remedial-master'))
        }, 'page-monitoring-evaluasi-remedial-master'
    )
}
Vue.component("page-monitoring-evaluasi-remedial-master", PageMonitoringEvaluasiRemedialMaster)
Vue.component("page-monitoring-evaluasi-edit", PageMonitoringEvaluasiEdit)
Vue.component("page-monitoring-evaluasi-master", PageMonitoringEvaluasiMaster)
Vue.component("page-monitoring-evaluasi", PageMonitoringEvaluasi)
