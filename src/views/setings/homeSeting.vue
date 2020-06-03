<template>
  <div :style="myStyle">
    <navBar />
    <sideBar />
  </div>
</template>

<script>
// @ is an alias to /src
import navBar from "@/components/setings/navBar.vue";
import sideBar from "@/components/setings/sideBar.vue";
// import CreateDevis from "@/components/Devis/CreateDevis.vue";

// import Table from "@/components/data-table/Table.vue";

export default {
  name: "homeSeting",
  components: {
    navBar,
    sideBar
  },
  data() {
    return {
      myStyle: {
        backgroundColor: "#000000"
      }
    };
  }
};
</script>
<style>
/* .body {
  font-family: "Gillroy", Arial, Helvetica, sans-serif;
  background-color: red !important;
} */

.container-one {
  position: absolute;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  width: 79rem;
  border-radius: 20px;
  left: 9rem;
  top: 10.5rem;
  height: 100%;
}
</style>
