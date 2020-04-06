<style scoped>

input {
    height: 30px;
}

textarea,
input,
select,
.custom-file-label {
    background: #FFFFFF;
    border-radius: 10px !important;
}

span {
    font-family: Montserrat_Light;
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
    font-size: 12px;
    text-align: center;
    color: #ffffff;
}

.column-right {
    float: right;
}

.cancel {
    background: #C54F4F;
}

.submit {
    background: #05AF8F;
}

.col-4 {
    padding-left: 0px;
}

</style>

<template>

<fragment>
    <div class="input-group">
        <form class="col-8" ref="form" @submit.prevent="onSubmit" @change="handleChange" @invalid.capture.prevent="handleInvalid">

            <!-- Nomor Pinjaman -->
            <b-row class="mb-2">
                <b-col class="col-4">
                    <span>Nomor Pinjaman</span>
                </b-col>
                <b-col>
                    <div class="input-group">
                        :
                        <b-form-input :required="true" id="nomor_pinjaman" name="nomor_pinjaman" v-model="database.payload.nomor_pinjaman" type="text" class="form-control ml-2" placeholder="" />
                    </div>
                    <!-- Required -->
                    <p v-if="fieldErrors.nomor_pinjaman" class="required-alert">wajib dilengkapi</p>
                </b-col>
            </b-row>

            <!-- Nomor Transaksi -->
            <b-row class="mb-2">
                <b-col class="col-4">
                    <span>Nomor Transaksi</span>
                </b-col>
                <b-col>
                    <div class="input-group">
                        :
                        <input :required="true" id="nomor_transaksi" name="nomor_transaksi" v-model="database.payload.nomor_transaksi" type="text" class="form-control ml-2" placeholder="">
                    </div>
                    <!-- Required -->
                    <p v-if="fieldErrors.nomor_transaksi" class="required-alert">wajib dilengkapi</p>
                </b-col>
            </b-row>


            <!-- Nama Nasabah -->
            <b-row class="mb-2">
                <b-col class="col-4">
                    <span>Nama Nasabah</span>
                </b-col>
                <b-col>
                    <div class="input-group">
                        :
                        <input :required="true" id="nama_pemilik" name="nama_pemilik" v-model="database.payload.nama_pemilik" type="text" class="form-control ml-2" placeholder="">
                    </div>
                    <!-- Required -->
                    <p v-if="fieldErrors.nama_pemilik" class="required-alert">wajib dilengkapi</p>
                </b-col>
            </b-row>

            <!-- Periode Pembayaran -->
            <b-row class="mb-2">
                <b-col class="col-4">
                    <span>Periode Pembayaran</span>
                </b-col>
                <b-col>
                    <div class="input-group">
                        :
                        <input :required="true" id="periode_pembayaran" name="periode_pembayaran" v-model="database.payload.periode_pembayaran" type="text" class="form-control ml-2" placeholder="">
                    </div>
                    <!-- Required -->
                    <p v-if="fieldErrors.periode_pembayaran" class="required-alert">wajib dilengkapi</p>
                </b-col>
            </b-row>

            <!-- Tanggal Transaksi -->
            <b-row class="mb-2">
                <b-col class="col-4">
                    <span>Tanggal Transaksi</span>
                </b-col>
                <b-col>
                    <div class="input-group">
                        :
                        <input :required="true" id="tanggal_transaksi" name="tanggal_transaksi" v-model="database.payload.tanggal_transaksi" type="date" class="form-control ml-2" placeholder="">
                    </div>
                    <!-- Required -->
                    <p v-if="fieldErrors.tanggal_transaksi" class="required-alert">wajib dilengkapi</p>
                </b-col>
            </b-row>

            <!-- Angsuran Pokok -->
            <b-row class="mb-2">
                <b-col class="col-4">
                    <span>Angsuran Pokok</span>
                </b-col>
                <b-col>
                    <div class="input-group">
                        :
                        <input :required="true" id="pokok" name="pokok" v-model="database.payload.pokok" type="text" class="form-control ml-2" placeholder="">
                    </div>
                    <!-- Required -->
                    <p v-if="fieldErrors.pokok" class="required-alert">wajib dilengkapi</p>
                </b-col>
            </b-row>

            <!-- Angsuran Bunga -->
            <b-row class="mb-2">
                <b-col class="col-4">
                    <span>Angsuran Bunga</span>
                </b-col>
                <b-col>
                    <div class="input-group">
                        :
                        <input :required="true" id="bunga" name="bunga" v-model="database.payload.bunga" type="text" class="form-control ml-2" placeholder="">
                    </div>
                    <!-- Required -->
                    <p v-if="fieldErrors.bunga" class="required-alert">wajib dilengkapi</p>
                </b-col>
            </b-row>

            <!-- Denda -->
            <b-row class="mb-2">
                <b-col class="col-4">
                    <span>Denda</span>
                </b-col>
                <b-col>
                    <div class="input-group">
                        :
                        <input :required="true" id="bunga" name="denda" v-model="database.payload.denda" type="text" class="form-control ml-2" placeholder="">
                    </div>
                    <!-- Required -->
                    <p v-if="fieldErrors.denda" class="required-alert">wajib dilengkapi</p>
                </b-col>
            </b-row>
            <!-- Bayar Pokok -->
            <b-row class="mb-2">
                <b-col class="col-4">
                    <span>Bayar Pokok</span>
                </b-col>
                <b-col>
                    <div class="input-group">
                        :
                        <input :required="true" id="bayar_pokok" name="bayar_pokok" v-model="database.payload.bayar_pokok" type="text" class="form-control ml-2" placeholder="">
                    </div>
                    <!-- Required -->
                    <p v-if="fieldErrors.bayar_pokok" class="required-alert">wajib dilengkapi</p>
                </b-col>
            </b-row>

						<!-- Bayar Bunga -->
						<b-row class="mb-2">
								<b-col class="col-4">
										<span>Bayar Bunga</span>
								</b-col>
								<b-col>
										<div class="input-group">
												:
												<input :required="true" id="bayar_bunga" name="bayar_bunga" v-model="database.payload.bayar_bunga" type="text" class="form-control ml-2" placeholder="">
										</div>
										<!-- Required -->
										<p v-if="fieldErrors.bayar_bunga" class="required-alert">wajib dilengkapi</p>
								</b-col>
						</b-row>

						<!-- Bayar Denda -->
						<b-row class="mb-2">
								<b-col class="col-4">
										<span>Bayar Denda</span>
								</b-col>
								<b-col>
										<div class="input-group">
												:
												<input :required="true" id="bayar_denda" name="bayar_denda" v-model="database.payload.bayar_denda" type="text" class="form-control ml-2" placeholder="">
										</div>
										<!-- Required -->
										<p v-if="fieldErrors.bayar_denda" class="required-alert">wajib dilengkapi</p>
								</b-col>
						</b-row>

            <div class="mt-3">
                <div class="column-right">
                    <!-- <button @click.prevent="$router.back()" class="btn btn-danger cancel mr-2 pl-3 pr-3">Batal</button> -->
                    <!-- <button type="submit" @click.prevent="onSubmit" class="btn btn-primary submit pl-3 pr-3">Simpan Data</button> -->

                    <div id="button-prev" @click.prevent="gotoPage('/register-surveyor-master')" class="btn non-next mr-2 pl-3 pr-3">Batal</div>

                    <button type="submit" @click.prevent="onSubmit" class="btn btn-success submit mr-2 pl-3 pr-3">Bayar</button>

                    <button type="reset" @click.prevent="clearForm" class="btn btn-danger danger pl-3 pr-3">Reset</button>
                </div>
            </div>
        </form>
    </div>
