<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  created() {
    this.getThisMonth();
  },
  methods: {
    ...mapActions(["setDate"]),
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
