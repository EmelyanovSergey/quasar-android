import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../pages/IndexPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
