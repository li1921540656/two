import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Products from './views/Products.vue'
import Admin from './views/Admin.vue'
import Vip from './views/Vip.vue'
import Life from './views/Life.vue'
import Cominfo from './views/cominfo'
import Shopcar from './views/shopcar'
import Shop from './views/Shop'
import place from './views/place'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/products',
      component: Products
    },
    {
      path: '/shop',
      component: Shop
    },
    {
      path: '/admin',
      component: Admin
    },
    {
      path: '/vip',
      component: Vip
    },
    {
      path: '/life',
      component: Life
    },
    {
      path: '/place',
      name: 'place',
      component: place
    },
    {
      path: '/about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/cominfo',
      component: Cominfo
    },
    {
      path:'/shopcar',
      component:Shopcar
    }, {
      path: '/login',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: () => import('./views/Login.vue')
    }, {
      path: '/regs',
      // name: 'login',
      component: () => import('./views/Regs.vue')
    },{
      path: '/center',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: () => import('./views/Center.vue')
    },
  ]
})
