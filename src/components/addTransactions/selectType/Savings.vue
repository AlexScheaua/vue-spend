<template>
    <Form :receivedProps="this.selectedType"/>
</template>

<script>
import Form from './Form'

export default {
  name: "Savings",
  props:[
    'selectedType'
  ],
  components: {
    Form
  }
}
</script>
