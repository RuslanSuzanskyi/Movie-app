<script setup lang="ts">
import type { Movie } from '@/models/types'

const props = defineProps<{
  movie: Movie
  isLoading?: boolean
}>()
</script>

<template>
  <article class="movie-card">
    <template v-if="isLoading">
      <div class="movie-card__skeleton"></div>
      <div class="movie-card__skeleton-title"></div>
    </template>

    <template v-else>
      <RouterLink :to="`/movie/${movie.id}`">
        <img
          :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
          :alt="movie.title"
          class="movie-card__img"
        />
      </RouterLink>
      <div class="movie-card__details">
        <RouterLink :to="`/movie/${movie.id}`" class="movie-card__title">
          {{ movie.title }}
        </RouterLink>
      </div>
    </template>
  </article>
</template>

<style scoped>
.movie-card {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  background: white;
  border: 0.1rem solid oklch(0.928 0.006 264.531);
  border-bottom: none;
  border-radius: 0.8rem;
  height: 100%;
  box-shadow: 0 0.2rem 0.8rem rgb(0 0 0 / 0.1);
}
.movie-card__img {
  object-fit: cover;
  width: 100%;
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
}
.movie-card__details {
  padding: 2rem 1rem;
  text-align: center;
}
.movie-card__title {
  font-size: 2rem;
  font-weight: bold;
}
</style>
