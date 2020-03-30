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
// const ProposalorEdit = resolve => {
//     require.ensure(
//         ['./proposal-edit'],
//         () => {
//             resolve(require('./proposal-edit'))
//         }, 'proposal-edit'
//     )
// }

// Vue.component("proposal-edit", ProposalorEdit)
Vue.component("page-analisa-proposal-tahap-1", PageAnalisaProposalTahap1)
Vue.component("page-analisa-proposal-master", PageAnalisaProposalMaster)
