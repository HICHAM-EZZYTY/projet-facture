<template>
  <div class="s-layout__sidebar ">
    <nav class="s-sidebar__nav ">
      <ul>
        <li>
          <router-link class="s-sidebar__nav-link" to="/client">
            <img src="../assets/img/menu1.svg" alt />
            <em>Clients</em>
          </router-link>
        </li>
        <li>
          <router-link  class="s-sidebar__nav-link" to="/client/new">
            <img src="../assets/img/menu1.svg" alt />
            <em>New client</em>
          </router-link>
        </li>
        <li>
          <router-link class="s-sidebar__nav-link" to="/societe">
            <img src="../assets/img/menu2.svg" alt />
            <em>Sociétés</em>
          </router-link>
        </li> <li>
          <router-link class="s-sidebar__nav-link" to="/societe/new">
            <img src="../assets/img/menu2.svg" alt />
            <em>New Société</em>
          </router-link>
        </li>
        <li>
          <router-link class="s-sidebar__nav-link" to="/devis">
            <img src="../assets/img/menu3.svg" alt />
            <em>Devis</em>
          </router-link>
        </li>
         <li>
          <router-link class="s-sidebar__nav-link" to="/devis/new">
            <img src="../assets/img/menu3.svg" alt />
            <em>New Devis</em>
          </router-link>
        </li>
        <li>
          <router-link class="s-sidebar__nav-link" to="/Facture">
            <img src="../assets/img/menu4.svg" alt />
            <em>Factures</em>
          </router-link>
        </li>
        <li>
          <router-link class="s-sidebar__nav-link" to="/Facture/new">
            <img src="../assets/img/menu4.svg" alt />
            <em>New Factures</em>
          </router-link>
        </li>
        
        <li>
          <router-link class="s-sidebar__nav-link" to="/settings">
            <img src="../assets/img/menu6.svg" alt />
            <em>Paramétres</em>
          </router-link>
        </li>
        
        <li @click="logout" class="sidenav--list__item sign-out">
          <router-link class="s-sidebar__nav-link" to="/logout" @click="logout">
            <img @click="logout" class="sidenav-button__icon" src="../assets/img/menu8.svg" alt />
            <em @click="logout" >Déconnexion</em>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
          .then(() => {
            this.$router.push('/gate/login')
          })
      }
    },
};
</script>

<style scoped lang="scss">
@import "/../scss/main.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: "Gilroy-UltraLightItalic";
}
/* Primary Styles */
*,
*::before,
*::after {
  box-sizing: border-box;
}

h1 {
  font-size: 1.4em;
}
em {
  font-style: normal;
  font-family: "Gilroy-Bold";
}
a {
  text-decoration: none;
  color: inherit;
}
img {
  position: relative;
  left: 16%;
  top: 17px;
  width: 14px;
}
.s-layout {
  height: 80vh;
}
.s-layout__content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}
.s-sidebar__nav {
  position: absolute;
  top: 7.38rem;
  border-radius: 0px 76px 0px 0px;
  left: 0em;
  overflow: hidden;
  transition: all 0.3s ease-in;
  width: 14em;
  height: 84.7%;
  background: #2262c6;
  color: rgb(255, 255, 255);
}
a:hover {
  color: white;
  text-decoration: none;
  cursor: pointer;
}
// .s-sidebar__nav:hover,
// .s-sidebar__nav:focus,
// .s-sidebar__trigger:focus + .s-sidebar__nav,
// .s-sidebar__trigger:hover + .s-sidebar__nav {
//   left: 0;
// }
.s-sidebar__nav ul {
  position: absolute;
  top: 0.8em;
  left: 16px;
  margin: 0;
  padding: 0;
  width: 15em;
}
li {
  width: 100%;
  height: 2.5em;
}

.s-sidebar__nav-link {
  position: relative;
  display: inline-block;
  font-size: $bd;
  width: 100%;
  height: 4em;
  top: 3em;
  right: 36px;
  font-size: 13px;
  opacity: 90%;
}
.s-sidebar__nav-link em {
  position: absolute;
  top: 50%;
  left: 5em;
  transform: translateY(-50%);
}
// .s-sidebar__nav-link:hover {
//   background: rgb(253, 253, 253);
// }
.s-sidebar__nav-link > i {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 4em;
  height: 4em;
}
.s-sidebar__nav-link > i::before {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.sidenav--list {
  list-style: none;
  padding: 0;
  margin-left: 1rem;
  margin-top: 4rem;
}
.sidenav--list .sidenav-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  color: white;
  margin-top: 10px;
}
.sign-out {
  margin-top: 122px;
  em {
    line-height: 2em;
    border-bottom: 0.6px solid #fffcfc;
  }
}
#mn {
  width: 11px;
}
// .sidenav--list li a:hover {
//   text-decoration: none;
//   color: #fff;
//   background: rgba(255, 255, 255, 0.2);
//   border-left: rgb(117, 117, 117) 2px solid;
// }

@media (max-width: 1088px) {
  .s-sidebar__nav {
    width: 14em;
  }
}

@media (max-width: 1020px) {
  .s-sidebar__nav {
    width: 10em;
  }
}

@media (max-width: 820px) {
  .s-sidebar__nav {
    width: 8em;
  }
  .s-sidebar__nav ul {
    left: 4px;
  }
}

@media (max-width: 740px) {
  .s-sidebar__nav {
    width: 4em;
  }
  .s-sidebar__nav ul {
    left: 13px;
  }
  .s-sidebar__nav ul li {
    height: 35px;
  }
  em {
    display: none;
  }
  img {
    width: 18px;
  }
  .sidenav-button__icon {
    width: 22px;
  }
  #mn {
    width: 16px;
  }
}


/* Mobile First */
@media (min-width: 42em) {
  // .s-layout__content {
  //   margin-left: 4em;
  // }
  /* Sidebar */
  // .s-sidebar__trigger {
  //   width: 4em;
  // }
  // .s-sidebar__nav {
  //   width: 4em;
  //   left: 0;
  // }
  // img {
  //   position: relative;
  //   left: 9%;
  //   top: 20px;
  // }
  // .s-sidebar__nav:hover,
  // .s-sidebar__nav:focus,
  // .s-sidebar__trigger:hover + .s-sidebar__nav,
  // .s-sidebar__trigger:focus + .s-sidebar__nav {
  //   width: 15em;
  // }
}
@media (min-width: 68em) {
  // .s-layout__content {
  //    margin-left: 14em;
  // }
  /* Sidebar */
  // .s-sidebar__trigger {
  //   display: none;
  // }
  // .s-sidebar__nav {
  //   width: 14em;
  // }
  // img {
  //   position: relative;
  //   left: 14%;
  //   top: 20px;
  // }
  // .s-sidebar__nav ul {
  //   top: 12px;
  //   left: 16px;
  // }
}
@media (min-width: 670px) {
  // img {
  //   position: relative;
  //   left: 16%;
  //   top: 17px;
  //   width: 14px;
  // }
}
</style>
