import { createApp } from 'vue';
import { createPinia } from 'pinia';


import App from './App.vue';
import Antd from 'ant-design-vue';
import ElementPlus from 'element-plus'
import router from "@/router/index"

import 'element-plus/dist/index.css';
import 'ant-design-vue/dist/antd.css';
import './style.css';

// import fn from "@/Utils/getVersion"
// import getNewVersion from "@/Utils/NewUpdate";
// getNewVersion()
// fn()


const app = createApp(App);
const pinia = createPinia();



app.use(ElementPlus).use(router).use(pinia).use(Antd).mount('#app')
