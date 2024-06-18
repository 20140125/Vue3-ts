import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import WelcomeView from "@/views/WelcomeView.vue";
import AuthView from "@/views/AuthView.vue";
import RoleView from "@/views/RoleView.vue";
import UserView from "@/views/UserView.vue";
import SystemLogView from "@/views/SystemLogView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Admin",
    component: HomeView,
    meta: {
      title: "系统首页",
    },
    children: [
      {
        path: "/admin/index",
        name: "Welcome",
        component: WelcomeView,
        meta: {
          title: "欢迎页",
        },
      },
      {
        path: "/admin/role/lists",
        name: "Role",
        component: RoleView,
        meta: {
          title: "角色列表",
        },
      },
      {
        path: "/admin/user/lists",
        name: "User",
        component: UserView,
        meta: {
          title: "用户列表",
        },
      },
      {
        path: "/admin/auth/lists",
        name: "Auth",
        component: AuthView,
        meta: {
          title: "权限列表",
        },
      },
      {
        path: "/admin/system-log/lists",
        name: "SystemLog",
        component: SystemLogView,
        meta: {
          title: "日志列表",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
