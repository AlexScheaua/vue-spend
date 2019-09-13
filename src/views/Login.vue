<template>
  <b-container
    fluid
    class="login-container d-flex flex-column justify-content-center align-items-center"
  >
    <div class="mb-5 d-flex">
      <span class="title-v">V</span><span class="title-spend">SPEND</span>
    </div>
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
      <button @click="validateUser" class="btn btn-outline-dark">Login</button>
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
        this.authUser(this.credentials)
        .then(collection => {
          if (collection) {
            this.login = true;

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

  .title-v, .title-spend {
    font-size: 1.5rem;
    letter-spacing: 15px;
    background: transparent;
  }

  .title-v {
    font-weight: 600;
    padding-left: 15px;
    padding-top: 2px;
    color: var(--light);
    background: var(--dark);
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
  }

 .title-spend {
   padding-left: 15px ;
   border: 2px solid var(--dark);
   border-bottom-right-radius: 5px;
   border-top-right-radius: 5px;
 }

</style>
