// import sharedMutations from 'vuex-shared-mutations';

const {
    analisa_proposal_tahap_5
} = require("@/store/namespaces");

const {
	getters_analisa_proposal_tahap_5,
	mutation_analisa_proposal_tahap_5,
	dispatch_analisa_proposal_tahap_5,
} = analisa_proposal_tahap_5

const state = {
	database: null,
};

const getters = {
		[getters_analisa_proposal_tahap_5]: (state) => {
			return state.database
		},
};

const mutations = {
		[mutation_analisa_proposal_tahap_5]: (state, data) => {
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
		[dispatch_analisa_proposal_tahap_5]: ({
				commit
		}, payload) => {
			commit(mutation_analisa_proposal_tahap_5, payload);
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
