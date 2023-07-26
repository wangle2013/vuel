<template>
  <Search></Search>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item>1</van-swipe-item>
    <van-swipe-item>2</van-swipe-item>
    <van-swipe-item>3</van-swipe-item>
    <van-swipe-item>4</van-swipe-item>
  </van-swipe>
  <van-skeleton title avatar :row="3" :loading="loading">
    <van-card
      class="cardbox"
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
    >
      <template #tags>
        <van-tag plain type="primary">标签</van-tag>
        <van-tag plain type="primary">标签</van-tag>
      </template>
      <template #footer>
        <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button>
      </template>
    </van-card>
  </van-skeleton>
  <van-card
    num="2"
    price="2.00"
    desc="描述信息"
    title="商品标题"
    thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
  >
    <template #tags>
      <van-tag plain type="primary">标签</van-tag>
      <van-tag plain type="primary">标签</van-tag>
    </template>
    <template #footer>
      <van-button size="mini">按钮</van-button>
      <van-button size="mini">按钮</van-button>
    </template>
  </van-card>
  <van-card
    num="2"
    price="2.00"
    desc="描述信息"
    title="商品标题"
    thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
  >
    <template #tags>
      <van-tag plain type="primary">标签</van-tag>
      <van-tag plain type="primary">标签</van-tag>
    </template>
    <template #footer>
      <van-button size="mini">按钮</van-button>
      <van-button size="mini">按钮</van-button>
    </template>
  </van-card>
  <van-card
    num="2"
    price="2.00"
    desc="描述信息"
    title="商品标题"
    thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
  >
    <template #tags>
      <van-tag plain type="primary">标签</van-tag>
      <van-tag plain type="primary">标签</van-tag>
    </template>
    <template #title>
      <van-button size="mini">按钮</van-button>
      <van-button size="mini">按钮</van-button>
    </template>
    <template #footer>
      <van-button size="mini">按钮</van-button>
      <van-button size="mini">按钮</van-button>
    </template>
  </van-card>
  <van-card
    num="2"
    price="2.00"
    desc="描述信息"
    title="商品标题"
    thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
  >
    <template #tags>
      <van-tag plain type="primary">标签</van-tag>
      <van-tag plain type="primary">标签</van-tag>
    </template>
    <template #footer>
      <van-button size="mini">按钮</van-button>
      <van-button size="mini">按钮</van-button>
    </template>
  </van-card>
  <Tabber></Tabber>
</template>

<script setup lang="ts">
const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 3000)
})
</script>
<style lang="scss" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 450px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
