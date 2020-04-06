const {
    mapActions,
		mapMutations,
    mapGetters
} = require('vuex')

const {
    utilitas
} = require("@/store/namespaces");

const {
	getters_utilitas,
	getters_utilitas_edit,

	mutation_utilitas,
  mutation_utilitas_add_payload_items,
  mutation_utilitas_edit_payload_items,
	mutation_utilitas_delete_payload_items,

	dispatch_utilitas,
  dispatch_utilitas_add_payload_items,
  dispatch_utilitas_edit_payload_items,
	dispatch_utilitas_delete_payload_items,
} = utilitas

const map_utilitas = {
    computed: {
        ...mapGetters({
					getters_utilitas,
					getters_utilitas_edit,
        }),
				...mapMutations({
					mutation_utilitas,
				  mutation_utilitas_add_payload_items,
				  mutation_utilitas_edit_payload_items,
					mutation_utilitas_delete_payload_items,
        }),
    },
    methods: {
        ...mapActions({
					dispatch_utilitas,
				  dispatch_utilitas_add_payload_items,
				  dispatch_utilitas_edit_payload_items,
					dispatch_utilitas_delete_payload_items,
        }),
    },
}

export default map_utilitas
