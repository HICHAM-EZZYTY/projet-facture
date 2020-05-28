import Vue from "vue";
import VueRouter from "vue-router";
// import Devis from "../views/Devis.vue";
import Devis from "./../views/Devis.vue";
import CreateDevis from "./../components/Devis/createDevis.vue";

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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
