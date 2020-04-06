<style scoped>
.title {
	font-family: Montserrat_Light;
	font-style: normal;
	font-weight: bold;
	font-size: 15px;
	/* line-height: 20px; */

	color: #555555;
}

.periode {
	font-family: Montserrat_Light;
	font-style: normal;
	font-weight: normal;
	font-size: 15px;
	/* line-height: 24px; */

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
	font-size: 14px;
	/* line-height: 18px; */
	text-align: center;

	color: #FFFFFF;
}

button:hover {
	color: #FFFFFF;
}

input {
	background: #FFFFFF;
	border-radius: 10px;
	height: 28px;
}
</style>

<template>
<fragment>
	<a class="title">Grafik Perbandingan Proposal Masuk & Approval</a>
	<br>
	<p>
		<a class="periode">Periode</a>
	</p>
	<div class="row">
		<div class="col p-0 pl-3">
			<input type="" class="form-control" placeholder="">
		</div>
		<div class="col-1 p-0 text-center">
			<a class="periode">s/d</a>
		</div>
		<div class="col p-0">
			<input type="" class="form-control" placeholder="">
		</div>
		<div class="col">
			<button class="btn">Grafik</button>
		</div>
	</div>
</fragment>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ui-dashboard-grafik-meta',

});
</script>
