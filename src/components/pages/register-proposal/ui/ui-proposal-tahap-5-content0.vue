<style scoped>


.subtitle {
	font-family: Montserrat_Bold;
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;

	color: #555555;
}

.subtitle-point {
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
	font-family: Montserrat_Medium;
	font-style: normal;
	font-weight: 500;
	font-size: 15px;
	line-height: 18px;

	color: #555555;

	display: contents;
}

button {
	border-radius: 10px;
	border-width: 0px;

	font-family: Montserrat_Light;
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	text-align: center;

	color: #ffffff;
}

button:hover {
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
	float: right;
	color: red !important;
}

/* #table-peningkatan-diharapkan th {
	vertical-align: middle;
} */

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

</style>

<template>
<fragment>
	<form @submit.prevent="">
		<b-row class="mb-2 section p-3">
			<b-col class="p-0" cols="12">
				<h3 class="subtitle mb-3">Pinjaman</h3>

				<h3 class="subtitle-point mb-3">1.1 PINJAMAN DANA BERGULIR YANG DIAJUKAN SEBESAR :</h3>

				<div class="ml-3">

					<!-- PINJAMAN DANA BERGULIR YANG DIAJUKAN SEBESAR -->
					<b-row class="mb-2">
				    <b-col class="col-12">
							<div class="input-group mb-1">
								<span v-middle>Rp. </span>
							  <input v-model="database.payload.payload_pinjaman_diajukan" type="text" class="form-control ml-2 mr-2 col-3" placeholder="">
								<span> Bulan</span>
							</div>
							<span>Terbilang :</span>
							<div class="input-group mt-4  mb-1">
								<span>dengan Jangka Waktu Pinjaman Selama :</span>
							  <input v-model="database.payload.payload_jangka_waktu" type="text" class="form-control ml-2 mr-2 col-3" placeholder="">
								<span>Bulan</span>
							</div>
							<span>Akan digunakan untuk Peningkatan Usaha dengan Rincian Kebutuhan :</span>
						</b-col>
				  </b-row>

					<!-- MODAL KERJA -->
					<b-row class="mb-2">
				    <b-col class="col-4">
							<span v-mons-bold >A. MODAL KERJA</span>
						</b-col>
				    <b-col>
							<div class="input-group">
							: <span> Rp. </span>
							<input v-model="database.payload.payload_modal_kerja" type="text" class="form-control col-5 ml-2" placeholder="">
							</div>
						</b-col>
				  </b-row>

					<!-- INVESTASI UNTUK -->
					<b-row class="mb-2">
				    <b-col class="col-4">
							<span v-mons-bold >B. INVESTASI UNTUK</span>
						</b-col>
				  </b-row>

					<div class="ml-4">

						<b-row class="mb-2" v-for="(list, index) in database.payload.payload_list_investasi">
					    <b-col class="col-4">
								<span>- {{ list.label }}</span>
							</b-col>
					    <b-col class="pl-0">
								<div class="input-group">
								: <span> Rp. </span>
								<input v-model="list.value" type="text" class="form-control col-5 ml-2" placeholder="">
								</div>
							</b-col>
					  </b-row>

						<!-- - Peralatan -->
						<b-row class="mb-2">
					    <b-col class="col-4">
								<span>- Peralatan</span>
							</b-col>
					    <b-col class="pl-0">
								<div class="input-group">
								: <span> Rp. </span>
								<input v-model="database.payload.payload_investasi_peralatan" type="text" class="form-control col-5 ml-2" placeholder="">
								</div>
							</b-col>
					  </b-row>

						<!-- - Mesin -->
						<b-row class="mb-2">
					    <b-col class="col-4">
								<span>- Mesin</span>
							</b-col>
					    <b-col class="pl-0">
								<div class="input-group">
								: <span> Rp. </span>
								<input v-model="database.payload.payload_investasi_mesin" type="text" class="form-control col-5 ml-2" placeholder="">
								</div>
							</b-col>
					  </b-row>

						<!-- - Inventaris -->
						<b-row class="mb-2">
					    <b-col class="col-4">
								<span>- Inventaris</span>
							</b-col>
					    <b-col class="pl-0">
								<div class="input-group">
								: <span> Rp. </span>
								<input v-model="database.payload.payload_investasi_inventaris" type="text" class="form-control col-5 ml-2" placeholder="">
								</div>
							</b-col>
					  </b-row>

						<!-- - Jumlah -->
						<b-row class="mb-2">
					    <b-col class="col-4">
								<span>- Jumlah</span>
							</b-col>
					    <b-col class="pl-0">
								<div class="input-group">
								: <span> Rp. </span>
								<input v-model="database.payload.payload_investasi_jumlah" type="text" class="form-control col-5 ml-2" placeholder="">
								</div>
							</b-col>
					  </b-row>

						<!-- - Jumlah yang tersedia -->
						<b-row class="mb-2">
					    <b-col class="col-4">
								<span>- Jumlah yang tersedia</span>
							</b-col>
					    <b-col class="pl-0">
								<div class="input-group">
								: <span> Rp. </span>
								<input v-model="database.payload.payload_investasi_jumlah_tersedia" type="text" class="form-control col-5 ml-2" placeholder="">
								</div>
							</b-col>
					  </b-row>

						<!-- - Kekurangan Dana -->
						<b-row class="mb-2">
					    <b-col class="col-4">
								<span>- Kekurangan Dana</span>
							</b-col>
					    <b-col class="pl-0">
								<div class="input-group">
								: <span> Rp. </span>
								<input v-model="database.payload.payload_investasi_kekurangan_dana" type="text" class="form-control col-5 ml-2" placeholder="">
								</div>
							</b-col>
					  </b-row>


					</div>


					<!-- PEMANFAATAN MODAL KERJA -->
					<b-row class="mb-2">
						<b-col class="col-4">
							<span v-mons-bold >C. PEMANFAATAN MODAL KERJA</span>
						</b-col>
					</b-row>

					<div class="ml-4">

						<!-- - Pembelian Bahan Baku -->
						<b-row class="mb-2">
							<b-col class="col-4">
								<span>- Pembelian Bahan Baku</span>
							</b-col>
							<b-col class="pl-0">
								<div class="input-group">
								: <span> Rp. </span>
								<input type="text" class="form-control col-5 ml-2" placeholder="">
								</div>
							</b-col>
						</b-row>

						<!-- - Biaya Proses Produksi -->
						<b-row class="mb-2">
							<b-col class="col-4">
								<span>- Biaya Proses Produksi</span>
							</b-col>
							<b-col class="pl-0">
								<div class="input-group">
								: <span> Rp. </span>
								<input type="text" class="form-control col-5 ml-2" placeholder="">
								</div>
							</b-col>
						</b-row>

						<!-- - Biaya Tenaga Kerja -->
						<b-row class="mb-2">
							<b-col class="col-4">
								<span>- Biaya Tenaga Kerja</span>
							</b-col>
							<b-col class="pl-0">
								<div class="input-group">
								: <span> Rp. </span>
								<input type="text" class="form-control col-5 ml-2" placeholder="">
								</div>
							</b-col>
						</b-row>

					</div>

					<!-- PENINGKATAN YANG DIHARAPKAN -->
					<b-row class="mb-2">
				    <b-col class="col">
							<span v-mons-bold >D. PENINGKATAN YANG DIHARAPKAN</span>
						</b-col>
				  </b-row>

					<div class="ml-4">

						<TablePeningkatanDiharapkan @onBubbleEvent="database.payload.payload_items_peningkatan_diharapkan = $event" :items="database.payload.payload_items_peningkatan_diharapkan" />

						<!-- <b-table-simple id="table-peningkatan-diharapkan" class="table b-table table-striped table-hover bg-white table-bordered">
							<b-thead head-variant="" class="bg-white table-header text-center">
								<b-tr>
									<b-th colspan="1" rowspan="2">Uraian</b-th>
									<b-th colspan="1" rowspan="2">Sekarang (Rp.)</b-th>
									<b-th colspan="1" rowspan="2">Yang Diharapkan (Rp.)</b-th>
									<b-th colspan="2">Peningkatan</b-th>
								</b-tr>
								<b-tr>
									<b-th colspan="1">(Rp)</b-th>
									<b-th colspan="1">%</b-th>
								</b-tr>
							</b-thead>
							<b-tbody>
								<b-tr v-for="(item, index) in payload_items_peningkatan_diharapkan" :key="index">
									<b-td>{{ item.deskripsi }}</b-td>
									<b-td class="text-center">
										<div class="input-group">
											<span v-middle>Rp. </span>
											<input @input="onCalculateByNominal" :id="'peningkatan_diharapkan_nominal_sekarang'+index" :value="item.nominal_sekarang" type="number" class="form-control ml-2" placeholder="">
										</div>
									</b-td>
									<b-td class="text-center">
										<div class="input-group">
											<span v-middle>Rp. </span>
											<input  @input="onCalculateByNominal" :id="'peningkatan_diharapkan_nominal_diharapkan'+index" :value="item.nominal_diharapkan" type="number" class="form-control ml-2" placeholder="">
										</div>
									</b-td>
									<b-td width="15%">{{ item.nominal_peningkatan }}</b-td>
									<b-td class="text-center" width="15%">
										<div class="input-group">
											<input @input="onCalculateByPercent" :id="'peningkatan_diharapkan_persentase_peningkatan'+index" :value="item.persentase_peningkatan" type="number" class="form-control mr-2" placeholder="">
											<span v-middle>%</span>
										</div>
									</b-td>
								</b-tr>
							</b-tbody>
						</b-table-simple> -->


				</div>

				</div>

			</div>

			<h3 class="subtitle-point mb-3 mt-5">1.2 PINJAMAN DANA BERGULIR YANG DIAJUKAN SEBESAR :</h3>

			<div class="ml-3">

				<b-row class="mb-2">
					<b-col>
						<span>Data Pinjaman Lainnya yang Telah/Masih Berjalan</span>
					</b-col>
				</b-row>

				<b-table striped hover sticky-header :items="database.payload.payload_items_data_pinjaman" :fields="database.reference.reference_fields_data_pinjaman" class="bg-white">
					<template v-slot:head()="data">
						<span class="table-header">{{ data.label }}</span>
					</template>

					<template v-slot:head(action)="data">
						<button @click="$bvModal.show('ui-proposal-tahap-4-content-perkembangan-penjualan-modal')" class="btn btn-add">
							<font-awesome-icon icon="plus" />
						</button>
					</template>

					<template v-slot:cell(action)="data">
						<div class="text-center">
							<button class="btn btn-delete">
								<font-awesome-icon icon="times" />
							</button>
						</div>
					</template>
				</b-table>


			</div>

			<h3 class="subtitle-point mb-3 mt-5">1.3 AGUNAN / JAMINAN</h3>

			<div class="ml-3">

				<b-table striped hover sticky-header :items="database.payload.payload_items_anggunan" :fields="database.reference.reference_fields_anggunan" class="bg-white">
					<template v-slot:head()="data">
						<span class="table-header">{{ data.label }}</span>
					</template>

					<template v-slot:head(action)="data">
							<button @click="$bvModal.show('ui-proposal-tahap-4-content-perkembangan-penjualan-modal')" class="btn btn-add">
								<font-awesome-icon icon="plus" />
							</button>
					</template>

					<template v-slot:cell(action)="data">
						<div class="text-center">
							<button class="btn btn-delete">
								<font-awesome-icon icon="times" />
							</button>
						</div>
					</template>
				</b-table>


			</div>



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

