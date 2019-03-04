import request from '@/plugins/axios'
import store from '@/store'
import axios from 'axios'

// 获取七牛云上传token
export function getToken() {
    return request({
        url: '/token',
        method: 'get',
    })
}

// 上传图片 base64
export function qiniuUpload(keyname,data) {
    return request({
        url: '"key/'+keyname,
        method: 'post',
        source : 'qiniu',
        data,
        headers: {
            'Content-Type': 'application/octet-stream',
            'Authorization': 'UpToken ' + store.getters.getUpToken
        }
    })
}


// 使用formData上传
export function uploadImg({key,file}) {
    let data = new FormData();
    data.append('token', store.getters.getUpToken);
    data.append('key',key);
    data.append('file',file);
    return axios.post('https://upload.qiniup.com', data,).then(res => res.data)
}
