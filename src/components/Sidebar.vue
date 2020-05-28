<template>
  <!-- <div class="s-layout body-row"> -->
  <!-- Sidebar -->
  <div class="s-layout__sidebar">
    <a class="s-sidebar__trigger" href="#0">
      <i class="fa fa-bars"></i>
    </a>

    <nav class="s-sidebar__nav">
      <ul class="sidenav--list">
        <li class="sidenav--list__item">
          <a class="s-sidebar__nav-link" href="#0">
            <img class="sidenav-button__icon" src="../assets/img/11.png" alt />
            <em>Clients</em>
          </a>
        </li>
        <li class="sidenav--list__item">
          <a class="s-sidebar__nav-link" href="#0">
            <img class="sidenav-button__icon" src="../assets/img/21.png" alt />
            <em>Sociétés</em>
          </a>
        </li>
        <li class="sidenav--list__item">
          <a class="s-sidebar__nav-link" href="#0">
            <img class="sidenav-button__icon" src="../assets/img/31.png" alt />
            <em>Devis</em>
          </a>
        </li>
        <li class="sidenav--list__item">
          <a class="s-sidebar__nav-link" href="#0">
            <img class="sidenav-button__icon" src="../assets/img/41.png" alt />
            <em>Factures</em>
          </a>
        </li>
        <li class="sidenav--list__item">
          <a class="s-sidebar__nav-link" href="#0">
            <img class="sidenav-button__icon" src="../assets/img/51.png" alt />
            <em>Opportunités</em>
          </a>
        </li>
        <li class="sidenav--list__item">
          <a class="s-sidebar__nav-link" href="#0">
            <img class="sidenav-button__icon" src="../assets/img/61.png" alt />
            <em>Paramétres</em>
          </a>
        </li>
        <li class="sidenav--list__item">
          <a class="s-sidebar__nav-link" href="#0">
            <img class="sidenav-button__icon" src="../assets/img/71.png" alt />
            <em>Feedback</em>
          </a>
        </li>
        <li class="sidenav--list__item sign-out">
          <a class="s-sidebar__nav-link" href="#0">
            <img class="sidenav-button__icon" src="../assets/img/81.png" alt />
            <em>Déconnexion</em>
          </a>
        </li>
      </ul>
    </nav>
    <main class="s-layout__content"></main>
  </div>

  <!-- Content -->
  <!-- </div> -->

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
  font-family: "Josefin Sans", sans-serif;
}
/* Primary Styles */
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  font-size: 1em;
  color: #333;
}

h1 {
  font-size: 1.4em;
}

em {
  font-style: normal;
}

a {
  text-decoration: none;
  color: inherit;
}
img {
  position: relative;
  left: 22%;
  top: 20px;
}
/* Layout */
#body-row {
  margin-left: 0;
  margin-right: 0;
}

.s-layout {
  display: flex;
  width: 100%;
  min-height: 100vh;
}


.s-layout__content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}

/* Sidebar */
.s-sidebar__trigger {
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4em;
  background: #2262c6;
}

.s-sidebar__trigger > i {
  display: inline-block;
  margin: 1.5em 0 0 1.5em;
  color: #ffffff;
}

.s-sidebar__nav {
  position: fixed;
  top: 8em;
  border-radius: 0px 121px 0px 0px;
  left: -15em;
  overflow: hidden;
  transition: all 0.3s ease-in;
  width: 15em;
  height: 100%;
  background: #2262c6;
  color: rgb(255, 255, 255);
}

.s-sidebar__nav .s-layout {
  position: fixed;
}

.s-sidebar__nav:focus,
.s-sidebar__trigger:focus + .s-sidebar__nav {
  left: 0;
}
/* .s-sidebar__nav ul {
  position: absolute;
  top: 4em;
  left: 0;
  margin: 0;
  padding: 0;
  width: 15em;
} */

/* .s-sidebar__nav ul li {
  width: 100%;
} */


.s-sidebar__nav-link {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 3.5em;
}

.s-sidebar__nav-link em {
  position: absolute;
  top: 64%;
  left: 4em;
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
  margin-top: 5rem;
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

  /* .s-sidebar__nav:hover,
  .s-sidebar__nav:focus,
  .s-sidebar__trigger:hover + .s-sidebar__nav,
  .s-sidebar__trigger:focus + .s-sidebar__nav {
    width: 15em;
  } */
}

@media (min-width: 68em) {
  .s-layout__content {
    margin-left: 15em;
  }

  /* Sidebar */
  .s-sidebar__trigger {
    display: none;
  }

  .s-sidebar__nav {
    width: 17em;
  }

  img {
    position: relative;
    left: 9%;
    top: 20px;
  }
}
</style>
