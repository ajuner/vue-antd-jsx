import AppLayout from '@/layout/index'

const asyncRoutes = [{
    path: '/',
    name: 'menu',
    redirect: '/dashboard',
    component: AppLayout,
    meta: { title: 'menu'},
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: { title: 'Dashboard'},
        component: () => import('@/views/dashboard/index')
      },
      {
        path: '/tool',
        name: 'tool',
        meta: { title: 'Tool'},
        component: () => import('@/views/tool/index')
      },
      {
        path: '/table',
        name: 'table',
        meta: { title: 'Table'},
        component: () => import('@/views/table/index')
      }
    ]
}]

export default asyncRoutes