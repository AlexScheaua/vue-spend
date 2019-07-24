<template>
  <div>
    <b-form-radio-group
      id="btn-radios-1"
      :options="expenseOptions"
      v-model="selectedExpense"
      buttons
      button-variant="outline-primary"
      name="radios-btn-outline"
    ></b-form-radio-group>
    <div :is="selectedExpense" :receivedProps="selectedExpense"></div>
  </div>
</template>

<script>
import Actual from '@/components/addTransactions/selectType/expense/ActualExpense'
import Planned from '@/components/addTransactions/selectType/expense/PlannedExpense'

export default {
  name: "Expense",
  components:{
    Actual,Planned
  },
  data() {
    return {
      selectedExpense: '',
      expenseOptions: [
        { text: "Actual", value: "Actual" },
        { text: "Planned", value: "Planned" }
      ]
    };
  }
};
</script>
