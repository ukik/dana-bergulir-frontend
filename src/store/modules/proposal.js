// import sharedMutations from 'vuex-shared-mutations';

const {
    proposal
} = require("@/store/namespaces");

const {
	getters_proposal,
  getters_proposal_edit,

	mutation_proposal,
  mutation_proposal_add_payload_items,
  mutation_proposal_edit_payload_items,
  mutation_proposal_delete_payload_items,

	dispatch_proposal,
  dispatch_proposal_add_payload_items,
  dispatch_proposal_edit_payload_items,
  dispatch_proposal_delete_payload_items,
} = proposal

import { database } from '@/models/proposal'

const state = {
	database: database,
};

const getters = {
		[getters_proposal]: (state) => {
			return state.database
		},
    [getters_proposal_edit]: (state) => (data) => {
      console.log(data, 'getters_proposal_edit')
      let items = state.database.payload.payload_items
			// console.log(data)
      for (var i = 0; i < items.length; i++) {
        if(i == data.index) {
          return state.database.payload.payload_items[i]
        }
      }
      return null
		},
};

const mutations = {
		[mutation_proposal]: (state, data) => {
			return state.database = data
			// console.log(data)
		},
    [mutation_proposal_edit_payload_items]: (state, data) => {
      let items = state.database.payload.payload_items
			// console.log(data)
      for (var i = 0; i < items.length; i++) {
        if(i == data.index) {
          state.database.payload.payload_items[i] = data.item
        }
      }
      return state.database
		},
    [mutation_proposal_add_payload_items]: (state, data) => {
      // console.log(state.database.payload.payload_items, data.item)
      state.database.payload.payload_items.push(data.item)
      // console.log(state.database.payload.payload_items, data.item)
		},
    [mutation_proposal_delete_payload_items]: (state, data) => {
      console.log(data.index)
      state.database.payload.payload_items.splice(data.index, 1)
		},
};

// const plugin = {
//     plugins: [sharedMutations({
//         predicate: [credentials, credentials_update, logout, user]
//     })],
// }

const actions = {
		[dispatch_proposal]: ({
				commit
		}, payload) => {
			commit(mutation_proposal, payload);
		},
    [dispatch_proposal_edit_payload_items]: ({
				commit
		}, payload) => {
			commit(mutation_proposal_edit_payload_items, payload);
		},
    [dispatch_proposal_add_payload_items]: ({
				commit
		}, payload) => {
			commit(mutation_proposal_add_payload_items, payload);
		},
    [dispatch_proposal_delete_payload_items]: ({
				commit
		}, payload) => {
			commit(mutation_proposal_delete_payload_items, payload);
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
