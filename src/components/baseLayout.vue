<template>
  <el-container>
    <!-- Header -->
    <el-header>
      <HeaderView />
    </el-header>
    <el-container>
      <!-- Aside Menu -->
      <el-aside>
        <MenuView />
      </el-aside>
      <el-container>
        <!-- Main Content -->
        <el-main>
          <MainView />
        </el-main>
        <!-- Footer -->
        <el-footer>
          <FooterView />
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import MenuView from "@/components/basic/MenuView.vue";
import HeaderView from "@/components/basic/HeaderView.vue";
import MainView from "@/components/basic/MainView.vue";
import FooterView from "@/components/basic/FooterView.vue";
</script>

<style scoped lang="less">
.el-header {
  padding: 0 !important;
  margin: 0 !important;
}
.el-aside {
  width: 200px;
  height: calc(100vh - 60px);
  background-color: #545c64;
  padding: 0;
  margin: 0;
}
.el-footer {
  position: absolute;
  bottom: 0;
  background-color: #545c64;
  color: #ffffff;
  width: calc(100% - 201px);
  display: flex;
  align-items: center;
  justify-content: center;
  left: 201px;
}
</style>
