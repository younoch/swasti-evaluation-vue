// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const HomePage = () => import('@/components/HomePage.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
