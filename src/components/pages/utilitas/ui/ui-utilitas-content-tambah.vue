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
    font-size: 14px;
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
    background: #58C0E7;
}

.col-4 {
    padding-left: 0px;
}

</style>

<template>

<fragment>
    <div class="input-group">
        <form class="col-8" ref="form" @submit.prevent="onSubmit" @change="handleChange" @invalid.capture.prevent="handleInvalid">
            <!-- Foto Surveyor -->
            <b-row class="mb-2">
                <b-col class="col-4">
                    <span>Foto Surveyor</span>
                </b-col>
                <b-col>
                    <!-- wajib karena masih kosong -->
                    <div class="input-group">
                        :
                        <b-form-file v-model="database.payload.foto" @change="onImageChange" :required="true" id="foto" name="foto" class="form-control ml-2" placeholder="Pilih foto profile..." drop-placeholder="Drop file here..."></b-form-file>
                    </div>
                    <!-- Required -->
                    <p v-if="fieldErrors.foto" class="required-alert">wajib dilengkapi</p>
                </b-col>
            </b-row>

            <!-- Username -->
            <b-row class="mb-2">
                <b-col class="col-4">
                    <span>Username</span>
                </b-col>
                <b-col>
                    <div class="input-group">
                        :
                        <b-form-input :required="true" id="username" name="username" v-model="database.payload.username" type="text" class="form-control ml-2" placeholder="" />
                    </div>
                    <!-- Required -->
                    <p v-if="fieldErrors.username" class="required-alert">wajib dilengkapi</p>
                </b-col>
            </b-row>

            <!-- Nama User -->
            <b-row class="mb-2">
                <b-col class="col-4">
                    <span>Nama User</span>
                </b-col>
                <b-col>
                    <div class="input-group">
                        :
                        <input :required="true" id="nama" name="nama" v-model="database.payload.nama" type="text" class="form-control ml-2" placeholder="">
                    </div>
                    <!-- Required -->
                    <p v-if="fieldErrors.nama" class="required-alert">wajib dilengkapi</p>
                </b-col>
            </b-row>

            <!-- NIP -->
            <b-row class="mb-2">
                <b-col class="col-4">
                    <span>NIP</span>
                </b-col>
                <b-col>
                    <div class="input-group">
                        :
                        <input :required="true" id="nip" name="nip" v-model="database.payload.nip" type="text" class="form-control ml-2" placeholder="">
                    </div>
                    <!-- Required -->
                    <p v-if="fieldErrors.nip" class="required-alert">wajib dilengkapi</p>
                </b-col>
            </b-row>

            <!-- Hak Akses -->
            <b-row class="mb-2">
                <b-col class="col-4">
                    <span>Hak Akses</span>
                </b-col>
                <b-col>
                    <div class="input-group">
                        :
                        <b-form-select v-model="database.payload.privilage" :options="[
							{ item: null, name: ':: Pilih Hak Akses ::', notEnabled: true },
							{ item: 'analis', name: 'Analis' },
							{ item: 'surveyor', name: 'Surveyor' },
							{ item: 'debitur', name: 'Debitur' },
							{ item: 'komite', name: 'Komite' },
							{ item: 'admin', name: 'Admin' },
						]" class="form-control ml-2" value-field="item" text-field="name" disabled-field="notEnabled" id="privilage" name="privilage" :required="true"></b-form-select>
                    </div>
                    <!-- Required -->
                    <p v-if="fieldErrors.privilage" class="required-alert">wajib dilengkapi</p>
                </b-col>
            </b-row>

            <!-- Password -->
            <b-row class="mb-2">
                <b-col class="col-4">
                    <span>Password</span>
                </b-col>
                <b-col>
                    <div class="input-group">
                        :
                        <input :required="true" id="password" name="password" v-model="database.payload.password" type="text" class="form-control ml-2" placeholder="">
                    </div>
                    <!-- Required -->
                    <p v-if="fieldErrors.password" class="required-alert">wajib dilengkapi</p>
                </b-col>
            </b-row>

            <!-- Konfirmasi Password -->
            <b-row class="mb-2">
                <b-col class="col-4">
                    <span>Konfirmasi Password</span>
                </b-col>
                <b-col>
                    <div class="input-group">
                        :
                        <input :required="true" id="konfirmasi_password" name="konfirmasi_password" v-model="database.payload.konfirmasi_password" type="text" class="form-control ml-2" placeholder="">
                    </div>
                    <!-- Required -->
                    <p v-if="fieldErrors.konfirmasi_password" class="required-alert">wajib dilengkapi</p>
                </b-col>
            </b-row>


            <!-- Export Data -->
            <b-row class="mb-2">
                <b-col class="col-4">
                    <span>Export Data</span>
                </b-col>
                <b-col>
                    <div class="input-group">
                        :
                        <b-form-checkbox class="ml-2" id="export" :required="false" v-model="database.payload.export" name="export" :value="true"> Diizinkan
                        </b-form-checkbox>
                    </div>
                </b-col>
            </b-row>


            <!-- Import Data -->
            <b-row class="mb-2">
                <b-col class="col-4">
                    <span>Import Data</span>
                </b-col>
                <b-col>
                    <div class="input-group">
                        :
                        <b-form-checkbox class="ml-2" id="import" :required="false" v-model="database.payload.import" name="import" :value="true"> Diizinkan
                        </b-form-checkbox>
                    </div>
                </b-col>
            </b-row>


            <div class="mt-3">
                <div class="column-right">
                    <div id="button-prev" @click.prevent="gotoPage('/utilitas-master')" class="btn non-next mr-2 pl-3 pr-3">Batal</div>

                    <button type="submit" @click.prevent="onSubmit" class="btn btn-primary submit mr-2 pl-3 pr-3">Simpan</button>
                    <button type="reset" @click.prevent="clearForm" class="btn btn-danger danger pl-3 pr-3">Reset</button>
                </div>
            </div>
        </form>
        <b-col>
            <h6>Profile User</h6>
            <div>
                <b-img thumbnail fluid :src="database.payload.imagePreview"></b-img>
            </div>
        </b-col>
    </div>
