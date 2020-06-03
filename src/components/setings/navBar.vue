<template>
  <div>
    <b-navbar type="light" variant="light">
      <img class="logo-fatoura" src="../../assets/Group 4.png" alt="logo" />
      <h6 class="logo-title">Configurer votre application fatoura</h6>
      <router-link to="/">
        <b-button class="button-back">
          <i class="fa fa-arrow-right" style="color: #ffffff;">
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

<style>
.bg-light {
  width: 79rem;
  top: 1.5rem;
  left: 8rem;
  border-radius: 20px;
  height: 118px;
}

.logo-title {
  font-size: 15px;
  left: 125px;
  top: 70px;
  color: gray;
  position: absolute;
}

.button-back {
  border-radius: 22px !important;
  margin-left: 53rem;
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
  top: 71px;
  left: 72.5rem;
}

.logo-fatoura {
  margin-left: 4rem;
}
</style>