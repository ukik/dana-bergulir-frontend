// import sharedMutations from 'vuex-shared-mutations';

const {
    utilitas
} = require("@/store/namespaces");

const {
	getters_utilitas,
  getters_utilitas_edit,

	mutation_utilitas,
  mutation_utilitas_add_payload_items,
  mutation_utilitas_edit_payload_items,
  mutation_utilitas_delete_payload_items,

	dispatch_utilitas,
  dispatch_utilitas_add_payload_items,
  dispatch_utilitas_edit_payload_items,
  dispatch_utilitas_delete_payload_items,
} = utilitas

import { database } from '@/models/utilitas'

const state = {
	database: database,
};

const getters = {
		[getters_utilitas]: (state) => {
			return state.database
		},
    [getters_utilitas_edit]: (state) => (data) => {
      console.log(data, 'getters_utilitas_edit')
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
		[mutation_utilitas]: (state, data) => {
			return state.database = data
			// console.log(data)
		},
    [mutation_utilitas_edit_payload_items]: (state, data) => {
      let items = state.database.payload.payload_items
			// console.log(data)
      for (var i = 0; i < items.length; i++) {
        if(i == data.index) {
          state.database.payload.payload_items[i] = data.item
        }
      }
      return state.database
		},
    [mutation_utilitas_add_payload_items]: (state, data) => {
      // console.log(state.database.payload.payload_items, data.item)
      state.database.payload.payload_items.push(data.item)
      // console.log(state.database.payload.payload_items, data.item)
		},
    [mutation_utilitas_delete_payload_items]: (state, data) => {
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
		[dispatch_utilitas]: ({
				commit
		}, payload) => {
			commit(mutation_utilitas, payload);
		},
    [dispatch_utilitas_edit_payload_items]: ({
				commit
		}, payload) => {
			commit(mutation_utilitas_edit_payload_items, payload);
		},
    [dispatch_utilitas_add_payload_items]: ({
				commit
		}, payload) => {
			commit(mutation_utilitas_add_payload_items, payload);
		},
    [dispatch_utilitas_delete_payload_items]: ({
				commit
		}, payload) => {
			commit(mutation_utilitas_delete_payload_items, payload);
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
