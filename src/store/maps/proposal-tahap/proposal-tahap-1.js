const {
    mapActions,
		mapMutations,
    mapGetters
} = require('vuex')

const {
    proposal_tahap_1
} = require("@/store/namespaces");

const {
	getters_proposal_tahap_1,
	mutation_proposal_tahap_1,
	dispatch_proposal_tahap_1,
} = proposal_tahap_1

const map_proposal_tahap_1 = {
    computed: {
        ...mapGetters({
					getters_proposal_tahap_1,
        }),
				...mapMutations({
					mutation_proposal_tahap_1,
        }),
    },
    methods: {
        ...mapActions({
					dispatch_proposal_tahap_1,
        }),
    },
}

export default map_proposal_tahap_1
