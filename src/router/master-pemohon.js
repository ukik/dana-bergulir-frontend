module.exports = [
	{
		path: '/master-pemohon-master',
		name: 'master-pemohon-master',
		component: () => import(/* webpackChunkName: "master-pemohon-master" */ '@/views/master-pemohon/view-master-pemohon-master.vue')
	},
	{
		path: '/master-pemohon-tambah',
		name: 'master-pemohon-tambah',
		component: () => import(/* webpackChunkName: "master-pemohon-tambah" */ '@/views/master-pemohon/view-master-pemohon-tambah.vue')
	},
	{
		path: '/master-pemohon-edit/:id',
		name: 'master-pemohon-edit',
		component: () => import(/* webpackChunkName: "master-pemohon-edit" */ '@/views/master-pemohon/view-master-pemohon-edit.vue')
	},
]
