<template lang="html">
<fragment>
	<b-nav-item :active="navigation['monitoring-evaluasi']" v-showMenu @click="gotoPage('/monitoring-evaluasi')">
			<font-awesome-icon icon="tachometer-alt" /> Dashboard Monev  {{  navigation['monitoring-evaluasi'] }}
	</b-nav-item>
	<b-nav-item :active="navigation['evaluasi-master']" v-showMenu @click="gotoPage('/monitoring-evaluasi-master')">
			<font-awesome-icon icon="tachometer-alt" /> Monitoring & Evaluasi  {{  navigation['evaluasi-master'] }}
	</b-nav-item>
	<b-nav-item :active="navigation['evaluasi-remedial-master']" v-showMenu @click="gotoPage('/monitoring-evaluasi-remedial-master')">
			<font-awesome-icon icon="tachometer-alt" /> Remedial {{  navigation['evaluasi-remedial-master'] }}
	</b-nav-item>
	<b-nav-item v-showMenu @click="gotoNoPage('/monitoring-evaluasi-pembayaran')">
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


        // Monitoring evaluasi
        if(val.includes("monitoring-evaluasi")) {
          this.getNavigationActive(this.navigation, "monitoring-evaluasi")
        }
        if(val.includes("monitoring-evaluasi-master")) {
          this.getNavigationActive(this.navigation, "evaluasi-master")
        }
        if(val.includes("monitoring-evaluasi-remedial-master")) {
          this.getNavigationActive(this.navigation, "evaluasi-remedial-master")
        }
        if(val.includes("monitoring-evaluasi-pembayaran")) {
          this.getNavigationActive(this.navigation, "evaluasi-pembayaran")
        }

      }
    },
    mounted(){
      // Monitoring evaluasi
      switch(this.$route.name) {
				case "monitoring-evaluasi":
          this.getNavigationActive(this.navigation, "monitoring-evaluasi")
          break;
        case "monitoring-evaluasi-master":
          this.getNavigationActive(this.navigation, "evaluasi-master")
          break;
        case "monitoring-evaluasi-remedial-master":
          this.getNavigationActive(this.navigation, "evaluasi-remedial-master")
          break;
        case "monitoring-evaluasi-pembayaran":
          this.getNavigationActive(this.navigation, "evaluasi-pembayaran")
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

              // Monitoring evaluasi
              "monitoring-evaluasi":false,
              "evaluasi-master":false, // monitoring-evaluasi-master
              "evaluasi-remedial-master":false, // monitoring-remedial-master
              "evaluasi-pembayaran":false, // monitoring-evaluasi-pembayaran

            }
        };
    },
});

</script>
