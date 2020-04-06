module.exports = [
	{
		path: '/penagihan',
		name: 'penagihan',
		component: () => import(/* webpackChunkName: "penagihan" */ '@/views/penagihan/view-penagihan.vue')
	},
	{
		path: '/penagihan-jatuh-tempo-master',
		name: 'penagihan-jatuh-tempo-master',
		component: () => import(/* webpackChunkName: "penagihan-jatuh-tempo-master" */ '@/views/penagihan/view-penagihan-jatuh-tempo-master.vue')
	},
	{
		path: '/penagihan-pembayaran-angsuran/:id?',
		name: 'penagihan-pembayaran-angsuran',
		component: () => import(/* webpackChunkName: "penagihan-pembayaran-angsuran" */ '@/views/penagihan/view-penagihan-pembayaran-angsuran.vue')
	},
	{
		path: '/penagihan-piutang-detail/:id',
		name: 'penagihan-piutang-detail',
		component: () => import(/* webpackChunkName: "penagihan-piutang-detail" */ '@/views/penagihan/view-penagihan-piutang-detail.vue'),
	},
	{
		path: '/penagihan-piutang-master',
		name: 'penagihan-piutang-master',
		component: () => import(/* webpackChunkName: "penagihan-piutang-master" */ '@/views/penagihan/view-penagihan-piutang-master.vue'),
	},
]
