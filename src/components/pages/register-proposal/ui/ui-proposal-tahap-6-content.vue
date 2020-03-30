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

small {
	float: right;
	color: red !important;
}

</style>

<template>
<fragment>
	<form ref="form" @submit.prevent="onNext"  @change="handleChange" @invalid.capture.prevent="handleInvalid">
		<b-row class="mb-2 section p-3"  v-proposal-review="$route">
			<b-col class="p-0" cols="12">
				<slot>
					<h3 class="subtitle mb-3">Ceklist Lampiran yang Sudah Terpenuhi</h3>
				</slot>

				<b-row class="" v-for="(list, index) in database.reference.reference_list_lampiran" :key="index">
			    <b-col class="col-9">
						<span>{{ index+1 }}. {{ list.label }}</span>
					</b-col>
			    <b-col>
						<div class="input-group">
							: <b-form-checkbox class="ml-2"
					      :id="'payload_list_lampiran'+index"
								:disabled="propsDisabled" :required="list.required"
					      v-model="database.payload.payload_list_lampiran[index]"
					      :name="'payload_list_lampiran'+index"
					      :value="true"
					    >

							<!-- Required -->
							<p v-if="fieldErrors['payload_list_lampiran'+index]" class="required-alert">wajib dilengkapi</p>
					    </b-form-checkbox>
						</div>
					</b-col>
		  	</b-row>

				<b-row class="mt-4">
			    <b-col class="col-9">
						<span>*) Bila Ada</span>
					</b-col>
		  	</b-row>

			</b-col>
			<b-col v-if="propsToolbar" cols="12">
				<div class="mt-3">
					<div class="column-right">
						<div id="button-prev" @click.prevent="gotoPage('/proposal-tahap-5')" class="btn non-next mr-2 pl-3 pr-3">Pervious</div>
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

import { 	database } from '@/models/proposal/proposal-tahap-6'

export default {
  name: 'ui-proposal-tahap-6-content',
	props: ["propsToolbar","propsDisabled"],
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
		if(this.getters_proposal_tahap_6) {
			// Request from vuex
			this.database = this.getters_proposal_tahap_6
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
						payload_list_lampiran:null,
				},
				reference: {
						reference_list_lampiran:null,
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

			this.fieldErrors = {}
			this.gotoPage('/proposal-tahap-7')
		}, 250),
		onFinish: _.debounce(function() {
			// console.log(this.$refs.form.reportValidity(), this.$refs.form.reportValidity())
			if (!this.$refs.form.checkValidity()) {
				// this.$refs.form.reportValidity() // popup required tooltip jika pakai handleInvalid maka ini tidak perlu
				this.onSnotifyProposalNext()
				return
			}

			this.fieldErrors = {}
			this.gotoPage('/proposal-tahap-7')
		}, 250),
	}
}
</script>
