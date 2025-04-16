<template>
  <form @submit.prevent="handleSearch">
    <Input
      type="text"
      v-model="searchQuery"
      placeholder="Search for a movie, tv show, person..."
      class="search-input"
    />
    <Button type="submit" variant="primary" label="Search" />
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
import { useMovieSearch } from '@/composables/movies/useMovieSearch'
import Button from './Button.vue'
import Input from './Input.vue'

const { searchQuery, results, loading, error, fetchMoviesByQuery } = useMovieSearch()

const handleSearch = () => {
  fetchMoviesByQuery(searchQuery.value)
}
</script>

<style scoped>
form {
  max-width: 100%;
  margin: 0 auto;
  color: oklch(0.21 0.034 264.665);
  position: relative;
}
input {
  width: 100%;
  border: 0.1rem solid oklch(0.928 0.006 264.531);
  border-radius: 0.8rem;
  padding: 1.6rem;
  background-color: #f9fafb;
  outline: none;
  transition:
    border-color 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
}
input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
}
button {
  color: white;
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  background-color: #1d4ed8;
  font-weight: 500;
  padding: 0.8rem 1.6rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}
button:hover {
  background-color: #1e40af;
}
button:focus {
  outline: none;
  box-shadow: 0 0 0 0.4rem rgba(59, 130, 246, 0.5);
}
</style>
