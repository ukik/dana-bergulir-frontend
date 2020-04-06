<style scoped>

.subtitle {
    font-family: Montserrat_Medium;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #555555;
}

.table-header {
    font-family: Montserrat_Bold;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */
    vertical-align: middle;
    text-align: center;
    color: #252323;
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

button:hover,
.btn-edit:hover,
.btn-delete:hover {
    color: #FFFFFF;
}


/* .input-search {
	width: 150px;
} */

input {
    height: 30px;
    background: #FFFFFF;
    border-radius: 10px !important;
}


/* .btn-search {
	width: 30px;
	height: 30px;
	border-radius: 15px;
	background: #58C0E7;
	text-align: center;
	color:white;
	font-size: 14px;
	padding-top:5px;
	cursor:pointer;
} */

.btn-edit {
    background: #dc920b;
    border-radius: 5px;
    color: #ffffff;
    border: 0px;
    font-size: 14px;
}

.submit {
    background: #58C0E7;
}

#master .width {
    width: 150px;
}

</style>

<template>

<fragment>
    <!-- <div class="mt-3 p-4 bg-white"> -->
    <form class="col" ref="form" @submit.prevent="onSubmit" @change="handleChange" @invalid.capture.prevent="handleInvalid">
        <b-table-simple id="master" class="table b-table bg-white table-bordered table-responsive">
            <b-thead head-variant="" class="bg-white table-header">
                <b-tr>
                    <!-- <b-th v-vmiddle style="width:30%;" colspan="1" rowspan="3">Deskripsi</b-th> -->
                    <b-th v-vmiddle colspan="1" rowspan="2">No.</b-th>
                    <b-th v-vmiddle colspan="1" rowspan="2">
                        <div class="width">No Pencairan</div>
                    </b-th>
                    <b-th v-vmiddle colspan="1" rowspan="2">
                        <div class="width">No. PAK</div>
                    </b-th>

                    <b-th v-vmiddle colspan="1" rowspan="2">
                        <div class="width">Jenis Usaha (Perorangan)</div>
                    </b-th>
                    <b-th v-vmiddle colspan="1" rowspan="2">
                        <div class="width">Alamat</div>
                    </b-th>
                    <b-th v-vmiddle colspan="1" rowspan="2">
                        <div class="width">Kecamatan</div>
                    </b-th>

                    <b-th v-vmiddle colspan="3">Jangka Waktu</b-th>

                    <b-th v-vmiddle colspan="1" rowspan="2">
                        <div class="width">Plafond Kredit</div>
                    </b-th>
                    <b-th v-vmiddle colspan="1" rowspan="2">
                        <div class="width">Total Bunga Pinj.</div>
                    </b-th>

                    <b-th v-vmiddle colspan="2">Rincian Angsuran per Bulan</b-th>

                    <b-th v-vmiddle colspan="3">Total Angsuran Terbayar</b-th>
                    <b-th v-vmiddle colspan="2">Setoran Bulan ini</b-th>

                    <b-th v-vmiddle colspan="3">Sisa Angsuran yang Harus diBayar</b-th>
                    <b-th v-vmiddle colspan="3">Denda</b-th>

                </b-tr>
                <b-tr>
                    <b-th v-vmiddle colspan="1" rowspan="1">
                        <div class="width">Awal</div>
                    </b-th>
                    <b-th v-vmiddle colspan="1" rowspan="1">
                        <div class="width">Jatuh Tempo</div>
                    </b-th>
                    <b-th v-vmiddle colspan="1" rowspan="1">
                        <div class="width">Bln</div>
                    </b-th>

                    <b-th v-vmiddle colspan="1" rowspan="1">
                        <div class="width">Pokok</div>
                    </b-th>
                    <b-th v-vmiddle colspan="1" rowspan="1">
                        <div class="width">Bunga</div>
                    </b-th>

                    <b-th v-vmiddle colspan="1" rowspan="1">
                        <div class="width">Bln</div>
                    </b-th>
                    <b-th v-vmiddle colspan="1" rowspan="1">
                        <div class="width">Pokok</div>
                    </b-th>
                    <b-th v-vmiddle colspan="1" rowspan="1">
                        <div class="width">Bunga</div>
                    </b-th>

                    <b-th v-vmiddle colspan="1" rowspan="1">
                        <div class="width">Pokok</div>
                    </b-th>
                    <b-th v-vmiddle colspan="1" rowspan="1">
                        <div class="width">Bunga</div>
                    </b-th>

                    <b-th v-vmiddle colspan="1" rowspan="1">
                        <div class="width">Bln</div>
                    </b-th>
                    <b-th v-vmiddle colspan="1" rowspan="1">
                        <div class="width">Pokok</div>
                    </b-th>
                    <b-th v-vmiddle colspan="1" rowspan="1">
                        <div class="width">Bunga</div>
                    </b-th>

                    <b-th v-vmiddle colspan="1" rowspan="1">
                        <div class="width">Hari</div>
                    </b-th>
                    <b-th v-vmiddle colspan="1" rowspan="1">
                        <div class="width">Denda Terbayar</div>
                    </b-th>
                    <b-th v-vmiddle colspan="1" rowspan="1">
                        <div class="width">Denda Bulan Ini</div>
                    </b-th>
                </b-tr>
            </b-thead>
            <b-tbody>
                <b-tr>
                    <b-td>
                        {{ database.payload.nomor }}
                    </b-td>

                    <b-td>
                        <input :required="true" id="nomor_pencairan" name="nomor_pencairan" class="form-control" v-model="database.payload.nomor_pencairan" type="text" placeholder="">
                    </b-td>

                    <b-td>
                        <input :required="true" id="nomor_pak" name="nomor_pak" class="form-control" v-model="database.payload.nomor_pak" type="text" placeholder="">
                    </b-td>

                    <b-td>
                        <input :required="true" id="jenis_usaha" name="jenis_usaha" class="form-control" v-model="database.payload.jenis_usaha" type="text" placeholder="">
                    </b-td>

                    <b-td>
                        <input :required="true" id="alamat" name="alamat" class="form-control" v-model="database.payload.alamat" type="text" placeholder="">
                    </b-td>

                    <b-td>
                        <input :required="true" id="kecamatan" name="kecamatan" class="form-control" v-model="database.payload.kecamatan" type="text" placeholder="">
                    </b-td>

                    <b-td>
                        <input :required="true" id="jangka_waktu_awal" name="jangka_waktu_awal" class="form-control" v-model="database.payload.jangka_waktu_awal" type="text" placeholder="">
                    </b-td>

                    <b-td>
                        <input :required="true" id="jangka_jatuh_tempo" name="jangka_jatuh_tempo" class="form-control" v-model="database.payload.jangka_jatuh_tempo" type="text" placeholder="">
                    </b-td>

                    <b-td>
                        <input :required="true" id="jangka_bulan" name="jangka_bulan" class="form-control" v-model="database.payload.jangka_bulan" type="text" placeholder="">
                    </b-td>

                    <b-td>
                        <input :required="true" id="plafon_kredit" name="plafon_kredit" class="form-control" v-model="database.payload.plafon_kredit" type="text" placeholder="">
                    </b-td>

                    <b-td>
                        <input :required="true" id="total_bunga" name="total_bunga" class="form-control" v-model="database.payload.total_bunga" type="text" placeholder="">
                    </b-td>

                    <b-td>
                        <input :required="true" id="rincian_angsuran_pokok" name="rincian_angsuran_pokok" class="form-control" v-model="database.payload.rincian_angsuran_pokok" type="text" placeholder="">
                    </b-td>

                    <b-td>
                        <input :required="true" id="rincian_angsuran_bunga" name="rincian_angsuran_bunga" class="form-control" v-model="database.payload.rincian_angsuran_bunga" type="text" placeholder="">
                    </b-td>

                    <b-td>
                        <input :required="true" id="angsuran_terbayar_bulan" name="angsuran_terbayar_bulan" class="form-control" v-model="database.payload.angsuran_terbayar_bulan" type="text" placeholder="">
                    </b-td>

                    <b-td>
                        <input :required="true" id="angsuran_terbayar_pokok" name="angsuran_terbayar_pokok" class="form-control" v-model="database.payload.angsuran_terbayar_pokok" type="text" placeholder="">
                    </b-td>

                    <b-td>
                        <input :required="true" id="angsuran_terbayar_bunga" name="angsuran_terbayar_bunga" class="form-control" v-model="database.payload.angsuran_terbayar_bunga" type="text" placeholder="">
                    </b-td>

                    <b-td>
                        <input :required="true" id="setoran_bulan_pokok" name="setoran_bulan_pokok" class="form-control" v-model="database.payload.setoran_bulan_pokok" type="text" placeholder="">
                    </b-td>

                    <b-td>
                        <input :required="true" id="setoran_bulan_bunga" name="setoran_bulan_bunga" class="form-control" v-model="database.payload.setoran_bulan_bunga" type="text" placeholder="">
                    </b-td>

                    <b-td>
                        <input :required="true" id="sisa_angsuran_bulan" name="sisa_angsuran_bulan" class="form-control" v-model="database.payload.sisa_angsuran_bulan" type="text" placeholder="">
                    </b-td>

                    <b-td>
                        <input :required="true" id="sisa_angsuran_pokok" name="sisa_angsuran_pokok" class="form-control" v-model="database.payload.sisa_angsuran_pokok" type="text" placeholder="">
                    </b-td>

                    <b-td>
                        <input :required="true" id="sisa_angsuran_bunga" name="sisa_angsuran_bunga" class="form-control" v-model="database.payload.sisa_angsuran_bunga" type="text" placeholder="">
                    </b-td>

                    <b-td>
                        <input :required="true" id="denda_hari" name="denda_hari" class="form-control" v-model="database.payload.denda_hari" type="text" placeholder="">
                    </b-td>

                    <b-td>
                        <input :required="true" id="denda_terbayar" name="denda_terbayar" class="form-control" v-model="database.payload.denda_terbayar" type="text" placeholder="">
                    </b-td>

                    <b-td>
                        <input :required="true" id="denda_bulan_ini" name="denda_bulan_ini" class="form-control" v-model="database.payload.denda_bulan_ini" type="text" placeholder="">
                    </b-td>

                </b-tr>
            </b-tbody>
        </b-table-simple>

        <div class="mt-3">
            <div class="column-right">

                <div id="button-prev" @click.prevent="gotoPage('/register-surveyor-master')" class="btn non-next mr-2 pl-3 pr-3">Batal</div>

                <button type="submit" @click.prevent="onSubmit" class="btn btn-primary submit mr-2 pl-3 pr-3">Simpan</button>

            </div>
        </div>
    </form>
    <!-- </div> -->
