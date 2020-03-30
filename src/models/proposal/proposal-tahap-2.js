import Vue from 'vue'

const faker = Vue.faker()

export const database = {
	payload: {
		payload_profile_pemilik: {
			nama_pemilik:faker.name.findName(),
			tempat_lahir_pemilik:faker.address.city(),
			tanggal_lahir_pemilik:faker.date.past(),
			ktp_pemilik:faker.random.number(),
			alamat_pemilik:faker.address.streetAddress(),
			pendidikan_pemilik:"SMP",
			pekerjaan_pemilik:faker.name.jobTitle(),
			status_pemilik:"",
			telepon_pemilik:faker.phone.phoneNumber(),
		},
		payload_profile_umkm: {
			nama_umkm:"",
			bidang_umkm:"",
			alamat_umkm:"",
			npwp_umkm:"",
			awal_pembentukan_umkm:"",
			penghargaan_umkm:"",
			pinjaman_umkm:"",
		}
	}
}
