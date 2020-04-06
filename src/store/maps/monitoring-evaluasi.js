const {
    mapActions,
		mapMutations,
    mapGetters
} = require('vuex')

const {
    monitoring_evaluasi
} = require("@/store/namespaces");

const {
	getters_monitoring_evaluasi,
	getters_monitoring_evaluasi_edit,

	mutation_monitoring_evaluasi,
  mutation_monitoring_evaluasi_add_payload_items,
  mutation_monitoring_evaluasi_edit_payload_items,
	mutation_monitoring_evaluasi_delete_payload_items,

	dispatch_monitoring_evaluasi,
  dispatch_monitoring_evaluasi_add_payload_items,
  dispatch_monitoring_evaluasi_edit_payload_items,
	dispatch_monitoring_evaluasi_delete_payload_items,
} = monitoring_evaluasi

const map_monitoring_evaluasi = {
    computed: {
        ...mapGetters({
					getters_monitoring_evaluasi,
					getters_monitoring_evaluasi_edit,
        }),
				...mapMutations({
					mutation_monitoring_evaluasi,
				  mutation_monitoring_evaluasi_add_payload_items,
				  mutation_monitoring_evaluasi_edit_payload_items,
					mutation_monitoring_evaluasi_delete_payload_items,
        }),
    },
    methods: {
        ...mapActions({
					dispatch_monitoring_evaluasi,
				  dispatch_monitoring_evaluasi_add_payload_items,
				  dispatch_monitoring_evaluasi_edit_payload_items,
					dispatch_monitoring_evaluasi_delete_payload_items,
        }),
    },
}

export default map_monitoring_evaluasi
