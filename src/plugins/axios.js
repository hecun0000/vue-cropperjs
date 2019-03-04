import axios from "axios";
import store from '@/store'

let config = {
    baseURL: store.getters.getRequestUrl,
    timeout: 60 * 1000, // Timeout
    // withCredentials: true, // Check cross-site Access-Control
    headers: {
        'Content-Type': 'application/json'
    }
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
    function (config) {
        if (config.source == 'qiniu') {
            config.baseURL = store.getters.getQiNiuUrl
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