<template>
  <input
    :type="type"
    :value="modelValue"
    :placeholder="placeholder"
    :class="customClass"
    @input="handleInput"
  />
</template>

<script setup lang="ts">
import type { Input } from '@/models/types'

const props = defineProps<Input>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const handleInput = (event: Event) => {
  const value = (event.target as HTMLInputElement).value
  emit('update:modelValue', value)
}
</script>
