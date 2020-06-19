<template>
  
    <ul class="sidebar">
      <li class="sidebar-item">
    
        <router-link class="sidebar-item--link" :to="{ name: 'Preferences' }">
            Préférences
        </router-link>
        <ul class="sidebar-submenu">
            <li class="sidebar-submenu">
              <router-link class="sidebar-submenu-item--link" :to="{ name: 'DevisPreferences' }">
                  Devis
              </router-link>
            </li>
            <li class="sidebar-submenu">
              <router-link class="sidebar-submenu-item--link" :to="{ name: 'FacturePreferences' }">
                  Factures
              </router-link>
            </li>
            <li class="sidebar-submenu">
              <router-link class="sidebar-submenu-item--link" :to="{ name: 'AvoirePreferences' }">
                  Avoirs
              </router-link>
            </li>
            <li class="sidebar-submenu">
              <router-link class="sidebar-submenu-item--link" :to="{ name: 'FactureAcomptePreferences' }">
                Factures d'acompte
                </router-link>
            </li>
            <li class="sidebar-submenu">
              <router-link class="sidebar-submenu-item--link" :to="{ name: 'AvoireAcomptePreferences' }">
                  Avoirs d'acompte
              </router-link>
            </li>
            <li class="sidebar-submenu">
              <router-link class="sidebar-submenu-item--link" :to="{ name: 'NumerotationPreferences' }">
                  Numérotation
              </router-link>
            </li>
        </ul>
      </li>
      
      <li class="sidebar-item">
        <router-link class="sidebar-item--link" :to="{ name: 'TypeArticles' }">
          Types d'article
          
        </router-link>
      </li>
      <li class="sidebar-item">
          Thème des documents                
      </li>
    </ul>
</template>

<script>
export default {
  data() {
    return {
      // active_el: 0,
      // myStyle: {
      //   backgroundColor: "#f7f8fb"
      // }
    };
  },
  methods: {
  //   activate: function(el) {
  //     this.active_el = el;
  //   }
  }
};
</script>

<style lang="scss" scoped>


  .sidebar{
    margin-top: 1em;
    list-style-type: none;
    
    &-item{
      line-height: 3em;
      &--link{
        color: #9999BA;
      }
      & a:hover{
        color: red;
        text-decoration: none; 
      }
      .sidebar-submenu{
        list-style-type: none;
        &-item{
          &--link{
            color: #9999BA;
          }
        } 
      }
    }
  }

// .navBar {
//   /* background-color: #e5e5e5 !important; */
  
//   overflow-y: scroll;
//   height: 35.5rem;
//   // padding: 0px !important;
//   /* margin-left: 8rem; */
//   border-top-left-radius: 20px;
//   border-bottom-left-radius: 20px;
// }
// /* #wrapper {
//   padding-left: 0;
//   -webkit-transition: all 0.5s ease;
//   -moz-transition: all 0.5s ease;
//   -o-transition: all 0.5s ease;
//   transition: all 0.5s ease;
// } */

// /* #wrapper.toggled {
//   padding-left: 250px;
// } */

// #sidebar-wrapper {
//   z-index: 1000;
//   position: fixed;
//   width: 0;
//   height: 100%;
//   top: 10rem;
//   overflow-y: auto;
//   background: white;
//   transition: all 0.5s ease;
//   border-top-left-radius: 28px;
// }

// /* Sidebar Styles */

// .sidebar-nav {
//   position: absolute;
//   top: 3rem !important;
  
//   margin: 0;
//   padding: 0;
//   left: -14rem;
//   list-style: none;
// }

// .preference {
//   margin-top: -21px;
// }

// .SideBar ul li.active a {
//   color: #000;
//   font-weight: bolder;
//   font-family: "Gilroy" sans-serif;
// }

// .sidebar-nav li {
//   text-indent: 20px;
//   line-height: 40px;
// }

// .sidebar-nav li a {
//   display: block;
//   text-decoration: none;
//   color: #999999;
//   padding: 8px;
// }
// /* 
// .sidebar-nav li a:hover {
//   text-decoration: none;
//   color: #fff;
//   background: red;
// } */

// .sidebar-nav li:active,
// .sidebar-nav li:focus {
//   text-decoration: none;
// }

// .sidebar-nav > .sidebar-brand a:hover {
//   color: black;
//   background: none;
// }

// @media (min-width: 768px) {
//   #wrapper {
//     padding-left: 250px;
//   }

//   #wrapper.toggled {
//     padding-left: 0;
//   }

//   #sidebar-wrapper {
//     width: 250px;
//   }

//   #wrapper.toggled #sidebar-wrapper {
//     width: 0;
//   }

//   #wrapper.toggled {
//     position: relative;
//     margin-right: 0;
//   }
// }

// ul {
//   text-decoration: none;
// }

// /* Icons Style */
// .caret-right {
//   margin-left: -10.6rem;
//   margin-top: 5px;
//   color: #2262c6;
//   font-size: 8rem;
//   position: absolute;
// }

// .caret-right0 {
//   margin-left: -11rem;
// }

// /* .caret-right1 {
//   margin-left: -7.6rem;
// }

// .caret-right2 {
//   margin-left: -8.7rem;
// }

// .caret-right3 {
//   margin-left: -7.8rem;
// }

// .caret-right4 {
//   margin-left: -13.7rem;
// }

// .caret-right5 {
//   margin-left: -12.7rem;
// }

// .caret-right6 {
//   margin-left: -11.3rem;
// }

// .caret-right7 {
//   margin-left: -10.9rem;
// }

// .caret-right8 {
//   margin-left: -14.6rem;
// } */
// /* End Icons Style */

// .navBar::-webkit-scrollbar {
//   width: 3px;
//   background-color: #f0f0f8;
// }

// .navBar::-webkit-scrollbar-thumb {
//   border-radius: 10px;
//   background-color: #5b84c3;
// }
// .navBar::-webkit-scrollbar-track-piece:end {
//   background: transparent;
//   margin-bottom: 13rem;
// }

// .navBar::-webkit-scrollbar-track-piece:start {
//   background: transparent;
//   margin-top: 30px;
// }
</style>