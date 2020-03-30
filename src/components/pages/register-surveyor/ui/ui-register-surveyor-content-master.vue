<style scoped>

.table-header {
	font-family: Montserrat_Bold;
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 15px;
	/* identical to box height */
	vertical-align: middle;

	text-align: center;
	color: #252323;
}

.btn-add {
	width: 180px;
	height: 28px;
}

button {
	background: #58C0E7;
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

.input-search {
	width: 150px;
}

input {
	background: #FFFFFF;
	border-radius: 10px !important;
	height: 30px;
}

.btn-search {
	width: 30px;
	height: 30px;
	border-radius: 15px;
	background: #58C0E7;
	text-align: center;
	color:white;
	font-size: 14px;
	padding-top:5px;
	cursor:pointer;
}

.custom-select {
	width: 100px;
	border-radius: 10px !important;
	height: 40px;
}

.b-table-sticky-header {
	border: 1px solid #dee2e6;
}

.btn-delete {
	background: #C54F4F;
	color: #ffffff;
	border-radius: 5px;
	border: 0px;
	font-size: 14px;
}

.btn-edit {
	background: #dc920b;
	border-radius: 5px;
	color: #ffffff;
	border: 0px;
	font-size: 14px;
}

</style>

<template>
<fragment>
	<b-row>
    <b-col>
			<button @click="gotoPage('/register-surveyor-tambah')" class="btn btn-add">+ Tambah Data Surveyor</button>
		</b-col>
    <b-col>
			<div class="input-group">
			  <input type="text" class="form-control mr-2 input-search" placeholder="Search">

			  <div class="input-group-append">
			    <span class="btn-search">
						<font-awesome-icon icon="search" />
					</span>
			  </div>
			</div>
		</b-col>
  </b-row>
	<div class="mt-3 p-4 bg-white">
		<div class="input-group mb-3" >
			<div class="col-6 p-0">
				<span class="pt-2">Show</span>
				<select class="custom-select mr-2 col-3 ml-2" v-model="database.reference.reference_fields_perPage">
				  <option selected value="10">10</option>
				  <option value="20">20</option>
				  <option value="30">30</option>
					<option value="40">40</option>
				  <option value="50">50</option>
				</select>
				<span class="pt-2">Entries</span>
			</div>
			<div class="col text-right p-0">
				<div class="btn btn-success">Refresh</div>
			</div>
		</div>

	  <b-table id="master" bordered show-empty responsive hover sticky-header v-if="mounted" :items="database.payload.payload_items" :fields="database.reference.reference_fields">
			<template v-slot:head()="data">
				<div class="table-header p-2 text-center" style="width:350px">
					<span class="">{{ data.label }}</span>
				</div>
			</template>
			<template v-slot:head(kode_surveyor)="data">
				<div class="table-header p-2">
					<span class="">{{ data.label }}</span>
				</div>
			</template>
			<template v-slot:head(action)="data">
				<div class="table-header p-2">
					<span class="">{{ data.label }}</span>
				</div>
			</template>

			<!-- Optional default data cell scoped slot -->
      <template v-slot:cell(action)="data">
				<div class="input-group justify-content-center">
					<div @click="onEdit(data)" class="btn btn-edit mr-1">
						<font-awesome-icon icon="pencil-alt" />
					</div>
					<div @click="onDelete(data.index)" class="btn btn-delete">
						<font-awesome-icon icon="trash-alt" />
					</div>
				</div>
        <!-- <i>{{ data.value }} {{ data.index }}</i> -->
      </template>

		</b-table>

		<div class="row">
		    <div class="col-sm">
		      Showing 1 to 6 of 6 Entries
		    </div>
		    <div class="col-sm-4">
					<b-pagination
						v-model="database.reference.reference_fields_currentPage"
						:total-rows="rows"
						:per-page="database.reference.reference_fields_perPage"
						align="fill"
						size=""
						class=""
					></b-pagination>

		    </div>
		  </div>

	</div>
</fragment>
</template>

<script lang="ts">
import Vue from 'vue';

import { database } from '@/models/register-surveyor'

export default Vue.extend({
  name: 'ui-penerima-pemohon-content-master',
	watch: {
		database: {
			handler(val) {
				console.log(val)
				// Async this local data to vuex
				this.dispatch_surveyor(val)
			},
			deep: true,
			immediate: false,
		}
	},
	created(){
		this.initDatabase()

		// Request from server to update vuex
		this.database = database
		// console.log(this.database)
		return
	},
	computed: {
    rows() {
      return this.database.payload.payload_items.length
    }
  },
	mounted(){
		setTimeout(() => {
			this.mounted = true;
		}, 300)
	},
	data() {
    return {
			database: {
				payload: {
					payload_items: null,
				},
				reference: {
					reference_fields_currentPage: null,
		      reference_fields_perPage: null,
					// Note 'isActive' is left out and will not appear in the rendered table
		      reference_fields: null,
				}
			},
			mounted: false,
    }
  },
	methods: {
		initDatabase(){
			// console.log(!this.getters_proposal_tahap_1)
			if(this.getters_surveyor) {
				// Request from vuex
				this.database = this.getters_surveyor
			}
		},
		onEdit(data) {
			// console.log(data)
			this.$router.push({
					name:'register-surveyor-edit',
					params: {
						id: data.index //data.item.kode_surveyor
					}
			 })
		},
		onDelete(index){
			const ipAPI = '//api.ipify.org'

			const vm = this

			this.$swal.fire({
			  title: 'Menghapus Data',
			  text: "Apakah Anda Yakin Ingin Menghapus Data Ini?",
			  icon: 'question',
			  showCancelButton: true,
			  confirmButtonColor: '#3085d6',
			  cancelButtonColor: '#d33',
			  confirmButtonText: 'Ya, hapus data!',
				cancelButtonText: 'Tidak',
				preConfirm: () => {

				vm.$axios.get(ipAPI)
				  .then(function (response) {
				    // handle success
				    console.log(response);
						vm.dispatch_surveyor_delete_payload_items({ index })
				  })
				  .catch(function (error) {
				    // handle error
				    console.log(error);

						vm.$swal.fire(
							'Gagal!',
							'Terjadi masalah, penghapusan data tidak berhasil',
							'error'
						)
				  })
				  .then(function () {
				    // always executed
				  });
			  }
			}).then((result) => {
			  if (result.value) {
			    vm.$swal.fire(
			      'Sukses!',
			      'Data telah berhasil dihapus ',
			      'success'
			    )
			  }
			})
		}
	}
});
</script>
