import Vue from "vue"

const UiPenerimaPemohonMeta = resolve => {
    require.ensure(
        ['./ui-penerima-pemohon-meta'],
        () => {
            resolve(require('./ui-penerima-pemohon-meta'))
        }, 'ui-penerima-pemohon-meta'
    )
}

const UiPenerimaPemohonContentMaster = resolve => {
    require.ensure(
        ['./ui-penerima-pemohon-content-master'],
        () => {
            resolve(require('./ui-penerima-pemohon-content-master'))
        }, 'ui-penerima-pemohon-content-master'
    )
}

const UiPenerimaPemohonContentTambah = resolve => {
    require.ensure(
        ['./ui-penerima-pemohon-content-tambah'],
        () => {
            resolve(require('./ui-penerima-pemohon-content-tambah'))
        }, 'ui-penerima-pemohon-content-tambah'
    )
}

const UiPenerimaPemohonContentEdit = resolve => {
    require.ensure(
        ['./ui-penerima-pemohon-content-edit'],
        () => {
            resolve(require('./ui-penerima-pemohon-content-edit'))
        }, 'ui-penerima-pemohon-content-edit'
    )
}

Vue.component("ui-penerima-pemohon-meta", UiPenerimaPemohonMeta)
Vue.component("ui-penerima-pemohon-content-master", UiPenerimaPemohonContentMaster)
Vue.component("ui-penerima-pemohon-content-tambah", UiPenerimaPemohonContentTambah)
Vue.component("ui-penerima-pemohon-content-edit", UiPenerimaPemohonContentEdit)
