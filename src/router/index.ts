import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'hbout',
      component: About
    },
    {
      path: '/education',
      name: 'education',
      component: () => import('../views/Education.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/Projects.vue')
    },
    {
      path: '/publications',
      name: 'publications',
      component: () => import('../views/Publications.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    }
  ]
})

export default router
