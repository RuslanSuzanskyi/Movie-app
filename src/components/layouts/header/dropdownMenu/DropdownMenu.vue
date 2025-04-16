<template>
  <div class="dropdown" @mouseenter="isOpen = true" @mouseleave="isOpen = false">
    <Button :label="title" variant="menu-btn" />
    <DropdownList v-if="isOpen" :categories="categories" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DropdownList from './DropdownList.vue'
import type { Category } from '@/models/types'
import Button from '@/components/ui/Button.vue'

const props = defineProps<{
  title: string
  categories: Category[]
}>()

const isOpen = ref(false)
</script>

<style scoped>
.dropdown {
  display: inline-flex;
  position: relative;
  align-items: center;
  padding: 0.8rem 0;
}
</style>
