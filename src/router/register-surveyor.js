module.exports = [
	{
		path: '/register-surveyor-master',
		name: 'register-surveyor-master',
		component: () => import(/* webpackChunkName: "register-surveyor-master" */ '@/views/register-surveyor/view-register-surveyor-master.vue')
	},
	{
		path: '/register-surveyor-tambah',
		name: 'register-surveyor-tambah',
		component: () => import(/* webpackChunkName: "register-surveyor-tambah" */ '@/views/register-surveyor/view-register-surveyor-tambah.vue')
	},
	{
		path: '/register-surveyor-edit/:id',
		name: 'register-surveyor-edit',
		component: () => import(/* webpackChunkName: "register-surveyor-edit" */ '@/views/register-surveyor/view-register-surveyor-edit.vue'),
	},
]
