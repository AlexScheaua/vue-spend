<template>
  <b-container
    fluid
    class="login-container d-flex flex-column justify-content-center align-items-center"
  >
    <b-row class="mb-1">
      <b-col cols="12">
        <b-form-input v-model="credentials.name" :state='login' placeholder="Enter your name"></b-form-input>
        <b-form-input
          v-model="credentials.collection"
          type="password"
          :state='login'
          placeholder="Enter your code"
        ></b-form-input>
      </b-col>
    </b-row>
    <b-row class="mt-1">
      <button @click="validateUser" class="btn btn-primary">Login</button>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Login",
  computed: {
    ...mapState([
      'date'
      ])
  },
  data() {
    return {
      credentials: {
        name: "",
        collection: ""
      },
      login: ''
    };
  },
  created() {
    if (localStorage.vSpendUserName) {
      this.credentials.name = localStorage.vSpendUserName;
      this.credentials.collection = localStorage.vSpendCollection;
      this.validateUser();
    }
  },
  methods: {
    ...mapActions(['authUser', 'generateMonthData']),
    validateUser() {
      if (this.credentials.name !== "" && this.credentials.collection !== "") {
        this.authUser(this.credentials).then(res => {
          this.login = res;
          if (res) {
            this.generateMonthData(this.date);
            this.$router.push({ name: "app" });
            localStorage.setItem("vSpendUserName", this.credentials.name);
            localStorage.setItem("vSpendCollection",this.credentials.collection);
          } 
        });
      } else {
        this.login = false;
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
