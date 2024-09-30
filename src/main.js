import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import "./style/style.scss";

createApp(App).use(createPinia()).mount("#app");
