<template>
  <div class="column items-center fixed-center">
    <h6 class="text-h6 q-my-none text-weight-regular">Registration</h6>
    <q-form
      class="q-gutter-md"
      style="width: 50vh"
      @submit.prevent="registrationHandler"
    >
      <q-input label="Email" class="input" v-model="registration.email" />
      <q-input
        label="Password"
        type="password"
        class="input"
        v-model="registration.password"
      />
      <div>
        <q-btn
          class="full-width"
          color="primary"
          label="Registration"
          type="submit"
          rounded
        ></q-btn>
      </div>
    </q-form>
    <div class="text-center q-mt-md q-gutter-lg">
      <RouterLink class="text-white" to="/login">
        Already have an account?
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { useQuasar } from 'quasar';
let $q;
export default {
  name: 'RegistrationPage',
  data() {
    return {
      registration: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    registrationHandler() {
      if (!this.registration.email || !this.registration.password) {
        $q.notify({
          type: 'negative',
          message: 'All required fields are not filled out!',
        });
      } else if (this.registration.password.length < 6) {
        $q.notify({
          type: 'negative',
          message: 'Password must ne more then 6 symbols!',
        });
      } else {
        console.log('registration');
      }
    },
  },
  mounted() {
    $q = useQuasar();
  },
};
</script>

<style scoped></style>
