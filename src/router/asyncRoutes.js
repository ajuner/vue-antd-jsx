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
},{
  path: '/nothing',
  name: 'nothing',
  redirect: '/nothing-1',
  component: AppLayout,
  meta: { title: 'nothing'},
  children: [
    {
      path: '/nothing-1',
      name: 'nothing-1',
      meta: { title: 'nothing-1'},
      component: () => import('@/views/nothing/noting-1/index')
    },
    {
      path: '/nothing-2',
      name: 'nothing-2',
      meta: { title: 'nothing-2'},
      component: () => import('@/views/nothing/noting-2/index')
    }
  ]
}]

export default asyncRoutes