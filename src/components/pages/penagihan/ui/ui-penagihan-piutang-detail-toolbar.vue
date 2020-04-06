<template lang="html">
	<div class="toolbar-container">

		<slot />

		<form @submit.prevent="" class="input-group toolbar">
			<!-- <div class="col-12">
				<h5 class="subtitle mb-3">Cari Proposal</h5>
			</div> -->

			<div class="col-6">

				<!-- Nama Nasabah -->
				<b-row class="mb-2">
					<b-col class="col-4">
						<span>Nama Nasabah</span>
					</b-col>
					<b-col>
						<div class="input-group">
							: <input type="text" class="form-control ml-2" placeholder="">
						</div>
					</b-col>
				</b-row>

				<!-- Tarif Layanan/Bunga -->
				<b-row class="mb-2">
					<b-col class="col-4">
						<span>Bunga</span>
					</b-col>
					<b-col>
						<div class="input-group">
							: <input type="text" class="form-control ml-2" placeholder="">
						</div>
					</b-col>
				</b-row>

				<!-- Jangka Waktu  -->
				<b-row class="mb-2">
					<b-col class="col-4">
						<span>Jangka Waktu</span>
					</b-col>
					<b-col>
						<div class="input-group">
							: <input type="text" class="form-control ml-2" placeholder="">
						</div>
					</b-col>
				</b-row>
			</div>

		<div class="col-6">

			<!-- Pokok -->
			<b-row class="mb-2">
				<b-col class="col-4">
					<span>Pokok</span>
				</b-col>
				<b-col>
					<div class="input-group">
						: <input type="text" class="form-control ml-2" placeholder="">
					</div>
				</b-col>
			</b-row>

			<!-- ID Proposal -->
			<b-row class="mb-2">
				<b-col class="col-4">
					<span>ID Proposal</span>
				</b-col>
				<b-col>
					<div class="input-group">
						: <input type="text" class="form-control ml-2" placeholder="">
					</div>
				</b-col>
			</b-row>

		</div>

	</form>
	</div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
input {
	background: #FFFFFF;
	border-radius: 10px !important;
	height: 30px;
}

button {
	background: #58C0E7;
	border-radius: 10px;

	font-family: Montserrat_Light;
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	/* line-height: 18px; */
	text-align: center;

	color: #FFFFFF;
}

button:hover {
	color: #FFFFFF;
}

.btn-cari {
	/* width: 180px; */
	font-family: Montserrat_Light;
	font-size: 14px;
	padding: 5px 15px;
	border-width: 0px;
	/* height: 28px; */
}
.btn-cari:focus {
	background: #58C0E7;
}
.toolbar-container {
	background: white;
	padding: 10px;
	border-radius: 10px;
}

.toolbar {
	background: #ECF0F1 !important;
	padding: 20px 0;
	border-radius: 10px;
}
</style>
