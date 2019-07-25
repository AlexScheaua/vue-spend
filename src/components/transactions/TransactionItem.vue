<template>
  <div
    :class="transaction.user === getUserName ? 'd-flex flex-row-reverse' : 'd-flex'"
    class="item my-1"
    :style="categoryColor[transaction.type]"
  >
    <div class="user-color" :style="userColor[transaction.user]"></div>
    <div
      :class="transaction.user === getUserName ? 'd-flex flex-row-reverse' : 'd-flex'"
      class="items-text justify-content-between"
    >
      <div class="px-3 d-flex flex-column align-items-center">
        <p class="amount m-0">{{transaction.amount}} Lei</p>
        <p class="category m-0">{{transaction.category || transaction.type}}</p>
      </div>
      <p class="note m-0 align-self-center">{{transaction.note}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TransactionItem",
  props: ["transaction", "date"],
  data() {
    return {
      userColor: {
        Andre: "background: #680084",
        Alex: "background: #ff2800"
      },
      categoryColor: {
        Actual: "background: #ff000030",
        Planned: "background: #ffde0047",
        Income: "background: #20c95240",
        Savings: "background: #0056ec3d"
      }
    };
  },
  computed: {
    ...mapGetters(["getUserName"])
  }
};
</script>

<style scoped>
.user-color {
  width: 10px;
  opacity: 0.8;
  border-radius: 5px;
}

.item {
  border-radius: 5px;
  box-shadow: 0 1px 5px #777;
}

.item:hover {
  background: #11111133 !important;
}

.items-text {
  width: 90%;
}

.category {
  font-size: 10px;
}
</style>
