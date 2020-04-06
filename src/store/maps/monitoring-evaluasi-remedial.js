const {
    mapActions,
		mapMutations,
    mapGetters
} = require('vuex')

const {
    monitoring_evaluasi_remedial
} = require("@/store/namespaces");

const {
	getters_monitoring_evaluasi_remedial,
	getters_monitoring_evaluasi_remedial_edit,

	mutation_monitoring_evaluasi_remedial,
  mutation_monitoring_evaluasi_remedial_add_payload_items,
  mutation_monitoring_evaluasi_remedial_edit_payload_items,
	mutation_monitoring_evaluasi_remedial_delete_payload_items,

	dispatch_monitoring_evaluasi_remedial,
  dispatch_monitoring_evaluasi_remedial_add_payload_items,
  dispatch_monitoring_evaluasi_remedial_edit_payload_items,
	dispatch_monitoring_evaluasi_remedial_delete_payload_items,
} = monitoring_evaluasi_remedial

const map_monitoring_evaluasi_remedial = {
    computed: {
        ...mapGetters({
					getters_monitoring_evaluasi_remedial,
					getters_monitoring_evaluasi_remedial_edit,
        }),
				...mapMutations({
					mutation_monitoring_evaluasi_remedial,
				  mutation_monitoring_evaluasi_remedial_add_payload_items,
				  mutation_monitoring_evaluasi_remedial_edit_payload_items,
					mutation_monitoring_evaluasi_remedial_delete_payload_items,
        }),
    },
    methods: {
        ...mapActions({
					dispatch_monitoring_evaluasi_remedial,
				  dispatch_monitoring_evaluasi_remedial_add_payload_items,
				  dispatch_monitoring_evaluasi_remedial_edit_payload_items,
					dispatch_monitoring_evaluasi_remedial_delete_payload_items,
        }),
    },
}

export default map_monitoring_evaluasi_remedial
