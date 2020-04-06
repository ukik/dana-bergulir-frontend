export const create = {
	// isActive: true,
	nomor: null,
	nomor_pinjaman: null,
	nama_pemilik: null,
	nama_usaha:null,
	tagihan_ke:null,
	tunggakan: null,
	pokok: null,
	bunga:null,
	denda:null,
	telepon:null,
	jatuh_tempo:null,
	action:null,
	kartu:null,
	//
	nomor_transaksi:null,
	periode_pembayaran:null,
	tanggal_transaksi:null,
	bayar_pokok:null,
	bayar_bunga:null,
	bayar_denda:null,
}

export const database = {
	payload: {
		payload_items: function(){
			let items = []
			for (let i = 0; i < 5; i++) {
				const n = Math.round(Math.random()*1000);
				const element = items.push({
					// isActive: true,
					nomor: i+1,
					nomor_pinjaman: "nomor_pinjaman"+(i+1),
					nama_pemilik: "nama_pemilik"+(i+1),
					nama_usaha:"nama_usaha"+(i+1),
					tagihan_ke: "tagihan_ke"+(i+1),
					tunggakan: "tunggakan"+(i+1),
					pokok: "pokok"+(i+1),
					bunga: "bunga"+(i+1),
					denda: "denda"+(i+1),
					telepon: "telepon"+(i+1),
					jatuh_tempo: "jatuh_tempo"+(i+1),
					// action: "action",
					// kartu: "kartu",
					//
					nomor_transaksi:"nomor_transaksi",
					periode_pembayaran:"periode_pembayaran",
					tanggal_transaksi:"tanggal_transaksi",
					bayar_pokok:"bayar_pokok",
					bayar_bunga:"bayar_bunga",
					bayar_denda:"bayar_denda",
				});
			}

			return items
		}(),
	},
	reference: {
		reference_fields_currentPage: 1,
		reference_fields_perPage: 10,
		// Note 'isActive' is left out and will not appear in the rendered table
		reference_fields: [
			{
				key: 'nomor',
				label: 'No',
				sortable: true,
			},
			{
				key: 'nomor_pinjaman',
				label: 'No. Pinjaman',
				sortable: true,
			},
			{
				key: 'nama_pemilik',
				label: 'Nama Pemilik',
				sortable: true,
			},
			{
				key: 'nama_usaha',
				label: 'Nama Usaha',
				sortable: true,
			},
			{
				key: 'tagihan_ke',
				label: 'Tagihan Ke',
				sortable: true,
			},
			{
				key: 'tunggakan',
				label: 'Tunggakan',
				sortable: true,
			},
			{
				key: 'pokok',
				label: 'Pokok',
				sortable: true,
			},

			{
				key: 'bunga',
				label: 'Bunga',
				sortable: true,
			},
			{
				key: 'denda',
				label: 'Denda',
				sortable: true,
			},
			{
				key: 'telepon',
				label: 'No HP',
				sortable: true,
			},
			{
				key: 'jatuh_tempo',
				label: 'Tgl Jatuh Tempo',
				sortable: true,
			},

			// {
			// 	key: 'action',
			// 	label: 'Aksi',
			// 	sortable: true,
			// },
			//
			// {
			// 	key: 'kartu',
			// 	label: 'Kartu',
			// 	sortable: true,
			// },
		],

	}

}
