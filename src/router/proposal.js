module.exports = [
	{
		path: '/proposal-master',
		name: 'proposal-master',
		component: () => import(/* webpackChunkName: "proposal-master" */ '@/views/proposal/view-proposal-master.vue')
	},
	{
		path: '/proposal-detail/:id',
		name: 'proposal-detail',
		component: () => import(/* webpackChunkName: "proposal-detail" */ '@/views/proposal/view-proposal-detail.vue')
	},
	// {
	// 	path: '/proposal-edit/:id',
	// 	name: 'proposal-edit',
	// 	component: () => import(/* webpackChunkName: "proposal-edit" */ '@/views/proposal/view-proposal-edit.vue'),
	// },
]
