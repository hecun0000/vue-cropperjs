import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {

      path:'/',
      redirect:'/common'
    },
    {
      path: '/common',
      name: 'common',
      component: () => import('./views/common.vue')
    },
    {
      path: '/cropper',
      name: 'cropper',
      component: () => import('./views/cropper.vue')
    }
  ]
})
