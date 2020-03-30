import Vue from "vue"

const UiProposalMeta = resolve => {
    require.ensure(
        ['./ui-proposal-meta'],
        () => {
            resolve(require('./ui-proposal-meta'))
        }, 'ui-proposal-meta'
    )
}

const UiProposalContentMaster = resolve => {
    require.ensure(
        ['./ui-proposal-content-master'],
        () => {
            resolve(require('./ui-proposal-content-master'))
        }, 'ui-proposal-content-master'
    )
}

const UiProposalContentDetail = resolve => {
    require.ensure(
        ['./ui-proposal-content-detail'],
        () => {
            resolve(require('./ui-proposal-content-detail'))
        }, 'ui-proposal-content-detail'
    )
}
// const UiProposalContentEdit = resolve => {
//     require.ensure(
//         ['./ui-proposal-content-edit'],
//         () => {
//             resolve(require('./ui-proposal-content-edit'))
//         }, 'ui-proposal-content-edit'
//     )
// }

// Vue.component("ui-proposal-content-edit", UiProposalContentEdit)
// Vue.component("ui-proposal-content-tambah", UiProposalContentTambah)
Vue.component("ui-proposal-meta", UiProposalMeta)
Vue.component("ui-proposal-content-master", UiProposalContentMaster)
Vue.component("ui-proposal-content-detail", UiProposalContentDetail)
