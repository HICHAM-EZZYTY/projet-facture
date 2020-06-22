import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      name: "Naoufal Yassiri",
      email: "hhamdaoui31@gmail.com"
    }
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    user: (state) => state.user
  }
});
