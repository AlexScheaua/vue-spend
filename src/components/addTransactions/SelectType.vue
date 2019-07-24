<template>
  <div>
    <b-form-radio-group
      id="btn-radios-1"
      :options="typeOptions"
      v-model="selectedType"
      buttons
      button-variant="outline-primary"
      name="radios-btn-outline"
    ></b-form-radio-group>
    
    <div :is="selectedType" :selectedType="selectedType"></div>
  </div>
</template>

<script>
import Expense from '@/components/addTransactions/selectType/Expense'
import Income from '@/components/addTransactions/selectType/Income'
import Savings from '@/components/addTransactions/selectType/Savings'

export default {
  name: "SelectType",
  components: {
    Expense, Income, Savings
  },
  data() {
    return {
      selectedType: "",
      typeOptions: [
        { text: "Expense", value: "Expense" },
        { text: "Income", value: "Income" },
        { text: "Savings", value: "Savings" }
      ]
    };
  }
};
</script>
