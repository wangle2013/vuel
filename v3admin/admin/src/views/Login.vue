<template>
  <div class="loginbox">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="80px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="username">
        <el-input v-model="ruleForm.username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="ruleForm.password"
          type="password"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item>
        <el-button class="btn" type="primary" @click="submitForm(ruleFormRef)"
          >登录</el-button
        >
        <el-button class="btn" @click="resetForm(ruleFormRef)">重置</el-button>
        <i-ep-edit></i-ep-edit>
        <i-ep-share style="width: 1em; height: 1em; margin-right: 8px" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import type { FormInstance } from 'element-plus'
import { loginData } from '../type/login'
import { useRouter } from 'vue-router'
import { login } from '@/api'
import { useAuthStore } from '@/store/user'
const data = reactive(new loginData())
console.log(data)
// const ruleForm = { ...toRefs(reactive(new loginData())) }
const ruleForm = data

const rules = {
  username: [
    {
      required: true,
      message: '请输入名称',
      trigger: 'blur',
    },
    {
      min: 3,
      max: 5,
      message: '长度3到5',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur',
    },
    {
      min: 3,
      max: 10,
      message: '长度必须3到10',
      trigger: 'blur',
    },
  ],
}
const router = useRouter()
const store = useAuthStore()
const ruleFormRef = ref<InstanceType<typeof FormInstance>>()
const submitForm = (formEl: InstanceType<typeof FormInstance> | undefined) => {
  if (!formEl) return
  formEl.validate((valid: boolean) => {
    if (valid) {
      login(ruleForm).then((res) => {
        const { code, token } = res.data
        console.log(code)
        if (code == 200) {
          store.setToken(token)
          store.setAuth(true)
          ElMessage({
            message: '登录成功',
            duration: 1000,
            type: 'success',
          })
          setTimeout(() => {
            router.push('/')
          }, 1000)
        }
      })
    } else {
      console.log('格式错误')
      return false
    }
  })
}

const resetForm = (formEl: InstanceType<typeof FormInstance> | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
<style lang="scss" scoped>
.loginbox {
  width: 100%;
  height: 100%;
  background-color: #bcbcbc;
  display: flex;
  align-items: center;
  justify-content: center;
}
.demo-ruleForm {
  width: 500px;
  padding: 50px;
  background-color: #fff;
  border-radius: 20px;
}
</style>
