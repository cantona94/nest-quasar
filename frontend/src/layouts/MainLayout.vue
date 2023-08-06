<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <RouterLink class="router_link" to="/"> Quasar App </RouterLink>
        </q-toolbar-title>
        <RouterLink class="router_link" to="/registration"
          >Log In / Sing In</RouterLink
        >
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',
});
</script>
