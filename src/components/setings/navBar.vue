<template>
  <div>
    <b-navbar type="light" variant="light">
      <img class="logo-fatoura" src="../../assets/Group 4.png" alt="logo" />
      <h6 class="logo-title">Configurer votre application fatoura</h6>
      <router-link to="/">
        <b-button class="button-back">
          <i class="fa fa-arrow-right arrow" style="color: #ffffff;">
            <!-- icon -->
          </i>
        </b-button>
      </router-link>
      <p class="text-back">Retour</p>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bg-light {
  width: 73rem;
  top: 1rem;
  left: 10rem;
  border-radius: 20px;
  height: 94px;
}

.logo-title {
  font-size: 15px;
  left: 125px;
  top: 55px;
  color: gray;
  position: absolute;
}

.button-back {
  border-radius: 22px !important;
  margin-left: 49rem;
  background-color: #0062cc !important;
  width: 34px;
  height: 34px;
}

.text-back {
  position: absolute;
  font-family: "Gillroy";
  font-size: 18px;
  color: #0062cc;
  font-weight: bold;
  top: 62px;
  left: 68.5rem;
}

.logo-fatoura {
  margin-left: 4rem;
}

.arrow {
  margin-top: -8px;
  margin-left: -5px;
  position: absolute;
}
</style>