module.exports = {
    methods: {
        onSwalProposalFinish(){
					this.$swal.fire(
					  'Perhatian',
					  'Seluruh tahapan pengisian formulir proposal belum lengkap',
					  'warning'
					)
        }
    }
}
