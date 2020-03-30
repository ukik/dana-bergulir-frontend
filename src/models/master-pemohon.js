// untuk halaman Master
export const database = {
	payload: {
		payload_items: function(){
			let items = []
			for (let i = 0; i < 5; i++) {
				const n = Math.round(Math.random()*1000);
				const element = items.push({
					// isActive: true,
					nomor: i,
					nama_ukm: "nama_ukm"+i,
					nama_pemohon_ukm: "nama_pemohon_ukm"+i,
					kode_ukm: "kode_ukm"+i,
					alamat_ukm: "alamat_ukm"+i,
					fax_ukm: "fax_ukm"+i,
					telepon_ukm: "telepon_ukm"+i,
					provinsi_ukm: "provinsi_ukm"+i, // options_provinsi > item
					kabupaten_ukm: "kabupaten_ukm"+i, // options_kabupaten > item
					kecamatan_ukm: "kecamatan_ukm"+i, // options_kecamatan > item
					kelurahan_ukm: "kelurahan_ukm"+i,
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
				key: 'nama_pemohon_ukm',
				label: 'Nama Pemohon Kredit',
				sortable: true,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'nama_ukm',
				label: 'Nama UKM',
				sortable: true,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'kode_ukm',
				label: 'Kode',
				sortable: true,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'alamat_ukm',
				label: 'Alamat',
				sortable: true,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'telepon_ukm',
				label: 'Telepon',
				sortable: true,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'kabupaten_ukm',
				label: 'Kabupaten',
				sortable: true,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'kecamatan_ukm',
				label: 'Kecamatan',
				sortable: true,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'kelurahan_ukm',
				label: 'Kel. / Kampung',
				sortable: true,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
			{
				key: 'action',
				label: 'Action',
				sortable: false,
				// Variant applies to the whole column, including the header and footer
				// variant: 'danger'
			},
		],
	}
}

// untuk halaman Add/Edit
export const database_add_edit = {
	payload: {
		nama_ukm: null,
		nama_pemohon_ukm: null,
		kode_ukm: null,
		alamat_ukm: null,
		fax_ukm: null,
		telepon_ukm: null,
		provinsi_ukm: null, // options_provinsi > item
		kabupaten_ukm: null, // options_kabupaten > item
		kecamatan_ukm: null, // options_kecamatan > item
		kelurahan_ukm: null,
	},
	reference: {
		reference_options_provinsi: [
			{ item: null, name: ':: Pilih Provinsi ::', notEnabled: true },
			{ item: 'A', name: 'Option A' },
			{ item: 'B', name: 'Option B' },
		],
		reference_options_kabupaten: [
			{ item: null, name: ':: Pilih Kabupaten ::', notEnabled: true },
			{ item: 'A', name: 'Option A' },
			{ item: 'B', name: 'Option B' },
		],
		reference_options_kecamatan: [
			{ item: null, name: ':: Pilih Kecamatan ::', notEnabled: true },
			{ item: 'A', name: 'Option A' },
			{ item: 'B', name: 'Option B' },
		],
	}
}
