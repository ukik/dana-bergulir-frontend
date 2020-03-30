const {
    mapActions,
		mapMutations,
    mapGetters
} = require('vuex')

const {
    proposal_tahap_6
} = require("@/store/namespaces");

const {
	getters_proposal_tahap_6,
	mutation_proposal_tahap_6,
	dispatch_proposal_tahap_6,
} = proposal_tahap_6

const map_proposal_tahap_6 = {
    computed: {
        ...mapGetters({
					getters_proposal_tahap_6,
        }),
				...mapMutations({
					mutation_proposal_tahap_6,
        }),
    },
    methods: {
        ...mapActions({
					dispatch_proposal_tahap_6,
        }),
    },
}

export default map_proposal_tahap_6
