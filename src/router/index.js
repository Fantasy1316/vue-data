import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: 'home' */ '../views/Home.vue')
  },
  {
    path: '/bmap',
    name: 'BMap',
    component: () => import(/* webpackChunkName: 'bmap' */ '../views/BMap.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
