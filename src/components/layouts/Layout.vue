<script setup lang="ts">
import Header from './header/Header.vue'
import Footer from './footer/Footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="page">
    <Header />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex-grow: 1;
}
</style>
