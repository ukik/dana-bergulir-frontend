const {
    mapActions,
		mapMutations,
    mapGetters
} = require('vuex')

const {
    surveyor
} = require("@/store/namespaces");

const {
	getters_surveyor,
	getters_surveyor_edit,

	mutation_surveyor,
  mutation_surveyor_add_payload_items,
  mutation_surveyor_edit_payload_items,
	mutation_surveyor_delete_payload_items,

	dispatch_surveyor,
  dispatch_surveyor_add_payload_items,
  dispatch_surveyor_edit_payload_items,
	dispatch_surveyor_delete_payload_items,
} = surveyor

const map_surveyor = {
    computed: {
        ...mapGetters({
					getters_surveyor,
					getters_surveyor_edit,
        }),
				...mapMutations({
					mutation_surveyor,
				  mutation_surveyor_add_payload_items,
				  mutation_surveyor_edit_payload_items,
					mutation_surveyor_delete_payload_items,
        }),
    },
    methods: {
        ...mapActions({
					dispatch_surveyor,
				  dispatch_surveyor_add_payload_items,
				  dispatch_surveyor_edit_payload_items,
					dispatch_surveyor_delete_payload_items,
        }),
    },
}

export default map_surveyor
