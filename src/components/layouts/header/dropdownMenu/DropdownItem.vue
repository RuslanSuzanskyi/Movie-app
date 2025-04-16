<template>
  <RouterLink :to="`/movie/${category.path}`" class="dropdown__link">
    {{ category.name }}
  </RouterLink>
</template>

<script setup lang="ts">
import type { Category } from '@/models/types'
import { RouterLink } from 'vue-router'

const props = defineProps<{
  category: Category
}>()
</script>

<style scoped>
.dropdown__link {
  padding: 0.8rem;
  display: flex;
  transition: all 0.3s ease-out;
}
.dropdown__link:hover {
  background-color: oklch(0.928 0.006 264.531);
}
.dropdown__link:active {
  background-color: oklch(0.488 0.243 264.376);
  color: white;
}
</style>
