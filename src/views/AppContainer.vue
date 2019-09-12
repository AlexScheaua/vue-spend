<template>
  <div>
    <div class="top-header d-flex justify-content-around align-items-center">
      <p class="text-dark">Vspend</p>
      <p class="text-dark">{{getUserName}}</p>
    </div>
    <AppHeader @changeComponent="changeComponent" />
    <div :is="currentComponent" class="content" :totalSavings="totalSavings"></div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import Balance from "@/components/Balance";
import Transactions from "@/components/transactions/Transactions";
import AddTransaction from "@/components/addTransactions/AddTransaction";
import Api from '@/assets/Api'

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
    };
    /**
     * @todo add this to vuex
     */
    Api.getTotalSavings()
      .then(data => this.totalSavings = data)
  },
  methods: {
    /**
     * @todo add settings page on name click
     * for now it should allow user to logout and change currency
     */
    changeComponent(component) {
      this.currentComponent = component;
    }
  },
  data() {
    return {
      currentComponent: "Balance",
      totalSavings: 0
    };
  }
};
</script>

<style scoped>
.top-header {
  height: 40px;
}
.content {
  /** IOS ISSUES
  height: 85vh;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch; */

  background: #eeeeee55;
}

.text-dark {
  margin: 0;
}
</style>

