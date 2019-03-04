import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import {
    SETPTOKEN,
    SETFILELIST
} from './mutation-types'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        requestUrl: 'http://api.hecun.site/',
        qiNiuUrl: "http://upload.qiniup.com/putb64/-1/",
        domain: 'http://img.hecun.site/',
        upToken: '',
        fileList: [],
    },
    mutations: {
        [SETPTOKEN](state, ptoken) {
            state.upToken = ptoken
        },
        [SETFILELIST](state, item) {
            state.fileList.push(item)
        }
    },
    actions,
    getters
})