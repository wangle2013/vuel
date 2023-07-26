<template>
  <van-sticky>
    <van-nav-bar
      title="商城"
      left-text="返回"
      right-text="退出登录"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      fixed
    />
  </van-sticky>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/user'
const router = useRouter()

const store = useAuthStore()
console.log(history)
const onClickLeft = () => history.back()
const onClickRight = () => {
  store.setToken('')
  store.setAuth(false)
  router.push('/login')
}
</script>
<style lang="scss" scoped>
.headbox {
  background-color: burlywood;
  color: #fff;
  padding: 0 30px;
  height: 80px;
  align-items: center;
  display: flex;
  font-size: 24px;
  justify-content: space-between;
}
</style>
