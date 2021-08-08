import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from '@/components/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/buscar-auxilio',
    name: 'Search',
    component: Search
  },
  {
    path: '/',
    redirect: '/buscar-auxilio'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
