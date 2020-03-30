import Vue from "vue"

const PageRegisterSurveyMaster = resolve => {
    require.ensure(
        ['./page-register-survey-master'],
        () => {
            resolve(require('./page-register-survey-master'))
        }, 'page-register-survey-master'
    )
}
const PageRegisterSurveyTambah = resolve => {
    require.ensure(
        ['./page-register-survey-tambah'],
        () => {
            resolve(require('./page-register-survey-tambah'))
        }, 'page-register-survey-tambah'
    )
}
const PageRegisterSurveyEdit = resolve => {
    require.ensure(
        ['./page-register-survey-edit'],
        () => {
            resolve(require('./page-register-survey-edit'))
        }, 'page-register-survey-edit'
    )
}

Vue.component("page-register-survey-edit", PageRegisterSurveyEdit)
Vue.component("page-register-survey-tambah", PageRegisterSurveyTambah)
Vue.component("page-register-survey-master", PageRegisterSurveyMaster)
