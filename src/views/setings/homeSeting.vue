<template>
    <div class="background">
      <div class="container home-settings">
      
        <navBar/>
        
        <div class="collapse" id="navbarToggleExternalContent">
          <div class="bg-light p-4">
            <sideBar/>
          </div>
        </div>
        
        <div class="row mt-4 content-section">
              
          <div class="col-xl-3 col-md-3 col-sm-12 mx-0 px-0 con">
            <sideBar/>
          </div>

          <div class="col-xl-9 col-md-12 col-sm-12 content-section_view">
            <router-view/>
          </div>
        
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
::-webkit-scrollbar {
  // width: 6px;
  display: none ;
}
.background{
  background-color: #e7eaf5;
  height: 100%;
}

.home-settings { 
  padding: 0;
  & .content-section{
    box-shadow: 0px 4px 10px rgba(0,0,0,0.3) ;  
    border-radius: 10px ;
    height: 80vh;  
    &_view{
      // background: white;
      height: 100%;
      overflow-x: hidden; 
      overflow-y: auto; 
      padding: 0;
      margin: 0;
      & > div {
        background: white;
        border-radius: 0px 10px 10px 0px; 
        position: relative;
        width: 100%;
        min-height: 100%;
        padding: 0px 3px;
      }
      @media screen and (max-width: 1200px){
        & > div{
          padding: 0px 10px;
          padding-bottom: 4em;
          border-radius: 10px;
          width:100%;
          & label{
            font-size: 1em !important;
          }
        }
      }
    }
  }
  & .con{
    background: #f7f8fb;
    border-radius: 10px 0px 0px 10px; 
    overflow-y: scroll;
    height:80vh;
    // border-right: 2px solid black ;
  }
  @media only screen and (max-width: 1200px) {
    & .con{
      display: none; 
    }
  }
  @media only screen and (min-width: 1200px) {
    & .collapse{
      display: none; 
    }
  }
}

</style>
