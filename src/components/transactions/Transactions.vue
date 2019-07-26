<template>
  <div ref="content" class="content d-flex flex-column-reverse align-items-center">
    <div class="day-list d-flex flex-column-reverse" :key="day" v-for="(dayData, day) in monthData">
      <TransactionItem
        :key="id"
        v-for="(transaction,id) in dayData"
        :transaction="transaction"
        v-b-modal.edit-modal
      />
      <hr class="mb-3 mt-0" />
      <p class="day-categ mt-2 mb-1">{{day}} {{date.split('-')[1]}} {{date.split('-')[0]}}</p>
    </div>
    <b-form-group class="m-0" id="input-group-month" label-for="input-month">
      <b-form-input
        class="my-2"
        id="input-month"
        v-model="transactionDate"
        @change="setDate(transactionDate),generateMonthData(date)"
        type="month"
      ></b-form-input>
    </b-form-group>

    <EditModal />
  </div>
</template>

<script>
import TransactionItem from "./TransactionItem";
import EditModal from "./EditModal";
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "Transactions",
  components: {
    TransactionItem,
    EditModal
  },
  computed: {
    ...mapGetters(['monthData']),
    ...mapState(['date'])
  },
  data(){
    return{
      transactionDate: ''
    }
  },
  mounted() {
    this.scrollTopNow();
    this.transactionDate = this.date
  },
  watch: {
    monthData: function(){
      setTimeout(()=>{this.scrollTopNow()},200);
    }
  },
  methods: {
    ...mapActions([
      'setDate',
      'generateMonthData'
    ]),
    scrollTopNow(id) {
      this.$refs.content.scrollTop = 0;
    }
  }
  // :style="transaction.type === 'Savings' ? 'display:;' : 'display:none !important'"
};
</script>

<style scoped>
.content {
  border-radius: 10px;
}

#input-month {
  height: 70%;
  padding: 5px 10px;
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
  background: #eee;
}
</style>