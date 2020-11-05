// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import qs from 'qs'
import {setToken,getToken,removeToken} from './util/CacheUtil.js'
import {httpGET, httpPOST} from './util/HttpUtil.js'


Vue.use(ElementUI)
Vue.prototype.$axios = axios
Vue.prototype.$httpGET = httpGET
Vue.prototype.$httpPOST = httpPOST

Vue.prototype.$setToken = setToken
Vue.prototype.$getToken = getToken
Vue.prototype.$removeToken = removeToken
Vue.prototype.qs = qs

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
