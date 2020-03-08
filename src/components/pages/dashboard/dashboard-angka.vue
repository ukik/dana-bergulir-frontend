<style scoped>
.container-periode {
	padding: 20px 0px;
}
</style>

<template>
	<fragment>
		<div class="container-periode">
			<ui-dashboard-angka-meta />
		</div>
		<b-row>
	    <b-col><ui-dashboard-angka-card /></b-col>
	    <b-col><ui-dashboard-angka-card /></b-col>
			<b-col><ui-dashboard-angka-card :nominal="true" /></b-col>
	    <b-col><ui-dashboard-angka-card /></b-col>
			<b-col><ui-dashboard-angka-card :nominal="true" /></b-col>
	  </b-row>
	</fragment>
</template>
