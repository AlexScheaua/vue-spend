<template>
  <div class="d-flex flex-column align-items-center">
    <MonthPicker />

    <div v-if="!monthData" class="w-100">
      <h2 class="text-center text-secondary">No data this month</h2>
    </div>

    <div class="w-100 d-flex justify-content-center flex-column align-items-center">
      <b-progress v-if="balance.Income" class="mt-2 w-90" :max="balance.Income.amount" show-value>
        <b-progress-bar striped :value="balance.Actual.amount" variant="danger"></b-progress-bar>
        <b-progress-bar striped :value="balance.Savings.amount" variant="info"></b-progress-bar>
        <b-progress-bar :value="balance.Income.amount - balance.Actual.amount - balance.Savings.amount" variant="success"></b-progress-bar>
      </b-progress>
      <b-progress v-if="balance.Savings" class="mt-2 w-90" :max="balance.Income.amount" show-value>
        <b-progress-bar :value="totalSavings" variant="info"></b-progress-bar>
      </b-progress>
    </div>

    <div v-if="balance.Income" class="category">
      <div class="d-flex justify-content-between">
        <span>Income:</span>
        <span :style="getCategoryColor.Income">{{balance.Income.amount}} {{getCurrency}}</span>
      </div>
    </div>
    <div v-if="balance.Actual" v-b-toggle.categ-clps class="category">
      <div class="d-flex justify-content-between">
        <span>+ Actual:</span>
        <span :style="getCategoryColor.Actual">-{{balance.Actual.amount}} {{getCurrency}}</span>
      </div>
      <b-collapse id="categ-clps">
        <div
          v-for="(price, categ) in balance.Actual"
          :style="categ === 'amount'? 'display: none !important' : ''"
          class="categ-item d-flex justify-content-between"
          :key="categ+price"
        >
          <span>{{categ}}:</span>
          <span :style="getCategoryColor.Actual">-{{price}} {{getCurrency}}</span>
        </div>
      </b-collapse>
    </div>
    <div v-if="balance.Savings" class="category">
      <div class="d-flex justify-content-between">
        <span>Savings:</span>
        <span :style="getCategoryColor.Savings">{{balance.Savings.amount}} {{getCurrency}}</span>
      </div>
    </div>
    <div v-if="balance.Planned" v-b-toggle.planned-clps class="category">
      <div class="d-flex justify-content-between">
        <span>+ Planned:</span>
        <span :style="getCategoryColor.Planned">{{balance.Planned.amount}} {{getCurrency}}</span>
      </div>
      <b-collapse id="planned-clps">
        <div
          v-for="(price, categ) in balance.Planned"
          :style="categ === 'amount'? 'display: none !important' : ''"
          class="categ-item d-flex justify-content-between"
          :key="categ+price"
        >
          <span>{{categ}}:</span>
          <span :style="getCategoryColor.Planned">{{price}} {{getCurrency}}</span>
        </div>
      </b-collapse>
    </div>
  </div>
</template>

<script>
import MonthPicker from "./transactions/MonthPicker";
import { mapGetters } from "vuex";
import Api from '@/assets/Api'

export default {
  name: "Balance",
  components: {
    MonthPicker
  },
  /**
   * @TODO move totalSavings to vuex
   * generated only once from appContainer
   */
  props: [
    'totalSavings'
  ],
  computed: {
    ...mapGetters(['monthData','getCategoryColor','getCurrency']),
    balance: function() {
      return this.generateBalances();
    }
  },
  methods: {
    /**
     * generates the total per type and per category(for actual and planned expenses)
     * @returns {object} the balance object with all the totals.
     */
    generateBalances() {
      let balanceObject = {
        Actual:{
          amount: 0,
        },
        Planned:{
          amount: 0,
        },
        Income:{
          amount: 0,
        },
        Savings:{
          amount: 0
        },
      };
      for (let day in this.monthData) {
        for (let transaction in this.monthData[day]) {
          let transactionData = this.monthData[day][transaction];

          if (!balanceObject[transactionData.type]) {
            balanceObject[transactionData.type] = {amount: parseInt(transactionData.amount)};
          } else {
            balanceObject[transactionData.type].amount += parseInt(transactionData.amount);
          }

          if (transactionData.category && !balanceObject[transactionData.type][transactionData.category]) {
            balanceObject[transactionData.type][transactionData.category] = parseInt(transactionData.amount);
          } else if (transactionData.category) {
            balanceObject[transactionData.type][transactionData.category] += parseInt(transactionData.amount);
          }
        }
      }
      return balanceObject;
    }
  }
};
</script>

<style lang="scss" scoped>
.category {
  background: #fff;
  margin: 5px 0;
  padding: 10px 5px;
  width: 100%;
  border-radius: 5px;

  span {
    font-size: 18px;
  }

  .categ-item {
    margin: 2px 10px;

    span {
      font-size: 14px;
    }
  }
}

.w-90 {
  width: 90%;
}
</style>

