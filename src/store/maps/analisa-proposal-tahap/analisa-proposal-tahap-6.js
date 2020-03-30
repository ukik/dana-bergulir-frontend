const {
    mapActions,
		mapMutations,
    mapGetters
} = require('vuex')

const {
    analisa_proposal_tahap_6
} = require("@/store/namespaces");

const {
	getters_analisa_proposal_tahap_6,
	getters_analisa_proposal_tahap_6_edit,

	mutation_analisa_proposal_tahap_6,
  mutation_analisa_proposal_tahap_6_add_payload_items,
  mutation_analisa_proposal_tahap_6_edit_payload_items,
	mutation_analisa_proposal_tahap_6_delete_payload_items,

	dispatch_analisa_proposal_tahap_6,
  dispatch_analisa_proposal_tahap_6_add_payload_items,
  dispatch_analisa_proposal_tahap_6_edit_payload_items,
	dispatch_analisa_proposal_tahap_6_delete_payload_items,
} = analisa_proposal_tahap_6

const map_analisa_proposal_tahap_6 = {
    computed: {
        ...mapGetters({
					getters_analisa_proposal_tahap_6,
					getters_analisa_proposal_tahap_6_edit,
        }),
				...mapMutations({
					mutation_analisa_proposal_tahap_6,
				  mutation_analisa_proposal_tahap_6_add_payload_items,
				  mutation_analisa_proposal_tahap_6_edit_payload_items,
					mutation_analisa_proposal_tahap_6_delete_payload_items,
        }),
    },
    methods: {
        ...mapActions({
					dispatch_analisa_proposal_tahap_6,
				  dispatch_analisa_proposal_tahap_6_add_payload_items,
				  dispatch_analisa_proposal_tahap_6_edit_payload_items,
					dispatch_analisa_proposal_tahap_6_delete_payload_items,
        }),
    },
}

export default map_analisa_proposal_tahap_6
