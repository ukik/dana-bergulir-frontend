module.exports = [
	{
		path: '/monitoring-evaluasi',
		name: 'monitoring-evaluasi',
		component: () => import(/* webpackChunkName: "monitoring-evaluasi" */ '@/views/monitoring-evaluasi/view-monitoring-evaluasi.vue')
	},
	{
		path: '/monitoring-evaluasi-master',
		name: 'monitoring-evaluasi-master',
		component: () => import(/* webpackChunkName: "monitoring-evaluasi-master" */ '@/views/monitoring-evaluasi/view-monitoring-evaluasi-master.vue')
	},
	{
		path: '/monitoring-evaluasi-edit/:id',
		name: 'monitoring-evaluasi-edit',
		component: () => import(/* webpackChunkName: "monitoring-evaluasi-edit" */ '@/views/monitoring-evaluasi/view-monitoring-evaluasi-edit.vue')
	},

	{
		path: '/monitoring-evaluasi-remedial-master',
		name: 'monitoring-evaluasi-remedial-master',
		component: () => import(/* webpackChunkName: "monitoring-evaluasi-remedial-master" */ '@/views/monitoring-evaluasi/view-monitoring-evaluasi-remedial-master.vue')
	},
]
