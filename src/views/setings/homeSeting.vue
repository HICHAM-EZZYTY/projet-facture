<template>
  <div :style="myStyle">
    <div class="Container">
      <div class="col-6">
        <navBar />
        <sideBar />
      </div>
      <div class="contents">
        <router-view></router-view>
        
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import navBar from "@/components/setings/navBar.vue";
import sideBar from "@/components/setings/sideBar.vue";
// import preference from "@/components/setings/preference.vue";
// import CreateDevis from "@/components/Devis/CreateDevis.vue";

// import Table from "@/components/data-table/Table.vue";

export default {
  name: "homeSeting",
  components: {
    navBar,
    sideBar
    // preference
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
<style>
.Container {
  display: flex;
  flex-direction: row;
  height: 48rem;
  overflow: hidden;
}

.contents {
  border: 2px solid white;
  width: 53rem;
  margin-left: -17.5rem;
  margin-top: 8.4rem;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: white;
  height: 35.5rem;
  overflow: hidden;
}

.load {
  position: absolute;
  width: 354px;
  height: 64px;
  left: 991px;
  top: 639px;
  background: #2262c6 !important;
  border-top-left-radius: 25px !important;
  border-bottom-left-radius: 0px !important;
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 20px !important;
}

.mise {
  font-size: 15px;
  padding: 14px;
  font-style: normal;
  font-weight: bold;
}
</style>
