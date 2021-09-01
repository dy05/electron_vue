<template>
  <app-navigation />
  <router-view />
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import AppNavigation from '/@/components/AppNavigation.vue';
export default defineComponent({
  name: 'App',
  components: {
    AppNavigation,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #42b983;
  font-size: 30px;
  color: #fff;
  padding: 30px 40px;
  height: calc(100vh - 120px);
}
a {
  text-decoration: none;
}
</style>
