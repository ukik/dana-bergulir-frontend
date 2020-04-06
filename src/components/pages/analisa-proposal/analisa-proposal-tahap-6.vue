<style scoped>
.section-parent {
	background: #fff;
	border-radius: 10px;
}

button {
	border-radius: 10px;
	border-width: 0px;

	font-family: Montserrat_Light;
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	text-align: center;

	color: #ffffff;
}

button:hover {
	color: #ffffff;
}

.print {
	background: #05AF8F;
}

.next {
	background: #58C0E7;
}

.column-right {
  float: right;
}
/* button {
	width: auto;


	font-size: 13px;

	border-radius: 20px;
} */

.color-current {
	background: #FCAD46;
}

.color-before {
	background: #C4C4C4;
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
  color: #fff;
  font-size: 12px;
  font-family: Montserrat_Medium;
}

</style>

<template>
	<div>
		<div class="pt-2 pb-4">
			<ui-analisa-proposal-meta title="Singkronisasi" />
		</div>

		<div class="mb-2">
			<button v-pointer-proposal="badge" v-for="(badge, index) in badges" :class="badgeColor(badge.status)" @click="onNavBadge(badge, index)">
				<span> {{ badge.label }}</span>
			</button>
		</div>

		<ui-proposal-toolbar-tahap class="mb-4">
			<!-- <button v-pointer-proposal="badge" v-for="(badge, index) in badges" :class="badgeColor(badge.status)" @click="onNavBadge(badge, index)">
				<span> {{ badge.label }}</span>
			</button> -->
		</ui-proposal-toolbar-tahap>

		<ui-analisa-proposal-tahap-6-content />

		<b-col cols="12">
			<div class="mt-3">
				<div class="column-right">
					<div id="button-prev" @click.prevent="$router.back()" class="btn non-next mr-2 pl-3 pr-3">Kembali</div>
					<div id="button-print" @click.prevent="" class="btn print mr-2 pl-3 pr-3">Print</div>
					<button type="submit" @click.prevent="gotoPage('/analisa-proposal-master')" class="btn next mr-0 pl-3 pr-3">Simpan & Lanjut</button>
				</div>
			</div>
		</b-col>

	</div>
</template>

<script>

import UiProposalToolbarTahap from './ui/ui-proposal-toolbar-tahap'

export default {
	components: {
		UiProposalToolbarTahap
	},
	computed: {
		badgeColor(){
			return function(val) {
				switch (val) {
					case "current":
						return "btn color-current mr-2 mb-3 mt-2";
					case "before":
						return "btn color-before mr-2 mb-3  mt-2";
					case "after":
						return "btn color-after mr-2 mb-3  mt-2";
				}
			}
		}
	},
	data(){
		return {
			badges: [
				{
					status:"after",
					label:"Singkron",
				},
				{
					status:"current",
					label:"Analisa Perh. Pinjaman",
				},
				{
					status:"before",
					label:"An. Niliai Agunan Kendaraan",
				},
				{
					status:"before",
					label:"An. Niliai Agunan Bangunan",
				},
				{
					status:"before",
					label:"Rekap Agunan",
				},
				{
					status:"before",
					label:"Rekap hasil Analisa",
				},
			]
		}
	}

};
</script>
