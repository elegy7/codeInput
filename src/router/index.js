import Vue from 'vue'
import Router from 'vue-router'
import IndexLay from '@/view/Pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexLay
    }
  ]
})
