<template>
  
    <ul class="sidebar">
      <li class="sidebar-item">
    
        <router-link 
          :style=" activeRoute('Preferences') == true ?  'color:#1757b7;' : '' "
          class="sidebar-item--link" :to="{ name: 'Preferences' }">
          <i v-show="activeRoute('Preferences')" class="fa fa-caret-right"></i>
          Préférences
        </router-link>
    
        <ul class="sidebar-submenu">
        
            <li class="sidebar-submenu">
              <router-link
              :style=" activeRoute('DevisPreferences') == true ?  'color:#1757b7;' : '' "
              class="sidebar-submenu-item--link" :to="{ name: 'DevisPreferences' }">
              <i v-show="activeRoute('DevisPreferences')" class="fa fa-caret-right"></i>
                  Devis
              </router-link>
            </li>
        
            <li class="sidebar-submenu">
              <router-link
              :style=" activeRoute('FacturePreferences') == true ?  'color:#1757b7;' : '' "
              class="sidebar-submenu-item--link" :to="{ name: 'FacturePreferences' }">
              <i v-show="activeRoute('FacturePreferences')" class="fa fa-caret-right"></i>
                  Factures
              </router-link>
            </li>
        
            <li class="sidebar-submenu">
              <router-link 
              :style=" activeRoute('AvoirePreferences') == true ?  'color:#1757b7;' : '' "
              class="sidebar-submenu-item--link" :to="{ name: 'AvoirePreferences' }">
              <i v-show="activeRoute('AvoirePreferences')" class="fa fa-caret-right"></i>
                  Avoirs
              </router-link>
            </li>
        
            <li class="sidebar-submenu">
              <router-link 
              :style=" activeRoute('FactureAcomptePreferences') == true ?  'color:#1757b7;' : '' "
              class="sidebar-submenu-item--link" :to="{ name: 'FactureAcomptePreferences' }">
              <i v-show="activeRoute('FactureAcomptePreferences')" class="fa fa-caret-right"></i>
                Factures d'acompte
                </router-link>
            </li>
        
            <li class="sidebar-submenu">
              <router-link 
              :style=" activeRoute('AvoireAcomptePreferences') == true ?  'color:#1757b7;' : '' "
              class="sidebar-submenu-item--link" :to="{ name: 'AvoireAcomptePreferences' }">
              <i v-show="activeRoute('AvoireAcomptePreferences')" class="fa fa-caret-right"></i>
                  Avoirs d'acompte
              </router-link>
            </li>
        
            <li class="sidebar-submenu">
              <router-link 
              :style=" activeRoute('NumerotationPreferences') == true ?  'color:#1757b7;' : '' "
              class="sidebar-submenu-item--link" :to="{ name: 'NumerotationPreferences' }">
                <i v-show="activeRoute('NumerotationPreferences')" class="fa fa-caret-right"></i>
                Numérotation
              </router-link>
            </li>
        
        </ul>
      </li>
      
      <li class="sidebar-item">
        <router-link 
        :style=" activeRoute('TypeArticles') == true ?  'color:#1757b7;' : '' "
        class="sidebar-item--link" :to="{ name: 'TypeArticles' }">
          <i v-show="activeRoute('TypeArticles')" class="fa fa-caret-right"></i>
          Types d'article      
        </router-link>
      </li>

      <!-- 
        <li class="sidebar-item">
        <router-link 
        :style=" activeRoute('TypeArtidcles1') == true ?  'color:#1757b7;' : '' "
        :to="{ name: 'TypeArticles' }" class="sidebar-item--link">
          <i v-show="activeRoute('TypeArtidcles')" class="fa fa-caret-right"></i>
          Thème des documents                
        </router-link>
      
      </li>
      -->
      <li class="sidebar-item">
        <router-link 
          :style=" activeRoute('UserContact') == true ?  'color:#1757b7;' : '' "
          :to="{ name: 'UserContact' }" class="sidebar-item--link">
          <i v-show="activeRoute('UserContact')" class="fa fa-caret-right"></i>
          Coordonnées
        </router-link>
      </li>

      <li class="sidebar-item">
        <router-link 
        :style=" activeRoute('BackAccounts') == true ?  'color:#1757b7;' : '' "
        :to="{ name: 'BackAccounts' }" class="sidebar-item--link">
          <i v-show="activeRoute('BackAccounts')" class="fa fa-caret-right"></i>
            Comptes Bancaires                
        </router-link>
      </li>

      <li class="sidebar-item">
        <router-link 
        :style=" activeRoute('User') == true ?  'color:#1757b7;' : '' "
        :to="{ name: 'User' }" class="sidebar-item--link">
          <i v-show="activeRoute('User')" class="fa fa-caret-right"></i> Compte                
        </router-link>
      </li>

      <li class="sidebar-item">
        <router-link
          :style=" activeRoute('DeleteAccount') == true ?  'color:#1757b7; ' : '' "
          :to="{ name: 'DeleteAccount' }" class="sidebar-item--link">
          <i v-show="activeRoute('DeleteAccount')" class="fa fa-caret-right"></i>
          Supprimer mon compte              
        </router-link>
      </li>

      <li class="sidebar-item">
        <router-link 
        :style=" activeRoute('Home') == true ?  'color:#1757b7; ' : '' " 
        :to="{ name: 'Home' }" class="sidebar-item--link">
          <i class="fa fa-arrow-left"></i>
          Retour
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
  .fa{
    color: #1757b7; 
  }
  .fa-arrow-left{
    padding: 0px 4px 0px 0px;
  }
  .fa-caret-right{
    font-size: 20px;
    padding: 0px 10px 0px 0px ;
  }
  .fa-caret-right:hover{
    font-size: 20px;
    padding: 0px 10px 0px 0px ;
  }

  .sidebar{
    margin-top: 1em;
    list-style-type: none;
    
    &-item{
      line-height: 3em;
      &--link{
        color: gray;
      }
      & a:hover{
        color: #1757b7;
        text-decoration: none; 
      }
      .sidebar-submenu{
        list-style-type: none;
        &-item{
          &--link{
            color: gray;
          }
        } 
      }
    }
  }

</style>