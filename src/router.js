import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/newslist',
      name: 'newslist',
      component: () => import(/* webpackChunkName: "newslist" */ './views/news/NewsList.vue')
    },
    {
      path: '/newsdetail/:id',
      name: 'newsdetail',
      component: () => import(/* webpackChunkName: "newsdetail" */ './views/news/NewsDetail.vue')
    },
    {
      path: '/goodslist',
      name: 'goodslist',
      component: () => import(/* webpackChunkName: "goodslist" */ './views/goods/GoodsList.vue')
    },
    {
      path: '/goodsdetail/:id',
      name: 'goodsdetail',
      component: () => import(/* webpackChunkName: "goodsdetail" */ './views/goods/GoodsDetail.vue')
    }
  ]
})
