import Vue from "vue"

const PageAnalisaProposalMaster = resolve => {
    require.ensure(
        ['./page-analisa-proposal-master'],
        () => {
            resolve(require('./page-analisa-proposal-master'))
        }, 'page-analisa-proposal-master'
    )
}
const PageAnalisaProposalTahap1 = resolve => {
    require.ensure(
        ['./page-analisa-proposal-tahap-1'],
        () => {
            resolve(require('./page-analisa-proposal-tahap-1'))
        }, 'page-analisa-proposal-tahap-1'
    )
}
const PageAnalisaProposalTahap2 = resolve => {
    require.ensure(
        ['./page-analisa-proposal-tahap-2'],
        () => {
            resolve(require('./page-analisa-proposal-tahap-2'))
        }, 'page-analisa-proposal-tahap-2'
    )
}
const PageAnalisaProposalTahap3 = resolve => {
    require.ensure(
        ['./page-analisa-proposal-tahap-3'],
        () => {
            resolve(require('./page-analisa-proposal-tahap-3'))
        }, 'page-analisa-proposal-tahap-3'
    )
}
const PageAnalisaProposalTahap4 = resolve => {
    require.ensure(
        ['./page-analisa-proposal-tahap-4'],
        () => {
            resolve(require('./page-analisa-proposal-tahap-4'))
        }, 'page-analisa-proposal-tahap-4'
    )
}
const PageAnalisaProposalTahap5 = resolve => {
    require.ensure(
        ['./page-analisa-proposal-tahap-5'],
        () => {
            resolve(require('./page-analisa-proposal-tahap-5'))
        }, 'page-analisa-proposal-tahap-5'
    )
}
const PageAnalisaProposalTahap6 = resolve => {
    require.ensure(
        ['./page-analisa-proposal-tahap-6'],
        () => {
            resolve(require('./page-analisa-proposal-tahap-6'))
        }, 'page-analisa-proposal-tahap-6'
    )
}

Vue.component("page-analisa-proposal-tahap-6", PageAnalisaProposalTahap6)
Vue.component("page-analisa-proposal-tahap-5", PageAnalisaProposalTahap5)
Vue.component("page-analisa-proposal-tahap-4", PageAnalisaProposalTahap4)
Vue.component("page-analisa-proposal-tahap-3", PageAnalisaProposalTahap3)
Vue.component("page-analisa-proposal-tahap-2", PageAnalisaProposalTahap2)
Vue.component("page-analisa-proposal-tahap-1", PageAnalisaProposalTahap1)
Vue.component("page-analisa-proposal-master", PageAnalisaProposalMaster)
