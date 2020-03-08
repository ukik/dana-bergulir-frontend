<style scoped>

.subtitle {
	font-family: Montserrat_Light;
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;

	color: #555555;
}


select {
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
</style>

<template>
<fragment>
	<form @submit.prevent="">
		<b-row class="mb-2 section p-3">
			<b-col class="p-0" cols="12">
				<h3 class="subtitle mb-3">Pilih Data</h3>
				<span>Pilih Data UKM yang telah terdaftar</span>
				<div class="input-group mt-3 mb-3">
					<b-form-select
			      v-model="selected_provinsi"
			      :options="options_provinsi"
			      class="col-12 ml-0"
			      value-field="item"
			      text-field="name"
			      disabled-field="notEnabled"
			    ></b-form-select>
				</div>
				<p>
					<span>Atau</span>
				</p>
				<button @click.prevent="gotoPage('/penerima-pemohon-tambah')" class="btn btn-primary next">+ Tambah Data UKM Baru</button>
			</b-col>

			<b-col cols="12">
				<div class="mt-3">
					<div class="column-right">
						<!-- <button @click.prevent="$router.back()" class="btn non-next mr-2 pl-3 pr-3">Pervious</button> -->
						<button @click.prevent="gotoPage('/proposal-tahap-2')" class="btn next mr-2 pl-3 pr-3">Next</button>
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
  name: 'ui-proposal-tahap-1-content',
	data() {
    return {
			selected_provinsi: '', // options_provinsi > item
			options_provinsi: [
				{ item: '', name: ':: Pilih Provinsi ::', notEnabled: true },
				{ item: 'A', name: 'Option A' },
				{ item: 'B', name: 'Option B' },
			],

    }
  }
});
</script>
