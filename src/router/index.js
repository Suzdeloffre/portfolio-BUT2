import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/technique',
    component: () => import('../views/TechniqueView.vue')
  },
  {
    path: '/suivi-projet',
    component: () => import('../views/SuiviProjectView.vue')
  },
  {
    path: '/integration',
    component: () => import('../views/IntegrationView.vue')
  }
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 })
})