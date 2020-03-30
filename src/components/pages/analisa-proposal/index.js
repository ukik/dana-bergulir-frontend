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
// const ProposalorEdit = resolve => {
//     require.ensure(
//         ['./proposal-edit'],
//         () => {
//             resolve(require('./proposal-edit'))
//         }, 'proposal-edit'
//     )
// }

// Vue.component("proposal-edit", ProposalorEdit)
Vue.component("analisa-proposal-tahap-1", AnalisaProposalTahap1)
Vue.component("analisa-proposal-master", AnalisaProposalMaster)
