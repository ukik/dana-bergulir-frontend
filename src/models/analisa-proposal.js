export const database = {
	payload: {
		payload_items: function(){
			let items = []
			for (let i = 0; i < 5; i++) {
				const n = Math.round(Math.random()*1000);
				const element = items.push({
					nomor_proposal:"nomor_proposal "+(i+0),
					nama_pemilik_proposal:"nama_pemilik_proposal "+(i+0),
					nama_usaha_proposal:"nama_usaha_proposal "+(i+0),
					tanggal_proposal:"(created_at saat register proposal) "+(i+0),
					alamat_ukm_proposal:"alamat_ukm_proposal "+(i+0),
					akad_proposal:"akad_proposal "+(i+0),
					plafond_proposal:"plafond_proposal "+(i+0),
					status_proposal:"status_proposal "+(i+0),
					//
					nama_ukm_proposal:"nama_ukm_proposal"+(i+0),
					telepon_ukm_proposal:"telepon_ukm_proposal"+(i+0),
					tanggal_berdiri_ukm_proposal:"tanggal_berdiri_ukm_proposal"+(i+0),
					//
					action:"<action>",
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
				key: 'nomor_proposal',
				label: 'No. Proposal',
				sortable: true,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'nama_pemilik_proposal',
				label: 'Nama Pemilik',
				sortable: true,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'nama_usaha_proposal',
				label: 'Nama Usaha',
				sortable: true,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'tanggal_proposal',
				label: 'Tanggal Proposal',
				sortable: true,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'alamat_ukm_proposal',
				label: 'Alamat',
				sortable: true,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'akad_proposal',
				label: 'Akad Ke',
				sortable: true,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'plafond_proposal',
				label: 'Plafon Pinjaman',
				sortable: true,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'status_proposal',
				label: 'Status',
				sortable: true,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'action',
				label: 'Aksi',
				sortable: false,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger',

			},
		],
	}

}
