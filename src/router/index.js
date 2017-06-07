import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/Test'

Vue.use(Router)

const routesx = [
  { path: '/foo', component: Hello },
  { path: '/bar', component: Test }
]

export default new Router({
  routes: routesx
})
