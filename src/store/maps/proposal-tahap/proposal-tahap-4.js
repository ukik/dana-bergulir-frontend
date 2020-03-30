const {
    mapActions,
		mapMutations,
    mapGetters
} = require('vuex')

const {
    proposal_tahap_4
} = require("@/store/namespaces");

const {
	getters_proposal_tahap_4,
	mutation_proposal_tahap_4,
	dispatch_proposal_tahap_4,
} = proposal_tahap_4

const map_proposal_tahap_4 = {
    computed: {
        ...mapGetters({
					getters_proposal_tahap_4,
        }),
				...mapMutations({
					mutation_proposal_tahap_4,
        }),
    },
    methods: {
        ...mapActions({
					dispatch_proposal_tahap_4,
        }),
    },
}

export default map_proposal_tahap_4
