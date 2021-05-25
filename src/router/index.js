import Vue from "vue";
import VueRouter from "vue-router";
// View
import MainPage from "@/views/MainPage.vue";
import MapPage from "@/views/MapPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/map",
    name: "MapPage",
    component: MapPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
