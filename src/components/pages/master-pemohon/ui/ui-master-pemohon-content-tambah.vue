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

	<form ref="form"  @submit.prevent="onSubmit"  @change="handleChange" @invalid.capture.prevent="handleInvalid">
		<!-- Nama Pemohon Kredit -->
		<b-row class="mb-2">
	    <b-col class="col-4">
				<span>Nama Pemohon Kredit</span>
			</b-col>
	    <b-col>
				<div class="input-group">
				  : <input :required="true" id="nama_pemohon_ukm" name="nama_pemohon_ukm" v-model="database.payload.nama_pemohon_ukm" type="text" class="form-control ml-2" placeholder="">
				</div>
				<!-- Required -->
				<p v-if="fieldErrors.nama_pemohon_ukm" class="required-alert">wajib dilengkapi</p>
			</b-col>
	  </b-row>

		<!-- Nama UKM -->
		<b-row class="mb-2">
	    <b-col class="col-4">
				<span>Nama UKM</span>
			</b-col>
	    <b-col>
				<div class="input-group">
				  : <input :required="true" id="nama_ukm" name="nama_ukm" v-model="database.payload.nama_ukm" type="text" class="form-control ml-2" placeholder="">
				</div>
				<!-- Required -->
				<p v-if="fieldErrors.nama_ukm" class="required-alert">wajib dilengkapi</p>
			</b-col>
	  </b-row>

		<!-- Kode -->
		<b-row class="mb-2">
			<b-col class="col-4">
				<span>Kode</span>
			</b-col>
	    <b-col>
				<div class="input-group">
				  : <input :required="true" id="kode_ukm" name="kode_ukm" v-model="database.payload.kode_ukm" type="text" class="form-control ml-2" placeholder="">
				</div>
				<!-- Required -->
				<p v-if="fieldErrors.kode_ukm" class="required-alert">wajib dilengkapi</p>
			</b-col>
		</b-row>

		<!-- Alamat -->
		<b-row class="mb-2">
			<b-col class="col-4">
				<span>Alamat</span>
			</b-col>
	    <b-col>
				<div class="input-group">
					: <textarea :required="true" id="alamat_ukm" name="alamat_ukm" v-model="database.payload.alamat_ukm" class="form-control ml-2" rows="3"></textarea>
				</div>
				<!-- Required -->
				<p v-if="fieldErrors.alamat_ukm" class="required-alert">wajib dilengkapi</p>

			</b-col>
		</b-row>

		<!-- Fax -->
		<b-row class="mb-2">
			<b-col class="col-4">
				<span>Fax</span>
			</b-col>
			<b-col>
				<div class="input-group">
					: <input :required="true" id="fax_ukm" name="fax_ukm" v-model="database.payload.fax_ukm" type="text" class="form-control ml-2" placeholder="">
				</div>
				<!-- Required -->
				<p v-if="fieldErrors.fax_ukm" class="required-alert">wajib dilengkapi</p>

			</b-col>
		</b-row>

		<!-- Telepon -->
		<b-row class="mb-2">
			<b-col class="col-4">
				<span>Telepon</span>
			</b-col>
			<b-col>
				<div class="input-group">
					: <input :required="true" id="telepon_ukm" name="telepon_ukm" v-model="database.payload.telepon_ukm" type="text" class="form-control ml-2" placeholder="">
				</div>
				<!-- Required -->
				<p v-if="fieldErrors.telepon_ukm" class="required-alert">wajib dilengkapi</p>

			</b-col>
		</b-row>

		<!-- Provinsi -->
		<b-row class="mb-2">
			<b-col class="col-4">
				<span>Provinsi</span>
			</b-col>
			<b-col>
				<div class="input-group">
					: <b-form-select
						v-model="database.payload.provinsi_ukm"
			      :options="database.reference.reference_options_provinsi"
						:required="true" id="provinsi_ukm" name="provinsi_ukm"
			      class="ml-2"
			      value-field="item"
			      text-field="name"
			      disabled-field="notEnabled"
			    ></b-form-select>
				</div>
				<!-- Required -->
				<p v-if="fieldErrors.provinsi_ukm" class="required-alert">wajib dilengkapi</p>

			</b-col>
		</b-row>

		<!-- Kabupaten -->
		<b-row class="mb-2">
			<b-col class="col-4">
				<span>Kabupaten</span>
			</b-col>
			<b-col>
				<div class="input-group">
					: <b-form-select
						v-model="database.payload.kabupaten_ukm"
						:options="database.reference.reference_options_kabupaten"
						:required="true" id="kabupaten_ukm" name="kabupaten_ukm"
						class="ml-2"
						value-field="item"
						text-field="name"
						disabled-field="notEnabled"
					></b-form-select>
				</div>
				<!-- Required -->
				<p v-if="fieldErrors.kabupaten_ukm" class="required-alert">wajib dilengkapi</p>
			</b-col>
		</b-row>

		<!-- Kecamatan -->
		<b-row class="mb-2">
			<b-col class="col-4">
				<span>Kecamatan</span>
			</b-col>
			<b-col>
				<div class="input-group">
					: <b-form-select
						v-model="database.payload.kecamatan_ukm"
						:options="database.reference.reference_options_kecamatan"
						:required="true" id="kecamatan_ukm" name="kecamatan_ukm"
						class="ml-2"
						value-field="item"
						text-field="name"
						disabled-field="notEnabled"
					></b-form-select>
				</div>
				<!-- Required -->
				<p v-if="fieldErrors.kecamatan_ukm" class="required-alert">wajib dilengkapi</p>

			</b-col>
		</b-row>

		<!-- Kelurahan -->
		<b-row class="mb-2">
			<b-col class="col-4">
				<span>Kelurahan</span>
			</b-col>
			<b-col>
				<div class="input-group">
					: <input :required="true" id="kelurahan_ukm" name="kelurahan_ukm" v-model="database.payload.kelurahan_ukm" type="text" class="form-control ml-2" placeholder="">
				</div>
				<!-- Required -->
				<p v-if="fieldErrors.kelurahan_ukm" class="required-alert">wajib dilengkapi</p>

			</b-col>
		</b-row>

		<div class="mt-3">
			<div class="column-right">
				<div :required="true" id="button-prev" @click.prevent="gotoPage('/master-pemohon-master')" class="btn non-next mr-2 pl-3 pr-3">Batal</div>

				<button type="submit" @click.prevent="onSubmit" class="btn btn-primary submit mr-2 pl-3 pr-3">Simpan</button>
				<button type="reset" @click.prevent="clearForm" class="btn btn-danger danger pl-3 pr-3">Reset</button>
			</div>
		</div>
	</form>
	</fragment>
