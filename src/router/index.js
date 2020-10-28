import { createRouter, createWebHistory } from 'vue-router'

import asyncRoutes from './asyncRoutes'

const defaultRoutes = [
  {
    path: '/login',
    name: 'login',
    meta: { title: 'login'},
    component: () => import('@/views/login/index')
  },
  {
    path: '/404',
    name: 404,
    meta: { title: '404'},
    component: () => import('@/views/404/index')
  }
]

const routes = defaultRoutes.concat(asyncRoutes)
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
