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


button:hover, .btn-delete:hover, .btn-add:hover {
	color: #ffffff;
}

.btn-add {
	background: #58C0E7;
	border-radius: 5px;
	color: #ffffff;
	border: 0px;
	font-size: 14px;
}


</style>

<template>
<fragment>
<form @submit.prevent="onTambahkan">
			<b-col class="p-0" cols="12">

				<!-- Jabatan -->
				<b-row class="mb-2">
			    <b-col class="col-5">
						<span>Jabatan</span>
					</b-col>
			    <b-col>
						<div class="input-group">
						:  <input required v-model="database.jabatan" type="text" class="form-control ml-2" placeholder="">
						</div>
					</b-col>
			  </b-row>

				<!-- Nama -->
				<b-row class="mb-2">
					<b-col class="col-5">
						<span>Nama</span>
					</b-col>
					<b-col>
						<div class="input-group">
						:	<input required v-model="database.nama" type="text" class="form-control ml-2" placeholder="">
						</div>
					</b-col>
				</b-row>

				<!-- Kepemilikan Modal (%) -->
				<b-row class="mb-2">
					<b-col class="col-5">
						<span>Kepemilikan Modal (%)</span>
					</b-col>
					<b-col>
						<div class="input-group">
						:	<input required v-model="database.modal" type="text" class="form-control ml-2" placeholder="">
						</div>
					</b-col>
				</b-row>

				<!-- Telepon -->
				<b-row class="mb-2">
					<b-col class="col-5">
						<span>Telepon</span>
					</b-col>
					<b-col>
						<div class="input-group">
						:	<input required v-model="database.telepon" type="text" class="form-control ml-2" placeholder="">
						</div>
					</b-col>
				</b-row>

				<!-- Peng. Usaha (Tahun) -->
				<b-row class="mb-2">
					<b-col class="col-5">
						<span>Peng. Usaha (Tahun)</span>
					</b-col>
					<b-col>
						<div class="input-group">
						:	<input required v-model="database.tahun" type="text" class="form-control ml-2" placeholder="">
						</div>
					</b-col>
				</b-row>

			</b-col>

			<br>
			<button class="btn m-auto col-5 btn-block btn-add">Tambahkan</button>
</form>
</fragment>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ui-proposal-tahap-3-content-susun-pemilik-modal',
	data() {
    return {
			database:{
				jabatan:"",
				nama:"",
				modal:"",
				telepon:"",
				tahun:"",
			}
    }
  },
	methods: {
		onTambahkan() {
			this.$bvModal.hide('ui-proposal-tahap-3-content-susun-pemilik-modal')
			this.$emit("onBubbleEvent", this.database)
		}
	}
});
</script>
