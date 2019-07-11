import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/community',
      name: 'community',
      component: () => import(/* webpackChunkName: "community" */ './views/Community.vue')
    },
    {
      path: '/company',
      name: 'company',
      component: () => import(/* webpackChunkName: "company" */ './views/Company.vue')
    },
    {
      path: '/:mode/:area',
      name: 'area',
      props: true,
      component: () => import(/* webpackChunkName: "area" */ './views/Area.vue')
    }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})
