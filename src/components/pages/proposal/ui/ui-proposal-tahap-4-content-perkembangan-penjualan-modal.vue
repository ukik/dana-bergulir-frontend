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

				<!-- Tahun -->
				<b-row class="mb-2">
			    <b-col class="col-4">
						<span>Tahun</span>
					</b-col>
			    <b-col>
						<div class="input-group">
						:  <input type="text" class="form-control ml-2" placeholder="">
						</div>
					</b-col>
			  </b-row>

				<!-- Satuan -->
				<b-row class="mb-2">
					<b-col class="col-4">
						<span>Satuan</span>
					</b-col>
					<b-col>
						<div class="input-group">
						:	<input type="text" class="form-control ml-2" placeholder="">
						</div>
					</b-col>
				</b-row>

				<!-- Volume -->
				<b-row class="mb-2">
					<b-col class="col-4">
						<span>Volume</span>
					</b-col>
					<b-col>
						<div class="input-group">
						:	<input type="text" class="form-control ml-2" placeholder="">
						</div>
					</b-col>
				</b-row>

				<!-- Nilai -->
				<b-row class="mb-2">
					<b-col class="col-4">
						<span>Nilai</span>
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
  name: 'ui-proposal-tahap-4-content-perkembangan-penjualan-modal',
	data() {
    return {

    }
  }
});
</script>
