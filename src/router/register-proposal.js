module.exports = [

	{
		path: '/proposal-tahap-1/:id?',
		name: 'proposal-tahap-1',
		component: () => import(/* webpackChunkName: "proposal-tahap-1" */ '@/views/register-proposal/view-proposal-tahap-1.vue')
	},
	{
		path: '/proposal-tahap-2/:id?',
		name: 'proposal-tahap-2',
		component: () => import(/* webpackChunkName: "proposal-tahap-2" */ '@/views/register-proposal/view-proposal-tahap-2.vue')
	},
	{
		path: '/proposal-tahap-3/:id?',
		name: 'proposal-tahap-3',
		component: () => import(/* webpackChunkName: "proposal-tahap-3" */ '@/views/register-proposal/view-proposal-tahap-3.vue')
	},
	{
		path: '/proposal-tahap-4/:id?',
		name: 'proposal-tahap-4',
		component: () => import(/* webpackChunkName: "proposal-tahap-4" */ '@/views/register-proposal/view-proposal-tahap-4.vue')
	},
	{
		path: '/proposal-tahap-5/:id?',
		name: 'proposal-tahap-5',
		component: () => import(/* webpackChunkName: "proposal-tahap-5" */ '@/views/register-proposal/view-proposal-tahap-5.vue')
	},
	{
		path: '/proposal-tahap-6/:id?',
		name: 'proposal-tahap-6',
		component: () => import(/* webpackChunkName: "proposal-tahap-6" */ '@/views/register-proposal/view-proposal-tahap-6.vue')
	},
	{
		path: '/proposal-tahap-7/:id?',
		name: 'proposal-tahap-7',
		component: () => import(/* webpackChunkName: "proposal-tahap-7" */ '@/views/register-proposal/view-proposal-tahap-7.vue')
	},
]
