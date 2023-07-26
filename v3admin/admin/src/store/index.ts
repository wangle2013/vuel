import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist' // 引入持久化存储插件

const store = createPinia()

// 使用持久化存储插件
store.use(piniaPluginPersist)

export default store