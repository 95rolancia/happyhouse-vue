import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/utils/fontawesome.js";
import VueCookies from "vue-cookies";
import naver from "vue-naver-maps";

Vue.use(VueCookies);
Vue.$cookies.config("7d");

Vue.use(naver, {
  clientID: process.env.VUE_APP_NAVER_CLIENT_ID,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
