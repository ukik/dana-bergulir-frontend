export const database = {
	payload: {
		payload_proses_produksi:null,
		payload_kendala_pemesanan: {
			kendala_pemesanan_status:null,
			kendala_pemesanan_deskripsi:null,
		},
		payload_list_manajemen_keuangan_usaha: [
			{
				label: "A. Alokasi Penambahan Modal",
				value:null,
			},
			{
				label: "B. Alokasi Pembayaran Pinjaman Usaha",
				value:null,
			},
			{
				label: "C. Alokasi Penggunaan Pribadi",
				value:null,
			},
			{
				label: "D. Alokasi Saving (Simpanan)",
				value:null,
			},
			{
				label: "E. Lainnya",
				value:null,
			},
		],
		payload_items_perhitungan_laba_rugi: {
			bulan_ke_1:null,
			tahun_ke_1:null,
			bulan_ke_2:null,
			tahun_ke_2:null,
			bulan_ke_3:null,
			tahun_ke_3:null,
			payload:[
				{
					deskripsi: "TOTAL PENJUALAN",
					bulan1: null,
					bulan2: null,
					bulan3: null,
					deskripsi_class: "",
				},
				{
					deskripsi: "PENGELUARAN / BULAN (A+B+C+D+E+F+G)",
					bulan1: null,
					bulan2: null,
					bulan3: null,
					deskripsi_class: "",
				},
				{
					deskripsi: "A. Modal / Pokok Penjualan",
					bulan1: null,
					bulan2: null,
					bulan3: null,
					deskripsi_class: "pl-4",
				},
				{
					deskripsi: "B. Biaya Listrik / Air",
					bulan1: null,
					bulan2: null,
					bulan3: null,
					deskripsi_class: "pl-4",
				},
				{
					deskripsi: "C. Biaya Sewa Tempat",
					bulan1: null,
					bulan2: null,
					bulan3: null,
					deskripsi_class: "pl-4",
				},
				{
					deskripsi: "D. Biaya Sewa Alat",
					bulan1: null,
					bulan2: null,
					bulan3: null,
					deskripsi_class: "pl-4",
				},
				{
					deskripsi: "E. Biaya Transportasi",
					bulan1: null,
					bulan2: null,
					bulan3: null,
					deskripsi_class: "pl-4",
				},
				{
					deskripsi: "F. Pajak",
					bulan1: null,
					bulan2: null,
					bulan3: null,
					deskripsi_class: "pl-4",
				},
				{
					deskripsi: "G. Gaji / Tunjangan Karyawan",
					bulan1: null,
					bulan2: null,
					bulan3: null,
					deskripsi_class: "pl-4",
				},
				{
					deskripsi: "H. Biaya Lain-lain",
					bulan1: null,
					bulan2: null,
					bulan3: null,
					deskripsi_class: "pl-4",
				},
				{
					deskripsi: "PENDAPATAN BERSIH / BULAN = TOTAL PENJUALAN / BLN - PENGELUARAN / BLN",
					bulan1: null,
					bulan2: null,
					bulan3: null,
					deskripsi_class: "",
				},
			],
		},
		payload_items_manajemen_keuangan_pribadi:[
			{
				deskripsi: "PENGHASILAN TETAP (SUAMI/ISTRI)/BULAN",
				jumlah: null,
				deskripsi_class: "",
			},
			{
				deskripsi: "PENGHASILAN LAIN LAIN (PERBULANNYA)",
				jumlah: null,
				deskripsi_class: "",
			},
			{
				deskripsi: "PENGELUARAN / BULAN (A+B+C+D+E+F)",
				jumlah: null,
				deskripsi_class: "",
			},
			{
				deskripsi: "A. Biaya Hidup",
				jumlah: null,
				deskripsi_class: "pl-4",
			},
			{
				deskripsi: "B. Biaya Pinjaman / Kredit",
				jumlah: null,
				deskripsi_class: "pl-4",
			},
			{
				deskripsi: "C. Biaya Asuransi / Arisan",
				jumlah: null,
				deskripsi_class: "pl-4",
			},
			{
				deskripsi: "D. Biaya Rekreasi / Liburan",
				jumlah: null,
				deskripsi_class: "pl-4",
			},
			{
				deskripsi: "E. Biaya Sekolah",
				jumlah: null,
				deskripsi_class: "pl-4",
			},
			{
				deskripsi: "F. Saving / Simpanan",
				jumlah: null,
				deskripsi_class: "pl-4",
			},
			{
				deskripsi: "G. Biaya Lainnya",
				jumlah: null,
				deskripsi_class: "pl-4",
			},
			{
				deskripsi: "SISA PENGHASILAN / BULAN (PENGHASILAN-PENGELUARAN)",
				jumlah: null,
				deskripsi_class: "",
			},
		],
		payload_items_produk_dijual: function(){
			let items = []
			for (let i = 0; i < 0; i++) {
				const n = Math.round(Math.random()*1000);
				const element = items.push({
					// isActive: true,
					pasar: 'pasar '+i,
					produk: 'produk '+i,
					action: '<button>',
				});
			}

			return items
		}(),
		payload_items_kebutuhan_bahan_baku: function(){
			let items = []
			for (let i = 0; i < 0; i++) {
				const n = Math.round(Math.random()*1000);
				const element = items.push({
					// isActive: true,
					bahan_baku: 'bahan_baku '+i,
					kebutuhan_bulanan: 'kebutuhan_bulanan '+i,
					harga_beli: 'harga_beli '+i,
					pemasok_utama: 'pemasok_utama '+i,
					pembayaran: 'pembayaran '+i,
					action: '<icon>',
				});
			}

			return items
		}(),
	},
	reference: {
		reference_fields_produk_dijual: [
			{
				key: 'produk',
				label: 'Produk yang DIjual',
				sortable: false,
				thStyle: { verticalAlign: 'middle', textAlign:"center" }
			},
			{
				key: 'pasar',
				label: 'Sasaran Pasar yang Di Tuju',
				sortable: false,
				thStyle: { verticalAlign: 'middle', textAlign:"center" }
			},
			{
				key: 'action',
				label: 'Action',
				sortable: false,
			},
		],
		reference_fields_kebutuhan_bahan_baku: [
			{
				key: 'bahan_baku',
				label: 'Bahan Baku / Barang Dagang',
				sortable: false,
				thStyle: { verticalAlign: 'middle', textAlign:"center" }
			},
			{
				key: 'kebutuhan_bulanan',
				label: 'Kebutuhan / Bulanan',
				sortable: false,
				thStyle: { verticalAlign: 'middle', textAlign:"center" }
			},
			{
				key: 'harga_beli',
				label: 'Harga Beli (Rp)',
				sortable: false,
				thStyle: { verticalAlign: 'middle', textAlign:"center" }
			},
			{
				key: 'pemasok_utama',
				label: 'Pemasok Utama',
				sortable: false,
				thStyle: { verticalAlign: 'middle', textAlign:"center" }
			},
			{
				key: 'pembayaran',
				label: 'Pembayaran Tunai /Kredit',
				sortable: false,
				thStyle: { verticalAlign: 'middle', textAlign:"center" }
			},
			{
				key: 'action',
				label: 'Action',
				sortable: false,

			},
		],
	}
}
