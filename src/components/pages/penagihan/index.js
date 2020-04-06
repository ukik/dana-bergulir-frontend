require('./ui')

import Vue from "vue"

const PenagihanAngka = resolve => {
    require.ensure(
        ['./penagihan-angka'],
        () => {
            resolve(require('./penagihan-angka'))
        }, 'penagihan-angka'
    )
}
const PenagihanTable = resolve => {
    require.ensure(
        ['./penagihan-table'],
        () => {
            resolve(require('./penagihan-table'))
        }, 'penagihan-table'
    )
}
const PenagihanJatuhTemponMaster = resolve => {
    require.ensure(
        ['./penagihan-jatuh-tempo-master'],
        () => {
            resolve(require('./penagihan-jatuh-tempo-master'))
        }, 'penagihan-jatuh-tempo-master'
    )
}

const PenagihanPembayaranAngsuran = resolve => {
    require.ensure(
        ['./penagihan-pembayaran-angsuran'],
        () => {
            resolve(require('./penagihan-pembayaran-angsuran'))
        }, 'penagihan-pembayaran-angsuran'
    )
}
const PenagihanPiutangDetail = resolve => {
    require.ensure(
        ['./penagihan-piutang-detail'],
        () => {
            resolve(require('./penagihan-piutang-detail'))
        }, 'penagihan-piutang-detail'
    )
}
const PenagihanPiutangMaster = resolve => {
    require.ensure(
        ['./penagihan-piutang-master'],
        () => {
            resolve(require('./penagihan-piutang-master'))
        }, 'penagihan-piutang-master'
    )
}
Vue.component("penagihan-angka", PenagihanAngka)
Vue.component("penagihan-table", PenagihanTable)
Vue.component("penagihan-jatuh-tempo-master", PenagihanJatuhTemponMaster)
Vue.component("penagihan-pembayaran-angsuran", PenagihanPembayaranAngsuran)
Vue.component("penagihan-piutang-detail", PenagihanPiutangDetail)
Vue.component("penagihan-piutang-master", PenagihanPiutangMaster)
