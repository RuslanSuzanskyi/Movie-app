import { api } from '@/services/api'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

export const useMovieDetails = () => {
  const route = useRoute()
  const movie = ref<any>(null)
  const loading = ref(true)
  const error = ref<string | null>(null)

  const fetchMovieDetails = async () => {
    loading.value = true
    error.value = null

    try {
      const response = await api(`/3/movie/${route.params.id}`)
      movie.value = response?.data
    } catch (err) {
      error.value = 'Failed to fetch movie details'
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchMovieDetails)

  return { movie, loading, error, fetchMovieDetails }
}
