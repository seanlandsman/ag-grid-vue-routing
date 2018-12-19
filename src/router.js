import Vue from 'vue'
import Router from 'vue-router'
import LinkGrid from './views/LinkGrid.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'linkGrid',
      component: LinkGrid
    },
    {
      path: '/price',
      name: 'price',
      // route level code-splitting
      // this generates a separate chunk (price.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "price" */ './views/PriceGrid.vue')
    }
  ]
})
