<style lang="scss">

ul.nav.nav-pills {
  position: fixed;
  width: 300px;
}

</style>

<template>

<div>
    <vue-snotify></vue-snotify>

    <div class="main-wrapper fullheight">
        <div class="row m-0">
	          <div id="side-navigation" class="col-4 p-0 m-0">
	            <div class="fullheight">
	                <div>
	                    <b-nav style="padding-top: 90px;" vertical pills>
                        <b-tabs content-class="m-0 p-0" class="m-0 p-0">
                          <b-tab title="A" active>
                            <use-case-1 />
                          </b-tab>
                          <b-tab title="B">
                            <use-case-2 />
                          </b-tab>
                          <b-tab title="C">
                            <use-case-3 />
                          </b-tab>
                          <b-tab title="D">
                            <b-nav-item :active="navigation['utilitas']" v-showMenu @click="gotoPage('/utilitas-master')">
  	                            <font-awesome-icon icon="tachometer-alt" /> Utilitas
                            </b-nav-item>

                          </b-tab>
                        </b-tabs>

	                        <!-- <div id="logo">
	                            <a class="font-logo">Data</a> Bergulir
	                            <p class="font-info">by Tortech</p>
	                        </div> -->


                          <!-- <hr>

                          <b-nav-item :active="navigation['monitoring-evaluasi']" v-showMenu @click="gotoPage('/monitoring-evaluasi')">
	                            <font-awesome-icon icon="tachometer-alt" /> Dashboard Monev
                          </b-nav-item>
                          <b-nav-item :active="navigation['evaluasi-master']" v-showMenu @click="gotoPage('/monitoring-evaluasi-master')">
	                            <font-awesome-icon icon="tachometer-alt" /> Monitoring & Evaluasi
                          </b-nav-item>
                          <b-nav-item :active="navigation['evaluasi-remedial-master']" v-showMenu @click="gotoPage('/monitoring-evaluasi-remedial-master')">
	                            <font-awesome-icon icon="tachometer-alt" /> Remedial
                          </b-nav-item>
                          <b-nav-item v-showMenu @click="gotoNoPage('/monitoring-evaluasi-pembayaran')">
	                            <font-awesome-icon icon="tachometer-alt" /> Pembayaran
                          </b-nav-item> -->

                          <!-- <hr>


                          <b-nav-item :active="navigation['penagihan']" v-showMenu @click="gotoPage('/penagihan')">
	                            <font-awesome-icon icon="tachometer-alt" /> Dashboard
                          </b-nav-item>

                          <b-nav-item :active="navigation['jatuh-tempo-master']" v-showMenu @click="gotoPage('/penagihan-jatuh-tempo-master')">
	                            <font-awesome-icon icon="tachometer-alt" /> Penagihan
                          </b-nav-item>

                          <b-nav-item :active="navigation['piutang-master']" v-showMenu @click="gotoPage('/penagihan-piutang-master')">
                              <font-awesome-icon icon="tachometer-alt" /> Kartu Piutang
                          </b-nav-item>

                          <b-nav-item :active="navigation['pembayaran-angsuran']" v-showMenu @click="gotoPage('/penagihan-pembayaran-angsuran')">
	                            <font-awesome-icon icon="tachometer-alt" /> Pembayaran
                          </b-nav-item> -->

                          <!-- <hr>

                          <b-nav-item :active="navigation['utilitas']" v-showMenu @click="gotoPage('/utilitas-master')">
	                            <font-awesome-icon icon="tachometer-alt" /> Utilitas
                          </b-nav-item>

                          <hr> -->


	                    </b-nav>
	                </div>
	            </div>
	          </div>
            <div class="col p-0 m-0" style="max-width: 75%; left: 15px; !important; display: flex; justify-content: flex-end;">
                <div class="col-12">
                    <div class="row row-cols-1">
                        <div id="top-navigation" class=" col fixed-top">
                          <div>
                              <div class="row">
																<div id="top-navigation--logo" class="col">
																		<a class="top-navigation--font-logo">Data</a> Bergulir
																		<p class="top-navigation--font-info">by Tortech</p>
																</div>
                                <nav class="navbar col">

                                  <a class="navbar-brand top-navigation--subtitle">Navbar</a>

                                  <span class="navbar-text top-navigation--profile">
                                    Operator

                                    <b-img v-bind="{ blank: true, blankColor: '#777', width: 40, height: 40 }" class="ml-2 mr-2" rounded="circle" alt="Circle image"></b-img>

                                    <b-dropdown id="dropdown-right" right text="" variant="primary">
                                      <b-dropdown-item href="#">Action</b-dropdown-item>
                                      <b-dropdown-item href="#">Another action</b-dropdown-item>
                                      <b-dropdown-item href="#">Something else here</b-dropdown-item>
                                    </b-dropdown>
                                  </span>
                                </nav>

                              </div>
                          </div>
                        </div>

                        <div class="p-0 w-100">
													<div style="margin-top:75px;">
														<!-- <slot name="main-content"/> -->
                            <keep-alive>
                              <router-view />
                            </keep-alive>
													</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>

import Vue from 'vue';

Vue.directive('showMenu', {
    bind: function(el, binding, vnode) {
        el.addEventListener('click', () => {
            console.log('bind')
            setTimeout(() => {
                //this.$emit('toggleDrawer')
            }, 1000)
        })
    }
})

