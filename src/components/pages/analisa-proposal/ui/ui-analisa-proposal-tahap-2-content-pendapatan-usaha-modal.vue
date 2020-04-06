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

.readonly {
  background: #e9ecef !important;
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

.table-header input {
	font-family: Montserrat_Medium;
	font-size: 12px;
}

</style>

<template>
<fragment>
<form @submit.prevent="onEdit">
		<b-col class="p-0" cols="12">

				<b-table-simple class="table b-table table-hover bg-white table-bordered">
					<b-thead head-variant="" class="bg-white table-header">
						<b-tr >
							<b-th v-vmiddle style="width:30%;" colspan="1" rowspan="3">Deskripsi</b-th>
							<b-th colspan="1">Bulan 1</b-th>
							<b-th colspan="1">Bulan 2</b-th>
							<b-th colspan="1">Bulan 3</b-th>
						</b-tr>
						<b-tr>
							<b-th>
								<div class="input-group">
									<!-- Bulan: -->
									<input name="bulan_ke_1" id="bulan_ke_1"  :required="true" maxlength="2" minlength="1" v-model="database.payload.payload_items_perhitungan_laba_rugi.bulan_ke_1" type="text" class="form-control ml-2 mr-2" placeholder="bulan">
									<!-- Tahun: -->
									<input name="tahun_ke_1" id="tahun_ke_1"  :required="true" maxlength="4" minlength="1" v-model="database.payload.payload_items_perhitungan_laba_rugi.tahun_ke_1" type="text" class="form-control ml-2" placeholder="tahun">
								</div>
								<!-- Required -->
								<p v-if="fieldErrors.bulan_ke_1 && fieldErrors.tahun_ke_1" class="required-alert">wajib dilengkapi</p>
							</b-th>
							<b-th>
								<div class="input-group">
									<!-- Bulan: -->
									<input name="bulan_ke_2" id="bulan_ke_2"  :required="true" maxlength="2" minlength="1" v-model="database.payload.payload_items_perhitungan_laba_rugi.bulan_ke_2" type="text" class="form-control ml-2 mr-2" placeholder="bulan">
									<!-- Tahun: -->
									<input name="tahun_ke_2" id="tahun_ke_2"  :required="true" maxlength="4" minlength="1" v-model="database.payload.payload_items_perhitungan_laba_rugi.tahun_ke_2" type="text" class="form-control ml-2" placeholder="tahun">
								</div>
								<!-- Required -->
								<p v-if="fieldErrors.bulan_ke_2 && fieldErrors.tahun_ke_2" class="required-alert">wajib dilengkapi</p>
							</b-th>
							<b-th>
								<div class="input-group">
									<!-- Bulan: -->
									<input name="bulan_ke_3" id="bulan_ke_3"  :required="true" maxlength="2" minlength="1" v-model="database.payload.payload_items_perhitungan_laba_rugi.bulan_ke_3" type="text" class="form-control ml-2 mr-2" placeholder="bulan">
									<!-- Tahun: -->
									<input name="tahun_ke_3" id="tahun_ke_3"  :required="true" maxlength="4" minlength="1" v-model="database.payload.payload_items_perhitungan_laba_rugi.tahun_ke_3" type="text" class="form-control ml-2" placeholder="tahun">
								</div>
								<!-- Required -->
								<p v-if="fieldErrors.bulan_ke_3 && fieldErrors.tahun_ke_3" class="required-alert">wajib dilengkapi</p>
							</b-th>
						</b-tr>
					</b-thead>
					<b-tbody>
						<b-tr v-for="(item, index) in database.payload.payload_items_perhitungan_laba_rugi.payload" :key="index">
							<b-td :class="item.deskripsi_class">{{ item.deskripsi }}</b-td>
							<b-td>
								<input :name="'bulan1'+index" :id="'bulan1'+index" :disabled="item.disabled" :required="true" v-model="item.bulan1" type="number" min="0" :class="item.disabled ? 'form-control readonly' : 'form-control'" :placeholder="0 | currency">
								<!-- Required -->
								<p v-if="fieldErrors['bulan1'+index]" class="required-alert">wajib dilengkapi</p>
							</b-td>
							<b-td>
								<input :name="'bulan2'+index" :id="'bulan2'+index" :disabled="item.disabled" :required="true" v-model="item.bulan2" type="number" min="0" :class="item.disabled ? 'form-control readonly' : 'form-control'" :placeholder="0 | currency">
								<!-- Required -->
								<p v-if="fieldErrors['bulan2'+index]" class="required-alert">wajib dilengkapi</p>
							</b-td>
							<b-td>
								<input :name="'bulan3'+index" :id="'bulan3'+index" :disabled="item.disabled" :required="true" v-model="item.bulan3" type="number" min="0" :class="item.disabled ? 'form-control readonly' : 'form-control'" :placeholder="0 | currency">
								<!-- Required -->
								<p v-if="fieldErrors['bulan3'+index]" class="required-alert">wajib dilengkapi</p>
							</b-td>
						</b-tr>
					</b-tbody>
				</b-table-simple>

		</b-col>

			<br>
			<button class="btn m-auto col-5 btn-block btn-add">Selesai</button>
</form>
</fragment>
</template>

<script lang="ts">
import Vue from 'vue';

import {
  database
} from "@/models/analisa-proposal-tahap/analisa-proposal-tahap-2-pendapatan-usaha-modal";

export default Vue.extend({
	watch: {
		database: {
			handler(val) {
				// Async this local data to vuex
				this.dispatch_analisa_proposal_tahap_2_pendapatan_usaha_modal(val)
			},
			deep: true,
			immediate: false,
		},
	},
	created(){
		if(this.getters_analisa_proposal_tahap_2_pendapatan_usaha_modal) {
			// Request from vuex
			this.database = this.getters_analisa_proposal_tahap_2_pendapatan_usaha_modal
		}

		// Request from server to update vuex
		this.database = database
		console.log(this.database)
		return
	},
	data() {
    return {
			payload: {
				payload_items_perhitungan_laba_rugi: null
			}
    }
  },
	methods: {
		onEdit() {
			this.$bvModal.hide('ui-analisa-proposal-tahap-2-content-pendapatan-usaha-modal')
			this.$emit("onBubbleEvent", this.database)
		}
	}
});
</script>
