module.exports = {
	methods: {
		stringToDate(tanggal) {
			const date_parts = tanggal.split('/')
			return new Date(+date_parts[2], date_parts[1] - 1, date_parts[0])
		},

		nextMonth(tanggal, next) {
			const date_parts = tanggal.split('/')
			// bulan dihitung dari 0 = Januari
			// untuk format "19/1/2018"
			const date = new Date(+date_parts[2], date_parts[1] - 1, date_parts[0])

			// console.log(date.getFullYear(), daysInMonth(date.getFullYear(), date_parts[1]-1));
			// console.log(+date_parts[2], date_parts[1]-1, date_parts[0]);
			// console.log(date.getDay(), date.getMonth(), new Date(date.setMonth(next, date_parts[0])));

			return new Date(date.setMonth(next, date_parts[0]))
		},

		daysInMonth(tanggal, next) {
			// string to date
			const date_parts = tanggal.split('/')
			const date = new Date(+date_parts[2], date_parts[1] - 1, date_parts[0])

			// next moth
			const new_month = new Date(date.setMonth(next, date_parts[0]))

			// days of months
			return new Date(date.getFullYear(), new_month.getMonth(), 0).getDate()
		},

		localDateFormate(tanggal) {
			const monthNames = ["January", "February", "March", "April", "May", "June",
				"July", "August", "September", "October", "November", "December"
			];
			// let dateObj = new Date();
			let month = monthNames[tanggal.getMonth()];
			let day = String(tanggal.getDate()).padStart(2, '0');
			let year = tanggal.getFullYear();
			return month + '\n' + day + ', ' + year;
		},
	}
}
