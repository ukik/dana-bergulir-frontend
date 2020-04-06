<template lang="html">
<fragment>
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
	</b-nav-item>
</fragment>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>



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
    watch: {
      '$route.name':function(val) {

        // Penagihan
        if(val.includes("penagihan")) {
          this.getNavigationActive(this.navigation, "penagihan")
        }
        if(val.includes("penagihan-jatuh-tempo-master")) {
          this.getNavigationActive(this.navigation, "jatuh-tempo-master")
        }

        if(val.includes("penagihan-piutang-master")) {
          this.getNavigationActive(this.navigation, "piutang-master")
        }
        if(val.includes("penagihan-piutang-detail")) {
          this.getNavigationActive(this.navigation, "piutang-master")
        }

        if(val.includes("penagihan-pembayaran-angsuran")) {
          this.getNavigationActive(this.navigation, "pembayaran-angsuran")
        }
      }
    },
    mounted(){

      // Penagihan
      switch(this.$route.name) {
				case "penagihan":
          this.getNavigationActive(this.navigation, "penagihan")
          break;

        case "penagihan-jatuh-tempo-master":
          this.getNavigationActive(this.navigation, "jatuh-tempo-master")
          break;

        case "penagihan-piutang-detail":
          this.getNavigationActive(this.navigation, "piutang-master")
          break;
        case "penagihan-piutang-master":
          this.getNavigationActive(this.navigation, "piutang-master")
          break;

        case "penagihan-pembayaran-angsuran":
          this.getNavigationActive(this.navigation, "pembayaran-angsuran")
          break;

      }

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

              // Penagihan
              "penagihan":false,
              "jatuh-tempo-master":false,
              "pembayaran-angsuran":false,
              "piutang-master":false,

            }
        };
    },
});

</script>
