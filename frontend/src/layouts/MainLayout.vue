<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <RouterLink class="router_link" to="/"> Quasar App </RouterLink>
        </q-toolbar-title>
        <RouterLink
          v-if="isAuth"
          class="router_link"
          v-on:click="logoutHandler"
          to="/login"
          >Log Out</RouterLink
        >
        <RouterLink v-else class="router_link" to="/registration"
          >Log In / Sing In {{ isAuth }}</RouterLink
        >
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { instance } from 'src/boot/axios';
import {
  getTokenFromLocalStorage,
  removeTokenfromLocalStorage,
} from 'src/helpers/localStorage.helper';
import { IUser } from 'src/types/types';
let $q: any;

export default {
  name: 'MainLayout',
  data() {
    const isAuth = this.$store.state.example.isAuth;
    return {
      isAuth: isAuth,
    };
  },
  methods: {
    async checkAuth() {
      const token = getTokenFromLocalStorage();
      if (token) {
        const { data } = await instance.get<IUser>('auth/profile');
        if (data) {
          this.$store.commit('example/login', data);
        } else {
          this.$store.commit('example/logout');
        }
        this.isAuth = this.$store.state.example.isAuth;
      }
    },
    logoutHandler() {
      removeTokenfromLocalStorage('token');
      this.$store.commit('example/logout');
      $q.notify({
        type: 'positive',
        message: 'You logged out.',
      });
    },
  },
  watch: {
    '$store.state.example': {
      handler() {
        this.checkAuth();
      },
      immediate: true,
    },
  },
  mounted() {
    this.checkAuth();
    $q = useQuasar();
  },
};
</script>
