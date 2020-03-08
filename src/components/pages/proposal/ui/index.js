import Vue from "vue"

const UiProposalMeta = resolve => {
    require.ensure(
        ['./ui-proposal-meta'],
        () => {
            resolve(require('./ui-proposal-meta'))
        }, 'ui-proposal-meta'
    )
}

const UiProposalTahap1Content = resolve => {
    require.ensure(
        ['./ui-proposal-tahap-1-content'],
        () => {
            resolve(require('./ui-proposal-tahap-1-content'))
        }, 'ui-proposal-tahap-1-content'
    )
}

const UiProposalTahap2Content = resolve => {
    require.ensure(
        ['./ui-proposal-tahap-2-content'],
        () => {
            resolve(require('./ui-proposal-tahap-2-content'))
        }, 'ui-proposal-tahap-2-content'
    )
}

const UiProposalTahap3Content = resolve => {
    require.ensure(
        ['./ui-proposal-tahap-3-content'],
        () => {
            resolve(require('./ui-proposal-tahap-3-content'))
        }, 'ui-proposal-tahap-3-content'
    )
}

const UiProposalTahap4Content = resolve => {
    require.ensure(
        ['./ui-proposal-tahap-4-content'],
        () => {
            resolve(require('./ui-proposal-tahap-4-content'))
        }, 'ui-proposal-tahap-4-content'
    )
}

const UiProposalTahap4ContentProdukSasaranModal = resolve => {
    require.ensure(
        ['./ui-proposal-tahap-4-content-produk-sasaran-modal'],
        () => {
            resolve(require('./ui-proposal-tahap-4-content-produk-sasaran-modal'))
        }, 'ui-proposal-tahap-4-content-produk-sasaran-modal'
    )
}

const UiProposalTahap4ContentPerkembanganPenjualanModal = resolve => {
    require.ensure(
        ['./ui-proposal-tahap-4-content-perkembangan-penjualan-modal'],
        () => {
            resolve(require('./ui-proposal-tahap-4-content-perkembangan-penjualan-modal'))
        }, 'ui-proposal-tahap-4-content-perkembangan-penjualan-modal'
    )
}

const UiProposalTahap5Content = resolve => {
    require.ensure(
        ['./ui-proposal-tahap-5-content'],
        () => {
            resolve(require('./ui-proposal-tahap-5-content'))
        }, 'ui-proposal-tahap-5-content'
    )
}

const UiProposalTahap6Content = resolve => {
    require.ensure(
        ['./ui-proposal-tahap-6-content'],
        () => {
            resolve(require('./ui-proposal-tahap-6-content'))
        }, 'ui-proposal-tahap-6-content'
    )
}

const UiProposalTahap6ContentPinjamanModal = resolve => {
    require.ensure(
        ['./ui-proposal-tahap-6-content-pinjaman-modal'],
        () => {
            resolve(require('./ui-proposal-tahap-6-content-pinjaman-modal'))
        }, 'ui-proposal-tahap-6-content-pinjaman-modal'
    )
}

Vue.component("ui-proposal-meta", UiProposalMeta)
Vue.component("ui-proposal-tahap-1-content", UiProposalTahap1Content)
Vue.component("ui-proposal-tahap-2-content", UiProposalTahap2Content)
Vue.component("ui-proposal-tahap-3-content", UiProposalTahap3Content)

Vue.component("ui-proposal-tahap-4-content", UiProposalTahap4Content)
Vue.component("ui-proposal-tahap-4-content-produk-sasaran-modal", UiProposalTahap4ContentProdukSasaranModal)
Vue.component("ui-proposal-tahap-4-content-perkembangan-penjualan-modal", UiProposalTahap4ContentPerkembanganPenjualanModal)

Vue.component("ui-proposal-tahap-5-content", UiProposalTahap5Content)
Vue.component("ui-proposal-tahap-6-content", UiProposalTahap6Content)
Vue.component("ui-proposal-tahap-6-content-pinjaman-modal", UiProposalTahap6ContentPinjamanModal)
