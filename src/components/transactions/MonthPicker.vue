<template>
  <b-form-group class="m-0" id="input-group-month" label-for="input-month">
      <b-form-input
        class="my-2"
        id="input-month"
        v-model="transactionDate"
        @change="setDate(transactionDate),generateMonthData(date)"
        type="month"
      ></b-form-input>
    </b-form-group>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'month-picker',
  computed: {
    ...mapState(['date'])
  },
  mounted() {
    this.transactionDate = this.date
  },
  data(){
    return{
      transactionDate: ''
    }
  },
  methods:{
    ...mapActions([
      'setDate',
      'generateMonthData'
    ]),
  }
}
</script>

<style lang="scss" scoped>
  #input-group-month {
    min-width: 40%;
  }
</style>
