<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    default-active="1"
    text-color="#fff"
  >
    <el-sub-menu
      v-for="(item, index) in menuList"
      :key="index"
      :index="item.asideMenuId"
    >
      <template #title>
        <el-icon><Monitor /></el-icon>
        {{ item.asideMenuName }}
      </template>
      <el-menu-item
        v-for="(child, key) in item.children"
        :key="key"
        :index="child.asideMenuId"
        @click="targetRoute(child)"
      >
        <template #title>
          <el-icon><House /></el-icon>
          {{ child.asideMenuName }}
        </template>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from "vue";
import { MENU_LISTS } from "@/mock/menu";
import { House, Monitor } from "@element-plus/icons-vue";
import { MenuItem } from "@/typings/aside-menu";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const route = useRouter();
const receiveData = reactive({
  menuList: MENU_LISTS,
});
const { menuList } = toRefs(receiveData);

/**
 * 路由跳转
 * @param item
 */
const targetRoute = (item: MenuItem) => {
  store.dispatch("addTabs", {
    name: item.asideMenuPath,
    title: item.asideMenuName,
  });
  route.push({ path: item.asideMenuPath });
};
</script>
