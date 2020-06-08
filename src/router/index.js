import Vue from "vue";
import VueRouter from "vue-router";
// import Devis from "../views/Devis.vue";
import Devis from "./../views/Devis.vue";
import CreateDevis from "./../components/Devis/CreateDevis.vue";
import listClient from "../components/client/listClient.vue";
import addClient from "../components/client/addClient.vue";
import homeSeting from "../views/setings/homeSeting.vue";
import preference from "../components/setings/preference.vue";
import signup from "../views/Authentification/Signup.vue";
import login from "../views/Authentification/Login.vue";
import signupThree from "../components/Authentification/signupThree.vue";
import singupFour from "../components/Authentification/singupFour.vue";
import sigupfive from "../components/Authentification/signupfive.vue";


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
    component: CreateDevis
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


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
