import axios from 'axios';                                
import { useAuthStore } from '@/store/user'
import { loadingStore } from '@/store/loading'
import { showFailToast } from 'vant';

// 创建axios实例
const service = axios.create({
    // 服务接口请求
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    // 超时设置
    // timeout: 15000,
    headers:{'Content-Type':'application/json;charset=utf-8'}
})
 
// let loading:any;
//正在请求的数量
//let requestCount:number = 0
const loadingstore = loadingStore()

//显示loading
// const showLoading = () => {
//   console.log(import.meta.env.VITE_APP_DEV_URL)
//     if (requestCount === 0 && !loading) {
//         // //加载中显示样式可以自行修改
//         // loading = ElLoading.service({
//         //     text: "拼命加载中，请稍后...",
//         //     background: 'rgba(0, 0, 0, 0.7)',
//         //     //spinner: 'el-icon-eleme',
//         // })
//     }
//     requestCount++;
// }
// //隐藏loading
// const hideLoading = () => {
//     requestCount--
//     if (requestCount == 0) {
//         loading.close()
//     }
// }
 
// 请求拦截
service.interceptors.request.use(config => {
  loadingstore.showLoading()
    // showLoading()
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    const store = useAuthStore()
    const token = store.getToken
    if(token){
      config.headers.Authorization = token
    }
    console.log(JSON.stringify(token))
    // get请求映射params参数
    if (config.method === 'get' && config.params) {
      
        let url = config.url + '?';
        for (const propName of Object.keys(config.params)) {
            const value = config.params[propName];
            var part = encodeURIComponent(propName) + "=";
            if (value !== null && typeof(value) !== "undefined") {
                 // 对象处理
                if (typeof value === 'object') {
                    for (const key of Object.keys(value)) {
                        let params = propName + '[' + key + ']';
                        var subPart = encodeURIComponent(params) + "=";
                        url += subPart + encodeURIComponent(value[key]) + "&";
                    }
                } else {
                    url += part + encodeURIComponent(value) + "&";
                }
            }
        }
        url = url.slice(0, -1);
        config.params = {};
        config.url = url;
    }
    return config
}, error => {
  loadingstore.hideLoading()
    console.log(error)
    Promise.reject(error)
})
 
// 响应拦截器
service.interceptors.response.use((res:any) => {
  loadingstore.hideLoading()
        // 未设置状态码则默认成功状态
        const resData=res.data
        const code = resData.data.code || 200;
     
        // 获取错误信息
        const msg = resData.data.msg||errorCodeType(code) || errorCodeType('default')
        if(code === 200){
          
            return Promise.resolve(resData)
            
        }else{
          showFailToast(msg);
            return Promise.reject(resData)
        }
    },
    error => {
        console.log("进入接口错误")
        loadingstore.hideLoading()
        let { message } = error;
        if (message == "Network Error") {
            message = "后端接口连接异常";
        }
        else if (message.includes("timeout")) {
            message = "系统接口请求超时";
        }
        else if (message.includes("Request failed with status code")) {
            message = "系统接口" + message.substr(message.length - 3) + "异常";
        }
        showFailToast('message');
        return Promise.reject(error)
    }
)
 
export default service;