import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store/store.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/summoner',
    name: 'Summoner',
    component: () => import("../views/Summoner.vue")
  },
  {
    path: '/error',
    name: 'Error',
    component: () => import("../views/Error.vue")
  },
  {
    path: '*',
    component: () => import("../views/NotFound.vue")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if ((to.name == 'Summoner' && store.state.items == '403')||(to.name == 'Summoner' && store.state.items == '404')) next({ name: 'Error' })
  else next()
})
router.beforeEach((to, from, next) => {
  if ((to.name == 'Error' && store.state.items != '403' && store.state.items != '404')) next({ name: 'Summoner' })
  else next()
})
export default router
