const {
    mapActions,
		mapMutations,
    mapGetters
} = require('vuex')

const {
    analisa_proposal
} = require("@/store/namespaces");

const {
	getters_analisa_proposal,
	getters_analisa_proposal_edit,

	mutation_analisa_proposal,
  mutation_analisa_proposal_add_payload_items,
  mutation_analisa_proposal_edit_payload_items,
	mutation_analisa_proposal_delete_payload_items,

	dispatch_analisa_proposal,
  dispatch_analisa_proposal_add_payload_items,
  dispatch_analisa_proposal_edit_payload_items,
	dispatch_analisa_proposal_delete_payload_items,
} = analisa_proposal

const map_analisa_proposal = {
    computed: {
        ...mapGetters({
					getters_analisa_proposal,
					getters_analisa_proposal_edit,
        }),
				...mapMutations({
					mutation_analisa_proposal,
				  mutation_analisa_proposal_add_payload_items,
				  mutation_analisa_proposal_edit_payload_items,
					mutation_analisa_proposal_delete_payload_items,
        }),
    },
    methods: {
        ...mapActions({
					dispatch_analisa_proposal,
				  dispatch_analisa_proposal_add_payload_items,
				  dispatch_analisa_proposal_edit_payload_items,
					dispatch_analisa_proposal_delete_payload_items,
        }),
    },
}

export default map_analisa_proposal
