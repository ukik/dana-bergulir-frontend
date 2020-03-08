<style scoped>
.section-parent {
	background: #fff;
	border-radius: 10px;
}

button {
	width: auto;
	/* height: 40px; */

	font-size: 13px;

	border-radius: 20px;
}

.color-current {
	background: #FCAD46;
}

.color-before {
	background: #EFEEEE;
}

.color-after {
	background: #58C0E7;
}

.rounded-circle {
	height: 20px;
	width: 20px;
	float: left;
	background: #4C535D;
	color: #fff;
}

span {
	float: right;
}

.badges {
	/* zoom: 0.825; */
}
</style>

<template>
	<div>
		<div class="pt-2 pb-4">
			<ui-proposal-meta title="Permohonan Pinjaman / Pembiayaan UKM" />
		</div>
		<div class="col-12 p-4 section-parent">

			<div class="badges">
				<button v-for="(badge, index) in badges" :class="badgeColor(badge.status)">
					<div class="rounded-circle">{{ index + 1 }}</div>
					<span> {{ badge.label }}</span>
				</button>
			</div>

			<div class="col-12">
				<ui-proposal-tahap-4-content />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'proposal-tahap-2',
	computed: {
		badgeColor(){
			return function(val:any) {
				switch (val) {
					case "current":
						return "btn color-current mr-2 mb-4";
					case "before":
						return "btn color-before mr-2 mb-4";
					case "after":
						return "btn color-after mr-2 mb-4";
				}
			}
		}
	},
	data(){
		return {
			badges: [
				{
					status:"after",
					label:"Pilih Data",
				},
				{
					status:"after",
					label:"Info Umum",
				},
				{
					status:"after",
					label:"Kelembagaan",
				},
				{
					status:"current",
					label:"Aspek Pasar",
				},
				{
					status:"before",
					label:"Asp. Produksi",
				},
				{
					status:"before",
					label:"Asp. Manajemen",
				},
				{
					status:"before",
					label:"Asp. Keuangan",
				},
				{
					status:"before",
					label:"Peng. Usaha",
				},
				{
					status:"before",
					label:"Peng. Pinjaman",
				},
			]
		}
	}

});
</script>
