import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import store from './store' // 状态管理
/*  */
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
createApp(App).use(router).use(store).mount('#app')
