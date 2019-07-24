<template>
  <Form :receivedProps="receivedProps" />
</template>

<script>
import Form from "../Form";

export default {
  name: "ActualExpense",
  props: ["receivedProps"],
  components: {
    Form
  }
};
</script>
