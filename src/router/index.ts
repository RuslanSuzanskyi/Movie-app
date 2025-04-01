import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Layout from '@/components/layouts/Layout.vue'
import MovieDetailsView from '@/views/MovieDetailsView.vue'
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
          path: 'movie/:id',
          name: 'movie-details',
          component: MovieDetailsView,
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
