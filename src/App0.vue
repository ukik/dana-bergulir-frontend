<template>
<div>
  <b-container fluid="lg" class="bg-warning w-100">
    <b-row>
      <b-col id="side-navigation" sm="3" class="border p-0">
        <div>
          <b-nav vertical class pills>
            <b-nav-item :active="false">
              <b-icon-alert-triangle-fill></b-icon-alert-triangle-fill>Active
            </b-nav-item>
            <b-nav-item v-showMenu style="background: #58C0E7;">Link</b-nav-item>
            <b-nav-item :active="true">Another Link</b-nav-item>
            <b-nav-item disabled>
              <font-awesome-icon icon="user-secret" />Disabled
            </b-nav-item>

            <b-nav-item v-b-toggle.collapse-1>Disabled</b-nav-item>

            <b-collapse id="collapse-1">
              <b-nav vertical>
                <b-nav-item active>Active</b-nav-item>
                <b-nav-item>Link</b-nav-item>
                <b-nav-item>Another Link</b-nav-item>
                <b-nav-item disabled>Disabled</b-nav-item>
              </b-nav>
            </b-collapse>
          </b-nav>
        </div>
      </b-col>
      <b-col>
        <b-row cols="1">
          <b-col class="border">Column</b-col>
          <b-col class="border">
            <b-row>
              <b-col>
                <div>
                  <b-form-group label="Individual radios">
                    <b-form-radio v-model="selected" name="some-radios" value="A">Option A</b-form-radio>
                    <b-form-radio v-model="selected" name="some-radios" value="B">Option B</b-form-radio>
                  </b-form-group>

                  <div class="mt-3">
                    Selected:
                    <strong>{{ selected }}</strong>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</div>

</template>

<script lang="ts">
import Vue from 'vue';
Vue.directive('showMenu', {
    bind: function (el, binding, vnode) {
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

<style lang="scss">

</style>
