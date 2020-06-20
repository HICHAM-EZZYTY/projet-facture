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

</style>