import Vue from "vue"

const UiAnalisaproposalMeta = resolve => {
    require.ensure(
        ['./ui-analisa-proposal-meta'],
        () => {
            resolve(require('./ui-analisa-proposal-meta'))
        }, 'ui-analisa-proposal-meta'
    )
}

const UiAnalisaproposalMasterContent = resolve => {
    require.ensure(
        ['./ui-analisa-proposal-master-content'],
        () => {
            resolve(require('./ui-analisa-proposal-master-content'))
        }, 'ui-analisa-proposal-master-content'
    )
}

const UiAnalisaProposalTahap1Content = resolve => {
    require.ensure(
        ['./ui-analisa-proposal-tahap-1-content'],
        () => {
            resolve(require('./ui-analisa-proposal-tahap-1-content'))
        }, 'ui-analisa-proposal-tahap-1-content'
    )
}
const UiAnalisaProposalTahap1ContentSingkronisasi = resolve => {
    require.ensure(
        ['./ui-analisa-proposal-tahap-1-content-singkronisasi'],
        () => {
            resolve(require('./ui-analisa-proposal-tahap-1-content-singkronisasi'))
        }, 'ui-analisa-proposal-tahap-1-content-singkronisasi'
    )
}

Vue.component("ui-analisa-proposal-tahap-1-content-singkronisasi", UiAnalisaProposalTahap1ContentSingkronisasi)
Vue.component("ui-analisa-proposal-tahap-1-content", UiAnalisaProposalTahap1Content)
Vue.component("ui-analisa-proposal-master-content", UiAnalisaproposalMasterContent)
Vue.component("ui-analisa-proposal-meta", UiAnalisaproposalMeta)
