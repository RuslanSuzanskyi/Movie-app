import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Layout from '@/components/layouts/Layout.vue'
import NotFound from '@/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: 'movie/:category',
          name: 'category',
          component: () => import('../views/CategoryView.vue'),
          props: true,
        },
        {
          path: 'movie/:id(\\d+)',
          name: 'movie-details',
          component: () => import('../views/MovieDetailsView.vue'),
          props: true,
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound,
      name: 'NotFound',
    },
  ],
})

export default router
