import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import '@/styles/index.scss'
import 'normalize.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//app.js
import { createPinia } from 'pinia'
import '@/router/permission'
import '@/utils/rem'
createApp(App).use(createPinia()).use(router).use(ElementPlus ).mount("#app");
