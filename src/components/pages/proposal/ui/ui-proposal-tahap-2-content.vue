<style scoped>

.subtitle {
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
	<form @submit.prevent="">
		<b-row class="mb-2 section p-3">
			<b-col class="p-0" cols="12">
				<h3 class="subtitle mb-3">Kelembagaan</h3>

				<!-- Kode Pelanggan -->
				<b-row class="mb-2">
			    <b-col class="col-4">
						<span>Kode Pelanggan</span>
					</b-col>
			    <b-col>
						<div class="input-group">
						  : <input type="text" class="form-control ml-2" placeholder="">
						</div>
					</b-col>
			  </b-row>

				<!-- No Proposal -->
				<b-row class="mb-2">
			    <b-col class="col-4">
						<span>No Proposal</span>
					</b-col>
			    <b-col>
						<div class="input-group">
						  : <input type="text" class="form-control ml-2" placeholder="">
						</div>
					</b-col>
			  </b-row>

				<!-- Nama Pemilik -->
				<b-row class="mb-2">
					<b-col class="col-4">
						<span>Nama Pemilik</span>
					</b-col>
					<b-col>
						<div class="input-group">
							: <input type="text" class="form-control ml-2" placeholder="">
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
							: <input type="text" class="form-control ml-2" placeholder="">
						</div>
					</b-col>
				</b-row>

				<!-- No KK -->
				<b-row class="mb-2">
					<b-col class="col-4">
						<span>No KK</span>
					</b-col>
					<b-col>
						<div class="input-group">
							: <input type="text" class="form-control ml-2" placeholder="">
						</div>
					</b-col>
				</b-row>

				<!-- No Rekening -->
				<b-row class="mb-2">
					<b-col class="col-4">
						<span>No Rekening</span>
					</b-col>
					<b-col>
						<div class="input-group">
							: <input type="text" class="form-control ml-2" placeholder="">
						</div>
						<small class="form-text text-muted">
							NB : *untuk kebutuhan pembayaran nasabah
						</small>
					</b-col>
				</b-row>

				<!-- Tanggal Proposal -->
				<b-row class="mb-2">
			    <b-col class="col-4">
						<span>Tanggal Proposal</span>
					</b-col>
			    <b-col>
						<div class="input-group">
						  : <input type="text" class="form-control ml-2" placeholder="">
						</div>
					</b-col>
			  </b-row>

				<!-- Nama Usaha -->
				<b-row class="mb-2">
			    <b-col class="col-4">
						<span>Nama Usaha</span>
					</b-col>
			    <b-col>
						<div class="input-group">
						  : <input type="text" class="form-control ml-2" placeholder="">
						</div>
					</b-col>
			  </b-row>

				<!-- Alamat -->
				<b-row class="mb-2">
			    <b-col class="col-4">
						<span>Alamat</span>
					</b-col>
			    <b-col>
						<div class="input-group">
						  : <textarea class="form-control ml-2" rows="3"></textarea>
						</div>
					</b-col>
			  </b-row>

				<!-- Telpon -->
				<b-row class="mb-2">
			    <b-col class="col-4">
						<span>Telpon</span>
					</b-col>
			    <b-col>
						<div class="input-group">
						  : <input type="text" class="form-control ml-2" placeholder="">
						</div>
					</b-col>
			  </b-row>

				<!-- Fax -->
				<b-row class="mb-2">
			    <b-col class="col-4">
						<span>Fax</span>
					</b-col>
			    <b-col>
						<div class="input-group">
						  : <input type="text" class="form-control ml-2" placeholder="">
						</div>
					</b-col>
			  </b-row>

				<!-- Tahun Terbentuknya UKM -->
				<b-row class="mb-2">
			    <b-col class="col-4">
						<span>Tahun Terbentuknya UKM</span>
					</b-col>
			    <b-col>
						<div class="input-group">
						  : <input type="text" class="form-control ml-2" placeholder="">
						</div>
					</b-col>
			  </b-row>

				<!-- Penghargaan/Pinjaman  yang pernah diperoleh -->
				<b-row class="mb-2">
			    <b-col class="col-4">
						<span>Penghargaan/Pinjaman yang pernah diperoleh</span>
					</b-col>
			    <b-col>
						<div class="input-group">
						  : <b-form-checkbox-group class="ml-2" v-model="checked">
						    <b-form-checkbox value="me">Bila ada, sebutkan</b-form-checkbox>
						  </b-form-checkbox-group>
						</div>
						<div class="input-group">
						  <input type="text" class="form-control ml-2" placeholder="">
						</div>
					</b-col>
			  </b-row>

			</b-col>
			<b-col cols="12">
				<div class="mt-3">
					<div class="column-right">
						<button @click.prevent="gotoPage('/proposal-tahap-1')" class="btn non-next mr-2 pl-3 pr-3">Pervious</button>
						<button @click.prevent="gotoPage('/proposal-tahap-3')" class="btn next mr-2 pl-3 pr-3">Next</button>
						<button class="btn non-next pl-3 pr-3">Finish</button>
					</div>
				</div>
			</b-col>
		</b-row>
	</form>
</fragment>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ui-proposal-tahap-2-content',
	data() {
    return {
			checked: [],
    }
  }
});
</script>
