<template>
  <div>
    <Navbar />
    <Sidebar />
    <!-- <NavBar /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Devis/Navbar.vue";
// import NevBar from "@/components/NavBar.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "Devis",
  components: {
    Navbar,
    Sidebar
  }
};
</script>
<style scoped>
/* You can add global styles to this file, and also import other style files
@font-face {
  font-family: 'Gilroy-BlackItalic';
  src: url("../src/assets/fonts/Gilroy-BlackItalic.woff") format("opentype");
}

@font-face {
  font-family: 'Gilroy-ExtraboldItalic';
  src: url('../src/assets/fonts/Gilroy-ExtraboldItalic.woff') format('opentype');
}

@font-face {
  font-family: 'Gilroy-HeavyItalic';
  src: url("../src/assets/fonts/Gilroy-HeavyItalic.woff") format("opentype");
}

@font-face {
  font-family: 'Gilroy-LightItalic';
  src: url("../src/assets/fonts/Gilroy-LightItalic.woff") format("opentype");
} */
</style>
