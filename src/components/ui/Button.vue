<template>
  <button :class="['btn', variantClass]">
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  label: string
  variant: 'primary' | 'secondary' | 'danger' | 'menu-btn'
}>()

const variantClass = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'btn--primary'
    case 'secondary':
      return 'btn--secondary'
    case 'danger':
      return 'btn--danger'
    case 'menu-btn':
      return 'btn--menu-btn'
    default:
      return ''
  }
})
</script>

<style>
.btn {
  cursor: pointer;
}
.btn--menu-btn {
  padding: 0.8rem;
  background-color: transparent;
  gap: 0.4rem;
  border: none;
}
</style>
