<template>
  <form @submit.prevent="handleSearch">
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search for a movie, tv show, person..."
      class="search-input"
    />
    <button type="submit">Search</button>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <ul v-if="results.length">
      <li v-for="movie in results" :key="movie.id">
        {{ movie.title }}
      </li>
    </ul>
  </form>
</template>

<script setup lang="ts">
import { useMovieSearch } from '@/composables/useMovieSearch'

const { searchQuery, results, loading, error, fetchMoviesByQuery } = useMovieSearch()

const handleSearch = () => {
  fetchMoviesByQuery(searchQuery.value)
}
</script>
