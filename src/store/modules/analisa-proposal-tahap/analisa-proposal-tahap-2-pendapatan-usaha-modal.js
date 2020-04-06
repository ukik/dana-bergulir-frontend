// import sharedMutations from 'vuex-shared-mutations';

const {
    analisa_proposal_tahap_2_pendapatan_usaha_modal
} = require("@/store/namespaces");

const {
    getters_analisa_proposal_tahap_2_pendapatan_usaha_modal,
    mutation_analisa_proposal_tahap_2_pendapatan_usaha_modal,
    dispatch_analisa_proposal_tahap_2_pendapatan_usaha_modal,
} = analisa_proposal_tahap_2_pendapatan_usaha_modal

import {
    database
} from "@/models/analisa-proposal-tahap/analisa-proposal-tahap-2-pendapatan-usaha-modal";

const state = {
    database: database,
};

const getters = {
    [getters_analisa_proposal_tahap_2_pendapatan_usaha_modal]: (state) => {
        return state.database
    },
};

const mutations = {
    [mutation_analisa_proposal_tahap_2_pendapatan_usaha_modal]: (state, data) => {
        return state.database = data
            // console.log(data)
    },
};

// const plugin = {
//     plugins: [sharedMutations({
//         predicate: [credentials, credentials_update, logout, user]
//     })],
// }

const actions = {
    [dispatch_analisa_proposal_tahap_2_pendapatan_usaha_modal]: ({
        commit
    }, payload) => {
        commit(mutation_analisa_proposal_tahap_2_pendapatan_usaha_modal, payload);
    },
};

// export this module.
export default {
    // plugin,
    state,
    mutations,
    getters,
    actions,
}
