const {
    mapActions,
		mapMutations,
    mapGetters
} = require('vuex')

const {
    analisa_proposal_tahap_1
} = require("@/store/namespaces");

const {
	getters_analisa_proposal_tahap_1,
	getters_analisa_proposal_tahap_1_edit,

	mutation_analisa_proposal_tahap_1,
  mutation_analisa_proposal_tahap_1_add_payload_items,
  mutation_analisa_proposal_tahap_1_edit_payload_items,
	mutation_analisa_proposal_tahap_1_delete_payload_items,

	dispatch_analisa_proposal_tahap_1,
  dispatch_analisa_proposal_tahap_1_add_payload_items,
  dispatch_analisa_proposal_tahap_1_edit_payload_items,
	dispatch_analisa_proposal_tahap_1_delete_payload_items,
} = analisa_proposal_tahap_1

const map_analisa_proposal_tahap_1 = {
    computed: {
        ...mapGetters({
					getters_analisa_proposal_tahap_1,
					getters_analisa_proposal_tahap_1_edit,
        }),
				...mapMutations({
					mutation_analisa_proposal_tahap_1,
				  mutation_analisa_proposal_tahap_1_add_payload_items,
				  mutation_analisa_proposal_tahap_1_edit_payload_items,
					mutation_analisa_proposal_tahap_1_delete_payload_items,
        }),
    },
    methods: {
        ...mapActions({
					dispatch_analisa_proposal_tahap_1,
				  dispatch_analisa_proposal_tahap_1_add_payload_items,
				  dispatch_analisa_proposal_tahap_1_edit_payload_items,
					dispatch_analisa_proposal_tahap_1_delete_payload_items,
        }),
    },
}

export default map_analisa_proposal_tahap_1
