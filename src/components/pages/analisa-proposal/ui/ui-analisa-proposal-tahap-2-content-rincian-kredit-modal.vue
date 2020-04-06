<style scoped>

.table-header {
    font-family: Montserrat_Bold;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */
    vertical-align: middle;
    display: table;    
    text-align: center;
    color: #252323;
}


/* span {
	font-family: Montserrat_Light;
	font-style: normal;
	font-weight: 500;
	font-size: 15px;
	line-height: 18px;

	color: #555555;
} */

button:hover,
.btn-delete:hover,
.btn-add:hover {
    color: #ffffff;
}

.btn-add {
    background: #58C0E7;
    border-radius: 5px;
    color: #ffffff;
    border: 0px;
    font-size: 14px;
}

</style>

<template>

<fragment>
		<!-- <button @click="onRenderData" class="btn m-auto col-5 btn-block btn-add">Tambahkan</button> -->
    <form @submit.prevent="onTambahkan">
        <b-col class="p-0" cols="12">

            <b-table id="master" bordered show-empty responsive hover :items="database.payload.payload_items" :fields="database.reference.reference_fields">
                <template v-slot:head()="data">
                    <div class="table-header p-2 text-center">
                        <span class="">{{ data.label }}</span>
                    </div>
                </template>
                <template v-slot:head(pokok)="data">
                    <div class="table-header p-2 text-center" style="width:125px;">
                        <span class="">{{ data.label }}</span>
                    </div>
                </template>
                <template v-slot:cell(pokok)="data">
                    <a>{{ data.value | currency }}</a>
                </template>

            </b-table>

        </b-col>

			<br>
			<!-- <button @click="onRenderData" class="btn m-auto col-5 btn-block btn-add">Tambahkan</button> -->
    </form>
</fragment>

</template>

<script lang="ts">

import Vue from 'vue';

import {
    database
}
from "@/models/analisa-proposal-tahap/analisa-proposal-tahap-2-rincian-kredit-modal";

export default Vue.extend({
    created() {
        this.initDatabase()

        // Request from server to update vuex
        this.database = database
        console.log(this.database)
        return
    },
    data() {
        return {
            database: {
                payload: {
                    payload_items: null,
                },
                reference: {
                    reference_fields: null,
                }
            },
        }
    },
    methods: {
        initDatabase() {
            // console.log(!this.getters_proposal_tahap_1)
            if (this.getters_analisa_proposal_tahap_2_rincian_kredit_modal) {
                // Request from vuex
                this.database = this.getters_analisa_proposal_tahap_2_rincian_kredit_modal
            }
        },
        onTambahkan() {
            this.$bvModal.hide('ui-analisa-proposal-tahap-2-content-rincian-kredit-modal')
            this.$emit("onBubbleEvent", this.database)
        },
        onRenderData() {
            let items = []

            const jumlah_hari = Math.random()*100 // dynamic
            const jatuh_tempo = "19/12/2018" // dynamic
            let pokok = 60000000 // dynamic
            const angsuran_pokok = 1666667 // dynamic

            items.push({
                nomor: null,
                jatuh_tempo: this.localDateFormate(this.stringToDate(jatuh_tempo)),
                jumlah_hari: null,
                pokok: pokok,
                angsuran_pokok: null,
                angsuran_bunga: null,
                jumlah_angsuran: null,
                baki_debet: pokok,
            });

            for (let i = 0; i < jumlah_hari; i++) {

                items.push({
                    nomor: i + 1,
                    jatuh_tempo: this.localDateFormate(this.nextMonth(jatuh_tempo, i)),
                    jumlah_hari: this.daysInMonth(jatuh_tempo, i),
                    pokok: pokok,
                    angsuran_pokok: angsuran_pokok,
                    angsuran_bunga: 1000,
                    jumlah_angsuran: pokok + 1000,
                    baki_debet: pokok - angsuran_pokok,
                });

                pokok -= angsuran_pokok
            }

            this.database.payload.payload_items = items
        }
    }
});

</script>
