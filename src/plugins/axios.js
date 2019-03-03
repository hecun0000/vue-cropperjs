
import axios from "axios";
import store from '@/store'


// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

console.log(store);


let config = {
  baseURL:store.state.requestUrl,
  timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
  headers: {
    'Content-Type': 'application/json'
  }
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function (config) {
    if(config.source=='qiniu'){
        config.baseURL = store.state.qiNiuUrl
    }
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);


export default _axios;
