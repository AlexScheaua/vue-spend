<template>
  <Form :receivedProps="receivedProps" />
</template>

<script>
import Form from "../Form";

export default {
  name: "PlannedExpense",
  props: ["receivedProps"],
  components: {
    Form
  }
};
</script>

<style>
</style>
