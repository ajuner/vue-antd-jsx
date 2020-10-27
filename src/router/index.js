import { createRouter, createWebHistory } from 'vue-router'

import AppLayout from '@/layout/index'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/dashboard',
    component: AppLayout,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../views/dashboard/index')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/index')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
