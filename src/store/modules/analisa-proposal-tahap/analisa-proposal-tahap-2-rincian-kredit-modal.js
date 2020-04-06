// import sharedMutations from 'vuex-shared-mutations';

const {
    analisa_proposal_tahap_2_rincian_kredit_modal
} = require("@/store/namespaces");

const {
    getters_analisa_proposal_tahap_2_rincian_kredit_modal,
    mutation_analisa_proposal_tahap_2_rincian_kredit_modal,
    dispatch_analisa_proposal_tahap_2_rincian_kredit_modal,
} = analisa_proposal_tahap_2_rincian_kredit_modal

import {
  database
} from "@/models/analisa-proposal-tahap/analisa-proposal-tahap-2-rincian-kredit-modal";

const state = {
    database: database,
};

const getters = {
    [getters_analisa_proposal_tahap_2_rincian_kredit_modal]: (state) => {
        return state.database
    },
};

const mutations = {
    [mutation_analisa_proposal_tahap_2_rincian_kredit_modal]: (state, data) => {
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
    [dispatch_analisa_proposal_tahap_2_rincian_kredit_modal]: ({
        commit
    }, payload) => {
        commit(mutation_analisa_proposal_tahap_2_rincian_kredit_modal, payload);
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
