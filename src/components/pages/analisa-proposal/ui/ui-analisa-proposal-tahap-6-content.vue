<style scoped>

select,
input,
textarea {
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

.next {
    background: #58C0E7;
}

.column-right {
    float: right;
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
    <b-table-simple class="table b-table table-hover bg-white table-bordered">
        <b-thead head-variant="" class="bg-white table-header text-center">
            <b-tr>
                <b-th colspan="1" rowspan="1">Nomor</b-th>
                <b-th colspan="1" rowspan="1">Nama Agunan</b-th>
                <b-th colspan="1" rowspan="1">Jenis Agunan</b-th>
            </b-tr>
        </b-thead>
        <b-tbody>
            <b-tr v-for="(item, index) in database.payload.selected_rekap_hasil_analisa" :key="index">
                <b-td width="10" colspan="1">{{ index+1 }}</b-td>
                <b-td colspan="1">{{ item.deskripsi }}</b-td>
                <b-td width="200" colspan="1">
                    <div class="input-group">
                        <b-form-select v-model="item.value" :options="item.key != 'analisa_singkronisasi' ? database.reference.options_penerimaan : database.reference.options_singkronisasi" class="col-12 ml-0" value-field="item" text-field="name" :disabled="item.disabled" disabled-field="notEnabled"
                        :id="'selected_rekap_hasil_analisa'+index" :name="'selected_rekap_hasil_analisa'+index" :required="true"></b-form-select>
                    </div>
                </b-td>
            </b-tr>
        </b-tbody>
    </b-table-simple>
    <div class="column-right">
        <button type="submit" @click.prevent="" class="btn next mr-0 pl-3 pr-3">+ Tambah Saran/Rekom</button>
    </div>
    <div class="mt-3 mb-3 input-group">
        <div class="col-12 p-0">
            <span class="font-weight-bold">Saran dan Rekomendasi oleh PTAP :</span>
        </div>
        <div class="col-12 p-0 text-right mt-2">
            <textarea name="parent_index+'catatan_angunan'" id="parent_index+'catatan_angunan'" required="true" class="form-control" rows="3"></textarea>
        </div>

        <!-- Required -->
        <p v-if="fieldErrors" class="required-alert">wajib dilengkapi</p>
    </div>
		<div class="col-12 p-0">
		<span>PELAKSANA TEKNIS ANALISA PINJAMAN MENYIMPULKAN BAHWA PENGAJUAN PINJAMAN OLEH IBU ELVIRA EGA SAPUTRI SEBESAR Rp. 10.000.000,- DINYATAKAN DAPAT DIPERTIMBANGKAN UNTUK DIKABULKAN</span>
		</div>

		<div class="col-12 p-0 mt-3 mb-3">
		<span class="font-weight-bold">Catatan :</span>
		</div>

		<div class="col-12 p-0">
		<span> HASIL ANALISA DAN PENETAPAN INI TIDAK BERSIFAT MUTLAK. HASIL INI ADALAH MERUPAKAN REKOMENDASI DARI PTAP UNTUK DIGUNAKAN SEBAGAI BAHAN PERTIMBANGAN / ACUAN BAGI KOMITE DALAM MEMBUAT KEPUTUSAN PENCAIRAN PINJAMAN DANA KUMKM</span>
		</div>

</div>

</template>

<script>

import {
    database
}
from "@/models/analisa-proposal-tahap/analisa-proposal-tahap-6";

export default {
    created() {
            this.initDatabase()

            // Request from server to update vuex
            // this.database = database
            // console.log(this.database)
            return
        },
        mounted() {
            setTimeout(() => {
                this.mounted = true;
            }, 300)
        },
        data() {
            return {
                mounted: false,
                database: {
                    payload: {
                        selected_rekap_hasil_analisa: [{
                            deskripsi: "ANALISA BERDASARKAN NOTA - NOTA PENJUALAN / PEMBELIAN",
                            value: "",
                            disabled: false,
                            key: "analisa_nota_transaksi"
                        }, {
                            deskripsi: "ANALISA BERDASARKAN TINGKAT SINKRONISASI TERHADAP DATA - DATA YANG DITERIMA",
                            value: "",
                            disabled: true,
                            key: "analisa_singkronisasi"
                        }, {
                            deskripsi: "ANALISA BERDASARKAN PERHITUNGAN NILAI PINJAMAN DARI LAPORAN LABA-RUGI DAN MANAGEMEN KEUANGAN PRIBADI",
                            value: "",
                            disabled: true,
                            key: "analisa_perhitungan_keuangan"
                        }, {
                            deskripsi: "ANALISA BERDASARKAN NILAI AGUNAN / JAMINAN",
                            value: "",
                            disabled: true,
                            key: "analisa_nilai_agunan"
                        }, ],
                    },
                    reference: {
                        options_penerimaan: [{
                            item: '',
                            name: ':: Pilih Kondisi ::',
                            notEnabled: true
                        }, {
                            item: true,
                            name: 'DITERIMA'
                        }, {
                            item: false,
                            name: 'DITOLAK'
                        }, ],
                        options_singkronisasi: [{
                            item: '',
                            name: ':: Pilih Singkronisasi ::',
                            notEnabled: true
                        }, {
                            item: true,
                            name: 'SINGKRON'
                        }, {
                            item: false,
                            name: 'TIDAK SINGKRON'
                        }, ],
                    }
                }
            }
        },
        methods: {
            initDatabase() {
                // console.log(!this.getters_proposal_tahap_1)
                if (this.getters_analisa_proposal_tahap_6) {
                    // Request from vuex
                    this.database = this.getters_analisa_proposal_tahap_6;
                }
            },
        }
}

</script>
