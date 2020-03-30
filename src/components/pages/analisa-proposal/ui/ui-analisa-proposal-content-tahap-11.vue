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

button, .button-biru, .button-orange {
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

.submit, .button-biru {
	background: #58C0E7;
}

.button-orange {
	background: #FCAD46;
}

.col-4 {
	padding-left: 0px;
}

</style>

<template>
<fragment>
<div class="input-group">
	<form class="col-10" ref="form"  @submit.prevent="onSubmit"  @change="handleChange" @invalid.capture.prevent="handleInvalid">



		<div class="mt-3">
			<div class="column-right">

				<div id="button-prev" @click.prevent="gotoPage('/proposal-master')" class="btn non-next mr-2 pl-3 pr-3">Batal</div>

				<button type="submit" @click.prevent="onSubmit" class="btn btn-primary submit mr-2 pl-3 pr-3">Simpan</button>
				<button type="reset" @click.prevent="clearForm" class="btn btn-danger danger pl-3 pr-3">Reset</button>
			</div>
		</div>
	</form>

</div>
</fragment>
</template>

<script>

export default {
	watch: {
		// INIT DATA
		'$route.name':function(val) {
			// console.log(val)
			if(val == 'proposal-detail') {
				this.initDatabasePayload()
			}
			// console.log("this.database.payload", this.database.payload)
		}
	},
	created(){
		// INIT DATA
		this.initDatabasePayload()
		// this.database.payload = this.getters_proposal(this.$route.params.id)
	},
	data() {
    return {
			database: {
				payload: {
					nomor_proposal:null,
					nama_ukm_proposal:null,
					alamat_ukm_proposal:null,
					telepon_ukm_proposal:null,
					tanggal_berdiri_ukm_proposal:null,
				}
			}
    }
  },

	methods: {
		initDatabasePayload(){
			const get = this.getters_proposal_edit({
				index: this.$route.params.id
			})
			console.log(get);
			if(get) {
				this.database.payload = get
			}
		},
		onEdit() {
			// console.log(data)
			this.$router.push({
					name:'proposal-tahap-1',
					params: {
						id: this.database.payload.nomor_proposal //data.item.kode_proposal
					}
			 })
		},
		clearForm(){
			this.fieldErrors = {}
			// this.imagePreview = "https://picsum.photos/250/250/?image=58",
			this.database.payload = {
				nomor_proposal:null,
				nama_ukm_proposal:null,
				alamat_ukm_proposal:null,
				telepon_ukm_proposal:null,
				tanggal_berdiri_ukm_proposal:null,
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
				resolve(this.dispatch_proposal_edit_payload_items({
					index: this.$route.params.id,
					item: this.database.payload
				}))
			}).then(result => {
				this.$router.replace("/proposal-master")
				this.clearForm()
			})
		}, 250),
	}
}
</script>
