<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { fetchMovies } from '@/composables/useMovies'
import MovieList from '@/components/movies/MovieList.vue'
import Container from '@/components/layouts/Container.vue'
import HeroSection from '@/components/hero/HeroSection.vue'

const moviesNowPlaying = ref([])
const moviesPopular = ref([])
const moviesTopRated = ref([])
const moviesUpcoming = ref([])

const loadMovies = async () => {
  moviesNowPlaying.value = (await fetchMovies('now_playing')).movies.value
  moviesPopular.value = (await fetchMovies('popular')).movies.value
  moviesTopRated.value = (await fetchMovies('top_rated')).movies.value
  moviesUpcoming.value = (await fetchMovies('upcoming')).movies.value
}

onMounted(() => {
  loadMovies()
})
</script>

<template>
  <HeroSection />

  <Container>
    <section>
      <h2>Now Playing</h2>
      <MovieList :movies="moviesNowPlaying" />
    </section>

    <section>
      <h2>Popular</h2>
      <MovieList :movies="moviesPopular" />
    </section>

    <section>
      <h2>Top Rated</h2>
      <MovieList :movies="moviesTopRated" />
    </section>

    <section>
      <h2>Upcoming Movies</h2>
      <MovieList :movies="moviesUpcoming" />
    </section>
  </Container>
</template>

<style scoped>
section {
  padding-top: 3rem;
}
h2 {
  font-size: 2.4rem;
}
</style>
