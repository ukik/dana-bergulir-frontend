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

const UiProposalTahap3ContentSusunanPemilikModal = resolve => {
    require.ensure(
        ['./ui-proposal-tahap-3-content-susun-pemilik-modal'],
        () => {
            resolve(require('./ui-proposal-tahap-3-content-susun-pemilik-modal'))
        }, 'ui-proposal-tahap-3-content-susun-pemilik-modal'
    )
}

const UiProposalTahap3ContentTenagaKerjaModal = resolve => {
    require.ensure(
        ['./ui-proposal-tahap-3-content-tenaga-kerja-modal'],
        () => {
            resolve(require('./ui-proposal-tahap-3-content-tenaga-kerja-modal'))
        }, 'ui-proposal-tahap-3-content-tenaga-kerja-modal'
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

const UiProposalTahap4ContentProdukDijualModal = resolve => {
    require.ensure(
        ['./ui-proposal-tahap-4-content-produk-dijual-modal'],
        () => {
            resolve(require('./ui-proposal-tahap-4-content-produk-dijual-modal'))
        }, 'ui-proposal-tahap-4-content-produk-dijual-modal'
    )
}

const UiProposalTahap4ContentKebutuhanBahanBakuModal = resolve => {
    require.ensure(
        ['./ui-proposal-tahap-4-content-kebutuhan-bahan-baku-modal'],
        () => {
            resolve(require('./ui-proposal-tahap-4-content-kebutuhan-bahan-baku-modal'))
        }, 'ui-proposal-tahap-4-content-kebutuhan-bahan-baku-modal'
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

const UiProposalTahap5ContentDataPinjamanModal = resolve => {
    require.ensure(
        ['./ui-proposal-tahap-5-content-data-pinjaman-modal'],
        () => {
            resolve(require('./ui-proposal-tahap-5-content-data-pinjaman-modal'))
        }, 'ui-proposal-tahap-5-content-data-pinjaman-modal'
    )
}

const UiProposalTahap5ContentAgunanModal = resolve => {
    require.ensure(
        ['./ui-proposal-tahap-5-content-agunan-modal'],
        () => {
            resolve(require('./ui-proposal-tahap-5-content-agunan-modal'))
        }, 'ui-proposal-tahap-5-content-agunan-modal'
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

const UiProposalTahap7Content = resolve => {
    require.ensure(
        ['./ui-proposal-tahap-7-content'],
        () => {
            resolve(require('./ui-proposal-tahap-7-content'))
        }, 'ui-proposal-tahap-7-content'
    )
}

Vue.component("ui-proposal-meta", UiProposalMeta)
Vue.component("ui-proposal-tahap-1-content", UiProposalTahap1Content)
Vue.component("ui-proposal-tahap-2-content", UiProposalTahap2Content)
Vue.component("ui-proposal-tahap-3-content", UiProposalTahap3Content)
Vue.component("ui-proposal-tahap-3-content-susun-pemilik-modal", UiProposalTahap3ContentSusunanPemilikModal)
Vue.component("ui-proposal-tahap-3-content-tenaga-kerja-modal", UiProposalTahap3ContentTenagaKerjaModal)

Vue.component("ui-proposal-tahap-4-content", UiProposalTahap4Content)
Vue.component("ui-proposal-tahap-4-content-produk-dijual-modal", UiProposalTahap4ContentProdukDijualModal)
Vue.component("ui-proposal-tahap-4-content-kebutuhan-bahan-baku-modal", UiProposalTahap4ContentKebutuhanBahanBakuModal)

Vue.component("ui-proposal-tahap-5-content", UiProposalTahap5Content)
Vue.component("ui-proposal-tahap-5-content-data-pinjaman-modal", UiProposalTahap5ContentDataPinjamanModal)
Vue.component("ui-proposal-tahap-5-content-agunan-modal", UiProposalTahap5ContentAgunanModal)

Vue.component("ui-proposal-tahap-6-content", UiProposalTahap6Content)
Vue.component("ui-proposal-tahap-6-content-pinjaman-modal", UiProposalTahap6ContentPinjamanModal)

Vue.component("ui-proposal-tahap-7-content", UiProposalTahap7Content)
