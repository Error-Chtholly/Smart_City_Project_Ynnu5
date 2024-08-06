// vue-router框架的路由配置
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // 路由模式为hash模式，使用history模式需要配置服务器 history模式
  // createWebHistory网页端
  routes: [
    {
      path: "/rotate",
      name: "rotate",
      component: () => import("@/views/rotate.vue"),
    },
    {
      path: "/plot",
      name: "plot",
      component: () => import("@/views/plot.vue"),
    },
    {
      path: "/cityView",
      name: "cityView",
      component: () => import("@/views/cityView.vue"),
    },
    {
      path: "/search",
      name: "search",
      component: () => import("@/views/search.vue"),
    },
    {
      path: "/bridge",
      name: "bridge",
      component: () => import("@/views/bridge.vue"),
    },
    {
      path: "/measure/:type",
      name: "measure",
      component: () => import("@/views/measure.vue"),
    },
    {
      path: "/fly",
      name: "fly",
      component: () => import("@/views/fly.vue"),
    },
    {
      path: "/modelView",
      name: "modelView",
      component: () => import("@/views/modelView.vue"),
    },
  ],
});

export default router;
