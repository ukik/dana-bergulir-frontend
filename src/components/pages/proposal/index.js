require('./ui')

import Vue from "vue"

const ProposalMaster = resolve => {
    require.ensure(
        ['./proposal-master'],
        () => {
            resolve(require('./proposal-master'))
        }, 'proposal-master'
    )
}
const ProposalDetail = resolve => {
    require.ensure(
        ['./proposal-detail'],
        () => {
            resolve(require('./proposal-detail'))
        }, 'proposal-detail'
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
Vue.component("proposal-detail", ProposalDetail)
Vue.component("proposal-master", ProposalMaster)
