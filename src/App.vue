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
  name: "main", 
  created() {
    this.$http.interceptors.response.use(undefined,  (err) => {
      // let res = err.response;
      return new Promise(function () {
        if (err.response.status == 401 ) {
        // // if you ever get an unauthorized, logout the user
          // this.$store.dispatch("logout")
          this.$store.dispatch('logout')
          location.reload();
        // // you can also redirect to /login if needed !
          console.log(err.response.status)
        }
        throw err;
      });
    });
  }
};
</script>
