<template>
  <ul class="dropdown__list">
    <li v-for="category in categories" :key="category.id">
      <DropdownItem :category="category" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { Category } from '@/models'
import DropdownItem from './DropdownItem.vue'

const props = defineProps<{
  categories: Category[]
}>()
</script>

<style scoped>
.dropdown__list {
  position: absolute;
  top: 4rem;
  z-index: 200;
  background-color: white;
  width: 14rem;
  font-size: 1.4rem;
  font-weight: 500;
  border: 0.1rem solid oklch(0.928 0.006 264.531);
  border-radius: 0.8rem;
  padding: 0.4rem 0;
}
</style>
