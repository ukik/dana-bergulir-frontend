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

</style>

<template>
	<b-table-simple id="table-peningkatan-diharapkan" class="table b-table table-hover bg-white table-bordered">
		<b-thead head-variant="" class="bg-white table-header text-center">
			<b-tr>
				<b-th colspan="1" rowspan="2">Uraian</b-th>
				<b-th colspan="1" rowspan="2">Sekarang (Rp.)</b-th>
				<b-th colspan="1" rowspan="2">Yang Diharapkan (Rp.)</b-th>
				<b-th colspan="2">Peningkatan</b-th>
			</b-tr>
			<b-tr>
				<b-th colspan="1">(Rp)</b-th>
				<b-th colspan="1">%</b-th>
			</b-tr>
		</b-thead>
		<b-tbody>
			<b-tr v-for="(item, index) in items" :key="index">
				<b-td width="20%">{{ item.deskripsi }}</b-td>

				<b-td width="20%" class="text-center">
					<div class="input-group">
						<span v-middle>Rp. </span>
						<input @input="onCalculateByNominal" :id="'peningkatan_diharapkan_nominal_sekarang'+index"  :name="'peningkatan_diharapkan_nominal_sekarang'+index" :readonly="propsDisabled" :required="true"  :value="item.nominal_sekarang" type="number" min="1" class="form-control ml-2" :placeholder="0 | currency">
					</div>
					<!-- Required -->
					<p v-if="propsfieldErrors['peningkatan_diharapkan_nominal_sekarang'+index]" class="required-alert">wajib dilengkapi <br> minimal {{ 1 | currency}}</p>

				</b-td>

				<b-td width="20%" class="text-center">
					<div class="input-group">
						<span v-middle>Rp. </span>
						<input @input="onCalculateByNominal" :disabled="item.nominal_sekarang <= 0 || propsDisabled" :id="'peningkatan_diharapkan_nominal_diharapkan'+index" :name="'peningkatan_diharapkan_nominal_diharapkan'+index" :required="true"  :value="item.nominal_diharapkan" type="number" min="1" class="form-control ml-2" :placeholder="0 | currency">
					</div>

					<!-- Required -->
					<p v-if="propsfieldErrors['peningkatan_diharapkan_nominal_diharapkan'+index]" class="required-alert">wajib dilengkapi <br> minimal {{ 1 | currency}}</p>
				</b-td>

				<b-td width="15%">{{ item.nominal_peningkatan | currency }}</b-td>

				<b-td class="text-center" width="15%">
					<div class="input-group">
						<input @input="onCalculateByPercent" :disabled="item.nominal_sekarang <= 0  || propsDisabled" :id="'peningkatan_diharapkan_persentase_peningkatan'+index" :name="'peningkatan_diharapkan_persentase_peningkatan'+index"  :value="item.persentase_peningkatan" type="number" min="0" step="0.01" class="form-control mr-2" :placeholder="0">
						<span v-middle>%</span>
					</div>

				</b-td>
			</b-tr>
		</b-tbody>
	</b-table-simple>
</template>

<script>

export default {
  name: 'ui-proposal-tahap-5-content-peningkatan-diharapkan',
	props: ['items', 'propsfieldErrors', "propsDisabled"],
	methods: {
		onCalculateByNominal() { // modal yang dirubah
			const val = this.items
			let newVal = []

			for (let i = 0; i < val.length; i++) {

				let deskripsi = val[i].deskripsi;
				let nominal_sekarang = Number(document.getElementById('peningkatan_diharapkan_nominal_sekarang'+i).value);
				let nominal_diharapkan = Number(document.getElementById('peningkatan_diharapkan_nominal_diharapkan'+i).value);
				let nominal_peningkatan = val[i].nominal_peningkatan;
				let persentase_peningkatan = Number(document.getElementById('peningkatan_diharapkan_persentase_peningkatan'+i).value);

				if(nominal_diharapkan > 0) {
					nominal_peningkatan = nominal_diharapkan;

					// “Persentase (%) = (bagian/seluruh) x 100”
					persentase_peningkatan = (nominal_diharapkan/nominal_sekarang) * 100;
				} else {
					nominal_peningkatan = 0;
					persentase_peningkatan = 0
				}

				newVal.push({
					deskripsi: deskripsi,
					nominal_sekarang: Math.round(nominal_sekarang),
					nominal_diharapkan: Math.round(nominal_diharapkan),
					nominal_peningkatan: Math.round(nominal_peningkatan),
					persentase_peningkatan: Number(persentase_peningkatan).toFixed(2),
				})
			}

			this.$emit('onBubbleEvent', newVal)
		},
		onCalculateByPercent() { // persent yang dirubah
			const val = this.items
			let newVal = []

			for (let i = 0; i < val.length; i++) {

				let deskripsi = val[i].deskripsi;
				let nominal_sekarang = Number(document.getElementById('peningkatan_diharapkan_nominal_sekarang'+i).value);
				let nominal_diharapkan = Number(document.getElementById('peningkatan_diharapkan_nominal_diharapkan'+i).value);
				let nominal_peningkatan = val[i].nominal_peningkatan;
				let persentase_peningkatan = Number(document.getElementById('peningkatan_diharapkan_persentase_peningkatan'+i).value);

				if(nominal_sekarang > 0) {
					nominal_diharapkan = ((nominal_sekarang * persentase_peningkatan) / 100);
					nominal_peningkatan = nominal_diharapkan;
				} else {
					nominal_diharapkan = 0;
					nominal_peningkatan = 0;
				}

				newVal.push({
					deskripsi: deskripsi,
					nominal_sekarang: Math.round(nominal_sekarang),
					nominal_diharapkan: Math.round(nominal_diharapkan),
					nominal_peningkatan: Math.round(nominal_peningkatan),
					persentase_peningkatan: Number(persentase_peningkatan).toFixed(2),
				})
			}

			this.$emit('onBubbleEvent', newVal)
		}
	}
}
</script>
