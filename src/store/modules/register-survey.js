// import sharedMutations from 'vuex-shared-mutations';

const {
    survey
} = require("@/store/namespaces");

const {
	getters_survey,
  getters_survey_edit,

	mutation_survey,
  mutation_survey_add_payload_items,
  mutation_survey_edit_payload_items,
  mutation_survey_delete_payload_items,

	dispatch_survey,
  dispatch_survey_add_payload_items,
  dispatch_survey_edit_payload_items,
  dispatch_survey_delete_payload_items,
} = survey

import { database } from '@/models/register-survey'

const state = {
	database: database,
};

const getters = {
		[getters_survey]: (state) => {
			return state.database
		},
    [getters_survey_edit]: (state) => (data) => {
      console.log(data, 'getters_survey_edit')
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
		[mutation_survey]: (state, data) => {
			return state.database = data
			// console.log(data)
		},
    [mutation_survey_edit_payload_items]: (state, data) => {
      console.log('mutation_survey_edit_payload_items', data)
      let items = state.database.payload.payload_items
			// console.log(data)
      for (var i = 0; i < items.length; i++) {
        if(i == data.index) {
          state.database.payload.payload_items[i] = data.item
        }
      }
      return state.database
		},
    [mutation_survey_add_payload_items]: (state, data) => {
      // console.log(state.database.payload.payload_items, data.item)
      state.database.payload.payload_items.push(data.item)
      // console.log(state.database.payload.payload_items, data.item)
		},
    [mutation_survey_delete_payload_items]: (state, data) => {
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
		[dispatch_survey]: ({
				commit
		}, payload) => {
			commit(mutation_survey, payload);
		},
    [dispatch_survey_edit_payload_items]: ({
				commit
		}, payload) => {
			commit(mutation_survey_edit_payload_items, payload);
		},
    [dispatch_survey_add_payload_items]: ({
				commit
		}, payload) => {
			commit(mutation_survey_add_payload_items, payload);
		},
    [dispatch_survey_delete_payload_items]: ({
				commit
		}, payload) => {
			commit(mutation_survey_delete_payload_items, payload);
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
