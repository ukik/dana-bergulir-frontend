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

			<!-- Kreditur/Pemberi Pinj. -->
			<b-row class="mb-2">
				<b-col class="col-5">
					<span>Kreditur/Pemberi Pinj.</span>
				</b-col>
				<b-col>
					<div class="input-group">
					:  <input required v-model="database.kreditur" type="text" class="form-control ml-2" placeholder="">
					</div>
				</b-col>
			</b-row>

			<!-- Bulan/Tahun Cair -->
			<b-row class="mb-2">
				<b-col class="col-5">
					<span>Bulan/Tahun Cair</span>
				</b-col>
				<b-col>
					<div class="input-group">
					:	<input required v-model="database.pencairan" type="text" class="form-control ml-2" placeholder="">
					</div>
				</b-col>
			</b-row>

			<!-- Nilai (Rp.) -->
			<b-row class="mb-2">
				<b-col class="col-5">
					<span>Nilai (Rp.)</span>
				</b-col>
				<b-col>
					<div class="input-group">
					:  <input required v-model="database.nominal" type="text" class="form-control ml-2" placeholder="">
					</div>
				</b-col>
			</b-row>

			<!-- Bunga/Thn(%) Flat/Menurun -->
			<b-row class="mb-2">
				<b-col class="col-5">
					<span>Bunga/Thn(%) Flat/Menurun</span>
				</b-col>
				<b-col>
					<div class="input-group">
					:	<input required v-model="database.bunga" type="text" class="form-control ml-2" placeholder="">
					</div>
				</b-col>
			</b-row>

			<!-- Jangka Waktu Pinjaman (Bulan) -->
			<b-row class="mb-2">
				<b-col class="col-5">
					<span>Jangka Waktu Pinjaman (Bulan)</span>
				</b-col>
				<b-col>
					<div class="input-group">
					:	<input required v-model="database.jatuh_tempo" type="text" class="form-control ml-2" placeholder="">
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
  name: 'ui-proposal-tahap-5-content-data-pinjaman-modal',
	data() {
    return {
			database:{
				kreditur: '',
				pencairan: '',
				nominal: '',
				bunga: '',
				jatuh_tempo: '',
			}
    }
  },
	methods: {
		onTambahkan() {
			this.$bvModal.hide('ui-proposal-tahap-5-content-data-pinjaman-modal')
			this.$emit("onBubbleEvent", this.database)
		}
	}
});
</script>
