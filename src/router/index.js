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
    component:()=> import(/* webpackChunkName: "listDevis" */ "./../components/Devis/listDevis.vue"),    
  },

  {
        path:'/exportDevis',
        name:'exportDevis',
        props:true,
        component:()=> import(/* webpackChunkName: "exportDevis" */ "./../components/Devis/TheExportDevis.vue"),
  }
    


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
