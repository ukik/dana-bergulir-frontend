<style scoped>

input {
	height: 30px;
}

textarea, input, select, .custom-file-label {
	background: #FFFFFF;
	border-radius: 10px !important;
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

.column-right {
  float: right;
}

.cancel {
	background: #C54F4F;
}

.submit {
	background: #58C0E7;
}

.col-4 {
	padding-left: 0px;
}

</style>

<template>
<fragment>
<div class="input-group">
	<form class="col-8" ref="form"  @submit.prevent="onSubmit"  @change="handleChange" @invalid.capture.prevent="handleInvalid">

		<!-- Tanggal Survey -->
		<b-row class="mb-2">
			<b-col class="col-4">
				<span>Tanggal Survey</span>
			</b-col>
	    <b-col>
				<div class="input-group">
				  : <b-form-input :required="true" id="tanggal_survey" name="tanggal_survey" v-model="database.payload.tanggal_survey" type="date" class="form-control ml-2" placeholder="" />
				</div>
				<!-- Required -->
				<p v-if="fieldErrors.tanggal_survey" class="required-alert">wajib dilengkapi</p>
			</b-col>
		</b-row>


		<!-- Nomor Survey -->
		<b-row class="mb-2">
			<b-col class="col-4">
				<span>Nomor Survey</span>
			</b-col>
	    <b-col>
				<div class="input-group">
				  : <b-form-input :required="true" id="nomor_survey" name="nomor_survey" v-model="database.payload.nomor_survey" type="text" class="form-control ml-2" placeholder="Kode Survey" />
				</div>
				<!-- Required -->
				<p v-if="fieldErrors.nomor_survey" class="required-alert">wajib dilengkapi</p>
			</b-col>
		</b-row>

		<!-- Nama Surveyor -->
		<b-row class="mb-2">
			<b-col class="col-4">
				<span>Nama Surveyor</span>
			</b-col>
	    <b-col>
				<div class="input-group">
				<a >:</a>	<ui-register-survey-autocomplete-surveyor v-if="autocomplete" @onBubbleEvent="onBubbleEventProfileSurveyor" :propsInitValue="database.payload.nama_surveyor_survey" @onBubbleEventClear="onBubbleEventClearProfileSurveyor" class="col ml-2" />
				</div>

				<!-- Required -->
				<input :required="true" type="text" v-show="false" id="nama_surveyor_survey" name="nama_surveyor_survey" v-model="database.payload.nama_surveyor_survey">
				<p v-if="fieldErrors.nama_surveyor_survey" class="required-alert">wajib dilengkapi</p>
			</b-col>
		</b-row>

		<!-- Pilih Proposal -->
		<b-row class="mb-2">
			<b-col class="col-4">
				<span>Pilih Proposal</span>
			</b-col>
	    <b-col>
				<div class="input-group">
				<a >:</a>	<ui-register-survey-autocomplete-proposal v-if="autocomplete" @onBubbleEvent="onBubbleEventProfileProposal" :propsInitValue="database.payload.proposal_survey" @onBubbleEventClear="onBubbleEventClearProfileProposal" class="col ml-2" />
				</div>

				<!-- Required -->
				<input :required="true" type="text" v-show="false" id="proposal_survey" name="proposal_survey" v-model="database.payload.proposal_survey">
				<p v-if="fieldErrors.proposal_survey" class="required-alert">wajib dilengkapi</p>
			</b-col>
		</b-row>

		<!-- No SPT-->
		<b-row class="mb-2">
			<b-col class="col-4">
				<span>No SPT</span>
			</b-col>
	    <b-col>
				<div class="input-group">
				  : <input :required="true" id="spt_survey" name="spt_survey" v-model="database.payload.spt_survey" type="text" class="form-control ml-2" placeholder="">
				</div>
				<!-- Required -->
				<p v-if="fieldErrors.spt_survey" class="required-alert">wajib dilengkapi</p>
			</b-col>
		</b-row>


		<div class="mt-3">
			<div class="column-right">
				<!-- <button @click.prevent="$router.back()" class="btn btn-danger cancel mr-2 pl-3 pr-3">Batal</button> -->
				<!-- <button type="submit" @click.prevent="onSubmit" class="btn btn-primary submit pl-3 pr-3">Simpan Data</button> -->

				<div id="button-prev" @click.prevent="gotoPage('/register-survey-master')" class="btn non-next mr-2 pl-3 pr-3">Batal</div>

				<button type="submit" @click.prevent="onSubmit" class="btn btn-primary submit mr-2 pl-3 pr-3">Simpan</button>
				<button type="reset" @click.prevent="clearFormContainer" class="btn btn-danger danger pl-3 pr-3">Reset</button>
			</div>
		</div>
	</form>
	<b-col>
		<h6>Profile Surveyor</h6>
		<div>
			<b-img thumbnail fluid :src="database.payload.imagePreview"></b-img>
		</div>
	</b-col>
</div>
</fragment>
</template>

<script>

export default {
  name: 'ui-penerima-pemohon-content-tambah',
	watch: {
		"$route.name":function(val) {
			if(val == "register-survey-edit") {
				this.autocomplete = true
				this.initDatabasePayload()
			}

			// REFRESH AUTOCOMPLETE
			this.autocomplete = false
			this.$nextTick(() => {
				this.autocomplete = true
			})
		}
	},
	created(){
		// INIT DATA
		this.initDatabasePayload()
		// this.database.payload = this.getters_surveyor_edit(this.$route.params.id)
	},
	data() {
    return {
			autocomplete:true,
			database: {
				payload: {
					tanggal_survey:null,
					nomor_survey:null,
					nama_surveyor_survey:null,
					proposal_survey:null,
					spt_survey:null,
					//
					imagePreview:"https://picsum.photos/250/250/?image=58",
				}
			}
    }
  },
	methods: {
		initDatabasePayload(){
			const get = this.getters_survey_edit({
				index: this.$route.params.id
			})
			if(get) {
				this.database.payload = get
			}
		},
		onBubbleEventClearProfileSurveyor(){
			this.database.payload.nama_surveyor_survey = null
			this.database.payload.imagePreview = "https://picsum.photos/250/250/?image=58"

			delete this.fieldErrors.nama_surveyor_survey
		},
		onBubbleEventProfileSurveyor(payload){
			this.database.payload.nama_surveyor_survey = payload.nama_surveyor_survey
			this.database.payload.imagePreview = payload.foto

			delete this.fieldErrors.nama_surveyor_survey
		},
		onBubbleEventClearProfileProposal(){
			this.database.payload.proposal_survey = null
			delete this.fieldErrors.proposal_survey
		},
		onBubbleEventProfileProposal(payload){
			this.database.payload.proposal_survey = payload.proposal_survey
			delete this.fieldErrors.proposal_survey
		},
		clearFormContainer(){
			// REFRESH AUTOCOMPLETE

			this.autocomplete = false
			this.$nextTick(() => {
				this.autocomplete = true
			})
			this.clearForm()
		},
		clearForm(){
			this.fieldErrors = {}
			this.database.payload = {
				tanggal_survey:null,
				nomor_survey:null,
				nama_surveyor_survey:null,
				proposal_survey:null,
				spt_survey:null,
				//
				imagePreview:"https://picsum.photos/250/250/?image=58",
			}
		},
		onSubmit: window._.debounce(function() {
			// console.log(this.$refs.form.reportValidity(), this.$refs.form.reportValidity())
			if (!this.$refs.form.checkValidity()) {
				// this.$refs.form.reportValidity() // popup required tooltip jika pakai handleInvalid maka ini tidak perlu

				this.onSnotifyInput()
				return
      }

			new Promise(resolve => {
				resolve(this.dispatch_survey_edit_payload_items({
					item: this.database.payload
				}))
			}).then(result => {
				this.$router.replace("/register-survey-master")
				this.clearForm()
				this.autocomplete = false
			})
		}, 250),
	}
}
</script>
