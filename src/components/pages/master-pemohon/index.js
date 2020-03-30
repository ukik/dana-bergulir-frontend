require('./ui')

import Vue from "vue"

const MasterPemohonMaster = resolve => {
    require.ensure(
        ['./master-pemohon-master'],
        () => {
            resolve(require('./master-pemohon-master'))
        }, 'master-pemohon-master'
    )
}

const MasterPemohonTambah = resolve => {
    require.ensure(
        ['./master-pemohon-tambah'],
        () => {
            resolve(require('./master-pemohon-tambah'))
        }, 'master-pemohon-tambah'
    )
}

const MasterPemohonEdit = resolve => {
    require.ensure(
        ['./master-pemohon-edit'],
        () => {
            resolve(require('./master-pemohon-edit'))
        }, 'master-pemohon-edit'
    )
}

Vue.component("master-pemohon-edit", MasterPemohonEdit)
Vue.component("master-pemohon-tambah", MasterPemohonTambah)
Vue.component("master-pemohon-master", MasterPemohonMaster)
