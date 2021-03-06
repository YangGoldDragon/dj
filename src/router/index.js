import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/Index'
import Login from '@/components/pages/Login'
import Search from '@/components/pages/Search'
import Category from '@/components/pages/Category'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
