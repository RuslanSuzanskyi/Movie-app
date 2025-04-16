<template>
  <swiper
    :modules="[SwiperNavigation]"
    :loop="true"
    :space-between="15"
    :navigation="true"
    class="movie-swiper"
    :breakpoints="{
      320: { slidesPerView: 1 },
      480: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 5 },
      1280: { slidesPerView: 6 },
    }"
  >
    <swiper-slide v-for="movie in movies" :key="movie.id" class="swiper-slide">
      <MovieCard :movie="movie" />
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation as SwiperNavigation } from 'swiper/modules'
import type { Movie } from '@/models/types'
import MovieCard from './MovieCard.vue'

defineProps<{
  movies: Movie[]
}>()
</script>

<style>
@import 'swiper/css';
@import 'swiper/css/navigation';
</style>

<style scoped>
.movie-swiper {
  width: 100%;
  padding: 1rem 0;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
}
</style>
