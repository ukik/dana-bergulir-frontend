require('./ui')

import Vue from "vue"

const PenerimaPemohonMaster = resolve => {
    require.ensure(
        ['./penerima-pemohon-master'],
        () => {
            resolve(require('./penerima-pemohon-master'))
        }, 'penerima-pemohon-master'
    )
}

const PenerimaPemohonTambah = resolve => {
    require.ensure(
        ['./penerima-pemohon-tambah'],
        () => {
            resolve(require('./penerima-pemohon-tambah'))
        }, 'penerima-pemohon-tambah'
    )
}

const PenerimaPemohonEdit = resolve => {
    require.ensure(
        ['./penerima-pemohon-edit'],
        () => {
            resolve(require('./penerima-pemohon-edit'))
        }, 'penerima-pemohon-edit'
    )
}

Vue.component("penerima-pemohon-edit", PenerimaPemohonEdit)
Vue.component("penerima-pemohon-tambah", PenerimaPemohonTambah)
Vue.component("penerima-pemohon-master", PenerimaPemohonMaster)
