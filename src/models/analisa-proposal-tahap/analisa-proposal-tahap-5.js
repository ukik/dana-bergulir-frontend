export const database = {
	payload: {
		payload_items_rekap_agunan: function(){
			let items = []
			for (let i = 0; i < 5; i++) {
				const n = Math.round(Math.random()*1000);
				const element = items.push({
					nomor_agunan_rekap_agunan:"nomor_agunan "+(i+0),
					nama_agunan_rekap_agunan:"nama_agunan "+(i+0),
					jenis_agunan_rekap_agunan:"jenis_agunan "+(i+0),
					nilai_likuiditas_rekap_agunan:"nilai_likuiditas "+(i+0),
					total_rekap_agunan:"total "+(i+0),
					hasil_rekap_agunan:"hasil "+(i+0),
				});
			}

			return items
		}(),
	},
	reference: {
		// Note 'isActive' is left out and will not appear in the rendered table
		reference_fields_rekap_agunan: [
			{
				key: 'nomor_agunan_rekap_agunan',
				label: 'No.',
				sortable: true,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'nama_agunan_rekap_agunan',
				label: 'Nama Agunan',
				sortable: true,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'jenis_agunan_rekap_agunan',
				label: 'Nama Usaha',
				sortable: true,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'nilai_likuiditas_rekap_agunan',
				label: 'Nilai Likuidasi',
				sortable: true,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'total_rekap_agunan',
				label: 'Total',
				sortable: true,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'hasil_rekap_agunan',
				label: 'Hasil',
				sortable: true,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
		],
	}

}
