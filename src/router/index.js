import Vue from "vue";
import VueRouter from "vue-router";

// import Devis from "../views/Devis.vue";
// import Devis from "./../views/Devis.vue";
import CreateDevis from "./../components/Devis/createDevis.vue";
// // import listClient from "../components/client/listClient.vue";
// // import addClient from "../components/client/addClient.vue";
import homeSeting from "../views/setings/homeSeting.vue";
import preference from "../components/setings/preference.vue";
// import signupThree from "../components/Authentification/signupThree.vue";
// import singupFour from "../components/Authentification/singupFour.vue";
// import sigupfive from "../components/Authentification/signupfive.vue";
import TypeArticles from './../components/setings/TypeArticles.vue'
import devisRef from "../components/setings/devisRef.vue";
import factureRef from "../components/setings/factureRef.vue";
import avoirRef from "../components/setings/avoirRef.vue";
import factureAcompte from "../components/setings/factureAcompte.vue";
import avoirAcompte from "../components/setings/avoirAcompte.vue";
import numerotation from "../components/setings/numerotation.vue";
import listDevis from "./../components/Devis/listDevis.vue";
import Login from "../views/Authentification/Login.vue";
import HomePage from "../views/HomePage.vue";
import Register from "../views/Authentification/Signup.vue";
import GateLayout from "../views/GateLayout.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
    children: [
      {
        path: "devis",
        name: "Devis",
        component: listDevis,
      },
      {
        path: "devis/new",
        name: "NewDevis",
        component: CreateDevis

      },

      {
        path: "facture",
        name: "Facture",
        children: [
          {
            path: 'new',
            name: "NewFacture"
          }
        ]
      },

      {
        path: "avoire",
        name: "Avoire",
        children: [
          {
            path: 'new',
            name: "NewAvoire"
          }
        ]
      },

      {
        path: "societe",
        name: "Societe",
        children: [
          {
            path: 'new',
            name: "NewSociete"
          }
        ]
      },
    ]
  },
  // parameters 
  {
    path: "/settings",
    name: "Settings",
    component: homeSeting,
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
        path: "bank-account",
        name: "BackAccount",
      },
      {
        path: "Cordonné",
        name: "Cordonne",
      },
      {
        path: "compte",
        name: "Account",
      },
      {
        path: "delete-account",
        name: "DeleteAccount",
      }
    ]
  },

  {
    path: "/signup",
    name: "signup",
    redirect: "gate/login",
  },
  {
    path: "/login",
    name: "login",
    redirect: "gate/login",
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
