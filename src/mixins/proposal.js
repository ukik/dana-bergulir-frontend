module.exports = {
		data(){
			return {
				// fieldErrors: {}
			}
		},
    methods: {
				onNavBadge(badge, index) {
					if(badge.status == "after"){
						this.$router.push('/proposal-tahap-'+(index+1))
					}
				},
        onModalProposal(element_id){
          if(this.$route.name !== "proposal-tahap-7") {
						this.$bvModal.show(element_id)
					}
        },
				onSnotifyProposalNext(){
					this.$snotify.create({
						title: 'Perhatian!',
						body: 'Data belum lengkap',
						config: {
							type: "warning",
						}
					});
        },
				onSwalProposalFinish(){
					this.$swal.fire(
					  'Perhatian',
					  'Seluruh tahapan pengisian formulir proposal belum lengkap',
					  'warning'
					)
        },
				// handleChange(evt) {
				// 	console.log('handleChange :: ', evt.target.name);
				// 	this.fieldErrors = {
				// 		...this.fieldErrors,
				// 		[evt.target.name]: ""
				// 	};
				// },
				// handleInvalid(evt) {
				// 	console.log('handleInvalid :: ', evt.target.name);
				// 	this.fieldErrors = {
				// 		...this.fieldErrors,
				// 		[evt.target.name]: evt.target.validationMessage
				// 	};
				// },
    }
}
