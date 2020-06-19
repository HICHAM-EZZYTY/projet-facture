import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VCalendar from 'v-calendar';


import "jquery";
import "popper.js";
import "font-awesome/css/font-awesome.min.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./scss/main.scss";



Vue.use(VCalendar, {
  componentPrefix: 'vc',  // Use <vc-calendar /> instead of <v-calendar />
  masks: { input: 'DD-MM-YYYY', data: 'DD-MM-YYYY' }

});

const axios = require("axios").default;

let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5MjU5ODk3MCwiZXhwIjoxNTkyNjAyNTcwLCJuYmYiOjE1OTI1OTg5NzAsImp0aSI6ImZJeUhLZHlpN0ZlWmFMUGUiLCJzdWIiOjIyLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.5ZlHGTTMGh_zgW7yNSfmux895e4ArTglE-dW4yO1o2g";
Vue.prototype.$http = axios;
Vue.prototype.$http.defaults.baseURL = "http://127.0.0.1:8000/api";

Vue.prototype.$http.defaults.headers.common = { Authorization: `Bearer ${token}` };
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

