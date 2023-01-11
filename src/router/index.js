import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/now-tours',
    name: 'Now',
    component: () => import(/* webpackChunkName: "about" */ '../views/Now.vue')
  },
  {
    path: '/search',
    name: 'SearchResults',
    component: () => import(/* webpackChunkName: "about" */ '../views/SearchResults.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
