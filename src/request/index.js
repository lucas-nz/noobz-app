import axios from "axios";
import {Message} from "element-ui";
import store from "@/"
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 20 * 1000
});

service.interceptors.request.use(config => {

})
