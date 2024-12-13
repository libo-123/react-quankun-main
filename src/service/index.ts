import { message } from "antd";
import axios from "axios";

const instance = axios.create({
    baseURL: '//nest.liboscrg.com',  // 你的API地址
    timeout: 4000,  // 请求超时时间
});
instance.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)
instance.interceptors.response.use(
    response => {
        const res = response.data;
        if (res.code !== 200) {
            // 请求失败
            return Promise.reject(res.message);
        }
        return res;
    },
    error => {
        if (error && error.response) {
            console.error(error.response);

            switch (error.response.status) {
                case 400:
                    message.error({
                        content: "参数错误" + error.response?.data?.message,
                        duration: 5,
                    });
                    break;
                case 500:
                    message.info("服务端出错");
                    break;
                case 501:
                    message.info("网络未实现");
                    break;
                case 502:
                    message.info("网络错误");
                    break;
                case 503:
                    message.info("服务不可用");
                    break;
                case 504:
                    message.info("网络超时");
                    break;
                case 505:
                    message.info("instance版本不支持该请求");
                    break;
                default:
                    message.info(`连接错误${error.response.status}`);
            }
        }
        return Promise.reject(error);
    }
)

export default instance;