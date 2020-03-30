export const database = {
	payload: {
		payload_items: function(){
			let items = []
			for (let i = 0; i < 5; i++) {
				const n = Math.round(Math.random()*1000);
				const element = items.push({
					// isActive: true,
					foto_surveyor:null,
					kode_surveyor:"kode_surveyor"+i,
					nama_surveyor:"nama_surveyor"+i,
					telepon_surveyor:"telepon_surveyor"+i,
					email_surveyor:"email_surveyor"+i,
					action: '<action>',
					//
					imagePreview:"https://picsum.photos/250/250/?image=58",
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
				key: 'kode_surveyor',
				label: 'Kode',
				sortable: true,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'nama_surveyor',
				label: 'Nama Surveyor',
				sortable: true,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'action',
				label: 'Pilih',
				sortable: false,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger',

			},
		],
	}

}
