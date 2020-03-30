require('./ui')

import Vue from "vue"

const RegisterSurveyorMaster = resolve => {
    require.ensure(
        ['./register-surveyor-master'],
        () => {
            resolve(require('./register-surveyor-master'))
        }, 'register-surveyor-master'
    )
}
const RegisterSurveyorTambah = resolve => {
    require.ensure(
        ['./register-surveyor-tambah'],
        () => {
            resolve(require('./register-surveyor-tambah'))
        }, 'register-surveyor-tambah'
    )
}
const RegisterSurveyorEdit = resolve => {
    require.ensure(
        ['./register-surveyor-edit'],
        () => {
            resolve(require('./register-surveyor-edit'))
        }, 'register-surveyor-edit'
    )
}

Vue.component("register-surveyor-edit", RegisterSurveyorEdit)
Vue.component("register-surveyor-tambah", RegisterSurveyorTambah)
Vue.component("register-surveyor-master", RegisterSurveyorMaster)
