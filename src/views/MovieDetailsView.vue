<script setup lang="ts">
import Container from '@/components/layouts/Container.vue'
import { useMovieDetails } from '@/composables/movies/useMovieDetails'
import { onMounted } from 'vue'

const { movie, loading, error, fetchMovieDetails } = useMovieDetails()

onMounted(fetchMovieDetails)
</script>

<template>
  <Container>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>

    <div v-else-if="movie" class="poster">
      <div>
        <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" />
      </div>
      <div class="poster_wrapper">
        <div class="poster_title">
          <h2>{{ movie.title }}</h2>
          <span>{{ movie.release_date }}</span>
        </div>
        <div class="poster_info">
          <p>{{ movie.genre_names }}</p>
          <div>{{ movie.vote_average }}</div>
          <div class="poster_info">
            <h3>Overview</h3>
            <p>{{ movie.overview }}</p>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>

<style scoped>
.poster {
  display: flex;
  flex-direction: row;
}
</style>
