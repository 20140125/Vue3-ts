<template>
  <el-tabs
    type="card"
    v-model="storeStateCurrentTab"
    closable
    @tab-remove="tabRemoveHandler"
    @tab-change="tabChangeHandler"
  >
    <el-tab-pane
      v-for="(item, index) in storeStateTabs"
      :label="item.title"
      :name="item.name"
      :key="index"
    />
    <el-card>
      <router-view />
    </el-card>
  </el-tabs>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from "vue-router";

const store = useStore();
const route = useRouter();
const storeStateTabs = computed(() => store.state.tabs);
const storeStateCurrentTab = computed(() => store.state.currentTab);
/**
 * 点击 tab 移除按钮时触发
 * @param targetName
 */
const tabRemoveHandler = (targetName: string) => {
  store.dispatch("deleteTabs", targetName);
  tabChangeHandler(targetName);
};

/**
 * 点击 tab 时触发
 * @param targetName
 */
const tabChangeHandler = (targetName: string) => {
  route.push({ path: targetName });
};
</script>
