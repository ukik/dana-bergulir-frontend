export const database = {
	payload: {
		payload_badan_hukum: {
			badan_hukum_badan:"",
			badan_hukum_akte_pendirian:"",
			badan_hukum_tanggal_pendirian:"",
			badan_hukum_akte_perubahan:"",
		},
		payload_legalitas_usaha: {
			izin_usaha:"",
			legalitas_iumk_usaha:"", // radio
			no_iumk_usaha:"",
			tanggal_iumk_usaha:"",
			legalitas_situ_usaha:"", // radio
			no_situ_usaha:"",
			tanggal_situ_usaha:"",
			legalitas_siup_usaha:"", // radio
			no_siup_usaha:"",
			tanggal_siup_usaha:"",
			legalitas_ho_usaha:"", // radio
			no_ho_usaha:"",
			tanggal_ho_usaha:"",
			legalitas_tdp_usaha:"", // radio
			no_tdp_usaha:"",
			tanggal_tdp_usaha:"",
			legalitas_sku_usaha:"", // radio
			no_sku_usaha:"",
			tanggal_sku_usaha:"",
		},
		payload_aturan_pelaksana: {
			anggaran_dasar_aturan:"",
			anggaran_rumah_tangga_aturan:"",
			sop_usaha_aturan:"",
			sop_pengelolaan_kas:"",
			sop_sdm_aturan:"",
		},
		payload_status_tempat_usaha:"",
		payload_items_tenaga_kerja: function(){
			let items = []
			for (let i = 0; i < 0; i++) {
				const n = Math.round(Math.random()*1000);
				const element = items.push({
					// isActive: true,
					jumlah_pekerja:"jumlah_pekerja",
					gaji_harian:"jumlah_pekerja",
					gaji_mingguan:"jumlah_pekerja",
					gaji_bulanan:"jumlah_pekerja",
				});
			}
			return items
		}(),
		payload_items_susunan_pemilik: function(){
			let items = []
			for (let i = 0; i < 0; i++) {
				const n = Math.round(Math.random()*1000);
				const element = items.push({
					// isActive: true,
					jabatan: i,
					nama: 'nama '+i,
					modal: 'modal '+i,
					telepon: 'telepon '+i,
					tahun: 'tahun '+i,
					action: '<icon>',
				});
			}

			return items
		}(),
	},
	reference: {
		reference_options_status_tempat_usaha: [
			{ text: 'Sewa', value: 'sewa' },
			{ text: 'Pinjam', value: 'pinjam' },
			{ text: 'Milik Sendiri', value: 'sendiri' },
		],
		reference_options_bentuk_badan_hukum: [
			{ text: 'Perorangan', value: 'perorangan' },
			{ text: 'PT', value: 'pt' },
			{ text: 'CV', value: 'cv'},
			{ text: 'Lainnya', value: 'lainnya' }
		],
		reference_options_ada_tidakada: [
			{ text: 'Ada', value: true, require: true },
			{ text: 'Tidak Ada', value: false, require: true },
		],
		reference_fields_susunan_pemilik: [
			{
				key: 'jabatan',
				label: 'Jabatan',
				sortable: false,
				thStyle: { verticalAlign: 'middle', textAlign:"center" }
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'nama',
				label: 'Nama',
				sortable: false,
				thStyle: { verticalAlign: 'middle', textAlign:"center" }
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'modal',
				label: 'Kepemilikan Modal (%)',
				sortable: false,
				thStyle: { verticalAlign: 'middle', textAlign:"center" }
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'telepon',
				label: 'Telp/HP',
				sortable: false,
				thStyle: { verticalAlign: 'middle', textAlign:"center" }
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'tahun',
				label: 'Peng. Usaha (Thn)',
				sortable: false,
				thStyle: { verticalAlign: 'middle', textAlign:"center" }
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'action',
				label: 'Action',
				sortable: false,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
		]
	}
}
