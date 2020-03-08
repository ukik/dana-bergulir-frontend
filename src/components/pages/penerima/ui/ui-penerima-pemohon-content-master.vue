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
		<select class="custom-select mb-3">
		  <option selected value="10">10</option>
		  <option value="20">20</option>
		  <option value="30">30</option>
			<option value="40">40</option>
		  <option value="50">50</option>
		</select>
		Entries
	  <b-table striped hover sticky-header v-if="mounted" :items="items" :fields="fields">
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
		    <div class="col-4">
					<b-pagination
						v-model="currentPage"
						:total-rows="rows"
						:per-page="perPage"
						align="fill"
						size=""
						class=""
					></b-pagination>

					<!-- <div class="input-group">
			        <span class="input-group-btn">
			            <button type="button" class="btn">
			              Prev
			            </button>
			        </span>
			        <input type="number" class="form-control ml-2 mr-2" value="1" min="1">
			        <span class="input-group-btn">
			            <button type="button" class="btn">
			                Next
			            </button>
			        </span>
			    </div> -->
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
    rows() {
      return this.items.length
    }
  },
	mounted(){
		setTimeout(() => {
			this.mounted = true;
		}, 300)
	},
	data() {
    return {
			mounted: false,

      currentPage: 1,
      perPage: 10,
      // Note 'isActive' is left out and will not appear in the rendered table
      fields: [
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
      items: function(){
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
