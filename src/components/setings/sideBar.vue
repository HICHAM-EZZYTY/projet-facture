<template>
  <div :style="myStyle" id="wrapper" class="navBar">
    <b-navbar>
      <ul class="sidebar-nav">
        <li class="sidebar-brand" active>
          <!-- <router-link to="/Préférences"> -->
          <!-- <router-link to="preference"> -->
          <router-link :to="{ name: 'Preferences' }">
            <a class="preference">
              Préférences
              <i class="fa fa-caret-right" style="font-size: 2rem;"></i>
            </a>
          </router-link>
          <!-- </router-link> -->
        </li>
        <li class="sidebar-brand">
          <router-link :to="{ name: 'DevisPreferences' }">
            <a>Devis</a>
          </router-link>
        </li>
        <li class="sidebar-brand">
          <router-link :to="{ name: 'FacturePreferences' }">
            <a>Factures</a>
          </router-link>
        </li>
        <li class="sidebar-brand">
          <router-link :to="{ name: 'AvoirePreferences' }">
            <a>Avoirs</a>
          </router-link>
        </li>
        <li class="sidebar-brand">
          <router-link :to="{ name: 'FactureAcomptePreferences' }">
            <a>Factures d'acompte</a>
          </router-link>
        </li>
        <li class="sidebar-brand">
          <router-link :to="{ name: 'AvoireAcomptePreferences' }">
            <a>Avoirs d'acompte</a>
          </router-link>
        </li>
        <li class="sidebar-brand">
          <router-link :to="{ name: 'NumerotationPreferences' }">
            <a>Numérotation</a>
          </router-link>
        </li>
        <li class="sidebar-brand">
          <a>Types d'article</a>
        </li>
        <li class="sidebar-brand">
          <a>Thème des documents</a>
        </li>
      </ul>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myStyle: {
        backgroundColor: "#f7f8fb"
      }
    };
  }
};
</script>

<style>
.navBar {
  /* background-color: #e5e5e5 !important; */
  margin-top: 3.5rem;
  /* position: fixed; */
  margin-left: 10rem;
  overflow-y: scroll;
  width: 20rem;
  height: 32rem;
  /* margin-left: 8rem; */
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
/* #wrapper {
  padding-left: 0;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
} */

/* #wrapper.toggled {
  padding-left: 250px;
} */

#sidebar-wrapper {
  z-index: 1000;
  position: fixed;
  left: 24rem;
  width: 0;
  height: 100%;
  top: 10rem;
  margin-left: -250px;
  overflow-y: auto;
  background: white;
  transition: all 0.5s ease;
  border-top-left-radius: 28px;
}

/* #wrapper.toggled #sidebar-wrapper {
  width: 250px;
}

#wrapper.toggled {
  position: absolute;
  margin-right: -250px;
} */

/* Sidebar Styles */

.sidebar-nav {
  position: absolute;
  top: 3rem !important;
  width: 250px;
  margin: 0;
  padding: 0;
  left: -14rem;
  list-style: none;
}

.preference {
  margin-top: -21px;
}

.sidebar-nav li {
  text-indent: 20px;
  line-height: 40px;
}

.sidebar-nav li a {
  display: block;
  text-decoration: none;
  color: #999999;
  padding: 8px;
}
/* 
.sidebar-nav li a:hover {
  text-decoration: none;
  color: #fff;
  background: red;
} */

.sidebar-nav li a:active,
.sidebar-nav li a:focus {
  text-decoration: none;
}

.sidebar-nav > .sidebar-brand a:hover {
  color: black;
  background: none;
}

@media (min-width: 768px) {
  #wrapper {
    padding-left: 250px;
  }

  #wrapper.toggled {
    padding-left: 0;
  }

  #sidebar-wrapper {
    width: 250px;
  }

  #wrapper.toggled #sidebar-wrapper {
    width: 0;
  }

  #wrapper.toggled {
    position: relative;
    margin-right: 0;
  }
}

ul {
  text-decoration: none;
}

.fa-caret-right {
  margin-left: -10.2rem;
  margin-top: 5px;
  color: #2262c6;
  font-size: 8rem;
  position: absolute;
}
</style>