const {
    mapActions,
		mapMutations,
    mapGetters
} = require('vuex')

const {
    penagihan_piutang
} = require("@/store/namespaces");

const {
	getters_penagihan_piutang,
	getters_penagihan_piutang_edit,

	mutation_penagihan_piutang,
  mutation_penagihan_piutang_add_payload_items,
  mutation_penagihan_piutang_edit_payload_items,
	mutation_penagihan_piutang_delete_payload_items,

	dispatch_penagihan_piutang,
  dispatch_penagihan_piutang_add_payload_items,
  dispatch_penagihan_piutang_edit_payload_items,
	dispatch_penagihan_piutang_delete_payload_items,
} = penagihan_piutang

const map_penagihan_piutang = {
    computed: {
        ...mapGetters({
					getters_penagihan_piutang,
					getters_penagihan_piutang_edit,
        }),
				...mapMutations({
					mutation_penagihan_piutang,
				  mutation_penagihan_piutang_add_payload_items,
				  mutation_penagihan_piutang_edit_payload_items,
					mutation_penagihan_piutang_delete_payload_items,
        }),
    },
    methods: {
        ...mapActions({
					dispatch_penagihan_piutang,
				  dispatch_penagihan_piutang_add_payload_items,
				  dispatch_penagihan_piutang_edit_payload_items,
					dispatch_penagihan_piutang_delete_payload_items,
        }),
    },
}

export default map_penagihan_piutang
