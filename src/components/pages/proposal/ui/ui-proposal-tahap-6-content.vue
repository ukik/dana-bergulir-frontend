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

button:hover {
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
	float: right;
	color: red !important;
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


table, th {
	border: 1px solid #dee2e6;
}

.cell-total {
	background: #F0E9E9;
}

</style>

<template>
<fragment>
	<b-modal id="ui-proposal-tahap-6-content-pinjaman-modal" hide-footer>
    <template v-slot:modal-title>
			<span class="subtitle">Pinjaman</span>
    </template>

		<ui-proposal-tahap-6-content-pinjaman-modal />
		<br>
		<button @click="$bvModal.hide('ui-proposal-tahap-6-content-pinjaman-modal')" class="btn m-auto col-5 btn-block btn-add">Tambahkan</button>
  </b-modal>

	<form @submit.prevent="">
		<b-row class="mb-2 section p-3">
			<b-col class="p-0" cols="12">
				<h3 class="subtitle mb-3">Aspek Keuangan</h3>

				<!-- Modal Awal Pada Saat Berdiri -->
				<b-row class="mb-2">
			    <b-col class="col-4">
						<span>Modal Awal Pada Saat Berdiri</span>
					</b-col>
			    <b-col>
						<div class="input-group">
						: <input type="text" class="form-control ml-2" placeholder="">
						</div>
					</b-col>
			  </b-row>

				<!-- Pinjaman -->
				<b-row class="mb-2">
			    <b-col class="col-4">
						<span>Pinjaman</span>
					</b-col>
			    <b-col>
						<div class="input-group">
							: <b-form-radio-group
								class="ml-2"
				        v-model="selected_pinjaman"
				        :options="options_ada_tidakada"
				      ></b-form-radio-group>
						</div>
					</b-col>
			  </b-row>

				<span class="mt-5">*Bila Ada Pinjaman, Sebutkan Krediturnya (Pemberi Pinjaman) :</span>
				<br>

				<b-table striped hover sticky-header :items="items_pinjaman" :fields="fields_pinjaman" class="bg-white">
		      <template v-slot:head()="data">
		        <span class="table-header">{{ data.label }}</span>
		      </template>

		      <template v-slot:head(action)="data">
						<button @click="$bvModal.show('ui-proposal-tahap-6-content-pinjaman-modal')" class="btn btn-add">
							<font-awesome-icon icon="plus" />
						</button>
		      </template>

					<template v-slot:cell(action)="data">
						<button class="btn btn-delete">
							<font-awesome-icon icon="times" />
						</button>
					</template>
				</b-table>

				<!-- Arus Kas Tahun -->
				<b-row class="mb-2 mt-4">
			    <b-col class="col-4">
						<span>Arus Kas Tahun</span>
					</b-col>
			    <b-col>
						<div class="input-group">
						: <input type="date" class="form-control ml-2 mr-2 col-3" placeholder="">
						 s/d
						<input type="date" class="form-control ml-2 col-3" placeholder="">
						</div>
					</b-col>
			  </b-row>


				<b-table-simple class="table b-table table-striped table-hover bg-white">
			    <b-thead head-variant="" class="bg-white table-header">
			      <b-tr >
			        <b-th style="vertical-align: middle;" colspan="1" rowspan="2">Bulan</b-th>
			        <b-th colspan="3">Penerimaan Usaha</b-th>
			        <b-th colspan="3">Pengeluaran Usaha</b-th>
			      </b-tr>
			      <b-tr>
			        <b-th>Penjualan</b-th>
			        <b-th>Lain-lain</b-th>
			        <b-th>Total</b-th>
			        <b-th>Operasional</b-th>
			        <b-th>Non Operasional</b-th>
			        <b-th>Total</b-th>
			      </b-tr>
			    </b-thead>
					<b-tbody>
			      <b-tr v-for="(item, index) in items_month" :key="index">
							<b-td>{{ item | capitalize }}</b-td>
							<b-td><input type="text" class="form-control" placeholder=""></b-td>
							<b-td><input type="text" class="form-control" placeholder=""></b-td>
							<b-td class="cell-total">{{ 4235235 | currency }}</b-td>
							<b-td><input type="text" class="form-control" placeholder=""></b-td>
							<b-td><input type="text" class="form-control" placeholder=""></b-td>
							<b-td class="cell-total">{{ 8987 | currency }}</b-td>
			      </b-tr>
					</b-tbody>
				</b-table-simple>





			</b-col>
			<b-col cols="12">
				<div class="mt-3">
					<div class="column-right">
						<button @click.prevent="gotoPage('/proposal-tahap-5')" class="btn non-next mr-2 pl-3 pr-3">Pervious</button>
						<button @click.prevent="gotoPage('/proposal-tahap-7')" class="btn next mr-2 pl-3 pr-3">Next</button>
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
  name: 'ui-proposal-tahap-6-content',
	data() {
    return {
			items_month: [
				'januari', 'februari', 'maret', 'april', 'mei', 'juni', 'juli', 'agustus', 'september', 'oktober', 'november', 'desember'
			],

			selected_pinjaman:'',
			options_ada_tidakada: [
				{ text: 'Ada', value: 'first' },
				{ text: 'Tidak Ada', value: 'second' },
			],

			fields_pinjaman: [
				{
					key: 'kreditur',
					label: 'Kreditur',
					sortable: true,
					thStyle: { verticalAlign: 'middle', textAlign:"center" }
				},
				{
					key: 'tahun_cair',
					label: 'Tahun Cair',
					sortable: true,
					thStyle: { verticalAlign: 'middle', textAlign:"center" }
				},
				{
					key: 'plafond',
					label: 'Plafond',
					sortable: true,
					thStyle: { verticalAlign: 'middle', textAlign:"center" }
				},
				{
					key: 'outstanding',
					label: 'Outstanding per',
					sortable: true,
					thStyle: { verticalAlign: 'middle', textAlign:"center" }
				},
				{
					key: 'jaminan',
					label: 'Jaminan',
					sortable: true,
					thStyle: { verticalAlign: 'middle', textAlign:"center" }
				},
				{
					key: 'bunga_hasil',
					label: 'Bunga / Hasil',
					sortable: true,
					thStyle: { verticalAlign: 'middle', textAlign:"center" }
				},
				{
					key: 'jatuh_tempo',
					label: 'Jatuh Tempo',
					sortable: true,
					thStyle: { verticalAlign: 'middle', textAlign:"center" }
				},
				{
					key: 'action',
					label: 'Action',
					sortable: false,
				},
			],
			items_pinjaman: function(){
				let items = []
				for (let i = 0; i < 2; i++) {
					const n = Math.round(Math.random()*1000);
					const element = items.push({
						kreditur:'kreditur '+i,
						tahun_cair:'tahun_cair '+i,
						plafond:'plafond '+i,
						outstanding:'outstanding '+i,
						jaminan:'jaminan '+i,
						bunga_hasil: 'bunga_hasil '+i,
						jatuh_tempo: 'jatuh_tempo '+i,
						action: '<button>',
					});
				}

				return items
			}(),

    }
  }
});
</script>
