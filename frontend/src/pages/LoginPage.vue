<template>
  <q-page class="column items-center justify-center">
    <h6 class="text-h6 q-my-none text-weight-regular">Login</h6>
    <q-form
      class="q-gutter-md"
      style="width: 50vh"
      @submit.prevent="loginHandler"
    >
      <q-input label="Email" class="input" v-model="login.email" />
      <q-input
        label="Password"
        type="password"
        class="input"
        v-model="login.password"
      />
      <div>
        <q-btn
          class="full-width"
          color="primary"
          label="Login"
          type="submit"
          rounded
        ></q-btn>
      </div>
    </q-form>
    <div class="text-center q-mt-md q-gutter-lg">
      <RouterLink class="router_link" style="color: black" to="/registration">
        You don't have an account?
      </RouterLink>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar';
import { instance } from '../boot/axios';
import { setTokenToLocalStorage } from '../helpers/localStorage.helper';
let $q;
export default {
  name: 'LoginPage',
  data() {
    return {
      login: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    async loginHandler() {
      if (!this.login.email || !this.login.password) {
        $q.notify({
          type: 'negative',
          message: 'All required fields are not filled out!',
        });
      } else if (this.login.password.length < 6) {
        $q.notify({
          type: 'negative',
          message: 'Password must ne more then 6 symbols!',
        });
      } else {
        const userData = {
          email: this.login.email,
          password: this.login.password,
        };
        const { data } = await instance.post('auth/login', userData);
        if (data) {
          setTokenToLocalStorage('token', data.token);
          this.$store.commit('example/login', data);
          $q.notify({
            type: 'positive',
            message: 'You are logged in',
          });
        }
      }
    },
  },
  mounted() {
    $q = useQuasar();
  },
};
</script>

<style scoped></style>
