import Vue from "vue"

const LayoutMain = resolve => {
    require.ensure(
        ['./layout-main'],
        () => {
            resolve(require('./layout-main'))
        }, 'layout-main'
    )
}

Vue.component("layout-main", LayoutMain)
