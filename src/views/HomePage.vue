<template>
 <div>
    <Navbar />
    <sidebar />
    <!-- <Table /> -->

    <div class="Content col-xl-10 col-lg-10 col-md-10 col-sm-10 offset-xl-2 offset-lg-2 offset-md-2 offset-sm-2 p-0 my-0 .col-sm-8 offset-sm-2">
        <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
export default {
  name: "HomePage", 
  components:{
    Navbar,
    Sidebar
  }
};
</script>

<style scoped>


::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 2px grey; 
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: #2262C6; 
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #2e74e6; 
}

.Content{
  padding: 1em;
  margin-top: 30px; 
  height: 88vh;
  overflow-x: hidden; 
  overflow-y: auto; 
  text-align:justify; 
}


 

</style>