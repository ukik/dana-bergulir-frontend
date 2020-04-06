require('./ui')

import Vue from "vue"

const AnalisaProposalMaster = resolve => {
    require.ensure(
        ['./analisa-proposal-master'],
        () => {
            resolve(require('./analisa-proposal-master'))
        }, 'analisa-proposal-master'
    )
}
const AnalisaProposalTahap1 = resolve => {
    require.ensure(
        ['./analisa-proposal-tahap-1'],
        () => {
            resolve(require('./analisa-proposal-tahap-1'))
        }, 'analisa-proposal-tahap-1'
    )
}
const AnalisaProposalTahap2 = resolve => {
    require.ensure(
        ['./analisa-proposal-tahap-2'],
        () => {
            resolve(require('./analisa-proposal-tahap-2'))
        }, 'analisa-proposal-tahap-2'
    )
}
const AnalisaProposalTahap3 = resolve => {
    require.ensure(
        ['./analisa-proposal-tahap-3'],
        () => {
            resolve(require('./analisa-proposal-tahap-3'))
        }, 'analisa-proposal-tahap-3'
    )
}
const AnalisaProposalTahap4 = resolve => {
    require.ensure(
        ['./analisa-proposal-tahap-4'],
        () => {
            resolve(require('./analisa-proposal-tahap-4'))
        }, 'analisa-proposal-tahap-4'
    )
}
const AnalisaProposalTahap5 = resolve => {
    require.ensure(
        ['./analisa-proposal-tahap-5'],
        () => {
            resolve(require('./analisa-proposal-tahap-5'))
        }, 'analisa-proposal-tahap-5'
    )
}
const AnalisaProposalTahap6 = resolve => {
    require.ensure(
        ['./analisa-proposal-tahap-6'],
        () => {
            resolve(require('./analisa-proposal-tahap-6'))
        }, 'analisa-proposal-tahap-6'
    )
}

Vue.component("analisa-proposal-tahap-6", AnalisaProposalTahap6)
Vue.component("analisa-proposal-tahap-5", AnalisaProposalTahap5)
Vue.component("analisa-proposal-tahap-4", AnalisaProposalTahap4)
Vue.component("analisa-proposal-tahap-3", AnalisaProposalTahap3)
Vue.component("analisa-proposal-tahap-2", AnalisaProposalTahap2)
Vue.component("analisa-proposal-tahap-1", AnalisaProposalTahap1)
Vue.component("analisa-proposal-master", AnalisaProposalMaster)
