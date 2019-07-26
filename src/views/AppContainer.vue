<template>
  <div>
    <div class="d-flex justify-content-around">
      <p class="text-primary">Vspend</p>
      <p class="text-primary">{{getUserName}}</p>
    </div>
    <AppHeader @changeComponent="changeComponent" />
    <div :is="currentComponent" class="content"></div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import Balance from "@/components/Balance";
import Transactions from "@/components/transactions/Transactions";
import AddTransaction from "@/components/addTransactions/AddTransaction";

import { mapGetters } from "vuex";

export default {
  name: "AppContainer",
  components: {
    AppHeader,
    Balance,
    Transactions,
    AddTransaction
  },
  computed: {
    ...mapGetters(["getUserName"])
  },
  created() {
    if (!this.getUserName) {
      this.$router.push({ name: "login" });
    }
  },
  methods: {
    changeComponent(component) {
      this.currentComponent = component;
    }
  },
  data() {
    return {
      currentComponent: "Balance"
    };
  }
};
</script>

<style scoped>
  .content{
    height: 85vh;
    overflow-y: scroll;
  }
</style>

