module.exports = [
	{
		path: '/register-survey-master',
		name: 'register-survey-master',
		component: () => import(/* webpackChunkName: "register-survey-master" */ '@/views/register-survey/view-register-survey-master.vue')
	},
	{
		path: '/register-survey-tambah',
		name: 'register-survey-tambah',
		component: () => import(/* webpackChunkName: "register-survey-tambah" */ '@/views/register-survey/view-register-survey-tambah.vue')
	},
	{
		path: '/register-survey-edit/:id',
		name: 'register-survey-edit',
		component: () => import(/* webpackChunkName: "register-survey-edit" */ '@/views/register-survey/view-register-survey-edit.vue'),
	},
]
