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

.nowarp {
  display: block;
  overflow: hidden;
  white-space: nowrap;
}

.kuadrat {
	font-size: 10px;
	    margin-top: -4px;
	    display: block;
}

</style>

<template>
  <fragment>
    <div
      class="col-6 m-0 pr-2 mt-3"
      v-for="(parent_item, parent_index) in database.payload"
      :key="parent_index"
    >
      <div :id="'scroll-to-'+parent_index" />
      <div class="m-0 p-4 section-parent">
        <form
          :ref="'form'+parent_index"
          @submit.prevent="onSubmit"
          @change="handleChange"
          @invalid.capture.prevent="handleInvalid"
        >
          <div @click.prevent="onDelete(parent_index)" class="btn btn-danger mb-5 float-right">
            <font-awesome-icon icon="times" />
          </div>
          <div>
            <span class="subtitle">AGUNAN TANAH BANGUNAN</span>
          </div>

          <div class="mt-3 mb-3 input-group">
            <div class="col p-0">
              <span class="font-weight-bold">Pendapatan Usaha</span>
            </div>
            <div class="col p-0 text-right">
              <span class="font-weight-bold">
                <!-- <div id="button-print" @click.prevent class="btn print mr-2 pl-3 pr-3">Sunting</div> -->
              </span>
            </div>
          </div>

          <b-table-simple class="table b-table table-hover bg-white table-bordered">
            <b-tbody>
              <b-tr v-for="(item, index) in parent_item.payload_items_detail_tanah_bangunan_angunan" :key="index">
                <b-td colspan="1" >{{ item.deskripsi }}</b-td>
                <b-td colspan="1" width="140">
									<div class="input-group">
	                  <input
	                    :name="parent_index+'payload_items_detail_tanah_bangunan_angunan'+index"
	                    :id="parent_index+'payload_items_detail_tanah_bangunan_angunan'+index"
	                    :required="true"
	                    v-model="item.value"
	                    :type="item.type"
	                    min="0"
	                    class="form-control mr-2"
	                    :placeholder="tanah_bangunan_placeholder(item)"
	                  />

										<span v-if="item.key == 'luas_tanah_bangunan_angunan'">M</span>
										<span v-if="item.key == 'luas_tanah_bangunan_angunan'" class="kuadrat">2</span>
	                  <!-- Required -->

									</div>
                  <p
                    v-if="fieldErrors[parent_index+'payload_items_detail_tanah_bangunan_angunan'+index]"
                    class="required-alert"
                  >wajib dilengkapi</p>
                </b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>

					<div class="mt-3 mb-3 input-group">
            <div class="col p-0">
              <span class="font-weight-bold">Bangunan Permanen</span>
            </div>
            <div class="col p-0 text-right">
              <span class="font-weight-bold">
                <!-- <div id="button-print" @click.prevent class="btn print mr-2 pl-3 pr-3">Sunting</div> -->
              </span>
            </div>
          </div>

          <b-table-simple class="table b-table table-hover bg-white table-bordered">
            <b-tbody>
              <b-tr v-for="(item, index) in parent_item.payload_items_detail_bangunan_permanen_angunan" :key="index">
                <b-td colspan="1" >{{ item.deskripsi }}</b-td>
                <b-td colspan="1" width="140">
									<div class="input-group">
                  <input
                    :name="parent_index+'payload_items_detail_bangunan_permanen_angunan'+index"
                    :id="parent_index+'payload_items_detail_bangunan_permanen_angunan'+index"
                    :required="true"
                    v-model="item.value"
                    :type="item.type"
                    min="0"
                    class="form-control mr-2"
										:placeholder="tanah_bangunan_placeholder(item)"
									/>

									<span v-if="item.key == 'luas_tanah_bangunan_angunan'">M</span>
									<span v-if="item.key == 'luas_tanah_bangunan_angunan'" class="kuadrat">2</span>

								</div>
                  <!-- Required -->
                  <p
                    v-if="fieldErrors[parent_index+'payload_items_detail_bangunan_permanen_angunan'+index]"
                    class="required-alert"
                  >wajib dilengkapi</p>
                </b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>

					<b-table-simple class="table b-table table-hover bg-white table-bordered">
            <b-tbody>
              <b-tr>
                <b-td colspan="1"><span class="font-weight-bolder">Total</span></b-td>
                <b-td colspan="1" width="140">
									<div class="input-group">
	                  <input
	                    min="0"
	                    class="form-control mr-2"
	                    :placeholder="0 | currency"
	                  />
									</div>
                </b-td>
              </b-tr>
							<b-tr>
                <b-td colspan="1"><span class="font-weight-bolder">HASIL</span></b-td>
                <b-td colspan="1" width="140">
									<div class="input-group">
	                  <input
	                    min="0"
	                    class="form-control mr-2"
	                    :placeholder="0 | currency"
	                  />
									</div>
                </b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>

          <!-- Foto Jaminan -->
          <div class="mt-3 mb-3 input-group">
            <div class="col-6 p-0">
              <span class="font-weight-bold">Foto Jaminan</span>
            </div>
            <div class="col-6 p-0 text-right">
              <div class="input-group">
                :
                <b-form-radio-group
                  class="ml-2"
                  id="foto_jaminan"
                  name="foto_jaminan"
                  :required="true"
                  v-model="database.payload[parent_index].foto_jaminan_radio"
                  :options="[
								{ text: 'Ada', value: true, require: true },
								{ text: 'Tidak Ada', value: false, require: true },
							]"
                ></b-form-radio-group>
              </div>
            </div>
            <div class="col-6 p-0 mt-2" v-if="database.payload[parent_index].foto_jaminan_radio">
              <b-img thumbnail fluid :src="database.payload[parent_index].foto_jaminan_preview"></b-img>
            </div>
            <div class="col-6 p-0 mt-2" v-if="database.payload[parent_index].foto_jaminan_radio">
              <!-- wajib karena masih kosong -->
              <div class="input-group">
                <b-form-file
                  v-model="database.payload.foto_jaminan"
                  @change="onImageChange($event, parent_index)"
                  :required="false"
                  id="foto_surveyor"
                  name="foto_surveyor"
                  class="form-control ml-2 nowarp"
                  :placeholder="image_placeholder(parent_index)"
                ></b-form-file>
              </div>
            </div>
          </div>

          <div class="mt-3 mb-3 input-group">
            <div class="col-12 p-0">
              <span class="font-weight-bold">Catatan</span>
            </div>
            <div class="col-12 p-0 text-right mt-2">
              <textarea
                :name="parent_index+'catatan_angunan'"
                :id="parent_index+'catatan_angunan'"
                :required="true"
                v-model="database.payload[parent_index].catatan_angunan"
                class="form-control"
                rows="3"
              ></textarea>
            </div>

            <!-- Required -->
            <p
              v-if="fieldErrors[parent_index+'catatan_angunan']"
              class="required-alert"
            >wajib dilengkapi</p>
          </div>

          <table>
            <tr>
              <td></td>
            </tr>

            <tr>
              <td></td>
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
} from "@/models/analisa-proposal-tahap/analisa-proposal-tahap-4";

