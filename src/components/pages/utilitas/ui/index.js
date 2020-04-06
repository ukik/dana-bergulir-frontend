import Vue from "vue"

const UiUtilitasMeta = resolve => {
    require.ensure(
        ['./ui-utilitas-meta'],
        () => {
            resolve(require('./ui-utilitas-meta'))
        }, 'ui-utilitas-meta'
    )
}

const UiUtilitasContentMaster = resolve => {
    require.ensure(
        ['./ui-utilitas-content-master'],
        () => {
            resolve(require('./ui-utilitas-content-master'))
        }, 'ui-utilitas-content-master'
    )
}

const UiUtilitasContentTambah = resolve => {
    require.ensure(
        ['./ui-utilitas-content-tambah'],
        () => {
            resolve(require('./ui-utilitas-content-tambah'))
        }, 'ui-utilitas-content-tambah'
    )
}
const UiUtilitasContentEdit = resolve => {
    require.ensure(
        ['./ui-utilitas-content-edit'],
        () => {
            resolve(require('./ui-utilitas-content-edit'))
        }, 'ui-utilitas-content-edit'
    )
}

Vue.component("ui-utilitas-content-edit", UiUtilitasContentEdit)
Vue.component("ui-utilitas-content-tambah", UiUtilitasContentTambah)
Vue.component("ui-utilitas-meta", UiUtilitasMeta)
Vue.component("ui-utilitas-content-master", UiUtilitasContentMaster)
