// import sharedMutations from 'vuex-shared-mutations';

const {
    penagihan_piutang
} = require("@/store/namespaces");

const {
	getters_penagihan_piutang,
  getters_penagihan_piutang_edit,

	mutation_penagihan_piutang,
  mutation_penagihan_piutang_add_payload_items,
  mutation_penagihan_piutang_edit_payload_items,
  mutation_penagihan_piutang_delete_payload_items,

	dispatch_penagihan_piutang,
  dispatch_penagihan_piutang_add_payload_items,
  dispatch_penagihan_piutang_edit_payload_items,
  dispatch_penagihan_piutang_delete_payload_items,
} = penagihan_piutang

import { database } from '@/models/penagihan-piutang'

const state = {
	database: database,
};

const getters = {
		[getters_penagihan_piutang]: (state) => {
			return state.database
		},
    [getters_penagihan_piutang_edit]: (state) => (data) => {
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
		[mutation_penagihan_piutang]: (state, data) => {
			return state.database = data
			// console.log(data)
		},
    [mutation_penagihan_piutang_edit_payload_items]: (state, data) => {
      let items = state.database.payload.payload_items
			// console.log(data)
      for (var i = 0; i < items.length; i++) {
        if(i == data.index) {
          state.database.payload.payload_items[i] = data.item
        }
      }
      return state.database
		},
    [mutation_penagihan_piutang_add_payload_items]: (state, data) => {
      // console.log(state.database.payload.payload_items, data.item)
      state.database.payload.payload_items.push(data.item)
      // console.log(state.database.payload.payload_items, data.item)
		},
    [mutation_penagihan_piutang_delete_payload_items]: (state, data) => {
      state.database.payload.payload_items.splice(data.index, 1)
		},
};

// const plugin = {
//     plugins: [sharedMutations({
//         predicate: [credentials, credentials_update, logout, user]
//     })],
// }

const actions = {
		[dispatch_penagihan_piutang]: ({
				commit
		}, payload) => {
			commit(mutation_penagihan_piutang, payload);
		},
    [dispatch_penagihan_piutang_edit_payload_items]: ({
				commit
		}, payload) => {
			commit(mutation_penagihan_piutang_edit_payload_items, payload);
		},
    [dispatch_penagihan_piutang_add_payload_items]: ({
				commit
		}, payload) => {
			commit(mutation_penagihan_piutang_add_payload_items, payload);
		},
    [dispatch_penagihan_piutang_delete_payload_items]: ({
				commit
		}, payload) => {
			commit(mutation_penagihan_piutang_delete_payload_items, payload);
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
