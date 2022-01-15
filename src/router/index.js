import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import AboutMe from '../views/AboutMe.vue'
import Education from '../views/Education.vue'
import Skills from '../views/Skills.vue'

const routes = [
  {
    path: '/',
    name: 'AboutMe',
    component: AboutMe
  },
  {
    path: '/education',
    name: 'Education',
    component: Education
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
