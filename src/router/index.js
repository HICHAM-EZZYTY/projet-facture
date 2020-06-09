import Vue from "vue";
import VueRouter from "vue-router";

// import Devis from "../views/Devis.vue";
import Devis from "./../views/Devis.vue";
// import CreateDevis from "./../components/Devis/CreateDevis.vue";
import listClient from "../components/client/listClient.vue";
import addClient from "../components/client/addClient.vue";
import homeSeting from "../views/setings/homeSeting.vue";
import preference from "../components/setings/preference.vue";
import signup from "../views/Authentification/Signup.vue";
import login from "../views/Authentification/Login.vue";
import signupThree from "../components/Authentification/signupThree.vue";
import singupFour from "../components/Authentification/singupFour.vue";
import sigupfive from "../components/Authentification/signupfive.vue";
import devisRef from "../components/setings/devisRef.vue";
import factureRef from "../components/setings/factureRef.vue";
import avoirRef from "../components/setings/avoirRef.vue";
import factureAcompte from "../components/setings/factureAcompte.vue";
import avoirAcompte from "../components/setings/avoirAcompte.vue";
import numerotation from "../components/setings/numerotation.vue";


import createDevis from "./../components/Devis/createDevis.vue";
import listDevis from "./../components/Devis/listDevis.vue";
import Login from "../views/Authentification/Login.vue";
import HomePage from "../views/HomePage.vue";
import Register from "../views/Authentification/Signup.vue";
import GateLayout from "../views/GateLayout.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Devis",
    component: Devis
  },
  {
    path: "/CreateDevis",
    name: "CreateDevis",
    component: createDevis
  },
  {
    path: "/listClient",
    name: "listClient",
    component: listClient
  },
  {
    path: "/addClient",
    name: "addClient",
    component: addClient
  },
  {
    path: "/settings",
    name: "homeSeting",
    component: homeSeting,
    children: [
      {
        path: 'preference',
        name: 'preference',
        component: preference
      },
      {
        path: 'devisRef',
        name: 'devisRef',
        component: devisRef
      },
      {
        path: 'factureRef',
        name: 'factureRef',
        component: factureRef
      },
      {
        path: 'avoirRef',
        name: 'avoirRef',
        component: avoirRef
      },
      {
        path: 'factureAcompte',
        name: 'factureAcompte',
        component: factureAcompte
      },
      {
        path: 'avoirAcompte',
        name: 'avoirAcompte',
        component: avoirAcompte
      },
      {
        path: 'numerotation',
        name: 'numerotation',
        component: numerotation
      },
    ]
  },
  // {
  //   path: "/preference",
  //   name: "preference",
  //   component: preference

  // },
  {
    path: "/signup",
    name: "signup",
    component: signup
  },
  {
    path: "/login",
    name: "login",
    component: login
  },
  {
    path: "/signupThree",
    name: "signupThree",
    component: signupThree
  },
  {
    path: "/singupFour",
    name: "singupFour",
    component: singupFour
  },
  {
    path: "/singupfive",
    name: "sigupfive",
    component: sigupfive
  },
  {
    path: "/exportDevis",
    name: "exportDevis",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "exportDevis" */ "./../components/Devis/TheExportDevis.vue"
      )
  },
  {
    path: "/refusDevis",
    name: "refusDevis",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "exportDevis" */ "./../components/Devis/TheRefusDevis.vue"
      )
  },
  {
    path: "/calendardevis",
    name: "calendardevis",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "exportDevis" */ "./../components/Devis/TheCalendarDevis.vue"
      )
  },
  {
    path: "/",
    name: "Home",
    component: HomePage,
    children: [
      {
        path: "",
        name: "Devis",
        component: listDevis
      },
      {
        path: "/CreateDevis",
        name: "CreateDevis",
        component: createDevis
      },
      {
        path: "/listDevis",
        name: "listDevis",
        component: () =>
          import(
            /* webpackChunkName: "listDevis" */ "./../components/Devis/listDevis.vue"
          )
      }
    ]
  },
  {
    path: "/gate",
    name: "Gate",
    component: GateLayout,
    redirect: "/login",
    children: [
      {
        path: "login",
        name: "login",
        component: Login
      },
      {
        path: "signup",
        name: "Signup",
        component: Register
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
