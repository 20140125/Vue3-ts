import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { RouteLocationNormalized, NavigationGuardNext } from "vue-router";

router.beforeEach(
  async (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    await store.dispatch("addTabs", { title: to?.meta?.title, name: to.path });
    next();
  }
);

createApp(App).use(store).use(router).use(ElementPlus).mount("#app");
