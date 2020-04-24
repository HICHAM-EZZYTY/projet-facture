<template>
  <!-- Bootstrap row -->
  <div class="row" id="body-row">
    <!-- Sidebar -->
    <div id="sidebar-container" class="sidebar-expanded d-none d-md-block">
      <!-- d-* hiddens the Sidebar in smaller devices. Its itens can be kept on the Navbar 'Menu' -->
      <!-- Bootstrap List Group -->

      <ul class="sidenav--list">
        <li class="sidenav--list__item has-childlist active">
          <a href="#" class="expandable-box sidenav-button">
            <i class="sidenav-button__icon fa fa-th-large"></i>
            <span class="sidenav-button__text">Clients</span>
          </a>
        </li>
        <li class="sidenav--list__item">
          <a href="#" class="expandable-box sidenav-button">
            <i class="sidenav-button__icon fa fa-user"></i>
            <span class="sidenav-button__text">Sociétés</span>
          </a>
        </li>
        <li class="sidenav--list__item has-childlist">
          <a href="#" class="expandable-box sidenav-button">
            <i class="sidenav-button__icon fas fa-folder-open"></i>
            <span class="sidenav-button__text">Devis</span>
          </a>
        </li>
        <li class="sidenav--list__item">
          <a href="#" class="expandable-box sidenav-button">
            <i class="sidenav-button__icon fas fa-wallet"></i>
            <span class="sidenav-button__text">Factures</span>
          </a>
        </li>
        <li class="sidenav--list__item">
          <a href="#" class="expandable-box sidenav-button">
            <i class="sidenav-button__icon fa fa-signal"></i>
            <span class="sidenav-button__text">Opportunités</span>
          </a>
        </li>
        <li class="sidenav--list__item">
          <a href="#" class="expandable-box sidenav-button">
            <i class="sidenav-button__icon fa fa-cog" aria-hidden="true"></i>
            <span class="sidenav-button__text">Paramétres</span>
          </a>
        </li>
        <li class="sidenav--list__item">
          <a href="#" class="expandable-box sidenav-button">
            <i class="sidenav-button__icon fa fa-comments" aria-hidden="true"></i>
            <span class="sidenav-button__text">Feedback</span>
          </a>
        </li>
      </ul>

      <!-- <ul class="sidebar-nav">
        <li class="active">
          <a href="#">
            <span class="fa-stack fa-lg pull-left">
              <i class="fa fa-th-large fa-stack-1x"></i>
            </span> Clients
          </a>
        </li>
        <li>
          <a href="#">
            <span class="fa-stack fa-lg pull-left">
              <i class="fa fa-flag fa-stack-1x"></i>
            </span> Sociétés
          </a>
        </li>
        <li>
          <a href="#">
            <span class="fa-stack fa-lg pull-left">
              <i class="fa fa-cloud-download fa-stack-1x"></i>
            </span>Devis
          </a>
        </li>
        <li>
          <a href="#">
            <span class="fa-stack fa-lg pull-left">
              <i class="fa fa-cart-plus fa-stack-1x"></i>
            </span>Factures
          </a>
        </li>
        <li>
          <a href="#">
            <span class="fa-stack fa-lg pull-left">
              <i class="fa fa-signal fa-stack-1x"></i>
            </span>Opportunités
          </a>
        </li>
        <li>
          <a href="#">
            <span class="fa-stack fa-lg pull-left">
              <i class="fa fa-10x fa-address-book"></i>
              <i class="fa fa-wrench fa-stack-1x"></i>
            </span>Paramétres
          </a>
        </li>
      </ul>-->
      <!-- List Group END-->
    </div>

    <!-- sidebar-container END -->
  </div>
  <!-- body-row END -->
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style scoped>
#body-row {
  margin-left: 0;
  margin-right: 0;
}
#sidebar-container {
  width: 280px;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  /* height: 100vh; */
  left: 0;
  min-height: 100vh;
  padding: 0;
  /* z-index: 1000; */
  position: fixed;
  overflow-y: auto;
  background-color: #2262c6;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  border-radius: 0px 110px 0px 0;
}

.sidenav--list {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 100px;
}
.sidenav--list .sidenav-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  color: white;
  margin-top: 10px;
}

.sidenav--list .sidenav-button__text {
  margin-right: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sidenav--list .sidenav-button__icon {
  margin-right: 8px;
  margin-left: 20px;
  padding: 15px;
  line-height: 1.1;
}

/* Sidebar Styles */

.sidenav--list li a:hover {
  text-decoration: none;
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
  border-left: rgb(117, 117, 117) 2px solid;
}

.sidenav--list li a:active,
.sidenav--list li a:focus {
  text-decoration: none;
}

.sidenav--list > .sidebar-brand {
  height: 65px;
  font-size: 18px;
  line-height: 60px;
}

/* small */

/* @media (min-width: 768px) {
  #wrapper {
    padding-left: 250px;
  }
  #page-content-wrapper {
    padding: 20px;
    position: relative;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }
} */
/* Sidebar sizes when expanded and expanded */

/* Menu item*/

/* Submenu item*/

/* Closed submenu icon */
</style>