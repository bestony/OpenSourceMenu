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
    },
    {
      path: '/blank',
      name: 'blank',
      component: () => import(/* webpackChunkName: "blank" */ './views/Blank.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/pages/About.vue')
    },
    {
      path: '/author',
      name: 'author',
      component: () => import(/* webpackChunkName: "author" */ './views/pages/Author.vue')
    },
    {
      path: '/build_with',
      name: 'build_with',
      component: () => import(/* webpackChunkName: "build_with" */ './views/pages/BuildWith.vue')
    },
    {
      path: '/other',
      name: 'other_project',
      component: () => import(/* webpackChunkName: "other_project" */ './views/pages/Other.vue')
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})
