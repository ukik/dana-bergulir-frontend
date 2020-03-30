const {
    mapActions,
		mapMutations,
    mapGetters
} = require('vuex')

const {
    proposal_tahap
} = require("@/store/namespaces");

const {
	getters_proposal_tahap,
	mutation_proposal_tahap,
	dispatch_proposal_tahap,
} = proposal_tahap

const map_proposal_tahap = {
    computed: {
        ...mapGetters({
					getters_proposal_tahap,
        }),
				...mapMutations({
					mutation_proposal_tahap,
        }),
    },
    methods: {
        ...mapActions({
					dispatch_proposal_tahap,
        }),
    },
}

export default map_proposal_tahap
