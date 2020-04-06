require('./ui')

import Vue from "vue"

const UtilitasMaster = resolve => {
    require.ensure(
        ['./utilitas-master'],
        () => {
            resolve(require('./utilitas-master'))
        }, 'utilitas-master'
    )
}
const UtilitasTambah = resolve => {
    require.ensure(
        ['./utilitas-tambah'],
        () => {
            resolve(require('./utilitas-tambah'))
        }, 'utilitas-tambah'
    )
}
const UtilitasEdit = resolve => {
    require.ensure(
        ['./utilitas-edit'],
        () => {
            resolve(require('./utilitas-edit'))
        }, 'utilitas-edit'
    )
}

Vue.component("utilitas-edit", UtilitasEdit)
Vue.component("utilitas-tambah", UtilitasTambah)
Vue.component("utilitas-master", UtilitasMaster)
