import Vue from "vue"

const PageRegisterSurveyorMaster = resolve => {
    require.ensure(
        ['./page-register-surveyor-master'],
        () => {
            resolve(require('./page-register-surveyor-master'))
        }, 'page-register-surveyor-master'
    )
}
const PageRegisterSurveyorTambah = resolve => {
    require.ensure(
        ['./page-register-surveyor-tambah'],
        () => {
            resolve(require('./page-register-surveyor-tambah'))
        }, 'page-register-surveyor-tambah'
    )
}
const PageRegisterSurveyorEdit = resolve => {
    require.ensure(
        ['./page-register-surveyor-edit'],
        () => {
            resolve(require('./page-register-surveyor-edit'))
        }, 'page-register-surveyor-edit'
    )
}

Vue.component("page-register-surveyor-edit", PageRegisterSurveyorEdit)
Vue.component("page-register-surveyor-tambah", PageRegisterSurveyorTambah)
Vue.component("page-register-surveyor-master", PageRegisterSurveyorMaster)
