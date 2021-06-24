<template>
  <div>
    <h2>Login</h2>
    <form action="">
      <input v-model="email" type="text" name="email" placeholder="email" />
      <br />
      <input
        v-model="password"
        type="password"
        name="password"
        placeholder="password"
      />
      <br />
      <div v-html="error"></div>
      <button @click="login">Login</button>
    </form>
  </div>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password,
        });
        // console.log(response.data);
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<style>
</style>