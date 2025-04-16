<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import MovieList from '@/components/movies/MovieList.vue'
import { useMovies } from '@/composables/movies/useMovies'

const route = useRoute()
const category = computed(() => route.params.category as string)

const { movies, loading, error, fetchMovies } = useMovies()

onMounted(() => {
  fetchMovies(category.value)
})

watch(
  () => route.fullPath,
  () => {
    fetchMovies(category.value)
  },
)
</script>

<template>
  <div>
    <h1>{{ category }} Movies</h1>
    <p v-if="loading">Loading...</p>
    <p v-else-if="error">{{ error }}</p>
    <MovieList v-else :movies="movies" />
  </div>
</template>
