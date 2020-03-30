const {
    mapActions,
		mapMutations,
    mapGetters
} = require('vuex')

const {
    proposal_tahap_2
} = require("@/store/namespaces");

const {
	getters_proposal_tahap_2,
	mutation_proposal_tahap_2,
	dispatch_proposal_tahap_2,
} = proposal_tahap_2

const map_proposal_tahap_2 = {
    computed: {
        ...mapGetters({
					getters_proposal_tahap_2,
        }),
				...mapMutations({
					mutation_proposal_tahap_2,
        }),
    },
    methods: {
        ...mapActions({
					dispatch_proposal_tahap_2,
        }),
    },
}

export default map_proposal_tahap_2
