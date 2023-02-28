import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LandingPage from "../views/LandingPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: LandingPage,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
