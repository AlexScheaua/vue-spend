<template>
    <div>
      <div :key="day" v-for="(dayData, day) in monthData">
      <p>{{day}}</p>
    </div>
    </div>
    
</template>

<script>


export default {
  name: 'Transactions',
  components: {

  },
  data(){
    return {
      monthData: {}
    }
  },
  created(){
    let date = new Date();
    let year = date.getFullYear();
    let month = '0' + (date.getMonth()+1);

    fetch(`https://vspend.firebaseio.com/${year}/${month}.json`)
    .then(res => res.json())
    .then(data => this.monthData = data)
  },
  methods: {
    
  }
}
</script>
