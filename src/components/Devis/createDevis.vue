<template>
  <div class="devis">
    <Navbar />
    <sidebar />
    <!-- <Table /> -->
    <div class="Content col-md-8 mx-auto">
      <div class="Content1"></div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Devis/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
export default {
  name: "Devis",
  components: {
    Navbar,
    Sidebar
  }
};
</script>

<style></style>
