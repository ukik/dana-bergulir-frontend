<style scoped>

.subtitle {
	font-family: Montserrat_Medium;
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 24px;

	color: #555555;
}

.table-header {
	font-family: Montserrat_Bold;
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 15px;
	/* identical to box height */
	vertical-align: middle;

	text-align: center;
	color: #252323;
}


button {
	background: #58C0E7;
	border-radius: 10px;

	font-family: Montserrat_Light;
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	/* line-height: 18px; */
	text-align: center;

	color: #FFFFFF;
}

button:hover, .btn-edit:hover, .btn-delete:hover {
	color: #FFFFFF;
}

/* .input-search {
	width: 150px;
} */

input {
	background: #FFFFFF;
	border-radius: 10px !important;
	height: 30px;
}

/* .btn-search {
	width: 30px;
	height: 30px;
	border-radius: 15px;
	background: #58C0E7;
	text-align: center;
	color:white;
	font-size: 14px;
	padding-top:5px;
	cursor:pointer;
} */

.custom-select {
	width: 100px;
	border-radius: 10px !important;
	height: 40px;
}

.b-table-sticky-header {
	border: 1px solid #dee2e6;
}

.btn-delete {
	background: #C54F4F;
	color: #ffffff;
	border-radius: 5px;
	border: 0px;
	font-size: 14px;
}

.btn-edit {
	background: #dc920b;
	border-radius: 5px;
	color: #ffffff;
	border: 0px;
	font-size: 14px;
}

#master .width {
	width: 100px;
}

</style>

<template>
<fragment>

	<ui-monitoring-evaluasi-toolbar />

	<div class="mt-3 p-4 bg-white">
		<div class="input-group mb-3" >
			<div class="col-6 p-0">
				<span class="pt-2">Show</span>
				<select class="custom-select mr-2 col-3 ml-2" v-model="database.reference.reference_fields_perPage">
				  <option selected value="10">10</option>
				  <option value="20">20</option>
				  <option value="30">30</option>
					<option value="40">40</option>
				  <option value="50">50</option>
				</select>
				<span class="pt-2">Entries</span>
			</div>
			<div class="col text-right p-0">
				<div class="btn btn-success">Refresh</div>
			</div>
		</div>

		<b-table-simple id="master" class="table b-table table-hover bg-white table-bordered table-responsive">
			<b-thead head-variant="" class="bg-white table-header">
				<b-tr >
					<!-- <b-th v-vmiddle style="width:30%;" colspan="1" rowspan="3">Deskripsi</b-th> -->
					<b-th v-vmiddle colspan="1" rowspan="2">No.</b-th>
					<b-th v-vmiddle colspan="1" rowspan="2"><div class="width">No Pencairan</div></b-th>
					<b-th v-vmiddle colspan="1" rowspan="2"><div class="width">No. PAK</div></b-th>

					<b-th v-vmiddle colspan="1" rowspan="2"><div class="width">Jenis Usaha (Perorangan)</div></b-th>
					<b-th v-vmiddle colspan="1" rowspan="2"><div class="width">Alamat</div></b-th>
					<b-th v-vmiddle colspan="1" rowspan="2"><div class="width">Kecamatan</div></b-th>

					<b-th v-vmiddle colspan="3">Jangka Waktu</b-th>

					<b-th v-vmiddle colspan="1" rowspan="2"><div class="width">Plafond Kredit</div></b-th>
					<b-th v-vmiddle colspan="1" rowspan="2"><div class="width">Total Bunga Pinj.</div></b-th>

					<b-th v-vmiddle colspan="2">Rincian Angsuran per Bulan</b-th>

					<b-th v-vmiddle colspan="3">Total Angsuran Terbayar</b-th>
					<b-th v-vmiddle colspan="2">Setoran Bulan ini</b-th>

					<b-th v-vmiddle colspan="3">Sisa Angsuran yang Harus diBayar</b-th>
					<b-th v-vmiddle colspan="3">Denda</b-th>

					<b-th v-vmiddle colspan="1" rowspan="2">Sunting</b-th>
				</b-tr>
				<b-tr>
					<b-th v-vmiddle colspan="1" rowspan="1"><div class="width">Awal</div></b-th>
					<b-th v-vmiddle colspan="1" rowspan="1"><div class="width">Jatuh Tempo</div></b-th>
					<b-th v-vmiddle colspan="1" rowspan="1"><div class="width">Bln</div></b-th>

					<b-th v-vmiddle colspan="1" rowspan="1"><div class="width">Pokok</div></b-th>
					<b-th v-vmiddle colspan="1" rowspan="1"><div class="width">Bunga</div></b-th>

					<b-th v-vmiddle colspan="1" rowspan="1"><div class="width">Bln</div></b-th>
					<b-th v-vmiddle colspan="1" rowspan="1"><div class="width">Pokok</div></b-th>
					<b-th v-vmiddle colspan="1" rowspan="1"><div class="width">Bunga</div></b-th>

					<b-th v-vmiddle colspan="1" rowspan="1"><div class="width">Pokok</div></b-th>
					<b-th v-vmiddle colspan="1" rowspan="1"><div class="width">Bunga</div></b-th>

					<b-th v-vmiddle colspan="1" rowspan="1"><div class="width">Bln</div></b-th>
					<b-th v-vmiddle colspan="1" rowspan="1"><div class="width">Pokok</div></b-th>
					<b-th v-vmiddle colspan="1" rowspan="1"><div class="width">Bunga</div></b-th>

					<b-th v-vmiddle colspan="1" rowspan="1"><div class="width">Hari</div></b-th>
					<b-th v-vmiddle colspan="1" rowspan="1"><div class="width">Denda Terbayar</div></b-th>
					<b-th v-vmiddle colspan="1" rowspan="1"><div class="width">Denda Bulan Ini</div></b-th>
				</b-tr>
			</b-thead>
			<b-tbody>
				<b-tr v-for="(item, index) in database.payload.payload_items" :key="index">
					<b-td>{{ item.nomor }}</b-td>

					<b-td>{{ item.nomor_pencairan }}</b-td>

					<b-td>{{ item.nomor_pak }}</b-td>

					<b-td>{{ item.jenis_usaha }}</b-td>

					<b-td>{{ item.alamat }}</b-td>

					<b-td>{{ item.kecamatan }}</b-td>

					<b-td>{{ item.jangka_waktu_awal }}</b-td>

					<b-td>{{ item.jangka_jatuh_tempo }}</b-td>

					<b-td>{{ item.jangka_bulan }}</b-td>

					<b-td>{{ item.plafon_kredit }}</b-td>

					<b-td>{{ item.total_bunga }}</b-td>

					<b-td>{{ item.rincian_angsuran_pokok }}</b-td>

					<b-td>{{ item.rincian_angsuran_bunga }}</b-td>

					<b-td>{{ item.angsuran_terbayar_bulan }}</b-td>

					<b-td>{{ item.angsuran_terbayar_pokok }}</b-td>

					<b-td>{{ item.angsuran_terbayar_bunga }}</b-td>

					<b-td>{{ item.setoran_bulan_pokok }}</b-td>

					<b-td>{{ item.setoran_bulan_bunga }}</b-td>

					<b-td>{{ item.sisa_angsuran_bulan }}</b-td>

					<b-td>{{ item.sisa_angsuran_pokok }}</b-td>

					<b-td>{{ item.sisa_angsuran_bunga }}</b-td>

					<b-td>{{ item.denda_hari }}</b-td>

					<b-td>{{ item.denda_terbayar }}</b-td>

					<b-td>{{ item.denda_bulan_ini }}</b-td>

					<b-td>
						<div class="input-group justify-content-center">
							<div @click="onEdit(index)" class="btn btn-edit">
								<font-awesome-icon icon="pencil-alt" />
							</div>
						</div>
					</b-td>
				</b-tr>
			</b-tbody>
		</b-table-simple>


		<div class="row">
		    <div class="col-sm">
		      Showing 1 to 6 of 6 Entries
		    </div>
		    <div class="col-sm-4">
					<b-pagination
						v-model="database.reference.reference_fields_currentPage"
						:total-rows="rows"
						:per-page="database.reference.reference_fields_perPage"
						align="fill"
						size=""
						class=""
					></b-pagination>

		    </div>
		  </div>

	</div>


