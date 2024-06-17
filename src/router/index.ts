import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import WelcomeView from "@/views/WelcomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Admin",
    component: HomeView,
    children: [
      {
        path: "/welcome",
        name: "Welcome",
        component: WelcomeView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
