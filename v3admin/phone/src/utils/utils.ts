import router from "@/router";
import { createPinia } from "pinia";
import { ElLoading, ElNotification } from 'element-plus';
/**
 * 这里设置pinia的原因很简单，pinia模块化的时候，在main.ts里需要注册createPinia()
 * 但是main.ts在注册的话，axios.ts更新pinia就不能在其它地方获取，相当于创建了两个pinia
 * 如果没有使用pinia模块化可忽略这里
 */
export const pinia = createPinia()

/**
 * 功能：获取路由参数
 * 使用：解构 const { id } = routerParam，或 let routerParam = routerParam()
 */
export function routerParam(){
    return router.currentRoute.value.query
}

const loadOptions = {
    lock: false,
    text: '加载中...',
    background: 'rgba(255, 255, 255, 0.5)',
}
/**
 * 功能：loading
 * 使用：loading() 触发加载，loading.close() 关闭加载
 */
export function loading(options = loadOptions){
    return ElLoading.service(options)
}

/**
 * 功能：通知
 */
export function notification(title: string = '提示', message: string, type: 'success' | 'error' | 'warning' | 'info'){
    ElNotification({
        title,
        message,
        type,
    })
}

/**
 * 功能：路由解析并且拼接
 * 使用：parseUrl('home', {id:1,type: 'add'})
 * 返回：'/pages/home?id=1&type=add'
 */
export function parseUrl(url: '', params: any) {
    let arr = [];
    let string = '';
    for (let i in params) {
        arr.push(i + "=" + params[i]);
    }

    string = "/pages/" + url;
    if (arr.length > 0) {
        string += "?" + arr.join("&");
    }

    return string;
}

/**
 * 功能：判断数据类型
 */
export function isDataType(data: any, type: any) {
    return Object.prototype.toString.call(data) === '[object ' + type + ']';
}

/**
 * 功能：判断数组里是否有某个key
 */
export function in_array(search: any, array: []) {
    let flag = false;
    for (let i in array) {
        if (array[i] == search) {
            flag = true;
            break;
        }
    }

    return flag;
}
