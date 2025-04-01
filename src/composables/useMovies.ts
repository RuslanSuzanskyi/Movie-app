import { ref } from 'vue'
import { api } from '@/services/api'

export const fetchMovies = async (category: string) => {
  const movies = ref([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  loading.value = true
  error.value = null

  try {
    const response = await api(`/3/movie/${category}`)
    movies.value = response?.data.results
  } catch (err) {
    console.error(`Error fetching ${category} movies:`, err)
    error.value = 'An error occurred while fetching data'
  } finally {
    loading.value = false
  }

  return { movies, loading, error }
}
