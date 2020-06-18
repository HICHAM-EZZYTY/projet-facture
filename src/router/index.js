import Vue from "vue";
import VueRouter from "vue-router";

//home
import HomePage from "../views/HomePage.vue";

  // Devis 
  import Devis from "../views/subLayouts/Devis.vue";
    import CreateDevis from "./../components/Devis/createDevis.vue";
    import listDevis from "./../components/Devis/listDevis.vue";

  //clients
  import Clients from "../views/subLayouts/Clients.vue";
    import addClient from "../components/client/addClient.vue";
    import cards from "../components/Clients-page/cards.vue";

  //Facture
  import factureAcompte from "../components/setings/factureAcompte.vue";

  //Avoire
  import avoirAcompte from "../components/setings/avoirAcompte.vue";

  //settings
  import homeSeting from "../views/setings/homeSeting.vue";
    import preference from "../components/setings/preference.vue";
    import TypeArticles from './../components/setings/TypeArticles.vue'
    import devisRef from "../components/setings/devisRef.vue";
    import factureRef from "../components/setings/factureRef.vue";
    import avoirRef from "../components/setings/avoirRef.vue";
    import numerotation from "../components/setings/numerotation.vue";

  //register/login
  import GateLayout from "../views/subLayouts/GateLayout.vue";
    import Register from "../views/Authentification/Signup.vue";
    import Login from "../views/Authentification/Login.vue";


  // testing for fixing sideBar

  // import Sidebar from "../components/Sidebar.vue";
  // import Navbar from "../components/Navbar.vue";



// comments
// import listClient from "../components/client/listClient.vue";
// import signupThree from "../components/Authentification/signupThree.vue";
// import singupFour from "../components/Authentification/singupFour.vue";
// import sigupfive from "../components/Authentification/signupfive.vue";

/**
 * End Of Imports
 */

Vue.use(VueRouter);

const routes = [
  {

    path: "/",
    name: "Home",
    component: HomePage,
    children: [
      {
        path: "devis",
        // name: "Devis",
        component: Devis,
         children: [
          {
            path: "",
            name: "Devis",
            component: listDevis,
          },
          {
            path: "new",
            name: "NewDevis",
            component: CreateDevis

          }
        ]
      },
      {
        path: "client",
        // name: "Client",
        component: Clients,
        children: [
          {
            path: "",
            name: "Client",
            component: cards,
          },
          {
            path: 'new',
            name: "NewClient",
            component: addClient
          }, 
          {
            path: ":id", 
            name: "SingleClient",
          }
        ]
      },
      {
        path: "facture",
        name: "Facture",

      },
      {
        path: 'facture/new',
        name: "NewFacture"
      },


      {
        path: "avoire",
        name: "Avoire"
      },
      {
        path: 'avoire/new',
        name: "NewAvoire"
      },

      {
        path: "societe",
        name: "Societe",

      },
      {
        path: 'Societe/new',
        name: "NewSociete"
      },

      
    ]
  },
  

  // parameters 
  {
    path: "/settings",
    name: "Settings",
    component: homeSeting,
    redirect: { name: "Preferences" },
    children: [
      {
        path: "preferences",
        name: "Preferences",
        component: preference,
      },
      {
        path: "preferences/devis",
        name: "DevisPreferences",
        component: devisRef,
      },
      {
        path: "preferences/facture",
        name: "FacturePreferences",
        component: factureRef,
      },
      {
        path: "preferences/avoire",
        name: "AvoirePreferences",
        component: avoirRef
      },
      {
        path: "preferences/avoire-acompte",
        name: "AvoireAcomptePreferences",
        component: avoirAcompte
      },
      {
        path: "preferences/facture-acompte",
        name: "FactureAcomptePreferences",
        component: factureAcompte
      },
      {
        path: "preferences/numerotation",
        name: "NumerotationPreferences",
        component: numerotation
      },
      // articles 
      {
        path: "type-articles",
        name: "TypeArticles",
        component: TypeArticles,
      },
      {
        path: "bank-accounts",
        name: "BackAccounts",
      },
      {
        path: "user-contact",
        name: "UserContact",
      },
      {
        path: "user",
        name: "User",
      },
      {
        path: "delete-account",
        name: "DeleteAccount",
      }
    ]
  },


  {
    path: "/Gate",
    name: "Gate",
    component: GateLayout,
    redirect: "gate/login",
    meta: {
      requiresAuth: false
    },
    children: [
      {
        path: "login",
        name: "Login",
        component: Login
      },
      {
        path: "signup",
        name: "Signup",
        component: Register
      }
    ]
  },

  {
    path: "*",
    name: "NotFound",
    redirect: { name: "Home" }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