</fragment>

</template>

<script>

import {
    create
}
from '@/models/penagihan'

export default {
    watch: {
        // INIT DATA
        '$route.name': function(val) {
            // console.log(val)
            if (val == 'penagihan-pembayaran-angsuran') {
                this.initDatabasePayload()
            }
            // console.log("this.database.payload", this.database.payload)
        }
    },
    created() {
        // INIT DATA
        this.initDatabasePayload()
            // this.database.payload = this.getters_surveyor_edit(this.$route.params.id)
    },
    data() {
        return {
            database: {
                payload: create
            }
        }
    },
    methods: {
			initDatabasePayload(){
				const get = this.getters_penagihan_piutang_edit({
					index: this.$route.params.id
				})
				if(get) {
					this.database.payload = get
				}
			},
        clearForm() {
                this.fieldErrors = {}
                this.database.payload = {
                    // isActive: true,
                    nomor: null,
                    nomor_pinjaman: null,
                    nama_pemilik: null,
                    nama_usaha: null,
                    tagihan_ke: null,
                    tunggakan: null,
                    pokok: null,
                    bunga: null,
                    denda: null,
                    telepon: null,
                    jatuh_tempo: null,
                    action: null,
                    kartu: null,
                }
            },
            onSubmit: window._.debounce(function() {
                // console.log(this.$refs.form.reportValidity(), this.$refs.form.reportValidity())
                if (!this.$refs.form.checkValidity()) {
                    // this.$refs.form.reportValidity() // popup required tooltip jika pakai handleInvalid maka ini tidak perlu

                    this.onSnotifyInput()
                    return
                }

                new Promise(resolve => {
                    resolve(this.dispatch_penagihan_piutang_add_payload_items({
                        item: this.database.payload
                    }))
                }).then(result => {
                    this.$router.replace("/penagihan-jatuh-tempo-master")
                    this.clearForm()
                })
            }, 250),
    }
}

</script>
