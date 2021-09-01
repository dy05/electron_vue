<template>
  <div>
    <h1>
      Accueil - Version 5
    </h1>

    <hr>
    <p>
      Bienvenu dans cette nouvelle release
      <br>
      Va a l'<router-link to="/about">
        apropos
      </router-link>, mouphe.
    </p>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const count = ref(0);

    return {count};
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: tomato;
}
</style>
