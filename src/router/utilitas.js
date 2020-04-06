module.exports = [
	{
		path: '/utilitas-master',
		name: 'utilitas-master',
		component: () => import(/* webpackChunkName: "utilitas-master" */ '@/views/utilitas/view-utilitas-master.vue')
	},
	{
		path: '/utilitas-tambah',
		name: 'utilitas-tambah',
		component: () => import(/* webpackChunkName: "utilitas-tambah" */ '@/views/utilitas/view-utilitas-tambah.vue')
	},
	{
		path: '/utilitas-edit/:id',
		name: 'utilitas-edit',
		component: () => import(/* webpackChunkName: "utilitas-edit" */ '@/views/utilitas/view-utilitas-edit.vue'),
	},
]
