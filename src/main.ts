import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/style.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap";

createApp(App).use(store).use(router).mount("#app");
