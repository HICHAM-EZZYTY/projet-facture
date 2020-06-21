<template>
  
    <ul class="sidebar">
      <li class="sidebar-item">
    
        <router-link class="sidebar-item--link" :to="{ name: 'Preferences' }">
        <i v-show="activeRoute('Preferences')" class="fa fa-caret-right"></i>
            Préférences
        </router-link>
        <ul class="sidebar-submenu">
            <li class="sidebar-submenu">
              <router-link class="sidebar-submenu-item--link" :to="{ name: 'DevisPreferences' }">
              <i v-show="activeRoute('DevisPreferences')" class="fa fa-caret-right"></i>
                  Devis
              </router-link>
            </li>
            <li class="sidebar-submenu">
              <router-link class="sidebar-submenu-item--link" :to="{ name: 'FacturePreferences' }">
              <i v-show="activeRoute('FacturePreferences')" class="fa fa-caret-right"></i>
                  Factures
              </router-link>
            </li>
            <li class="sidebar-submenu">
              <router-link class="sidebar-submenu-item--link" :to="{ name: 'AvoirePreferences' }">
              <i v-show="activeRoute('AvoirePreferences')" class="fa fa-caret-right"></i>
                  Avoirs
              </router-link>
            </li>
            <li class="sidebar-submenu">
              <router-link class="sidebar-submenu-item--link" :to="{ name: 'FactureAcomptePreferences' }">
              <i v-show="activeRoute('FactureAcomptePreferences')" class="fa fa-caret-right"></i>
                Factures d'acompte
                </router-link>
            </li>
            <li class="sidebar-submenu">
              <router-link class="sidebar-submenu-item--link" :to="{ name: 'AvoireAcomptePreferences' }">
              <i v-show="activeRoute('AvoireAcomptePreferences')" class="fa fa-caret-right"></i>
                  Avoirs d'acompte
              </router-link>
            </li>
            <li class="sidebar-submenu">
              <router-link class="sidebar-submenu-item--link" :to="{ name: 'NumerotationPreferences' }">
              <i v-show="activeRoute('NumerotationPreferences')" class="fa fa-caret-right"></i>
                  Numérotation
              </router-link>
            </li>
        </ul>
      </li>
      
      <li class="sidebar-item">
        <router-link class="sidebar-item--link" :to="{ name: 'TypeArticles' }">
        <i v-show="activeRoute('TypeArticles')" class="fa fa-caret-right"></i>
          Types d'article
          
        </router-link>
      </li>
      <li class="sidebar-item">
      <router-link :to="{ name: 'TypeArticles' }" class="sidebar-item--link">
      <i v-show="activeRoute('TypeArtidcles')" class="fa fa-caret-right"></i>
          Thème des documents                
        </router-link>
      </li>
      <li class="sidebar-item">
      <router-link :to="{ name: 'TypeArticles' }" class="sidebar-item--link">
      <i v-show="activeRoute('TypeArtidcles')" class="fa fa-caret-right"></i>
          Coordonnées
        </router-link>
      </li>
      <li class="sidebar-item">
      <router-link :to="{ name: 'BackAccounts' }" class="sidebar-item--link">
      <i v-show="activeRoute('BackAccounts')" class="fa fa-caret-right"></i>
        Comptes Bancaires                
        </router-link>
      </li>
      <li class="sidebar-item">
      <router-link :to="{ name: 'User' }" class="sidebar-item--link">
        <i v-show="activeRoute('User')" class="fa fa-caret-right"></i> Compte                
      </router-link>
      </li>
      <li class="sidebar-item">
      <router-link :to="{ name: 'DeleteAccount' }" class="sidebar-item--link">
      <i v-show="activeRoute('DeleteAccount')" class="fa fa-caret-right"></i>
        Supprimer mon compte              
        </router-link>
      </li>
      <li class="sidebar-item">
      <router-link :to="{ name: 'Home' }" class="sidebar-item--link">
      <i v-show="activeRoute('Home')" class="fa fa-caret-right"></i>
      Aide            
        </router-link>
      </li>
    </ul>
</template>

<script>
export default {
  data() {
    return {
      routes: [],
      devisIcon: true,
      factureIcon : false 
    };
  },
  methods: {
    activeRoute: function (routeName) {
      return (this.$route.name == routeName);
    }
  }
};
</script>

<style lang="scss" scoped>
  .fa-caret-right{
    color: #1757b7; 
    font-size: 20px;
    padding: 0px 10px 0px 0px ;
  }
  .fa-caret-right:hover{
    color: #1757b7; 
    font-size: 20px;
    padding: 0px 10px 0px 0px ;
  }

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