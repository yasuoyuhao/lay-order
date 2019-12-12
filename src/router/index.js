// vue
import Vue from 'vue'
import Router from 'vue-router'
//Customer
import Customer from '@/components/Customer/Customer'
////Customer Product
import Product from '@/components/Customer/Product'
import Cart from '@/components/Customer/Cart'
import Order from '@/components/Customer/Order'
import OrderInfo from '@/components/Customer/OrderInfo'
import ResultIn from '@/components/Customer/ResultIn'
import ResultOut from '@/components/Customer/ResultOut'
////Customer Member
import Login from '@/components/Customer/Member/Login'
import Member from '@/components/Customer/Member/Member'
import MemberCoupon from '@/components/Customer/Member/MemberCoupon'
import Register from '@/components/Customer/Member/Register'

//Counter
import Counter from '@/components/Counter/Counter'
//Kitchen
import Kitchen from '@/components/Kitchen/Kitchen'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/',
      name: 'Customer',
      component: Customer,
      children: [
        {
          path: '/',
          name: 'Product',
          component: Product
        },
        {
          path: '/Cart',
          name: 'Cart',
          component: Cart
        },
        {
          path: '/Order',
          name: 'Order',
          component: Order
        },
        {
          path: '/OrderInfo',
          name: 'OrderInfo',
          component: OrderInfo
        },
        {
          path: '/ResultIn',
          name: 'ResultIn',
          component: ResultIn
        },
        {
          path: '/ResultOut',
          name: 'ResultOut',
          component: ResultOut
        },
        {
          path: '/register',
          name: 'Register',
          component: Register
        },
        {
          path: '/login',
          name: 'Login',
          component: Login
        },
        {
          path: '/member',
          name: 'Member',
          component: Member,
          meta: {
            requiresLogin: true
          }
        },
        {
          path: '/coupon',
          name: 'MemberCoupon',
          component: MemberCoupon,
          meta: {
            requiresLogin: true
          }
        },
      ]
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter
    },
    {
      path: '/kitchen',
      name: 'Kitchen',
      component: Kitchen
    },
  ]
})
