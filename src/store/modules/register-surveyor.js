// import sharedMutations from 'vuex-shared-mutations';

const {
    surveyor
} = require("@/store/namespaces");

const {
	getters_surveyor,
  getters_surveyor_edit,

	mutation_surveyor,
  mutation_surveyor_add_payload_items,
  mutation_surveyor_edit_payload_items,
  mutation_surveyor_delete_payload_items,

	dispatch_surveyor,
  dispatch_surveyor_add_payload_items,
  dispatch_surveyor_edit_payload_items,
  dispatch_surveyor_delete_payload_items,
} = surveyor

import { database } from '@/models/register-surveyor'

const state = {
	database: database,
};

const getters = {
		[getters_surveyor]: (state) => {
			return state.database
		},
    [getters_surveyor_edit]: (state) => (data) => {
      console.log(data, 'getters_surveyor_edit')
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
		[mutation_surveyor]: (state, data) => {
			return state.database = data
			// console.log(data)
		},
    [mutation_surveyor_edit_payload_items]: (state, data) => {
      let items = state.database.payload.payload_items
			// console.log(data)
      for (var i = 0; i < items.length; i++) {
        if(i == data.index) {
          state.database.payload.payload_items[i] = data.item
        }
      }
      return state.database
		},
    [mutation_surveyor_add_payload_items]: (state, data) => {
      // console.log(state.database.payload.payload_items, data.item)
      state.database.payload.payload_items.push(data.item)
      // console.log(state.database.payload.payload_items, data.item)
		},
    [mutation_surveyor_delete_payload_items]: (state, data) => {
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
		[dispatch_surveyor]: ({
				commit
		}, payload) => {
			commit(mutation_surveyor, payload);
		},
    [dispatch_surveyor_edit_payload_items]: ({
				commit
		}, payload) => {
			commit(mutation_surveyor_edit_payload_items, payload);
		},
    [dispatch_surveyor_add_payload_items]: ({
				commit
		}, payload) => {
			commit(mutation_surveyor_add_payload_items, payload);
		},
    [dispatch_surveyor_delete_payload_items]: ({
				commit
		}, payload) => {
			commit(mutation_surveyor_delete_payload_items, payload);
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
