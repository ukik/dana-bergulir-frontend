require('./ui')

import Vue from "vue"

const RegisterSurveyMaster = resolve => {
    require.ensure(
        ['./register-survey-master'],
        () => {
            resolve(require('./register-survey-master'))
        }, 'register-survey-master'
    )
}
const RegisterSurveyTambah = resolve => {
    require.ensure(
        ['./register-survey-tambah'],
        () => {
            resolve(require('./register-survey-tambah'))
        }, 'register-survey-tambah'
    )
}
const RegisterSurveyEdit = resolve => {
    require.ensure(
        ['./register-survey-edit'],
        () => {
            resolve(require('./register-survey-edit'))
        }, 'register-survey-edit'
    )
}

Vue.component("register-survey-edit", RegisterSurveyEdit)
Vue.component("register-survey-tambah", RegisterSurveyTambah)
Vue.component("register-survey-master", RegisterSurveyMaster)
