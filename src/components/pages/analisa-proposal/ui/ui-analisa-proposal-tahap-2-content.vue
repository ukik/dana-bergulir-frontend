<style scoped>
.section-parent {
  background: #fff;
  border-radius: 10px;
}

.subtitle {
  font-family: Montserrat_Bold;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  color: #555555;
}

select,
input,
textarea {
  background: #ffffff;
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

.readonly {
  background: #e9ecef !important;
}
</style>

<template>
  <fragment>
    <!-- MODAL -->
  	<b-modal id="ui-analisa-proposal-tahap-2-content-pendapatan-usaha-modal" size="xl" hide-footer>
      <template v-slot:modal-title>
  			<span class="subtitle">Tabel Bantu Pendapatan Usaha</span>
      </template>

  		<ui-analisa-proposal-tahap-2-content-pendapatan-usaha-modal @onBubbleEvent="onEditPendapatanUsahaModal" />
    </b-modal>

    <!-- MODAL -->
  	<b-modal id="ui-analisa-proposal-tahap-2-content-rincian-kredit-modal" size="xl" hide-footer>
      <template v-slot:modal-title>
  			<span class="subtitle">Cek Rincian Besaran Kredit</span>
      </template>

  		<ui-analisa-proposal-tahap-2-content-rincian-kredit-modal @onBubbleEvent="onEditPendapatanUsahaModal" />
    </b-modal>

    <div class="col-12 m-0 pr-2 mt-3" v-for="(parent_item, parent_index) in database.payload" :key="parent_index">
      <div :id="'scroll-to-'+parent_index" />
      <div class="m-0 p-4 section-parent">
        <form
          :ref="'form'+parent_index"
          @submit.prevent="onSubmit"
          @change="handleChange"
          @invalid.capture.prevent="handleInvalid"
        >
          <!-- <div @click.prevent="onDelete(parent_index)" class="btn btn-danger mb-5 float-right">
            <font-awesome-icon icon="times" />
          </div> -->
          <div>
            <span class="subtitle">ANALISA PERHITUNGAN PINJAMAN UMKM</span>
          </div>

          <div class="mt-3 mb-3 input-group">
            <div class="col p-0">
              <span class="font-weight-bold">Pendapatan Usaha</span>
            </div>
            <div class="col p-0 text-right">
              <span class="font-weight-bold">
                <div @click="$bvModal.show('ui-analisa-proposal-tahap-2-content-pendapatan-usaha-modal')" id="button-print" class="btn print mr-2 pl-3 pr-3">Sunting</div>
              </span>
            </div>
          </div>

          <b-table-simple class="table b-table table-hover bg-white table-bordered">
            <b-tbody>
              <b-tr
                v-for="(item, index) in parent_item.payload_items_perhitungan_laba_rugi"
                :key="index"
              >
                <b-td colspan="1" :class="item.deskripsi_class">{{ item.deskripsi }}</b-td>
                <b-td colspan="1" width="350">
                  <input
                    :disabled="item.disabled"
                    :name="parent_index+'payload_items_perhitungan_laba_rugi'+index"
                    :id="parent_index+'payload_items_perhitungan_laba_rugi'+index"
                    :required="true"
                    v-model="item.value"
                    type="number"
                    min="0"
                    :class="item.disabled ? 'form-control readonly' : 'form-control'"
                    :placeholder="0 | currency"
                  />
                  <!-- Required -->
                  <p
                    v-if="fieldErrors[parent_index+'payload_items_perhitungan_laba_rugi'+index]"
                    class="required-alert"
                  >wajib dilengkapi</p>
                </b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>

          <div class="mt-5 mb-3 input-group">
            <div class="col p-0">
              <span class="font-weight-bold">Pendapatan Penghasilan Di Luar usaha yang Diajukan (Manajemen Keuangan Keluarga / Pribadi)</span>
            </div>
            <div class="col p-0 text-right">
              <span class="font-weight-bold">
                <!-- <div id="button-print" @click.prevent class="btn print mr-2 pl-3 pr-3">Sunting</div> -->
              </span>
            </div>
          </div>

          <b-table-simple class="table b-table table-hover bg-white table-bordered">
            <b-tbody>
              <b-tr
                v-for="(item, index) in parent_item.payload_items_manajemen_keuangan_pribadi"
                :key="index"
              >
                <b-td colspan="1" :class="item.deskripsi_class">{{ item.deskripsi }}</b-td>
                <b-td colspan="1" width="350">
                  <input
                    :name="parent_index+'payload_items_manajemen_keuangan_pribadi'+index"
                    :id="parent_index+'payload_items_manajemen_keuangan_pribadi'+index"
                    :required="true"
                    v-model="item.value"
                    type="number"
                    min="0"
                    :class="item.disabled ? 'form-control readonly' : 'form-control'"
                    :placeholder="0 | currency"
                  />
                  <!-- Required -->
                  <p
                    v-if="fieldErrors[parent_index+'payload_items_manajemen_keuangan_pribadi'+index]"
                    class="required-alert"
                  >wajib dilengkapi</p>
                </b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>

          <table class="w-100">
            <tr>
              <td height="80">
                <!-- Total Pendapatan Bersih/Bulan -->
                <div class="mt-3 mb-3 input-group">
                  <div class="col-6 p-0">
                    <span class="font-weight-bold">Total Pendapatan Bersih/Bulan</span>
                  </div>
                  <div class="col-6 p-0 text-right">
                    <input
                      disabled
                      class="form-control readonly"
                      :placeholder="0 | currency"
                    />
                  </div>
                  <div class="col p-0">
                    <a class="medium">(Pendapatan bersih usaha/bln + Sisa penghasilan tetap/bln)</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td height="80">
                <!-- RPC Standard 75% -->
                <div class="mt-3 mb-3 input-group">
                  <div class="col-6 p-0">
                    <span class="font-weight-bold">RPC Standard 75%</span>
                  </div>
                  <div class="col-6 p-0 text-right">
                    <input
                      disabled
                      class="form-control readonly"
                      :placeholder="0 | currency"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td height="80">
                <!-- Maksimal Pinjaman + Bunga -->
                <div class="mt-3 mb-3 input-group">
                  <div class="col-6 p-0">
                    <span class="font-weight-bold">Maksimal Pinjaman + Bunga</span>
                  </div>
                  <div class="col-6 p-0 text-right">
                    <input
                      disabled
                      class="form-control readonly"
                      :placeholder="0 | currency"
                    />
                  </div>
                  <div class="col p-0">
                    <a class="medium">nilai kredit = rpc x ((1-(1/(1+R)^n))/R)</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td height="80">
                <!-- Nilai Pinjaman -->
                <div class="mt-3 mb-3 input-group">
                  <div class="col-6 p-0">
                    <span class="font-weight-bold">Nilai Pinjaman</span>
                  </div>
                  <div class="col-6 p-0 text-right">
                    <input
                      disabled
                      class="form-control readonly"
                      :placeholder="0 | currency"
                    />
                  </div>
                  <div class="col p-0">
                    <a class="medium">(Maks Pinj+Bunga)*(1-12.33%)</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td height="80">
                <!-- Perhitungan Besaran Kredit -->
                <div class="mt-3 mb-3 input-group">
                  <div class="col-6 p-0">
                    <span class="font-weight-bold">Perhitungan Besaran Kredit</span>
                    <p>
                    <div id="button-print" @click="$bvModal.show('ui-analisa-proposal-tahap-2-content-rincian-kredit-modal')" class="btn print mr-2 pl-3 pr-3">Cek Rincian</div>
                  </p>
                  </div>
                  <div class="col-6 p-0 text-right">
                    <input
                      disabled
                      class="form-control readonly"
                      :placeholder="0 | currency"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td height="80">
                <div class="mt-3 mb-3 input-group">
                  <div class="col-6 p-0">
                    <span class="font-weight-bold">RPC Standard 75%</span>
                  </div>
                  <div class="col-6 p-0 text-right">
                    <input
                      disabled
                      class="form-control readonly"
                      :placeholder="0 | currency"
                    />
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  </fragment>
</template>

<script>
import {
  database,
  create
} from "@/models/analisa-proposal-tahap/analisa-proposal-tahap-2";

export default {
  watch: {
    database: {
      handler(val) {
        console.log(val);
        // Async this local data to vuex
        this.dispatch_analisa_proposal_tahap_2(val);
      },
      deep: true,
      immediate: false
    }
  },
  created() {
    // console.log(!this.getters_proposal_tahap_1)
    if (this.getters_analisa_proposal_tahap_2) {
      // Request from vuex
      this.database = this.getters_analisa_proposal_tahap_2;
    }

    // Request from server to update vuex
    this.database = database;
    // console.log(this.database)
    return;
  },
  mounted() {
    this.$parent.$on("onEmitNewAnalisa", this.onNewAnalisa);
    this.$parent.$on("onEmitSubmit", this.onSubmit);
  },
  data() {
    return {
      database: {
        payload: []
      }
    };
  },
  methods: {
    onEditPendapatanUsahaModal(val) {
			// this.$scrollTo("#scroll-to-1", 500, {
			// 	offset: -450,
			// })
			this.database.payload.payload_items_susunan_pemilik.push(val)
		},
    async onDelete(index) {
      await this.database.payload.splice(index, 1);
      if (this.database.payload.length <= 0) {
        this.$scrollTo("#scroll-to-new", 500, {
          offset: -150
        });
        return;
      }
      this.$scrollTo("#scroll-to-" + (this.database.payload.length - 1), 500, {
        offset: -150
      });
    },
    async onNewAnalisa() {
      await this.database.payload.push(create);
      // console.log("after", this.getters_analisa_proposal_tahap_2);
      this.$scrollTo("#scroll-to-" + (this.database.payload.length - 1), 500, {
        offset: -150
      });
    },
    onSubmit: window._.debounce(function() {

      // console.log(this.$refs.form.reportValidity(), this.$refs.form.reportValidity())
      for (let i = 0; i < this.database.payload.length; i++) {
        console.log(this.$refs["form"+i]);
        if (this.$refs["form"+i][0].checkValidity()) {
          // this.$refs.form.reportValidity() // popup required tooltip jika pakai handleInvalid maka ini tidak perlu

          this.onSnotifyInput();
          return;
        }
      }
return
      new Promise(resolve => {
        resolve(
          this.dispatch_analisa_proposal_tahap_2_edit_payload_items({
            index: this.$route.params.id,
            item: this.database.payload
          })
        );
      }).then(result => {
        this.$router.replace("/master-pemohon-master");
        this.clearForm();
      });
    }, 250)
  }
};
</script>
