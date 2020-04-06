function stringToDate(tanggal) {
	const date_parts = tanggal.split('/')
	return new Date(+date_parts[2], date_parts[1] - 1, date_parts[0])
}

function nextMonth(tanggal, next) {
	const date_parts = tanggal.split('/')
	// bulan dihitung dari 0 = Januari
	// untuk format "19/1/2018"
	const date = new Date(+date_parts[2], date_parts[1] - 1, date_parts[0])

	// console.log(date.getFullYear(), daysInMonth(date.getFullYear(), date_parts[1]-1));
	// console.log(+date_parts[2], date_parts[1]-1, date_parts[0]);
	// console.log(date.getDay(), date.getMonth(), new Date(date.setMonth(next, date_parts[0])));

	return new Date(date.setMonth(next, date_parts[0]))
}

function daysInMonth(tanggal, next) {
	// string to date
	const date_parts = tanggal.split('/')
	const date = new Date(+date_parts[2], date_parts[1] - 1, date_parts[0])

	// next moth
	const new_month = new Date(date.setMonth(next, date_parts[0]))

	// days of months
	return new Date(date.getFullYear(), new_month.getMonth(), 0).getDate()
}

function localDateFormate(tanggal) {
	const monthNames = ["January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	];
	// let dateObj = new Date();
	let month = monthNames[tanggal.getMonth()];
	let day = String(tanggal.getDate()).padStart(2, '0');
	let year = tanggal.getFullYear();
	return month + '\n' + day + ', ' + year;
}

export const database_detail = {
	payload: {
		payload_items: function() {
			let items = []

			const jumlah_hari = 16 // dynamic
			const jatuh_tempo = "19/12/2018" // dynamic
			let pokok = 60000000 // dynamic
			const angsuran_pokok = 1666667 // dynamic

			const bunga = 400000

			items.push({
				nomor: null,
				jatuh_tempo: localDateFormate(stringToDate(jatuh_tempo)),
				jumlah_hari: null,
				pokok: pokok,
				angsuran_pokok: null,
				angsuran_bunga: null,
				jumlah_angsuran: null,
				baki_debet: pokok,

				// PINK
				tanggal_pembayaran: null,
				pokok: null,
				akumulasi_angsuran_pokok: null,
				outstanding_pokok: null,

				// BLUE
				bunga:null,
				akumulasi_bunga:null,
				pokok:null,

				// ORANGE
				tanggal_bayar_denda:null,
				nominal_denda:null,
				outstanding_denda:null,
			});

			for (let i = 0; i < jumlah_hari; i++) {

				items.push({
					nomor: i + 1,
					jatuh_tempo: localDateFormate(nextMonth(jatuh_tempo, i)),
					jumlah_hari: daysInMonth(jatuh_tempo, i),
					pokok: pokok,
					angsuran_pokok: angsuran_pokok,
					angsuran_bunga: 1000,
					jumlah_angsuran: pokok + 1000,
					baki_debet: pokok - angsuran_pokok,

					// PINK
					tanggal_pembayaran: "by input",
					pokok1: pokok,
					akumulasi_angsuran_pokok: angsuran_pokok * (i + 1),
					outstanding_pokok: "???",

					// BLUE
					bunga:bunga,
					akumulasi_bunga:bunga * (i + 1),
					pokok2:pokok,

					// ORANGE
					tanggal_bayar_denda:"by input",
					nominal_denda:"by input",
					outstanding_denda:"???",
				});

				pokok -= angsuran_pokok
			}

			return items
		}(),
	},
	reference: {
		reference_fields: [{
				key: 'nomor',
				label: 'No',
				sortable: false,
				// Variant applies to the whole column, including the header and footer
				variant: 'success dark-bordered'
			},
			{
				key: 'jatuh_tempo',
				label: 'Tanggal Jatuh Tempo Pembayaran',
				sortable: false,
				// Variant applies to the whole column, including the header and footer
				variant: 'success dark-bordered'
			},
			{
				key: 'jumlah_hari',
				label: 'Jumlah Hari',
				sortable: false,
				// Variant applies to the whole column, including the header and footer
				variant: 'success dark-bordered'
			},
			{
				key: 'pokok',
				label: 'Pokok (Rp.)',
				sortable: false,
				// Variant applies to the whole column, including the header and footer
				variant: 'success dark-bordered'
			},
			{
				key: 'angsuran_pokok',
				label: 'Angsuran Pokok (Rp.)',
				sortable: false,
				// Variant applies to the whole column, including the header and footer
				variant: 'success dark-bordered'
			},
			{
				key: 'angsuran_bunga',
				label: 'Angsuran Bunga (Rp.)',
				sortable: false,
				// Variant applies to the whole column, including the header and footer
				variant: 'success dark-bordered'
			},
			{
				key: 'jumlah_angsuran',
				label: 'Jumlah Angsuran (Rp.)',
				sortable: false,
				// Variant applies to the whole column, including the header and footer
				variant: 'success dark-bordered'
			},
			{
				key: 'baki_debet',
				label: 'Baki Debet (Rp.)',
				sortable: false,
				// Variant applies to the whole column, including the header and footer
				variant: 'success dark-bordered'
			},


			{
				key: 'tanggal_pembayaran',
				label: 'Tanggal Pembayaran',
				sortable: false,
				// Variant applies to the whole column, including the header and footer
				variant: 'danger dark-bordered'
			},
			{
				key: 'pokok1',
				label: 'Pokok (Rp.)',
				sortable: false,
				// Variant applies to the whole column, including the header and footer
				variant: 'danger dark-bordered'
			},
			{
				key: 'akumulasi_angsuran_pokok',
				label: 'Akumulasi Angsuran Pokok',
				sortable: false,
				// Variant applies to the whole column, including the header and footer
				variant: 'danger dark-bordered'
			},
			{
				key: 'outstanding_pokok',
				label: 'Outstanding Pokok',
				sortable: false,
				// Variant applies to the whole column, including the header and footer
				variant: 'danger dark-bordered'
			},


			{
				key: 'bunga',
				label: 'Bunga',
				sortable: false,
				// Variant applies to the whole column, including the header and footer
				variant: 'primary dark-bordered'
			},
			{
				key: 'akumulasi_bunga',
				label: 'Akumulasi Bunga',
				sortable: false,
				// Variant applies to the whole column, including the header and footer
				variant: 'primary dark-bordered'
			},
			{
				key: 'pokok2',
				label: 'Pokok',
				sortable: false,
				// Variant applies to the whole column, including the header and footer
				variant: 'primary dark-bordered'
			},


			{
				key: 'tanggal_bayar_denda',
				label: 'Tanggal Bayar Denda',
				sortable: false,
				// Variant applies to the whole column, including the header and footer
				variant: 'warning dark-bordered'
			},
			{
				key: 'nominal_denda',
				label: 'Nominal Pembayaran Denda',
				sortable: false,
				// Variant applies to the whole column, including the header and footer
				variant: 'warning dark-bordered'
			},
			{
				key: 'outstanding_denda',
				label: 'Outstanding Denda',
				sortable: false,
				// Variant applies to the whole column, including the header and footer
				variant: 'warning dark-bordered'
			},

		],
	}

}

export const database = {
	payload: {
		payload_items: function() {
			let items = []
			for (let i = 0; i < 5; i++) {
				const n = Math.round(Math.random() * 1000);
				const element = items.push({
					// isActive: true,
					nomor: i + 1,
					nomor_pinjaman: "nomor_pinjaman" + (i + 1),
					nama_pemilik: "nama_pemilik" + (i + 1),
					nama_usaha: "nama_usaha" + (i + 1),
					tagihan_ke: "tagihan_ke" + (i + 1),
					tunggakan: "tunggakan" + (i + 1),
					pokok: "pokok" + (i + 1),
					bunga: "bunga" + (i + 1),
					denda: "denda" + (i + 1),
					telepon: "telepon" + (i + 1),
					jatuh_tempo: "jatuh_tempo" + (i + 1),
					action: "action",
					kartu: "kartu",
				});
			}

			return items
		}(),
	},
	reference: {
		reference_fields_currentPage: 1,
		reference_fields_perPage: 2,
		// Note 'isActive' is left out and will not appear in the rendered table
		reference_fields: [{
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

			{
				key: 'action',
				label: 'Aksi',
				sortable: true,
			},

			{
				key: 'kartu',
				label: 'Kartu',
				sortable: true,
			},
		],


	}

}
