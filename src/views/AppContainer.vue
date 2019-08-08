<template>
  <div>
    <div class="top-header d-flex justify-content-around align-items-center">
      <p class="text-dark">Vspend</p>
      <p class="text-dark">{{getUserName}}</p>
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
.top-header {
  height: 40px;
}
.content {
  height: 85vh;
  overflow-y: scroll;
  background: #eeeeee55;
}

.text-dark {
  margin: 0;
}
</style>

