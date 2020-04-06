require('./ui')

import Vue from "vue"

const MonitoringEvaluasiAngka = resolve => {
    require.ensure(
        ['./monitoring-evaluasi-angka'],
        () => {
            resolve(require('./monitoring-evaluasi-angka'))
        }, 'monitoring-evaluasi-angka'
    )
}
const MonitoringEvaluasiMaster = resolve => {
    require.ensure(
        ['./monitoring-evaluasi-master'],
        () => {
            resolve(require('./monitoring-evaluasi-master'))
        }, 'monitoring-evaluasi-master'
    )
}
const MonitoringEvaluasiEdit = resolve => {
    require.ensure(
        ['./monitoring-evaluasi-edit'],
        () => {
            resolve(require('./monitoring-evaluasi-edit'))
        }, 'monitoring-evaluasi-edit'
    )
}
const MonitoringEvaluasiRemedialMaster = resolve => {
    require.ensure(
        ['./monitoring-evaluasi-remedial-master'],
        () => {
            resolve(require('./monitoring-evaluasi-remedial-master'))
        }, 'monitoring-evaluasi-remedial-master'
    )
}
Vue.component("monitoring-evaluasi-remedial-master", MonitoringEvaluasiRemedialMaster)
Vue.component("monitoring-evaluasi-edit", MonitoringEvaluasiEdit)
Vue.component("monitoring-evaluasi-master", MonitoringEvaluasiMaster)
Vue.component("monitoring-evaluasi-angka", MonitoringEvaluasiAngka)
