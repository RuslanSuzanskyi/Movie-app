import { ref } from 'vue'
import { api } from '@/services/api'

export const useMovies = () => {
  const movies = ref([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchMovies = async (category: string) => {
    loading.value = true
    error.value = null

    try {
      const response = await api(`/3/movie/${category}`)
      movies.value = response?.data.results
    } catch (err) {
      console.error(`Error fetching movie/${category}:`, err)
      error.value = 'An error occurred while fetching data'
    } finally {
      loading.value = false
    }
  }

  return { movies, loading, error, fetchMovies }
}
