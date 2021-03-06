import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',     
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/medicos',
      name: 'medicos',     
      component: () => import(/* webpackChunkName: "about" */ './views/Medicos.vue')
    },
    {
      path: '/index',
      name: 'index',     
      component: () => import(/* webpackChunkName: "about" */ './views/Index.vue')
    },
    {
      path: '/in',
      name: 'in',
      beforeEnter(to, from, next) {
          // Put the full page url including the protocol http(s) below
          window.location ="http://localhost/carp/examples/index.html"
      }
  },
  {
    path: '/cargar', /* cargar archivo xml y convertirlo a json */
    name: 'cargar',     
    component: () => import(/* webpackChunkName: "about" */ './views/cargar.vue')
  },
  {
    path: '/editor3',
    name: 'editor3',     
    component: () => import(/* webpackChunkName: "about" */ './views/editor3.vue')
  },
  {
    path: '/editor4',
    name: 'editor4',     
    component: () => import(/* webpackChunkName: "about" */ './views/editor4.vue')
  },
  {
    path: '/test',
    name: 'test',     
    component: () => import(/* webpackChunkName: "about" */ './views/test.vue')
  },
  {
    path: '/test-tree',
    name: 'test-tree',     
    component: () => import(/* webpackChunkName: "about" */ './views/test-tree.vue')
  }
  ]
})
