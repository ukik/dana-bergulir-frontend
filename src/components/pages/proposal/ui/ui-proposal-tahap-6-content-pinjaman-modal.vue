<style scoped>

input {
	background: #FFFFFF;
	border-radius: 10px !important;
}

input {
	height: 30px;
}


span {
	font-family: Montserrat_Light;
	font-style: normal;
	font-weight: 500;
	font-size: 15px;
	line-height: 18px;

	color: #555555;
}

button {
	border-radius: 10px;
	border-width: 0px;

	font-family: Montserrat_Light;
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	text-align: center;

	color: #ffffff;
}

button:hover {
	color: #ffffff;
}

</style>

<template>
<fragment>
			<b-col class="p-0" cols="12">

				<!-- Kreditur -->
				<b-row class="mb-2">
			    <b-col class="col-4">
						<span>Kreditur</span>
					</b-col>
			    <b-col>
						<div class="input-group">
						 : <input type="text" class="form-control ml-2" placeholder="">
						</div>
					</b-col>
			  </b-row>

				<!-- Tahun Cair -->
				<b-row class="mb-2">
					<b-col class="col-4">
						<span>Tahun Cair</span>
					</b-col>
					<b-col>
						<div class="input-group">
						:	<input type="text" class="form-control ml-2" placeholder="">
						</div>
					</b-col>
				</b-row>

				<!-- Plafond -->
				<b-row class="mb-2">
					<b-col class="col-4">
						<span>Plafond</span>
					</b-col>
					<b-col>
						<div class="input-group">
						:	<input type="text" class="form-control ml-2" placeholder="">
						</div>
					</b-col>
				</b-row>

				<!-- Outstanding per -->
				<b-row class="mb-2">
					<b-col class="col-4">
						<span>Outstanding per</span>
					</b-col>
					<b-col>
						<div class="input-group">
						:	<input type="text" class="form-control ml-2" placeholder="">
						</div>
					</b-col>
				</b-row>

				<!-- Jaminan -->
				<b-row class="mb-2">
					<b-col class="col-4">
						<span>Jaminan</span>
					</b-col>
					<b-col>
						<div class="input-group">
						:	<input type="text" class="form-control ml-2" placeholder="">
						</div>
					</b-col>
				</b-row>

				<!-- Bunga / Hasil -->
				<b-row class="mb-2">
					<b-col class="col-4">
						<span>Bunga / Hasil</span>
					</b-col>
					<b-col>
						<div class="input-group">
						:	<input type="text" class="form-control ml-2" placeholder="">
						</div>
					</b-col>
				</b-row>

				<!-- Jatuh Tempo -->
				<b-row class="mb-2">
					<b-col class="col-4">
						<span>Jatuh Tempo</span>
					</b-col>
					<b-col>
						<div class="input-group">
						:	<input type="text" class="form-control ml-2" placeholder="">
						</div>
					</b-col>
				</b-row>

			</b-col>
</fragment>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ui-proposal-tahap-6-content-pinjaman-modal',
	data() {
    return {

    }
  }
});
</script>