<script>

import TablePeningkatanDiharapkan from "./ui-proposal-tahap-5-content-peningkatan-diharapkan"

export default {
  name: 'ui-proposal-tahap-5-content',
	components: {
		TablePeningkatanDiharapkan
	},
	data() {
    return {
			database: {
					payload: {
						payload_list_investasi: [
							{
								label:"Peralatan",
								value:null,
							},
							{
								label:"Mesin",
								value:null,
							},
							{
								label:"Inventaris",
								value:null,
							},
							{
								label:"Jumlah",
								value:null,
							},
							{
								label:"Jumlah yang tersedia",
								value:null,
							},
							{
								label:"Kekurangan Dana",
								value:null,
							},
						],
						payload_items_data_pinjaman: function(){
							let items = []
							for (let i = 0; i < 2; i++) {
								const n = Math.round(Math.random()*1000);
								const element = items.push({
									// isActive: true,
									kreditur: 'kreditur '+i,
									pencairan: 'pencairan '+i,
									nominal: 'nominal '+i,
									bunga: 'bunga '+i,
									jatuh_tempo: 'jatuh_tempo '+i,
									action: '<action>',
								});
							}

							return items
						}(),
						payload_items_anggunan: function(){
							let items = []
							for (let i = 0; i < 2; i++) {
								const n = Math.round(Math.random()*1000);
								const element = items.push({
									// isActive: true,
									jenis_barang: 'jenis_barang '+i,
									bukti_kepemilikan: 'bukti_kepemilikan '+i,
									perkiraan_nilai: 'perkiraan_nilai '+i,
									keterangan: 'keterangan '+i,
									action: '<action>',
								});
							}

							return items
						}(),
						payload_items_peningkatan_diharapkan:[
							{
								deskripsi: "Produksi",
								nominal_sekarang: 10000,
								nominal_diharapkan: 0,
								nominal_peningkatan: 0,
								persentase_peningkatan: 0,
							},
							{
								deskripsi: "Volume Usaha",
								nominal_sekarang: 10000,
								nominal_diharapkan: 0,
								nominal_peningkatan: 0,
								persentase_peningkatan: 0,
							},
							{
								deskripsi: "Pendapatan",
								nominal_sekarang: 10000,
								nominal_diharapkan: 0,
								nominal_peningkatan: 0,
								persentase_peningkatan: 0,
							},
						],
					},
					reference: {
						reference_fields_data_pinjaman: [
							{
								key: 'kreditur',
								label: 'Kreditur/Pemberi Pinj.',
								sortable: true,
								thStyle: { verticalAlign: 'middle', textAlign:"center" }
							},
							{
								key: 'pencairan',
								label: 'Bulan/Tahun Cair',
								sortable: true,
								thStyle: { verticalAlign: 'middle', textAlign:"center" }
							},
							{
								key: 'nominal',
								label: 'Nilai (Rp.)',
								sortable: true,
								thStyle: { verticalAlign: 'middle', textAlign:"center" }
							},
							{
								key: 'bunga',
								label: 'Bunga/Thn(%) Flat/Menurun',
								sortable: true,
								thStyle: { verticalAlign: 'middle', textAlign:"center" }
							},
							{
								key: 'jatuh_tempo',
								label: 'Jangka Waktu Pinjaman (Bulan)',
								sortable: true,
								thStyle: { verticalAlign: 'middle', textAlign:"center" }
							},
							{
								key: 'action',
								label: 'Action',
								sortable: false,
								thStyle: { verticalAlign: 'middle', textAlign:"center" }
							},
						],
						reference_fields_anggunan: [
							{
								key: 'jenis_barang',
								label: 'Jenis Barang',
								sortable: true,
								thStyle: { verticalAlign: 'middle', textAlign:"center" }
							},
							{
								key: 'bukti_kepemilikan',
								label: 'Bukti Kepemilikan (Tipe/Merk/No. Polisi/Ukuran/Letak)',
								sortable: true,
								thStyle: { verticalAlign: 'middle', textAlign:"center" }
							},
							{
								key: 'perkiraan_nilai',
								label: 'Perkiraan Nilai',
								sortable: true,
								thStyle: { verticalAlign: 'middle', textAlign:"center" }
							},
							{
								key: 'keterangan',
								label: 'Keterangan',
								sortable: true,
								thStyle: { verticalAlign: 'middle', textAlign:"center" }
							},
							{
								key: 'action',
								label: 'Action',
								sortable: false,
								thStyle: { verticalAlign: 'middle', textAlign:"center" }
							},
						],
					}
			},
    }
  },
	watch: {
		"payload_items_peningkatan_diharapkan": {
			deep: true,
			immediate: false,
			handler(newVal,oldVal) {
				// this.calculateNominal()
				console.log(newVal,oldVal)
			}
		}
	},
}
</script>
