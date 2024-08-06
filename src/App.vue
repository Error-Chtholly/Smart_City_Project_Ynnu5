<!-- 父组件 -->
<template>
  <top></top>
  <div id="map"></div>
  <bottom></bottom>
  <div class="btn">
    <button @click="handleDirection()">导航</button>
  </div>
  <!-- 路由的出口 -->
  <router-view class="router-view"></router-view>
</template>

<script setup>
import mapboxgl from "mapbox-gl";
import { Scene } from "@antv/l7";
import { Mapbox } from "@antv/l7-maps";
import { onMounted, ref } from "vue";
import top from "@/components/header.vue";
import bottom from "@/components/bottom.vue";
// import card from "@/components/card.vue";
import { app } from "@/main.js";
import { useControl } from "./hooks/useControl";
import { useLayer } from "./hooks/useLayer";
// 导航依赖
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";

let map, scene;

onMounted(() => {
  mapboxgl.accessToken = import.meta.env.VITE_TOKEN;
  map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/dark-v11",
    center: [114.3, 30.5],
    zoom: 1,
    projection: "globe",
  });
  scene = new Scene({
    id: "map",
    map: new Mapbox({
      mapInstance: map,
    }),
    logoVisible: false,
  });
  app.provide("mapScene", { map, scene });

  const layerswitch = useControl(scene, map);
  useLayer(scene, layerswitch);

  // 地图加载完成后设置雾效
  map.on("style.load", () => {
    setFog();
  });
  map.on("move", setFog);
});

// 雾效
const setFog = () => {
  let center = map.getCenter();
  map.setFog({
    color: `hsl(0,0%,${Math.abs(center.lng) / 360})`,
    "high-color": `hsl(0,0%,${Math.abs(center.lng) / 360})`,
  });
};

let flag = false;
const mapboxDirections = new MapboxDirections({
  accessToken: import.meta.env.VITE_TOKEN,
});
const handleDirection = () => {
  flag = !flag;
  if (flag) {
    map.addControl(mapboxDirections, "top-left");
  } else {
    map.removeControl(mapboxDirections);
  }
};
</script>

<style scoped>
#map {
  width: 100vw;
  height: 100vh;
  color: hsl(0, 0, 0);
}

:deep() .l7-control-container .l7-top {
  top: 60px;
}

:deep() .l7-control-container .l7-bottom {
  bottom: 20px;
}

/* :deep() .mapboxgl-ctrl-bottom-right {
  bottom: 50px;
} */
:deep() .mapboxgl-ctrl-bottom-left {
  bottom: 30px;
}

:deep() .mapboxgl-ctrl-top-left {
  top: 60px;
  left: 30px;
}

.btn {
  position: absolute;
  left: 6px;
  top: 160px;
  z-index: 3;
}

.btn>button {
  padding: 1px 1px;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn>button:hover {
  box-shadow: 0px 0px 14px #ffffff;
}
</style>