<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 32px">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/store/user'
import { useRouter } from 'vue-router'
import { showSuccessToast } from 'vant'
const username = ref('')
const password = ref('')
const router = useRouter()
const store = useAuthStore()
type valData = {
  username: string
  password: string
}
const onSubmit = (values: valData) => {
  login(values).then((res) => {
    const { code, token, msg } = res.data
    console.log(code)
    if (code == 200) {
      store.setToken(token)
      store.setAuth(true)
      showSuccessToast(msg)
      setTimeout(() => {
        router.push('/')
      }, 1000)
    }
  })
}
</script>
<style lang="scss" scoped>
h2 {
  font-size: 32px;
}
.my-button {
  width: 200px;
}

/** 覆盖 Button 内部子元素的样式 */
.my-button .van-button__text {
  color: red;
}
.van-form {
  padding-top: 360px;
}
</style>
