import { defineStore } from 'pinia'

//存储是否登录 和 token
export const loadingStore = defineStore('loading', {
    state: () => {
        return {loading:false}
    },
    // 也可以定义为
    // state: () => ({ count: 0 })
    getters: { //通过getters对状态state进行获取
        getLoading: (state) => state.loading,
    },
    actions: {
        showLoading() {//修改当前登录的状态
            this.loading=true
        },
        hideLoading() {//修改当前登录的状态
          this.loading=false
      },
        
    }
})
