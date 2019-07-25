<template>
  <div ref="content" class="content d-flex flex-column-reverse align-items-center">
    <div class="day-list" :key="day" v-for="(dayData, day) in monthData">
      <p class="day-categ mt-2 mb-1">{{day}} {{date.split('-')[1]}} {{date.split('-')[0]}}</p>
      <hr class="mb-3 mt-0">
      <TransactionItem :key="id" v-for="(transaction,id) in dayData" :transaction="transaction" />
    </div>
    <b-form-group class="m-0" id="input-group-month" label-for="input-month">
      <b-form-input class="my-2" id="input-month" v-model="date" @change="getMonthData" type="month" required></b-form-input>
    </b-form-group>
  </div>
</template>

<script>
import TransactionItem from "./TransactionItem";
import { setTimeout } from "timers";

export default {
  name: "Transactions",
  components: {
    TransactionItem
  },
  data() {
    return {
      monthData: {},
      date: ""
    };
  },
  created() {
    this.getThisMonth();
    this.getMonthData();
  },
  methods: {
    getThisMonth() {
      let dateObj = new Date();
      this.date = dateObj.toISOString().substr(0, 7);
    },
    getMonthData() {
      let year = this.date.split("-")[0];
      let month = this.date.split("-")[1];

      fetch(`https://vspend.firebaseio.com/${year}/${month}.json`)
        .then(res => res.json())
        .then(data => (this.monthData = data))
        .then(r => {
          try {
            this.scrollTopNow();
          } catch (e) {}
        });
    },
    scrollTopNow() {
      this.$refs.content.scrollTop = 0;
    }
  }
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
