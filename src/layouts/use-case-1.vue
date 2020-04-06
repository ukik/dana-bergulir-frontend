<template lang="html">
<fragment>
	<b-nav-item :active="navigation['dashboard']" v-showMenu @click="gotoPage('/dashboard')">
			<font-awesome-icon icon="tachometer-alt" /> Dashboard
	</b-nav-item>

	<b-nav-item :active="navigation['master-pemohon-master']" v-showMenu @click="gotoPage('/master-pemohon-master')">
			<font-awesome-icon icon="tachometer-alt" /> Master Pemohon
	</b-nav-item>

	<b-nav-item :active="navigation['proposal-tahap-1']" v-showMenu @click="gotoPage('/proposal-tahap-1')">
			<font-awesome-icon icon="tachometer-alt" /> Register Proposal
	</b-nav-item>

	<b-nav-item :active="navigation['register-survey-master']" v-showMenu @click="gotoPage('/register-survey-master')">
			<font-awesome-icon icon="tachometer-alt" /> Register Survey
	</b-nav-item>

	<b-nav-item :active="navigation['register-surveyor-master']" v-showMenu @click="gotoPage('/register-surveyor-master')">
			<font-awesome-icon icon="tachometer-alt" /> Register Surveyor
	</b-nav-item>

	<b-nav-item :active="navigation['proposal-master']" v-showMenu @click="gotoPage('/proposal-master')">
			<font-awesome-icon icon="tachometer-alt" /> Proposal
	</b-nav-item>

	<b-nav-item :active="navigation['analisa-proposal--master']" v-showMenu @click="gotoPage('/analisa-proposal-master')">
			<font-awesome-icon icon="tachometer-alt" /> Analisa Proposal
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
        if(val.includes("dashboard")) {
          this.getNavigationActive(this.navigation, "dashboard")
        }
        if(val.includes("master-pemohon")) {
          this.getNavigationActive(this.navigation, "master-pemohon")
        }
        if(val.includes("proposal-tahap")) {
          this.getNavigationActive(this.navigation, "proposal-tahap")
        }
        if(val.includes("register-survey-master")) {
          this.getNavigationActive(this.navigation, "register-survey-master")
        }
        if(val.includes("register-surveyor-master")) {
          this.getNavigationActive(this.navigation, "register-surveyor-master")
        }
        if(val.includes("proposal-master")) {
          this.getNavigationActive(this.navigation, "proposal-master")
        }
        if(val.includes("analisa-proposal")) {
          this.getNavigationActive(this.navigation, "analisa-proposal")
        }
      }
    },
    mounted(){
			if(this.$route.name == "analisa-proposal-master") {
        this.getNavigationActive(this.navigation, "analisa-proposal")
      } else {
        this.getNavigationActive(this.navigation, this.$route.name)
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
              'dashboard': false,
              'master-pemohon-master': false,
              'proposal-tahap-1': false,
              "register-survey-master":false,
              "register-surveyor-master":false,
              "proposal-master":false,
              "analisa-proposal--master":false,
            }
        };
    },
});

</script>
