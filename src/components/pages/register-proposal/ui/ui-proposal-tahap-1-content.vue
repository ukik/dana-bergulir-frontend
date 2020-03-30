<style scoped>

.subtitle {
	font-family: Montserrat_Light;
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;

	color: #555555;
}


select {
	background: #FFFFFF;
	border-radius: 10px !important;
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
</style>

<template>
<fragment>
	<form ref="form" @submit.prevent="onNext"  @change="handleChange" @invalid.capture.prevent="handleInvalid">
		<b-row class="mb-2 section p-3" v-proposal-review="$route">
			<b-col class="p-0" cols="12">
				<slot>
					<h3 class="subtitle mb-3">Pilih Data</h3>
				</slot>
				<span>Pilih Data UKM yang telah terdaftar</span>
				<div class="input-group mt-3 mb-3">
					<b-form-select
			      v-model="database.payload.payload_selected_provinsi"
			      :options="database.reference.reference_options_provinsi"
			      class="col-12 ml-0"
			      value-field="item"
			      text-field="name"
			      disabled-field="notEnabled"
						id="payload_selected_provinsi" name="payload_selected_provinsi"
 						:disabled="propsDisabled" :required="true"
			    ></b-form-select>
				</div>
				<!-- Required -->
				<p v-if="fieldErrors.payload_selected_provinsi" class="required-alert">wajib dilengkapi</p>
				<p>
					<span>Atau</span>
				</p>
				<div @click.prevent="gotoPage('/penerima-pemohon-tambah')" class="btn button-div">+ Tambah Data UKM Baru</div>
			</b-col>

			<b-col cols="12">
				<div class="mt-3">
					<div class="column-right">
						<div id="button-prev" @click.prevent="$router.back()" class="btn non-next mr-2 pl-3 pr-3">Pervious</div>
						<button type="submit" @click.prevent="onNext" class="btn next mr-0 pl-3 pr-3">Next</button>
						<!-- <button type="submit" @click.prevent="onNext" class="btn non-next pl-3 pr-3">Finish</button>						 -->
					</div>
				</div>
			</b-col>
		</b-row>
	</form>
</fragment>
</template>

<script>

import { database } from '@/models/proposal/proposal-tahap-1'

export default {
  name: 'ui-proposal-tahap-1-content',
	props: ["propsDisabled"],
	watch: {
		database: {
			handler(val) {
				console.log(val)
				// Async this local data to vuex
				this.dispatch_proposal_tahap_1(val)
			},
			deep: true,
			immediate: false,
		}
	},
	data() {
    return {
			database: {
				payload: {
					payload_selected_provinsi: null,
				},
				reference: {
					reference_options_provinsi: null,
				}
			}
    }
  },
	created(){
		// console.log(!this.getters_proposal_tahap_1)
		if(this.getters_proposal_tahap_1) {
			// Request from vuex
			this.database = this.getters_proposal_tahap_1
		}

		// Request from server to update vuex
		this.database = database
		// console.log(this.database)
		return
	},
	methods: {
		onNext: window._.debounce(function() {
			// console.log(this.$refs.form.reportValidity(), this.$refs.form.reportValidity())
			if (!this.$refs.form.checkValidity()) {
				// this.$refs.form.reportValidity() // popup required tooltip jika pakai handleInvalid maka ini tidak perlu

				this.onSnotifyProposalNext()
				return
      }

			this.fieldErrors = {}
			this.gotoPage('/proposal-tahap-2')
		}, 250)
	}
}
</script>
