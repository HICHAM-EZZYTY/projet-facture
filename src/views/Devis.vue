<template>
  <div class="devis">
    <Navbar />
    <sidebar />
    <!-- <Table /> -->
  
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Devis/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
// import Table from "@/components/data-table/Table.vue";

export default {
  name: "Devis",
  components: {
    Navbar,
    Sidebar,
    // Table,
  },
};
</script>
<style scoped></style>
