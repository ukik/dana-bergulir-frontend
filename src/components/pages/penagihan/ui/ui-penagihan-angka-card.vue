<style scoped>
span {
	font-family: Montserrat_Bold;
	font-style: normal;
	font-weight: 800;
	font-size: 60px;
	line-height: 73px;

	color: #000000;
}

/* .nominal {
	font-size: 25px;
} */

.info {
	font-family: Montserrat_Bold;
	font-style: normal;
	font-weight: 300;
	font-size: 15px;
	line-height: 18px;
	text-align: center;

	color: #000000;
}

.card {
	background: #FFFFFF;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}

</style>

<template>
		<div class="card text-center">
		  <!-- <img src="..." class="card-img-top" alt="..."> -->
		  <div class="card-body">
		    <span class="card-title">{{ propsNumber }}</span>
		    <p class="card-text">{{ propsText }}</p>
		  </div>
		</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	props: ['propsText', 'propsNumber'],
});
</script>
