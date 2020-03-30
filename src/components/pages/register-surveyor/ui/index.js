import Vue from "vue"

const UiRegisterSurveyorMeta = resolve => {
    require.ensure(
        ['./ui-register-surveyor-meta'],
        () => {
            resolve(require('./ui-register-surveyor-meta'))
        }, 'ui-register-surveyor-meta'
    )
}

const UiRegisterSurveyorContentMaster = resolve => {
    require.ensure(
        ['./ui-register-surveyor-content-master'],
        () => {
            resolve(require('./ui-register-surveyor-content-master'))
        }, 'ui-register-surveyor-content-master'
    )
}

const UiRegisterSurveyorContentTambah = resolve => {
    require.ensure(
        ['./ui-register-surveyor-content-tambah'],
        () => {
            resolve(require('./ui-register-surveyor-content-tambah'))
        }, 'ui-register-surveyor-content-tambah'
    )
}
const UiRegisterSurveyorContentEdit = resolve => {
    require.ensure(
        ['./ui-register-surveyor-content-edit'],
        () => {
            resolve(require('./ui-register-surveyor-content-edit'))
        }, 'ui-register-surveyor-content-edit'
    )
}

Vue.component("ui-register-surveyor-content-edit", UiRegisterSurveyorContentEdit)
Vue.component("ui-register-surveyor-content-tambah", UiRegisterSurveyorContentTambah)
Vue.component("ui-register-surveyor-meta", UiRegisterSurveyorMeta)
Vue.component("ui-register-surveyor-content-master", UiRegisterSurveyorContentMaster)
