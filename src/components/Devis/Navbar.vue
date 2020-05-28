<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark ">
      <img class="logo" src="../../assets/Group.svg" alt="logo" />
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor02"
        aria-controls="navbarColor02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor02">
        <b-nav-form class="form">
          <b-form-input
            class="search mr-2"
            id="iconified"
            placeholder="Rechercher des Devis"
            type="text"
          ></b-form-input>
          <b-icon class="icon" icon="search" aria-hidden="true"></b-icon>
          <b-button class="submit  my-sm-1" type="submit" variant="primary"
            >+ Nouveau Devis
          </b-button>
        </b-nav-form>
        <p class="bienvenue"><strong>Bienvenue,</strong> hicham ezzyty</p>
        <div class="mb-2 mr-5" id="hz">
          <b-avatar
            variant="primary"
            class="avatar"
            text="HZ"
            size="3.5rem"
          ></b-avatar>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
nav {
  position: fixed;
  width: 100%;
  top: 4em;
  z-index: 1;
  background-color: inherit;
}
.navbar-toggler {
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: #2262c6;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}
.search {
  width: 30rem !important;
  margin-right: 1rem !important;
}
.form input[type="text"] {
  padding-left: 3rem;
}
.form-inline {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin-left: 3em;
}
.submit {
  width: 11rem;
  font-size: 15px;
  font-weight: bold;
  font-family: Gilroy;
}
.icon {
  position: absolute;
  top: 27px;
  padding: 9px 8px;
  color: #aaa;
  transition: 0.3s;
}
.bienvenue {
  color: rgb(177, 172, 172);
  margin: 1.5rem;
  margin-left: auto;
}
.btn-primary {
  color: #fff;
  background-color: #2262c6;
  border-color: #2262c6;
}
.badge-primary {
  color: #fff;
  background-color: #2262c6;
}
/* @media (min-width: 1614px) {

 .form-inline {
   position: relative;
   left: 2em;
}
} */
@media only screen and (min-width: 1556px) {
  .form-inline {
    margin-left: 7em;
  }
  /* .submit{
    width: 30rem;
    font-size: 15px;
    font-weight: bold;
    font-family: Gilroy;
} */
}
</style>
