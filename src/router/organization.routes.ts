import type { RouteRecordRaw } from 'vue-router'

export const organizationRoutes: RouteRecordRaw[] = [
  {
    path: '/organizations/:organizationId',
    children: [
      {
        path: '',
        component: () => import('@/features/organizations/pages/OrganizationList.vue'),
      },
    ],
  },
]
