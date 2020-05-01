<template>
<div class="s-layout">
<!-- Sidebar -->
<div class="s-layout__sidebar">
  <a class="s-sidebar__trigger" href="#0">
     <i class="fa fa-bars"></i>
  </a>

  <nav class="s-sidebar__nav">
     <ul>
        <li>
           <a class="s-sidebar__nav-link" href="#0">
              <img src="../assets/img/11.png" alt=""><em>Clients</em>
           </a>
        </li>
        <li>
           <a class="s-sidebar__nav-link" href="#0">
             <img src="../assets/img/21.png" alt=""><em>Sociétés</em>
           </a>
        </li>
        <li>
           <a class="s-sidebar__nav-link" href="#0">
              <img src="../assets/img/31.png" alt=""><em>Devis</em>
           </a>
        </li>
         <li>
           <a class="s-sidebar__nav-link" href="#0">
              <img src="../assets/img/41.png" alt=""><em>Factures</em>
           </a>
        </li> <li>
           <a class="s-sidebar__nav-link" href="#0">
              <img src="../assets/img/51.png" alt=""><em>Opportunités</em>
           </a>
        </li> <li>
           <a class="s-sidebar__nav-link" href="#0">
              <img src="../assets/img/61.png" alt=""><em>Paramétres</em>
           </a>
        </li>
        <li>
           <a class="s-sidebar__nav-link" href="#0">
              <img src="../assets/img/71.png" alt=""><em>Feedback</em>
           </a>
        </li>
        <li>
           <a class="s-sidebar__nav-link" href="#0">
              <img src="../assets/img/81.png" alt=""><em>Déconnexion</em>
           </a>
        </li>
     </ul>
  </nav>
</div>

<!-- Content -->
<main class="s-layout__content">
</main>
</div>
</template>

<script>
export default {

    name: "Sidebar",
    
}
</script>

<style scoped>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: 'Josefin Sans', sans-serif;
}
/* Primary Styles */
*, *::before, *::after {
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
img{
  position: relative;
    left: 22%;
    top: 20px;
}
/* Layout */
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
   background: #2262C6;
}

.s-sidebar__trigger > i {
   display: inline-block;
   margin: 1.5em 0 0 1.5em;
   color: #ffffff;
}

.s-sidebar__nav {
   position: fixed;
    top: 10em;
    border-radius: 0px 121px 0px 0px;
   left: -15em;
   overflow: hidden;
   transition: all .3s ease-in;
   width: 15em;
   height: 100%;
   background: #2262C6;
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
}

.s-sidebar__nav-link {
   position: relative;
   display: inline-block;
   width: 100%;
   height: 4em;
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
   img{
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
      margin-left: 15em;
   }
   
   /* Sidebar */
   .s-sidebar__trigger {
      display: none
   }
   
   .s-sidebar__nav {
      width: 17em;
   }

   img{
  position: relative;
    left: 9%;
    top: 20px;
}
   
   .s-sidebar__nav ul {
      top: 1.3em;
   }
}

</style>