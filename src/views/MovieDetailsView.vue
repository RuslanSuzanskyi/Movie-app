<script setup lang="ts">
import Container from '@/components/layouts/Container.vue'
import { useMovieDetails } from '@/composables/useMovieDetails'
import { onMounted } from 'vue'

const { movie, loading, error, fetchMovieDetails } = useMovieDetails()

onMounted(fetchMovieDetails)
</script>

<template>
  <Container>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else-if="movie">
      <h1>{{ movie.title }}</h1>
      <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" />
    </div>
  </Container>
</template>
