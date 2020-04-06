// import sharedMutations from 'vuex-shared-mutations';

const {
    analisa_proposal_tahap_3
} = require("@/store/namespaces");

const {
	getters_analisa_proposal_tahap_3,
	mutation_analisa_proposal_tahap_3,
	dispatch_analisa_proposal_tahap_3,
} = analisa_proposal_tahap_3

import {
    database
} from "@/models/analisa-proposal-tahap/analisa-proposal-tahap-3";

const state = {
    database: database,
};

const getters = {
		[getters_analisa_proposal_tahap_3]: (state) => {
			return state.database
		},
};

const mutations = {
		[mutation_analisa_proposal_tahap_3]: (state, data) => {
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
		[dispatch_analisa_proposal_tahap_3]: ({
				commit
		}, payload) => {
			commit(mutation_analisa_proposal_tahap_3, payload);
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
