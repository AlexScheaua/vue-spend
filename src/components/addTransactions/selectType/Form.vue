<template>
  <b-form @submit.prevent="clickHandler">
    <b-form-group
      v-if="receivedProps === 'Actual' || receivedProps === 'Planned'"
      id="input-group-4"
      label="Category:"
      label-for="input-4"
    >
      <b-form-select id="input-4" v-model="form.category" :options="categories" required></b-form-select>
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
    <button class="btn btn-primary">Add</button>
  </b-form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Form",
  props: ["receivedProps"],
  created() {
    let date = new Date();
    this.form.date = date.toISOString().substr(0, 10);
  },
  data() {
    return {
      form: {
        user: this.getUserName()
      },
      category: "",
      categories: [
        { text: "groceries", value: "groceries" },
        { text: "fuel", value: "fuel" },
        { text: "clothes", value: "clothes" }
      ]
    };
  },
  methods: {
    ...mapGetters(["getUserName"]),
    ...mapActions(["setNewTransaction"]),
    clickHandler() {

      
      let dbObject = {
        date: this.form.date.split("-"),
        type: this.receivedProps,
        category: this.form.category,
        newItem: {
          amount: this.form.amount,
          note: this.form.note,
          user: this.form.user
        }
      };
      this.setNewTransaction(dbObject);
    }
  }
};
</script>

<style>
</style>
