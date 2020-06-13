<template>
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
          <b-avatar
            variant="primary"
            class="avatar"
            text="CE"
            size="3.5rem"
          ></b-avatar>
        </div>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
.containe {
  font-family: Arial, Helvetica, sans-serif;
}
/****  NavBar Content  ****/

* {
  margin: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  font-family: "Gilroy", sans-serif;
}
body {
  width: 100%;
}

.navbar {
  height: 8rem;
  background-color: white;
}

.containe .b-navbar {
  position: fixed;
}

.logo {
  position: absolute;
  width: 14rem;
}

/* Search part */

.search {
  width: 30rem !important;
  margin-right: 1rem !important;
}

.form input[type="text"] {
  padding-left: 3rem;
}

.submit {
  width: 11rem;
  margin-right: 8.5rem;

  font-size: 15px;
  font-weight: bold;
  font-family: Gilroy;
}
.form input[type="text"]:focus + .icon {
  color: dodgerBlue;
}

.form-inline {
  margin-right: 8rem;
}

/* Avatar part */
.icon {
  position: absolute;
  top: 47px;
  padding: 9px 8px;
  color: #aaa;
  transition: 0.3s;
}

.icon-plus {
  margin-right: 10px;
}

.bienvenue {
  color: rgb(177, 172, 172);
  margin: 1.5rem;
}

/* responsive part */
/* *************** */

/* extralarge */
@media only screen and (max-width: 1200px) {
  .form-control {
    margin-left: 256px;
  }
  .icon {
    margin: -20px 260px;
    top: 64px;
  }
  .form-inline {
    margin-left: 2rem;
  }

  .submit {
    padding: 10px;
    margin-left: 590px;
    top: 3rem;
    position: absolute;
    width: 105px;
    font-size: 9px;
  }
  /* .form-inline {
    margin-right: 4rem;
  } */
  form input[type="text"] {
    padding-left: 40px;
    max-width: 20rem;
  }
  /* avatar responsive */
  .avatar {
    width: 3rem;
    height: 3rem;
    margin-top: 12px;
  }
  .bienvenue {
    margin-left: 92.5px;
  }
  /* .form-inline {
    margin-right: -2rem;
  } */
  .form input[type="text"] {
    height: 2.9rem;
  }
}

/* large */

@media screen and (min-width: 576px) {
  .mb-sm-0,
  .my-sm-0 {
    margin-bottom: 1px !important;
  }
  .submit {
    width: 10rem;
    margin-right: 0.5rem;
    font-size: 15px;
    font-weight: bold;
    font-family: Gilroy;
  }
  .search {
    width: 26rem !important;
  }
  .mr-5,
  .mx-5 {
    margin-right: 1rem !important;
  }
  .bienvenue {
    font-size: 15px;
  }
  .mb-sm-0,
  .my-sm-0 {
    margin-top: 1px !important;
    height: 49.5px;
  }
  .form input[type="text"] {
    height: 3rem;
  }
  /* .submit {
    width: 11rem;
    margin-right: 1.5rem;
    font-size: 15px;
    font-weight: bold;
    font-family: Gilroy;
  }
  .avatar {
    margin-right: 1rem;
  } */
}
/* @media screen and (min-width: 1000px) {
  .submit {
    width: 11rem;
    margin-right: 1.5rem;
    font-size: 15px;
    font-weight: bold;
    font-family: Gilroy;
  } */
/* } */

/* @media screen and (min-width: 1200px) {
  
} */
</style>
