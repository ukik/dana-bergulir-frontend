<style scoped>
.subtitle {
	font-family: Montserrat_Bold;
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;

	color: #555555;
}

.kop-title {
	font-family: Montserrat_Bold;
	font-size: 30px;
	text-transform: uppercase;

	color: #000;
}

.kop-subtitle {
	font-family: Montserrat_Medium;
	font-size: 18px;
	text-transform: uppercase;

	color: #000;
}

.kop-nomor {
	font-family: Montserrat_Medium;
	font-size: 20px;
	font-weight: bold;
	color: #555555;
}

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
	background: white;
	border-radius: 0px;
}

small {
	float: right;
	color: red !important;
}

</style>

<template>
<fragment>
		<b-row class="mb-2 section p-3 shadow">
			<b-col class="p-0 text-center" cols="12">
				<div class="kop-title pt-5">PROPOSAL</div>
				<div class="kop-nomor pb-3">No. Proposal : xxx/xxxxxx/xxxxx/2020</div>
				<div class="kop-subtitle">
					permohonan pinjaman umkm<br>
					kepada pengelola unit dana bergulir-kumkm<br>
					dinas perindagkop dan ukm<br>
					kabupaten kutai barat
				</div>
			</b-col>
			<b-col class="p-3 pl-4 mt-5" cols="12">
				<ui-proposal-tahap-2-content :propsToolbar="false" :propsDisabled="true">
					<h3 class="subtitle mb-3" style="margin-left:-15px;">A Profil UMKM</h3>
					<h3 class="subtitle mb-3">Info Umum</h3>
				</ui-proposal-tahap-2-content>
				<ui-proposal-tahap-3-content :propsToolbar="false" :propsDisabled="true">
				</ui-proposal-tahap-3-content>
				<ui-proposal-tahap-4-content :propsToolbar="false" :propsDisabled="true">
					<h3 class="subtitle mb-3" style="margin-left:-15px;">B. Profil Usaha</h3>
					<h3 class="subtitle mb-3">Analisa Bisnis</h3>
				</ui-proposal-tahap-4-content>
				<ui-proposal-tahap-5-content :propsToolbar="false" :propsDisabled="true">
					<h3 class="subtitle mb-3" style="margin-left:-15px;">C. Rencana Permohonan Penggunaan Dana Bergulir</h3>
					<h3 class="subtitle mb-3">Pinjaman</h3>
				</ui-proposal-tahap-5-content>
				<ui-proposal-tahap-6-content :propsToolbar="false" :propsDisabled="true">
					<h3 class="subtitle mb-3" style="margin-left:-15px;">D. Ceklist Lampiran yang Sudah Terpenuhi</h3>
					<h3 class="subtitle mb-3">Lampiran</h3>
				</ui-proposal-tahap-6-content>
			</b-col>
			<b-col cols="12">
				<div class="mt-3">
					<div class="column-right">
						<div id="button-prev" @click.prevent="gotoPage('/proposal-tahap-6')" class="btn non-next mr-2 pl-3 pr-3">Pervious</div>
						<button @click="gotoPage('/dashboard')" class="btn non-next pl-3 pr-3">Selesai</button>
					</div>
				</div>
			</b-col>
		</b-row>
</fragment>
</template>

<script lang="ts">

</script>
