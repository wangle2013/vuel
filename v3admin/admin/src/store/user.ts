import { defineStore } from 'pinia'

//存储是否登录 和 token
export const useAuthStore = defineStore('auth', {
    state: () => {
        return { isAuthenticated: false, token: "" }
    },
    // 也可以定义为
    // state: () => ({ count: 0 })
    getters: { //通过getters对状态state进行获取
        getAuthenticated: (state) => state.isAuthenticated,
        getToken: (state) => state.token
    },
    actions: {
        setAuth(isAuth: boolean) {//修改当前登录的状态
            if (isAuth) {
                this.isAuthenticated = isAuth; //在pinia中this指代state
            } else {
                this.isAuthenticated = false;
            }
        },
        setToken(token: string) { //解析的用户
            if (token) {
                this.token = token;
            } else {
                this.token = "";
            }
        }
        
    },
    persist: {
      enabled: true, // 是否开启此模块的数据持久化
      strategies: [{
        key: 'auth', // 默认会以 store 的 id 作为 key
        storage: localStorage, // 数据默认存在 sessionStorage 里
        paths: ['isAuthenticated','token'], // 默认所有 state 都会进行缓存，你能够通过 paths 指定要长久化的字段，其余的则不会进行持久化
      }]
    }
})
