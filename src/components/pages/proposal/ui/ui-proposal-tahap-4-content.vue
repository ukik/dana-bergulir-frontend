<style scoped>

.subtitle {
	font-family: Montserrat_Light;
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;

	color: #555555;
}

input, select, textarea {
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
	<b-modal id="ui-proposal-tahap-4-content-produk-sasaran-modal" hide-footer>
    <template v-slot:modal-title>
			<span class="subtitle">Produk dan Sasaran Pasar</span>
    </template>

		<ui-proposal-tahap-4-content-produk-sasaran-modal />
		<br>
		<button @click="$bvModal.hide('ui-proposal-tahap-4-content-produk-sasaran-modal')" class="btn m-auto col-5 btn-block btn-add">Tambahkan</button>
  </b-modal>

	<b-modal id="ui-proposal-tahap-4-content-perkembangan-penjualan-modal" hide-footer>
    <template v-slot:modal-title>
			<span class="subtitle">Perkembangan Penjualan Dua Tahun</span>
    </template>

		<ui-proposal-tahap-4-content-perkembangan-penjualan-modal />
		<br>
		<button @click="$bvModal.hide('ui-proposal-tahap-4-content-perkembangan-penjualan-modal')" class="btn m-auto col-5 btn-block btn-add">Tambahkan</button>
  </b-modal>


	<form @submit.prevent="">
		<b-row class="mb-2 section p-3">
			<b-col class="p-0" cols="12">
				<h3 class="subtitle mb-3">Aspek Produksi</h3>

				<br>
				<span class="mt-5">Produk yang dijual dan sasaran pasar yang dituju :</span>
				<br>

				<b-table striped hover sticky-header :items="items_produk" :fields="fields_produk" class="bg-white">
		      <template v-slot:head()="data">
		        <span class="table-header">{{ data.label }}</span>
		      </template>

		      <template v-slot:head(action)="data">
						<button @click="$bvModal.show('ui-proposal-tahap-4-content-produk-sasaran-modal')" class="btn btn-add">
							<font-awesome-icon icon="plus" />
						</button>
		      </template>

					<template v-slot:cell(action)="data">
						<button class="btn btn-delete">
							<font-awesome-icon icon="times" />
						</button>
					</template>
				</b-table>

				<br>
				<span class="mt-5">Perkembangan Penjualan Dua Tahun Terakhir :</span>
				<br>

				<b-table striped hover sticky-header :items="items_perkembangan_penjualan" :fields="fields_perkembangan_penjualan" class="bg-white">
					<template v-slot:head()="data">
						<span class="table-header">{{ data.label }}</span>
					</template>

					<template v-slot:head(action)="data">
						<button @click="$bvModal.show('ui-proposal-tahap-4-content-perkembangan-penjualan-modal')" class="btn btn-add">
							<font-awesome-icon icon="plus" />
						</button>
					</template>

					<template v-slot:cell(action)="data">
						<button class="btn btn-delete">
							<font-awesome-icon icon="times" />
						</button>
					</template>
				</b-table>

				<br>
				<span class="mt-5">Sistem Penjualan :</span>
				<br>

				<b-table striped hover sticky-header :items="items_sistem_penjualan" :fields="fields_sistem_penjualan" class="bg-white">
					<template v-slot:head()="data">
						<span class="table-header">{{ data.label }}</span>
					</template>

					<template v-slot:cell(status)="data">
					    <b-form-checkbox
					      :id="'checkbox-1_'+data.index"
					      v-model="status_sistem_penjualan"
					      :name="'checkbox-1_'+data.index"
					      :value="'accepted_'+data.index"
					      :unchecked-value="'not_accepted_'+data.index"
					    >
					    </b-form-checkbox>
					</template>

					<template v-slot:cell(pembayaran)="data">
						<!-- {{ selected_pembayaran }} -->

			      <!-- <select v-model="selected_pembayaran[data.index]" class="custom-select" required>
			        <option selected disabled :value="undefined">:: Pilih Pembayaran ::</option>
			        <option v-for="option in options_pembayaran" :value="option.item">{{ option.name }}</option>
			      </select> -->

						<b-form-select
				      v-model="selected_pembayaran[data.index]"
							:options="options_pembayaran"
				      class="col-12 ml-0"
				      value-field="item"
				      text-field="name"
				      disabled-field="notEnabled"
				    >
						<template v-slot:first>
			        <b-form-select-option :value="undefined" disabled>:: Pilih Pembayaran ::</b-form-select-option>
			      </template>

						</b-form-select>

					</template>

					<template v-slot:cell(komposisi)="data">
						<input type="text" class="form-control ml-2" placeholder="">
					</template>

					<template v-slot:cell(tempo_kredit)="data">
						<input type="text" class="form-control ml-2" placeholder="">
					</template>

				</b-table>

				<br>
				<span class="mt-5">Sistem Penjualan :</span>
				<br>
				<b-table striped hover sticky-header :items="items_persaingan" :fields="fields_persaingan" class="bg-white">
					<template v-slot:head()="data">
						<span class="table-header">{{ data.label }}</span>
					</template>

					<template v-slot:cell(status)="data">
					    <b-form-checkbox
					      :id="'checkbox_pesaing_1_'+data.index"
					      v-model="status_pesaing"
					      :name="'checkbox_pesaing_1_'+data.index"
					      :value="'accepted_'+data.index"
					      :unchecked-value="'not_accepted_'+data.index"
					    >
					    </b-form-checkbox>
					</template>

					<template v-slot:cell(keterangan)="data">
						<input type="text" class="form-control ml-2" placeholder="">
					</template>

				</b-table>



				<!-- Kendala Pemasaran (Diisi Bila Ada) -->
				<b-row class="mb-2">
			    <b-col class="col-4">
						<span>Kendala Pemasaran (Diisi Bila Ada)</span>
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
						<button @click.prevent="gotoPage('/proposal-tahap-3')" class="btn non-next mr-2 pl-3 pr-3">Pervious</button>
						<button @click.prevent="gotoPage('/proposal-tahap-5')" class="btn next mr-2 pl-3 pr-3">Next</button>
						<button class="btn non-next pl-3 pr-3">Finish</button>
					</div>
				</div>
			</b-col>
		</b-row>

	</form>
</fragment>
</template>

<script>

export default {
  name: 'ui-proposal-tahap-4-content',
	data() {
    return {
			checked: [],
			selected_pembayaran: [],
			options_pembayaran: [
				// { item: '', name: ':: Pilih Provinsi ::', notEnabled: true },
				{ item: 'A', name: 'Option A' },
				{ item: 'B', name: 'Option B' },
			],
			status_sistem_penjualan: [],
			status_pesaing: [],

			// Note 'isActive' is left out and will not appear in the rendered table
			fields_produk: [
				{
					key: 'produk',
					label: 'Produk yang DIjual',
					sortable: true,
					thStyle: { verticalAlign: 'middle', textAlign:"center" }
				},
				{
					key: 'pasar',
					label: 'Sasaran Pasar yang Di Tuju',
					sortable: true,
					thStyle: { verticalAlign: 'middle', textAlign:"center" }
				},
				{
					key: 'action',
					label: 'Action',
					sortable: false,
				},
			],
			items_produk: function(){
				let items = []
				for (let i = 0; i < 2; i++) {
					const n = Math.round(Math.random()*1000);
					const element = items.push({
						// isActive: true,
						pasar: 'pasar '+i,
						produk: 'produk '+i,
						action: '<button>',
					});
				}

				return items
			}(),

			fields_perkembangan_penjualan: [
				{
					key: 'tahun',
					label: 'Tahun',
					sortable: true,
					thStyle: { verticalAlign: 'middle', textAlign:"center" }
				},
				{
					key: 'satuan',
					label: 'Satuan',
					sortable: true,
					thStyle: { verticalAlign: 'middle', textAlign:"center" }
				},
				{
					key: 'volume',
					label: 'Volume',
					sortable: true,
					thStyle: { verticalAlign: 'middle', textAlign:"center" }
				},
				{
					key: 'nilai',
					label: 'Nilai',
					sortable: true,
					thStyle: { verticalAlign: 'middle', textAlign:"center" }
				},
				{
					key: 'action',
					label: 'Action',
					sortable: false,

				},
			],
			items_perkembangan_penjualan: function(){
				let items = []
				for (let i = 0; i < 2; i++) {
					const n = Math.round(Math.random()*1000);
					const element = items.push({
						// isActive: true,
						tahun: 'tahun '+i,
						satuan: 'satuan '+i,
						volume: 'volume '+i,
						nilai: 'nilai '+i,
						action: '<icon>',
					});
				}

				return items
			}(),

			fields_sistem_penjualan: [
				{
					key: 'sistem_penjualan',
					label: 'Sistem Penjualan',
					sortable: true,
					thStyle: { verticalAlign: 'middle', textAlign:"center" }
				},
				{
					key: 'status',
					label: 'Ya/Tdk',
					sortable: true,
					thStyle: { verticalAlign: 'middle', textAlign:"center" }
				},
				{
					key: 'pembayaran',
					label: 'Pembayaran (Tunai/Kredit)',
					sortable: true,
					thStyle: { verticalAlign: 'middle', textAlign:"center" }
				},
				{
					key: 'komposisi',
					label: 'Komposisi (%)',
					sortable: true,
					thStyle: { verticalAlign: 'middle', textAlign:"center" }
				},
				{
					key: 'tempo_kredit',
					label: 'Untuk Pemb Kredit, Jatuh Tempo (hari)',
					sortable: false,
				},
			],
			items_sistem_penjualan: function(){
				let items = []
				for (let i = 0; i < 2; i++) {
					const n = Math.round(Math.random()*1000);
					const element = items.push({
						// isActive: true,
						sistem_penjualan: 'sistem_penjualan '+i,
						status: '<checkbox>',
						pembayaran: '<select>',
						komposisi: '<input>',
						tempo_kredit: '<input>',
					});
				}

				return items
			}(),

			fields_persaingan: [
				{
					key: 'nama_pesaing',
					label: 'Pesaing Utama',
					sortable: true,
					thStyle: { verticalAlign: 'middle', textAlign:"center" }
				},
				{
					key: 'status',
					label: 'Ya/Tdk',
					sortable: true,
					thStyle: { verticalAlign: 'middle', textAlign:"center" }
				},
				{
					key: 'keterangan',
					label: 'Bentuk Persaingan (Harga, Kualitas, Design, dll)',
					sortable: true,
					thStyle: { verticalAlign: 'middle', textAlign:"center" }
				},
			],
			items_persaingan: function(){
				let items = []
				for (let i = 0; i < 4; i++) {
					const n = Math.round(Math.random()*1000);
					const element = items.push({
						nama_pesaing: 'nama_pesaing '+i,
						status: '<checkbox>',
						keterangan: '<input>',
					});
				}

				return items
			}(),
    }
  },
};
</script>
