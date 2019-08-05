<template>
    <b-nav tabs class="header">
      <div class="d-flex w-100 justify-content-around">
        <b-nav-item class="b-item" @click="$emit('changeComponent', 'Balance')"><font-awesome-icon icon="balance-scale-right" /> Balance</b-nav-item>
        <b-nav-item class="b-item" @click="$emit('changeComponent', 'Transactions')"><font-awesome-icon icon="clipboard" /> Transactions</b-nav-item>
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
  .header {
    box-shadow: 0 1px 2px #eee;
  }

  .b-item {
    font-weight: bold;
    letter-spacing: 0px;
    padding: 0.5rem 0;
    margin: 0;
  }
  
  .nav-link {
    color: var(--dark);
  }
</style>
