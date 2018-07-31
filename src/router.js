import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home'
import Instructions from './views/Instructions/Instructions'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/instructions',
      name: 'instructions',
      component: Instructions
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
