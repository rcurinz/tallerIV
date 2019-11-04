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
      component: () => import(/* webpackChunkName: "about" */ './views/index.vue')
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
    path: '/cargar',
    name: 'cargar',     
    component: () => import(/* webpackChunkName: "about" */ './views/cargar.vue')
  },
  ]
})
