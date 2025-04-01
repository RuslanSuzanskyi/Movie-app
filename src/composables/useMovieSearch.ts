import type { Movie } from '@/models'
import { api } from '@/services/api'
import { ref, watch } from 'vue'

export const useMovieSearch = () => {
  const searchQuery = ref('')
  const results = ref<Movie[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchMoviesByQuery = async (query: string) => {
    if (!query) {
      return (results.value = [])
    }

    loading.value = true
    error.value = null

    try {
      const response = await api('/3/search/movie', {
        params: { query },
      })
      results.value = response?.data.results
    } catch (err) {
      console.error('Error searching movies:', err)
      error.value = 'An error occurred while searching'
    } finally {
      loading.value = false
    }
  }

  let timeout: ReturnType<typeof setTimeout> | null = null
  watch(searchQuery, (newQuery) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      fetchMoviesByQuery(newQuery)
    }, 300)
  })

  return { searchQuery, results, loading, error, fetchMoviesByQuery }
}
