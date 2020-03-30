const {
    mapActions,
		mapMutations,
    mapGetters
} = require('vuex')

const {
    proposal_tahap_3
} = require("@/store/namespaces");

const {
	getters_proposal_tahap_3,
	mutation_proposal_tahap_3,
	dispatch_proposal_tahap_3,
} = proposal_tahap_3

const map_proposal_tahap_3 = {
    computed: {
        ...mapGetters({
					getters_proposal_tahap_3,
        }),
				...mapMutations({
					mutation_proposal_tahap_3,
        }),
    },
    methods: {
        ...mapActions({
					dispatch_proposal_tahap_3,
        }),
    },
}

export default map_proposal_tahap_3
