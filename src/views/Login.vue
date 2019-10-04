<template>
  <b-container
    fluid
    class="login-container d-flex flex-column justify-content-center align-items-center"
  >
    <b-alert v-model="alert.isAlert" variant="dark" class="offline-alert" fade dismissible>
      {{alert.errorMessage}}
    </b-alert>
    <div class="mb-5 d-flex">
      <span class="title-v">V</span><span class="title-spend">SPEND</span>
    </div>
    <b-row class="mb-1">
      <b-col cols="12">
        <b-form-input
          v-model="credentials.name"
          :state='login'
          placeholder="Enter your name"
        ></b-form-input>
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
      login: '',
      alert: {
        errorMessage: '',
        isAlert: false
      }
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
        .catch(err => {
          console.log(err);
          this.alert.errorMessage = 'No internet connection...';
          this.alert.isAlert = true;
        })
        .then(collection => {
          //if collection means that login was successfully, else username or password is wrong
          if(collection === 'wrong credentials'){
            this.alert.errorMessage = 'Username or Password wrong...';
            this.alert.isAlert = true;
          } else if (collection) {
            this.login = true;

            this.generateMonthData(this.date);
            this.$router.push({ name: "app" });
            localStorage.setItem("vSpendUserName", this.credentials.name);
            localStorage.setItem("vSpendCollection",this.credentials.collection);
          }
        })
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
  .offline-alert {
    position: absolute;
    top: 20px;
    margin: 0 auto;
    width: 90%;
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
