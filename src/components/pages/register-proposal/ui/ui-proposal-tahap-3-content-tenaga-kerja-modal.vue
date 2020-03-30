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

				<!-- Jumlah Tenaga Kerja -->
				<b-row class="mb-2">
			    <b-col class="col-5">
						<span>Jumlah Tenaga Kerja</span>
					</b-col>
			    <b-col>
						<div class="input-group">
						:  <input required v-model="database.jumlah_pekerja" type="number" min="0" class="form-control ml-2" placeholder="">
						</div>
					</b-col>
			  </b-row>

				<!-- Gaji Tenaga Kerja (Harian) -->
				<b-row class="mb-2">
					<b-col class="col-5">
						<span>Gaji Tenaga Kerja (Harian)</span>
					</b-col>
					<b-col>
						<div class="input-group">
						:	<input required v-model="database.gaji_harian" type="number" min="0" class="form-control ml-2" placeholder="">
						</div>
					</b-col>
				</b-row>

				<!-- Gaji Tenaga Kerja (Mingguan) -->
				<b-row class="mb-2">
					<b-col class="col-5">
						<span>Gaji Tenaga Kerja (Mingguan)</span>
					</b-col>
					<b-col>
						<div class="input-group">
						:	<input required v-model="database.gaji_mingguan" type="number" min="0" class="form-control ml-2" placeholder="">
						</div>
					</b-col>
				</b-row>

				<!-- Gaji Tenaga Kerja (Bulanan) -->
				<b-row class="mb-2">
					<b-col class="col-5">
						<span>Gaji Tenaga Kerja (Bulanan)</span>
					</b-col>
					<b-col>
						<div class="input-group">
							:	<input required v-model="database.gaji_bulanan" type="number" min="0" class="form-control ml-2" placeholder="">
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
  name: 'ui-proposal-tahap-3-content-tenaga-kerja-modal',
	data() {
    return {
			database:{
				jumlah_pekerja:"",
				gaji_harian:"",
				gaji_mingguan:"",
				gaji_bulanan:"",
			}
    }
  },
	methods: {
		onTambahkan() {
			this.$bvModal.hide('ui-proposal-tahap-3-content-tenaga-kerja-modal')
			this.$emit("onBubbleEvent", this.database)
		}
	}
});
</script>
