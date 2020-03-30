// import sharedMutations from 'vuex-shared-mutations';

const {
    pemohon
} = require("@/store/namespaces");

const {
	getters_pemohon,
  getters_pemohon_edit,
  getters_pemohon_reference_options_provinsi,
  getters_pemohon_reference_options_kabupaten,
  getters_pemohon_reference_options_kecamatan,

	mutation_pemohon,
  mutation_pemohon_add_payload_items,
  mutation_pemohon_edit_payload_items,
  mutation_pemohon_delete_payload_items,
  mutation_pemohon_reference_options_provinsi,
  mutation_pemohon_reference_options_kabupaten,
  mutation_pemohon_reference_options_kecamatan,

	dispatch_pemohon,
  dispatch_pemohon_add_payload_items,
  dispatch_pemohon_edit_payload_items,
  dispatch_pemohon_delete_payload_items,
  dispatch_pemohon_reference_options_provinsi,
  dispatch_pemohon_reference_options_kabupaten,
  dispatch_pemohon_reference_options_kecamatan,

} = pemohon

import { database, database_add_edit } from '@/models/master-pemohon'

const state = {
	database: database,
  database_add_edit: database_add_edit,
};

const getters = {
		[getters_pemohon]: (state) => {
			return state.database
		},
    [getters_pemohon_reference_options_provinsi]: (state) => {
			return state.database_add_edit.reference.reference_options_provinsi
		},
    [getters_pemohon_reference_options_kabupaten]: (state) => {
			return state.database_add_edit.reference.reference_options_kabupaten
		},
    [getters_pemohon_reference_options_kecamatan]: (state) => {
			return state.database_add_edit.reference.reference_options_kecamatan
		},
    [getters_pemohon_edit]: (state) => (data) => {
      console.log(data, 'getters_pemohon_edit')
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
		[mutation_pemohon]: (state, data) => {
			return state.database = data
			// console.log(data)
		},
    [mutation_pemohon_reference_options_provinsi]: (state, data) => {
			return state.database_add_edit.reference.reference_options_provinsi = data
			// console.log(data)
		},
    [mutation_pemohon_reference_options_kabupaten]: (state, data) => {
			return state.database_add_edit.reference.reference_options_kabupaten = data
			// console.log(data)
		},
    [mutation_pemohon_reference_options_kecamatan]: (state, data) => {
			return state.database_add_edit.reference.reference_options_kecamatan = data
			// console.log(data)
		},
    [mutation_pemohon_edit_payload_items]: (state, data) => {
      let items = state.database.payload.payload_items
			// console.log(data)
      for (var i = 0; i < items.length; i++) {
        if(i == data.index) {
          state.database.payload.payload_items[i] = data.item
        }
      }
      return state.database
		},
    [mutation_pemohon_add_payload_items]: (state, data) => {
      // console.log(state.database.payload.payload_items, data.item)
      state.database.payload.payload_items.push(data.item)
      // console.log(state.database.payload.payload_items, data.item)
		},
    [mutation_pemohon_delete_payload_items]: (state, data) => {
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
		[dispatch_pemohon]: ({
				commit
		}, payload) => {
			commit(mutation_pemohon, payload);
		},
    [dispatch_pemohon_reference_options_provinsi]: ({
				commit
		}, payload) => {
			commit(mutation_pemohon_reference_options_provinsi, payload);
		},
    [dispatch_pemohon_reference_options_kabupaten]: ({
				commit
		}, payload) => {
			commit(mutation_pemohon_reference_options_kabupaten, payload);
		},
    [dispatch_pemohon_reference_options_kecamatan]: ({
				commit
		}, payload) => {
			commit(mutation_pemohon_reference_options_kecamatan, payload);
		},
    [dispatch_pemohon_edit_payload_items]: ({
				commit
		}, payload) => {
			commit(mutation_pemohon_edit_payload_items, payload);
		},
    [dispatch_pemohon_add_payload_items]: ({
				commit
		}, payload) => {
			commit(mutation_pemohon_add_payload_items, payload);
		},
    [dispatch_pemohon_delete_payload_items]: ({
				commit
		}, payload) => {
			commit(mutation_pemohon_delete_payload_items, payload);
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
