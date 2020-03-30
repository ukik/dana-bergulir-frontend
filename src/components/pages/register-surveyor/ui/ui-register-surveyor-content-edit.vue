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
		<!-- Foto Surveyor -->
		<b-row class="mb-2">
	    <b-col class="col-4">
				<span>Foto Surveyor</span>
			</b-col>
	    <b-col>
				<!-- jadi tidak wajib karena jika batal mengisi, tidak perlu mengganti file lama -->
				<div class="input-group">
					: <b-form-file
			      v-model="database.payload.foto_surveyor"
						@change="onImageChange"
						:required="false" id="foto_surveyor" name="foto_surveyor"
						class="form-control ml-2"
			      :placeholder="image_placeholder"
			      drop-placeholder="Drop file here..."
			    ></b-form-file>
				</div>
				<!-- Required -->
				<p v-if="fieldErrors.foto_surveyor" class="required-alert">wajib dilengkapi</p>
			</b-col>
	  </b-row>

		<!-- Kode Surveyor -->
		<b-row class="mb-2">
			<b-col class="col-4">
				<span>Kode Surveyor</span>
			</b-col>
	    <b-col>
				<div class="input-group">
				  : <b-form-input :required="true" id="kode_surveyor" name="kode_surveyor" v-model="database.payload.kode_surveyor" type="text" class="form-control ml-2" placeholder="Kode Surveyor" />
				</div>
				<!-- Required -->
				<p v-if="fieldErrors.kode_surveyor" class="required-alert">wajib dilengkapi</p>
			</b-col>
		</b-row>

		<!-- Nama Surveyor -->
		<b-row class="mb-2">
			<b-col class="col-4">
				<span>Nama Surveyor</span>
			</b-col>
	    <b-col>
				<div class="input-group">
				  : <input :required="true" id="nama_surveyor" name="nama_surveyor" v-model="database.payload.nama_surveyor" type="text" class="form-control ml-2" placeholder="Nama Surveyor">
				</div>
				<!-- Required -->
				<p v-if="fieldErrors.nama_surveyor" class="required-alert">wajib dilengkapi</p>
			</b-col>
		</b-row>


		<!-- Telepon Surveyor -->
		<b-row class="mb-2">
			<b-col class="col-4">
				<span>Telepon Surveyor</span>
			</b-col>
	    <b-col>
				<div class="input-group">
				  : <input :required="true" id="telepon_surveyor" name="telepon_surveyor" v-model="database.payload.telepon_surveyor" type="text" class="form-control ml-2" placeholder="Telepon Surveyor">
				</div>
				<!-- Required -->
				<p v-if="fieldErrors.telepon_surveyor" class="required-alert">wajib dilengkapi</p>
			</b-col>
		</b-row>

		<!-- Email Surveyor -->
		<b-row class="mb-2">
			<b-col class="col-4">
				<span>Email Surveyor</span>
			</b-col>
	    <b-col>
				<div class="input-group">
				  : <input :required="true" id="email_surveyor" name="email_surveyor" v-model="database.payload.email_surveyor" type="text" class="form-control ml-2" placeholder="Email Surveyor">
				</div>
				<!-- Required -->
				<p v-if="fieldErrors.email_surveyor" class="required-alert">wajib dilengkapi</p>
			</b-col>
		</b-row>


		<div class="mt-3">
			<div class="column-right">
				<!-- <button @click.prevent="$router.back()" class="btn btn-danger cancel mr-2 pl-3 pr-3">Batal</button> -->
				<!-- <button type="submit" @click.prevent="onSubmit" class="btn btn-primary submit pl-3 pr-3">Simpan Data</button> -->

				<div id="button-prev" @click.prevent="gotoPage('/register-surveyor-master')" class="btn non-next mr-2 pl-3 pr-3">Batal</div>

				<button type="submit" @click.prevent="onSubmit" class="btn btn-primary submit mr-2 pl-3 pr-3">Simpan</button>
				<button type="reset" @click.prevent="clearForm" class="btn btn-danger danger pl-3 pr-3">Reset</button>
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
		// INIT DATA
		'$route.name':function(val) {
			// console.log(val)
			if(val == 'register-surveyor-edit') {
				this.initDatabasePayload()
			}
			// console.log("this.database.payload", this.database.payload)
		}
	},
	created(){
		// INIT DATA
		this.initDatabasePayload()
		// this.database.payload = this.getters_surveyor_edit(this.$route.params.id)
	},
	data() {
    return {
			// imagePreview:"https://picsum.photos/250/250/?image=58",
			database: {
				payload: {
					foto_surveyor:null,
					kode_surveyor:null,
					nama_surveyor:null,
					telepon_surveyor:null,
					email_surveyor:null,
					//
					imagePreview:"https://picsum.photos/250/250/?image=58",
				}
			}
    }
  },
	computed: {
		image_placeholder() {
			return !this.database.payload.foto_surveyor ? "Pilih foto profile..." : this.database.payload.foto_surveyor.name
		}
	},
	methods: {
		initDatabasePayload(){
			const get = this.getters_surveyor_edit({
				index: this.$route.params.id
			})
			if(get) {
				this.database.payload = get
			}
		},
		clearForm(){
			this.fieldErrors = {}
			// this.imagePreview = "https://picsum.photos/250/250/?image=58",
			this.database.payload = {
				foto_surveyor:null,
				kode_surveyor:null,
				nama_surveyor:null,
				telepon_surveyor:null,
				email_surveyor:null,
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
				resolve(this.dispatch_surveyor_edit_payload_items({
					index: this.$route.params.id,
					item: this.database.payload
				}))
			}).then(result => {
				this.$router.replace("/register-surveyor-master")
				this.clearForm()
			})
		}, 250),

		onImageChange(e) {
				let files = e.target.files || e.dataTransfer.files;
				if (!files.length) return;
				this.createImage(files[0]);
		},
		createImage(file) {
				let reader = new FileReader();
				let vm = this;
				reader.onload = e => {
						// vm.imagePreview = e.target.result;
						vm.database.payload.imagePreview = e.target.result;
				};
				reader.readAsDataURL(file)
		},
	}
}
</script>