export default {
  watch: {
    database: {
      handler(val) {
        console.log(val);
        // Async this local data to vuex
        this.dispatch_analisa_proposal_tahap_4(val);
      },
      deep: true,
      immediate: false
    }
  },
  created() {
    // console.log(!this.getters_proposal_tahap_1)
    if (this.getters_analisa_proposal_tahap_4) {
      // Request from vuex
      this.database = this.getters_analisa_proposal_tahap_4;
    }

    // Request from server to update vuex
    this.database = database;
    // console.log(this.database)
    return;
  },
  computed: {
		tanah_bangunan_placeholder() {
      return function(item) {
        return item.type == 'number' ? this.currency(item.value) : null
      };
    },
    image_placeholder() {
      return function(index) {
        return !this.database.payload[index].foto_jaminan
          ? "Pilih foto..."
          : this.database.payload[index].foto_jaminan.name;
      };
    }
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
        console.log(this.$refs["form" + i]);
        if (this.$refs["form" + i][0].checkValidity()) {
          // this.$refs.form.reportValidity() // popup required tooltip jika pakai handleInvalid maka ini tidak perlu

          this.onSnotifyInput();
          return;
        }
      }
      return;
      new Promise(resolve => {
        resolve(
          this.dispatch_analisa_proposal_tahap_4_edit_payload_items({
            index: this.$route.params.id,
            item: this.database.payload
          })
        );
      }).then(result => {
        this.$router.replace("/master-pemohon-master");
        this.clearForm();
      });
    }, 250),
    onImageChange(e, index) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0], index);
    },
    createImage(file, index) {
      let reader = new FileReader();
      let vm = this;
      reader.onload = e => {
        // vm.foto_jaminan_preview = e.target.result;
        vm.database.payload[index].foto_jaminan_preview = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
};
</script>
