<template>
  <h1>
    Why {{ count }}
  </h1>

  <button @click="count++">
    Wetting man go do do do do do do do
  </button>

  <p>
    I cant understand why you're looking for.
  </p>
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
  color: #42b983;
}
</style>
