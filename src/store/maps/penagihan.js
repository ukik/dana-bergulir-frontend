const {
    mapActions,
		mapMutations,
    mapGetters
} = require('vuex')

const {
    penagihan
} = require("@/store/namespaces");

const {
	getters_penagihan,
	getters_penagihan_edit,

	mutation_penagihan,
  mutation_penagihan_add_payload_items,
  mutation_penagihan_edit_payload_items,
	mutation_penagihan_delete_payload_items,

	dispatch_penagihan,
  dispatch_penagihan_add_payload_items,
  dispatch_penagihan_edit_payload_items,
	dispatch_penagihan_delete_payload_items,
} = penagihan

const map_penagihan = {
    computed: {
        ...mapGetters({
					getters_penagihan,
					getters_penagihan_edit,
        }),
				...mapMutations({
					mutation_penagihan,
				  mutation_penagihan_add_payload_items,
				  mutation_penagihan_edit_payload_items,
					mutation_penagihan_delete_payload_items,
        }),
    },
    methods: {
        ...mapActions({
					dispatch_penagihan,
				  dispatch_penagihan_add_payload_items,
				  dispatch_penagihan_edit_payload_items,
					dispatch_penagihan_delete_payload_items,
        }),
    },
}

export default map_penagihan
