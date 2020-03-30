import Vue from "vue"

const Radio = resolve => {
    require.ensure(
        ['./radio'],
        () => {
            resolve(require('./radio'))
        }, 'radio'
    )
}

Vue.component("radio", Radio)
