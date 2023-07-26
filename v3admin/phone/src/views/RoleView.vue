<template>
  <div class="selectbox">
    <el-form :inline="true" :model="data.selectData" class="demo-form-inline">
      <el-form-item label="标题">
        <el-input
          v-model="data.selectData.title"
          placeholder="请输入关键字"
          clearable
        />
      </el-form-item>
      <el-form-item label="详情">
        <el-input
          v-model="data.selectData.introduce"
          placeholder="请输入关键字"
          clearable
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">搜索</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="tablebox">
    <el-table :data="dataList.comList" stripe style="width: 100%">
      <el-table-column prop="id" label="Date" width="180" />
      <el-table-column prop="title" label="Name" width="180" />
      <el-table-column prop="introduce" label="Address" />
    </el-table>
  </div>
  <el-pagination
    @current-change="currentChange"
    @size-change="sizeChange"
    background
    layout="prev, pager, next"
    :total="data.selectData.count * 2"
  />
</template>

<script setup lang="ts">
import { getUserList } from '@/api'
import { initData, ListInt } from '../type/good'
const data = reactive(new initData())

getUserList().then((res) => {
  data.list = res.data
  data.selectData.count = res.data.length
})
const dataList = reactive({
  comList: computed(() => {
    return data.list.slice(
      (data.selectData.page - 1) * data.selectData.pagesize,
      data.selectData.page * data.selectData.pagesize
    )
  }),
})
const currentChange = (page: number) => {
  data.selectData.page = page
}
const sizeChange = (pagesize: number) => {
  data.selectData.pagesize = pagesize
}
const onSubmit = () => {
  let arr: ListInt[] = []
  if (data.selectData.title || data.selectData.introduce) {
    if (data.selectData.title) {
      arr = data.list.filter((v) => {
        return v.title.indexOf(data.selectData.title) != -1
      })
    }
    if (data.selectData.introduce) {
      arr = data.list.filter((v) => {
        return v.introduce.indexOf(data.selectData.introduce) != -1
      })
    }
  } else {
    arr = data.list
    console.log(arr)
  }
  data.selectData.count = arr.length
  data.list = arr
  watch([() => data.selectData.title, () => data.selectData.introduce], () => {
    if (data.selectData.title == '' && data.selectData.introduce == '') {
      getGoodsList().then((res) => {
        data.list = res.data
        data.selectData.count = res.data.length
      })
    }
  })
}
</script>

<style lang="scss" scoped></style>
