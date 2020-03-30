import Vue from "vue"


const PageMasterPemohonMaster = resolve => {
    require.ensure(
        ['./page-master-pemohon-master'],
        () => {
            resolve(require('./page-master-pemohon-master'))
        }, 'page-master-pemohon-master'
    )
}

const PageMasterPemohonTambah = resolve => {
    require.ensure(
        ['./page-master-pemohon-tambah'],
        () => {
            resolve(require('./page-master-pemohon-tambah'))
        }, 'page-master-pemohon-tambah'
    )
}

const PageMasterPemohonEdit = resolve => {
    require.ensure(
        ['./page-master-pemohon-edit'],
        () => {
            resolve(require('./page-master-pemohon-edit'))
        }, 'page-master-pemohon-edit'
    )
}

Vue.component("page-master-pemohon-tambah", PageMasterPemohonTambah)
Vue.component("page-master-pemohon-edit", PageMasterPemohonEdit)
Vue.component("page-master-pemohon-master", PageMasterPemohonMaster)
