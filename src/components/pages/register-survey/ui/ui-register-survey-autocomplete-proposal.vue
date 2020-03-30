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
    id="autocomplete-proposal"
		class="m-0 p-0 "
	  placeholder="Pilih proposal"
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
    const holder = document.querySelector('#autocomplete-proposal')
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
      for (let i = 0; i < 100; i++) {
        const n = Math.round(Math.random()*1000);
        const element = items.push({
          id: (i+0), // wajib ada, jgn 0, jgn kembar
          nomor_proposal: "nomor_proposal "+(i+0),
        });
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
	    return result.nomor_proposal // + ' [' + result.groupId + ']'
	  }
	}
}
</script>

<style lang="css" scoped>
</style>
