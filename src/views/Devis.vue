<template>
  <div class="devis">
    <Navbar />
    <sidebar />
    <!-- Content -->
    <Nouveau />

    <!-- <Table /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Devis/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import Nouveau from "@/components/Devis/Nouveau.vue";
// import Table from "@/components/data-table/Table.vue";

export default {
  name: "Devis",
  components: {
    Navbar,
    Sidebar,
    Nouveau
    // Table,
  }
};
</script>
<style scoped></style>
