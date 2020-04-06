import Vue from "vue"

const UiPenagihanMeta = resolve => {
    require.ensure(
        ['./ui-penagihan-meta'],
        () => {
            resolve(require('./ui-penagihan-meta'))
        }, 'ui-penagihan-meta'
    )
}
const UiPenagihanTableMeta = resolve => {
    require.ensure(
        ['./ui-penagihan-table-meta'],
        () => {
            resolve(require('./ui-penagihan-table-meta'))
        }, 'ui-penagihan-table-meta'
    )
}
const UiPenagihanTable = resolve => {
    require.ensure(
        ['./ui-penagihan-table'],
        () => {
            resolve(require('./ui-penagihan-table'))
        }, 'ui-penagihan-table'
    )
}

const UiPenagihanAngkaCard = resolve => {
    require.ensure(
        ['./ui-penagihan-angka-card'],
        () => {
            resolve(require('./ui-penagihan-angka-card'))
        }, 'ui-penagihan-angka-card'
    )
}
const UiPenagihanAngkaMeta = resolve => {
    require.ensure(
        ['./ui-penagihan-angka-meta'],
        () => {
            resolve(require('./ui-penagihan-angka-meta'))
        }, 'ui-penagihan-angka-meta'
    )
}
const UiPenagihanJatuhTempoToolbar = resolve => {
    require.ensure(
        ['./ui-penagihan-jatuh-tempo-toolbar'],
        () => {
            resolve(require('./ui-penagihan-jatuh-tempo-toolbar'))
        }, 'ui-penagihan-jatuh-tempo-toolbar'
    )
}
const UiPenagihanPiutangToolbar = resolve => {
    require.ensure(
        ['./ui-penagihan-piutang-toolbar'],
        () => {
            resolve(require('./ui-penagihan-piutang-toolbar'))
        }, 'ui-penagihan-piutang-toolbar'
    )
}

const UiPenagihanJauthTempoMasterContent = resolve => {
    require.ensure(
        ['./ui-penagihan-jatuh-tempo-master-content'],
        () => {
            resolve(require('./ui-penagihan-jatuh-tempo-master-content'))
        }, 'ui-penagihan-jatuh-tempo-master-content'
    )
}
const UiPenagihanPembayaranAngsuranContent = resolve => {
    require.ensure(
        ['./ui-penagihan-pembayaran-angsuran-content'],
        () => {
            resolve(require('./ui-penagihan-pembayaran-angsuran-content'))
        }, 'ui-penagihan-pembayaran-angsuran-content'
    )
}
const UiPenagihanPiutangMasterContent = resolve => {
    require.ensure(
        ['./ui-penagihan-piutang-master-content'],
        () => {
            resolve(require('./ui-penagihan-piutang-master-content'))
        }, 'ui-penagihan-piutang-master-content'
    )
}
const UiPenagihanPiutangDetailContent = resolve => {
    require.ensure(
        ['./ui-penagihan-piutang-detail-content'],
        () => {
            resolve(require('./ui-penagihan-piutang-detail-content'))
        }, 'ui-penagihan-piutang-detail-content'
    )
}

Vue.component("ui-penagihan-meta", UiPenagihanMeta)
Vue.component("ui-penagihan-angka-card", UiPenagihanAngkaCard)
Vue.component("ui-penagihan-angka-meta", UiPenagihanAngkaMeta)
Vue.component("ui-penagihan-jatuh-tempo-toolbar", UiPenagihanJatuhTempoToolbar)
Vue.component("ui-penagihan-piutang-toolbar", UiPenagihanPiutangToolbar)
Vue.component("ui-penagihan-jatuh-tempo-master-content", UiPenagihanJauthTempoMasterContent)
Vue.component("ui-penagihan-pembayaran-angsuran-content", UiPenagihanPembayaranAngsuranContent)
Vue.component("ui-penagihan-piutang-master-content", UiPenagihanPiutangMasterContent)
Vue.component("ui-penagihan-piutang-detail-content", UiPenagihanPiutangDetailContent)
Vue.component("ui-penagihan-table", UiPenagihanTable)
Vue.component("ui-penagihan-table-meta", UiPenagihanTableMeta)
