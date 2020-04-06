<style scoped>
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

	display: contents;
}

#table-peningkatan-diharapkan th {
	vertical-align: middle;
}

.table-header {
	font-family: Montserrat_Bold;
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 15px;
	/* identical to box height */

	text-align: center;
	color: #252323;
}

.readonly {
	background: #B8B0B0;
}

</style>

<template>
<form>
	<b-table-simple class="table b-table table-hover bg-white table-bordered">
		<b-thead head-variant="" class="bg-white table-header text-center">
			<b-tr>
				<b-th colspan="1" rowspan="2">Nomor</b-th>
				<b-th colspan="1" rowspan="2">Analisa Data</b-th>
				<b-th colspan="4">Kesesuaian Singkronisasi</b-th>
				<b-th colspan="1" rowspan="2">Keterangan</b-th>
			</b-tr>
			<b-tr>
				<b-th colspan="1" width="20">1</b-th>
				<b-th colspan="1" width="20">2</b-th>
				<b-th colspan="1" width="20">3</b-th>
				<b-th colspan="1" width="20">4</b-th>
			</b-tr>
		</b-thead>
		<b-tbody>
			<b-tr v-for="(item, index) in items" :key="index">
				<b-td width="10" colspan="1">{{ index+1 }}</b-td>
				<b-td width="300" colspan="1">{{ item.deskripsi }}</b-td>

				<!-- <b-td colspan="1">3</b-td>
				<b-td colspan="1">4</b-td>
				<b-td colspan="1">2</b-td> -->
				<b-td v-for="(i, index1) in 4" :key="'i'+index1" colspan="1">
					<!-- <radio :propsValue="i+1" :propsName="'radio'+i" :propsChecked="item.value == (i+1)" /> -->
					<radio :name="index+'radio'" required @input="onRadioChecked(index, i+1)" :value="i+1" :checked="item.value == (i+1)">

					</radio>
				</b-td>

				<b-td width="200" colspan="1">
					<div class="input-group">
						: <textarea class="form-control ml-2" rows="3"></textarea>
					</div>
				</b-td>
			</b-tr>
		</b-tbody>
		<b-tbody head-variant="" class="bg-white table-header text-center">
			<b-tr>
				<b-th colspan="2">Jumlah</b-th>
				<b-th colspan="4" class="readonly">{{ total_singkronisasi }}</b-th>
				<!-- <b-th colspan="1" class="readonly">2</b-th>
				<b-th colspan="1" class="readonly">3</b-th>
				<b-th colspan="1" class="readonly">4</b-th>
				<b-th colspan="1" class="readonly">2</b-th> -->
			</b-tr>
			<b-tr>
				<b-th colspan="2">Hasil Analisa</b-th>
				<b-th colspan="4" class="readonly">{{ hasil_analisa }}</b-th>
			</b-tr>
		</b-tbody>
	</b-table-simple>
</form>
</template>

<script>

export default {
	computed: {
		total_singkronisasi() {
			let n = 0
			for (var i = 0; i < this.items.length; i++) {
				n += 4 //this.items[i].value
			}
			return n
		},
		hasil_analisa(){
			const total = this.items.length * 4
			if(this.total_singkronisasi >= (total / 2)) {
				return "SINGKRON"
			} else {
				return "TIDAK SINGKRON"
			}
		}
	},
	methods: {
		onRadioChecked(index, value) {
			for (var i = 0; i < this.items.length; i++) {
				if(index == i) {
					this.items[i].value = value
				}
			}
		}
	},
	data() {
		return {
			items: [
				{
					deskripsi:`Status pinjaman sejenis KUMKM sebelumnya a. Belum Pernah Mendapatkan Pinjaman Sebelumnya b. Sudah Pernah Mendapatkan Pinjaman KUMKM dan telah Lunas c. Sudah Pernah Mendapatkan Pinjaman KUMKM dan belum Lunas`,
					value:2,
					catatan:"",
				},
				{
					deskripsi:`Pengecekan keabsahan dokumen a. Dokumen Legalitas usaha (SKU, SITU, SIUP, HO, TDP, TDI, IUMK, ………………..……………………………………………….) b. Dokumen Jaminan / Agunan (BPKB, SERTIFIKAT RUMAH / TANAH, PPAT, SHMT, ………………..…) c. Proposal d. Surat Keterangan Domisili Dari Kepala Kampung e. Surat Rekomendasi dari kecamatan setempat`,
					value:2,
					catatan:"",
				},
				{
					deskripsi:`keabsahan data - data pelengkap (nota - nota, print out buku tabungan, slip gaji, dll)`,
					value:3,
					catatan:"",
				},
				{
					deskripsi:`Singkronisasi data laba-rugi dan managemen keuangan pribadi dengan hasil survey`,
					value:4,
					catatan:"",
				},
				{
					deskripsi:`Singkronisasi nilai agunan yang diberikan`,
					value:1,
					catatan:"",
				},
				{
					deskripsi:`singkronisasi nilai pengajuan pinjaman dengan rincian kebutuhan dana dan hasil wawancara`,
					value:1,
					catatan:"",
				},
				{
					deskripsi:`Lain - lain :`,
					value:null,
					catatan:"",
				},
			]
		}
	}
}
</script>
