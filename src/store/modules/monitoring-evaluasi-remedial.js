// import sharedMutations from 'vuex-shared-mutations';

const {
    monitoring_evaluasi_remedial
} = require("@/store/namespaces");

const {
	getters_monitoring_evaluasi_remedial,
  getters_monitoring_evaluasi_remedial_edit,

	mutation_monitoring_evaluasi_remedial,
  mutation_monitoring_evaluasi_remedial_add_payload_items,
  mutation_monitoring_evaluasi_remedial_edit_payload_items,
  mutation_monitoring_evaluasi_remedial_delete_payload_items,

	dispatch_monitoring_evaluasi_remedial,
  dispatch_monitoring_evaluasi_remedial_add_payload_items,
  dispatch_monitoring_evaluasi_remedial_edit_payload_items,
  dispatch_monitoring_evaluasi_remedial_delete_payload_items,
} = monitoring_evaluasi_remedial

import { database } from '@/models/monitoring-evaluasi'

const state = {
	database: database,
};

const getters = {
		[getters_monitoring_evaluasi_remedial]: (state) => {
			return state.database
		},
    [getters_monitoring_evaluasi_remedial_edit]: (state) => (data) => {
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
		[mutation_monitoring_evaluasi_remedial]: (state, data) => {
			return state.database = data
			// console.log(data)
		},
    [mutation_monitoring_evaluasi_remedial_edit_payload_items]: (state, data) => {
      let items = state.database.payload.payload_items
			// console.log(data)
      for (var i = 0; i < items.length; i++) {
        if(i == data.index) {
          state.database.payload.payload_items[i] = data.item
        }
      }
      return state.database
		},
    [mutation_monitoring_evaluasi_remedial_add_payload_items]: (state, data) => {
      // console.log(state.database.payload.payload_items, data.item)
      state.database.payload.payload_items.push(data.item)
      // console.log(state.database.payload.payload_items, data.item)
		},
    [mutation_monitoring_evaluasi_remedial_delete_payload_items]: (state, data) => {
      state.database.payload.payload_items.splice(data.index, 1)
		},
};

// const plugin = {
//     plugins: [sharedMutations({
//         predicate: [credentials, credentials_update, logout, user]
//     })],
// }

const actions = {
		[dispatch_monitoring_evaluasi_remedial]: ({
				commit
		}, payload) => {
			commit(mutation_monitoring_evaluasi_remedial, payload);
		},
    [dispatch_monitoring_evaluasi_remedial_edit_payload_items]: ({
				commit
		}, payload) => {
			commit(mutation_monitoring_evaluasi_remedial_edit_payload_items, payload);
		},
    [dispatch_monitoring_evaluasi_remedial_add_payload_items]: ({
				commit
		}, payload) => {
			commit(mutation_monitoring_evaluasi_remedial_add_payload_items, payload);
		},
    [dispatch_monitoring_evaluasi_remedial_delete_payload_items]: ({
				commit
		}, payload) => {
			commit(mutation_monitoring_evaluasi_remedial_delete_payload_items, payload);
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
