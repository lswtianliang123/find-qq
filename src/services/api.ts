import axios from "axios";

const api = axios.create({
  baseURL: "https://api.uomgcom/", // 请求的公共地址部分
  timeout: 3000, // 请求超时时间 当请求时间超过5秒还未取得结果时 提示用户请求超时
});

// interceptors axios的拦截器对象
api.interceptors.request.use(
  (config) => {
    // config 请求的信息
    return config;
  },
  (err) => {
    // 请求发生错误时的处理 抛出错误
    Promise.reject(err);
  }
);

api.interceptors.response.use(
  (res) => {
    // 我们一般在这里处理，请求成功后的错误状态码 例如状态码是500，404，403
    // res 是所有相应的信息
    console.log(res);
    return Promise.resolve(res);
  },
  (err) => {
    // 服务器响应发生错误时的处理
    Promise.reject(err);
  }
);

export default api;