</template>

<script>

// import { database_add_edit } from '@/models/master-pemohon'

export default {
  name: 'ui-penerima-pemohon-content-tambah',
	created(){
		this.initDatabaseReference()

		// Request from server to update vuex
		// this.database = database_add_edit
		// console.log(this.database)
	},
	data() {
    return {
			imagePreview: null,
			database: {
				payload: {
					nama_ukm: null,
					nama_pemohon_ukm: null,
					kode_ukm: null,
					alamat_ukm: null,
					fax_ukm: null,
					telepon_ukm: null,
					provinsi_ukm: null, // options_provinsi > item
					kabupaten_ukm: null, // options_kabupaten > item
					kecamatan_ukm: null, // options_kecamatan > item
					kelurahan_ukm: null,
				},
				reference: {
					reference_options_provinsi:null,
					reference_options_kabupaten:null,
					reference_options_kecamatan:null,
				}
			}
    }
  },
	methods: {
		initDatabaseReference(){
			// console.log(!this.getters_proposal_tahap_1)
			if(this.getters_pemohon_reference_options_provinsi) {
				// Request from vuex
				this.database.reference.reference_options_provinsi = this.getters_pemohon_reference_options_provinsi
			}
			if(this.getters_pemohon_reference_options_kabupaten) {
				// Request from vuex
				this.database.reference.reference_options_kabupaten = this.getters_pemohon_reference_options_kabupaten
			}
			if(this.getters_pemohon_reference_options_kecamatan) {
				// Request from vuex
				this.database.reference.reference_options_kecamatan = this.getters_pemohon_reference_options_kecamatan
			}

			return
		},
		clearForm(){
			this.fieldErrors = {}
			this.database.payload = {
				nama_ukm: null,
				nama_pemohon_ukm: null,
				kode_ukm: null,
				alamat_ukm: null,
				fax_ukm: null,
				telepon_ukm: null,
				provinsi_ukm: null, // options_provinsi > item
				kabupaten_ukm: null, // options_kabupaten > item
				kecamatan_ukm: null, // options_kecamatan > item
				kelurahan_ukm: null,
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
				resolve(this.dispatch_pemohon_add_payload_items({
					item: this.database.payload
				}))
			}).then(result => {
				this.$router.replace("/master-pemohon-master")
				this.clearForm()
			})
		}, 250),
	}
}
</script>
