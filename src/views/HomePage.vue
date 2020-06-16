<template>
 <div>
    <Navbar />
    <sidebar />
    <!-- <Table /> -->
    <div class="Content col-md-10 offset-md-2 p-0 my-0 .col-sm-8 offset-sm-2">
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

.container{
  height: 100%
}


</style>