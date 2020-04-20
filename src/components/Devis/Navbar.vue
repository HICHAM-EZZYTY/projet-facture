<template>
  <div class="devis-nav">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <img class="logo" src="../../assets/Group 4.png" alt="logo" />
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-icon icon="search"></b-icon>
              <input class="search" placeholder="rechercher des Devis ..." />
              <b-button size="sm" class="nouveau" type="submit"
                >+ Nouveau Devis</b-button
              >
            </b-nav-form>
            <p class="bien">Bienvenue ,HICHAM EZZYTY</p>

            <div class="clps">
              <h5>HE</h5>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.bg-info {
  background-color: #ffffff !important;
}
.logo {
  position: absolute;
  width: 242px;
  height: 51px;
  left: 32px;
  top: 53px;
}
.search {
  position: absolute;
  width: 679px;
  height: 57px;
  left: 400px;
  top: 55px;
  border: 2px solid #e9ebee;
  box-sizing: border-box;
  border-radius: 6px;
}
::placeholder {
  position: absolute;
  width: 231px;
  height: 46px;
  text-align: center;
  top: 74px;
  font-family: Gilroy;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 23px;
  text-transform: capitalize;
  color: rgba(6, 6, 6, 0.34);
}
.b-icon.bi {
  position: absolute;
  width: 25px;
  height: 25px;
  left: 426.27px;
  z-index: 1;
  top: 74.26px;
  color: rgb(149, 155, 155);
}
.nouveau {
  position: absolute;
  width: 263px;
  height: 57px;
  left: 1096px;
  top: 55px;
  background: #2262c6;
  box-shadow: 2px 2px 13px rgba(134, 125, 125, 0.08);
  border-radius: 6px;
  font-family: Gilroy;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  text-transform: capitalize;

  color: #f4f6f9;
}
.clps {
  position: absolute;
  width: 64px;
  height: 64px;
  left: 1808px;
  top: 55px;
  background: #2262c6;
  border-radius: 50px;
}
.bien {
  position: absolute;
  right: 7%;
  top: 79px;

  font-family: Gilroy;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  text-transform: capitalize;

  color: #aab5c6;
}
h5 {
  position: absolute;
  right: 27%;
  height: 27.94px;
  top: 21.03px;
  font-family: Gilroy;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  text-transform: capitalize;
  color: #ffffff;
}
</style>
