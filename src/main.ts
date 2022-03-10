import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import '@/styles/index.scss'
import 'normalize.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { loadAllPlugins } from './plugins'
//app.js
import { createPinia } from 'pinia'
import '@/router/permission'
import '@/utils/rem'
import 'bytemd/dist/index.css';
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import Prism from 'prismjs';
import loadSvg from '@/icons'
import '@/icons';//引入svg模板
VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});
// highlightjs
import hljs from 'highlight.js';

VMdPreview.use(githubTheme, {
  Hljs: hljs,
});
const app=createApp(App)
//加载所有icon
loadSvg(app)
app.use(createPinia()).use(router).use(ElementPlus).use(VueMarkdownEditor).use(VMdPreview).mount("#app");
