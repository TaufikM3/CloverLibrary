import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Kategori from '../views/kategoriView.vue'
import TambahPostingan from '../views/tambahPostingan.vue'
import Update from '../views/updateView.vue'
import Pendaftaran from '../views/pendaftaranView.vue'
import Profile from '../views/profileView.vue'


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
      path: '/tambahPostingan',
      name: 'tambahPostingan',
      component: TambahPostingan,
    },
    {
      path: '/updates',
      name: 'Update',
      component: Update,
    },
    {
      path: '/pendaftaran',
      name: 'Pendaftaran',
      component: Pendaftaran,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
  ]
})

export default router
