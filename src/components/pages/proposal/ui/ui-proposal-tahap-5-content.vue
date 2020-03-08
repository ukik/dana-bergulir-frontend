<style scoped>

.subtitle {
	font-family: Montserrat_Light;
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;

	color: #555555;
}

select, input, textarea {
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

.column-right {
  float: right;
}

.non-next {
	background: #CACACA;
}

.next {
	background: #58C0E7;
}

.section {
	background: #ECF0F1;
	border-radius: 20px;
}

small {
	float: right;
	color: red !important;
}

</style>

<template>
<fragment>
	<form @submit.prevent="">
		<b-row class="mb-2 section p-3">
			<b-col class="p-0" cols="12">
				<h3 class="subtitle mb-3">Aspek Manajemen</h3>

				<!-- SOP Usaha -->
				<b-row class="mb-2">
			    <b-col class="col-4">
						<span>SOP Usaha</span>
					</b-col>
			    <b-col>
						<div class="input-group">
							: <b-form-radio-group
								class="ml-2"
				        v-model="selected_sop_usaha"
				        :options="options_ada_tidakada"
				      ></b-form-radio-group>
						</div>
						<div class="input-group">
						  <input type="text" class="form-control ml-2" placeholder="Keterangan SOP Usaha">
						</div>
					</b-col>
			  </b-row>

				<!-- SOP Pengelolaan Kas -->
				<b-row class="mb-2">
			    <b-col class="col-4">
						<span>SOP Pengelolaan Kas</span>
					</b-col>
			    <b-col>
						<div class="input-group">
							: <b-form-radio-group
								class="ml-2"
				        v-model="selected_sop_pengelolaan_kas"
				        :options="options_ada_tidakada"
				      ></b-form-radio-group>
						</div>
						<div class="input-group">
						  <input type="text" class="form-control ml-2" placeholder="Keterangan SOP Pengelolaan Usaha">
						</div>
					</b-col>
			  </b-row>

				<!-- SOP Logistik / SDM -->
				<b-row class="mb-2">
			    <b-col class="col-4">
						<span>SOP Pengelolaan Kas</span>
					</b-col>
			    <b-col>
						<div class="input-group">
							: <b-form-radio-group
								class="ml-2"
				        v-model="selected_sop_logistik_sdm"
				        :options="options_ada_tidakada"
				      ></b-form-radio-group>
						</div>
						<div class="input-group">
						  <input type="text" class="form-control ml-2" placeholder="Keterangan SOP Logistik / SDM">
						</div>
					</b-col>
			  </b-row>

				<!-- Pembagian Tugas Karyawan (Tertulis) -->
				<b-row class="mb-2">
			    <b-col class="col-4">
						<span>Pembagian Tugas Karyawan (Tertulis)</span>
					</b-col>
			    <b-col>
						<div class="input-group">
							: <b-form-radio-group
								class="ml-2"
				        v-model="selected_pembagian_tugas"
				        :options="options_ada_tidakada"
				      ></b-form-radio-group>
						</div>
						<div class="input-group">
						  <input type="text" class="form-control ml-2" placeholder="Keterangan Pembagian Tugas Karyawan">
						</div>
					</b-col>
			  </b-row>

				<!-- Rencana Usaha Tahunan -->
				<b-row class="mb-2">
					<b-col class="col-4">
						<span>Rencana Usaha Tahunan</span>
					</b-col>
					<b-col>
						<div class="input-group">
							: <b-form-radio-group
								class="ml-2"
								v-model="selected_rencana_usaha_tahunan"
								:options="options_ada_tidakada"
							></b-form-radio-group>
						</div>
						<div class="input-group">
							<input type="text" class="form-control ml-2" placeholder="Keterangan Rencana Usaha Tahunan">
						</div>
					</b-col>
				</b-row>

				<!-- Laporan Evaluasi Pencapaian Target Usaha -->
				<b-row class="mb-2">
					<b-col class="col-4">
						<span>Keterangan Laporan Evaluasi Pencapaian Target</span>
					</b-col>
					<b-col>
						<div class="input-group">
							: <b-form-radio-group
								class="ml-2"
								v-model="selected_laporan_evaluasi"
								:options="options_ada_tidakada"
							></b-form-radio-group>
						</div>
						<div class="input-group">
							<input type="text" class="form-control ml-2" placeholder="Keterangan Laporan Evaluasi Pencapaian Target">
						</div>
					</b-col>
				</b-row>

				<!-- Lap. Keuangan Periodik (Neraca/LR) -->
				<b-row class="mb-2">
					<b-col class="col-4">
						<span>Lap. Keuangan Periodik (Neraca/LR)</span>
					</b-col>
					<b-col>
						<div class="input-group">
							: <b-form-radio-group
								class="ml-2"
								v-model="selected_laporan_keuangan"
								:options="options_ada_tidakada"
							></b-form-radio-group>
						</div>
						<div class="input-group">
							<input type="text" class="form-control ml-2" placeholder="Keterangan Laporan Keuangan Periodik (Neraca dan Laba/Rugi)">
						</div>
					</b-col>
				</b-row>

				<!-- Kendala Manajemen (Diisi Bila Ada) -->
				<b-row class="mb-2">
			    <b-col class="col-4">
						<span>Kendala Manajemen (Diisi Bila Ada)</span>
					</b-col>
			    <b-col>
						<div class="input-group">
						: <b-form-checkbox-group class="ml-2" v-model="checked">
						    <b-form-checkbox value="me">Bila ada, sebutkan</b-form-checkbox>
						  </b-form-checkbox-group>
						</div>
						<div class="input-group">
						  <textarea class="form-control ml-2" rows="3"></textarea>
						</div>
					</b-col>
			  </b-row>

			</b-col>
			<b-col cols="12">
				<div class="mt-3">
					<div class="column-right">
						<button @click.prevent="gotoPage('/proposal-tahap-4')" class="btn non-next mr-2 pl-3 pr-3">Pervious</button>
						<button @click.prevent="gotoPage('/proposal-tahap-6')" class="btn next mr-2 pl-3 pr-3">Next</button>
						<button class="btn non-next pl-3 pr-3">Finish</button>
					</div>
				</div>
			</b-col>
		</b-row>
	</form>
</fragment>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ui-proposal-tahap-5-content',
	data() {
    return {
			checked:[],
			selected_sop_usaha:'',
			selected_sop_pengelolaan_kas:'',
			selected_sop_logistik_sdm:'',
			selected_pembagian_tugas:'',
			selected_rencana_usaha_tahunan:'',
			selected_laporan_evaluasi:'',
			selected_laporan_keuangan:'',
			options_ada_tidakada: [
				{ text: 'Ada', value: 'first' },
				{ text: 'Tidak Ada', value: 'second' },
			],
    }
  }
});
</script>
