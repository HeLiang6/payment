import Vue from 'vue'
import Router from 'vue-router'
import Payment from '@/views/payment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'payment',
      component: Payment
    }
  ]
})
