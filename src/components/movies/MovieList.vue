<script setup lang="ts">
import type { Movie } from '@/models'
import MovieCard from './MovieCard.vue'

const props = defineProps<{
  movies: Movie[]
}>()
</script>

<template>
  <ul class="movie-list">
    <li v-for="movie in movies" :key="movie.id">
      <MovieCard :movie="movie" />
    </li>
  </ul>
</template>

<style scoped>
.movie-list {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
}
@media (max-width: 1200px) {
  .movie-list {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 900px) {
  .movie-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .movie-list {
    grid-template-columns: 1fr;
  }
}
</style>
