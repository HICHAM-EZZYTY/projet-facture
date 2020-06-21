<template>
  <div id="app1">
    <router-view />
  </div>
</template>

<style lang="scss" scoped>

  #app1{
    width:100%;
    max-width:100%;
    height: 100%;
    margin: 0px;
    padding: 0px; 
  }
  ::-webkit-scrollbar {
    display: none ;
  }
</style>

<script>
export default {
  name: "main"
};
</script>
