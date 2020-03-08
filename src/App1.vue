<style lang="scss">



</style>

<template>

<div>
    <div class="main-wrapper fullheight">
        <div class="row bg-warning m-0 fullheight">
          <div>
            <div id="side-navigation" class="col fullheight">
                <div>
                    <b-nav vertical pills>
                        <div id="logo">
                            <a class="font-logo">Data</a> Bergulir
                            <p class="font-info">by Tortech</p>
                        </div>

                        <!-- <b-nav-item :active="false">
                        <b-icon-alert-triangle-fill></b-icon-alert-triangle-fill>Active
                        </b-nav-item> -->

                        <b-nav-item v-showMenu>
                            <font-awesome-icon icon="tachometer-alt" /> Dashboard</b-nav-item>
                        <b-nav-item :active="false" v-b-toggle.collapse-1>
                            <font-awesome-icon icon="user" /> Penerima Dana Bergulir</b-nav-item>
                        <b-collapse id="collapse-1">
                            <b-nav vertical>
                                <b-nav-item active>
                                    <font-awesome-icon icon="user-friends" /> Master Pemohon</b-nav-item>
                                <b-nav-item>Register Proposal</b-nav-item>
                                <b-nav-item>Register Survey</b-nav-item>
                                <b-nav-item>Proposal</b-nav-item>
                                <b-nav-item>Tagihan</b-nav-item>
                                <b-nav-item>Pembayaran Multi</b-nav-item>
                                <b-nav-item>Pembayaran</b-nav-item>
                            </b-nav>
                        </b-collapse>
                        <b-nav-item>Surat Tanda Setoran</b-nav-item>
                        <b-nav-item>Laporan</b-nav-item>
                        <b-nav-item>Utilitas</b-nav-item>
                        <!-- <b-nav-item disabled>
              <font-awesome-icon icon="user-secret" />Disabled
            </b-nav-item> -->
                    </b-nav>
                </div>
              </div>
            </div>
            <div class="col fullheight">
                <div>
                    <div class="row row-cols-1">
                        <div id="top-navigation" class="border col">
                          <div>
                              <div class="row">
                                <nav class="navbar navbar-light w-100">
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
                        <div class="border col">


                        </div>
                    </div>
                </div>
            </div>



        </div>
    </div>
</div>

</template>

<script lang="ts">

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

export default Vue.extend({
    name: 'App',
    data() {
        return {
            selected: ""
        };
    },
});

</script>
