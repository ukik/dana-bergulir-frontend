export const database = {
	payload: {
		payload_pinjaman_diajukan:null,
		payload_jangka_waktu:null,
		payload_modal_kerja:null,
		payload_list_investasi: [
			{
				label:"Peralatan",
				value:null,
			},
			{
				label:"Mesin",
				value:null,
			},
			{
				label:"Inventaris",
				value:null,
			},
			{
				label:"Jumlah",
				value:null,
			},
			{
				label:"Jumlah yang tersedia",
				value:null,
			},
			{
				label:"Kekurangan Dana",
				value:null,
			},
		],
		payload_list_pemanfaatan_modal_kerja: [
			{
				label:"Pembelian Bahan Baku",
				value:null,
			},
			{
				label:"Biaya Proses Produksi",
				value:null,
			},
		],
		payload_items_data_pinjaman: function(){
			let items = []
			for (let i = 0; i < 2; i++) {
				const n = Math.round(Math.random()*1000);
				const element = items.push({
					// isActive: true,
					kreditur: 'kreditur '+i,
					pencairan: 'pencairan '+i,
					nominal: 'nominal '+i,
					bunga: 'bunga '+i,
					jatuh_tempo: 'jatuh_tempo '+i,
					action: '<action>',
				});
			}

			return items
		}(),
		payload_items_agunan: function(){
			let items = []
			for (let i = 0; i < 2; i++) {
				const n = Math.round(Math.random()*1000);
				const element = items.push({
					// isActive: true,
					jenis_barang: 'jenis_barang '+i,
					bukti_kepemilikan: 'bukti_kepemilikan '+i,
					perkiraan_nilai: 'perkiraan_nilai '+i,
					keterangan: 'keterangan '+i,
					action: '<action>',
				});
			}

			return items
		}(),
		payload_items_peningkatan_diharapkan:[
			{
				deskripsi: "Produksi",
				nominal_sekarang: null,
				nominal_diharapkan: null,
				nominal_peningkatan: 0,
				persentase_peningkatan: 0,
			},
			{
				deskripsi: "Volume Usaha",
				nominal_sekarang: null,
				nominal_diharapkan: null,
				nominal_peningkatan: 0,
				persentase_peningkatan: 0,
			},
			{
				deskripsi: "Pendapatan",
				nominal_sekarang: null,
				nominal_diharapkan: null,
				nominal_peningkatan: 0,
				persentase_peningkatan: 0,
			},
		],
	},
	reference: {
		reference_fields_data_pinjaman: [
			{
				key: 'kreditur',
				label: 'Kreditur/Pemberi Pinj.',
				sortable: false,
				thStyle: { verticalAlign: 'middle', textAlign:"center" }
			},
			{
				key: 'pencairan',
				label: 'Bulan/Tahun Cair',
				sortable: false,
				thStyle: { verticalAlign: 'middle', textAlign:"center" }
			},
			{
				key: 'nominal',
				label: 'Nilai (Rp.)',
				sortable: false,
				thStyle: { verticalAlign: 'middle', textAlign:"center" }
			},
			{
				key: 'bunga',
				label: 'Bunga/Thn(%) Flat/Menurun',
				sortable: false,
				thStyle: { verticalAlign: 'middle', textAlign:"center" }
			},
			{
				key: 'jatuh_tempo',
				label: 'Jangka Waktu Pinjaman (Bulan)',
				sortable: false,
				thStyle: { verticalAlign: 'middle', textAlign:"center" }
			},
			{
				key: 'action',
				label: 'Action',
				sortable: false,
				thStyle: { verticalAlign: 'middle', textAlign:"center" }
			},
		],
		reference_fields_agunan: [
			{
				key: 'jenis_barang',
				label: 'Jenis Barang',
				sortable: false,
				thStyle: { verticalAlign: 'middle', textAlign:"center" }
			},
			{
				key: 'bukti_kepemilikan',
				label: 'Bukti Kepemilikan (Tipe/Merk/No. Polisi/Ukuran/Letak)',
				sortable: false,
				thStyle: { verticalAlign: 'middle', textAlign:"center" }
			},
			{
				key: 'perkiraan_nilai',
				label: 'Perkiraan Nilai',
				sortable: false,
				thStyle: { verticalAlign: 'middle', textAlign:"center" }
			},
			{
				key: 'keterangan',
				label: 'Keterangan',
				sortable: false,
				thStyle: { verticalAlign: 'middle', textAlign:"center" }
			},
			{
				key: 'action',
				label: 'Action',
				sortable: false,
				thStyle: { verticalAlign: 'middle', textAlign:"center" }
			},
		],
	}
}
