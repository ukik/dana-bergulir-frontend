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
			<ui-proposal-meta title="D. Lampiran" />
		</div>
		<div class="col-12 p-4 section-parent">

			<div class="badges">
				<button v-pointer-proposal="badge" :style="badgeWidth" v-for="(badge, index) in badges" :class="badgeColor(badge.status)" @click="onNavBadge(badge, index)">
					<div class="rounded-circle">{{ badge.pin }}</div>
					<span> {{ badge.label }}</span>
				</button>
			</div>

			<div class="col-12">
				<ui-proposal-tahap-6-content :propsToolbar="true" :propsDisabled="false" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'proposal-tahap-2',
	computed: {
		badgeWidth(){
			return "width:"+100/7.5+"%"
		},
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
					pin:"",
				},
				{
					status:"after",
					label:"Info Umum",
					pin:"A.1",
				},
				{
					status:"after",
					label:"Kelembagaan",
					pin:"A.2",
				},
				{
					status:"after",
					label:"Analisa Bisnis",
					pin:"B",
				},
				{
					status:"after",
					label:"Pinjaman",
					pin:"C",
				},
				{
					status:"current",
					label:"Lampiran",
					pin:"D",
				},
				{
					status:"before",
					label:"Ringkasan",
					pin:"E",
				},
			]
		}
	}

});
</script>
