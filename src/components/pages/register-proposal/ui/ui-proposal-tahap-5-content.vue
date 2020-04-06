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
	<b-modal id="ui-proposal-tahap-5-content-data-pinjaman-modal" size="lg" hide-footer>
    <template v-slot:modal-title>
			<span class="subtitle">Pinjaman Lain yang Sedang Berjalan</span>
    </template>

		<ui-proposal-tahap-5-content-data-pinjaman-modal @onBubbleEvent="onAddPayloadItemsDataPinjaman" />
  </b-modal>

	<b-modal id="ui-proposal-tahap-5-content-agunan-modal" size="lg" hide-footer>
    <template v-slot:modal-title>
			<span class="subtitle">Agunan / Jaminan</span>
    </template>

		<ui-proposal-tahap-5-content-agunan-modal @onBubbleEvent="onAddPayloadItemsAgunan" />
  </b-modal>

	<form ref="form" @submit.prevent="onNext"  @change="handleChange" @invalid.capture.prevent="handleInvalid">
		<b-row class="mb-2 section p-3"  v-proposal-review="$route">
			<b-col class="p-0" cols="12">
				<slot>
					<h3 class="subtitle mb-3">Pinjaman</h3>
				</slot>

				<h3 class="subtitle-point mb-3">1.1 PINJAMAN DANA BERGULIR YANG DIAJUKAN SEBESAR :</h3>

				<div class="ml-3">

					<!-- PINJAMAN DANA BERGULIR YANG DIAJUKAN SEBESAR -->
					<b-row class="mb-2">
				    <b-col class="col-12">
							<div class="input-group mb-1">
								<span v-middle>Rp. </span>
							  <input id="payload_pinjaman_diajukan" name="payload_pinjaman_diajukan"  :disabled="propsDisabled" :required="true"  v-model="database.payload.payload_pinjaman_diajukan" type="number" min="1" class="form-control ml-2 mr-2 col-3" :placeholder="0 | currency">
								<span> Rupiah</span>

								<!-- Required -->
								<p v-if="fieldErrors.payload_pinjaman_diajukan" v-vmiddle class="col pt-1 required-alert text-left">wajib dilengkapi</p>
							</div>

							<span>Terbilang : </span>
							<span class="font-weight-bolder"> {{ database.payload.payload_pinjaman_diajukan | terbilang }}</span>
							<div class="input-group mt-4  mb-1">
								<span>dengan Jangka Waktu Pinjaman Selama :</span>

								<b-form-select
						      v-model="database.payload.payload_jangka_waktu"
						      :options="[
										{ item: null, name: ':: Pilih Waktu ::', notEnabled: true },
										{ item: 12, name: '12 Bulan' },
										{ item: 24, name: '24 Bulan' },
										{ item: 36, name: '36 Bulan' },
									]"
						      class="col-3 ml-2 mb-2"
						      value-field="item"
						      text-field="name"
						      disabled-field="notEnabled"
									id="payload_jangka_waktu" name="payload_jangka_waktu"
			 						:disabled="propsDisabled" :required="true"
						    ></b-form-select>

							  <!-- <input id="payload_jangka_waktu" name="payload_jangka_waktu" :disabled="propsDisabled" :required="true" v-model="database.payload.payload_jangka_waktu" type="number" max="100" min="1" class="form-control ml-2 mr-2 col-3" placeholder="0">
								<span>Bulan</span> -->

								<!-- Required -->
								<p v-if="fieldErrors.payload_jangka_waktu" v-vmiddle class="col pt-1 required-alert text-left">wajib dilengkapi (1 - 100)</p>

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
								<input id="payload_modal_kerja" name="payload_modal_kerja" :disabled="propsDisabled" :required="true"  v-model="database.payload.payload_modal_kerja" type="number" min="1" class="form-control col-5 ml-2" :placeholder="0 | currency">

								<!-- Required -->
								<p v-if="fieldErrors['payload_modal_kerja']" class="required-alert pt-1">wajib dilengkapi</p>
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

						<b-row class="mb-2" v-for="(list, index) in database.payload.payload_list_investasi" :key="index">
					    <b-col class="col-4">
								<span>- {{ list.label }}</span>
							</b-col>
					    <b-col class="pl-0">
								<div class="input-group">
									: <span> Rp. </span>
									<input  :id="'payload_list_investasi'+index" :name="'payload_list_investasi'+index" :disabled="propsDisabled" :required="true"  v-model="list.value" type="number" min="1" class="form-control col-5 ml-2" :placeholder="0 | currency">

									<!-- Required -->
									<p v-if="fieldErrors['payload_list_investasi'+index]" class="required-alert pt-1">wajib dilengkapi</p>
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

						<b-row class="mb-2" v-for="(list, index) in  database.payload.payload_list_pemanfaatan_modal_kerja" :key="index">
							<b-col class="col-4">
								<span>- {{ list.label }}</span>
							</b-col>
							<b-col class="pl-0">
								<div class="input-group">
									: <span> Rp. </span>
									<input :id="'payload_list_pemanfaatan_modal_kerja'+index" :name="'payload_list_pemanfaatan_modal_kerja'+index" :disabled="propsDisabled" :required="true"  v-model="list.value" type="number" min="1" class="form-control col-5 ml-2" :placeholder="0 | currency">

									<!-- Required -->
									<p v-if="fieldErrors['payload_list_pemanfaatan_modal_kerja'+index]" class=" required-alert pt-1">wajib dilengkapi</p>
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

						<TablePeningkatanDiharapkan @onBubbleEvent="database.payload.payload_items_peningkatan_diharapkan = $event" :items="database.payload.payload_items_peningkatan_diharapkan" :propsfieldErrors="fieldErrors" :propsDisabled="propsDisabled" />

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

				<b-table show-empty :striped="false" hover bordered :sticky-header="false" :items="database.payload.payload_items_data_pinjaman" :fields="database.reference.reference_fields_data_pinjaman" class="bg-white">
					<template v-slot:head()="data">
						<span class="table-header">{{ data.label }}</span>
					</template>

					<template v-slot:head(action)="data">
						<div @click="onModalProposal('ui-proposal-tahap-5-content-data-pinjaman-modal')" class="btn btn-add">
							<font-awesome-icon icon="plus" />
						</div>
					</template>

					<template v-slot:cell(action)="data">
						<div class="text-center">
							<div @click="onRemovePayloadItemsDataPinjaman" class="btn btn-delete">
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

			<h3 class="subtitle-point mb-3 mt-5">1.3 AGUNAN / JAMINAN</h3>

			<div class="ml-3">

				<b-table show-empty :striped="false" hover bordered :sticky-header="false" :items="database.payload.payload_items_agunan" :fields="database.reference.reference_fields_agunan" class="bg-white">
					<template v-slot:head()="data">
						<span class="table-header">{{ data.label }}</span>
					</template>

					<template v-slot:head(action)="data">
							<div @click="onModalProposal('ui-proposal-tahap-5-content-agunan-modal')" class="btn btn-add">
								<font-awesome-icon icon="plus" />
							</div>
					</template>

					<template v-slot:cell(action)="data">
						<div class="text-center">
							<div @click="onRemovePayloadItemsAgunan" class="btn btn-delete">
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

				<div id="scroll-to-2" />
			</div>

			</b-col>
			<b-col v-if="propsToolbar" cols="12">
				<div class="mt-3">
					<div class="column-right">
						<div id="button-prev" @click.prevent="gotoPage('/proposal-tahap-4')" class="btn non-next mr-2 pl-3 pr-3">Pervious</div>
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

