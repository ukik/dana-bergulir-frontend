import Vue from "vue"

const PagePenagihan = resolve => {
    require.ensure(
        ['./page-penagihan'],
        () => {
            resolve(require('./page-penagihan'))
        }, 'page-penagihan'
    )
}
const PagePenagihanJatuhTemponMaster = resolve => {
    require.ensure(
        ['./page-penagihan-jatuh-tempo-master'],
        () => {
            resolve(require('./page-penagihan-jatuh-tempo-master'))
        }, 'page-penagihan-jatuh-tempo-master'
    )
}
const PagePenagihanPembayaranAngsuran = resolve => {
    require.ensure(
        ['./page-penagihan-pembayaran-angsuran'],
        () => {
            resolve(require('./page-penagihan-pembayaran-angsuran'))
        }, 'page-penagihan-pembayaran-angsuran'
    )
}
const PagePenagihanPiutangDetail = resolve => {
    require.ensure(
        ['./page-penagihan-piutang-detail'],
        () => {
            resolve(require('./page-penagihan-piutang-detail'))
        }, 'page-penagihan-piutang-detail'
    )
}
const PagePenagihanPiutangMaster = resolve => {
    require.ensure(
        ['./page-penagihan-piutang-master'],
        () => {
            resolve(require('./page-penagihan-piutang-master'))
        }, 'page-penagihan-piutang-master'
    )
}
Vue.component("page-penagihan", PagePenagihan)
Vue.component("page-penagihan-jatuh-tempo-master", PagePenagihanJatuhTemponMaster)
Vue.component("page-penagihan-pembayaran-angsuran", PagePenagihanPembayaranAngsuran)
Vue.component("page-penagihan-piutang-detail", PagePenagihanPiutangDetail)
Vue.component("page-penagihan-piutang-master", PagePenagihanPiutangMaster)
