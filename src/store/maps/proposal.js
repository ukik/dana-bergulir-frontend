const {
    mapActions,
		mapMutations,
    mapGetters
} = require('vuex')

const {
    proposal
} = require("@/store/namespaces");

const {
	getters_proposal,
	getters_proposal_edit,

	mutation_proposal,
  mutation_proposal_add_payload_items,
  mutation_proposal_edit_payload_items,
	mutation_proposal_delete_payload_items,

	dispatch_proposal,
  dispatch_proposal_add_payload_items,
  dispatch_proposal_edit_payload_items,
	dispatch_proposal_delete_payload_items,
} = proposal

const map_proposal = {
    computed: {
        ...mapGetters({
					getters_proposal,
					getters_proposal_edit,
        }),
				...mapMutations({
					mutation_proposal,
				  mutation_proposal_add_payload_items,
				  mutation_proposal_edit_payload_items,
					mutation_proposal_delete_payload_items,
        }),
    },
    methods: {
        ...mapActions({
					dispatch_proposal,
				  dispatch_proposal_add_payload_items,
				  dispatch_proposal_edit_payload_items,
					dispatch_proposal_delete_payload_items,
        }),
    },
}

export default map_proposal