import UseCase1 from './use-case-1'
import UseCase2 from './use-case-2'
import UseCase3 from './use-case-3'

export default {
    name: 'layout-main',
    components: {
      UseCase1,
      UseCase2,
      UseCase3,
    },
    watch: {
      '$route.name':function(val) {
        // if(val.includes("dashboard")) {
        //   this.getNavigationActive(this.navigation, "dashboard")
        // }
        // if(val.includes("master-pemohon")) {
        //   this.getNavigationActive(this.navigation, "master-pemohon")
        // }
        // if(val.includes("proposal-tahap")) {
        //   this.getNavigationActive(this.navigation, "proposal-tahap")
        // }
        // if(val.includes("register-survey-master")) {
        //   this.getNavigationActive(this.navigation, "register-survey-master")
        // }
        // if(val.includes("register-surveyor-master")) {
        //   this.getNavigationActive(this.navigation, "register-surveyor-master")
        // }
        // if(val.includes("proposal-master")) {
        //   this.getNavigationActive(this.navigation, "proposal-master")
        // }
        // if(val.includes("analisa-proposal")) {
        //   this.getNavigationActive(this.navigation, "analisa-proposal")
        // }


        // Monitoring evaluasi
        // if(val.includes("monitoring-evaluasi")) {
        //   this.getNavigationActive(this.navigation, "monitoring-evaluasi")
        // }
        // if(val.includes("monitoring-evaluasi-master")) {
        //   this.getNavigationActive(this.navigation, "evaluasi-master")
        // }
        // if(val.includes("monitoring-evaluasi-remedial-master")) {
        //   this.getNavigationActive(this.navigation, "evaluasi-remedial-master")
        // }
        // if(val.includes("monitoring-evaluasi-pembayaran")) {
        //   this.getNavigationActive(this.navigation, "evaluasi-pembayaran")
        // }

        // Utilitas
        if(val.includes("utilitas")) {
          this.getNavigationActive(this.navigation, "utilitas")
        }

        // Penagihan
        // if(val.includes("penagihan")) {
        //   this.getNavigationActive(this.navigation, "penagihan")
        // }
        // if(val.includes("penagihan-jatuh-tempo-master")) {
        //   this.getNavigationActive(this.navigation, "jatuh-tempo-master")
        // }
        //
        // if(val.includes("penagihan-piutang-master")) {
        //   this.getNavigationActive(this.navigation, "piutang-master")
        // }
        // if(val.includes("penagihan-piutang-detail")) {
        //   this.getNavigationActive(this.navigation, "piutang-master")
        // }
        //
        // if(val.includes("penagihan-pembayaran-angsuran")) {
        //   this.getNavigationActive(this.navigation, "pembayaran-angsuran")
        // }
      }
    },
    mounted(){
      this.getNavigationActive(this.navigation, "utilitas")

      // if(this.$route.name == "analisa-proposal-master") {
      //   this.getNavigationActive(this.navigation, "analisa-proposal")
      // } else {
      //   this.getNavigationActive(this.navigation, this.$route.name)
      // }

      // Monitoring evaluasi
      // switch(this.$route.name) {
      //   case "monitoring-evaluasi-master":
      //     this.getNavigationActive(this.navigation, "evaluasi-master")
      //     break;
      //   case "monitoring-evaluasi-remedial-master":
      //     this.getNavigationActive(this.navigation, "evaluasi-remedial-master")
      //     break;
      //   case "monitoring-evaluasi-pembayaran":
      //     this.getNavigationActive(this.navigation, "evaluasi-pembayaran")
      //     break;
      // }

      // Penagihan
      // switch(this.$route.name) {
      //   case "penagihan-jatuh-tempo-master":
      //     this.getNavigationActive(this.navigation, "jatuh-tempo-master")
      //     break;
      //
      //   case "penagihan-piutang-detail":
      //     this.getNavigationActive(this.navigation, "piutang-master")
      //     break;
      //   case "penagihan-piutang-master":
      //     this.getNavigationActive(this.navigation, "piutang-master")
      //     break;
      //
      //   case "penagihan-pembayaran-angsuran":
      //     this.getNavigationActive(this.navigation, "pembayaran-angsuran")
      //     break;
      //
      // }

    },
    methods: {
      gotoNoPage(val) {
        alert("NO UI di FIGMA")
      },
      getNavigationActive(object, val){
        for (const key in object) {
          if (object.hasOwnProperty(key)) {
            if(key.includes(val)) {
              object[key] = true
            } else {
              object[key] = false
            }
            // console.log(key)
          }
        }
      }
    },
    data() {
        return {
            selected: "",
            navigation: {
              // 'dashboard': true,
              // 'master-pemohon-master': true,
              // 'proposal-tahap-1': true,
              // "register-survey-master":true,
              // "register-surveyor-master":true,
              // "proposal-master":true,
              // "analisa-proposal--master":true,

              // Monitoring evaluasi
              // "monitoring-evaluasi":true,
              // "evaluasi-master":true, // monitoring-evaluasi-master
              // "evaluasi-remedial-master":true, // monitoring-evaluasi-remedial-master
              // "evaluasi-pembayaran":true, // monitoring-evaluasi-pembayaran

              "utilitas":false,

              // Penagihan
              // "penagihan":true,
              // "jatuh-tempo-master":true,
              // "pembayaran-angsuran":true,
              // "piutang-master":true,

            }
        };
    },
}

</script>
