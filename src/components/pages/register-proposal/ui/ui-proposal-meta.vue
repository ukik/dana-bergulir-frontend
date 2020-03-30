<style scoped>
a {
	font-family: Montserrat_Light;
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 24px;

	padding-right: 75px;

	color: #555555;
}

</style>

<template>
	<a>{{ title }}</a>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ui-penerima-pemohon-meta',
	props: ['title']
});
</script>
