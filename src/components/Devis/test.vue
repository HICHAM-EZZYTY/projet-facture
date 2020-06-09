<template>
  <div id="app">
<!-- <p>{{date}}</p>
<vc-calendar
  v-model="date"
  @dayclick="test()"

  ref="calendar" 
>
</vc-calendar>

  <button  @click="test()" type="button">
    ccccc
  </button>
 -->
 <SingleDatePicker />



  </div>
</template>

<script>

export default {
 
  data(){
    return {
      date:null
    }
  },
  methods:{
      test(){
        const calendar = this.$refs.calendar;
        console.log(calendar)
        console.log(calendar.date)
      }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