</fragment>
</template>

<script>

import { database } from '@/models/monitoring-evaluasi'

import UiMonitoringEvaluasiToolbar from './ui-monitoring-evaluasi-toolbar'

export default {
	components: {
		UiMonitoringEvaluasiToolbar
	},
	watch: {
		database: {
			handler(val) {
				console.log(val)
				// Async this local data to vuex
				this.dispatch_monitoring_evaluasi(val)
			},
			deep: true,
			immediate: false,
		}
	},
	created(){
		this.initDatabase()

		// Request from server to update vuex
		this.database = database
		// console.log(this.database)
		return
	},
	computed: {
    rows() {
      return this.database.payload.payload_items.length
    }
  },
	data() {
    return {
			database: {
				payload: {
					payload_items: null,
				},
				reference: {
					reference_fields_currentPage: null,
		      reference_fields_perPage: null,
					// Note 'isActive' is left out and will not appear in the rendered table
		      reference_fields: null,
				}
			},
    }
  },
	methods: {
		initDatabase(){
			// console.log(!this.getters_proposal_tahap_1)
			if(this.getters_monitoring_evaluasi) {
				// Request from vuex
				this.database = this.getters_monitoring_evaluasi
			}
		},
		onEdit(index) {
			// console.log(data)
			this.$router.push({
					name:'monitoring-evaluasi-edit',
					params: {
						id: index
					}
			 })
		},
		onDelete(index){
			const ipAPI = '//api.ipify.org'

			const vm = this

			this.$swal.fire({
			  title: 'Menghapus Data',
			  text: "Apakah Anda Yakin Ingin Menghapus Data Ini?",
			  icon: 'question',
			  showCancelButton: true,
			  confirmButtonColor: '#3085d6',
			  cancelButtonColor: '#d33',
			  confirmButtonText: 'Ya, hapus data!',
				cancelButtonText: 'Tidak',
				preConfirm: () => {

				vm.$axios.get(ipAPI)
				  .then(function (response) {
				    // handle success
				    console.log(response);
						vm.dispatch_monitoring_evaluasi_delete_payload_items({ index })
				  })
				  .catch(function (error) {
				    // handle error
				    console.log(error);

						vm.$swal.fire(
							'Gagal!',
							'Terjadi masalah, penghapusan data tidak berhasil',
							'error'
						)
				  })
				  .then(function () {
				    // always executed
				  });
			  }
			}).then((result) => {
			  if (result.value) {
			    vm.$swal.fire(
			      'Sukses!',
			      'Data telah berhasil dihapus ',
			      'success'
			    )
			  }
			})
		}
	}
};
</script>
