module.exports = [
	{
		path: '/analisa-proposal-master',
		name: 'analisa-proposal-master',
		component: () => import(/* webpackChunkName: "analisa-proposal-master" */ '@/views/analisa-proposal/view-analisa-proposal-master.vue')
	},
	{
		path: '/analisa-proposal-tahap-1/:id',
		name: 'analisa-proposal-tahap-1',
		component: () => import(/* webpackChunkName: "analisa-proposal-tahap-1" */ '@/views/analisa-proposal/view-analisa-proposal-tahap-1.vue')
	},
	// {
	// 	path: '/analisa-proposal-tahap-2/:id',
	// 	name: 'analisa-proposal-tahap-2',
	// 	component: () => import(/* webpackChunkName: "analisa-proposal-tahap-2" */ '@/views/analisa-proposal/view-analisa-proposal-tahap-2.vue')
	// },
	// {
	// 	path: '/analisa-proposal-tahap-3/:id',
	// 	name: 'analisa-proposal-tahap-3',
	// 	component: () => import(/* webpackChunkName: "analisa-proposal-tahap-3" */ '@/views/analisa-proposal/view-analisa-proposal-tahap-3.vue')
	// },
	// {
	// 	path: '/analisa-proposal-tahap-4/:id',
	// 	name: 'analisa-proposal-tahap-4',
	// 	component: () => import(/* webpackChunkName: "analisa-proposal-tahap-4" */ '@/views/analisa-proposal/view-analisa-proposal-tahap-4.vue')
	// },
	// {
	// 	path: '/analisa-proposal-tahap-5/:id',
	// 	name: 'analisa-proposal-tahap-5',
	// 	component: () => import(/* webpackChunkName: "analisa-proposal-tahap-5" */ '@/views/analisa-proposal/view-analisa-proposal-tahap-5.vue')
	// },
	// {
	// 	path: '/analisa-proposal-tahap-6/:id',
	// 	name: 'analisa-proposal-tahap-6',
	// 	component: () => import(/* webpackChunkName: "analisa-proposal-tahap-6" */ '@/views/analisa-proposal/view-analisa-proposal-tahap-6.vue')
	// },
]
