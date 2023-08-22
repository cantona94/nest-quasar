<template>
  <q-page class="column items-center justify-center">
    <h6 class="text-h6 q-my-none text-weight-regular">Your information</h6>
    <q-form v-if="isAuth" class="q-gutter-md" style="width: 50vh">
      <q-input label="Name" class="input" v-model="userInformation.name" />
      <q-input label="Phone" class="input" v-model="userInformation.phone" />
      <q-input
        label="Address"
        class="input"
        v-model="userInformation.address"
      />
      <q-input
        label="Adout me"
        class="input"
        v-model="userInformation.adoutMe"
      />
      <div>
        <q-btn
          class="full-width"
          color="primary"
          label="change information"
          type="submit"
          rounded
        ></q-btn>
      </div>
    </q-form>
    <h1 v-else>Home</h1>
  </q-page>
</template>

<script lang="ts">
export default {
  name: 'HomePage',
  data() {
    return {
      isAuth: this.$store.state.example.isAuth,
      userInformation: {
        name: '',
        phone: '',
        address: '',
        adoutMe: '',
      },
    };
  },
  methods: {
    checkAuth() {
      this.isAuth = this.$store.state.example.isAuth;
    },
  },
  watch: {
    '$store.state.example.isAuth': {
      handler() {
        this.checkAuth();
      },
      immediate: true,
    },
  },
  mounted() {
    this.checkAuth();
  },
};
</script>
