<template>
  <van-tabbar placeholder route>
    <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/goods" icon="search">商品列表</van-tabbar-item>
    <van-tabbar-item to="/user" icon="search">会员中心</van-tabbar-item>
  </van-tabbar>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.tabbarbox {
  height: 100px;
}
</style>
