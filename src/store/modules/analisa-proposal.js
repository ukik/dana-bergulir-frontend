// import sharedMutations from 'vuex-shared-mutations';

const {
    analisa_proposal
} = require("@/store/namespaces");

const {
	getters_analisa_proposal,
  getters_analisa_proposal_edit,

	mutation_analisa_proposal,
  mutation_analisa_proposal_add_payload_items,
  mutation_analisa_proposal_edit_payload_items,
  mutation_analisa_proposal_delete_payload_items,

	dispatch_analisa_proposal,
  dispatch_analisa_proposal_add_payload_items,
  dispatch_analisa_proposal_edit_payload_items,
  dispatch_analisa_proposal_delete_payload_items,
} = analisa_proposal

import { database } from '@/models/analisa-proposal'

const state = {
	database: database,
};

const getters = {
		[getters_analisa_proposal]: (state) => {
			return state.database
		},
    [getters_analisa_proposal_edit]: (state) => (data) => {
      console.log(data, 'getters_analisa_proposal_edit')
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
		[mutation_analisa_proposal]: (state, data) => {
			return state.database = data
			// console.log(data)
		},
    [mutation_analisa_proposal_edit_payload_items]: (state, data) => {
      let items = state.database.payload.payload_items
			// console.log(data)
      for (var i = 0; i < items.length; i++) {
        if(i == data.index) {
          state.database.payload.payload_items[i] = data.item
        }
      }
      return state.database
		},
    [mutation_analisa_proposal_add_payload_items]: (state, data) => {
      // console.log(state.database.payload.payload_items, data.item)
      state.database.payload.payload_items.push(data.item)
      // console.log(state.database.payload.payload_items, data.item)
		},
    [mutation_analisa_proposal_delete_payload_items]: (state, data) => {
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
		[dispatch_analisa_proposal]: ({
				commit
		}, payload) => {
			commit(mutation_analisa_proposal, payload);
		},
    [dispatch_analisa_proposal_edit_payload_items]: ({
				commit
		}, payload) => {
			commit(mutation_analisa_proposal_edit_payload_items, payload);
		},
    [dispatch_analisa_proposal_add_payload_items]: ({
				commit
		}, payload) => {
			commit(mutation_analisa_proposal_add_payload_items, payload);
		},
    [dispatch_analisa_proposal_delete_payload_items]: ({
				commit
		}, payload) => {
			commit(mutation_analisa_proposal_delete_payload_items, payload);
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
