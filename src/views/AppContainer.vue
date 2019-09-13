<template>
  <div>
    <div class="top-header mt-2 mx-3 d-flex justify-content-between align-items-center">
      <p class="text-dark">{{getUserName}}</p>
      <div class="d-flex">
        <span class="title-v">V</span><span class="title-spend">SPEND</span>
      </div>
      <button v-b-modal.settings-modal class="settings-icon"><font-awesome-icon icon="cog" /></button>
    </div>
    <AppHeader @changeComponent="changeComponent" />
    <div :is="currentComponent" class="content" :totalSavings="totalSavings"></div>
    <Settings />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import Balance from "@/components/Balance";
import Transactions from "@/components/transactions/Transactions";
import AddTransaction from "@/components/addTransactions/AddTransaction";
import Settings from "../components/Settings";
import Api from '@/assets/Api'

import { mapGetters, mapActions } from "vuex";

export default {
  name: "AppContainer",
  components: {
    AppHeader,
    Balance,
    Transactions,
    AddTransaction,
    Settings
  },
  computed: {
    ...mapGetters(["getUserName"]),
  },
  data() {
    return {
      currentComponent: "Balance",
      totalSavings: 0
    };
  },
  created() {
    if (!this.getUserName) {
      this.$router.push({ name: "login" });
    }
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
};
</script>

<style scoped>
  .title-v, .title-spend {
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none;
    font-size: 0.8rem;
    letter-spacing: 5px;
    background: transparent;
  }

  .title-v {
    font-weight: 600;
    padding-left: 6px;
    padding-top: 2px;
    color: var(--light);
    background: var(--dark);
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
  }

  .title-spend {
    padding-left: 5px ;
    border: 2px solid var(--dark);
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
  }

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

  .settings-icon {
    padding: 8px 10px;
    border: none;
    background: #fff;
  }

  .settings-icon:hover {
   background: #ddd;
  }

  .text-dark {
    margin: 0;
  }
</style>

