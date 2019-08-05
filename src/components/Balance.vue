<template>

  <div>
    <div class="d-flex justify-content-center">
      <b-progress v-if="balance.Income" class="mt-2 w-90" :max="balance.Income.amount" show-value>
        <b-progress-bar striped :value="balance.Actual.amount" variant="danger"></b-progress-bar>
        <b-progress-bar striped :value="balance.Savings.amount" variant="info"></b-progress-bar>
        <b-progress-bar :value="balance.Income.amount - balance.Actual.amount - balance.Savings.amount" variant="success"></b-progress-bar>
      </b-progress>
    </div>

    <h1 v-if="balance.Income">{{balance.Income.amount - balance.Actual.amount - balance.Savings.amount}} Lei</h1>
    <p v-if="balance.Income">Income: {{balance.Income.amount}} Lei</p>
    <p v-b-toggle.categ-clps v-if="balance.Actual">Actual: -{{balance.Actual.amount}} Lei</p>
    <b-collapse id="categ-clps">
      <p class="categ-item" :key="categ" v-for="(categ, key) in balance.Actual" v-show="key !== 'amount'">{{key}}: -{{categ}} Lei</p>
    </b-collapse>
    <p v-if="balance.Savings">Savings: -{{balance.Savings.amount}} Lei</p>
    <p v-if="balance.Planned">Planned: {{balance.Planned.amount}} Lei</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Balance",
  mounted() {
    this.generateBalances();
  },
  watch: {
    monthData: function() {
      this.generateBalances();
    }
  },
  computed: {
    ...mapGetters(["monthData"])
  },
  data() {
    return {
      balance: {},
    };
  },
  methods: {
    generateBalances() {
      let balanceObject = {}
      for (let day in this.monthData) {
        for (let transaction in this.monthData[day]) {
          let transactionData = this.monthData[day][transaction];

          if (!balanceObject[transactionData.type]) {
            balanceObject[transactionData.type] = {amount: parseInt(transactionData.amount)};
          } else {
            balanceObject[transactionData.type].amount += parseInt(transactionData.amount);
          }
          
          if (transactionData.category && !balanceObject[transactionData.category]){
            balanceObject[transactionData.type][transactionData.category] = parseInt(transactionData.amount)
          } else if(transactionData.category) {
            balanceObject[transactionData.type][transactionData.category] += parseInt(transactionData.amount)
          }
        }
      }
      this.balance = balanceObject;
    }
  }
};
</script>

<style scoped>
  .categ-item {
    margin: 2px 0 2px 10px;
  }

  .w-90 {
    width: 90%;
  }
</style>

