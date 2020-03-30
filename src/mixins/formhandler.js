module.exports = {
	methods: {
		handleChange(evt) {
			console.log('handleChange :: ', evt.target.name);
			this.fieldErrors = {
				...this.fieldErrors,
				[evt.target.name]: ""
			};
		},
		handleInvalid(evt) {
			console.log('handleInvalid :: ', evt.target.name);
			this.fieldErrors = {
				...this.fieldErrors,
				[evt.target.name]: evt.target.validationMessage
			};
		},
	},
	data(){
		return {
			fieldErrors: {}
		}
	}
}
