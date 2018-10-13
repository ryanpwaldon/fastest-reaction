import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home'
import Instructions from './views/Instructions/Instructions'
import Countdown from './views/Countdown/Countdown'
import Wait from './views/Gameplay/Wait/Wait'
import Tap from './views/Gameplay/Tap/Tap'
import Time from './views/Gameplay/Time/Time'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      path: '/countdown',
      name: 'countdown',
      component: Countdown
    },
    {
      path: '/gameplay/wait',
      name: 'wait',
      component: Wait
    },
    {
      path: '/gameplay/tap',
      name: 'tap',
      component: Tap
    },
    {
      path: '/gameplay/time',
      name: 'time',
      component: Time,
      props: true
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
