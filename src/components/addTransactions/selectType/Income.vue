<template>
  <Form :receivedProps="this.selectedType" />
</template>

<script>
import Form from "./Form";

export default {
  name: "Income",
  props: ["selectedType"],
  components: {
    Form
  }
};
</script>
