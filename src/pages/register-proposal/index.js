import Vue from "vue"


const PageProposalTahap1 = resolve => {
    require.ensure(
        ['./page-proposal-tahap-1'],
        () => {
            resolve(require('./page-proposal-tahap-1'))
        }, 'page-proposal-tahap-1'
    )
}

const PageProposalTahap2 = resolve => {
    require.ensure(
        ['./page-proposal-tahap-2'],
        () => {
            resolve(require('./page-proposal-tahap-2'))
        }, 'page-proposal-tahap-2'
    )
}

const PageProposalTahap3 = resolve => {
    require.ensure(
        ['./page-proposal-tahap-3'],
        () => {
            resolve(require('./page-proposal-tahap-3'))
        }, 'page-proposal-tahap-3'
    )
}

const PageProposalTahap4 = resolve => {
    require.ensure(
        ['./page-proposal-tahap-4'],
        () => {
            resolve(require('./page-proposal-tahap-4'))
        }, 'page-proposal-tahap-4'
    )
}

const PageProposalTahap5 = resolve => {
    require.ensure(
        ['./page-proposal-tahap-5'],
        () => {
            resolve(require('./page-proposal-tahap-5'))
        }, 'page-proposal-tahap-5'
    )
}

const PageProposalTahap6 = resolve => {
    require.ensure(
        ['./page-proposal-tahap-6'],
        () => {
            resolve(require('./page-proposal-tahap-6'))
        }, 'page-proposal-tahap-6'
    )
}

const PageProposalTahap7 = resolve => {
    require.ensure(
        ['./page-proposal-tahap-7'],
        () => {
            resolve(require('./page-proposal-tahap-7'))
        }, 'page-proposal-tahap-7'
    )
}

Vue.component("page-proposal-tahap-1", PageProposalTahap1)
Vue.component("page-proposal-tahap-2", PageProposalTahap2)
Vue.component("page-proposal-tahap-3", PageProposalTahap3)
Vue.component("page-proposal-tahap-4", PageProposalTahap4)
Vue.component("page-proposal-tahap-5", PageProposalTahap5)
Vue.component("page-proposal-tahap-6", PageProposalTahap6)
Vue.component("page-proposal-tahap-7", PageProposalTahap7)
