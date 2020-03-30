const {
    mapActions,
		mapMutations,
    mapGetters
} = require('vuex')

const {
    analisa_proposal_tahap_4
} = require("@/store/namespaces");

const {
	getters_analisa_proposal_tahap_4,
	getters_analisa_proposal_tahap_4_edit,

	mutation_analisa_proposal_tahap_4,
  mutation_analisa_proposal_tahap_4_add_payload_items,
  mutation_analisa_proposal_tahap_4_edit_payload_items,
	mutation_analisa_proposal_tahap_4_delete_payload_items,

	dispatch_analisa_proposal_tahap_4,
  dispatch_analisa_proposal_tahap_4_add_payload_items,
  dispatch_analisa_proposal_tahap_4_edit_payload_items,
	dispatch_analisa_proposal_tahap_4_delete_payload_items,
} = analisa_proposal_tahap_4

const map_analisa_proposal_tahap_4 = {
    computed: {
        ...mapGetters({
					getters_analisa_proposal_tahap_4,
					getters_analisa_proposal_tahap_4_edit,
        }),
				...mapMutations({
					mutation_analisa_proposal_tahap_4,
				  mutation_analisa_proposal_tahap_4_add_payload_items,
				  mutation_analisa_proposal_tahap_4_edit_payload_items,
					mutation_analisa_proposal_tahap_4_delete_payload_items,
        }),
    },
    methods: {
        ...mapActions({
					dispatch_analisa_proposal_tahap_4,
				  dispatch_analisa_proposal_tahap_4_add_payload_items,
				  dispatch_analisa_proposal_tahap_4_edit_payload_items,
					dispatch_analisa_proposal_tahap_4_delete_payload_items,
        }),
    },
}

export default map_analisa_proposal_tahap_4
