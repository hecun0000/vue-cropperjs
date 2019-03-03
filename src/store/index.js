import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    requestUrl: 'http://api.hecun.site/',
    qiNiuUrl: "http://upload.qiniup.com/putb64/-1/",
    domain: 'http://img.hecun.site/',
    upToken: '',
  },
  mutations: {
    SETPTOKEN(state, ptoken) {
      state.upToken = ptoken
    }
  },
  actions: {
    setPtoken({ commit}, token ) {
      commit('SETPTOKEN', token)
    }
  }
})
