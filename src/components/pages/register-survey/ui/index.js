import Vue from "vue"

const UiRegisterSurveyMeta = resolve => {
    require.ensure(
        ['./ui-register-survey-meta'],
        () => {
            resolve(require('./ui-register-survey-meta'))
        }, 'ui-register-survey-meta'
    )
}
const UiRegisterSurveyAutocompleteSurveyor = resolve => {
    require.ensure(
        ['./ui-register-survey-autocomplete-surveyor'],
        () => {
            resolve(require('./ui-register-survey-autocomplete-surveyor'))
        }, 'ui-register-survey-autocomplete-surveyor'
    )
}
const UiRegisterSurveyAutocompleteProposal = resolve => {
    require.ensure(
        ['./ui-register-survey-autocomplete-proposal'],
        () => {
            resolve(require('./ui-register-survey-autocomplete-proposal'))
        }, 'ui-register-survey-autocomplete-proposal'
    )
}
const UiRegisterSurveyContentMaster = resolve => {
    require.ensure(
        ['./ui-register-survey-content-master'],
        () => {
            resolve(require('./ui-register-survey-content-master'))
        }, 'ui-register-survey-content-master'
    )
}
const UiRegisterSurveyContentTambah = resolve => {
    require.ensure(
        ['./ui-register-survey-content-tambah'],
        () => {
            resolve(require('./ui-register-survey-content-tambah'))
        }, 'ui-register-survey-content-tambah'
    )
}
const UiRegisterSurveyContentEdit = resolve => {
    require.ensure(
        ['./ui-register-survey-content-edit'],
        () => {
            resolve(require('./ui-register-survey-content-edit'))
        }, 'ui-register-survey-content-edit'
    )
}

Vue.component("ui-register-survey-content-edit", UiRegisterSurveyContentEdit)
Vue.component("ui-register-survey-content-tambah", UiRegisterSurveyContentTambah)
Vue.component("ui-register-survey-content-master", UiRegisterSurveyContentMaster)
Vue.component("ui-register-survey-autocomplete-surveyor", UiRegisterSurveyAutocompleteSurveyor)
Vue.component("ui-register-survey-autocomplete-proposal", UiRegisterSurveyAutocompleteProposal)
Vue.component("ui-register-survey-meta", UiRegisterSurveyMeta)
