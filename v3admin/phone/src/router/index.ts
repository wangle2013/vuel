import {createRouter, RouteRecordRaw, Router, createWebHistory} from 'vue-router'
import { useAuthStore } from '@/store/user'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: {
          title: '首页'
        }
    },
    {
      path: '/goods',
      name: 'goods',
      component: () => import('@/views/GoodsView.vue'),
      meta: {
          title: '商品列表'
      }
    },
    {
      path:"/user",
      name:"user",
      meta: {
        isShow:true,
        title:"会员列表"
      },
      component: () => import('@/views/UsersView.vue'),
    },
    {
      path:"/role",
      name:"role",
      meta: {
        isShow:true,
        title:"角色列表"
      },
      component: () => import('@/views/RoleView.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login.vue'),
      meta: {
          title: '登录'
    }
  }
]

const router: Router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
  const store = useAuthStore()
    const isAuthenticated = store.isAuthenticated
    if(isAuthenticated&&to.path=="/login"){
      next("/")
    }
    if(!isAuthenticated&&to.path!="/login"){
      next("/login")
    }else{
      next()
    }
})
export default router