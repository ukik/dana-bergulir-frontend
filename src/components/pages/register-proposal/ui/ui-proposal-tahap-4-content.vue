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

input, select, textarea {
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

/* small {
	float: left;
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

.table-header input {
	font-family: Montserrat_Medium;
	font-size: 12px;
}

.b-table-sticky-header {
	border: 1px solid #dee2e6;
}
</style>

<template>

<fragment>
	<b-modal id="ui-proposal-tahap-4-content-produk-dijual-modal" size="lg" hide-footer>
    <template v-slot:modal-title>
			<span class="subtitle">Produk dan Sasaran Pasar</span>
    </template>

		<ui-proposal-tahap-4-content-produk-dijual-modal @onBubbleEvent="onAddPayloadItemsProdukDijual" />
  </b-modal>

	<b-modal id="ui-proposal-tahap-4-content-kebutuhan-bahan-baku-modal" size="lg" hide-footer>
    <template v-slot:modal-title>
			<span class="subtitle">Perkembangan Penjualan Dua Tahun</span>
    </template>

		<ui-proposal-tahap-4-content-kebutuhan-bahan-baku-modal @onBubbleEvent="onAddPayloadItemsKebutuhanBahanBaku" />
  </b-modal>


	<form ref="form" @submit.prevent="onNext"  @change="handleChange" @invalid.capture.prevent="handleInvalid">
		<b-row class="mb-2 section p-3"  v-proposal-review="$route">
			<b-col class="p-0" cols="12">
				<slot>
					<h3 class="subtitle mb-3">Analisa Bisnis</h3>
				</slot>

				<h3 class="subtitle-point mb-3">1.1 Aspek Pasar dan Keuangan</h3>

				<div class="ml-3">

					<!-- 1.1.1 Produk yang Dijual dan Sasaran Pasar -->
					<h3 class="subtitle-point mb-3">1.1.1 Produk yang Dijual dan Sasaran Pasar</h3>

					<div class="ml-4">
						<b-table show-empty :striped="false" hover bordered :sticky-header="false" :items="database.payload.payload_items_produk_dijual" :fields="database.reference.reference_fields_produk_dijual" class="bg-white">
				      <template v-slot:head()="data">
				        <span class="table-header">{{ data.label }}</span>
				      </template>

				      <template v-slot:head(action)="data">
								<div class="text-center">
									<div @click="onModalProposal('ui-proposal-tahap-4-content-produk-dijual-modal')" class="btn btn-add">
										<font-awesome-icon icon="plus" />
									</div>
								</div>
				      </template>

							<template v-slot:cell(action)="data">
								<div class="text-center">
									<div @click="onRemovePayloadItemsProdukDijual(data.index)" class="btn btn-delete">
										<font-awesome-icon icon="times" />
									</div>
								</div>
							</template>

							<template v-slot:empty="scope">
								<div class="text-center">
									<span class="text-danger">Wajib diisi</span>
								</div>
					    </template>
						</b-table>

						<div id="scroll-to-1" />
					</div>

					<!-- 1.1.2 Perhitungan Laba Rugi (3 Bulan Terakhir) -->
					<h3 class="subtitle-point mb-3 mt-5">1.1.2 Perhitungan Laba Rugi (3 Bulan Terakhir)</h3>

					<div class="ml-4">
						<b-table-simple class="table b-table table-hover bg-white table-bordered">
							<b-thead head-variant="" class="bg-white table-header">
								<b-tr >
									<b-th v-vmiddle style="width:30%;" colspan="1" rowspan="3">Deskripsi</b-th>
									<b-th colspan="1">Bulan 1</b-th>
									<b-th colspan="1">Bulan 2</b-th>
									<b-th colspan="1">Bulan 3</b-th>
								</b-tr>
								<b-tr>
									<b-th>
										<div class="input-group">
											<!-- Bulan: -->
											<input name="bulan_ke_1" id="bulan_ke_1" :disabled="propsDisabled" :required="true" maxlength="2" minlength="1" v-model="database.payload.payload_items_perhitungan_laba_rugi.bulan_ke_1" type="text" class="form-control ml-2 mr-2" placeholder="bulan">
											<!-- Tahun: -->
											<input name="tahun_ke_1" id="tahun_ke_1" :disabled="propsDisabled" :required="true" maxlength="4" minlength="1" v-model="database.payload.payload_items_perhitungan_laba_rugi.tahun_ke_1" type="text" class="form-control ml-2" placeholder="tahun">
										</div>
										<!-- Required -->
										<p v-if="fieldErrors.bulan_ke_1 && fieldErrors.tahun_ke_1" class="required-alert">wajib dilengkapi</p>
									</b-th>
									<b-th>
										<div class="input-group">
											<!-- Bulan: -->
											<input name="bulan_ke_2" id="bulan_ke_2" :disabled="propsDisabled" :required="true" maxlength="2" minlength="1" v-model="database.payload.payload_items_perhitungan_laba_rugi.bulan_ke_2" type="text" class="form-control ml-2 mr-2" placeholder="bulan">
											<!-- Tahun: -->
											<input name="tahun_ke_2" id="tahun_ke_2" :disabled="propsDisabled" :required="true" maxlength="4" minlength="1" v-model="database.payload.payload_items_perhitungan_laba_rugi.tahun_ke_2" type="text" class="form-control ml-2" placeholder="tahun">
										</div>
										<!-- Required -->
										<p v-if="fieldErrors.bulan_ke_2 && fieldErrors.tahun_ke_2" class="required-alert">wajib dilengkapi</p>
									</b-th>
									<b-th>
										<div class="input-group">
											<!-- Bulan: -->
											<input name="bulan_ke_3" id="bulan_ke_3" :disabled="propsDisabled" :required="true" maxlength="2" minlength="1" v-model="database.payload.payload_items_perhitungan_laba_rugi.bulan_ke_3" type="text" class="form-control ml-2 mr-2" placeholder="bulan">
											<!-- Tahun: -->
											<input name="tahun_ke_3" id="tahun_ke_3" :disabled="propsDisabled" :required="true" maxlength="4" minlength="1" v-model="database.payload.payload_items_perhitungan_laba_rugi.tahun_ke_3" type="text" class="form-control ml-2" placeholder="tahun">
										</div>
										<!-- Required -->
										<p v-if="fieldErrors.bulan_ke_3 && fieldErrors.tahun_ke_3" class="required-alert">wajib dilengkapi</p>
									</b-th>
								</b-tr>
							</b-thead>
							<b-tbody>
								<b-tr v-for="(item, index) in database.payload.payload_items_perhitungan_laba_rugi.payload" :key="index">
									<b-td :class="item.deskripsi_class">{{ item.deskripsi }}</b-td>
									<b-td>
										<input :name="'bulan1'+index" :id="'bulan1'+index" :disabled="propsDisabled" :required="true" v-model="item.bulan1" type="number" min="0" class="form-control" :placeholder="0 | currency">
										<!-- Required -->
										<p v-if="fieldErrors['bulan1'+index]" class="required-alert">wajib dilengkapi</p>
									</b-td>
									<b-td>
										<input :name="'bulan2'+index" :id="'bulan2'+index" :disabled="propsDisabled" :required="true" v-model="item.bulan2" type="number" min="0" class="form-control" :placeholder="0 | currency">
										<!-- Required -->
										<p v-if="fieldErrors['bulan2'+index]" class="required-alert">wajib dilengkapi</p>
									</b-td>
									<b-td>
										<input :name="'bulan3'+index" :id="'bulan3'+index" :disabled="propsDisabled" :required="true" v-model="item.bulan3" type="number" min="0" class="form-control" :placeholder="0 | currency">
										<!-- Required -->
										<p v-if="fieldErrors['bulan3'+index]" class="required-alert">wajib dilengkapi</p>
									</b-td>
								</b-tr>
							</b-tbody>
						</b-table-simple>
					</div>

					<!-- 1.1.3 Manajemen Keuangan Bisnis/Usaha -->
					<h3 class="subtitle-point mb-3 mt-5">1.1.3 Manajemen Keuangan Bisnis/Usaha</h3>

					<div class="ml-4">
						<!-- Pengelolaan Pendapatan Bersih dari Bisnis /Usaha -->
						<b-row class="mb-2">
							<b-col class="col-12">
								Pengelolaan Pendapatan Bersih dari Bisnis /Usaha
							</b-col>
						</b-row>

						<!-- A. Alokasi Penambahan Modal -->
						<b-row class="mb-2" v-for="(list, index) in database.payload.payload_list_manajemen_keuangan_usaha" :key="index">
							<b-col class="col-5">
								<span>{{ list.label }}</span>
							</b-col>
							<b-col>
								<div class="input-group">
									: <input :name="'payload_list_manajemen_keuangan_usaha'+index" :id="'payload_list_manajemen_keuangan_usaha'+index" :disabled="propsDisabled" :required="true" v-model="list.value" type="number" min="0" max="100" maxlength="3" minlength="1" class="form-control col-3 ml-2 mr-2" placeholder="0"> %
									<!-- Required -->
									<p v-if="fieldErrors['payload_list_manajemen_keuangan_usaha'+index]" class="required-alert">wajib dilengkapi (0 - 100)</p>
								</div>
							</b-col>
						</b-row>

					</div>

					<!-- Kendala Pemasaran -->
					<h3 class="subtitle-point mb-3 mt-5">1.1.4 Kendala Pemasaran</h3>

					<div class="ml-4">
						<b-row class="mb-2">
					    <b-col class="col-4">
								<span>Kendala Pemasaran (Diisi Bila Ada)</span>
							</b-col>
					    <b-col>
								<div class="input-group">
									: <b-form-checkbox
										class="ml-2" :disabled="propsDisabled" :required="true"
										name="kendala_pemesanan_status" id="kendala_pemesanan_status"
							      v-model="database.payload.payload_kendala_pemesanan.kendala_pemesanan_status"
							      value="true"
							    > Bila ada, sebutkan
							    </b-form-checkbox>
								</div>
								<!-- Required -->
								<p v-if="fieldErrors.kendala_pemesanan_status" class="required-alert">wajib dilengkapi</p>
								<div class="input-group" v-if="database.payload.payload_kendala_pemesanan.kendala_pemesanan_status">
								  <textarea name="kendala_pemesanan_deskripsi" id="kendala_pemesanan_deskripsi" :disabled="propsDisabled" :required="true" v-model="database.payload.payload_kendala_pemesanan.kendala_pemesanan_deskripsi" class="form-control ml-2" rows="3"></textarea>
								</div>
								<!-- Required -->
								<p v-if="fieldErrors.kendala_pemesanan_status" class="required-alert">wajib dilengkapi</p>
							</b-col>
					  </b-row>
					</div>

					<!-- 1.1.5 Manajemen Keuangan Keluarga / Pribadi -->
					<h3 class="subtitle-point mb-3 mt-5">1.1.5 Manajemen Keuangan Keluarga / Pribadi</h3>

					<div class="ml-4">
						<b-table-simple class="table b-table table-hover bg-white table-bordered">
							<b-thead head-variant="" class="bg-white table-header">
								<b-tr>
									<b-th colspan="1">Parameter (Ukuran)</b-th>
									<b-th colspan="1">Jumlah (Rp.)</b-th>
								</b-tr>
							</b-thead>
							<b-tbody>
								<b-tr v-for="(item, index) in database.payload.payload_items_manajemen_keuangan_pribadi" :key="index">
									<b-td :class="item.deskripsi_class">{{ item.deskripsi }}</b-td>
									<b-td class="text-center">
										<input :name="'payload_items_manajemen_keuangan_pribadi'+index" :id="'payload_items_manajemen_keuangan_pribadi'+index" :disabled="propsDisabled" :required="true" v-model="item.jumlah" type="text" class="form-control" :placeholder="0 | currency">

										<!-- Required -->
										<p v-if="fieldErrors['payload_items_manajemen_keuangan_pribadi'+index]" class="required-alert">wajib dilengkapi</p>
									</b-td>
								</b-tr>
							</b-tbody>
						</b-table-simple>
					</div>

				</div>

				<h3 class="subtitle-point mb-3 mt-5">1.2 Aspek Produksi</h3>

				<div class="ml-3">

					<h3 class="subtitle-point mb-3">1.2.1 Data Kebutuhan Bahan Baku / Barang Dagangan yang Digunakan</h3>

					<div class="ml-4">
						<b-table show-empty bordered :striped="false" hover :sticky-header="false" :items="database.payload.payload_items_kebutuhan_bahan_baku" :fields="database.reference.reference_fields_kebutuhan_bahan_baku" class="bg-white">
							<template v-slot:head()="data">
								<span class="table-header">{{ data.label }}</span>
							</template>

							<template v-slot:head(action)="data">
								<div @click="onModalProposal('ui-proposal-tahap-4-content-kebutuhan-bahan-baku-modal')" class="btn btn-add">
									<font-awesome-icon icon="plus" />
								</div>
							</template>

							<template v-slot:cell(action)="data">
								<div @click="onRemovePayloadItemsKebutuhanBahanBaku(data.index)" class="btn btn-delete">
									<font-awesome-icon icon="times" />
								</div>
							</template>

							<template v-slot:empty="scope">
								<div class="text-center">
									<span class="text-danger">Wajib diisi</span>
								</div>
					    </template>
						</b-table>

						<div id="scroll-to-2" />
					</div>

					<!-- Kendala Pemasaran -->
					<h3 class="subtitle-point mb-3 mt-5">1.2.1 Proses Produksi dan Kendala Produksi (Gambaran Singkat Proses Produksi dan Kendala Jika Ada)</h3>

					<div class="ml-4">
						<b-row class="mb-2">
					    <b-col class="col-4">
								<span>Proses dan Kendala Produksi</span>
							</b-col>
					    <b-col>
								<div class="input-group">
								:  <textarea name="payload_proses_produksi" id="payload_proses_produksi" :disabled="propsDisabled" :required="true" v-model="database.payload.payload_proses_produksi" class="form-control ml-2" rows="3"></textarea>
								</div>
								<!-- Required -->
								<p v-if="fieldErrors.payload_proses_produksi" class="required-alert">wajib dilengkapi</p>
							</b-col>
					  </b-row>
					</div>


				</div>

			</b-col>
			<b-col v-if="propsToolbar" cols="12">
				<div class="mt-3">
					<div class="column-right">
						<div id="button-prev" @click.prevent="gotoPage('/proposal-tahap-3')" class="btn mr-2 pl-3 pr-3">Pervious</div>
						<button type="submit" @click.prevent="onNext" class="btn next mr-2 pl-3 pr-3">Next</button>
						<button type="submit" @click.prevent="onFinish" class="btn non-next pl-3 pr-3">Finish</button>
					</div>
				</div>
			</b-col>
		</b-row>

	</form>
</fragment>
</template>

<script>

import { 	database } from '@/models/proposal/proposal-tahap-4'

export default {
	props: ["propsToolbar","propsDisabled"],
	watch: {
		database: {
			handler(val) {
				console.log(val.payload.payload_kendala_pemesanan.kendala_pemesanan_status)
				// Async this local data to vuex
				this.dispatch_proposal_tahap_4(val)
			},
			deep: true,
			immediate: false,
		},
	},
	created(){
		if(this.getters_proposal_tahap_4) {
			// Request from vuex
			this.database = this.getters_proposal_tahap_4
		}

		// Request from server to update vuex
		this.database = database
		// console.log(this.database)
		return
	},
	data() {
    return {
			database: {
				payload: {
					payload_proses_produksi:null,
					payload_kendala_pemesanan:null,
					payload_list_manajemen_keuangan_usaha:null,
					payload_items_perhitungan_laba_rugi:null,
					payload_items_manajemen_keuangan_pribadi:null,
					payload_items_produk_dijual:null,
					payload_items_kebutuhan_bahan_baku:null,
				},
				reference: {
					reference_fields_produk_dijual:null,
					reference_fields_kebutuhan_bahan_baku:null,
				}
			}
    }
  },
	methods: {
		onNext: _.debounce(function() {
			// console.log(this.$refs.form.reportValidity(), this.$refs.form.reportValidity())
			if (!this.$refs.form.checkValidity()) {
				// this.$refs.form.reportValidity() // popup required tooltip jika pakai handleInvalid maka ini tidak perlu
				this.onSnotifyProposalNext()
				return
			}
			if(this.database.payload.payload_items_produk_dijual.length <= 0) {
				this.$scrollTo("#scroll-to-1", 500, {
					offset: -450,
				})
				this.onSnotifyProposalNext()
				return
			}
			if(this.database.payload.payload_items_kebutuhan_bahan_baku.length <= 0) {
				this.$scrollTo("#scroll-to-2", 500, {
					offset: -450,
				})
				this.onSnotifyProposalNext()
				return
			}

			this.fieldErrors = {}
			this.gotoPage('/proposal-tahap-5')
		}, 250),
		onFinish: _.debounce(function() {
			// console.log(this.$refs.form.reportValidity(), this.$refs.form.reportValidity())
			if (!this.$refs.form.checkValidity()) {
				// this.$refs.form.reportValidity() // popup required tooltip jika pakai handleInvalid maka ini tidak perlu
				this.onSnotifyProposalNext()
				return
			}
			if(this.database.payload.payload_items_produk_dijual.length <= 0) {
				this.$scrollTo("#scroll-to-1", 500, {
					offset: -450,
				})
				this.onSnotifyProposalNext()
				return
			}
			if(this.database.payload.payload_items_kebutuhan_bahan_baku.length <= 0) {
				this.$scrollTo("#scroll-to-2", 500, {
					offset: -450,
				})
				this.onSnotifyProposalNext()
				return
			}

			this.fieldErrors = {}
			this.gotoPage('/proposal-tahap-7')
		}, 250),
		onAddPayloadItemsProdukDijual(val) {
			this.$scrollTo("#scroll-to-1", 500, {
				offset: -450,
			})
			this.database.payload.payload_items_produk_dijual.push(val)
		},
		onRemovePayloadItemsProdukDijual(current) {
			if(this.$route.name == "proposal-tahap-7") return

			this.$scrollTo("#scroll-to-1", 500, {
				offset: -450,
			})
			this.database.payload.payload_items_produk_dijual.splice(current, 1)
		},
		onAddPayloadItemsKebutuhanBahanBaku(val) {
			this.$scrollTo("#scroll-to-2", 500, {
				offset: -450,
			})
			this.database.payload.payload_items_kebutuhan_bahan_baku.push(val)
		},
		onRemovePayloadItemsKebutuhanBahanBaku(current) {
			if(this.$route.name == "proposal-tahap-7") return

			this.$scrollTo("#scroll-to-2", 500, {
				offset: -450,
			})
			this.database.payload.payload_items_kebutuhan_bahan_baku.splice(current, 1)
		},
	},
};
</script>
