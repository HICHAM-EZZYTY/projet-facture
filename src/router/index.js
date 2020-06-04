import Vue from "vue";
import VueRouter from "vue-router";
import CreateDevis from "./../components/Devis/createDevis.vue";
import listDevis from "./../components/Devis/listDevis.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "Devis",
    component: listDevis
  },
  {
    path: "/CreateDevis",
    name: "CreateDevis",
    component:  CreateDevis
  },
  {
    path: "/listDevis",
    name: "listDevis",
    component: listDevis
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
