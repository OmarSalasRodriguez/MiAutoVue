import type { RouteRecordRaw } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

export const organizationRoutes: RouteRecordRaw[] = [
  {
    path: '/organizations',
    component: MainLayout,
    children: [
      {
        path: '',
        component: () => import('@/features/organizations/pages/OrganizationList.vue'),
      },
    ],
  },
]
