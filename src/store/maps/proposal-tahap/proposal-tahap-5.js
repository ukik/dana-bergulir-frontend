const {
    mapActions,
		mapMutations,
    mapGetters
} = require('vuex')

const {
    proposal_tahap_5
} = require("@/store/namespaces");

const {
	getters_proposal_tahap_5,
	mutation_proposal_tahap_5,
	dispatch_proposal_tahap_5,
} = proposal_tahap_5

const map_proposal_tahap_5 = {
    computed: {
        ...mapGetters({
					getters_proposal_tahap_5,
        }),
				...mapMutations({
					mutation_proposal_tahap_5,
        }),
    },
    methods: {
        ...mapActions({
					dispatch_proposal_tahap_5,
        }),
    },
}

export default map_proposal_tahap_5
