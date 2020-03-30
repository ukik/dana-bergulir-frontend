module.exports = {
    methods: {
        onModalProposal(element_id){
          if(this.$route.name !== "proposal-tahap-7") {
						this.$bvModal.show(element_id)
					}
        }
    }
}
