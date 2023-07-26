import {createRouter, RouteRecordRaw, Router, createWebHistory} from 'vue-router'
import { useAuthStore } from '@/store/user'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        redirect:"goods",
        children:[
          {
            path:"goods",
            name:"goods",
            meta: {
              isShow:true,
              title:"商品列表"
            },
            component: () => import('@/views/GoodsView.vue'),
          },
          {
            path:"users",
            name:"users",
            meta: {
              isShow:true,
              title:"会员列表"
            },
            component: () => import('@/views/UsersView.vue'),
          },
          {
            path:"role",
            name:"role",
            meta: {
              isShow:true,
              title:"角色列表"
            },
            component: () => import('@/views/RoleView.vue'),
          }
        ],
        meta: {
          title: '首页'
        }
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
//@ts-ignore
router.beforeEach((to, from, next) => {
  const store = useAuthStore()
    const token = store.getToken
    if(!token&&to.path!="/login"){
      next("/login")
    }else{
      next()
    }
})
export default router