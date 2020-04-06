export const create = {
	nomor:null,
	nomor_pencairan:null,
	nomor_pak:null,
	jenis_usaha:null,
	alamat:null,
	kecamatan:null,
	jangka_waktu_awal:null,
	jangka_jatuh_tempo:null,
	jangka_bulan:null,
	plafon_kredit:null,
	total_bunga:null,
	rincian_angsuran_pokok:null,
	rincian_angsuran_bunga:null,
	angsuran_terbayar_bulan:null,
	angsuran_terbayar_pokok:null,
	angsuran_terbayar_bunga:null,
	setoran_bulan_pokok:null,
	setoran_bulan_bunga:null,
	sisa_angsuran_bulan:null,
	sisa_angsuran_pokok:null,
	sisa_angsuran_bunga:null,
	denda_hari:null,
	denda_terbayar:null,
	// denda_hari:"nomor_proposal "+(i+0),
	denda_bulan_ini:null,
	//
	action:"<action>",
}

export const database = {
	payload: {
		payload_items: function(){
			let items = []
			for (let i = 0; i < 5; i++) {
				const n = Math.round(Math.random()*1000);
				const element = items.push({
					nomor:"nomor "+(i+0),
					nomor_pencairan:"nomor_pencairan "+(i+0),
					nomor_pak:"nomor_pak "+(i+0),
					jenis_usaha:"jenis_usaha "+(i+0),
					alamat:"alamat "+(i+0),
					kecamatan:"kecamatan "+(i+0),
					jangka_waktu_awal:"jangka_waktu_awal "+(i+0),
					jangka_jatuh_tempo:"jangka_jatuh_tempo "+(i+0),
					jangka_bulan:"jangka_bulan "+(i+0),
					plafon_kredit:"plafon_kredit "+(i+0),
					total_bunga:"total_bunga "+(i+0),
					rincian_angsuran_pokok:"rincian_angsuran_pokok "+(i+0),
					rincian_angsuran_bunga:"rincian_angsuran_bunga "+(i+0),
					angsuran_terbayar_bulan:"angsuran_terbayar_bulan "+(i+0),
					angsuran_terbayar_pokok:"angsuran_terbayar_pokok "+(i+0),
					angsuran_terbayar_bunga:"angsuran_terbayar_bunga "+(i+0),
					setoran_bulan_pokok:"setoran_bulan_pokok "+(i+0),
					setoran_bulan_bunga:"setoran_bulan_bunga "+(i+0),
					sisa_angsuran_bulan:"sisa_angsuran_bulan "+(i+0),
					sisa_angsuran_pokok:"sisa_angsuran_pokok "+(i+0),
					sisa_angsuran_bunga:"sisa_angsuran_bunga "+(i+0),
					denda_hari:"denda_hari "+(i+0),
					denda_terbayar:"denda_terbayar "+(i+0),
					// denda_hari:"nomor_proposal "+(i+0),
					denda_bulan_ini:"denda_bulan_ini"+(i+0),
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

		// reference_fields: [
		// 	{
		// 		key: 'nomor',
		// 		label: 'No.',
		// 		sortable: true,
		// 	},
		// 	{
		// 		key: 'nomor_pencairan',
		// 		label: 'No. Pencairan',
		// 		sortable: true,
		// 	},
		// 	{
		// 		key: 'nomor_pak',
		// 		label: 'No. PAK',
		// 		sortable: true,
		// 	},
		// 	{
		// 		key: 'jenis_usaha',
		// 		label: 'Jenis Usaha / Perorangan',
		// 		sortable: true,
		// 	},
		// 	{
		// 		key: 'alamat',
		// 		label: 'Alamat',
		// 		sortable: true,
		// 	},
		// 	{
		// 		key: 'kecamatan',
		// 		label: 'Kecamatan',
		// 		sortable: true,
		// 	},
		// 	{
		// 		key: 'jangka_waktu_awal',
		// 		label: 'Awal',
		// 		sortable: true,
		// 	},
		// 	{
		// 		key: 'jangka_jatuh_tempo',
		// 		label: 'Jatuh Tempo',
		// 		sortable: true,
		// 	},
		// 	{
		// 		key: 'jangka_bulan',
		// 		label: 'Bln',
		// 		sortable: false,
		// 	},
		//
		//
		// 	{
		// 		key: 'plafon_kredit',
		// 		label: 'Plafon Kredit',
		// 		sortable: false,
		// 	},
		// 	{
		// 		key: 'total_bunga',
		// 		label: 'Total Bunga Pinj.',
		// 		sortable: false,
		// 	},
		// 	{
		// 		key: 'rincian_angsuran_pokok',
		// 		label: 'Pokok',
		// 		sortable: false,
		// 	},
		// 	{
		// 		key: 'rincian_angsuran_bunga',
		// 		label: 'Bunga',
		// 		sortable: false,
		// 	},
		// 	{
		// 		key: 'angsuran_terbayar_bulan',
		// 		label: 'Bln',
		// 		sortable: false,
		// 	},
		// 	{
		// 		key: 'angsuran_terbayar_pokok',
		// 		label: 'Pokok',
		// 		sortable: false,
		// 	},
		// 	{
		// 		key: 'angsuran_terbayar_bunga',
		// 		label: 'Bunga',
		// 		sortable: false,
		// 	},
		//
		// 	{
		// 		key: 'setoran_bulan_pokok',
		// 		label: 'Pokok',
		// 		sortable: false,
		// 	},
		// 	{
		// 		key: 'setoran_bulan_bunga',
		// 		label: 'Bunga',
		// 		sortable: false,
		// 	},
		//
		//
		// 	{
		// 		key: 'sisa_angsuran_bulan',
		// 		label: 'Bln',
		// 		sortable: false,
		// 	},
		// 	{
		// 		key: 'sisa_angsuran_pokok',
		// 		label: 'Pokok',
		// 		sortable: false,
		// 	},
		// 	{
		// 		key: 'sisa_angsuran_bunga',
		// 		label: 'Bunga',
		// 		sortable: false,
		// 	},
		//
		// 	{
		// 		key: 'denda_hari',
		// 		label: 'Hari',
		// 		sortable: false,
		// 	},
		// 	{
		// 		key: 'denda_terbayar',
		// 		label: 'Denda Terbayar',
		// 		sortable: false,
		// 	},
		// 	{
		// 		key: 'denda_bulan_ini',
		// 		label: 'Denda Bulan Ini',
		// 		sortable: false,
		// 	},
		// ],

	}

}
