const {
    mapActions,
		mapMutations,
    mapGetters
} = require('vuex')

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

const map_survey = {
    computed: {
        ...mapGetters({
					getters_survey,
					getters_survey_edit,
        }),
				...mapMutations({
					mutation_survey,
				  mutation_survey_add_payload_items,
				  mutation_survey_edit_payload_items,
					mutation_survey_delete_payload_items,
        }),
    },
    methods: {
        ...mapActions({
					dispatch_survey,
				  dispatch_survey_add_payload_items,
				  dispatch_survey_edit_payload_items,
					dispatch_survey_delete_payload_items,
        }),
    },
}

export default map_survey
