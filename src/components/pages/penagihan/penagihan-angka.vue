<style scoped>
.container-periode {
	padding: 20px 0px;
}
</style>

<template>
	<fragment>
		<div class="container-periode">
			<ui-penagihan-angka-meta />
		</div>
		<b-row>
	    <b-col><ui-penagihan-angka-card propsText="Debitur Lancar" propsNumber="21" /></b-col>
	    <b-col><ui-penagihan-angka-card propsText="Debitur Kurang Lancar" propsNumber="43" /></b-col>
	    <b-col><ui-penagihan-angka-card propsText="Debitur DiRagukan" propsNumber="22" /></b-col>
			<b-col><ui-penagihan-angka-card propsText="Debitur Macet" propsNumber="34" /></b-col>
	  </b-row>
	</fragment>
</template>
