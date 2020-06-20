<template>
    <div class="container home-settings">
      
      <navBar/>
      
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-light p-4">
          <sideBar/>
        </div>
      </div>
      
      <div class="row mt-4 content-section">
            
        <div class="col-xl-3 col-md-3 col-sm-12 col-xs-12 mx-0 px-0 con">
          <sideBar/>
        </div>

        <div class="col-xl-9 col-md-9 col-sm-12 col-xs-12 mx-0 px-0 content-section_view">
          <router-view/>
        </div>
      
      </div>

    </div>
</template>

<script>

import navBar from "@/components/setings/navBar.vue";
import sideBar from "@/components/setings/sideBar.vue";

export default {
  name: "homeSeting",
  components: {
    navBar,
    sideBar
  },
  data() {
    return {
      myStyle: {
        backgroundColor: "#eceff9"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.home-settings { 
  & .content-section{
    box-shadow: 0px 4px 10px rgba(0,0,0,0.3) ;  
    border-radius: 10px ;
    height: 80vh;  
    &_view{
      height: 100%;
      overflow-x: hidden; 
      overflow-y: auto; 
    }
  }
  & .con{
    overflow-y: scroll;
    height:80vh;
    // border-right: 2px solid black ;
  }
  @media only screen and (max-width: 1000px) {
    & .con{
      display: none; 
    }
  }
  @media only screen and (min-width: 1000px) {
    & .collapse{
      display: none; 
    }
  }
}

</style>
