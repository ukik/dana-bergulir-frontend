// import sharedMutations from 'vuex-shared-mutations';

const {
    proposal_tahap
} = require("@/store/namespaces");

const {
	getters_proposal_tahap,
	mutation_proposal_tahap,
	dispatch_proposal_tahap,
} = proposal_tahap

const state = {
	database: {
    step_1: false,
    step_2: false,
    step_3: false,
    step_4: false,
    step_5: false,
  },
};

const getters = {
		[getters_proposal_tahap]: (state) => {
      // jika return false, maka tombol Finish di step proposal tidak lulus
      for (var i in state.database) {
        if (object.hasOwnProperty(i)) {
          if(!i){
            return false
          }
        }
      }
      return true
		},
};

const mutations = {
		[mutation_proposal_tahap]: (state, data) => {
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
		[dispatch_proposal_tahap]: ({
				commit
		}, payload) => {
			commit(mutation_proposal_tahap, payload);
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