</fragment>

</template>

<script>

import {
    create
}
from '@/models/monitoring-evaluasi'

export default {
    watch: {
        // INIT DATA
        '$route.name': function(val) {
            // console.log(val)
            if (val == 'monitoring-evaluasi-edit') {
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
                payload: create,
            },
        }
    },
    methods: {
        async initDatabasePayload() {
                const get = await this.getters_monitoring_evaluasi_edit({
                    index: this.$route.params.id
                })
                if (get) {
                    this.database.payload = get
                    console.log('get', this.database)
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
                    resolve(this.dispatch_monitoring_evaluasi_edit_payload_items({
                        index: this.$route.params.id,
                        item: this.database.payload
                    }))
                }).then(result => {
                    this.$router.replace("/monitoring-evaluasi-master")
                    this.database.payload = {
                    	nomor:null,
                    	nomor_pencairan:null,
                    	nomor_pak:null,
                    	jenis_usaha:null,
                    	alamat:null,
                    	kecamatan:null,
                    	jangka_waktu_awal:null,
                    	jangka_jatuh_tempo:null,
                    	jangka_bulan:null,
                    	plafon_kredit:null,
                    	total_bunga:null,
                    	rincian_angsuran_pokok:null,
                    	rincian_angsuran_bunga:null,
                    	angsuran_terbayar_bulan:null,
                    	angsuran_terbayar_pokok:null,
                    	angsuran_terbayar_bunga:null,
                    	setoran_bulan_pokok:null,
                    	setoran_bulan_bunga:null,
                    	sisa_angsuran_bulan:null,
                    	sisa_angsuran_pokok:null,
                    	sisa_angsuran_bunga:null,
                    	denda_hari:null,
                    	denda_terbayar:null,
                    	// denda_hari:"nomor_proposal "+(i+0),
                    	denda_bulan_ini:null,
                    	//
                    	action:"<action>",
                    }
                })
            }, 250),
    }
};

</script>
