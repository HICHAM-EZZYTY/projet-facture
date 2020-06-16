<template>
 <div>
    <Navbar />
    <sidebar />
    <!-- <Table /> -->
    <!-- <div class="Content col-md-8 mx-auto">
      <div class="Content1"> -->
        <div class="contain">
                  <router-view />
        </div>
      <!-- </div>
    </div> -->
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

.contain{
  
}

</style>