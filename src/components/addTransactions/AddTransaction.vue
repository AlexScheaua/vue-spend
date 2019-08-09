<template>
  <b-form class="d-flex flex-column align-items-center" @submit.prevent="clickHandler">
    <!-- Select Type -->
    <b-form-radio-group
      id="btn-radios-1"
      class="my-1 w-100"
      :options="typeOptions"
      v-model="selectedType"
      buttons
      button-variant="outline-dark"
      name="radios-btn-outline"
    ></b-form-radio-group>
    <!-- Select expense -->
    <b-form-radio-group
      v-if="selectedType === 'Expense'"
      id="btn-radios-2"
      class="my-1 w-75"
      :options="expenseOptions"
      v-model="selectedExpense"
      buttons
      button-variant="outline-dark"
      name="radios-btn-outline"
    ></b-form-radio-group>
    <!-- Form -->
    <div v-if="selectedExpense || selectedType === 'Income' || selectedType === 'Savings'">
      <b-form-group
        v-if="selectedType === 'Expense'"
        id="input-group-4"
        label="Category:"
        label-for="input-4"
      >
        <b-form-select id="input-4" v-model="form.category" :options="getCategories" required></b-form-select>
      </b-form-group>
      <b-form-group id="input-group-1" label="Date:" label-for="input-1">
        <b-form-input id="input-1" v-model="form.date" type="date" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Note:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.note" type="text" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Amount:" label-for="input-3">
        <b-form-input id="input-3" v-model="form.amount" type="number" required></b-form-input>
      </b-form-group>
      <button class="btn btn-outline-dark w-100">Add</button>
    </div>

    <b-modal id="transaction-success">
      Transaction Added...
      <div slot="modal-footer"></div>
    </b-modal>

  </b-form>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import { setTimeout } from 'timers';
export default {
  name: "AddTransaction",
  created() {
    this.setDefaults();
  },
  computed:{
    ...mapState([
      'date'
    ]),
    ...mapGetters([
      'getCategories'
    ])
  },
  data() {
    return {
      selectedType: "",
      typeOptions: [
        { text: "Expense", value: "Expense" },
        { text: "Income", value: "Income" },
        { text: "Savings", value: "Savings" }
      ],
      selectedExpense: "",
      expenseOptions: [
        { text: "Actual", value: "Actual" },
        { text: "Planned", value: "Planned" }
      ],
      form: {
        user: this.getUserName()
      }
    };
  },
  methods: {
    ...mapGetters(["getUserName"]),
    ...mapActions(["setNewTransaction", 'generateMonthData']),
    setDefaults() {
      let date = new Date();
      this.form.date = date.toISOString().substr(0, 10);
      this.form.user = this.getUserName()
    },
    clickHandler() {
      let dbObject = {
        date: this.form.date.split("-"),
        newItem: {
          type: this.selectedExpense || this.selectedType,
          category: this.form.category,
          amount: this.form.amount,
          note: this.form.note,
          user: this.form.user
        }
      };
      this.setNewTransaction(dbObject)
      .then(res=>{this.generateMonthData(this.date)})
      .then(()=>{
        this.$bvModal.show('transaction-success')
        setTimeout(()=>{this.$bvModal.hide('transaction-success')}, 800)
      })

      this.form = {};
      this.setDefaults();
    }
  }
};
</script>

<style scoped>

</style>

