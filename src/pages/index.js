import Vue from "vue"

const PageDashboard = resolve => {
    require.ensure(
        ['./page-dashboard'],
        () => {
            resolve(require('./page-dashboard'))
        }, 'page-dashboard'
    )
}

const PagePenerimaPemohonMaster = resolve => {
    require.ensure(
        ['./page-penerima-pemohon-master'],
        () => {
            resolve(require('./page-penerima-pemohon-master'))
        }, 'page-penerima-pemohon-master'
    )
}

const PagePenerimaPemohonTambah = resolve => {
    require.ensure(
        ['./page-penerima-pemohon-tambah'],
        () => {
            resolve(require('./page-penerima-pemohon-tambah'))
        }, 'page-penerima-pemohon-tambah'
    )
}

const PagePenerimaPemohonEdit = resolve => {
    require.ensure(
        ['./page-penerima-pemohon-edit'],
        () => {
            resolve(require('./page-penerima-pemohon-edit'))
        }, 'page-penerima-pemohon-edit'
    )
}


const PageProposalTahap1 = resolve => {
    require.ensure(
        ['./page-proposal-tahap-1'],
        () => {
            resolve(require('./page-proposal-tahap-1'))
        }, 'page-proposal-tahap-1'
    )
}

const PageProposalTahap2 = resolve => {
    require.ensure(
        ['./page-proposal-tahap-2'],
        () => {
            resolve(require('./page-proposal-tahap-2'))
        }, 'page-proposal-tahap-2'
    )
}

const PageProposalTahap3 = resolve => {
    require.ensure(
        ['./page-proposal-tahap-3'],
        () => {
            resolve(require('./page-proposal-tahap-3'))
        }, 'page-proposal-tahap-3'
    )
}

const PageProposalTahap4 = resolve => {
    require.ensure(
        ['./page-proposal-tahap-4'],
        () => {
            resolve(require('./page-proposal-tahap-4'))
        }, 'page-proposal-tahap-4'
    )
}

const PageProposalTahap5 = resolve => {
    require.ensure(
        ['./page-proposal-tahap-5'],
        () => {
            resolve(require('./page-proposal-tahap-5'))
        }, 'page-proposal-tahap-5'
    )
}

const PageProposalTahap6 = resolve => {
    require.ensure(
        ['./page-proposal-tahap-6'],
        () => {
            resolve(require('./page-proposal-tahap-6'))
        }, 'page-proposal-tahap-6'
    )
}

Vue.component("page-dashboard", PageDashboard)
Vue.component("page-penerima-pemohon-tambah", PagePenerimaPemohonTambah)
Vue.component("page-penerima-pemohon-edit", PagePenerimaPemohonEdit)
Vue.component("page-penerima-pemohon-master", PagePenerimaPemohonMaster)
Vue.component("page-proposal-tahap-1", PageProposalTahap1)
Vue.component("page-proposal-tahap-2", PageProposalTahap2)
Vue.component("page-proposal-tahap-3", PageProposalTahap3)
Vue.component("page-proposal-tahap-4", PageProposalTahap4)
Vue.component("page-proposal-tahap-5", PageProposalTahap5)
Vue.component("page-proposal-tahap-6", PageProposalTahap6)
