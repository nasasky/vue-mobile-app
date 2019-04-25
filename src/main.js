import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'reset-css'
import moment from 'moment'

import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)

Vue.config.productionTip = false

// 注册一个全局过滤器，使用 moment 过滤时间格式
Vue.filter('fmtTime', function (time) {
  let addTime = moment(time).format('YYYY-MM-DD')
  return addTime
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
