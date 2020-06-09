<template>
  <div class="devis">
    <Navbar />
    <sidebar />
    <!-- <Table /> -->
    <div class="Content col-md-8 mx-auto">
      <div class="Content1">
        <listDevis />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Devis/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import listDevis from "@/components/Devis/listDevis.vue";
// import CreateDevis from "@/components/Devis/CreateDevis.vue";

// import Table from "@/components/data-table/Table.vue";

export default {
  name: "Devis",
  components: {
    Navbar,
    Sidebar,
    listDevis
    // CreateDevis
    // Table,
  }
};
</script>
<style scoped>
.Content1 {
  /* border: 2px solid black; */
  text-align: center;
  display: flex;
  flex-direction: row;
  margin-left: 3rem;
  width: 74rem;
  /* margin-top: -47rem;
  position: relative; */
}
</style>
