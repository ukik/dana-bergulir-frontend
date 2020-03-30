<template>
	<autocomplete
	  ref="autocomplete"
	  placeholder="Search Distribution Groups"
	  :source="distributionGroupsEndpoint"
	  input-class="form-control"
	  results-property="data"
	  :results-display="formattedDisplay"
	  :request-headers="authHeaders"
	  @selected="addDistributionGroup">
	</autocomplete>
</template>

<script>
export default {
	// parent component
	computed: {
	  authHeaders () {
	    return {
	      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1Ni....'
	    }
	  },
	},
	methods: {
	  distributionGroupsEndpoint (input) {
	    return process.env.API + '/distribution/search?query=' + input
	  },
	  addDistributionGroup (group) {
	    this.group = group
	    // access the autocomplete component methods from the parent
	    this.$refs.autocomplete.clear()
	  },
	  authHeaders () {
	    return {
	      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1Ni....'
	    }
	  },
	  formattedDisplay (result) {
	    return result.name + ' [' + result.groupId + ']'
	  }
	}	
}
</script>

<style lang="css" scoped>
</style>
