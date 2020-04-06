export const create = {
	nomor: null,
	username: null,
	password: null,
	nip:null,
	nama: null,
	privilage: null,
	export: null,
	import: null,
	action: null,
	//
	foto: null,
	imagePreview: "https://picsum.photos/250/250/?image=58",
}

export const database = {
	payload: {
		payload_items: function() {
			let items = []
			for (let i = 0; i < 5; i++) {
				const n = Math.round(Math.random() * 1000);
				const element = items.push({
					// isActive: true,
					nomor: i,
					username: "username"+i,
					password: "password"+i,
					nip: "nip"+i,
					nama: "nama"+i,
					privilage: "privilage"+i,
					export: "export"+i,
					import: "import"+i,
					action: '<action>',

					//
					foto: null,
					imagePreview: "https://picsum.photos/250/250/?image=58",
				});
			}

			return items
		}(),
	},
	reference: {
		reference_fields_currentPage: 1,
		reference_fields_perPage: 10,
		// Note 'isActive' is left out and will not appear in the rendered table
		reference_fields: [{
				key: 'nomor',
				label: 'No.',
				sortable: true,
			},
			{
				key: 'username',
				label: 'Username',
				sortable: true,
			},

			{
				key: 'password',
				label: 'Password',
				sortable: true,
			},
			{
				key: 'nip',
				label: 'NIP',
				sortable: true,
			},

			{
				key: 'password',
				label: 'Password',
				sortable: true,
			},
			{
				key: 'nama',
				label: 'Nama User',
				sortable: true,
			},

			{
				key: 'privilage',
				label: 'Hak Akses',
				sortable: true,
			},
			{
				key: 'export',
				label: 'Eksport Data',
				sortable: true,
			},
			{
				key: 'import',
				label: 'Import Data',
				sortable: true,
			},
			{
				key: 'action',
				label: 'Pilih',
				sortable: false,
			},
		],
	}

}
