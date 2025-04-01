<script setup lang="ts">
import SearchInput from '../ui/SearchInput.vue'
</script>

<template>
  <div class="hero-banner">
    <div class="title">
      <h2>Welcome.</h2>
      <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
      <SearchInput />
    </div>
  </div>
</template>

<style scoped>
.hero-banner {
  padding: 3rem 4rem;
}
.title {
  width: 100%;
  margin-bottom: 2rem;
}
h2 {
  font-size: 4.8rem;
  font-weight: 700;
}
h3 {
  font-size: 3.2rem;
  font-weight: 600;
}
</style>
