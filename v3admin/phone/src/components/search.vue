<template>
  <van-sticky>
    <van-search
      v-model="value"
      shape="round"
      background="#4fc08d"
      placeholder="请输入搜索关键词"
      clearable
      fixed="true"
    />
  </van-sticky>
</template>
<script setup lang="ts">
let value = ref('')
</script>
