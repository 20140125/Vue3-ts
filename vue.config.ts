import path from "path";
import type { ProjectOptions } from "@vue/cli-service";
import StyleLintPlugin from "stylelint-webpack-plugin";

const title = "后台管理系统";

/**
 * Vue Config
 * https://cli.vuejs.org/config/
 */
const vueConfig: ProjectOptions = {
  publicPath: process.env.CDN_URL ? process.env.CDN_URL : "/",
  outputDir: "build",
  runtimeCompiler: true,
  transpileDependencies: true,
  productionSourceMap: false,

  configureWebpack: {
    resolve: {
      alias: {
        vue$: require.resolve("vue/dist/vue.cjs.js"), // 统一 vue
        "~": path.resolve(__dirname),
      },
    },
  },
  devServer: {
    port: 1234,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
    client: {
      overlay: false, // 解决 页面出现 Uncaught runtime errors 报错遮罩层
    },
  },
  chainWebpack(config) {
    // stylelint 插件
    config.plugin("stylelint").use(StyleLintPlugin, [
      {
        files: ["**/*.{vue,htm,html,css,sss,less,scss,sass}"],
      },
    ]);

    // html-webpack-plugin
    config.plugin("html").tap((args) => {
      args[0].title = title; // html 标题 <%= htmlWebpackPlugin.options.title %>
      return args;
    });

    config.optimization.splitChunks({
      chunks: "all", // 表明选择哪些 chunk 进行优化。通用设置，可选值：all/async/initial。设置为 all 意味着 chunk 可以在异步和非异步 chunk 之间共享。
      minSize: 20000, // 允许新拆出 chunk 的最小体积
      cacheGroups: {
        defaultVendors: {
          name: "chunk-common",
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          enforce: true,
        },
      },
    });
  },
};

export default vueConfig;
