<template>
  <div
    :class="transaction.user === getUserName ? 'd-flex flex-row-reverse' : 'd-flex'"
    class="item my-05"
    @click="$emit('modal',[transaction,id,day])"
  >
    <div class="user-color" :style="userColor[transaction.user]" ></div>
    <div
      :class="transaction.user === getUserName ? 'd-flex flex-row-reverse' : 'd-flex'"
      class="items-text justify-content-between"
    >
      <div class="px-3 d-flex flex-column align-items-center" >
        <p class="amount m-0" :style="categoryColor[transaction.type]">{{transaction.amount}} Lei</p>
        <p class="category m-0" >{{transaction.category || transaction.type}}</p>
      </div>
      <p class="note m-0 align-self-center">{{transaction.note}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TransactionItem",
  props: ["transaction","id","day"],
  data() {
    return {
      userColor: {
        Andre: "background: #680084bb",
        Alex: "background: #0041ffbb"
      },
      categoryColor: {
        Actual: "color: var(--danger)",
        Planned: "color: var(--warning)",
        Income: "color: var(--success)",
        Savings: "color: var(--info)"
      }
    };
  },
  computed: {
    ...mapGetters(["getUserName"])
  },
  methods: {
  
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
  line-height: 2;
  border-radius: 3px;
  background: #fff;
  transition-duration: .3s;
}

.item:hover {
  background: #eee;
}

.items-text {
  width: 92%;
}

.category {
  font-size: 12px;
  line-height: 1;
}

.my-05 {
  margin: 0.12rem 0;
}
</style>
