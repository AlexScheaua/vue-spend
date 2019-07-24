<template>
    <b-nav tabs class="Header d-flex justify-content-between">
      <div class="d-flex ">
        <b-nav-item class="b-item" @click="$emit('changeComponent', 'Balance')"><font-awesome-icon icon="balance-scale-right" /> Balance</b-nav-item>
        <b-nav-item class="b-item" @click="$emit('changeComponent', 'Transactions')"><font-awesome-icon icon="clipboard" /> Transactions</b-nav-item>
      </div>
      <div>
        <b-nav-item class="b-item" @click="$emit('changeComponent', 'AddTransaction')"><font-awesome-icon icon="notes-medical" /> Add</b-nav-item>
      </div>
    </b-nav>
</template>

<script>
export default {
  name: 'AppHeader',
  methods: {
   
  }
};
</script>

<style scoped>
  .b-item {
    font-weight: bold;
  }
</style>
