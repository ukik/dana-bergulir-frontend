// import sharedMutations from 'vuex-shared-mutations';

const {
    analisa_proposal_tahap_6
} = require("@/store/namespaces");

const {
	getters_analisa_proposal_tahap_6,
	mutation_analisa_proposal_tahap_6,
	dispatch_analisa_proposal_tahap_6,
} = analisa_proposal_tahap_6

const state = {
	database: null,
};

const getters = {
		[getters_analisa_proposal_tahap_6]: (state) => {
			return state.database
		},
};

const mutations = {
		[mutation_analisa_proposal_tahap_6]: (state, data) => {
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
		[dispatch_analisa_proposal_tahap_6]: ({
				commit
		}, payload) => {
			commit(mutation_analisa_proposal_tahap_6, payload);
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
