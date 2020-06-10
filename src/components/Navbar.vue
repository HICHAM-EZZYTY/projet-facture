<template>
<<<<<<< HEAD:src/components/Devis/Navbar.vue
  <nav class="navbar navbar-expand-lg navbar-dark ">
    <a class="navbar-brand" href="#"><img class="logo" src="../../assets/Group.svg" alt="logo" /></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContentLG" aria-controls="navbarSupportedContentLG" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContentLG">
        <form class="form-inline my-2 my-lg-0">
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
        </form>
        <div id="navbar" class="navbar-collapse collapse">
           <p class="bienvenue"><strong>Bienvenue,</strong> hicham ezzyty</p>
=======
  <div class="containe mt-1">
    <b-navbar toggleable="lg" type="white" variant="white">
      <img class="logo" src="../assets/Group 4.png" alt="logo" />

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <!-- SEARCH AREA -->

        <b-navbar-nav class="ml-auto">
          <b-nav-form class="form">
            <b-form-input
              class="search mr-2"
              id="iconified"
              placeholder="Rechercher des Devis"
              type="text"
            ></b-form-input>
            <b-icon class="icon" icon="search" aria-hidden="true"></b-icon>
            <router-link to="createDevis">
              <b-button
                class="submit my-2 my-sm-0"
                type="submit"
                variant="primary"
              >
                <b-icon
                  class="icon-plus"
                  icon="plus"
                  aria-hidden="true"
                ></b-icon
                >Nouveau Devis
              </b-button>
            </router-link>
          </b-nav-form>
        </b-navbar-nav>

        <!-- FIN SEARCH AREA -->
        <p class="bienvenue"><strong>Bienvenue,</strong> Chaimaa Ess-bbah</p>
        <div class="mb-2 mr-5">
>>>>>>> routes:src/components/Navbar.vue
          <b-avatar
            variant="primary"
            class="avatar"
            text="HZ"
            size="3.5rem"
          ></b-avatar>
        </div>
    </div>
</nav>
</template>

<script>
export default {
  name: "Navbar",
  
};
</script>

<style scoped>

.btn-outline-dark {
    color: rgb(34, 98, 198);
    border-color: rgb(34, 98, 198);
}
.btn-outline-dark:hover {
	border-color: #343a40;	
}
.navbar-toggler {
    padding: .25rem .75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: #2262c6;
    border: 1px solid #2262c6;
    border-radius: .25rem;
}
.search {
  width: 30rem !important;
  margin-right: 1rem !important;
}
.form input[type="text"] {
  padding-left: 3rem;
  font-family: 'Gilroy-Regular';

}
/* .form-inline {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin-left: 3em;
} */
.submit {
  width: 9rem;
  height: 44px;
  font-size: 15px;
  font-weight: bold;
  font-family: 'Gilroy-Bold';

}
.icon {
  position: absolute;
  top: 8px;
  padding: 9px 14px;
  color: #aaa;
  transition: 0.3s;
}

.form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: 1.375rem 3.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    font-family: 'Gilroy-Regular';
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.form-inline {
    display: flex;
    position: relative;
    /* align-items: center; */
    left: 12%;
}
 .bienvenue {
  color: rgb(177, 172, 172);
  margin: 1.5rem;
  margin-left: auto;
    font-family: 'Gilroy-Regular';

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
.form-inline {
    display: flex;
    align-items: center;
}
/* @media (min-width: 1614px) {
 .form-inline {
   position: relative;
   left: 2em;
}
} */
/* @media only screen and (min-width: 1200px) {
  .form-inline {
    margin-left: 7em;
  } */
   /* .submit{
    width: 30rem;
    font-size: 15px;
    font-weight: bold;
    font-family: Gilroy;
}  */
/* } */
</style>