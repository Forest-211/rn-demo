import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Alert } from 'react-native';

const showStatus = (status: number) => {
    let message = '';
    switch (status) {
        case 400:
            message = '请求错误';
            break;
        case 401:
            message = '未授权，请重新登录';
            break;
        case 403:
            message = '拒绝访问';
            break;
        case 404:
            message = '请求出错';
            break;
        case 408:
            message = '请求超时';
            break;
        case 500:
            message = '服务器错误';
            break;
        case 501:
            message = '服务未实现';
            break;
        case 502:
            message = '网络错误';
            break;
        case 503:
            message = '服务不可用';
            break;
        case 504:
            message = '网络超时';
            break;
        case 505:
            message = 'HTTP版本不受支持';
            break;
        default:
            message = `连接出错(${status})!`;
    }
    return `${message}，请检查网络或联系管理员！`;
};

const service = axios.create({
    // 根据不同模式调整接口
    // baseURL: process.env.NODE_ENV === 'production' ? `/` : '/api',
    baseURL: 'http://localhost:3200',
    headers: {
        get: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
        post: {
            'Content-Type': 'application/json;charset=utf-8',
        },
    },
    // 是否跨站点访问控制请求
    withCredentials: true,
    timeout: 30000, // 最大响应时间
    transformRequest: [
        (data) => {
            data = JSON.stringify(data);
            return data;
        },
    ],
    validateStatus() {
        // 使用async-await，处理reject情况较为繁琐，所以全部返回resolve，在业务代码中处理异常
        return true;
    },
    transformResponse: [
        (data) => {
            if (typeof data === 'string' && data.startsWith('{')) {
                data = JSON.parse(data);
            }
            return data;
        },
    ],
});

// 请求拦截器
service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        //从redux中获取token，并将其添加至请求头中
        // let token = ...;
        // if (token) {
        //     config.headers.Authorization = `${token}`;
        // }
        return config;
    },
    (error) => {
        // 错误抛到业务代码
        error.data = {};
        error.data.msg = '服务器异常，请联系管理员！';
        return Promise.resolve(error);
    },
);

// 响应拦截器
service.interceptors.response.use(
    (response: AxiosResponse) => {
        const status = response.status;
        let msg = '';
        if (status < 200 || status >= 300) {
            // 处理http错误，抛到业务代码
            msg = showStatus(status);
            if (typeof response.data === 'string') {
                response.data = { msg };
            } else {
                response.data.msg = msg;
            }
        }
        return response;
    },
    (error) => {
        if (axios.isCancel(error)) {
            console.log('repeated request: ' + error.message);
        } else {
            // handle error code
            // 错误抛到业务代码
            let errMsg: string;
            switch (error.response.status) {
                case 401:
                    errMsg = '登录状态失效，请重新登录';
                    // localStorage.removeItem('tsToken');
                    // router.push('/login');
                    break;
                case 403:
                    errMsg = '拒绝访问';
                    break;

                case 408:
                    errMsg = '请求超时';
                    break;

                case 500:
                    errMsg = '服务器内部错误';
                    break;

                case 501:
                    errMsg = '服务未实现';
                    break;

                case 502:
                    errMsg = '网关错误';
                    break;

                case 503:
                    errMsg = '服务不可用';
                    break;

                case 504:
                    errMsg = '网关超时';
                    break;

                case 505:
                    errMsg = 'HTTP版本不受支持';
                    break;

                default:
                    errMsg = error.response.data.msg;
                    break;
            }

            error.data = { errMsg };
            Alert.alert(error.data.msg);
        }
        return Promise.reject(error);
    },
);

export default service;
