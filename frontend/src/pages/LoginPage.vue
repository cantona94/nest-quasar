<template>
  <div class="column items-center fixed-center">
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
      <RouterLink class="text-white" to="/registration">
        You don't have an account?
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { useQuasar } from 'quasar';
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
    loginHandler() {
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
        console.log('login');
      }
    },
  },
  mounted() {
    $q = useQuasar();
  },
};
</script>

<style scoped></style>
