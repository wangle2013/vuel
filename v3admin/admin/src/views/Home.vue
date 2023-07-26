<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :span="4"
            ><img class="logo" src="../assets/vue.svg"
          /></el-col>
          <el-col :span="16"><h2>后台管理系统</h2></el-col>
          <el-col :span="4"
            ><span class="logout" @click="logout">退出登录</span></el-col
          >
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            router
          >
            <el-menu-item
              :index="item.path"
              v-for="item in list"
              :key="item.path"
            >
              <el-icon><i-ep-menu /></el-icon>
              <span>{{ item.meta.title }}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style lang="scss" scoped>
.el-header {
  height: 80px;
  background-color: #666;
  .logo {
    height: 60px;
    margin-top: 10px;
  }
  h2,
  .logout {
    line-height: 80px;
    text-align: center;
    color: #fff;
  }
}
.el-aside {
  background-color: #000;
}
.el-menu {
  background-color: #000;
  height: calc(100vh - 80px);
  color: #fff;
  .el-menu-item {
    color: #fff;
  }
  .el-menu-item:hover {
    color: #000;
  }
}
</style>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/user'
const router = useRouter()
const list = router.getRoutes().filter((v) => v.meta.isShow)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const store = useAuthStore()
const logout = () => {
  store.setToken('')
  store.setAuth(false)
  router.push('/login')
}
</script>
