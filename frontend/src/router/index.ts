import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Kategori from '../views/kategoriView.vue'
import Update from '../views/updateView.vue'
import Register from '../views/Pendaftaran/registerView.vue'
import Login from '../views/Pendaftaran/loginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/kategori',
      name: 'Kategori',
      component: Kategori,
    },
    {
      path: '/updates',
      name: 'Update',
      component: Update,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ]
})

export default router
