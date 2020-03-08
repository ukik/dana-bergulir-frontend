<style scoped>

.subtitle {
	font-family: Montserrat_Light;
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;

	color: #555555;
}

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

button:hover, .btn-delete:hover, .btn-add:hover {
	color: #ffffff;
}

.btn-delete {
	background: #C54F4F;
	color: #ffffff;
	border-radius: 5px;
	border: 0px;
	font-size: 14px;
}

.btn-add {
	background: #58C0E7;
	border-radius: 5px;
	color: #ffffff;
	border: 0px;
	font-size: 14px;
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
	float: left;
}

.table-header {
	font-family: Montserrat_Bold;
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 15px;
	/* identical to box height */

	text-align: center;
	color: #252323;
}

.b-table-sticky-header {
	border: 1px solid #dee2e6;
}

</style>

<template>
<fragment>
	<form @submit.prevent="">
		<b-row class="mb-2 section p-3">
			<b-col class="p-0" cols="12">
				<h3 class="subtitle mb-3">Aspek Pasar</h3>

				<!-- Bentuk Badan Hukum -->
				<b-row class="mb-2">
			    <b-col class="col-4">
						<span>Bentuk Badan Hukum</span>
					</b-col>
			    <b-col>
						<div class="input-group">
							: <b-form-radio-group
								class="ml-2"
				        v-model="selected_badan_hukum"
				        :options="options_badan_hukum"
				      ></b-form-radio-group>
						</div>
					</b-col>
			  </b-row>

				<!-- Bila Badan Hukum Bukan Perseorangan, Sebutkan -->
				<b-row class="mb-2">
			    <b-col class="col-4">
						<span>Bila Badan Hukum Bukan Perseorangan, Sebutkan</span>
					</b-col>
			    <b-col>
						<small class="form-text text-muted ml-3">
							No Akte Pendirian
						</small>
						<div class="input-group">
						  : <input type="text" class="form-control ml-2" placeholder="">
						</div>

						<small class="form-text text-muted ml-3">
							No & Tanggal Pengesahan Badan Hukum
						</small>
						<div class="input-group">
						  : <input type="text" class="form-control ml-2" placeholder="">
						</div>

						<small class="form-text text-muted ml-3">
							No. Akta Perubahan Anggaran Dasar (Bila ada)
						</small>
						<div class="input-group">
						  : <input type="text" class="form-control ml-2" placeholder="">
						</div>

					</b-col>
			  </b-row>

				<!-- Izin Usaha -->
				<b-row class="mb-2">
			    <b-col class="col-4">
						<span>Bentuk Badan Hukum</span>
					</b-col>
			    <b-col>
						<div class="input-group">
							: <b-form-radio-group
								class="ml-2"
				        v-model="selected_izin_usaha"
				        :options="options_ada_tidakada"
				      ></b-form-radio-group>
						</div>
					</b-col>
			  </b-row>

				<!-- TDP -->
				<b-row class="mb-2">
			    <b-col class="col-4">
						<span>TDP</span>
					</b-col>
			    <b-col>
						<div class="input-group">
							: <b-form-radio-group
								class="ml-2"
				        v-model="selected_tdp"
				        :options="options_ada_tidakada"
				      ></b-form-radio-group>
						</div>
					</b-col>
			  </b-row>

				<!-- NPWP -->
				<b-row class="mb-2">
			    <b-col class="col-4">
						<span>NPWP</span>
					</b-col>
			    <b-col>
						<div class="input-group">
							: <b-form-radio-group
								class="ml-2"
				        v-model="selected_npwp"
				        :options="options_ada_tidakada"
				      ></b-form-radio-group>
							<input type="text" class="form-control ml-2" placeholder="No. NPWP">
						</div>
					</b-col>
			  </b-row>

				<!-- SITU / Ket. Domisili -->
				<b-row class="mb-2">
			    <b-col class="col-4">
						<span>SITU / Ket. Domisili</span>
					</b-col>
			    <b-col>
						<div class="input-group">
							: <b-form-radio-group
								class="ml-2"
				        v-model="selected_situ"
				        :options="options_ada_tidakada"
				      ></b-form-radio-group>
						</div>
					</b-col>
			  </b-row>

				<!-- Anggaran Dasar -->
				<b-row class="mb-2">
			    <b-col class="col-4">
						<span>Anggaran Dasar</span>
					</b-col>
			    <b-col>
						<div class="input-group">
							: <b-form-radio-group
								class="ml-2"
				        v-model="selected_anggaran_dasar"
				        :options="options_ada_tidakada"
				      ></b-form-radio-group>
						</div>
					</b-col>
			  </b-row>

				<!-- Anggaran Rumah Tangga -->
				<b-row class="mb-2">
			    <b-col class="col-4">
						<span>Anggaran Rumah Tangga</span>
					</b-col>
			    <b-col>
						<div class="input-group">
							: <b-form-radio-group
								class="ml-2"
				        v-model="selected_art"
				        :options="options_ada_tidakada"
				      ></b-form-radio-group>
						</div>
					</b-col>
			  </b-row>

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
					</b-col>
			  </b-row>

				<!-- SOP Logistik / SDM -->
				<b-row class="mb-2">
			    <b-col class="col-4">
						<span>SOP Logistik / SDM</span>
					</b-col>
			    <b-col>
						<div class="input-group">
							: <b-form-radio-group
								class="ml-2"
				        v-model="selected_sop_logistik"
				        :options="options_ada_tidakada"
				      ></b-form-radio-group>
						</div>
					</b-col>
			  </b-row>

				<!-- Status Kantor -->
				<b-row class="mb-2">
			    <b-col class="col-4">
						<span>Status Kantor</span>
					</b-col>
			    <b-col>
						<div class="input-group">
							: <b-form-radio-group
								class="ml-2"
				        v-model="selected_status_kantor"
				        :options="options_status_kantor"
				      ></b-form-radio-group>
						</div>
					</b-col>
			  </b-row>

				<br>
				<span class="mt-5">Susunan Pemilik Serta Komisaris dan Direktur/Pengelolaan (Bila Ada) :</span>
				<br>

				<b-table striped hover sticky-header :items="items" :fields="fields" class="bg-white">
					<!-- A custom formatted header cell for field 'name' -->
		      <template v-slot:head()="data">
		        <span class="table-header">{{ data.label }}</span>
		      </template>

					<!-- A custom formatted header cell for field 'action' -->
		      <template v-slot:head(action)="data">
						<button class="btn btn-add">
							<font-awesome-icon icon="plus" />
						</button>
		      </template>

					<!-- Optional default data cell scoped slot -->
					<template v-slot:cell(action)="data">
						<button class="btn btn-delete">
							<font-awesome-icon icon="times" />
						</button>
						<!-- <i>{{ data.value }} {{ data.index }}</i> -->
					</template>
				</b-table>

			</b-col>
			<b-col cols="12">
				<div class="mt-3">
					<div class="column-right">
						<button @click.prevent="gotoPage('/proposal-tahap-2')" class="btn non-next mr-2 pl-3 pr-3">Pervious</button>
						<button @click.prevent="gotoPage('/proposal-tahap-4')" class="btn next mr-2 pl-3 pr-3">Next</button>
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
  name: 'ui-proposal-tahap-3-content',
	data() {
    return {
			selected_badan_hukum: 'first',
			options_badan_hukum: [
				{ text: 'Perorangan', value: 'first' },
				{ text: 'PT', value: 'second' },
				{ text: 'CV', value: 'third'},
				{ text: 'Lainnya', value: 'fourth' }
			],
			selected_izin_usaha: '',
			selected_tdp: '',
			selected_npwp: '',
			selected_situ: '',
			selected_anggaran_dasar: '',
			selected_art: '',
			selected_sop_usaha: '',
			selected_sop_pengelolaan_kas: '',
			selected_sop_logistik: '',
			options_ada_tidakada: [
				{ text: 'Ada', value: 'first' },
				{ text: 'Tidak Ada', value: 'second' },
			],
			selected_status_kantor: '',
			options_status_kantor: [
				{ text: 'Sewa', value: 'first' },
				{ text: 'Pinjam', value: 'second' },
				{ text: 'Milik Sendiri', value: 'second' },
			],

			// Note 'isActive' is left out and will not appear in the rendered table
			fields: [
				{
					key: 'jabatan',
					label: 'Jabatan',
					sortable: true,
					thStyle: { verticalAlign: 'middle', textAlign:"center" }
					// Variant applies to the whole column, including the header and footer
					// variant: 'danger'
				},
				{
					key: 'nama',
					label: 'Nama',
					sortable: true,
					thStyle: { verticalAlign: 'middle', textAlign:"center" }
					// Variant applies to the whole column, including the header and footer
					// variant: 'danger'
				},
				{
					key: 'modal',
					label: 'Kepemilikan Modal (%)',
					sortable: true,
					thStyle: { verticalAlign: 'middle', textAlign:"center" }
					// Variant applies to the whole column, including the header and footer
					// variant: 'danger'
				},
				{
					key: 'telepon',
					label: 'Telp/HP',
					sortable: true,
					thStyle: { verticalAlign: 'middle', textAlign:"center" }
					// Variant applies to the whole column, including the header and footer
					// variant: 'danger'
				},
				{
					key: 'tahun',
					label: 'Peng. Usaha (Thn)',
					sortable: true,
					thStyle: { verticalAlign: 'middle', textAlign:"center" }
					// Variant applies to the whole column, including the header and footer
					// variant: 'danger'
				},
				{
					key: 'action',
					label: 'Action',
					sortable: false,
					// Variant applies to the whole column, including the header and footer
					// variant: 'danger'
				},
			],
			items: function(){
				let items = []
				for (let i = 0; i < 10; i++) {
					const n = Math.round(Math.random()*1000);
					const element = items.push({
						// isActive: true,
						jabatan: i,
						nama: 'nama '+i,
						modal: 'modal '+i,
						telepon: 'telepon '+i,
						tahun: 'tahun '+i,
						action: '<icon>',
					});
				}

				return items
			}(),
    }
  }
});
</script>
