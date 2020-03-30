// import sharedMutations from 'vuex-shared-mutations';

const {
    proposal_tahap_3
} = require("@/store/namespaces");

const {
	getters_proposal_tahap_3,
	mutation_proposal_tahap_3,
	dispatch_proposal_tahap_3,
} = proposal_tahap_3

const state = {
	database: null,
};

const getters = {
		[getters_proposal_tahap_3]: (state) => {
			return state.database
		},
};

const mutations = {
		[mutation_proposal_tahap_3]: (state, data) => {
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
		[dispatch_proposal_tahap_3]: ({
				commit
		}, payload) => {
			commit(mutation_proposal_tahap_3, payload);
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
