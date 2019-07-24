<template>
  <b-form-group id="input-group-4" label="Category:" label-for="input-4">
    <b-form-select id="input-4" v-model="category" :options="categories" required></b-form-select>
  </b-form-group>
</template>

<script>

export default {
  name: 'Category',
  data(){
    return {
      category: '',
      categories: [
        {text: 'groceries', value: 'groceries'},
        {text: 'fuel', value: 'fuel'},
        {text: 'clothes', value: 'clothes'},
      ]
    }
  }
};
</script>

<style>
</style>
