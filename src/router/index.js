import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home'
import {getToken} from "../util/CacheUtil";

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !getToken()) {
    next({name: 'login'})
  } else {
    next()
  }
})
router.afterEach((to, from) => {

})

export default router
