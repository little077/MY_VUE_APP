import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from "@/router/index"
import './style.css';

// import fn from "@/Utils/getVersion"
// import getNewVersion from "@/Utils/NewUpdate";
// getNewVersion()
// fn()

const app = createApp(App);
const pinia = createPinia();

app.use(router).use(pinia).mount('#app')
