<template>
  <div>
    <!-- <div :key="id" v-for="(type, id) in balance">
      <h1>{{id}}: {{type.amount}}Lei</h1>
      <p :key="id" v-for="(categ,id) in type" v-if="id !== 'amount'">{{id}}: {{categ}}</p>
    </div> -->
    <h1 v-if="balance.Income">Balance: {{balance.Income.amount - balance.Actual.amount - balance.Savings.amount}}</h1>
    <p v-if="balance.Income">Income: {{balance.Income.amount}}</p>
    <p v-if="balance.Actual">Actual: {{balance.Actual.amount}}</p>
    <p v-if="balance.Savings">Savings: {{balance.Savings.amount}}</p>
    <p v-if="balance.Planned">Planned: {{balance.Planned.amount}}</p>
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
