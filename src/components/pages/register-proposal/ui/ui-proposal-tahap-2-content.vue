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
		<b-row class="mb-2 section p-3" v-proposal-review="$route">
			<b-col class="p-0" cols="12">
				<slot>
					<h3 class="subtitle mb-3">Info Umum</h3>
				</slot>

				<h3 class="subtitle-point mb-3">1.1 Profil Pemilik</h3>

				<div class="ml-3">

					<!-- Nama -->
					<b-row class="mb-2">
				    <b-col class="col-4">
							<span>Nama</span>
						</b-col>
				    <b-col>
							<div class="input-group">
							: <b-form-input :disabled="propsDisabled" :required="true" id="nama_pemilik" name="nama_pemilik" v-model="database.payload.payload_profile_pemilik.nama_pemilik" type="text" class="form-control ml-2" placeholder=""/>
							</div>

							<!-- Required -->
							<p v-if="fieldErrors.nama_pemilik" class="required-alert">wajib dilengkapi</p>

						</b-col>
				  </b-row>

					<!-- Tempat / Tanggal Lahir -->
					<b-row class="mb-2">
				    <b-col class="col-4">
							<span>Tempat / Tanggal Lahir</span>
						</b-col>
				    <b-col>
							<div class="input-group">
								  : <input :disabled="propsDisabled" :required="true"  id="tempat_lahir_pemilik" name="tempat_lahir_pemilik" v-model="database.payload.payload_profile_pemilik.tempat_lahir_pemilik" type="text" class="form-control ml-2" placeholder="">

								  <input :disabled="propsDisabled" :required="true"  id="tanggal_lahir_pemilik" name="tanggal_lahir_pemilik" v-model="database.payload.payload_profile_pemilik.tanggal_lahir_pemilik" type="date" class="form-control ml-2" placeholder="">
							</div>
							<div class="input-group">
									<!-- Required -->
									<div class="col-6 m-0 p-0 ">
									<p v-if="fieldErrors.tempat_lahir_pemilik" class="required-alert">wajib dilengkapi</p>
									</div>
									<div class="col-6 m-0 p-0 ">
									<!-- Required -->
									<p v-if="fieldErrors.tanggal_lahir_pemilik" class="required-alert">wajib dilengkapi</p>
									</div>
							</div>
						</b-col>
				  </b-row>

					<!-- No KTP -->
					<b-row class="mb-2">
						<b-col class="col-4">
							<span>No KTP</span>
						</b-col>
						<b-col>
							<div class="input-group">
								: <input :disabled="propsDisabled" :required="true" id="ktp_pemilik" name="ktp_pemilik"  type="text" v-model="database.payload.payload_profile_pemilik.ktp_pemilik" class="form-control ml-2" placeholder="">
							</div>

							<!-- Required -->
							<p v-if="fieldErrors.ktp_pemilik" class="required-alert">wajib dilengkapi</p>

						</b-col>
					</b-row>

					<!-- Alamat -->
					<b-row class="mb-2">
				    <b-col class="col-4">
							<span>Alamat</span>
						</b-col>
				    <b-col>
							<div class="input-group">
							  : <textarea :disabled="propsDisabled" :required="true" id="alamat_pemilik" name="alamat_pemilik"  v-model="database.payload.payload_profile_pemilik.alamat_pemilik" class="form-control ml-2" rows="3"></textarea>
							</div>

							<!-- Required -->
							<p v-if="fieldErrors.alamat_pemilik" class="required-alert">wajib dilengkapi</p>
						</b-col>
				  </b-row>

					<!-- Pendidikan -->
					<b-row class="mb-2">
						<b-col class="col-4">
							<span>Pendidikan</span>
						</b-col>
						<b-col>
							<div class="input-group">
								: <input :disabled="propsDisabled" :required="true" id="pendidikan_pemilik" name="pendidikan_pemilik"  v-model="database.payload.payload_profile_pemilik.pendidikan_pemilik"  type="text" class="form-control ml-2" placeholder="">
							</div>

							<!-- Required -->
							<p v-if="fieldErrors.pendidikan_pemilik" class="required-alert">wajib dilengkapi</p>
						</b-col>
					</b-row>

					<!-- Pekerjaan -->
					<b-row class="mb-2">
						<b-col class="col-4">
							<span>Pekerjaan</span>
						</b-col>
						<b-col>
							<div class="input-group">
								: <input :disabled="propsDisabled" :required="true" id="pekerjaan_pemilik" name="pekerjaan_pemilik"  v-model="database.payload.payload_profile_pemilik.pekerjaan_pemilik" type="text" class="form-control ml-2" placeholder="">
							</div>

							<!-- Required -->
							<p v-if="fieldErrors.pekerjaan_pemilik" class="required-alert">wajib dilengkapi</p>

						</b-col>
					</b-row>

					<!-- Status -->
					<b-row class="mb-2">
						<b-col class="col-4">
							<span>Status</span>
						</b-col>
						<b-col>
							<div class="input-group">
								: <input :disabled="propsDisabled" :required="true" id="status_pemilik" name="status_pemilik"  v-model="database.payload.payload_profile_pemilik.status_pemilik" type="text" class="form-control ml-2" placeholder="">
							</div>

							<!-- Required -->
							<p v-if="fieldErrors.status_pemilik" class="required-alert">wajib dilengkapi</p>

						</b-col>
					</b-row>

					<!-- No Telp/HP -->
					<b-row class="mb-2">
						<b-col class="col-4">
							<span>No Telp/HP</span>
						</b-col>
						<b-col>
							<div class="input-group">
								: <input :disabled="propsDisabled" :required="true" id="telepon_pemilik" name="telepon_pemilik"  v-model="database.payload.payload_profile_pemilik.telepon_pemilik" type="text" class="form-control ml-2" placeholder="">
							</div>

							<!-- Required -->
							<p v-if="fieldErrors.telepon_pemilik" class="required-alert">wajib dilengkapi</p>

						</b-col>
					</b-row>

				</div>

				<h3 class="subtitle-point mb-3 mt-5">1.2 Profil UMKM</h3>

				<div class="ml-3">

					<!-- Nama Usaha -->
					<b-row class="mb-2">
						<b-col class="col-4">
							<span>Nama Usaha</span>
						</b-col>
						<b-col>
							<div class="input-group">
								: <input :disabled="propsDisabled" :required="true" id="nama_umkm" name="nama_umkm"  v-model="database.payload.payload_profile_umkm.nama_umkm" type="text" class="form-control ml-2" placeholder="">
							</div>

							<!-- Required -->
							<p v-if="fieldErrors.nama_umkm" class="required-alert">wajib dilengkapi</p>

						</b-col>
					</b-row>

					<!-- Bidang Usaha -->
					<b-row class="mb-2">
						<b-col class="col-4">
							<span>Bidang Usaha</span>
						</b-col>
						<b-col>
							<div class="input-group">
								: <input :disabled="propsDisabled" :required="true" id="bidang_umkm" name="bidang_umkm"  v-model="database.payload.payload_profile_umkm.bidang_umkm" type="text" class="form-control ml-2" placeholder="">
							</div>

								<!-- Required -->
								<p v-if="fieldErrors.bidang_umkm" class="required-alert">wajib dilengkapi</p>

						</b-col>
					</b-row>

					<!-- Alamat Usaha -->
					<b-row class="mb-2">
				    <b-col class="col-4">
							<span>Alamat Usaha</span>
						</b-col>
				    <b-col>
							<div class="input-group">
							  : <textarea :disabled="propsDisabled" :required="true" id="alamat_umkm" name="alamat_umkm"  v-model="database.payload.payload_profile_umkm.alamat_umkm" class="form-control ml-2" rows="3"></textarea>
							</div>

								<!-- Required -->
								<p v-if="fieldErrors.alamat_umkm" class="required-alert">wajib dilengkapi</p>

						</b-col>
				  </b-row>

					<!-- No NPWP -->
					<b-row class="mb-2">
						<b-col class="col-4">
							<span>No NPWP</span>
						</b-col>
						<b-col>
							<div class="input-group">
								: <input :disabled="propsDisabled" :required="true" id="npwp_umkm" name="npwp_umkm"  v-model="database.payload.payload_profile_umkm.npwp_umkm" type="text" class="form-control ml-2" placeholder="">
							</div>

								<!-- Required -->
								<p v-if="fieldErrors.npwp_umkm" class="required-alert">wajib dilengkapi</p>

						</b-col>
					</b-row>

					<!-- Awal Terbentuknya Usaha -->
					<b-row class="mb-2">
						<b-col class="col-4">
							<span>Awal Terbentuknya Usaha</span>
						</b-col>
						<b-col>
							<div class="input-group">
								: <input :disabled="propsDisabled" :required="true" id="awal_pembentukan_umkm" name="awal_pembentukan_umkm"  v-model="database.payload.payload_profile_umkm.awal_pembentukan_umkm" type="date" class="form-control ml-2" placeholder="">
							</div>

								<!-- Required -->
								<p v-if="fieldErrors.awal_pembentukan_umkm" class="required-alert">wajib dilengkapi</p>

						</b-col>
					</b-row>

					<!-- Penghargaan yg Pernah Diperoleh -->
					<b-row class="mb-2">
						<b-col class="col-4">
							<span>Penghargaan yg Pernah Diperoleh</span>
						</b-col>
						<b-col>
							<div class="input-group">
								: <input :disabled="propsDisabled" :required="true" id="penghargaan_umkm" name="penghargaan_umkm" v-model="database.payload.payload_profile_umkm.penghargaan_umkm" type="text" class="form-control ml-2" placeholder="">
							</div>

								<!-- Required -->
								<p v-if="fieldErrors.penghargaan_umkm" class="required-alert">wajib dilengkapi</p>

						</b-col>
					</b-row>

					<!-- Pinjaman yg Pernah di Terima -->
					<b-row class="mb-2">
						<b-col class="col-4">
							<span>Pinjaman yg Pernah di Terima</span>
						</b-col>
						<b-col>
							<div class="input-group">
								: <input :disabled="propsDisabled" :required="true" id="pinjaman_umkm" name="pinjaman_umkm" v-model="database.payload.payload_profile_umkm.pinjaman_umkm" type="text" class="form-control ml-2" placeholder="">
							</div>

								<!-- Required -->
								<p v-if="fieldErrors.pinjaman_umkm" class="required-alert">wajib dilengkapi</p>

						</b-col>
					</b-row>

				</div>

			</b-col>
			<b-col v-if="propsToolbar" cols="12">
				<div class="mt-3">
					<div class="column-right">
						<div id="button-prev" @click.prevent="gotoPage('/proposal-tahap-1')" class="btn non-next mr-2 pl-3 pr-3">Pervious</div>
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

import { database } from '@/models/proposal/proposal-tahap-2'

export default {
  name: 'ui-proposal-tahap-2-content',
	props: ["propsToolbar","propsDisabled"],
	watch: {
		database: {
			handler(val) {
				console.log(val)
				// Async this local data to vuex
				this.dispatch_proposal_tahap_2(val)
			},
			deep: true,
			immediate: false,
		}
	},
	created(){
		// console.log(!this.getters_proposal_tahap_1)
		if(this.getters_proposal_tahap_2) {
			// Request from vuex
			this.database = this.getters_proposal_tahap_2
		}

		// Request from server to update vuex
		this.database = database
		// console.log(this.database)
		return
	},
	data() {
    return {
			// checked: [],
			database: {
				payload_profile_pemilik: null,
				payload_profile_umkm: null,
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
			this.gotoPage('/proposal-tahap-3')
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
