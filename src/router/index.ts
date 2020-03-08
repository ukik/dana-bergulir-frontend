import Vue from 'vue'
import VueRouter from 'vue-router'

// import LayoutMain from '@/layouts/layout-main.vue'
// import PageDashboard from '@/pages/total-proposal-bulan-ini.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LayoutMain',
    component: () =>
            import ('@/layouts/layout-main.vue'),
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: '/dashboard',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/view-dashboard.vue')
      },
      {
        path: '/penerima-pemohon-master',
        name: 'penerima-pemohon-master',
        component: () => import(/* webpackChunkName: "penerima-pemohon-master" */ '@/views/view-penerima-pemohon-master.vue')
      },
      {
        path: '/penerima-pemohon-tambah',
        name: 'penerima-pemohon-tambah',
        component: () => import(/* webpackChunkName: "penerima-pemohon-tambah" */ '@/views/view-penerima-pemohon-tambah.vue')
      },
      {
        path: '/penerima-pemohon-edit',
        name: 'penerima-pemohon-edit',
        component: () => import(/* webpackChunkName: "penerima-pemohon-edit" */ '@/views/view-penerima-pemohon-edit.vue')
      },
      {
        path: '/proposal-tahap-1',
        name: 'proposal-tahap-1',
        component: () => import(/* webpackChunkName: "proposal-tahap-1" */ '@/views/view-proposal-tahap-1.vue')
      },
      {
        path: '/proposal-tahap-2',
        name: 'proposal-tahap-2',
        component: () => import(/* webpackChunkName: "proposal-tahap-2" */ '@/views/view-proposal-tahap-2.vue')
      },
      {
        path: '/proposal-tahap-3',
        name: 'proposal-tahap-3',
        component: () => import(/* webpackChunkName: "proposal-tahap-3" */ '@/views/view-proposal-tahap-3.vue')
      },
      {
        path: '/proposal-tahap-4',
        name: 'proposal-tahap-4',
        component: () => import(/* webpackChunkName: "proposal-tahap-4" */ '@/views/view-proposal-tahap-4.vue')
      },
      {
        path: '/proposal-tahap-5',
        name: 'proposal-tahap-5',
        component: () => import(/* webpackChunkName: "proposal-tahap-5" */ '@/views/view-proposal-tahap-5.vue')
      },
      {
        path: '/proposal-tahap-6',
        name: 'proposal-tahap-6',
        component: () => import(/* webpackChunkName: "proposal-tahap-6" */ '@/views/view-proposal-tahap-6.vue')
      },
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }

  {
    path: '*',
    redirect: '/dashboard'
    // component: () => import ('../pages/public/redirect/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.replace("/dashboard")

export default router
