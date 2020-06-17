<template>
  <div :style="myStyle" id="wrapper" class="navBar">
    <b-navbar class="SideBar">
      <ul class="sidebar-nav">
        <li class="sidebar-brand" @click="activate(0)" :class="{ active : active_el == 0 }">
          <!-- <router-link to="/Préférences"> -->
          <!-- <router-link to="preference"> -->
          <router-link :to="{ name: 'Preferences' }">
            <a class="preference">
              Préférences
              <i
                class="fa fa-caret-right caret-right caret-right0"
                style="font-size: 2rem;"
              ></i>
            </a>
          </router-link>
          <!-- </router-link> -->
        </li>
        <li class="sidebar-brand" @click="activate(1)" :class="{ active : active_el == 1 }">
          <router-link :to="{ name: 'DevisPreferences' }">
            <a>
              Devis
              <!-- <i class="fa fa-caret-right caret-right caret-right1" style="font-size: 2rem;"></i> -->
            </a>
          </router-link>
        </li>
        <li class="sidebar-brand" @click="activate(2)" :class="{ active : active_el == 2 }">
          <router-link :to="{ name: 'FacturePreferences' }">
            <a>
              Factures
              <!-- <i
                class="fa fa-caret-right caret-right caret-right2"
                style="font-size: 2rem;"
              ></i>-->
            </a>
          </router-link>
        </li>
        <li class="sidebar-brand" @click="activate(3)" :class="{ active : active_el == 3 }">
          <router-link :to="{ name: 'AvoirePreferences' }">
            <a>
              Avoirs
              <!-- <i class="fa fa-caret-right caret-right caret-right3" style="font-size: 2rem;"></i> -->
            </a>
          </router-link>
        </li>
        <li class="sidebar-brand" @click="activate(4)" :class="{ active : active_el == 4 }">
          <router-link :to="{ name: 'FactureAcomptePreferences' }">
            <a>
              Factures d'acompte
              <!-- <i
                class="fa fa-caret-right caret-right caret-right4"
                style="font-size: 2rem;"
              ></i>-->
            </a>
          </router-link>
        </li>
        <li class="sidebar-brand" @click="activate(5)" :class="{ active : active_el == 5 }">
          <router-link :to="{ name: 'AvoireAcomptePreferences' }">
            <a>
              Avoirs d'acompte
              <!-- <i
                class="fa fa-caret-right caret-right caret-right5"
                style="font-size: 2rem;"
              ></i>-->
            </a>
          </router-link>
        </li>
        <li class="sidebar-brand" @click="activate(6)" :class="{ active : active_el == 6 }">
          <router-link :to="{ name: 'NumerotationPreferences' }">
            <a>
              Numérotation
              <!-- <i
                class="fa fa-caret-right caret-right caret-right6"
                style="font-size: 2rem;"
              ></i>-->
            </a>
          </router-link>
        </li>
        <li class="sidebar-brand" @click="activate(7)" :class="{ active : active_el == 7 }">
          <a>
            Types d'article
            <!-- <i
              class="fa fa-caret-right caret-right caret-right7"
              style="font-size: 2rem;"
            ></i>-->
          </a>
        </li>
        <li class="sidebar-brand" @click="activate(8)" :class="{ active : active_el == 8 }">
          <a>
            Thème des documents
            <!-- <i
              class="fa fa-caret-right caret-right caret-right8"
              style="font-size: 2rem;"
            ></i>-->
          </a>
        </li>
      </ul>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active_el: 0,
      myStyle: {
        backgroundColor: "#f7f8fb"
      }
    };
  },
  methods: {
    activate: function(el) {
      this.active_el = el;
    }
  }
};
</script>

<style>
.navBar {
  /* background-color: #e5e5e5 !important; */
  margin-top: 2.5rem;
  /* position: fixed; */
  margin-left: 10rem;
  overflow-y: scroll;
  width: 20rem;
  height: 35.5rem;
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

.SideBar ul li.active a {
  color: #000;
  font-weight: bolder;
  font-family: "Gilroy" sans-serif;
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

.sidebar-nav li:active,
.sidebar-nav li:focus {
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

/* Icons Style */
.caret-right {
  margin-left: -10.6rem;
  margin-top: 5px;
  color: #2262c6;
  font-size: 8rem;
  position: absolute;
}

.caret-right0 {
  margin-left: -11rem;
}

/* .caret-right1 {
  margin-left: -7.6rem;
}

.caret-right2 {
  margin-left: -8.7rem;
}

.caret-right3 {
  margin-left: -7.8rem;
}

.caret-right4 {
  margin-left: -13.7rem;
}

.caret-right5 {
  margin-left: -12.7rem;
}

.caret-right6 {
  margin-left: -11.3rem;
}

.caret-right7 {
  margin-left: -10.9rem;
}

.caret-right8 {
  margin-left: -14.6rem;
} */
/* End Icons Style */

.navBar::-webkit-scrollbar {
  width: 3px;
  background-color: #f0f0f8;
}

.navBar::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #5b84c3;
}
.navBar::-webkit-scrollbar-track-piece:end {
  background: transparent;
  margin-bottom: 13rem;
}

.navBar::-webkit-scrollbar-track-piece:start {
  background: transparent;
  margin-top: 30px;
}
</style>