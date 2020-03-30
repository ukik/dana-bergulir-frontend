// untuk halaman Master
export const database = {
	payload: {
		payload_items: function(){
			let items = []
			for (let i = 0; i < 3; i++) {
				const n = Math.round(Math.random()*1000);
				const element = items.push({
					// isActive: true,
					nomor: (i+0),
					//
					tanggal_survey:'tanggal_survey '+(i+0),
					nomor_survey:'nomor_survey '+(i+0),
					nama_surveyor_survey:'nama_surveyor_survey '+(i+0),
					proposal_survey:'proposal_survey '+(i+0),
					spt_survey:'spt_survey '+(i+0),
					//
					nama_pemilik_survey: 'nama_pemilik_survey '+(i+0),
					nama_ukm_survey: 'nama_ukm_survey '+(i+0),
					nomor_proposal_survey: 'nomor_proposal_survey '+(i+0),
					// nomor_spt: 'nomor_spt '+(i+0),
					alamat_ukm_survey: 'alamat_ukm_survey '+(i+0),
					action: '<action>',
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
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'tanggal_survey',
				label: 'Tanggal Survey',
				sortable: true,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'nomor_survey',
				label: 'Nomor Survey',
				sortable: true,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'nama_surveyor_survey',
				label: 'Nama Surveyor',
				sortable: true,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'nama_pemilik_survey',
				label: 'Nama Pemilik',
				sortable: true,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'nama_ukm_survey',
				label: 'Nama Pemilik',
				sortable: true,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'nomor_proposal_survey',
				label: 'Nomor Proposal',
				sortable: true,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'spt_survey',
				label: 'Nomor SPT',
				sortable: true,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'alamat_ukm_survey',
				label: 'Alamat UKM',
				sortable: true,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'action',
				label: 'Action',
				sortable: false,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger',

			},
		],
	}
}
