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
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 30px 40px;
  height: calc(100vh - 80px);
}
</style>
