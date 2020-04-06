function stringToDate(tanggal) {
	const date_parts = tanggal.split('/')
	return new Date(+date_parts[2], date_parts[1]-1, date_parts[0])
}

function nextMonth(tanggal, next) {
	const date_parts = tanggal.split('/')
	// bulan dihitung dari 0 = Januari
	// untuk format "19/1/2018"
	const date = new Date(+date_parts[2], date_parts[1]-1, date_parts[0])

	// console.log(date.getFullYear(), daysInMonth(date.getFullYear(), date_parts[1]-1));
	// console.log(+date_parts[2], date_parts[1]-1, date_parts[0]);
	// console.log(date.getDay(), date.getMonth(), new Date(date.setMonth(next, date_parts[0])));

	return new Date(date.setMonth(next, date_parts[0]))
}

function daysInMonth(tanggal, next) {
	// string to date
	const date_parts = tanggal.split('/')
	const date = new Date(+date_parts[2], date_parts[1]-1, date_parts[0])

	// next moth
	const new_month = new Date(date.setMonth(next, date_parts[0]))

	// days of months
	return new Date(date.getFullYear(), new_month.getMonth(), 0).getDate()
}

function localDateFormate(tanggal) {
	const monthNames = ["January", "February", "March", "April", "May", "June",
		 "July", "August", "September", "October", "November", "December"];
	// let dateObj = new Date();
	let month = monthNames[tanggal.getMonth()];
	let day = String(tanggal.getDate()).padStart(2, '0');
	let year = tanggal.getFullYear();
	return month  + '\n'+ day  + ', ' + year;
}

export const database = {
	payload: {
		payload_items: function(){
			let items = []

			const jumlah_hari = 16 // dynamic
			const jatuh_tempo = "19/12/2018" // dynamic
			let pokok = 60000000 // dynamic
			const angsuran_pokok = 1666667 // dynamic

			items.push({
				nomor: null,
				jatuh_tempo: localDateFormate(stringToDate(jatuh_tempo)),
				jumlah_hari: null,
				pokok: pokok,
				angsuran_pokok: null,
				angsuran_bunga: null,
				jumlah_angsuran: null,
				baki_debet: pokok,
			});

			for (let i = 0; i < jumlah_hari; i++) {

				items.push({
					nomor: i+1,
					jatuh_tempo: localDateFormate(nextMonth(jatuh_tempo, i)),
					jumlah_hari: daysInMonth(jatuh_tempo, i),
					pokok: pokok,
					angsuran_pokok: angsuran_pokok,
					angsuran_bunga: 1000,
					jumlah_angsuran: pokok + 1000,
					baki_debet: pokok - angsuran_pokok,
				});

				pokok -= angsuran_pokok
			}

			return items
		}(),
	},
	reference: {
		reference_fields: [
			{
				key: 'nomor',
				label: 'No',
				sortable: false,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'jatuh_tempo',
				label: 'Tanggal Jatuh Tempo Pembayaran',
				sortable: false,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'jumlah_hari',
				label: 'Jumlah Hari',
				sortable: false,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'pokok',
				label: 'Pokok (Rp.)',
				sortable: false,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'angsuran_pokok',
				label: 'Angsuran Pokok (Rp.)',
				sortable: false,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'angsuran_bunga',
				label: 'Angsuran Bunga (Rp.)',
				sortable: false,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'jumlah_angsuran',
				label: 'Jumlah Angsuran (Rp.)',
				sortable: false,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'baki_debet',
				label: 'Baki Debet (Rp.)',
				sortable: false,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
		],
	}

}
