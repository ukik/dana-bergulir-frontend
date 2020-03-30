// import sharedMutations from 'vuex-shared-mutations';

const {
    proposal_tahap_1
} = require("@/store/namespaces");

const {
	getters_proposal_tahap_1,
	mutation_proposal_tahap_1,
	dispatch_proposal_tahap_1,
} = proposal_tahap_1

const state = {
	database: null,
};

const getters = {
		[getters_proposal_tahap_1]: (state) => {
			return state.database
		},
};

const mutations = {
		[mutation_proposal_tahap_1]: (state, data) => {
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
		[dispatch_proposal_tahap_1]: ({
				commit
		}, payload) => {
			commit(mutation_proposal_tahap_1, payload);
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
