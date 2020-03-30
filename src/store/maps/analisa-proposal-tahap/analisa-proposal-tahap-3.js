const {
    mapActions,
		mapMutations,
    mapGetters
} = require('vuex')

const {
    analisa_proposal_tahap_3
} = require("@/store/namespaces");

const {
	getters_analisa_proposal_tahap_3,
	getters_analisa_proposal_tahap_3_edit,

	mutation_analisa_proposal_tahap_3,
  mutation_analisa_proposal_tahap_3_add_payload_items,
  mutation_analisa_proposal_tahap_3_edit_payload_items,
	mutation_analisa_proposal_tahap_3_delete_payload_items,

	dispatch_analisa_proposal_tahap_3,
  dispatch_analisa_proposal_tahap_3_add_payload_items,
  dispatch_analisa_proposal_tahap_3_edit_payload_items,
	dispatch_analisa_proposal_tahap_3_delete_payload_items,
} = analisa_proposal_tahap_3

const map_analisa_proposal_tahap_3 = {
    computed: {
        ...mapGetters({
					getters_analisa_proposal_tahap_3,
					getters_analisa_proposal_tahap_3_edit,
        }),
				...mapMutations({
					mutation_analisa_proposal_tahap_3,
				  mutation_analisa_proposal_tahap_3_add_payload_items,
				  mutation_analisa_proposal_tahap_3_edit_payload_items,
					mutation_analisa_proposal_tahap_3_delete_payload_items,
        }),
    },
    methods: {
        ...mapActions({
					dispatch_analisa_proposal_tahap_3,
				  dispatch_analisa_proposal_tahap_3_add_payload_items,
				  dispatch_analisa_proposal_tahap_3_edit_payload_items,
					dispatch_analisa_proposal_tahap_3_delete_payload_items,
        }),
    },
}

export default map_analisa_proposal_tahap_3
