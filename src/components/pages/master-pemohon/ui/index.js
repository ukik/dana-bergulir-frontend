import Vue from "vue"

const UiMasterPemohonMeta = resolve => {
    require.ensure(
        ['./ui-master-pemohon-meta'],
        () => {
            resolve(require('./ui-master-pemohon-meta'))
        }, 'ui-master-pemohon-meta'
    )
}

const UiMasterPemohonContentMaster = resolve => {
    require.ensure(
        ['./ui-master-pemohon-content-master'],
        () => {
            resolve(require('./ui-master-pemohon-content-master'))
        }, 'ui-master-pemohon-content-master'
    )
}

const UiMasterPemohonContentTambah = resolve => {
    require.ensure(
        ['./ui-master-pemohon-content-tambah'],
        () => {
            resolve(require('./ui-master-pemohon-content-tambah'))
        }, 'ui-master-pemohon-content-tambah'
    )
}

const UiMasterPemohonContentEdit = resolve => {
    require.ensure(
        ['./ui-master-pemohon-content-edit'],
        () => {
            resolve(require('./ui-master-pemohon-content-edit'))
        }, 'ui-master-pemohon-content-edit'
    )
}

Vue.component("ui-master-pemohon-meta", UiMasterPemohonMeta)
Vue.component("ui-master-pemohon-content-master", UiMasterPemohonContentMaster)
Vue.component("ui-master-pemohon-content-tambah", UiMasterPemohonContentTambah)
Vue.component("ui-master-pemohon-content-edit", UiMasterPemohonContentEdit)
