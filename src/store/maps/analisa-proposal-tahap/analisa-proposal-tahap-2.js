const {
    mapActions,
		mapMutations,
    mapGetters
} = require('vuex')

const {
    analisa_proposal_tahap_2
} = require("@/store/namespaces");

const {
	getters_analisa_proposal_tahap_2,
	getters_analisa_proposal_tahap_2_edit,

	mutation_analisa_proposal_tahap_2,
  mutation_analisa_proposal_tahap_2_add_payload_items,
  mutation_analisa_proposal_tahap_2_edit_payload_items,
	mutation_analisa_proposal_tahap_2_delete_payload_items,

	dispatch_analisa_proposal_tahap_2,
  dispatch_analisa_proposal_tahap_2_add_payload_items,
  dispatch_analisa_proposal_tahap_2_edit_payload_items,
	dispatch_analisa_proposal_tahap_2_delete_payload_items,
} = analisa_proposal_tahap_2

const map_analisa_proposal_tahap_2 = {
    computed: {
        ...mapGetters({
					getters_analisa_proposal_tahap_2,
					getters_analisa_proposal_tahap_2_edit,
        }),
				...mapMutations({
					mutation_analisa_proposal_tahap_2,
				  mutation_analisa_proposal_tahap_2_add_payload_items,
				  mutation_analisa_proposal_tahap_2_edit_payload_items,
					mutation_analisa_proposal_tahap_2_delete_payload_items,
        }),
    },
    methods: {
        ...mapActions({
					dispatch_analisa_proposal_tahap_2,
				  dispatch_analisa_proposal_tahap_2_add_payload_items,
				  dispatch_analisa_proposal_tahap_2_edit_payload_items,
					dispatch_analisa_proposal_tahap_2_delete_payload_items,
        }),
    },
}

export default map_analisa_proposal_tahap_2
