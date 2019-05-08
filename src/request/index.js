import axios from "axios";
import { Message } from "element-ui";
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 20 * 1000
});

service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    const res = response.data;
    // TODO 根据返回信息自定义报错规则
    return Promise.resolve(res);
  },
  error => {
    Message.warning({
      message: "连接超时",
      showClose: true,
      center: true
    });
    return Promise.reject(error);
  }
);
export default service;
