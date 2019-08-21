<template>
  <div ref="content" class="content d-flex align-items-center flex-column">
    <div class="w-100 d-flex justify-content-center">
      <MonthPicker />
      <div class="filter d-flex justify-content-center align-items-center">
        <font-awesome-icon icon="filter" v-b-modal.filter-modal class="filter-icon"/>
      </div>
    </div>
    <div class="w-100 d-flex flex-column-reverse">
      <div class="day-list d-flex flex-column-reverse" :key="day" v-for="(dayData, day) in monthData">
        <TransactionItem
          :key="id"
          v-for="(transaction, id) in dayData"
          :style="transaction.type === filterBy || transaction.category === filterBy || filterBy === '' ? '' : 'display: none !important'"
          :transaction="transaction"
          :id="id"
          :day="[day,date.split('-')[1],date.split('-')[0]]"
          v-b-modal.edit-modal
          @modal="setModalData"
        />
        <p class="day-categ mt-2 mb-1">{{day}} {{date.split('-')[1]}} {{date.split('-')[0]}}</p>
      </div>
    </div>

    <div v-if="!monthData" class="w-100">
      <h2 class="text-center text-secondary">No data this month</h2>
    </div>
    <EditModal :transaction="this.modalData" />
    
    <b-modal id="filter-modal" title="Filter">
       <b-form-group label="Filter by">
         <b-form-radio-group
          id="filter-radios"
          v-model="filterBy"
          :options="filterOptions"
          stacked
          name="radios-btn-default"
        ></b-form-radio-group>
      </b-form-group>
      <template slot="modal-footer" slot-scope="{ ok }">
        <b-button variant="outline-dark" @click="ok();">ok</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import TransactionItem from "./TransactionItem";
import MonthPicker from "./MonthPicker";
import EditModal from "./EditModal";
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "Transactions",
  components: {
    TransactionItem,
    EditModal,
    MonthPicker
  },
  computed: {
    ...mapGetters(["monthData"]),
    ...mapState(["date", "categories"])
  },
  data() {
    return {
      modalData: "",
      filterBy: '',
      filterOptions: [
        {text: 'No Filter', value: ''},
        {text: 'Actual expenses', value: 'Actual'},
        {text: 'Planned expenses', value: 'Planned'},
        {text: 'Income', value: 'Income'},
        {text: 'Savings', value: 'Savings'},
      ]
    };
  },
  mounted() {
    this.scrollTopNow();
    this.transactionDate = this.date;

    this.filterOptions.push(...this.categories);
  },
  watch: {
    monthData: function() {
      setTimeout(() => {
        this.scrollTopNow();
      }, 200);
    }
  },
  methods: {
    scrollTopNow(id) {
      this.$refs.content.scrollTop = 0;
    },
    setModalData(data) {
      this.modalData = data;
    }
  }
};
</script>

<style scoped>
.content {
  border-radius: 10px;
}

.filter {
  height: 60px;
  width: 60px;
}

.filter-icon {
  padding: 10px;
  width: 43px;
  height: 43px;
  border-radius: 3px;
  background: #fff;
  border: 1px solid #e0e0e0; 
}
.filter-icon:hover {
  background: #ddd;
}

.day-categ {
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
}

.day-list {
  width: 100%;
  padding: 0 10px;
  border-radius: 10px;
}

</style>

<style>
  .custom-radio{
    margin: 10px 20px;
  }
</style>