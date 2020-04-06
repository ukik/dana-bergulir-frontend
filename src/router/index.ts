import Vue from 'vue'
import VueRouter from 'vue-router'

// import LayoutMain from '@/layouts/layout-main.vue'
// import PageDashboard from '@/pages/total-proposal-bulan-ini.vue';

Vue.use(VueRouter)

const MasterPemohon = require('./master-pemohon')
const RegisterProposal = require('./register-proposal')
const RegisterSurvey = require('./register-survey')
const RegisterSurveyor = require('./register-surveyor')
const Proposal = require('./proposal')
const AnalisaProposal = require('./analisa-proposal')
const MonitoringEvaluasi = require('./monitoring-evaluasi')
const Utilitas = require('./utilitas')
const Penagihan = require('./penagihan')

const routes = [
  {
    path: '/',
    //name: 'LayoutMain',
    component: () =>
            import ('@/layouts/layout-main.vue'),
    children: [
      ...MasterPemohon,
      ...RegisterProposal,
      ...RegisterSurvey,
      ...RegisterSurveyor,
      ...Proposal,
      ...AnalisaProposal,
      ...MonitoringEvaluasi,
      ...Utilitas,
      ...Penagihan,
      {
        path: "/",
        redirect: "/dashboard"
      },
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: '/dashboard',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/view-dashboard.vue')
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
  //mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//router.push("/dashboard")

export default router
