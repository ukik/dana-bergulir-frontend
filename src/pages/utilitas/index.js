import Vue from "vue"

const PageUtilitasMaster = resolve => {
    require.ensure(
        ['./page-utilitas-master'],
        () => {
            resolve(require('./page-utilitas-master'))
        }, 'page-utilitas-master'
    )
}
const PageUtilitasTambah = resolve => {
    require.ensure(
        ['./page-utilitas-tambah'],
        () => {
            resolve(require('./page-utilitas-tambah'))
        }, 'page-utilitas-tambah'
    )
}
const PageUtilitasEdit = resolve => {
    require.ensure(
        ['./page-utilitas-edit'],
        () => {
            resolve(require('./page-utilitas-edit'))
        }, 'page-utilitas-edit'
    )
}

Vue.component("page-utilitas-edit", PageUtilitasEdit)
Vue.component("page-utilitas-tambah", PageUtilitasTambah)
Vue.component("page-utilitas-master", PageUtilitasMaster)
