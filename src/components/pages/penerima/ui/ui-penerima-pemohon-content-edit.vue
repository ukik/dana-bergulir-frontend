<style scoped>

input {
	height: 30px;
}

textarea, input, select {
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

<form @submit.prevent="">
	<!-- Nama UKM -->
	<b-row class="mb-2">
    <b-col class="col-4">
			<span>Nama UKM</span>
		</b-col>
    <b-col>
			<div class="input-group">
			  : <input type="text" class="form-control ml-2" placeholder="">
			</div>
		</b-col>
  </b-row>

	<!-- Kode -->
	<b-row class="mb-2">
		<b-col class="col-4">
			<span>Kode</span>
		</b-col>
    <b-col>
			<div class="input-group">
			  : <input type="text" class="form-control ml-2" placeholder="UKM">
			</div>
		</b-col>
	</b-row>

	<!-- Alamat -->
	<b-row class="mb-2">
		<b-col class="col-4">
			<span>Kode</span>
		</b-col>
    <b-col>
			<div class="input-group">
				: <textarea class="form-control ml-2" rows="3"></textarea>
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

	<!-- Telepon -->
	<b-row class="mb-2">
		<b-col class="col-4">
			<span>Telepon</span>
		</b-col>
		<b-col>
			<div class="input-group">
				: <input type="text" class="form-control ml-2" placeholder="">
			</div>
		</b-col>
	</b-row>

	<!-- Provinsi -->
	<b-row class="mb-2">
		<b-col class="col-4">
			<span>Provinsi</span>
		</b-col>
		<b-col>
			<div class="input-group">
				:
				<b-form-select
		      v-model="selected_provinsi"
		      :options="options_provinsi"
		      class="ml-2"
		      value-field="item"
		      text-field="name"
		      disabled-field="notEnabled"
		    ></b-form-select>
			</div>
		</b-col>
	</b-row>

	<!-- Kabupaten -->
	<b-row class="mb-2">
		<b-col class="col-4">
			<span>Kabupaten</span>
		</b-col>
		<b-col>
			<div class="input-group">
				:
				<b-form-select
					v-model="selected_kabupaten"
					:options="options_kabupaten"
					class="ml-2"
					value-field="item"
					text-field="name"
					disabled-field="notEnabled"
				></b-form-select>
			</div>
		</b-col>
	</b-row>

	<!-- Kecamatan -->
	<b-row class="mb-2">
		<b-col class="col-4">
			<span>Kecamatan</span>
		</b-col>
		<b-col>
			<div class="input-group">
				:
				<b-form-select
					v-model="selected_kecamatan"
					:options="options_kecamatan"
					class="ml-2"
					value-field="item"
					text-field="name"
					disabled-field="notEnabled"
				></b-form-select>
			</div>
		</b-col>
	</b-row>

	<!-- Kelurahan -->
	<b-row class="mb-2">
		<b-col class="col-4">
			<span>Kelurahan</span>
		</b-col>
		<b-col>
			<div class="input-group">
				: <input type="text" class="form-control ml-2" placeholder="">
			</div>
		</b-col>
	</b-row>

	<div class="mt-3">
		<div class="column-right">
			<button @click.prevent="$router.back()" class="btn btn-danger cancel mr-2 pl-3 pr-3">Batal</button>
			<button class="btn btn-primary submit pl-3 pr-3">Simpan Data</button>
		</div>
	</div>
</form>
</fragment>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ui-penerima-pemohon-content-edit',
	data() {
    return {
			selected_provinsi: '', // options_provinsi > item
			options_provinsi: [
				{ item: '', name: ':: Pilih Provinsi ::', notEnabled: true },
				{ item: 'A', name: 'Option A' },
				{ item: 'B', name: 'Option B' },
			],

			selected_kabupaten: '', // options_kabupaten > item
			options_kabupaten: [
				{ item: '', name: ':: Pilih Kabupaten ::', notEnabled: true },
				{ item: 'A', name: 'Option A' },
				{ item: 'B', name: 'Option B' },
			],

			selected_kecamatan: '', // options_kecamatan > item
			options_kecamatan: [
				{ item: '', name: ':: Pilih Kecamatan ::', notEnabled: true },
				{ item: 'A', name: 'Option A' },
				{ item: 'B', name: 'Option B' },
			],

    }
  }
});
</script>
