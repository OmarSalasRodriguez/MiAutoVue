import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { authRoutes } from './auth.routes'
import { organizationRoutes } from './organization.routes'

const routes: RouteRecordRaw[] = [
  ...authRoutes,
  ...organizationRoutes,
  {
    path: '/:pathMatch(.*)*',
    redirect: '/auth/login',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
