import Vue from "vue"

const PageProposalMaster = resolve => {
    require.ensure(
        ['./page-proposal-master'],
        () => {
            resolve(require('./page-proposal-master'))
        }, 'page-proposal-master'
    )
}
const PageProposalDetail = resolve => {
    require.ensure(
        ['./page-proposal-detail'],
        () => {
            resolve(require('./page-proposal-detail'))
        }, 'page-proposal-detail'
    )
}
// const PageProposalEdit = resolve => {
//     require.ensure(
//         ['./page-proposal-edit'],
//         () => {
//             resolve(require('./page-proposal-edit'))
//         }, 'page-proposal-edit'
//     )
// }

// Vue.component("page-proposal-edit", PageProposalEdit)
Vue.component("page-proposal-detail", PageProposalDetail)
Vue.component("page-proposal-master", PageProposalMaster)
