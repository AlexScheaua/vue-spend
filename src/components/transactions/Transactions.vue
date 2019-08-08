<template>
  <div ref="content" class="content d-flex align-items-center flex-column">
    <MonthPicker />
    <div class="w-100 d-flex flex-column-reverse">
      <div class="day-list d-flex flex-column-reverse" :key="day" v-for="(dayData, day) in monthData">
        <TransactionItem
          :key="id"
          v-for="(transaction,id) in dayData"
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
    ...mapState(["date"])
  },
  data() {
    return {
      modalData: ""
    };
  },
  mounted() {
    this.scrollTopNow();
    this.transactionDate = this.date;
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