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
const UiAnalisaProposalTahap2Content = resolve => {
    require.ensure(
        ['./ui-analisa-proposal-tahap-2-content'],
        () => {
            resolve(require('./ui-analisa-proposal-tahap-2-content'))
        }, 'ui-analisa-proposal-tahap-2-content'
    )
}
const UiAnalisaProposalTahap3Content = resolve => {
    require.ensure(
        ['./ui-analisa-proposal-tahap-3-content'],
        () => {
            resolve(require('./ui-analisa-proposal-tahap-3-content'))
        }, 'ui-analisa-proposal-tahap-3-content'
    )
}
const UiAnalisaProposalTahap4Content = resolve => {
    require.ensure(
        ['./ui-analisa-proposal-tahap-4-content'],
        () => {
            resolve(require('./ui-analisa-proposal-tahap-4-content'))
        }, 'ui-analisa-proposal-tahap-4-content'
    )
}
const UiAnalisaProposalTahap5Content = resolve => {
    require.ensure(
        ['./ui-analisa-proposal-tahap-5-content'],
        () => {
            resolve(require('./ui-analisa-proposal-tahap-5-content'))
        }, 'ui-analisa-proposal-tahap-5-content'
    )
}
const UiAnalisaProposalTahap6Content = resolve => {
    require.ensure(
        ['./ui-analisa-proposal-tahap-6-content'],
        () => {
            resolve(require('./ui-analisa-proposal-tahap-6-content'))
        }, 'ui-analisa-proposal-tahap-6-content'
    )
}
const UiAnalisaProposalTahap2ContentPendapatanUsahaModal = resolve => {
    require.ensure(
        ['./ui-analisa-proposal-tahap-2-content-pendapatan-usaha-modal'],
        () => {
            resolve(require('./ui-analisa-proposal-tahap-2-content-pendapatan-usaha-modal'))
        }, 'ui-analisa-proposal-tahap-2-content-pendapatan-usaha-modal'
    )
}
const UiAnalisaProposalTahap2ContentRincianKreditModal = resolve => {
    require.ensure(
        ['./ui-analisa-proposal-tahap-2-content-rincian-kredit-modal'],
        () => {
            resolve(require('./ui-analisa-proposal-tahap-2-content-rincian-kredit-modal'))
        }, 'ui-analisa-proposal-tahap-2-content-rincian-kredit-modal'
    )
}
Vue.component("ui-analisa-proposal-tahap-2-content-rincian-kredit-modal", UiAnalisaProposalTahap2ContentRincianKreditModal)
Vue.component("ui-analisa-proposal-tahap-2-content-pendapatan-usaha-modal", UiAnalisaProposalTahap2ContentPendapatanUsahaModal)
Vue.component("ui-analisa-proposal-tahap-6-content", UiAnalisaProposalTahap6Content)
Vue.component("ui-analisa-proposal-tahap-5-content", UiAnalisaProposalTahap5Content)
Vue.component("ui-analisa-proposal-tahap-4-content", UiAnalisaProposalTahap4Content)
Vue.component("ui-analisa-proposal-tahap-3-content", UiAnalisaProposalTahap3Content)
Vue.component("ui-analisa-proposal-tahap-2-content", UiAnalisaProposalTahap2Content)
Vue.component("ui-analisa-proposal-tahap-1-content", UiAnalisaProposalTahap1Content)
Vue.component("ui-analisa-proposal-master-content", UiAnalisaproposalMasterContent)
Vue.component("ui-analisa-proposal-meta", UiAnalisaproposalMeta)
