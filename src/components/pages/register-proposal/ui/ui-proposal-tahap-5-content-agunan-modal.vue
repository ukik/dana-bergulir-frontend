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

			<!-- Jenis Barang	 -->
			<b-row class="mb-2">
				<b-col class="col-5">
					<span>Jenis Barang</span>
				</b-col>
				<b-col>
					<div class="input-group">
					:  <input required v-model="database.jenis_barang" type="text" class="form-control ml-2" placeholder="">
					</div>
				</b-col>
			</b-row>

			<!-- Bukti Kepemilikan (Tipe/Merk/No. Polisi/Ukuran/Letak) -->
			<b-row class="mb-2">
				<b-col class="col-5">
					<span>Bukti Kepemilikan (Tipe/Merk/No. Polisi/Ukuran/Letak)</span>
				</b-col>
				<b-col>
					<div class="input-group">
					:	<input required v-model="database.bukti_kepemilikan" type="text" class="form-control ml-2" placeholder="">
					</div>
				</b-col>
			</b-row>

			<!-- Perkiraan Nilai -->
			<b-row class="mb-2">
				<b-col class="col-5">
					<span>Perkiraan Nilai</span>
				</b-col>
				<b-col>
					<div class="input-group">
					:  <input required v-model="database.perkiraan_nilai" type="text" class="form-control ml-2" placeholder="">
					</div>
				</b-col>
			</b-row>

			<!-- Keterangan -->
			<b-row class="mb-2">
				<b-col class="col-5">
					<span>Keterangan</span>
				</b-col>
				<b-col>
					<div class="input-group">
					:	<input required v-model="database.pasar" type="text" class="form-control ml-2" placeholder="">
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
  name: 'ui-proposal-tahap-5-content-agunan-modal',
	data() {
    return {
			database:{
				jenis_barang: '',
				bukti_kepemilikan: '',
				perkiraan_nilai: '',
				keterangan: '',
			}
    }
  },
	methods: {
		onTambahkan() {
			this.$bvModal.hide('ui-proposal-tahap-5-content-agunan-modal')
			this.$emit("onBubbleEvent", this.database)
		}
	}
});
</script>
