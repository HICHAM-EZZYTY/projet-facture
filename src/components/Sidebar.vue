<template>

<div class="s-layout">
    <div class="s-layout__sidebar">
      <nav class="s-sidebar__nav">
        <ul>
          <li>
            <router-link class="s-sidebar__nav-link" to="/client">
              <img src="../assets/img/11.png" alt />
              <em>Clients</em>
            </router-link>
          </li>
          <li>
            <router-link class="s-sidebar__nav-link" to="/client">
              <img src="../assets/img/21.png" alt />
              <em>Sociétés</em>
            </router-link>
          </li>
          <li>
            <router-link class="s-sidebar__nav-link" to="/devis">
              <img src="../assets/img/31.png" alt />
              <em>Devis</em>
            </router-link>
          </li>
          <li>
            <router-link class="s-sidebar__nav-link" to="/facture">
              <img src="../assets/img/41.png" alt />
              <em>Factures</em>
            </router-link>
          </li>
          <li>
            <router-link class="s-sidebar__nav-link" to="/OP">
              <img src="../assets/img/51.png" alt />
              <em>Opportunités</em>
            </router-link>
          </li>
          <li>
            <router-link class="s-sidebar__nav-link" to="/settings">
              <img src="../assets/img/61.png" alt />
              <em>Paramétres</em>
            </router-link>
          </li>
          <li>
            <router-link class="s-sidebar__nav-link" to="/feedback">
              <img src="../assets/img/71.png" alt />
              <em>Feedback</em>
            </router-link>
          </li>
          <li class="sidenav--list__item sign-out">
            <router-link class="s-sidebar__nav-link" to="/logout">
              <img class="sidenav-button__icon" src="../assets/img/81.png" alt />
              <em>Déconnexion</em>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style scoped>
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
body {
  font-family: 'Gilroy-Bold';
  font-size: 1em;
  color: #333;
}
h1 {
  font-size: 1.4em;
}
em {
  font-style: normal;
  font-family: 'Gilroy-Bold';
}
a {
  text-decoration: none;
  color: inherit;
}
img {
  position: relative;
  left: 9%;
  top: 20px;
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
  width: 4em;
  height: 610px;
  background: #2262c6;
  color: rgb(255, 255, 255);
}
.s-sidebar__nav:hover,
.s-sidebar__nav:focus,
.s-sidebar__trigger:focus + .s-sidebar__nav,
.s-sidebar__trigger:hover + .s-sidebar__nav {
  left: 0;
}
.s-sidebar__nav ul {
  position: absolute;
  top: 4em;
  left: 0;
  margin: 0;
  padding: 0;
  width: 15em;
}
.s-sidebar__nav ul li {
  width: 100%;
  height: 32px;
}
.s-sidebar__nav-link {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 4em;
  top: 3em;
}
.s-sidebar__nav-link em {
  position: absolute;
  top: 50%;
  left: 5em;
  transform: translateY(-50%);
}
.s-sidebar__nav-link:hover {
  background: rgb(253, 253, 253);
}
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
  /* margin-top: 5rem; */
}
.sidenav--list li a:hover {
  text-decoration: none;
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
  border-left: rgb(117, 117, 117) 2px solid;
}
/* Mobile First */
@media (min-width: 42em) {
  .s-layout__content {
    margin-left: 4em;
  }
  /* Sidebar */
  .s-sidebar__trigger {
    width: 4em;
  }
  .s-sidebar__nav {
    width: 4em;
    left: 0;
  }
  img {
    position: relative;
    left: 9%;
    top: 20px;
  }
  .s-sidebar__nav:hover,
  .s-sidebar__nav:focus,
  .s-sidebar__trigger:hover + .s-sidebar__nav,
  .s-sidebar__trigger:focus + .s-sidebar__nav {
    width: 15em;
  }
}
@media (min-width: 68em) {
  .s-layout__content {
    /* margin-left: 14em; */
  }
  /* Sidebar */
  .s-sidebar__trigger {
    display: none;
  }
  .s-sidebar__nav {
    width: 14em;
  }
  img {
    position: relative;
    left: 14%;
    top: 20px;
  }
  .s-sidebar__nav ul {
    top: 0.29em;
  }
}
@media (min-width: 670px) {
  img {
    position: relative;
    left: 9%;
    top: 20px;
  }
}
</style>
