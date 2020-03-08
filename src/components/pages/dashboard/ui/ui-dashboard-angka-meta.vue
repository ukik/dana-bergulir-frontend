<style scoped>
a {
	font-family: Montserrat_Light;
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 24px;

	padding-right: 75px;

	color: #555555;
}

button {
	width: 153px;
	height: 28px;

	background: #58C0E7;
	border-radius: 10px;

	font-family: Montserrat_Light;
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	/* line-height: 18px; */
	text-align: center;

	color: #FFFFFF;
}

button:hover {
	color: #FFFFFF;
}
</style>

<template>
<fragment>
	<a>Periode: Feb 2020</a>
	<button class="btn">Ganti Periode</button>
</fragment>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ui-dashboard-angka-meta',

});
</script>
