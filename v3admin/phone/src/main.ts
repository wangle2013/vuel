import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import store from './store' // 状态管理
import 'vant/es/toast/style';
// 移动端适配
import 'lib-flexible'
import { Notify } from 'vant';
import { Toast } from 'vant';

/*  */
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
createApp(App).use(router).use(store).use(Notify).use(Toast).mount('#app')
