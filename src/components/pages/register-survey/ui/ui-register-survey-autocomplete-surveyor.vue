<style scoped="">
.autocomplete__searching, .autocomplete__box {
    border-radius: 15px;
}
.input-autocomplete {

}
</style>

<template>
	<autocomplete
	  ref="autocomplete"
		id="autocomplete-surveyor"
		class="m-0 p-0 "
	  placeholder="Pilih surveyor"
	  :source="payload_items"
	  input-class="form-control m-0 p-0 pl-2 input-autocomplete"
		:initial-value="propsInitValue"
		:initial-display="propsInitValue"
		results-value=""
		results-property=""
	  :results-display="formattedDisplay"
	  :request-headers="authHeaders"
		@clear="onClear"
	  @selected="addDistributionGroup">
	</autocomplete>
</template>

<script>
export default {
	props:["propsInitValue"],
	mounted(){
    const holder = document.querySelector('#autocomplete-surveyor')
		if(!holder) return

		console.log(holder.querySelector('.autocomplete__box').style.borderRadius="10px")
		console.log(holder.querySelector('.autocomplete__box').style.height="30px")
		console.log(holder.querySelector('.autocomplete__icon img').style.marginTop="-10px")
		console.log(holder.querySelector('.input-autocomplete').style.height="28px")
	},
	computed: {
	  authHeaders () {
	    return {
	      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1Ni....'
	    }
	  },
		payload_items(){
			let items = []
			for (let i = 0; i < 10; i++) {
				const n = Math.round(Math.random()*1000);
				items.push({
					id: i+0, // wajib ada, jgn 0, jgn kembar
					nama_surveyor_survey: 'nama_surveyor_survey '+(i+0),
					foto: 'https://sweetalert2.github.io/images/angular.svg'
				});
				// items.push({
				// 	id: i+200, // wajib ada, jgn 0, jgn kembar
				// 	nama_surveyor_survey: 'nama_surveyor_survey '+(i+0),
				// 	foto: 'https://sweetalert2.github.io/images/react.svg'
				// });
			}

			return items
		}
	},
	methods: {
	  // distributionGroupsEndpoint (input) {
	  //   // return 'https://api.github.com/search/repositories?q=' + input
		// 	return [{id:1,name:'abc'},{id:2,name:'def'}]
	  // },
		onClear() {
			this.$emit("onBubbleEventClear")
		},
	  addDistributionGroup (group) {

			console.log(group)
			this.$emit("onBubbleEvent", group.selectedObject)
	    // access the autocomplete component methods from the parent
	    // this.$refs.autocomplete.clear()
	  },
	  formattedDisplay (result) {
			// console.log("result", result)
	    return result.nama_surveyor_survey // + ' [' + result.groupId + ']'
	  }
	}
}
</script>

<style lang="css" scoped>
</style>
