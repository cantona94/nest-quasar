<template>
  <q-page class="row items-center justify-center">
    <h1>{{ prop }} </h1>
  </q-page>
</template>

<script lang="ts">

import { useStore } from 'src/store';
export default {
  name: 'HomePage',
  setup() {
    const $store = useStore();
    const prop = $store.state.example.prop

    return {
      prop,
    };
  },
};
</script>
