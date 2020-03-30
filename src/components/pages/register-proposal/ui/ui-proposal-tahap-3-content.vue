<style scoped>

.subtitle {
	font-family: Montserrat_Bold;
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;

	color: #555555;
}

.subtitle-point {
	font-family: Montserrat_Light;
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;

	color: #555555;
}

input {
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

button:hover, .btn-delete:hover, .btn-add:hover {
	color: #ffffff;
}

.btn-delete {
	background: #C54F4F;
	color: #ffffff;
	border-radius: 5px;
	border: 0px;
	font-size: 14px;
}

.btn-add {
	background: #58C0E7;
	border-radius: 5px;
	color: #ffffff;
	border: 0px;
	font-size: 14px;
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
	background: #ECF0F1;
	border-radius: 20px;
}

small {
	float: left;
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

.b-table-sticky-header {
	border: 1px solid #dee2e6;
}

</style>

<template>
<fragment>

	<!-- MODAL -->
	<b-modal id="ui-proposal-tahap-3-content-susun-pemilik-modal" size="lg" hide-footer>
    <template v-slot:modal-title>
			<span class="subtitle">Formulir Susunan Pemilik</span>
    </template>

		<ui-proposal-tahap-3-content-susun-pemilik-modal @onBubbleEvent="onAddPayloadItemsSusunanPemilik" />
  </b-modal>

	<b-modal id="ui-proposal-tahap-3-content-tenaga-kerja-modal" size="lg" hide-footer>
    <template v-slot:modal-title>
			<span class="subtitle">Formulir Susunan Pemilik</span>
    </template>

		<ui-proposal-tahap-3-content-tenaga-kerja-modal @onBubbleEvent="onAddPayloadItemsTenagaKerja" />
  </b-modal>

	<form ref="form" @submit.prevent="onNext"  @change="handleChange" @invalid.capture.prevent="handleInvalid">
		<b-row class="mb-2 section p-3"  v-proposal-review="$route">
			<b-col class="p-0" cols="12">
				<slot>
					<h3 class="subtitle mb-3">Kelembagaan</h3>
				</slot>

				<h3 class="subtitle-point mb-3">2.1 Badan Hukum</h3>

				<div class="ml-3">

					<!-- Bentuk Badan Hukum -->
					<b-row class="mb-2">
				    <b-col class="col-4">
							<span>Bentuk Badan Hukum</span>
						</b-col>
				    <b-col>
							<div class="input-group">
								: <b-form-radio-group
									id="badan_hukum" name="badan_hukum"
									class="ml-2"
									:disabled="propsDisabled" :required="true"
					        v-model="database.payload.payload_badan_hukum.badan_hukum_badan"
					        :options="database.reference.reference_options_bentuk_badan_hukum"
					      ></b-form-radio-group>
								<!-- Required -->
								<p v-if="fieldErrors.badan_hukum" class="required-alert">wajib dilengkapi</p>
							</div>
						</b-col>
				  </b-row>

					<!-- Bila Badan Hukum Bukan Perseorangan, Sebutkan -->
					<b-row class="mb-2">
				    <b-col class="col-4">
							<span>Bila Badan Hukum Bukan Perseorangan, Sebutkan</span>
						</b-col>
				    <b-col>
							<small class="form-text text-muted ml-3">
								No Akte Pendirian
							</small>
							<div class="input-group">
							  : <input :disabled="propsDisabled" :required="true" id="badan_hukum_akte_pendirian" name="badan_hukum_akte_pendirian" v-model="database.payload.payload_badan_hukum.badan_hukum_akte_pendirian" type="text" class="form-control ml-2" placeholder="">
							</div>
							<!-- Required -->
							<p v-if="fieldErrors.badan_hukum_akte_pendirian" class="required-alert">wajib dilengkapi</p>

							<small class="form-text text-muted ml-3">
								No & Tanggal Pengesahan Badan Hukum
							</small>
							<div class="input-group">
							  : <input :disabled="propsDisabled" :required="true" id="badan_hukum_tanggal_pendirian" name="badan_hukum_tanggal_pendirian" v-model="database.payload.payload_badan_hukum.badan_hukum_tanggal_pendirian" type="text" class="form-control ml-2" placeholder="">
							</div>
							<!-- Required -->
							<p v-if="fieldErrors.badan_hukum_tanggal_pendirian" class="required-alert">wajib dilengkapi</p>

							<small class="form-text text-muted ml-3">
								No. Akta Perubahan Anggaran Dasar (Bila ada)
							</small>
							<div class="input-group">
							  : <input :disabled="propsDisabled" :required="true" id="badan_hukum_akte_perubahan" name="badan_hukum_akte_perubahan" v-model="database.payload.payload_badan_hukum.badan_hukum_akte_perubahan" type="text" class="form-control ml-2" placeholder="">
							</div>
							<!-- Required -->
							<p v-if="fieldErrors.badan_hukum_akte_perubahan" class="required-alert">wajib dilengkapi</p>

						</b-col>
				  </b-row>

				</div>

				<h3 class="subtitle-point mb-3 mt-5">2.2 Legalitas Usaha</h3>

				<div class="ml-3">

					<!-- Izin Usaha -->
					<b-row class="mb-2">
				    <b-col class="col-4">
							<span>Izin Usaha</span>
						</b-col>
				    <b-col>
							<div class="input-group">
								: <b-form-radio-group
									class="ml-2"
									id="izin_usaha" name="izin_usaha"
									:disabled="propsDisabled" :required="true"
									v-model="database.payload.payload_legalitas_usaha.izin_usaha"
									:options="database.reference.reference_options_ada_tidakada"
					      ></b-form-radio-group>

								<!-- Required -->
								<p v-if="fieldErrors.izin_usaha" class="required-alert">wajib dilengkapi</p>
							</div>
						</b-col>
				  </b-row>

					<!-- IUMK -->
					<b-row class="mb-2">
				    <b-col class="col-4">
							<span>IUMK</span>
						</b-col>
				    <b-col>
							<div class="input-group">
								: <b-form-radio-group
									class="ml-2"
									id="legalitas_iumk_usaha" name="legalitas_iumk_usaha"
									:disabled="propsDisabled" :required="true"
									v-model="database.payload.payload_legalitas_usaha.legalitas_iumk_usaha"
									:options="database.reference.reference_options_ada_tidakada"
					      ></b-form-radio-group>

								<!-- Required -->
								<p v-if="fieldErrors.legalitas_iumk_usaha" class="required-alert">wajib dilengkapi</p>
							</div>
							<div class="input-group" v-if="database.payload.payload_legalitas_usaha.legalitas_iumk_usaha">
							  <input :disabled="propsDisabled" :required="true" id="no_iumk_usaha" name="no_iumk_usaha"  v-model="database.payload.payload_legalitas_usaha.no_iumk_usaha" type="text" class="form-control ml-2" placeholder="No.">

								<!-- Required -->
								<p v-if="fieldErrors.no_iumk_usaha" class="required-alert">wajib dilengkapi</p>

								<input :disabled="propsDisabled" :required="true" id="tanggal_iumk_usaha" name="tanggal_iumk_usaha"  v-model="database.payload.payload_legalitas_usaha.tanggal_iumk_usaha" type="date" class="form-control ml-2" placeholder="Tanggal">

								<!-- Required -->
								<p v-if="fieldErrors.tanggal_iumk_usaha" class="required-alert">wajib dilengkapi</p>

							</div>
						</b-col>
				  </b-row>

					<!-- SITU -->
					<b-row class="mb-2">
				    <b-col class="col-4">
							<span>SITU</span>
						</b-col>
				    <b-col>
							<div class="input-group">
								: <b-form-radio-group
									class="ml-2"
									 id="legalitas_situ_usaha" name="legalitas_situ_usaha"
									:disabled="propsDisabled" :required="true"
									v-model="database.payload.payload_legalitas_usaha.legalitas_situ_usaha"
					        :options="database.reference.reference_options_ada_tidakada"
					      ></b-form-radio-group>

								<!-- Required -->
								<p v-if="fieldErrors.legalitas_situ_usaha" class="required-alert">wajib dilengkapi</p>

							</div>
							<div class="input-group" v-if="database.payload.payload_legalitas_usaha.legalitas_situ_usaha">
							  <input :disabled="propsDisabled" :required="true" id="no_situ_usaha" name="no_situ_usaha" v-model="database.payload.payload_legalitas_usaha.no_situ_usaha" type="text" class="form-control ml-2" placeholder="No.">

								<!-- Required -->
								<p v-if="fieldErrors.no_situ_usaha" class="required-alert">wajib dilengkapi</p>

								<input :disabled="propsDisabled" :required="true" id="tanggal_situ_usaha" name="tanggal_situ_usaha" v-model="database.payload.payload_legalitas_usaha.tanggal_situ_usaha" type="date" class="form-control ml-2" placeholder="Tanggal">

								<!-- Required -->
								<p v-if="fieldErrors.tanggal_situ_usaha" class="required-alert">wajib dilengkapi</p>

							</div>
						</b-col>
				  </b-row>

					<!-- SIUP -->
					<b-row class="mb-2">
				    <b-col class="col-4">
							<span>SIUP</span>
						</b-col>
				    <b-col>
							<div class="input-group">
								: <b-form-radio-group
									id="legalitas_siup_usaha" name="legalitas_siup_usaha"
									class="ml-2"
									:disabled="propsDisabled" :required="true"
									v-model="database.payload.payload_legalitas_usaha.legalitas_siup_usaha"
					        :options="database.reference.reference_options_ada_tidakada"
					      ></b-form-radio-group>

								<!-- Required -->
								<p v-if="fieldErrors.legalitas_siup_usaha" class="required-alert">wajib dilengkapi</p>

							</div>
							<div class="input-group" v-if="database.payload.payload_legalitas_usaha.legalitas_siup_usaha">
								<input :disabled="propsDisabled" :required="true" id="no_siup_usaha" name="no_siup_usaha" v-model="database.payload.payload_legalitas_usaha.no_siup_usaha" type="text" class="form-control ml-2" placeholder="No.">

								<!-- Required -->
								<p v-if="fieldErrors.no_siup_usaha" class="required-alert">wajib dilengkapi</p>

								<input :disabled="propsDisabled" :required="true" id="tanggal_siup_usaha" name="tanggal_siup_usaha" v-model="database.payload.payload_legalitas_usaha.tanggal_siup_usaha" type="date" class="form-control ml-2" placeholder="Tanggal">

								<!-- Required -->
								<p v-if="fieldErrors.tanggal_siup_usaha" class="required-alert">wajib dilengkapi</p>

							</div>
						</b-col>
				  </b-row>

					<!-- HO -->
					<b-row class="mb-2">
				    <b-col class="col-4">
							<span>HO</span>
						</b-col>
				    <b-col>
							<div class="input-group">
								: <b-form-radio-group
									id="legalitas_ho_usaha" name="legalitas_ho_usaha"
									class="ml-2"
									:disabled="propsDisabled" :required="true"
									v-model="database.payload.payload_legalitas_usaha.legalitas_ho_usaha"
					        :options="database.reference.reference_options_ada_tidakada"
					      ></b-form-radio-group>

								<!-- Required -->
								<p v-if="fieldErrors.legalitas_ho_usaha" class="required-alert">wajib dilengkapi</p>

							</div>
							<div class="input-group" v-if="database.payload.payload_legalitas_usaha.legalitas_ho_usaha">
								<input :disabled="propsDisabled" :required="true" id="no_ho_usaha" name="no_ho_usaha" v-model="database.payload.payload_legalitas_usaha.no_ho_usaha" type="text" class="form-control ml-2" placeholder="No.">

								<!-- Required -->
								<p v-if="fieldErrors.no_ho_usaha" class="required-alert">wajib dilengkapi</p>

								<input :disabled="propsDisabled" :required="true" id="tanggal_ho_usaha" name="tanggal_ho_usaha" v-model="database.payload.payload_legalitas_usaha.tanggal_ho_usaha" type="date" class="form-control ml-2" placeholder="Tanggal">

								<!-- Required -->
								<p v-if="fieldErrors.tanggal_ho_usaha" class="required-alert">wajib dilengkapi</p>

							</div>
						</b-col>
				  </b-row>

					<!-- TDP/TDI -->
					<b-row class="mb-2">
				    <b-col class="col-4">
							<span>TDP/TDI</span>
						</b-col>
				    <b-col>
							<div class="input-group">
								: <b-form-radio-group
									id="legalitas_tdp_usaha" name="legalitas_tdp_usaha"
									class="ml-2"
									:disabled="propsDisabled" :required="true"
									v-model="database.payload.payload_legalitas_usaha.legalitas_tdp_usaha"
					        :options="database.reference.reference_options_ada_tidakada"
					      ></b-form-radio-group>

								<!-- Required -->
								<p v-if="fieldErrors.legalitas_tdp_usaha" class="required-alert">wajib dilengkapi</p>

							</div>
							<div class="input-group" v-if="database.payload.payload_legalitas_usaha.legalitas_tdp_usaha">
								<input :disabled="propsDisabled" :required="true" id="no_tdp_usaha" name="no_tdp_usaha" v-model="database.payload.payload_legalitas_usaha.no_tdp_usaha" type="text" class="form-control ml-2" placeholder="No.">

								<!-- Required -->
								<p v-if="fieldErrors.no_tdp_usaha" class="required-alert">wajib dilengkapi</p>

								<input :disabled="propsDisabled" :required="true" id="tanggal_tdp_usaha" name="tanggal_tdp_usaha" v-model="database.payload.payload_legalitas_usaha.tanggal_tdp_usaha" type="date" class="form-control ml-2" placeholder="Tanggal">

								<!-- Required -->
								<p v-if="fieldErrors.tanggal_tdp_usaha" class="required-alert">wajib dilengkapi</p>

							</div>
						</b-col>
				  </b-row>

					<!-- SKU -->
					<b-row class="mb-2">
				    <b-col class="col-4">
							<span>SKU</span>
						</b-col>
				    <b-col>
							<div class="input-group">
								: <b-form-radio-group
									id="legalitas_sku_usaha" name="legalitas_sku_usaha"
									class="ml-2"
									:disabled="propsDisabled" :required="true"
									v-model="database.payload.payload_legalitas_usaha.legalitas_sku_usaha"
					        :options="database.reference.reference_options_ada_tidakada"
					      ></b-form-radio-group>

								<!-- Required -->
								<p v-if="fieldErrors.legalitas_sku_usaha" class="required-alert">wajib dilengkapi</p>

							</div>
							<div class="input-group"  v-if="database.payload.payload_legalitas_usaha.legalitas_sku_usaha">
								<input :disabled="propsDisabled" :required="true" id="no_sku_usaha" name="no_sku_usaha" v-model="database.payload.payload_legalitas_usaha.no_sku_usaha" type="text" class="form-control ml-2" placeholder="No.">

								<!-- Required -->
								<p v-if="fieldErrors.no_sku_usaha" class="required-alert">wajib dilengkapi</p>

								<input :disabled="propsDisabled" :required="true" id="tanggal_sku_usaha" name="tanggal_sku_usaha" v-model="database.payload.payload_legalitas_usaha.tanggal_sku_usaha" type="date" class="form-control ml-2" placeholder="Tanggal">

								<!-- Required -->
								<p v-if="fieldErrors.tanggal_sku_usaha" class="required-alert">wajib dilengkapi</p>

							</div>
						</b-col>
				  </b-row>

				</div>

				<h3 class="subtitle-point mb-3 mt-5">2.3 Aturan Pelaksana</h3>

				<div class="ml-3">

					<!-- Anggaran Dasar -->
					<b-row class="mb-2">
				    <b-col class="col-4">
							<span>Anggaran Dasar</span>
						</b-col>
				    <b-col>
							<div class="input-group">
								: <b-form-radio-group
									id="anggaran_dasar_aturan" name="anggaran_dasar_aturan"
									class="ml-2"
									:disabled="propsDisabled" :required="true"
					        v-model="database.payload.payload_aturan_pelaksana.anggaran_dasar_aturan"
					        :options="database.reference.reference_options_ada_tidakada"
					      ></b-form-radio-group>

								<!-- Required -->
								<p v-if="fieldErrors.anggaran_dasar_aturan" class="required-alert">wajib dilengkapi</p>

							</div>
						</b-col>
				  </b-row>

					<!-- Anggaran Rumah Tangga -->
					<b-row class="mb-2">
				    <b-col class="col-4">
							<span>Anggaran Rumah Tangga</span>
						</b-col>
				    <b-col>
							<div class="input-group">
								: <b-form-radio-group
									id="anggaran_rumah_tangga_aturan" name="anggaran_rumah_tangga_aturan"
									class="ml-2"
									:disabled="propsDisabled" :required="true"
									v-model="database.payload.payload_aturan_pelaksana.anggaran_rumah_tangga_aturan"
					        :options="database.reference.reference_options_ada_tidakada"
					      ></b-form-radio-group>

								<!-- Required -->
								<p v-if="fieldErrors.anggaran_rumah_tangga_aturan" class="required-alert">wajib dilengkapi</p>

							</div>
						</b-col>
				  </b-row>

					<!-- SOP Usaha -->
					<b-row class="mb-2">
				    <b-col class="col-4">
							<span>SOP Usaha</span>
						</b-col>
				    <b-col>
							<div class="input-group">
								: <b-form-radio-group
									id="sop_usaha_aturan" name="sop_usaha_aturan"
									class="ml-2"
									:disabled="propsDisabled" :required="true"
									v-model="database.payload.payload_aturan_pelaksana.sop_usaha_aturan"
					        :options="database.reference.reference_options_ada_tidakada"
					      ></b-form-radio-group>

								<!-- Required -->
								<p v-if="fieldErrors.sop_usaha_aturan" class="required-alert">wajib dilengkapi</p>

							</div>
						</b-col>
				  </b-row>

					<!-- SOP Pengelolaan Kas -->
					<b-row class="mb-2">
				    <b-col class="col-4">
							<span>SOP Pengelolaan Kas</span>
						</b-col>
				    <b-col>
							<div class="input-group">
								: <b-form-radio-group
									id="sop_pengelolaan_kas" name="sop_pengelolaan_kas"
									class="ml-2"
									:disabled="propsDisabled" :required="true"
									v-model="database.payload.payload_aturan_pelaksana.sop_pengelolaan_kas"
					        :options="database.reference.reference_options_ada_tidakada"
					      ></b-form-radio-group>

								<!-- Required -->
								<p v-if="fieldErrors.sop_pengelolaan_kas" class="required-alert">wajib dilengkapi</p>

							</div>
						</b-col>
				  </b-row>

					<!-- SOP SDM -->
					<b-row class="mb-2">
				    <b-col class="col-4">
							<span>SOP SDM</span>
						</b-col>
				    <b-col>
							<div class="input-group">
								: <b-form-radio-group
									id="sop_sdm_aturan" name="sop_sdm_aturan"
									class="ml-2"
									:disabled="propsDisabled" :required="true"
									v-model="database.payload.payload_aturan_pelaksana.sop_sdm_aturan"
					        :options="database.reference.reference_options_ada_tidakada"
					      ></b-form-radio-group>

								<!-- Required -->
								<p v-if="fieldErrors.sop_sdm_aturan" class="required-alert">wajib dilengkapi</p>

							</div>
						</b-col>
				  </b-row>

				</div>

				<h3 class="subtitle-point mb-3 mt-5">2.4 Susunan Pemilik Serta Komisaris dan Direktur/Pengelolaan (Bila Ada)</h3>

				<div class="ml-3">

					<b-table show-empty :striped="false" hover bordered :sticky-header="false" :items="database.payload.payload_items_susunan_pemilik" :fields="database.reference.reference_fields_susunan_pemilik" class="bg-white">
						<!-- A custom formatted header cell for field 'name' -->
			      <template v-slot:head()="data">
							<div class="text-center">
				        <span class="table-header">{{ data.label }}</span>
							</div>
			      </template>

						<!-- A custom formatted header cell for field 'action' -->
			      <template v-slot:head(action)="data">
							<div class="text-center">
								<div @click="onModalProposal('ui-proposal-tahap-3-content-susun-pemilik-modal')" class="btn btn-add">
									<font-awesome-icon icon="plus" />
								</div>
							</div>
			      </template>

						<!-- Optional default data cell scoped slot -->
						<template v-slot:cell(action)="data">
							<div class="text-center">
								<div @click="onRemovePayloadItemsSusunanPemilik(data.index)" class="btn btn-delete">
									<font-awesome-icon icon="times" />
								</div>
								<!-- <i>{{ data.value }} {{ data.index }}</i> -->
							</div>
						</template>

						<template v-slot:empty="scope">
							<div class="text-center">
								<span class="text-danger">Wajib diisi</span>
							</div>
				    </template>
					</b-table>

					<div id="scroll-to-1" />
				</div>

				<h3 class="subtitle-point mb-3 mt-5">2.5 Tenaga Kerja</h3>

				<div class="ml-3">

					<b-table-simple class="table b-table table-hover bg-white table-bordered">
						<b-thead head-variant="" class="bg-white table-header">
							<b-tr >
								<b-th v-vmiddle colspan="1" rowspan="2">Jumlah Tenaga Kerja</b-th>
								<b-th colspan="3">Gaji Tenaga Kerja</b-th>
								<b-th v-vmiddle colspan="1" rowspan="2">

									<div @click="onModalProposal('ui-proposal-tahap-3-content-tenaga-kerja-modal')" class="btn btn-add">
										<font-awesome-icon icon="plus" />
									</div>

								</b-th>
							</b-tr>
							<b-tr>
								<b-th>Harian</b-th>
								<b-th>Mingguan</b-th>
								<b-th>Bulanan</b-th>
							</b-tr>
						</b-thead>
						<b-tbody>
							<b-tr v-for="(item, index) in database.payload.payload_items_tenaga_kerja" :key="index">
								<b-td>{{ item.jumlah_pekerja }}</b-td>
								<b-td>{{ item.gaji_harian | currency }}</b-td>
								<b-td>{{ item.gaji_mingguan | currency }}</b-td>
								<b-td>{{ item.gaji_bulanan | currency }}</b-td>
								<b-td class="text-center">
									<div @click="onRemovePayloadItemsTenagaKerja(index)" class="btn btn-delete">
										<font-awesome-icon icon="times" />
									</div>
								</b-td>
							</b-tr>
						</b-tbody>

						<!-- NO DATA -->
						<tr v-if="database.payload.payload_items_tenaga_kerja.length <= 0" role="row" class="b-table-empty-row">
							<td colspan="6" role="cell" class="">
								<div role="alert" aria-live="polite">
									<div class="text-center">
										<span class="text-danger">Wajib diisi</span>
									</div>
								</div>
							</td>
						</tr>
					</b-table-simple>

					<div id="scroll-to-2" />
				</div>

				<h3 class="subtitle-point mb-3 mt-5">2.6 Status Tempat Usaha</h3>

				<div class="ml-3">

					<!-- Status Tempat Usaha -->
					<b-row class="mb-2">
				    <b-col class="col-4">
							<span>Status Tempat Usaha</span>
						</b-col>
				    <b-col>
							<div class="input-group">
								: <b-form-radio-group
									id="payload_status_tempat_usaha" name="payload_status_tempat_usaha"
									class="ml-2"
									:disabled="propsDisabled" :required="true"
					        v-model="database.payload.payload_status_tempat_usaha"
					        :options="database.reference.reference_options_status_tempat_usaha"
					      ></b-form-radio-group>

								<!-- Required -->
								<p v-if="fieldErrors.payload_status_tempat_usaha" class="required-alert">wajib dilengkapi</p>

							</div>
						</b-col>
				  </b-row>

				</div>

			</b-col>
			<b-col v-if="propsToolbar" cols="12">
				<div class="mt-3">
					<div class="column-right">
						<div id="button-prev" @click.prevent="gotoPage('/proposal-tahap-2')" class="btn mr-2 pl-3 pr-3">Pervious</div>
						<button type="submit" @click.prevent="onNext" class="btn next mr-2 pl-3 pr-3">Next</button>
						<button type="submit" @click.prevent="onFinish" class="btn non-next pl-3 pr-3">Finish</button>
					</div>
				</div>
			</b-col>
		</b-row>
	</form>

</fragment>
</template>

<script>

import { 	database } from '@/models/proposal/proposal-tahap-3'

export default {
  name: 'ui-proposal-tahap-3-content',
	props: ["propsToolbar","propsDisabled"],
	watch: {
		database: {
			handler(val) {
				console.log(val)
				// Async this local data to vuex
				this.dispatch_proposal_tahap_3(val)
			},
			deep: true,
			immediate: false,
		}
	},
	created(){
		// console.log(!this.getters_proposal_tahap_1)
		if(this.getters_proposal_tahap_3) {
			// Request from vuex
			this.database = this.getters_proposal_tahap_3
		}

		// Request from server to update vuex
		this.database = database
		// console.log(this.database)
		return
	},
	data() {
    return {
			database: {
				payload: {
					payload_badan_hukum:null,
					payload_legalitas_usaha:null,
					payload_aturan_pelaksana:null,
					payload_status_tempat_usaha:null,
					payload_items_susunan_pemilik: null,
					payload_items_tenaga_kerja:null,
				},
				reference: {
					reference_options_status_tempat_usaha:null,
					reference_options_bentuk_badan_hukum:null,
					reference_options_ada_tidakada:null,
					reference_fields_susunan_pemilik:null,
				},
			}
    }
  },
	methods: {
		onNext: _.debounce(function() {
			// console.log(this.$refs.form.reportValidity(), this.$refs.form.reportValidity())
			if (!this.$refs.form.checkValidity()) {
				// this.$refs.form.reportValidity() // popup required tooltip jika pakai handleInvalid maka ini tidak perlu

				this.onSnotifyProposalNext()
				return
      }
			if(this.database.payload.payload_items_tenaga_kerja.length <= 0) {
				this.onSnotifyProposalNext()
				return
			}
			if(this.database.payload.payload_items_susunan_pemilik.length <= 0) {
				this.onSnotifyProposalNext()
				return
			}

			this.fieldErrors = {}
			this.gotoPage('/proposal-tahap-4')
		}, 250),
		onFinish: _.debounce(function() {
			// console.log(this.$refs.form.reportValidity(), this.$refs.form.reportValidity())
			if (!this.$refs.form.checkValidity()) {
				// this.$refs.form.reportValidity() // popup required tooltip jika pakai handleInvalid maka ini tidak perlu
				this.onSnotifyProposalNext()
				return
      }
			if(this.database.payload.payload_items_tenaga_kerja.length <= 0) {
				this.onSnotifyProposalNext()
				return
			}
			if(this.database.payload.payload_items_susunan_pemilik.length <= 0) {
				this.onSnotifyProposalNext()
				return
			}

			this.fieldErrors = {}
			this.gotoPage('/proposal-tahap-7')
		}, 250),
		onAddPayloadItemsSusunanPemilik(val) {
			this.$scrollTo("#scroll-to-1", 500, {
				offset: -450,
			})
			this.database.payload.payload_items_susunan_pemilik.push(val)
		},
		onRemovePayloadItemsSusunanPemilik(current) {
			if(this.$route.name == "proposal-tahap-7") return

			this.$scrollTo("#scroll-to-1", 500, {
				offset: -450,
			})
			this.database.payload.payload_items_susunan_pemilik.splice(current, 1)
		},
		onAddPayloadItemsTenagaKerja(val) {
			this.$scrollTo("#scroll-to-2", 500, {
				offset: -450,
			})
			this.database.payload.payload_items_tenaga_kerja.push(val)
		},
		onRemovePayloadItemsTenagaKerja(current) {
			if(this.$route.name == "proposal-tahap-7") return

			this.$scrollTo("#scroll-to-2", 500, {
				offset: -450,
			})
			this.database.payload.payload_items_tenaga_kerja.splice(current, 1)
		},
	},
}
</script>
