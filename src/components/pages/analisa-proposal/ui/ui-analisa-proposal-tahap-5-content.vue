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

.table-responsive {
	border: 1px solid #dee2e6;
}
</style>

<template>
<div class="mt-3 p-4 bg-white">
	<b-table id="master" bordered show-empty responsive hover v-if="mounted" :items="database.payload.payload_items_rekap_agunan" :fields="database.reference.reference_fields_rekap_agunan">
		<template v-slot:head()="data">
			<div class="table-header p-2 text-center" style="width:200px">
				<span class="">{{ data.label }}</span>
			</div>
		</template>
		<template v-slot:head(nomor_agunan_rekap_agunan)="data">
			<div class="table-header p-2" style="width:100px">
				<span class="">{{ data.label }}</span>
			</div>
		</template>

	</b-table>
</div>
</template>

<script>

import {
  database
} from "@/models/analisa-proposal-tahap/analisa-proposal-tahap-5";

export default {
	created(){
		this.initDatabase()

		// Request from server to update vuex
		this.database = database
		// console.log(this.database)
		return
	},
	mounted(){
		setTimeout(() => {
			this.mounted = true;
		}, 300)
	},
	data() {
		return {
			mounted: false,
			database: {
				payload: {
					payload_items_rekap_agunan: null,
				},
				reference: {
					reference_fields_rekap_agunan: null,
				}
			}
		}
	},
	methods: {
		initDatabase(){
			// console.log(!this.getters_proposal_tahap_1)
	    if (this.getters_analisa_proposal_tahap_5) {
	      // Request from vuex
	      this.database = this.getters_analisa_proposal_tahap_5;
	    }
		},
	}
}
</script>
