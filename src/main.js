// This is the main.js file for the Smart City Project.
import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue"
import router from "./router"
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);

app.use(router);
app.use(ElementPlus);
app.mount("#app");
export { app };