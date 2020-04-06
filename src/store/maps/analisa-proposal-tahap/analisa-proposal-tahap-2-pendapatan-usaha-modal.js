const {
    mapActions,
		mapMutations,
    mapGetters
} = require('vuex')

const {
    analisa_proposal_tahap_2_pendapatan_usaha_modal
} = require("@/store/namespaces");

const {
	getters_analisa_proposal_tahap_2_pendapatan_usaha_modal,
	mutation_analisa_proposal_tahap_2_pendapatan_usaha_modal,
	dispatch_analisa_proposal_tahap_2_pendapatan_usaha_modal,
} = analisa_proposal_tahap_2_pendapatan_usaha_modal

const map_analisa_proposal_tahap_2_pendapatan_usaha_modal = {
    computed: {
        ...mapGetters({
					getters_analisa_proposal_tahap_2_pendapatan_usaha_modal,
        }),
				...mapMutations({
					mutation_analisa_proposal_tahap_2_pendapatan_usaha_modal,
        }),
    },
    methods: {
        ...mapActions({
					dispatch_analisa_proposal_tahap_2_pendapatan_usaha_modal,
        }),
    },
}

export default map_analisa_proposal_tahap_2_pendapatan_usaha_modal
