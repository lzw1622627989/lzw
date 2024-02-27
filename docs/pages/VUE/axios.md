# [axios ](https://www.axios-http.cn/) 

## **安装**  
```bash
#npm
npm install axios

#yarn 
yarn add axios
```  

## **简单封装**  
```js
import axios from 'axios';
import {showFailToast} from 'vant';
import 'vant/es/toast/style'
// 创建axios实例
const service = axios.create({
    baseURL: "",
    // 超时
    timeout: 30000
})

// 响应拦截器
service.interceptors.response.use(res => {
        const code = parseInt(res.data.httpCode) || 200;
        if (code === 200 & res.data.isSuccess) {
            return Promise.resolve(res.data);
        } else {
            showFailToast(res.data.message);
            return Promise.reject(new Error(res.data.message))
        }
    },
    error => {
        let { message } = error;
        if (message == "Network Error") {
            message = "后端接口连接异常";
        } else if (message.includes("timeout")) {
            message = "系统接口请求超时";
        } else if (message.includes("Request failed with status code")) {
            message = "系统接口" + message.substr(message.length - 3) + "异常";
        }
        showFailToast(message);
        return Promise.reject(error)
    }
)

export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        service({
            url,
            params,
            method: "get",
        }).then(res => {
            resolve(res)
        }).catch(rej => {
            reject(rej)
        })
    })

}
export function post(url, data = {}, ) {
    return new Promise((resolve, reject) => {
        service({
            url,
            data,
            method: "post"
        }).then(res => {
            resolve(res)
        }).catch(rej => {
            reject(rej)
        })
    })
}
export default service
```