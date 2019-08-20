<template>
  <b-modal id="edit-modal" title="Edit transaction">
    <b-form-radio-group
      id="select-type"
      class="my-1 w-100"
      :options="typeOptions"
      v-model="type"
      buttons
      button-variant="outline-dark"
      name="radios-btn-outline"
    ></b-form-radio-group>
    <b-form-group
        v-if="type === 'Actual' || type === 'Planned'"
        id="select-category"
        label="Category:"
        label-for="input-4"
      >
        <b-form-select id="input-4" v-model="category" :options="getCategories" required></b-form-select>
      </b-form-group>
    <b-form-group id="input-group-2" label="Note:" label-for="input-2">
      <b-form-input id="input-2" v-model="note" type="text" required></b-form-input>
    </b-form-group>
    <b-form-group id="input-group-3" label="Amount:" label-for="input-3">
      <b-form-input id="input-3" v-model="amount" type="number" required></b-form-input>
    </b-form-group>
    <template slot="modal-footer" slot-scope="{ ok, cancel }">
      <b-button variant="outline-success" @click="saveTransaction(); if(amount) {ok()};"><font-awesome-icon icon="check" /></b-button>
      <b-button variant="outline-danger" @click="removeTransaction(); cancel()"><font-awesome-icon icon="trash-alt" /></b-button>
    </template>
  </b-modal>
</template>

<script>
import{ mapActions, mapGetters } from 'vuex'

export default {
  name: "EditModal",
  props: ["transaction"],
  data() {
    return {
      type: "",
      category: "",
      note: "",
      amount: "",
      user: "",
      typeOptions: [
        { text: "Actual", value: "Actual" },
        { text: "Planned", value: "Planned" },
        { text: "Income", value: "Income" },
        { text: "Savings", value: "Savings" }
      ]
    };
  },
  computed: {
    ...mapGetters([
      'getCategories'
    ])
  },
  methods: {
    ...mapActions([
      'editTransaction',
      'deleteTransaction'
    ]),
    ...mapGetters([
      'getUserName'
    ]),
    saveTransaction(){
      if(!this.amount) return;
      let link = [this.transaction[2][2], this.transaction[2][1], this.transaction[2][0], this.transaction[1]];

      if(this.type === 'Savings' || this.type === 'Income'){
        this.category = '';
      }

      let editedItem = {
        type: this.type,
        category: this.category,
        note: this.note,
        amount: this.amount,
        user: this.user,
        editedBy: this.getUserName()
      }

      this.editTransaction([link, editedItem])
    },
    removeTransaction(){
      let link = [this.transaction[2][2], this.transaction[2][1], this.transaction[2][0], this.transaction[1]];
      // does not trigger redraw -> in depth object modification
      this.deleteTransaction(link);
    }
  },
  watch: {
    transaction() {
      this.type = this.transaction[0].type;
      this.category = this.transaction[0].category;
      this.note = this.transaction[0].note;
      this.amount = this.transaction[0].amount;
      this.user = this.transaction[0].user;
    }
  }
};
</script>

<style scoped>
  svg {
    transform: scale(1.3);
  }
</style>
