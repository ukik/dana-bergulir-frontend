const {
    mapActions,
		mapMutations,
    mapGetters
} = require('vuex')

const {
    pemohon
} = require("@/store/namespaces");

const {
  getters_pemohon,
  getters_pemohon_edit,
  getters_pemohon_reference_options_provinsi,
  getters_pemohon_reference_options_kabupaten,
  getters_pemohon_reference_options_kecamatan,

	mutation_pemohon,
  mutation_pemohon_add_payload_items,
  mutation_pemohon_edit_payload_items,
  mutation_pemohon_delete_payload_items,
  mutation_pemohon_reference_options_provinsi,
  mutation_pemohon_reference_options_kabupaten,
  mutation_pemohon_reference_options_kecamatan,

	dispatch_pemohon,
  dispatch_pemohon_add_payload_items,
  dispatch_pemohon_edit_payload_items,
  dispatch_pemohon_delete_payload_items,
  dispatch_pemohon_reference_options_provinsi,
  dispatch_pemohon_reference_options_kabupaten,
  dispatch_pemohon_reference_options_kecamatan,
} = pemohon

const map_pemohon = {
    computed: {
        ...mapGetters({
					getters_pemohon,
					getters_pemohon_edit,
          getters_pemohon_reference_options_provinsi,
          getters_pemohon_reference_options_kabupaten,
          getters_pemohon_reference_options_kecamatan,          
        }),
				...mapMutations({
					mutation_pemohon,
				  mutation_pemohon_add_payload_items,
				  mutation_pemohon_edit_payload_items,
					mutation_pemohon_delete_payload_items,
          mutation_pemohon_reference_options_provinsi,
          mutation_pemohon_reference_options_kabupaten,
          mutation_pemohon_reference_options_kecamatan,
        }),
    },
    methods: {
        ...mapActions({
					dispatch_pemohon,
				  dispatch_pemohon_add_payload_items,
				  dispatch_pemohon_edit_payload_items,
					dispatch_pemohon_delete_payload_items,
          dispatch_pemohon_reference_options_provinsi,
          dispatch_pemohon_reference_options_kabupaten,
          dispatch_pemohon_reference_options_kecamatan,
        }),
    },
}

export default map_pemohon
