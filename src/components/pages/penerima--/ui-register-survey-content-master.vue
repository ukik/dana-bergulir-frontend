<style scoped>

.btn-add {
	width: 153px;
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
			<button @click="gotoPage('/penerima-pemohon-tambah')" class="btn btn-add">+ Tambah Data</button>
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
		Show
		<select class="custom-select mb-3" v-model="database.reference.reference_fields_perPage">
		  <option selected value="10">10</option>
		  <option value="20">20</option>
		  <option value="30">30</option>
			<option value="40">40</option>
		  <option value="50">50</option>
		</select>
		Entries
	  <b-table striped hover sticky-header v-if="mounted" :items="database.payload.payload_items" :fields="database.reference.reference_fields">
			<!-- Optional default data cell scoped slot -->
      <template v-slot:cell(action)="data">
				<a @click="gotoPage('/penerima-pemohon-edit')" class="btn btn-edit mr-1">
					<font-awesome-icon icon="pencil-alt" />
				</a>

				<a @click="onDelete" class="btn btn-delete">
					<font-awesome-icon icon="trash-alt" />
				</a>
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
						:total-rows="suervey_rows"
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

export default Vue.extend({
  name: 'ui-penerima-pemohon-content-master',
	computed: {
    suervey_rows() {
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
					payload_items: function(){
						let items = []
						for (let i = 0; i < 100; i++) {
							const n = Math.round(Math.random()*1000);
							const element = items.push({
								// isActive: true,
								kode: i,
								nama: 'nama '+i,
								gender: 'gender '+i,
								telepon: 'telepon '+i,
								alamat: 'alamat '+i,
								action: '<icon>',
							});
						}

						return items
					}(),
				},
				reference: {
					reference_fields_currentPage: 1,
		      reference_fields_perPage: 10,
					// Note 'isActive' is left out and will not appear in the rendered table
		      reference_fields: [
		        {
		          key: 'kode',
		          label: 'Kode',
		          sortable: true,
		          // Variant applies to the whole column, including the header and footer
		          // variant: 'danger'
		        },
						{
		          key: 'nama',
		          label: 'Nama',
		          sortable: true,
		          // Variant applies to the whole column, including the header and footer
		          // variant: 'danger'
		        },
						{
		          key: 'gender',
		          label: 'Gender',
		          sortable: true,
		          // Variant applies to the whole column, including the header and footer
		          // variant: 'danger'
		        },
						{
		          key: 'telepon',
		          label: 'Telepon',
		          sortable: true,
		          // Variant applies to the whole column, including the header and footer
		          // variant: 'danger'
		        },
						{
		          key: 'alamat',
		          label: 'Alamat',
		          sortable: true,
		          // Variant applies to the whole column, including the header and footer
		          // variant: 'danger'
		        },
						{
		          key: 'action',
		          label: 'Action',
		          sortable: false,
		          // Variant applies to the whole column, including the header and footer
		          // variant: 'danger'
		        },
		      ],
				}
			},
			mounted: false,
    }
  },
	methods: {
		onDelete(){
			const ipAPI = '//api.ipify.org'

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

					this.$axios.get(ipAPI)
				  .then(function (response) {
				    // handle success
				    console.log(response);
				  })
				  .catch(function (error) {
				    // handle error
				    console.log(error);

						this.$swal.fire(
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
			    this.$swal.fire(
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