import { 	database } from '@/models/proposal/proposal-tahap-5'

import TablePeningkatanDiharapkan from "./ui-proposal-tahap-5-content-peningkatan-diharapkan"

export default {
  name: 'ui-proposal-tahap-5-content',
	props: ["propsToolbar","propsDisabled"],
	components: {
		TablePeningkatanDiharapkan
	},
	watch: {
		database: {
			handler(val) {
				// Async this local data to vuex
				// this.dispatch_proposal_tahap_4(val)
			},
			deep: true,
			immediate: false,
		},
	},
	created(){
		if(this.getters_proposal_tahap_5) {
			// Request from vuex
			this.database = this.getters_proposal_tahap_5
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
						payload_pinjaman_diajukan:null,
						payload_jangka_waktu:null,
						payload_modal_kerja:null,
						payload_list_investasi: null,
						payload_list_pemanfaatan_modal_kerja: null,
						payload_items_data_pinjaman: null,
						payload_items_agunan: null,
						payload_items_peningkatan_diharapkan: null,
					},
					reference: {
						reference_fields_data_pinjaman: null,
						reference_fields_agunan: null,
					}
			},
    }
  },
	methods: {
		onNext: _.debounce(function() {
			console.log(this.$refs.form.reportValidity(), this.$refs.form.reportValidity())
			if (!this.$refs.form.checkValidity()) {
				// this.$refs.form.reportValidity() // popup required tooltip jika pakai handleInvalid maka ini tidak perlu
				this.onSnotifyProposalNext()
				return
			}
			if(this.database.payload.payload_items_data_pinjaman.length <= 0) {
				this.$scrollTo("#scroll-to-1", 500, {
					offset: -450,
				})
				this.onSnotifyProposalNext()
				return
			}
			if(this.database.payload.payload_items_agunan.length <= 0) {
				this.$scrollTo("#scroll-to-2", 500, {
					offset: -450,
				})
				this.onSnotifyProposalNext()
				return
			}

			this.fieldErrors = {}
			this.gotoPage('/proposal-tahap-6')
		}, 250),
		onFinish: _.debounce(function() {
			console.log(this.$refs.form.reportValidity(), this.$refs.form.reportValidity())
			if (!this.$refs.form.checkValidity()) {
				// this.$refs.form.reportValidity() // popup required tooltip jika pakai handleInvalid maka ini tidak perlu
				this.onSnotifyProposalNext()
				return
			}
			if(this.database.payload.payload_items_data_pinjaman.length <= 0) {
				this.$scrollTo("#scroll-to-1", 500, {
					offset: -450,
				})
				this.onSnotifyProposalNext()
				return
			}
			if(this.database.payload.payload_items_agunan.length <= 0) {
				this.$scrollTo("#scroll-to-2", 500, {
					offset: -450,
				})
				this.onSnotifyProposalNext()
				return
			}

			this.fieldErrors = {}
			this.gotoPage('/proposal-tahap-7')
		}, 250),
		onAddPayloadItemsDataPinjaman(val) {
			this.$scrollTo("#scroll-to-1", 500, {
				offset: -450,
			})
			this.database.payload.payload_items_data_pinjaman.push(val)
		},
		onRemovePayloadItemsDataPinjaman(current) {
			if(this.$route.name == "proposal-tahap-7") return

			this.$scrollTo("#scroll-to-1", 500, {
				offset: -450,
			})
			this.database.payload.payload_items_data_pinjaman.splice(current, 1)
		},
		onAddPayloadItemsAgunan(val) {
			this.$scrollTo("#scroll-to-2", 500, {
				offset: -450,
			})
			this.database.payload.payload_items_agunan.push(val)
		},
		onRemovePayloadItemsAgunan(current) {
			if(this.$route.name == "proposal-tahap-7") return

			this.$scrollTo("#scroll-to-2", 500, {
				offset: -450,
			})
			this.database.payload.payload_items_agunan.splice(current, 1)
		},
	}
}
</script>
