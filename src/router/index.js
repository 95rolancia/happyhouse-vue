import Vue from "vue";
import VueRouter from "vue-router";
// View
import MainPage from "@/views/MainPage.vue";
import MapPage from "@/views/MapPage.vue";
import QnaPage from "@/views/QnaPage.vue";
import AboutPage from "@/views/AboutPage.vue";

import BoardList from "@/components/Board/BoardList.vue";
import BoardDetail from "@/components/Board/BoardDetail.vue";
import BoardWrite from "@/components/Board/BoardWrite.vue";
import BoardUpdate from "@/components/Board/BoardUpdate.vue";

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
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
  },
  {
    path: "/qna",
    name: "Qna",
    component: QnaPage,
    redirect: "/qna/list",
    children: [
      {
        path: "list",
        name: "List",
        component: BoardList,
      },
      {
        path: "read/:boardId",
        name: "Read",
        component: BoardDetail,
      },
      {
        path: "write",
        name: "Write",
        component: BoardWrite,
      },
      {
        path: "update/:boardId",
        name: "Update",
        component: BoardUpdate,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
