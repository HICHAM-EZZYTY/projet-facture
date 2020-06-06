import Vue from "vue";
import VueRouter from "vue-router";
import CreateDevis from "./../components/Devis/createDevis.vue";
import listDevis from "./../components/Devis/listDevis.vue";
import LoginPage from "../views/LoginPage.vue"
import HomePage from "../views/HomePage.vue"
import RegisterPage from "../views/RegisterPage.vue"
import GateLayout from "../views/GateLayout.vue"



Vue.use(VueRouter);

const routes = [
  {
    path: '/', 
    name: 'Home',
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
        component: CreateDevis
      },
      {
        path: "/listDevis",
        name: "listDevis",
        component: () => import(/* webpackChunkName: "listDevis" */ "./../components/Devis/listDevis.vue"),
      },
      {
        path: '/exportDevis',
        name: 'exportDevis',
        props: true,
        component: () => import(/* webpackChunkName: "exportDevis" */ "./../components/Devis/TheExportDevis.vue"),
      }
    ]

  }
  ,
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'Signup',
    component: RegisterPage
  }, 
  {
    path: '/gate', 
    name: 'Gate', 
    component: GateLayout
  }




];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