</fragment>

</template>

<script>

import {
    create
}
from '@/models/utilitas'

export default {
    data() {
            return {
                // imagePreview:"https://picsum.photos/250/250/?image=58",
                database: {
                    payload: create
                }
            }
        },
        methods: {
            clearForm() {
                    this.fieldErrors = {}
                    this.database.payload = {
											nomor: null,
											username: null,
											password: null,
											nip:null,
											nama: null,
											privilage: null,
											export: null,
											import: null,
											action: null,
											//
											foto: null,
											imagePreview: "https://picsum.photos/250/250/?image=58",
										}
                },
                onSubmit: window._.debounce(function() {
                    console.log(this.database.payload);
                    // console.log(this.$refs.form.reportValidity(), this.$refs.form.reportValidity())
                    if (!this.$refs.form.checkValidity()) {
                        // this.$refs.form.reportValidity() // popup required tooltip jika pakai handleInvalid maka ini tidak perlu

                        this.onSnotifyInput()
                        return
                    }

                    new Promise(resolve => {
                        resolve(this.dispatch_utilitas_add_payload_items({
                            item: this.database.payload
                        }))
                    }).then(result => {
                        this.$router.replace("/utilitas-master")
                        this.clearForm()
                    })
                }, 250),

                onImageChange(e) {
                    let files = e.target.files || e.dataTransfer.files;
                    if (!files.length) {
                        this.database.payload.foto = null;
                        this.database.payload.imagePreview = "https://picsum.photos/250/250/?image=58";
                        return
                    }
                    this.createImage(files[0]);
                },
                createImage(file) {
                    let reader = new FileReader();
                    let vm = this;
                    reader.onload = e => {
                        // vm.imagePreview = e.target.result;
                        vm.database.payload.imagePreview = e.target.result;
                    };
                    reader.readAsDataURL(file)
                },
        }
}

</script>
