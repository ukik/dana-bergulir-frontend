const {
    mapActions,
		mapMutations,
    mapGetters
} = require('vuex')

const {
    analisa_proposal_tahap_2_rincian_kredit_modal
} = require("@/store/namespaces");

const {
	getters_analisa_proposal_tahap_2_rincian_kredit_modal,
	mutation_analisa_proposal_tahap_2_rincian_kredit_modal,
	dispatch_analisa_proposal_tahap_2_rincian_kredit_modal,
} = analisa_proposal_tahap_2_rincian_kredit_modal

const map_analisa_proposal_tahap_2_rincian_kredit_modal = {
    computed: {
        ...mapGetters({
					getters_analisa_proposal_tahap_2_rincian_kredit_modal,
        }),
				...mapMutations({
					mutation_analisa_proposal_tahap_2_rincian_kredit_modal,
        }),
    },
    methods: {
        ...mapActions({
					dispatch_analisa_proposal_tahap_2_rincian_kredit_modal,
        }),
    },
}

export default map_analisa_proposal_tahap_2_rincian_kredit_modal
