require('./ui')

import Vue from "vue"

const ProposalTahap1 = resolve => {
    require.ensure(
        ['./proposal-tahap-1'],
        () => {
            resolve(require('./proposal-tahap-1'))
        }, 'proposal-tahap-1'
    )
}

const ProposalTahap2 = resolve => {
    require.ensure(
        ['./proposal-tahap-2'],
        () => {
            resolve(require('./proposal-tahap-2'))
        }, 'proposal-tahap-2'
    )
}

const ProposalTahap3 = resolve => {
    require.ensure(
        ['./proposal-tahap-3'],
        () => {
            resolve(require('./proposal-tahap-3'))
        }, 'proposal-tahap-3'
    )
}

const ProposalTahap4 = resolve => {
    require.ensure(
        ['./proposal-tahap-4'],
        () => {
            resolve(require('./proposal-tahap-4'))
        }, 'proposal-tahap-4'
    )
}

const ProposalTahap5 = resolve => {
    require.ensure(
        ['./proposal-tahap-5'],
        () => {
            resolve(require('./proposal-tahap-5'))
        }, 'proposal-tahap-5'
    )
}

const ProposalTahap6 = resolve => {
    require.ensure(
        ['./proposal-tahap-6'],
        () => {
            resolve(require('./proposal-tahap-6'))
        }, 'proposal-tahap-6'
    )
}
Vue.component("proposal-tahap-1", ProposalTahap1)
Vue.component("proposal-tahap-2", ProposalTahap2)
Vue.component("proposal-tahap-3", ProposalTahap3)
Vue.component("proposal-tahap-4", ProposalTahap4)
Vue.component("proposal-tahap-5", ProposalTahap5)
Vue.component("proposal-tahap-6", ProposalTahap6)
