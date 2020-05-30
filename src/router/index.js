import Vue from "vue";
import VueRouter from "vue-router";
// import Devis from "../views/Devis.vue";
import Devis from "./../views/Devis.vue";
import CreateDevis from "./../components/Devis/CreateDevis.vue";
import listClient from "../components/client/listClient.vue";
import addClient from "../components/client/addClient.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
