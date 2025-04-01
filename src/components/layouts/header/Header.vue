<template>
  <header class="header">
    <Container>
      <nav>
        <DropdownMenu
          v-for="item in navItems"
          :key="item.title"
          :title="item.title"
          :categories="item.categories"
        />
      </nav>
    </Container>
  </header>
</template>

<script setup lang="ts">
import Container from '@/components/layouts/Container.vue'
import { ref } from 'vue'
import DropdownMenu from './dropdownMenu/DropdownMenu.vue'
import { useMoviesCategories } from '@/composables/useCategories'

const { movieCategories, tvCategories, peopleCategories, moreCategories } = useMoviesCategories()

const navItems = ref([
  { title: 'Movies', categories: movieCategories },
  { title: 'TV Shows', categories: tvCategories },
  { title: 'People', categories: peopleCategories },
  { title: 'More', categories: moreCategories },
])
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: white;
  width: 100%;
  height: 6.4rem;
  display: flex;
  align-items: center;
}
</style>
