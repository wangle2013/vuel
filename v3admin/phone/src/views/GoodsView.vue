<template>
  <Head></Head>
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <van-cell v-for="item in list" :key="item.id" :title="item.title" />
  </van-list>
  <Tabber></Tabber>
</template>

<script setup lang="ts">
import { getGoodsList } from '@/api'
const list = ref([])
const loading = ref(false)
const finished = ref(false)

const onLoad = () => {
  getGoodsList().then((res) => {
    const arrData: [] = res.data
    for (let i = 0; i < 18; i++) {
      list.value.push(arrData[i])
  }

    // 加载状态结束
    loading.value = false

    // 数据全部加载完成
    if (list.value.length >= arrData.length) {
      finished.value = true
    }
    //data.list = res.data
    //data.selectData.count = res.data.length
    console.log(list.value)
  })
}
</script>

<style lang="scss" scoped></style>
