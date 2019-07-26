<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState([
      'date'
      ])
  },
  created() {
    this.getThisMonth();
    this.generateMonthData(this.date);
  },
  methods: {
    ...mapActions(["generateMonthData", "setDate"]),
    getThisMonth() {
      let dateObj = new Date();
      this.setDate(dateObj.toISOString().substr(0, 7));
    }
  }
};
</script>

<style>
* {
  font-family: Arial, Helvetica, sans-serif !important;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
