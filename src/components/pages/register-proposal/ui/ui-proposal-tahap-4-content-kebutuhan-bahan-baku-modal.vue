<style scoped>

input {
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


button:hover, .btn-delete:hover, .btn-add:hover {
	color: #ffffff;
}

.btn-add {
	background: #58C0E7;
	border-radius: 5px;
	color: #ffffff;
	border: 0px;
	font-size: 14px;
}


</style>

<template>
<fragment>
<form @submit.prevent="onTambahkan">
		<b-col class="p-0" cols="12">

			<!-- Bahan Baku / Barang Dagang -->
			<b-row class="mb-2">
				<b-col class="col-5">
					<span>Bahan Baku / Barang Dagang</span>
				</b-col>
				<b-col>
					<div class="input-group">
					:  <input required v-model="database.bahan_baku" type="text" class="form-control ml-2" placeholder="">
					</div>
				</b-col>
			</b-row>

			<!-- Kebutuhan / Bulanan -->
			<b-row class="mb-2">
				<b-col class="col-5">
					<span>Kebutuhan / Bulanan</span>
				</b-col>
				<b-col>
					<div class="input-group">
					:	<input required v-model="database.kebutuhan_bulanan" type="text" class="form-control ml-2" placeholder="">
					</div>
				</b-col>
			</b-row>

			<!-- Produk yang Dijual -->
			<b-row class="mb-2">
				<b-col class="col-5">
					<span>Produk yang Dijual</span>
				</b-col>
				<b-col>
					<div class="input-group">
					:  <input required v-model="database.produk" type="text" class="form-control ml-2" placeholder="">
					</div>
				</b-col>
			</b-row>

			<!-- Harga Beli (Rp) -->
			<b-row class="mb-2">
				<b-col class="col-5">
					<span>Harga Beli (Rp)</span>
				</b-col>
				<b-col>
					<div class="input-group">
					:	<input required v-model="database.harga_beli" type="text" class="form-control ml-2" placeholder="">
					</div>
				</b-col>
			</b-row>

			<!-- Pemasok Utama -->
			<b-row class="mb-2">
				<b-col class="col-5">
					<span>Pemasok Utama</span>
				</b-col>
				<b-col>
					<div class="input-group">
					:	<input required v-model="database.pemasok_utama" type="text" class="form-control ml-2" placeholder="">
					</div>
				</b-col>
			</b-row>

				<!-- Pembayaran Tunai /Kredit -->
				<b-row class="mb-2">
					<b-col class="col-5">
						<span>Pembayaran Tunai/Kredit</span>
					</b-col>
					<b-col>
						<div class="input-group">
						:	<input required v-model="database.pembayaran" type="text" class="form-control ml-2" placeholder="">
						</div>
					</b-col>
				</b-row>
		</b-col>

			<br>
			<button class="btn m-auto col-5 btn-block btn-add">Tambahkan</button>
</form>
</fragment>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ui-proposal-tahap-4-content-kebutuhan-bahan-baku-modal',
	data() {
    return {
			database:{
				bahan_baku:"",
				kebutuhan_bulanan:"",
				harga_beli:"",
				pemasok_utama:"",
				pembayaran:"",
			}
    }
  },
	methods: {
		onTambahkan() {
			this.$bvModal.hide('ui-proposal-tahap-4-content-kebutuhan-bahan-baku-modal')
			this.$emit("onBubbleEvent", this.database)
		}
	}
});
</script>
