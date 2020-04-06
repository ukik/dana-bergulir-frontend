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
	display: table;
	text-align: center;
	color: #252323;
}


button {

	border-radius: 10px;

	font-family: Montserrat_Light;
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
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

.custom-select {
	width: 100px;
	border-radius: 10px !important;
	height: 40px;
}

.b-table-sticky-header {
	border: 1px solid #dee2e6;
}

</style>

<template>
<fragment>

	<ui-toolbar />

	<div class="mt-3 p-4 bg-white">

		<!-- <b-col class="p-0" cols="12"> -->

				<b-table id="master" show-empty responsive hover :items="database.payload.payload_items" :fields="database.reference.reference_fields">
						<template v-slot:head()="data">
								<div class="table-header p-2 text-center" style="width:125px;">
										<span class="">{{ data.label }}</span>
								</div>
						</template>
						<template v-slot:head(pokok)="data">
								<div class="table-header p-2 text-center" style="width:125px;">
										<span class="">{{ data.label }}</span>
								</div>
						</template>
						<template v-slot:cell(pokok)="data">
								<a>{{ data.value | currency }}</a>
						</template>

				</b-table>


		<!-- </b-col> -->

		<div class="row">
	    <div class="col">
				<div class="column-right">
						<button type="reset" @click.prevent="$router.back()" class="btn btn-danger danger pl-3 pr-3">Kembali</button>
				</div>
	    </div>
	  </div>

	</div>

</fragment>
</template>

<script>

import { database_detail } from '@/models/penagihan-piutang'

import UiToolbar from './ui-penagihan-piutang-detail-toolbar'

export default {
	components: {
		UiToolbar
	},
  created() {
      this.initDatabase()

      // Request from server to update vuex
      this.database = database_detail
      console.log(this.database)
      return
  },
  data() {
      return {
          database: {
              payload: {
                  payload_items: null,
              },
              reference: {
                  reference_fields: null,
              }
          },
      }
  },
  methods: {
      initDatabase() {
          // console.log(!this.getters_proposal_tahap_1)
          if (this.getters_penagihan_piutang) {
              // Request from vuex
              this.database = this.getters_penagihan_piutang
          }
      },
      onRenderData() {

					let items = []

					const jumlah_hari = 16 // dynamic
					const jatuh_tempo = "19/12/2018" // dynamic
					let pokok = 60000000 // dynamic
					const angsuran_pokok = 1666667 // dynamic

					const bunga = 400000

					items.push({
						nomor: null,
						jatuh_tempo: localDateFormate(stringToDate(jatuh_tempo)),
						jumlah_hari: null,
						pokok: pokok,
						angsuran_pokok: null,
						angsuran_bunga: null,
						jumlah_angsuran: null,
						baki_debet: pokok,

						// PINK
						tanggal_pembayaran: null,
						pokok: null,
						akumulasi_angsuran_pokok: null,
						outstanding_pokok: null,

						// BLUE
						bunga:null,
						akumulasi_bunga:null,
						pokok:null,

						// ORANGE
						tanggal_bayar_denda:null,
						nominal_denda:null,
						outstanding_denda:null,
					});

					for (let i = 0; i < jumlah_hari; i++) {

						items.push({
							nomor: i + 1,
							jatuh_tempo: localDateFormate(nextMonth(jatuh_tempo, i)),
							jumlah_hari: daysInMonth(jatuh_tempo, i),
							pokok: pokok,
							angsuran_pokok: angsuran_pokok,
							angsuran_bunga: 1000,
							jumlah_angsuran: pokok + 1000,
							baki_debet: pokok - angsuran_pokok,

							// PINK
							tanggal_pembayaran: "by input",
							pokok: pokok,
							akumulasi_angsuran_pokok: angsuran_pokok * (i + 1),
							outstanding_pokok: "???",

							// BLUE
							bunga:bunga,
							akumulasi_bunga:bunga * (i + 1),
							pokok:pokok,

							// ORANGE
							tanggal_bayar_denda:"by input",
							nominal_denda:"by input",
							outstanding_denda:"???",
						});

						pokok -= angsuran_pokok
					}

          this.database.payload.payload_items = items
      }
  }
};

</script>
