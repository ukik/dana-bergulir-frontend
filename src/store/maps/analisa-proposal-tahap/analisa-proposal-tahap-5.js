const {
    mapActions,
		mapMutations,
    mapGetters
} = require('vuex')

const {
    analisa_proposal_tahap_5
} = require("@/store/namespaces");

const {
	getters_analisa_proposal_tahap_5,
	getters_analisa_proposal_tahap_5_edit,

	mutation_analisa_proposal_tahap_5,
  mutation_analisa_proposal_tahap_5_add_payload_items,
  mutation_analisa_proposal_tahap_5_edit_payload_items,
	mutation_analisa_proposal_tahap_5_delete_payload_items,

	dispatch_analisa_proposal_tahap_5,
  dispatch_analisa_proposal_tahap_5_add_payload_items,
  dispatch_analisa_proposal_tahap_5_edit_payload_items,
	dispatch_analisa_proposal_tahap_5_delete_payload_items,
} = analisa_proposal_tahap_5

const map_analisa_proposal_tahap_5 = {
    computed: {
        ...mapGetters({
					getters_analisa_proposal_tahap_5,
					getters_analisa_proposal_tahap_5_edit,
        }),
				...mapMutations({
					mutation_analisa_proposal_tahap_5,
				  mutation_analisa_proposal_tahap_5_add_payload_items,
				  mutation_analisa_proposal_tahap_5_edit_payload_items,
					mutation_analisa_proposal_tahap_5_delete_payload_items,
        }),
    },
    methods: {
        ...mapActions({
					dispatch_analisa_proposal_tahap_5,
				  dispatch_analisa_proposal_tahap_5_add_payload_items,
				  dispatch_analisa_proposal_tahap_5_edit_payload_items,
					dispatch_analisa_proposal_tahap_5_delete_payload_items,
        }),
    },
}

export default map_analisa_proposal_tahap_5
