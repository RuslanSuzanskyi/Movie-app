<script setup lang="ts">
import HeroBanner from './HeroBanner.vue'
</script>

<template>
  <section class="hero">
    <HeroBanner />
  </section>
</template>

<style scoped>
.hero {
  width: 100%;
  display: flex;
  max-height: 36rem;
  min-height: 30rem;
  height: calc(100vh / 2.5);
  color: white;
  justify-content: center;
  align-items: center;
  background-image: image-set(
    url('https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/xcXALwBjdHIjrESpGVhghqj8fGT.jpg')
  );
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  padding: 0;
}
</style>
