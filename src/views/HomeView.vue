<script setup lang="ts">
import { onMounted } from 'vue'
import Container from '@/components/layouts/Container.vue'
import HeroSection from '@/components/hero/HeroSection.vue'
import MovieSwiper from '@/components/movies/MovieSwiper.vue'
import { useMovies } from '@/composables/movies/useMovies'

const {
  movies: moviesNowPlaying,
  loading: loadingNowPlaying,
  error: errorNowPlaying,
  fetchMovies: fetchNowPlaying,
} = useMovies()

const {
  movies: moviesPopular,
  loading: loadingPopular,
  error: errorPopular,
  fetchMovies: fetchPopular,
} = useMovies()

const {
  movies: moviesTopRated,
  loading: loadingTopRated,
  error: errorTopRated,
  fetchMovies: fetchTopRated,
} = useMovies()

const {
  movies: moviesUpcoming,
  loading: loadingUpcoming,
  error: errorUpcoming,
  fetchMovies: fetchUpcoming,
} = useMovies()

onMounted(() => {
  fetchNowPlaying('now_playing')
  fetchPopular('popular')
  fetchTopRated('top_rated')
  fetchUpcoming('upcoming')
})
</script>

<template>
  <HeroSection />

  <Container>
    <section>
      <h2>Now Playing</h2>
      <p v-if="loadingNowPlaying"></p>
      <p v-else-if="errorNowPlaying">{{ errorNowPlaying }}</p>
      <MovieSwiper v-else :movies="moviesNowPlaying" />
    </section>

    <section>
      <h2>Popular</h2>
      <p v-if="loadingPopular"></p>
      <p v-else-if="errorPopular">{{ errorPopular }}</p>
      <MovieSwiper v-else :movies="moviesPopular" />
    </section>

    <section>
      <h2>Top Rated</h2>
      <p v-if="loadingTopRated"></p>
      <p v-else-if="errorTopRated">{{ errorTopRated }}</p>
      <MovieSwiper v-else :movies="moviesTopRated" />
    </section>

    <section>
      <h2>Upcoming Movies</h2>
      <p v-if="loadingUpcoming"></p>
      <p v-else-if="errorUpcoming">{{ errorUpcoming }}</p>
      <MovieSwiper v-else :movies="moviesUpcoming" />
    </section>
  </Container>
</template>

<style scoped>
section {
  padding-top: 3rem;
}

h2 {
  font-size: 2.4rem;
  font-weight: 500;
}
</style>
