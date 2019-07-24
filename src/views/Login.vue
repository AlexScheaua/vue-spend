<template>
  <b-container fluid class="login-container d-flex flex-column justify-content-center align-items-center">
    <b-row class="mb-1">
      <b-col cols="12">
        <b-form-input v-model="name" placeholder="Enter your name"></b-form-input>
      </b-col>
    </b-row>
    <b-row class="mt-1">
      <button @click="validateUser" class="btn btn-primary">Login</button>
    </b-row>
  </b-container>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'Login',
  data(){
    return {
      name: ''
    }
  },
  methods: {
    ...mapActions([
      'authUser'
    ]),
    validateUser(){
      if(this.name !== ''){
        this.$router.push({name: 'app'});
        this.authUser(this.name);
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  height: 100vh;
  background: #eee;
}
</style>
